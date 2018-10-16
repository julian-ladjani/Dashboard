import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
    loginService: LoginService;
    signingUp: boolean;
    loginForm: FormGroup;
    userForm: FormGroup;
    loginError: string;
    userError: string;

    constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
      this.loginService = new LoginService(http, router);
      this.signingUp = false;
      this.loginError = '';
      this.userError = '';
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
          validator: this.matchPassword
      });
    }

    ngOnInit() {}

    login(email, password) {
        const jsonLoginForm = {
            email: email,
            password: password
        };
        this.loginService.login(jsonLoginForm).then(responce => {
            if (responce['success']) {
                window.localStorage.setItem('token', responce['token']);
                this.router.navigateByUrl('/home');
            } else if (responce['message']) {
                this.loginError = responce['message'];
            }
        });
    }

    signUp(username, email, password) {
        const jsonUserForm = {
            username: username,
            email: email,
            password: password
        };
        this.loginService.signUp(jsonUserForm).then(responce => {
            if (responce['success']) {
                this.login(email, password);
            } else if (responce['message']) {
                this.userError = responce['message'];
            }
        });
    }

    matchPassword(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('passwordConfirm').value) {
            return {invalid: true};
        }
    }

}
