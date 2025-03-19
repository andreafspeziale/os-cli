import { z } from 'zod';
import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { LoggerService } from '@andreafspeziale/nestjs-log';
import { AliasesService } from '../aliases.service';
import {
  validateAndParseOrExit,
  validateFileOrExit,
  ValidJsonPayloadFromString,
} from '../../common';

@SubCommand({
  name: 'create',
  description: 'create alias or add index to it',
  aliases: ['cr'],
})
export class CreateAliasCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly aliasesService: AliasesService,
  ) {
    super();
    this.logger.setContext(CreateAliasCommand.name);
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

  @Option({
    flags: '-wr, --write-index, <boolean>',
    description: 'is write index',
    required: false,
    defaultValue: false,
  })
  parseisWriteIndex(val: string): boolean {
    return validateAndParseOrExit(val, z.enum(['true', 'false']), this.logger) === 'true';
  }

  @Option({
    flags: '-p, --payload, [string]',
    description: 'inline alias custom filter JSON payload',
  })
  parsePayload(val: string): Record<string, unknown> {
    return validateAndParseOrExit(
      val,
      ValidJsonPayloadFromString.pipe(z.object({}).passthrough()),
      this.logger,
    );
  }

  @Option({
    flags: '-f, --file, [string]',
    description: 'alias custom filter JSON payload file path',
  })
  parseFile(val: string): Record<string, unknown> {
    return validateAndParseOrExit(
      validateFileOrExit(val, this.logger),
      ValidJsonPayloadFromString.pipe(z.object({}).passthrough()),
      this.logger,
    );
  }

  async run(
    passedParam: string[],
    options: {
      alias: string;
      index: string;
      writeIndex: boolean;
      payload?: Record<string, unknown>;
      file?: Record<string, unknown>;
    },
  ): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    try {
      const res = await this.aliasesService.create(
        options.alias,
        options.index,
        options.writeIndex,
        options.payload || options.file || {},
      );

      this.logger.log('Alias successfully created', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while creating alias', {
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
