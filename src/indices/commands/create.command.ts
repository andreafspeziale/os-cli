import { z } from 'zod';
import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { LoggerService } from '../../logger';
import {
  validateAndParsePayloadOrExit,
  validateFileOrExit,
  ValidJsonPayloadFromString,
} from '../../common';
import { IndicesService } from '../indices.service';

@SubCommand({ name: 'create', description: 'create index', aliases: ['cr'] })
export class CreateIndexCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly indicesService: IndicesService,
  ) {
    super();
    this.logger.setContext(CreateIndexCommand.name);
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
    description: 'inline create index JSON payload',
  })
  parsePayload(val: string): Record<string, unknown> {
    return validateAndParsePayloadOrExit(
      val,
      ValidJsonPayloadFromString.pipe(z.object({}).passthrough()),
      this.logger,
    );
  }

  @Option({
    flags: '-f, --file, [string]',
    description: 'create index JSON payload file path, takes always precedence',
  })
  parseFile(val: string): Record<string, unknown> {
    return validateAndParsePayloadOrExit(
      validateFileOrExit(val, this.logger),
      ValidJsonPayloadFromString.pipe(z.object({}).passthrough()),
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

    try {
      const res = await this.indicesService.create(
        options.index,
        options.payload || options.file || {},
      );

      this.logger.log('Index successfully created', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while creating index', {
        fn: this.run.name,
        index: options.index,
        name: error.name,
        body: error.meta.body,
        statusCode: error.meta.statusCode,
      });
    }
  }
}
