import { ZodIssue } from 'zod';

export class ConfigException extends Error {
  details?: ZodIssue[];

  constructor({ message, details }: { message: string; details?: ZodIssue[] }) {
    super(message);
    this.name = this.constructor.name;
    this.details = details;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(this.message).stack;
    }
  }
}
