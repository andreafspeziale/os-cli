import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { LoggerService } from '../../logger';
import { IndicesService } from '../indices.service';

@SubCommand({ name: 'get', description: 'get index', aliases: ['g'] })
export class GetCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly indicesService: IndicesService,
  ) {
    super();
    this.logger.setContext(GetCommand.name);
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

    try {
      const res = await this.indicesService.get(options.index);

      this.logger.log('Index successfully retrieved', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while getting index', {
        fn: this.run.name,
        index: options.index,
        name: error.name,
        body: error.meta.body,
        statusCode: error.meta.statusCode,
      });
    }
  }
}
