import { Question, QuestionSet } from 'nest-commander';

// TODO: test questions
@QuestionSet({ name: 'delete-questions' })
export class DeleteQuestions {
  @Question({
    message: 'Are you sure you want to delete the index?',
    name: 'choice',
    type: 'list',
    choices: ['y', 'n'],
    default: 'n',
  })
  parseChoice(val: string): string {
    return val;
  }
}
