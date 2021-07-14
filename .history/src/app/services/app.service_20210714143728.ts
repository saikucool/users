import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  `https://reqres.in/api/users?page=${page}`
  getJson(URL: string) {
    return this.http.get(URL);
  }
}
