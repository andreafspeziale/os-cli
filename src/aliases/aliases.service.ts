import { Client } from '@opensearch-project/opensearch';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger';
import { InjectOSClient } from '../os';

@Injectable()
export class AliasesService {
  constructor(
    private readonly logger: LoggerService,
    @InjectOSClient() private readonly osClient: Client,
  ) {
    this.logger.setContext(AliasesService.name);
  }

  async get(alias: string): Promise<Record<string, unknown>> {
    return (await this.osClient.cat.aliases({ name: alias, format: 'json' }))
      .body;
  }

  async create(
    alias: string,
    index: string,
    isWriteIndex: boolean,
    filter: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    return (
      await this.osClient.indices.putAlias({
        name: alias,
        index,
        body: {
          is_write_index: isWriteIndex,
          filter,
        },
      })
    ).body;
  }

  async list(): Promise<Record<string, unknown>> {
    return (await this.osClient.cat.aliases({ format: 'json' })).body;
  }

  async remove(alias: string, index: string): Promise<Record<string, unknown>> {
    return (await this.osClient.indices.deleteAlias({ name: alias, index }))
      .body;
  }
}
