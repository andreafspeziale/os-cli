import * as winston from 'winston';
import { LOGGER_MODULE_OPTIONS_TOKEN } from './logger.constants';
import { LoggerModuleOptions, LoggerLevel } from './logger.interfaces';

export const getLoggerModuleOptionsToken = (): string =>
  LOGGER_MODULE_OPTIONS_TOKEN;

export const createLogger = (config: LoggerModuleOptions): winston.Logger => {
  const formats = [winston.format.timestamp(), winston.format.json()];
  if (config.pretty) {
    formats.push(winston.format.prettyPrint({ colorize: true }));
  }

  return winston.createLogger({
    level: config.level,
    format: winston.format.combine(...formats),
    transports: [new winston.transports.Console()],
    silent: config.level === LoggerLevel.Silent,
  });
};

export const isKeyValueObject = (value: unknown): boolean =>
  value !== null &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  !(value instanceof Date) &&
  !(value instanceof RegExp) &&
  !(value instanceof String) &&
  !(value instanceof Number) &&
  !(value instanceof Boolean);
