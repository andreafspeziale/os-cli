import { Module } from '@nestjs/common';
import { AnalyzeCommand } from './analyze.command';
import { AnalyzeService } from './analyzer.service';

@Module({
  providers: [AnalyzeCommand, AnalyzeService],
})
export class AnalyzeModule {}
