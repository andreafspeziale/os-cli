import {
  SubCommand,
  CommandRunner,
  Option,
  InquirerService,
} from 'nest-commander';
import { LoggerService } from '../../logger';
import { IndicesService } from '../indices.service';

@SubCommand({ name: 'delete', description: 'delete index', aliases: ['dl'] })
export class DeleteIndexCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly indicesService: IndicesService,
    private readonly inquirer: InquirerService,
  ) {
    super();
    this.logger.setContext(DeleteIndexCommand.name);
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

    const choice = (
      await this.inquirer.ask<{ choice: 'y' | 'n' }>('delete-questions', {})
    ).choice;

    if (choice === 'y') {
      try {
        const res = await this.indicesService.delete(options.index);

        this.logger.log('Index successfully deleted', {
          fn: this.run.name,
          res,
        });
      } catch (error) {
        this.logger.error('Error while deleting index', {
          fn: this.run.name,
          index: options.index,
          name: error.name,
          body: error.meta.body,
          statusCode: error.meta.statusCode,
        });
      }
    }
  }
}
