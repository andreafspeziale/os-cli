import {
  SubCommand,
  CommandRunner,
  Option,
  InquirerService,
} from 'nest-commander';
import { LoggerService } from '@andreafspeziale/nestjs-log';
import { IndicesService } from '../indices.service';

@SubCommand({ name: 'close', description: 'close index', aliases: ['cl'] })
export class CloseIndexCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly indicesService: IndicesService,
    private readonly inquirer: InquirerService,
  ) {
    super();
    this.logger.setContext(CloseIndexCommand.name);
  }

  @Option({
    flags: '-i, --index, <string>',
    description: 'index name',
    required: true,
  })
  parseIndex(val: string): string {
    return val;
  }

  async run(passedParam: string[], options: { index: string }): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    const { close } = await this.inquirer.ask<{
      close: 'y' | 'n';
    }>('close-questions', {});

    if (close === 'y') {
      try {
        const res = await this.indicesService.close(options.index);

        this.logger.log('Index successfully closed', {
          fn: this.run.name,
          res,
        });
      } catch (error) {
        this.logger.error('Error while closing index', {
          fn: this.run.name,
          index: options.index,
          name: error.name,
          ...(error.meta.body ? { body: error.meta.body } : {}),
          ...(error.meta.statusCode
            ? { statusCode: error.meta.statusCode }
            : {}),
        });
      }
    }
  }
}
