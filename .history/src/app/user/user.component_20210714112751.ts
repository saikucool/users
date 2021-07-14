import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users = [];
  page: number = 1;
  perPage:number =2;
  totalItems:number=12;
  constructor(private http: AppService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.getJson("https://reqres.in/api/users?page=1").subscribe(res => {
      const data = res as any;
      this.users = data.data;
      this.perPage = data.per_page;
      totalItems
    })
  }
}
