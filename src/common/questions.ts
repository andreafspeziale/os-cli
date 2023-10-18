import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'delete-questions' })
export class DeleteQuestions {
  @Question({
    message: 'Are you sure you want to proceed with the deletion?',
    name: 'choice',
    type: 'list',
    choices: ['y', 'n'],
    default: 'n',
  })
  parseChoice(val: string): string {
    return val;
  }
}

@QuestionSet({ name: 'bulk-questions' })
export class BulkQuestions {
  @Question({
    message: 'Do you want to perform the op. in bulk?',
    name: 'choice',
    type: 'list',
    choices: ['y', 'n'],
    default: 'y',
  })
  parseChoice(val: string): string {
    return val;
  }
}
