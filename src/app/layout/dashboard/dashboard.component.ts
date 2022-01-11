import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username: string = "";
  x!: string;

  constructor() { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    this.username = JSON.parse(localStorage.getItem('username')!);
  }

  getButtonTitle() {
    return 'click me'
  }

  y() {
    console.log(this.x);
  }
}
