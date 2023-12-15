import {
  SubCommand,
  CommandRunner,
  Option,
  InquirerService,
} from 'nest-commander';
import {
  validateAndParseOrExit,
  validateFileOrExit,
  ValidJsonPayloadFromString,
} from '../../common';
import { LoggerService } from '../../logger';
import { DocumentsService } from '../documents.service';

@SubCommand({
  name: 'create',
  description: 'create document/s',
  aliases: ['cr'],
})
export class CreateDocumentsCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly documentsService: DocumentsService,
    private readonly inquirer: InquirerService,
  ) {
    super();
    this.logger.setContext(CreateDocumentsCommand.name);
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
    flags: '-p, --payload, [string]',
    description: 'inline create index JSON payload',
  })
  parsePayload(
    val: string,
  ): Record<string, unknown> | Record<string, unknown>[] {
    return validateAndParseOrExit(val, ValidJsonPayloadFromString, this.logger);
  }

  @Option({
    flags: '-f, --file, [string]',
    description: 'create index JSON payload file path',
  })
  parseFile(val: string): Record<string, unknown> | Record<string, unknown>[] {
    return validateAndParseOrExit(
      validateFileOrExit(val, this.logger),
      ValidJsonPayloadFromString,
      this.logger,
    );
  }

  async run(
    passedParam: string[],
    options: {
      index: string;
      payload?: Record<string, unknown> | Record<string, unknown>[];
      file?: Record<string, unknown> | Record<string, unknown>[];
    },
  ): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    if (!options.payload && !options.file) {
      process.stdout.write(this.command.helpInformation());

      process.exit(1);
    }

    let res: Record<string, unknown> | Record<string, unknown>[];
    const payload =
      options.payload ||
      (options.file as Record<string, unknown> | Record<string, unknown>[]);

    try {
      if (Array.isArray(payload)) {
        const bulk =
          payload.length > 1
            ? (
                await this.inquirer.ask<{ choice: 'y' | 'n' }>(
                  'bulk-questions',
                  {},
                )
              ).choice
            : 'n';

        res =
          bulk === 'y'
            ? await this.documentsService.bulk(
                payload.reduce((acc, curr) => {
                  acc.push({ index: { _index: options.index } });
                  acc.push(curr);
                  return acc;
                }, [] as Record<string, unknown>[]),
              )
            : await Promise.all(
                payload.map((doc) =>
                  this.documentsService.create(options.index, doc),
                ),
              );
      } else {
        res = await this.documentsService.create(options.index, payload);
      }

      this.logger.log('Document/s successfully created', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while creating document/s', {
        fn: this.run.name,
        index: options.index,
        name: error.name,
        ...(error.meta.body ? { body: error.meta.body } : {}),
        ...(error.meta.statusCode ? { statusCode: error.meta.statusCode } : {}),
      });
    }
  }
}
