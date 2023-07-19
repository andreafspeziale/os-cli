import { z } from 'zod';
import { ConnectionMethod } from './os.interfaces';
import { OS_HOST } from './os.constants';

export const osSchema = z.discriminatedUnion('OS_CONNECTION_METHOD', [
  z.object({
    OS_HOST: z.string().url().default(OS_HOST),
    OS_CONNECTION_METHOD: z.literal(ConnectionMethod.LocalOrProxy),
  }),
  z.object({
    OS_HOST: z.string().url(),
    OS_CONNECTION_METHOD: z.literal(ConnectionMethod.ServiceAccount),
    AWS_REGION: z.string(),
    AWS_ROLE_ARN: z.string(),
    AWS_WEB_IDENTITY_TOKEN_FILE: z.string(),
  }),
  z.object({
    OS_HOST: z.string().url(),
    OS_CONNECTION_METHOD: z.literal(ConnectionMethod.Credentials),
    AWS_REGION: z.string(),
    AWS_ACCESS_KEY_ID: z.string(),
    AWS_SECRET_ACCESS_KEY: z.string(),
  }),
]);
