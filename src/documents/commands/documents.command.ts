import { Command, CommandRunner } from 'nest-commander';
import { DeleteDocumentsCommand } from './delete.command';
import { CreateDocumentsCommand } from './create.command';

@Command({
  name: 'documents',
  description: 'opensearch documents related commands',
  aliases: ['d'],
  subCommands: [DeleteDocumentsCommand, CreateDocumentsCommand],
})
export class DocumentsCommand extends CommandRunner {
  constructor() {
    super();
  }

  async run(): Promise<void> {
    process.stdout.write(this.command.helpInformation());
  }
}
