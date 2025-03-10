import { CommandFactory } from 'nest-commander';
import { OSCLIModule } from './os-cli.module';

async function bootstrap(): Promise<void> {
  await CommandFactory.run(OSCLIModule);
}
bootstrap();
