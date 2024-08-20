import type { z } from 'zod';
import { OSConfig } from '@andreafspeziale/nestjs-search';
import { LoggerModuleOptions } from '../logger';
import type { envSchema } from './config.schema';

export type EnvSchema = z.infer<typeof envSchema>;

export interface Config extends OSConfig {
  logger: LoggerModuleOptions;
}
