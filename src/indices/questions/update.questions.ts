import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'update-questions' })
export class UpdateQuestions {
  @Question({
    message: 'Do you need to close the index first?',
    name: 'close',
    type: 'list',
    choices: ['y', 'n'],
    default: 'n',
  })
  parseClose(val: string): string {
    return val;
  }

  @Question({
    message: 'Do you need to open the index back?',
    name: 'open',
    type: 'list',
    choices: ['y', 'n'],
    default: 'n',
    when: (a) => a.close === 'y',
  })
  parseOpen(val: string): string {
    return val;
  }
}
