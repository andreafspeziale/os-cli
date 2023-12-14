import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { LoggerService } from '../../logger';
import { AliasesService } from '../aliases.service';

@SubCommand({ name: 'get', description: 'get alias', aliases: ['g'] })
export class GetAliasCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly aliasesService: AliasesService,
  ) {
    super();
    this.logger.setContext(GetAliasCommand.name);
  }

  @Option({
    flags: '-a, --alias, <string>',
    description: 'alias name',
    required: true,
  })
  parseAlias(val: string): string {
    return val;
  }

  async run(passedParam: string[], options: { alias: string }): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    try {
      const res = await this.aliasesService.get(options.alias);

      this.logger.log('Alias successfully retrieved', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while getting alias', {
        fn: this.run.name,
        alias: options.alias,
        name: error.name,
        body: error.meta.body,
        statusCode: error.meta.statusCode,
      });
    }
  }
}
