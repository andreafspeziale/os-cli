import { z } from 'zod';
import {
  SubCommand,
  CommandRunner,
  Option,
  InquirerService,
} from 'nest-commander';
import { LoggerService } from '../../logger';
import { DocumentsService } from '../documents.service';
import { validateAndParsePayloadOrExit } from '../../common';

@SubCommand({
  name: 'delete',
  description: 'delete document/s',
  aliases: ['dl'],
})
export class DeleteDocumentsCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly documentsService: DocumentsService,
    private readonly inquirer: InquirerService,
  ) {
    super();
    this.logger.setContext(DeleteDocumentsCommand.name);
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
    flags: '-d, --documents, <string>',
    description: 'document/s id',
    required: true,
  })
  parseDocumentsIds(val: string): string[] {
    return validateAndParsePayloadOrExit(
      val,
      z.string().transform((val) => val.split(',')),
      this.logger,
    );
  }

  async run(
    passedParam: string[],
    options: { index: string; documents: string[] },
  ): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    const choice = (
      await this.inquirer.ask<{ choice: 'y' | 'n' }>('delete-questions', {})
    ).choice;

    if (choice === 'y') {
      const bulk =
        options.documents.length > 1
          ? (
              await this.inquirer.ask<{ choice: 'y' | 'n' }>(
                'bulk-questions',
                {},
              )
            ).choice
          : 'n';

      try {
        const res =
          bulk === 'y'
            ? await this.documentsService.bulk(
                options.documents.map((docId) => ({
                  delete: { _index: options.index, _id: docId },
                })),
              )
            : await Promise.all(
                options.documents.map((docId) =>
                  this.documentsService.delete(options.index, docId),
                ),
              );

        this.logger.log('Document/s successfully deleted', {
          fn: this.run.name,
          res,
        });
      } catch (error) {
        this.logger.error('Error while deleting document/s', {
          fn: this.run.name,
          index: options.index,
          name: error.name,
          body: error.meta.body,
          statusCode: error.meta.statusCode,
        });
      }
    }
  }
}
