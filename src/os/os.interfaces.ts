import type { ModuleMetadata, Type } from '@nestjs/common';

export enum ConnectionMethod {
  Local = 'local',
  Proxy = 'proxy',
  ServiceAccount = 'serviceAccount',
  Credentials = 'credentials',
}

export type OpenSearchModuleOptions =
  | {
      host: string;
      connectionMethod: ConnectionMethod.Local | ConnectionMethod.Proxy;
    }
  | {
      host: string;
      connectionMethod: ConnectionMethod.ServiceAccount;
      region: string;
      credentials: {
        arn: string;
        tokenFile: string;
      };
    }
  | {
      host: string;
      connectionMethod: ConnectionMethod.Credentials;
      region: string;
      credentials: {
        accessKeyId: string;
        secretAccessKey: string;
      };
    };

export interface OpenSearchModuleOptionsFactory {
  createOpenSearchModuleOptions():
    | Promise<OpenSearchModuleOptions>
    | OpenSearchModuleOptions;
}

export interface OpenSearchModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<OpenSearchModuleOptionsFactory>;
  useExisting?: Type<OpenSearchModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<OpenSearchModuleOptions> | OpenSearchModuleOptions;
}
