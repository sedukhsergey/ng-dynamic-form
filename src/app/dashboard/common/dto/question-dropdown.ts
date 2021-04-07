import { QuestionBase } from './question-base.dto';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
}
