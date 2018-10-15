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

    async Login() {
        this.loginService.login(JSON.stringify(this.loginForm.getRawValue())).then(val => {
            console.log('Login Result:', val);
        });
    }

    async SignUp() {
        this.loginService.signUp(JSON.stringify(this.userForm.getRawValue())).then(val => {
            console.log('Signup Result:', val);
        });
    }

    MatchPassword(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('passwordConfirm').value) {
            return {invalid: true};
        }
    }

}
