import { Command, CommandRunner } from 'nest-commander';
import { ListIndexCommand } from './list.command';
import { GetIndexCommand } from './get.command';
import { CloseIndexCommand } from './close.command';
import { OpenIndexCommand } from './open.command';
import { DeleteIndexCommand } from './delete.command';
import { CreateIndexCommand } from './create.command';
import { UpdateIndexCommand } from './update.command';
import { ReIndexCommand } from './reindex.command';

@Command({
  name: 'indices',
  description: 'opensearch indices related commands',
  aliases: ['i'],
  subCommands: [
    ListIndexCommand,
    GetIndexCommand,
    CloseIndexCommand,
    OpenIndexCommand,
    DeleteIndexCommand,
    CreateIndexCommand,
    UpdateIndexCommand,
    ReIndexCommand,
  ],
})
export class IndexCommand extends CommandRunner {
  constructor() {
    super();
  }

  async run(): Promise<void> {
    process.stdout.write(this.command.helpInformation());
  }
}
