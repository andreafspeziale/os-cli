import { Client } from '@opensearch-project/opensearch';
import { InjectOSClient } from '@andreafspeziale/nestjs-search';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '@andreafspeziale/nestjs-log';

@Injectable()
export class AliasesService {
  constructor(
    private readonly logger: LoggerService,
    @InjectOSClient() private readonly osClient: Client,
  ) {
    this.logger.setContext(AliasesService.name);
  }

  async get(alias: string) {
    return (await this.osClient.cat.aliases({ name: alias, format: 'json' }))
      .body;
  }

  async create(
    alias: string,
    index: string,
    isWriteIndex: boolean,
    filter: Record<string, unknown>,
  ) {
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

  async list() {
    return (await this.osClient.cat.aliases({ format: 'json' })).body;
  }

  async remove(alias: string, index: string) {
    return (await this.osClient.indices.deleteAlias({ name: alias, index }))
      .body;
  }
}
