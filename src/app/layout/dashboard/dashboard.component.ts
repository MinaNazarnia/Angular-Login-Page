import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onLoad() {
    let userData = JSON.parse(localStorage.getItem('user')!);
    console.log(userData);
  }

}
