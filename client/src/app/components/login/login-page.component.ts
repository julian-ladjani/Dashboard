import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
    loginService: LoginService;
    signUp: boolean;
    loginForm: FormGroup;
    userForm: FormGroup;

    constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
      this.loginService = new LoginService(http, router);
      this.signUp = false;
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]],
      });
      this.userForm = this.formBuilder.group({
          username: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]],
          passwordConfirm: ['', [Validators.required]]
      }, {
          validator: this.MatchPassword
      });
    }

    ngOnInit() {}

    Login() {
        const jsonLoginForm = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value,
        }
        this.loginService.login(jsonLoginForm).then(val => {
            console.log('Login Result:', val);
        });
    }

    SignUp() {
        const jsonUserForm = {
            username: this.userForm.get('username').value,
            email: this.userForm.get('email').value,
            password: this.userForm.get('password').value,
        }
        this.loginService.signUp(jsonUserForm).then(val => {
            console.log('Signup Result:', val);
        });
    }

    MatchPassword(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('passwordConfirm').value) {
            return {invalid: true};
        }
    }

}
