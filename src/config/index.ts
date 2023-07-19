import { ConnectionMethod } from '../os';
import { type Config, type EnvSchema } from './config.interfaces';

export * from './config.interfaces';
export * from './config.schema';

export default (e: EnvSchema): Config => {
  const logger = {
    logger: {
      level: e.LOGGER_LEVEL,
      pretty: e.LOGGER_PRETTY,
      redact: e.LOGGER_REDACT,
    },
  };

  if (e.OS_CONNECTION_METHOD === ConnectionMethod.ServiceAccount) {
    return {
      os: {
        host: e.OS_HOST,
        connectionMethod: e.OS_CONNECTION_METHOD,
        region: e.AWS_REGION,
        credentials: {
          arn: e.AWS_ROLE_ARN,
          tokenFile: e.AWS_WEB_IDENTITY_TOKEN_FILE,
        },
      },
      ...logger,
    };
  }

  if (e.OS_CONNECTION_METHOD === ConnectionMethod.Credentials) {
    return {
      os: {
        host: e.OS_HOST,
        connectionMethod: e.OS_CONNECTION_METHOD,
        region: e.AWS_REGION,
        credentials: {
          accessKeyId: e.AWS_ACCESS_KEY_ID,
          secretAccessKey: e.AWS_SECRET_ACCESS_KEY,
        },
      },
      ...logger,
    };
  }

  return {
    os: {
      host: e.OS_HOST,
      connectionMethod: e.OS_CONNECTION_METHOD,
    },
    ...logger,
  };
};
