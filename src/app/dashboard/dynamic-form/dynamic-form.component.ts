import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from '../common/dto/question-base.dto';
import {FormGroup} from '@angular/forms';
import {QuestionControlService} from '../question/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] | [] = [];
  form: FormGroup = new FormGroup({});
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
