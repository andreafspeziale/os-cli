import { Module } from '@nestjs/common';
import {
  AliasCommand,
  CreateAliasCommand,
  GetAliasCommand,
  ListAliasCommand,
  RemoveAliasCommand,
} from './commands';
import { AliasesService } from './aliases.service';

@Module({
  providers: [
    AliasesService,
    AliasCommand,
    GetAliasCommand,
    CreateAliasCommand,
    ListAliasCommand,
    RemoveAliasCommand,
  ],
})
export class AliasesModule {}
