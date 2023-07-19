import { Client } from '@opensearch-project/opensearch';
import { AwsSigv4Signer } from '@opensearch-project/opensearch/aws';
import { fromTokenFile } from '@aws-sdk/credential-providers';
import {
  ConnectionMethod,
  type OpenSearchModuleOptions,
} from './os.interfaces';
import { OS_CLIENT_TOKEN, OS_MODULE_OPTIONS_TOKEN } from './os.constants';

export const getModuleOptionsToken = (): string => OS_MODULE_OPTIONS_TOKEN;
export const getClientToken = (): string => OS_CLIENT_TOKEN;

export const createClient = (options: OpenSearchModuleOptions): Client => {
  if (options.connectionMethod === ConnectionMethod.ServiceAccount) {
    return new Client({
      ...AwsSigv4Signer({
        region: options.region,
        getCredentials: async () =>
          fromTokenFile({
            roleArn: options.credentials.arn,
            webIdentityTokenFile: options.credentials.tokenFile,
          })(),
      }),
      node: options.host,
    });
  }

  if (options.connectionMethod === ConnectionMethod.Credentials) {
    return new Client({
      ...AwsSigv4Signer({
        region: options.region,
        getCredentials: async () => ({
          accessKeyId: options.credentials.accessKeyId,
          secretAccessKey: options.credentials.secretAccessKey,
        }),
      }),
      node: options.host,
    });
  }

  return new Client({
    node: options.host,
  });
};
