import { z } from 'zod';
import { LoggerLevel } from './logger.interfaces';

export const loggerSchema = z.object({
  LOGGER_LEVEL: z.nativeEnum(LoggerLevel).default(LoggerLevel.Info),
  LOGGER_PRETTY: z
    .preprocess((val) => val === 'true', z.boolean())
    .default('true'),
  LOGGER_REDACT: z
    .preprocess((val) => (val as string).split(','), z.string().array())
    .default(''),
});
