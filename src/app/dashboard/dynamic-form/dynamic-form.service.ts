import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import { DropdownQuestion } from '../common/dto/question-dropdown';
import { QuestionBase } from '../common/dto/question-base.dto';
import { TextboxQuestion } from '../common/dto/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  getQuestions(): Observable<QuestionBase<string>[]> {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        value: 'solid',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
