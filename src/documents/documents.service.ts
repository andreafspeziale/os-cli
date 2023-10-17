import { Client } from '@opensearch-project/opensearch';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger';
import { InjectOSClient } from '../os';

@Injectable()
export class DocumentsService {
  constructor(
    private readonly logger: LoggerService,
    @InjectOSClient() private readonly osClient: Client,
  ) {
    this.logger.setContext(DocumentsService.name);
  }

  async delete(index: string, id: string): Promise<Record<string, unknown>> {
    return (
      await this.osClient.delete({
        index,
        id,
      })
    ).body;
  }

  async bulk(
    payload: Record<string, unknown>[],
  ): Promise<Record<string, unknown>> {
    return (
      await this.osClient.bulk({
        body: payload,
      })
    ).body;
  }
}
