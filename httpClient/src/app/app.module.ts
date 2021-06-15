import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    QuestionComponent,
    UserDetailsComponent,
    QuestionDetailsComponent,
    AddUserComponent,
    AddQuestionComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
