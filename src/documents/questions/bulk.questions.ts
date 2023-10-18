import { Question, QuestionSet } from 'nest-commander';

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
