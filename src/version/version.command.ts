import { Command, CommandRunner } from 'nest-commander';
// eslint-disable-next-line @typescript-eslint/no-require-imports
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

  run(): Promise<void> {
    // eslint-disable-next-line no-console
    console.log(version);
    return Promise.resolve();
  }
}
