import { Command, CommandRunner } from 'nest-commander';
import { ExistsDocumentCommand } from './exists.command';
import { GetDocumentCommand } from './get.command';
import { DeleteDocumentsCommand } from './delete.command';
import { CreateDocumentsCommand } from './create.command';
import { QueryDocumentsCommand } from './query.command';

@Command({
  name: 'documents',
  description: 'opensearch documents related commands',
  aliases: ['d'],
  subCommands: [
    ExistsDocumentCommand,
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
