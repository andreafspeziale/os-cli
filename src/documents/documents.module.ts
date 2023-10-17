import { Module } from '@nestjs/common';
import { DeleteCommand, DocumentsCommand } from './commands';
import { DeleteQuestions, BulkQuestions } from './questions';
import { DocumentsService } from './documents.service';

@Module({
  providers: [
    DocumentsService,
    DocumentsCommand,
    DeleteCommand,
    DeleteQuestions,
    BulkQuestions,
  ],
})
export class DocumentsModule {}
