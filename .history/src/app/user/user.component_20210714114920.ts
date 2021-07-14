import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
        this.asyncUsers = serverCall(this.meals, page).pipe(
          tap(res => {
              this.total = res.total;
              this.p = page;
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
  serverCall(meals: string[], page: number): Observable<any> {
    const perPage = 10;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return this.http.getJson(`https://reqres.in/api/users?page=${pageNumber}`)
}
  pageChanged(event) {
    this.getUsers(event);
  }
}
