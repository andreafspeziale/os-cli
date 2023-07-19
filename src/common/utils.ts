import { z } from 'zod';
import { readFileSync } from 'fs';
import { LoggerService } from '../logger';

// TODO: this utils could be a validator provider itself

const validationErrorLogBuilder = (
  fn: string,
  name: string,
  details: string,
): {
  message: string;
  meta: {
    fn: string;
    name: string;
    details: string[] | Record<string, unknown>[];
  };
} => ({
  message: 'Invalid input',
  meta: {
    fn,
    name,

    ...(name === 'ZodError'
      ? {
          details: JSON.parse(details),
        }
      : {
          details: [details],
        }),
  },
});

export const validateAndParsePayloadOrExit = (
  p: string,
  logger: LoggerService,
): Record<string, unknown> | never => {
  try {
    return z.object({}).passthrough().parse(JSON.parse(p));
  } catch (error) {
    const { message, meta } = validationErrorLogBuilder(
      'validateAndParsePayloadOrExit',
      error.name,
      error.message,
    );

    logger.error(message, meta);

    process.exit(1);
  }
};

export const validateFileOrExit = (
  p: string,
  logger: LoggerService,
): string | never => {
  try {
    return readFileSync(p, 'utf-8');
  } catch (error) {
    const { message, meta } = validationErrorLogBuilder(
      'validateFileOrExit',
      error.name,
      error.message,
    );

    logger.error(message, meta);

    process.exit(1);
  }
};
