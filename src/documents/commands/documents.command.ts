import { Command, CommandRunner } from 'nest-commander';
import { DeleteCommand } from './delete.command';
import { CreateCommand } from './create.command';

// TODO: rename sub-commands
@Command({
  name: 'documents',
  description: 'opensearch documents related commands',
  aliases: ['d'],
  subCommands: [DeleteCommand, CreateCommand],
})
export class DocumentsCommand extends CommandRunner {
  constructor() {
    super();
  }

  async run(): Promise<void> {
    process.stdout.write(this.command.helpInformation());
  }
}
