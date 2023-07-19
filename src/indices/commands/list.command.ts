import { SubCommand, CommandRunner } from 'nest-commander';
import { LoggerService } from '../../logger';
import { IndicesService } from '../indices.service';

@SubCommand({ name: 'list', description: 'list indices', aliases: ['l'] })
export class ListCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly indicesService: IndicesService,
  ) {
    super();
    this.logger.setContext(ListCommand.name);
  }

  async run(
    passedParam: string[],
    options?: Record<string, unknown>,
  ): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    try {
      const res = await this.indicesService.list();

      this.logger.log('Index list successfully retrieved', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while listing indices', {
        fn: this.run.name,
        name: error.name,
        body: error.meta.body,
        statusCode: error.meta.statusCode,
      });
    }
  }
}
