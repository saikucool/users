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
  constructor(private http: AppService) { }

  ngOnInit(): void {
  }
  getPermutations() {
      this.http.getJson("http://localhost:8080/permutations/phoneNumber/").subscribe(res => {
        this.users = res as any;
      })
}
