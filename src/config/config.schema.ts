import { osSchema } from '@andreafspeziale/nestjs-osearch/dist/zod';
import { loggerSchema } from '../logger';

export const envSchema = osSchema.and(loggerSchema);
