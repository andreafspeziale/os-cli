import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'close-questions' })
export class CloseQuestions {
  @Question({
    message: 'Are you sure you want to close the index?',
    name: 'close',
    type: 'list',
    choices: ['y', 'n'],
    default: 'n',
  })
  parseClose(val: string): string {
    return val;
  }
}
