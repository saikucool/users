import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public permutations = [];
  public phonenumber = "";
  page: number = 1;
  constructor(private http: AppService) { }

  ngOnInit(): void {
  }
  getPermutations() {
    if (this.phonenumber.toString().length == 7 || this.phonenumber.toString().length == 10) {
      this.http.getJson("http://localhost:8080/permutations/phoneNumber/" + this.phonenumber).subscribe(res => {
        this.permutations = res as any;
      })
    } else {
      this.permutations = [];
      alert("please provide 7 or 10 digit number");
    }

  }
}
