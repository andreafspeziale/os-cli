import { Client } from '@opensearch-project/opensearch';
import { InjectOSClient } from '@andreafspeziale/nestjs-search';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '@andreafspeziale/nestjs-log';

@Injectable()
export class DocumentsService {
  constructor(
    private readonly logger: LoggerService,
    @InjectOSClient() private readonly osClient: Client,
  ) {
    this.logger.setContext(DocumentsService.name);
  }

  async delete(index: string, id: string) {
    return (
      await this.osClient.delete({
        index,
        id,
      })
    ).body;
  }

  async bulk(payload: Record<string, unknown>[]) {
    return (
      await this.osClient.bulk({
        body: payload,
      })
    ).body;
  }

  async create(index: string, payload: Record<string, unknown>, id?: string) {
    return (
      await this.osClient.index({
        index,
        ...(id ? { id } : {}),
        body: payload,
      })
    ).body;
  }

  async query(index: string, payload: Record<string, unknown>) {
    return (
      await this.osClient.search({
        index,
        body: payload,
      })
    ).body;
  }
}
