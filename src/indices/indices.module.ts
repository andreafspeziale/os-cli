import { Module } from '@nestjs/common';
import { DeleteQuestions } from '../common';
import {
  GetIndexCommand,
  IndexCommand,
  ListIndexCommand,
  CloseIndexCommand,
  OpenIndexCommand,
  DeleteIndexCommand,
  CreateIndexCommand,
  UpdateIndexCommand,
  ReIndexCommand,
} from './commands';
import { ReIndexQuestions, UpdateQuestions } from './questions';
import { IndicesService } from './indices.service';

@Module({
  providers: [
    IndicesService,
    IndexCommand,
    ListIndexCommand,
    GetIndexCommand,
    CloseIndexCommand,
    OpenIndexCommand,
    DeleteIndexCommand,
    DeleteQuestions,
    CreateIndexCommand,
    UpdateIndexCommand,
    UpdateQuestions,
    ReIndexCommand,
    ReIndexQuestions,
  ],
})
export class IndicesModule {}
