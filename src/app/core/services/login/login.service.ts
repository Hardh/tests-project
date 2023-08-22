import { Injectable } from '@angular/core';
import { HttpService } from "../../http.service";
import { delay, of } from "rxjs";
import { FormBuilder, Validators } from "@angular/forms";
import { LoginModel } from "../../models/loginModel";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly BASE_PATCH = 'login';

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) {
  }

  login(model: LoginModel) {
    // Simulando uma chamada de login com certo tempo de resposta.
    return of({ value: 'ABC' }).pipe(delay(2000));
    // return this.httpService.post<{ value:string }>('', model);
  }

  loginForm() {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }
}
