import { Module } from '@nestjs/common';
import { GetTaskCommand, TasksCommand } from './commands';
import { TasksService } from './tasks.service';

@Module({
  providers: [GetTaskCommand, TasksCommand, TasksService],
})
export class TasksModule {}
