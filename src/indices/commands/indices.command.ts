import { Command, CommandRunner } from 'nest-commander';
import { ListCommand } from './list.command';
import { GetCommand } from './get.command';
import { CloseCommand } from './close.command';
import { OpenCommand } from './open.command';
import { DeleteCommand } from './delete.command';
import { CreateCommand } from './create.command';
import { UpdateCommand } from './update.command';
import { ReIndexCommand } from './reindex.command';

@Command({
  name: 'indices',
  description: 'opensearch indices related commands',
  aliases: ['i'],
  subCommands: [
    ListCommand,
    GetCommand,
    CloseCommand,
    OpenCommand,
    DeleteCommand,
    CreateCommand,
    UpdateCommand,
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
