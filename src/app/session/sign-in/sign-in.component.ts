import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  profileForm: FormGroup = new FormGroup({});

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[0][9]([0-4]|[9]){1}[0-9]{8}')]),
      password: new FormControl('', [Validators.required, Validators.min(6)]), // ! validator.min() does not work
      rememberMe: new FormControl(false),
    })
  }

  onSignin() {
    let enterData = {
      enteredTime: new Date(),
      username: JSON.stringify(this.profileForm.get('username')?.value)
    }

    // console.log(enterData.enteredTime);    

    localStorage.setItem('enterData', JSON.stringify(enterData));

    this.router.navigate(['/dashboard']);
  }

}