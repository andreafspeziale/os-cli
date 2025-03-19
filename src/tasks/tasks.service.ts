import { InjectOSClient, type OSTypes } from '@andreafspeziale/nestjs-search';
import { Injectable } from '@nestjs/common';
import { LoggerService } from '@andreafspeziale/nestjs-log';

@Injectable()
export class TasksService {
  constructor(
    private readonly logger: LoggerService,
    @InjectOSClient() private readonly osClient: OSTypes.Client,
  ) {
    this.logger.setContext(TasksService.name);
  }

  // NOTE:
  // It can be solved by explicitly type the return function type as
  // Promise<Parameters<Parameters<OSClient['tasks']['get']>[2]>[1]['body']>, but it's not great
  async get(id: string) {
    return (
      await this.osClient.tasks.get({
        task_id: id,
      })
    ).body;
  }
}
