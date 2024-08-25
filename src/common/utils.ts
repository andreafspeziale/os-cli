import { ZodError, ZodIssue, ZodType } from 'zod';
import { readFileSync } from 'fs';
import { LoggerService } from '@andreafspeziale/nestjs-log';
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

export const validateAndParseOrExit = <S extends ZodType>(
  p: string,
  schema: S,
  logger: LoggerService,
): S['_output'] | never => {
  try {
    return schema.parse(p);
  } catch (error) {
    const { message, meta } = validationErrorLogBuilder(
      'validateAndParseOrExit',
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
