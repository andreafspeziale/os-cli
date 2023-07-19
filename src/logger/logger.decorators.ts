import { Inject } from '@nestjs/common';
import { getLoggerModuleOptionsToken } from './logger.utils';

export const InjectLoggerModuleOptions = (): ReturnType<typeof Inject> => {
  return Inject(getLoggerModuleOptionsToken());
};
