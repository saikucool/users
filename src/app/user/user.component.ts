import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  public users = [];
  asyncUsers: Observable<any>;
  page: number = 1;
  perPage: number = 2;
  totalItems: number = 12;
  constructor(private http: AppService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.asyncUsers = this.serverCall(this.page).pipe(tap(res => {
      const data = res as any;
      this.users = data.data;
      this.perPage = data.per_page;
      this.totalItems = data.total;
    }), map(res => res.data))
  }
  serverCall(page: number): Observable<any> {
    return this.http.getJson(page)
  }
  pageChanged(event) {
    this.page = event;
    this.getUsers();
  }
}

