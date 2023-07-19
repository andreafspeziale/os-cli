import { loggerSchema } from '../logger';
import { osSchema } from '../os';

export const envSchema = osSchema.and(loggerSchema);
