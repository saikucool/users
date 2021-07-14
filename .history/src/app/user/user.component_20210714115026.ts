import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'jquery';
import { Observable } from 'rxjs';
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
  loading: boolean;
  constructor(private http: AppService) { }

  ngOnInit(): void {
    this.getUsers(this.page);
  }
  getUsers(pageNumber: any) {
    this.loading = true;
        this.asyncUsers = this.serverCall(pageNumber).pipe(
          tap(res => {
            const data = res as any;
            this.users = data.data;
            this.perPage = data.per_page;
            this.totalItems = data.total;z
              this.loading = false;
          }),
          map(res => res.items)
      );
        
        this.http.getJson(`https://reqres.in/api/users?page=${pageNumber}`).subscribe(res => {
      const data = res as any;
      this.users = data.data;
      this.perPage = data.per_page;
      this.totalItems = data.total;
    })
  }
  serverCall(page: number): Observable<any> {
    return this.http.getJson(`https://reqres.in/api/users?page=${page}`)
}
  pageChanged(event) {
    this.getUsers(event);
  }
}
function tap(arg0: (res: any) => void): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}
