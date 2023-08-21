import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly TOKEN_LOCATION = 'token';

  constructor() { }

  saveToken(value:string) {
    localStorage.setItem(this.TOKEN_LOCATION, value);
  }

  userIsLoggedIn() {
    const value = localStorage.getItem(this.TOKEN_LOCATION);
    return !!value;
  }

  getToken() {
    const value = localStorage.getItem(this.TOKEN_LOCATION);
    return value;
  }
}
