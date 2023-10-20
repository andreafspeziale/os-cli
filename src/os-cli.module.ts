import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Config, parse, mapConfig } from './config';
import { VersionModule } from './version';
import { IndicesModule } from './indices';
import { DocumentsModule } from './documents';
import { TasksModule } from './tasks';
import { LoggerModule } from './logger';
import { OpenSearchModule } from './os';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (c) => mapConfig(parse(c)),
    }),
    LoggerModule.forRootAsync({
      useFactory: (cs: ConfigService<Config, true>) => cs.get('logger'),
      inject: [ConfigService],
    }),
    OpenSearchModule.forRootAsync({
      useFactory: (cs: ConfigService<Config, true>) => cs.get('os'),
      inject: [ConfigService],
    }),
    VersionModule,
    IndicesModule,
    DocumentsModule,
    TasksModule,
  ],
})
export class OSCLIModule {}
