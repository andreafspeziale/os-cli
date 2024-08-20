import { osSchema } from '@andreafspeziale/nestjs-search/dist/zod';
import { loggerSchema } from '../logger';

export const envSchema = osSchema.and(loggerSchema);
