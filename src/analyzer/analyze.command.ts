import { z } from 'zod';
import { LoggerService } from '@andreafspeziale/nestjs-log';
import { Command, CommandRunner, Option } from 'nest-commander';
import { validateAndParseOrExit, validateFileOrExit, ValidJsonPayloadFromString } from '../common';
import { AnalyzeService } from './analyzer.service';

@Command({
  name: 'analyze',
  description: 'opensearch analyze command',
  aliases: ['az'],
})
export class AnalyzeCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly analyzeService: AnalyzeService,
  ) {
    super();
    this.logger.setContext(AnalyzeCommand.name);
  }

  @Option({
    flags: '-i, --index, [string]',
    description: 'index name',
  })
  parseIndex(val: string): string {
    return val;
  }

  @Option({
    flags: '-a, --analyzer, [string]',
    description: 'analyzer name',
    defaultValue: 'default',
  })
  parseAnalyzer(val: string): string {
    return val;
  }

  @Option({
    flags: '-t, --text, [string]',
    description: 'text to analyze',
  })
  parseText(val: string): string {
    return val;
  }

  @Option({
    flags: '-p, --payload, [string]',
    description: 'inline analyzer JSON payload',
  })
  parsePayload(val: string): Record<string, unknown> {
    return validateAndParseOrExit(
      val,
      ValidJsonPayloadFromString.pipe(z.object({}).passthrough()),
      this.logger,
    );
  }

  @Option({
    flags: '-f, --file, [string]',
    description: 'analyzer JSON payload file path',
  })
  parseFile(val: string): Record<string, unknown> {
    return validateAndParseOrExit(
      validateFileOrExit(val, this.logger),
      ValidJsonPayloadFromString.pipe(z.object({}).passthrough()),
      this.logger,
    );
  }

  async run(
    passedParam: string[],
    options: {
      index?: string;
      analyzer: string;
      text?: string;
      payload?: Record<string, unknown>;
      file?: Record<string, unknown>;
    },
  ): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    if (!options.text && !options.payload && !options.file) {
      process.stdout.write(this.command.helpInformation());

      process.exit(1);
    }

    const payload = options.payload ||
      options.file || {
        text: options.text,
        ...(options.index ? { index: options.index } : {}),
        ...(options.analyzer ? { analyzer: options.analyzer } : {}),
      };

    try {
      const res = await this.analyzeService.analyze(payload);

      this.logger.log('Index successfully created', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while analyzing', {
        fn: this.run.name,
        passedParam,
        options,
        name: error.name,
        ...(error.meta.body ? { body: error.meta.body } : {}),
        ...(error.meta.statusCode ? { statusCode: error.meta.statusCode } : {}),
      });
    }
  }
}
