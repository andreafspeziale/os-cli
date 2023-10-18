import { Module } from '@nestjs/common';
import { DeleteQuestions } from '../common';
import { DeleteCommand, DocumentsCommand, CreateCommand } from './commands';
import { BulkQuestions } from './questions';
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
