import { InjectOSClient, type OSTypes } from '@andreafspeziale/nestjs-search';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '@andreafspeziale/nestjs-log';

@Injectable()
export class AnalyzeService {
  constructor(
    private readonly logger: LoggerService,
    @InjectOSClient() private readonly osClient: OSTypes.Client,
  ) {
    this.logger.setContext(AnalyzeService.name);
  }

  async analyze(payload: Record<string, unknown>) {
    return (
      await this.osClient.indices.analyze({
        ...('index' in payload && typeof payload.index === 'string'
          ? { index: payload.index }
          : {}),
        body: payload,
      })
    ).body;
  }
}
