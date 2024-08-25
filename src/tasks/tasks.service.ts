import { Client } from '@opensearch-project/opensearch';
import { InjectOSClient } from '@andreafspeziale/nestjs-search';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '@andreafspeziale/nestjs-log';

@Injectable()
export class TasksService {
  constructor(
    private readonly logger: LoggerService,
    @InjectOSClient() private readonly osClient: Client,
  ) {
    this.logger.setContext(TasksService.name);
  }

  async get(id: string) {
    return (
      await this.osClient.tasks.get({
        task_id: id,
      })
    ).body;
  }
}
