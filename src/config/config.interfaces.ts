import type { z } from 'zod';
import { LoggerConfig } from '@andreafspeziale/nestjs-log';
import { OSConfig } from '@andreafspeziale/nestjs-search';
import type { envSchema } from './config.schema';

export type EnvSchema = z.infer<typeof envSchema>;

export type Config = OSConfig & LoggerConfig;
