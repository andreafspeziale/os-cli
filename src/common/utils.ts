import { ZodError, ZodIssue, z } from 'zod';
import { readFileSync } from 'fs';
import { LoggerService } from '../logger';
import { fromZodError } from 'zod-validation-error';

const validationErrorLogBuilder = (
  fn: string,
  error: Error,
): {
  message: string;
  meta: {
    fn: string;
    name: string;
    details: string[] | ZodIssue[];
  };
} => {
  return {
    message: 'Invalid input',
    meta: {
      fn,
      name: error.name,
      ...(error instanceof ZodError
        ? {
            details: fromZodError(error).details,
          }
        : {
            details: [error.message],
          }),
    },
  };
};

export const validateAndParsePayloadOrExit = (
  p: string,
  logger: LoggerService,
): Record<string, unknown> | never => {
  try {
    // TODO: this is not working as expected, cant recall about passthrough()
    return z.object({}).passthrough().parse(JSON.parse(p));
  } catch (error) {
    const { message, meta } = validationErrorLogBuilder(
      'validateAndParsePayloadOrExit',
      error,
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
      error,
    );

    logger.error(message, meta);

    process.exit(1);
  }
};
