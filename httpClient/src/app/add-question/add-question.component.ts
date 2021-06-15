import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})

export class AddQuestionComponent{

  question = new Question();
  submitted = false;

  constructor(
    private questionService: QuestionService,
    private location: Location
  ) { }

  newQuestion(): void {
    this.submitted = false;
    this.question = new Question();
  }

 addQuestion() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.question);
    this.questionService.addQuestion(this.question)
        .subscribe();
  }
}
