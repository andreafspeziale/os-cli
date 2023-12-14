import { Command, CommandRunner } from 'nest-commander';
import { GetAliasCommand } from './get.command';
import { CreateAliasCommand } from './create.command';
import { ListAliasCommand } from './list.command';
import { RemoveAliasCommand } from './remove.command';

@Command({
  name: 'aliases',
  description: 'opensearch aliases related commands',
  aliases: ['a'],
  subCommands: [
    GetAliasCommand,
    CreateAliasCommand,
    ListAliasCommand,
    RemoveAliasCommand,
  ],
})
export class AliasCommand extends CommandRunner {
  constructor() {
    super();
  }

  async run(): Promise<void> {
    process.stdout.write(this.command.helpInformation());
  }
}
