import { SubCommand, CommandRunner } from 'nest-commander';
import { LoggerService } from '@andreafspeziale/nestjs-log';
import { AliasesService } from '../aliases.service';

@SubCommand({ name: 'list', description: 'list aliases', aliases: ['l'] })
export class ListAliasCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly aliasesService: AliasesService,
  ) {
    super();
    this.logger.setContext(ListAliasCommand.name);
  }

  async run(passedParam: string[], options?: Record<string, unknown>): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    try {
      const res = await this.aliasesService.list();

      this.logger.log('Alias list successfully retrieved', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while listing aliases', {
        fn: this.run.name,
        name: error.name,
        ...(error.meta.body ? { body: error.meta.body } : {}),
        ...(error.meta.statusCode ? { statusCode: error.meta.statusCode } : {}),
      });
    }
  }
}
