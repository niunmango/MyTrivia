import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  question = new Question() ;
  submitted = false;
  message: string;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.questionService.getQuestion(id)
      .subscribe(question => this.question = question);
  }

  update(): void {
    this.submitted = true;
    this.questionService.updateQuestion(this.question)
        .subscribe(result => this.message = "Question Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.questionService.deleteQuestion(this.question._id)
        .subscribe(result => this.message = "Question Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}