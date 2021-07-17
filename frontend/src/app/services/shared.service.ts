import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  apiUrl = "http://127.0.0.1:8000/"

  constructor( private http: HttpClient) { }

  getDeps(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl + 'department');
  }
  
  postDep(val: any) {
    console.log('enviei isto', val);
    return this.http.post(this.apiUrl + 'department/', val)
  }
}
