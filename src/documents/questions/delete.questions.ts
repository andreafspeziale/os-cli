import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'delete-questions' })
export class DeleteQuestions {
  @Question({
    message: 'Are you sure you want to delete the document/s?',
    name: 'choice',
    type: 'list',
    choices: ['y', 'n'],
    default: 'n',
  })
  parseChoice(val: string): string {
    return val;
  }
}
