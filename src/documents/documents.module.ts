import { Module } from '@nestjs/common';
import { DeleteQuestions } from '../common';
import {
  ExistsDocumentCommand,
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
    ExistsDocumentCommand,
    GetDocumentCommand,
    DeleteDocumentsCommand,
    DeleteQuestions,
    BulkQuestions,
    CreateDocumentsCommand,
    QueryDocumentsCommand,
  ],
})
export class DocumentsModule {}
