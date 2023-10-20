import { SubCommand, CommandRunner, Option } from 'nest-commander';
import { LoggerService } from '../../logger';
import { TasksService } from '../tasks.service';

@SubCommand({
  name: 'get',
  description: 'get task info',
  aliases: ['g'],
})
export class GetTaskCommand extends CommandRunner {
  constructor(
    private readonly logger: LoggerService,
    private readonly tasksService: TasksService,
  ) {
    super();
    this.logger.setContext(GetTaskCommand.name);
  }

  @Option({
    flags: '-t, --task-id, <string>',
    description: 'task id',
    required: true,
  })
  parseTaskId(val: string): string {
    return val;
  }

  async run(
    passedParam: string[],
    options: {
      taskId: string;
    },
  ): Promise<void> {
    this.logger.debug('Running command...', {
      fn: this.run.name,
      passedParam,
      options,
    });

    try {
      const res = await this.tasksService.get(options.taskId);

      this.logger.log('Task successfully retrieved', {
        fn: this.run.name,
        res,
      });
    } catch (error) {
      this.logger.error('Error while getting task', {
        fn: this.run.name,
        taskId: options.taskId,
        name: error.name,
        body: error.meta.body,
        statusCode: error.meta.statusCode,
      });
    }
  }
}
