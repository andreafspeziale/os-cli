import { SubCommand, CommandRunner, Option, InquirerService } from 'nest-commander';
import { LoggerService } from '@andreafspeziale/nestjs-log';
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

  @Option({
    flags: '-s, --slices, [string]',
    description: 'number of slices for parallel reindexing (number or "auto")',
  })
  parseSlices(val: string): number | 'auto' {
    return val === 'auto' ? 'auto' : parseInt(val, 10);
  }

  @Option({
    flags: '-rps, --requests-per-second, [number]',
    description: 'throttle reindex requests per second',
  })
  parseRequestsPerSecond(val: string): number {
    return parseInt(val, 10);
  }

  @Option({
    flags: '-md, --max-docs, [number]',
    description: 'maximum number of documents to reindex',
  })
  parseMaxDocs(val: string): number {
    return parseInt(val, 10);
  }

  @Option({
    flags: '-bs, --batch-size, [number]',
    description: 'number of documents per scroll batch',
  })
  parseBatchSize(val: string): number {
    return parseInt(val, 10);
  }

  async run(
    passedParam: string[],
    options: {
      index: string;
      targetIndex: string;
      slices?: number | 'auto';
      requestsPerSecond?: number;
      maxDocs?: number;
      batchSize?: number;
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

    if (reindex === 'y') {
      try {
        const res = await this.indicesService.reindex(options);

        this.logger.log('Reindex successfully started', {
          fn: this.run.name,
          res,
        });
      } catch (error) {
        this.logger.error('Error while reindexing', {
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
