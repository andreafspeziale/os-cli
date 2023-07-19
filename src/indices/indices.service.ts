import { Client } from '@opensearch-project/opensearch';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger';
import { InjectOSClient } from '../os';

@Injectable()
export class IndicesService {
  constructor(
    private readonly logger: LoggerService,
    @InjectOSClient() private readonly osClient: Client,
  ) {
    this.logger.setContext(IndicesService.name);
  }

  async list(): Promise<Record<string, unknown>> {
    return (await this.osClient.cat.indices({ format: 'json' })).body;
  }

  async get(index: string): Promise<Record<string, unknown>> {
    return (await this.osClient.indices.get({ index })).body;
  }

  async close(index: string): Promise<Record<string, unknown>> {
    return (
      await this.osClient.indices.close({
        index,
      })
    ).body;
  }

  async open(index: string): Promise<Record<string, unknown>> {
    return (
      await this.osClient.indices.open({
        index,
      })
    ).body;
  }

  async delete(index: string): Promise<Record<string, unknown>> {
    return (await this.osClient.indices.delete({ index })).body;
  }

  async create(
    index: string,
    payload: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    return (
      await this.osClient.indices.create({
        index,
        body: payload,
      })
    ).body;
  }

  async update(
    index: string,
    payload: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    return (
      await this.osClient.indices.putSettings({
        index,
        body: payload,
      })
    ).body;
  }
}
