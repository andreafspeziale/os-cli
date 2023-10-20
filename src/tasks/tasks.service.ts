import { Client } from '@opensearch-project/opensearch';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger';
import { InjectOSClient } from '../os';

@Injectable()
export class TasksService {
  constructor(
    private readonly logger: LoggerService,
    @InjectOSClient() private readonly osClient: Client,
  ) {
    this.logger.setContext(TasksService.name);
  }

  async get(id: string): Promise<Record<string, unknown>> {
    return (
      await this.osClient.tasks.get({
        task_id: id,
      })
    ).body;
  }
}
