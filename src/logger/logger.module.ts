import { DynamicModule, Global, Provider } from '@nestjs/common';
import {
  LoggerModuleAsyncOptions,
  LoggerModuleOptions,
  LoggerModuleOptionsFactory,
} from './logger.interfaces';
import { LoggerService } from './logger.service';
import { getLoggerModuleOptionsToken } from './logger.utils';

@Global()
export class LoggerModule {
  public static forRoot(options: LoggerModuleOptions): DynamicModule {
    const optionsProvider: Provider = {
      provide: getLoggerModuleOptionsToken(),
      useValue: options,
    };

    return {
      module: LoggerModule,
      providers: [optionsProvider, LoggerService],
      exports: [optionsProvider, LoggerService],
    };
  }

  static register(options: LoggerModuleOptions): DynamicModule {
    return LoggerModule.forRoot(options);
  }

  public static forRootAsync(options: LoggerModuleAsyncOptions): DynamicModule {
    const asyncProviders = this.createAsyncProviders(options);

    return {
      module: LoggerModule,
      providers: [...asyncProviders, LoggerService],
      exports: [...asyncProviders, LoggerService],
    };
  }

  static registerAsync(options: LoggerModuleAsyncOptions): DynamicModule {
    return LoggerModule.forRootAsync(options);
  }

  private static createAsyncProviders(
    options: LoggerModuleAsyncOptions,
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
    options: LoggerModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: getLoggerModuleOptionsToken(),
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    if (options.useClass === undefined) {
      throw new Error('Options "useClass" is undefined');
    }

    return {
      provide: getLoggerModuleOptionsToken(),
      useFactory: async (
        optionsFactory: LoggerModuleOptionsFactory,
      ): Promise<LoggerModuleOptions> =>
        optionsFactory.createLoggerModuleOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
