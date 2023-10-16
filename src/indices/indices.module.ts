import { Module } from '@nestjs/common';
import {
  GetCommand,
  IndexCommand,
  ListCommand,
  CloseCommand,
  OpenCommand,
  DeleteCommand,
  CreateCommand,
  UpdateCommand,
  ReIndexCommand,
} from './commands';
import {
  DeleteQuestions,
  ReIndexQuestions,
  UpdateQuestions,
} from './questions';
import { IndicesService } from './indices.service';

@Module({
  providers: [
    IndicesService,
    IndexCommand,
    ListCommand,
    GetCommand,
    CloseCommand,
    OpenCommand,
    DeleteCommand,
    DeleteQuestions,
    CreateCommand,
    UpdateCommand,
    UpdateQuestions,
    ReIndexCommand,
    ReIndexQuestions,
  ],
})
export class IndicesModule {}
