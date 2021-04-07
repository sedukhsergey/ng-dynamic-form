import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from '../common/dto/question-base.dto';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() question: QuestionBase<string> = new QuestionBase<string>();
  @Input() form: FormGroup = new FormGroup({});
  get isValid(): boolean {
    return this.form.controls[this.question.key].valid;
  }

}
