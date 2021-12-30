import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Login Page';
  username: string = "";
  password: string = "";


  constructor() { }


  ngOnInit() { }


  // ? set username value

  // onTypeUsername(event: Event) {
  //   this.username = (<HTMLInputElement>event.target).value;
  // }


  onSignin() {
    let user = { "username": this.username, "password": this.password }
    let userData = JSON.stringify(user);
    localStorage.setItem('user', userData);
    console.log(localStorage.length)
  }
}
