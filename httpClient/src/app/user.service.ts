import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:8080/api/users';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  getUser(id: string): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

  deleteUser (user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user._id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }

  updateUser (user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions);
  }
}