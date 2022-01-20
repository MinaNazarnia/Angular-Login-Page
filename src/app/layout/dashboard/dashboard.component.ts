import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/shared/guards/auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, DoCheck {

  enterData: any;
  enteredTime: any;
  adminUsername!: string;
  adminPassword!: string;
  // x!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getEnterData();
  }

  ngDoCheck() {
    let currentTime: any = new Date();

    if (currentTime - (this.enteredTime) > 10 * 1000) {
      // console.log(currentTime - this.enteredTime);
      this.logOut();
    }
  }

  getEnterData() {
    this.enterData = JSON.parse(localStorage.getItem('enterData')!);
    this.enteredTime = Date.parse(this.enterData.enteredTime);
  }

  adminAccess() {
    this.router.navigate(['/admin-access']);
  }
  // getButtonTitle() {
  //   return 'click me'
  // }

  // y() {
  //   console.log(this.x);
  // }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/sign-in']);
  }

}
