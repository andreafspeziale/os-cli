import { Command, CommandRunner } from 'nest-commander';
import { GetTaskCommand } from './get.command';

@Command({
  name: 'tasks',
  description: 'opensearch tasks related commands',
  aliases: ['t'],
  subCommands: [GetTaskCommand],
})
export class TasksCommand extends CommandRunner {
  constructor() {
    super();
  }

  async run(): Promise<void> {
    process.stdout.write(this.command.helpInformation());
  }
}
