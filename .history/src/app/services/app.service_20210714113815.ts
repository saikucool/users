import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MockData } from '../testing/mock-data';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  behaviourData$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) { }
  getJson(URL: string) {
    return this.http.get(URL);
  }
}
