import { Client } from '@opensearch-project/opensearch';
import { DynamicModule, Global, Provider } from '@nestjs/common';
import type {
  OpenSearchModuleAsyncOptions,
  OpenSearchModuleOptions,
  OpenSearchModuleOptionsFactory,
} from './os.interfaces';
import {
  createClient,
  getClientToken,
  getModuleOptionsToken,
} from './os.utils';

@Global()
export class OpenSearchModule {
  public static forRoot(options: OpenSearchModuleOptions): DynamicModule {
    const optionsProvider: Provider = {
      provide: getModuleOptionsToken(),
      useValue: options,
    };

    const clientProvider: Provider = {
      provide: getClientToken(),
      useValue: createClient(options),
    };

    return {
      module: OpenSearchModule,
      providers: [optionsProvider, clientProvider],
      exports: [clientProvider],
    };
  }

  static register(options: OpenSearchModuleOptions): DynamicModule {
    return OpenSearchModule.forRoot(options);
  }

  public static forRootAsync(
    options: OpenSearchModuleAsyncOptions,
  ): DynamicModule {
    const clientProvider: Provider = {
      provide: getClientToken(),
      useFactory: (opts: OpenSearchModuleOptions): Client => createClient(opts),
      inject: [getModuleOptionsToken()],
    };

    return {
      module: OpenSearchModule,
      providers: [...this.createAsyncProviders(options), clientProvider],
      exports: [clientProvider],
    };
  }

  static registerAsync(options: OpenSearchModuleAsyncOptions): DynamicModule {
    return OpenSearchModule.forRootAsync(options);
  }

  private static createAsyncProviders(
    options: OpenSearchModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }

    if (options.useClass === undefined) {
      throw new Error('Options "useClass" is undefined');
    }

    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: OpenSearchModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: getModuleOptionsToken(),
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    if (options.useClass === undefined) {
      throw new Error('Options "useClass" is undefined');
    }

    return {
      provide: getModuleOptionsToken(),
      useFactory: async (
        optionsFactory: OpenSearchModuleOptionsFactory,
      ): Promise<OpenSearchModuleOptions> =>
        optionsFactory.createOpenSearchModuleOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
