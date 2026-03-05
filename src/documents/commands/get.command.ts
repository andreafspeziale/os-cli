import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { LoggerService } from '@andreafspeziale/nestjs-log';
import { DocumentsService } from '../documents.service';

@SubCommand({
  name: 'get',
  description: 'get document',
  aliases: ['g'],
})
export class GetDocumentCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly documentsService: DocumentsService,
  ) {
    super();
    this.logger.setContext(GetDocumentCommand.name);
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
      const res = await this.documentsService.get(options.index, options.document);

      this.logger.log('Document successfully retrieved', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while getting document', {
        fn: this.run.name,
        index: options.index,
        name: error.name,
        ...(error.meta.body ? { body: error.meta.body } : {}),
        ...(error.meta.statusCode ? { statusCode: error.meta.statusCode } : {}),
      });
    }
  }
}
