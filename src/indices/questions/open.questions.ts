import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'open-questions' })
export class OpenQuestions {
  @Question({
    message: 'Are you sure you want to open the index?',
    name: 'open',
    type: 'list',
    choices: ['y', 'n'],
    default: 'n',
  })
  parseOpen(val: string): string {
    return val;
  }
}
