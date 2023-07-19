import { Inject } from '@nestjs/common';
import { getClientToken } from './os.utils';

export const InjectOSClient = (): ReturnType<typeof Inject> => {
  return Inject(getClientToken());
};
