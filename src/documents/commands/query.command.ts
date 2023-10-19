import { z } from 'zod';
import { SubCommand, CommandRunner, Option } from 'nest-commander';
import {
  validateAndParsePayloadOrExit,
  validateFileOrExit,
  ValidJsonPayloadFromString,
} from '../../common';
import { LoggerService } from '../../logger';
import { DocumentsService } from '../documents.service';

@SubCommand({
  name: 'query',
  description: 'query documents',
  aliases: ['qr'],
})
export class QueryDocumentsCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly documentsService: DocumentsService,
  ) {
    super();
    this.logger.setContext(QueryDocumentsCommand.name);
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
    description: 'inline query documents JSON payload',
  })
  parsePayload(val: string): Record<string, unknown> {
    return validateAndParsePayloadOrExit(
      val,
      ValidJsonPayloadFromString.pipe(z.object({}).passthrough()),
      this.logger,
    );
  }

  @Option({
    flags: '-f, --file, [string]',
    description: 'query documents JSON payload file path',
  })
  parseFile(val: string): Record<string, unknown> {
    return validateAndParsePayloadOrExit(
      validateFileOrExit(val, this.logger),
      ValidJsonPayloadFromString.pipe(z.object({}).passthrough()),
      this.logger,
    );
  }

  async run(
    passedParam: string[],
    options: {
      index: string;
      payload?: Record<string, unknown>;
      file?: Record<string, unknown>;
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

    try {
      const res = await this.documentsService.query(
        options.index,
        options.payload || options.file || {},
      );

      this.logger.log('Documents successfully queried', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while querying documents', {
        fn: this.run.name,
        index: options.index,
        name: error.name,
        body: error.meta.body,
        statusCode: error.meta.statusCode,
      });
    }
  }
}
