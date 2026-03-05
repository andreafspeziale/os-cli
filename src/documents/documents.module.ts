import { Module } from '@nestjs/common';
import { DeleteQuestions } from '../common';
import {
  GetDocumentCommand,
  DeleteDocumentsCommand,
  DocumentsCommand,
  CreateDocumentsCommand,
  QueryDocumentsCommand,
} from './commands';
import { BulkQuestions } from './questions';
import { DocumentsService } from './documents.service';

@Module({
  providers: [
    DocumentsService,
    DocumentsCommand,
    GetDocumentCommand,
    DeleteDocumentsCommand,
    DeleteQuestions,
    BulkQuestions,
    CreateDocumentsCommand,
    QueryDocumentsCommand,
  ],
})
export class DocumentsModule {}
