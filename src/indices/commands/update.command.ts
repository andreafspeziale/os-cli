import {
  SubCommand,
  CommandRunner,
  Option,
  InquirerService,
} from 'nest-commander';
import { LoggerService } from '../../logger';
import {
  validateAndParsePayloadOrExit,
  validateFileOrExit,
} from '../../common';
import { IndicesService } from '../indices.service';

@SubCommand({ name: 'update', description: 'update index', aliases: ['u'] })
export class UpdateCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly indicesService: IndicesService,
    private readonly inquirer: InquirerService,
  ) {
    super();
    this.logger.setContext(UpdateCommand.name);
  }

  @Option({
    flags: '-i, --index, <string>',
    description: 'index name',
    required: true,
  })
  parseIndex(val: string): string {
    return val;
  }

  @Option({
    flags: '-p, --payload, [string]',
    description: 'inline update index JSON payload',
  })
  parsePayload(val: string): Record<string, unknown> {
    return validateAndParsePayloadOrExit(val, this.logger);
  }

  @Option({
    flags: '-f, --file, [string]',
    description: 'update index JSON payload file path, takes always precedence',
  })
  parseFile(val: string): Record<string, unknown> {
    return validateAndParsePayloadOrExit(
      validateFileOrExit(val, this.logger),
      this.logger,
    );
  }

  async run(
    passedParam: string[],
    options: {
      index: string;
      payload?: Record<string, unknown>;
      file?: Record<string, unknown>;
    },
  ): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    if (!options.payload && !options.file) {
      process.stdout.write(this.command.helpInformation());

      process.exit(1);
    }

    const { close, open } = await this.inquirer.ask<{
      close: 'y' | 'n';
      open?: 'y' | 'n';
    }>('update-questions', {});

    try {
      if (close === 'y') {
        const res = await this.indicesService.close(options.index);

        this.logger.log('Index successfully closed', {
          fn: this.run.name,
          res,
        });
      }

      const res = await this.indicesService.update(
        options.index,
        options.payload || options.file || {},
      );

      this.logger.log('Index successfully updated', {
        fn: this.run.name,
        res,
      });

      if (open === 'y') {
        const res = await this.indicesService.open(options.index);

        this.logger.log('Index successfully opened', {
          fn: this.run.name,
          res,
        });
      }
    } catch (error) {
      this.logger.error('Error while updating index', {
        fn: this.run.name,
        index: options.index,
        name: error.name,
        body: error.meta.body,
        statusCode: error.meta.statusCode,
      });
    }
  }
}
