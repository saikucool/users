import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  private base_url = `https://reqres.in/api/users?page=`
  getJson(page :number) {
    return this.http.get(this.base_url);
  }
}
