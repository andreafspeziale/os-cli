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
} from './commands';
import { DeleteQuestions, UpdateQuestions } from './questions';
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
  ],
})
export class IndicesModule {}
