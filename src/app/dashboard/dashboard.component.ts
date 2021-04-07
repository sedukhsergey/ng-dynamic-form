import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {QuestionBase} from './common/dto/question-base.dto';
import {DynamicFormService} from './dynamic-form/dynamic-form.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  questions: QuestionBase<any>[] | [] = [];

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    const subscription = this.dynamicFormService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
    this.subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
