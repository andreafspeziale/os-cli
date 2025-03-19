import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { LoggerService } from '@andreafspeziale/nestjs-log';
import { AliasesService } from '../aliases.service';

@SubCommand({
  name: 'remove',
  description: 'remove index from alias',
  aliases: ['rm'],
})
export class RemoveAliasCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly aliasesService: AliasesService,
  ) {
    super();
    this.logger.setContext(RemoveAliasCommand.name);
  }

  @Option({
    flags: '-a, --alias, <string>',
    description: 'alias name',
    required: true,
  })
  parseAlias(val: string): string {
    return val;
  }

  @Option({
    flags: '-i, --index, <string>',
    description: 'index name',
    required: true,
  })
  parseIndex(val: string): string {
    return val;
  }

  async run(passedParam: string[], options: { alias: string; index: string }): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    try {
      const res = await this.aliasesService.remove(options.alias, options.index);

      this.logger.log('Alias successfully updated by removal', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while updating by removal alias', {
        fn: this.run.name,
        alias: options.alias,
        index: options.index,
        name: error.name,
        ...(error.meta.body ? { body: error.meta.body } : {}),
        ...(error.meta.statusCode ? { statusCode: error.meta.statusCode } : {}),
      });
    }
  }
}
