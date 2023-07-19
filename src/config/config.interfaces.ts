import type { z } from 'zod';
import type { envSchema } from './config.schema';
import { LoggerModuleOptions } from '../logger';
import { OpenSearchModuleOptions } from '../os';

export type EnvSchema = z.infer<typeof envSchema>;

export interface Config {
  os: OpenSearchModuleOptions;
  logger: LoggerModuleOptions;
}
