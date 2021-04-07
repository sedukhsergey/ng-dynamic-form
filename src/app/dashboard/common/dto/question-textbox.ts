import { QuestionBase } from './question-base.dto';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
}
