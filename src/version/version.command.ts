import { Command, CommandRunner } from 'nest-commander';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../../package.json');

@Command({
  name: 'version',
  description: 'os-cli version',
  aliases: ['v'],
})
export class VersionCommand extends CommandRunner {
  constructor() {
    super();
  }

  async run(): Promise<void> {
    console.log(version);
  }
}
