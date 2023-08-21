import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {LoginService} from "src/app/core/services/login/login.service";
import {lastValueFrom} from "rxjs";
import {LoginModel} from "../../../../core/models/loginModel";
import {Router} from "@angular/router";
import {SessionService} from "../../../../core/services/session/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin?: FormGroup;
  public loadingLogin = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private session:SessionService
  ) {
  }

  ngOnInit(): void {
    this.mountForm();
  }

  async startLogin() {
    this.loadingLogin = true;
    const formValue = this.formLogin?.getRawValue();
    await this.login(formValue);
    this.loadingLogin = false;
    this.router.navigate(['user-home']);
  }

  async login(model: LoginModel) {
    const login$ = this.loginService.login(model);
    const token = await lastValueFrom(login$);
    this.session.saveToken(token.value);
  }

  private mountForm() {
    this.formLogin = this.loginService.loginForm();
  }
}
