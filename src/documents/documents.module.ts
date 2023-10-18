import { Module } from '@nestjs/common';
import { DeleteCommand, DocumentsCommand, CreateCommand } from './commands';
import { DeleteQuestions, BulkQuestions } from './questions';
import { DocumentsService } from './documents.service';

@Module({
  providers: [
    DocumentsService,
    DocumentsCommand,
    DeleteCommand,
    DeleteQuestions,
    BulkQuestions,
    CreateCommand,
  ],
})
export class DocumentsModule {}
