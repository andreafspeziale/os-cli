import { buildOSSchemas } from '@andreafspeziale/nestjs-search/dist/zod';
import { loggerSchema } from '@andreafspeziale/nestjs-log/dist/zod';

export const envSchema = buildOSSchemas().osSchema.and(loggerSchema);
