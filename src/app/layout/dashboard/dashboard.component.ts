import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username: string = "";
  adminUsername!: string;
  adminPassword!: string;
  // x!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    this.username = JSON.parse(localStorage.getItem('username')!);
  }

  adminAccess() {

    let adminUser = prompt("username");

    if (adminUser == "admin") {
      this.adminUsername = adminUser;
      let adminPass = prompt("password");
      // while (adminPass != "admin") {
      //   prompt("username");
      // }
      if (adminPass == "admin") {
        this.adminPassword = adminPass;
        this.router.navigate(['/admin-access']);
      } else {
        alert("password is not correct!");
      }
    } else {
      alert("username is not correct!");
    }

    // getButtonTitle() {
    //   return 'click me'
    // }

    // y() {
    //   console.log(this.x);
    // }
  }
}
