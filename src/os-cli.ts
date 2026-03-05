#!/usr/bin/env node

import { CommandFactory } from 'nest-commander';
import { OSCLIModule } from './os-cli.module';
import { ConfigException } from './config/config.exceptions';

async function bootstrap(): Promise<void> {
  return CommandFactory.run(OSCLIModule, { abortOnError: false });
}

bootstrap().catch((err: ConfigException) => {
  let message = `Error while running the CLI: ${err.name}.\n\n${err.message}`;
  if (err.details) message += `\n\nDetails: ${JSON.stringify(err.details, null, 2)}`;

  // eslint-disable-next-line no-console
  console.error(message);
  process.exit(1);
});
