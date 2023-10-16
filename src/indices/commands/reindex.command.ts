import {
  SubCommand,
  CommandRunner,
  Option,
  InquirerService,
} from 'nest-commander';
import { LoggerService } from '../../logger';
import { IndicesService } from '../indices.service';

@SubCommand({ name: 'reindex', description: 'reindex docs', aliases: ['ri'] })
export class ReIndexCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly indicesService: IndicesService,
    private readonly inquirer: InquirerService,
  ) {
    super();
    this.logger.setContext(ReIndexCommand.name);
  }

  @Option({
    flags: '-i, --index, <string>',
    description: 'source index name',
    required: true,
  })
  parseIndex(val: string): string {
    return val;
  }

  @Option({
    flags: '-ti, --target-index, <string>',
    description: 'target index name',
    required: true,
  })
  parseTargetIndex(val: string): string {
    return val;
  }

  async run(
    passedParam: string[],
    options: {
      index: string;
      targetIndex: string;
    },
  ): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    const { reindex } = await this.inquirer.ask<{
      reindex: 'y' | 'n';
    }>('reindex-questions', {});

    try {
      if (reindex === 'n') {
        process.exit(1);
      }

      const res = await this.indicesService.reindex(
        options.index,
        options.targetIndex,
      );

      this.logger.log('Reindex successfully started', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while reindexing', {
        fn: this.run.name,
        index: options.index,
        name: error.name,
        body: error.meta.body,
        statusCode: error.meta.statusCode,
      });
    }
  }
}
