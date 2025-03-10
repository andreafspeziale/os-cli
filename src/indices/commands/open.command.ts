import { SubCommand, CommandRunner, Option, InquirerService } from 'nest-commander';
import { LoggerService } from '@andreafspeziale/nestjs-log';
import { IndicesService } from '../indices.service';

@SubCommand({ name: 'open', description: 'open index', aliases: ['o'] })
export class OpenIndexCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly indicesService: IndicesService,
    private readonly inquirer: InquirerService,
  ) {
    super();
    this.logger.setContext(OpenIndexCommand.name);
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

    const { open } = await this.inquirer.ask<{
      open: 'y' | 'n';
    }>('open-questions', {});

    if (open === 'y') {
      try {
        const res = await this.indicesService.open(options.index);

        this.logger.log('Index opened successfully', {
          fn: this.run.name,
          res,
        });
      } catch (error) {
        this.logger.error('Error while opening index', {
          fn: this.run.name,
          index: options.index,
          name: error.name,
          ...(error.meta.body ? { body: error.meta.body } : {}),
          ...(error.meta.statusCode ? { statusCode: error.meta.statusCode } : {}),
        });
      }
    }
  }
}
