import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  api_url: string = 'http://localhost:8000/';
  
  constructor( private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.api_url + 'accounts/api/auth/', { username, password }, httpOptions).pipe(
        map(user => {
          if (user & user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            console.log("authenticated");
          }
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  registerNewUser(value: any):Observable<any> {
    console.log('this is the user data', value);
    return this.http.post(this.api_url + 'accounts/register/', {value})
  }
}
