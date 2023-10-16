import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'reindex-questions' })
export class ReIndexQuestions {
  @Question({
    message: 'Are you sure you want to start a reindexing?',
    name: 'reindex',
    type: 'list',
    choices: ['y', 'n'],
    default: 'n',
  })
  parseReIndex(val: string): string {
    return val;
  }
}
