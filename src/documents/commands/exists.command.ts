import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { LoggerService } from '@andreafspeziale/nestjs-log';
import { DocumentsService } from '../documents.service';

@SubCommand({
  name: 'exists',
  description: 'check if document exists',
  aliases: ['e'],
})
export class ExistsDocumentCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly documentsService: DocumentsService,
  ) {
    super();
    this.logger.setContext(ExistsDocumentCommand.name);
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
    flags: '-d, --document, <string>',
    description: 'document id',
    required: true,
  })
  parseDocument(val: string): string {
    return val;
  }

  async run(
    passedParam: string[],
    options: {
      index: string;
      document: string;
    },
  ): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    try {
      const res = await this.documentsService.exists(options.index, options.document);

      this.logger.log('Document exists check completed', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while checking document existence', {
        fn: this.run.name,
        index: options.index,
        name: error.name,
        ...(error.meta.body ? { body: error.meta.body } : {}),
        ...(error.meta.statusCode ? { statusCode: error.meta.statusCode } : {}),
      });
    }
  }
}
