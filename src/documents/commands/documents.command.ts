import { Command, CommandRunner } from 'nest-commander';
import { GetDocumentCommand } from './get.command';
import { DeleteDocumentsCommand } from './delete.command';
import { CreateDocumentsCommand } from './create.command';
import { QueryDocumentsCommand } from './query.command';

@Command({
  name: 'documents',
  description: 'opensearch documents related commands',
  aliases: ['d'],
  subCommands: [
    GetDocumentCommand,
    DeleteDocumentsCommand,
    CreateDocumentsCommand,
    QueryDocumentsCommand,
  ],
})
export class DocumentsCommand extends CommandRunner {
  constructor() {
    super();
  }

  run(): Promise<void> {
    process.stdout.write(this.command.helpInformation());
    return Promise.resolve();
  }
}
