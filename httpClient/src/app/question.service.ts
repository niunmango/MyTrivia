import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsUrl = 'http://localhost:8080/api/questions';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getQuestions (): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl)
  }

  getQuestion(id: string): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Question>(url);
  }

  getRandomQuestion(): Observable<Question> {
    const url = `${this.questionsUrl}random`;
    return this.http.get<Question>(url);
  }

  addQuestion (question: Question): Observable<Question> {
    return this.http.post<Question>(this.questionsUrl, question, httpOptions);
  }

  deleteQuestion (question: Question | string): Observable<Question> {
    const id = typeof question === 'string' ? question : question._id;
    const url = `${this.questionsUrl}/${id}`;

    return this.http.delete<Question>(url, httpOptions);
  }

  updateQuestion (question: Question): Observable<any> {
    return this.http.put(this.questionsUrl, question, httpOptions);
  }
}