import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  signUp: boolean;
  passwordConfirm: string;

  constructor() {
      this.signUp = false;
  }
  ngOnInit() {
  }

}
