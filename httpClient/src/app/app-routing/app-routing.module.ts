import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { QuestionComponent } from '../question/question.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { QuestionDetailsComponent } from '../question-details/question-details.component';
import { registerLocaleData } from '@angular/common';
import { QuizComponent } from '../quiz/quiz.component';
import { ResultComponent } from '../result/result.component';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { PlayComponent } from '../play/play.component';


const routes: Routes = [
   { 
     path: 'users', 
     component: UserComponent 
   },
   { 
    path: 'play', 
    component: PlayComponent 
   },
   { 
    path: 'questions', 
    component: QuestionComponent 
   },
   { 
     path: 'user/add', 
     component: AddUserComponent 
   },
   { 
    path: 'question/add', 
    component: AddQuestionComponent 
   },
   { 
     path: 'users/:id', 
     component: UserDetailsComponent 
   },
   { 
    path: 'questions/:id', 
    component: QuestionDetailsComponent 
   },
   { 
     path: '', 
     redirectTo: '/add-user', 
     pathMatch: 'full'
   }, 
   {
     path: 'add-user',
     component: AddUserComponent
   },
   {
    path: 'add-question',
    component: AddQuestionComponent
   },
   {
     path: 'quiz',
     component: QuizComponent
   },
   {
     path: 'result',
     component: ResultComponent
   }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}