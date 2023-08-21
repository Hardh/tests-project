import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {Injectable, inject} from "@angular/core";
import {SessionService} from "../services/session/session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private session: SessionService,
  ) {
  }

  canActivateLogged(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !!localStorage.getItem('token');
  }

  canActivateNotLoggedIn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !localStorage.getItem('token');
  }
}

export const canActivateAuthLogged: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).canActivateLogged(route, state);
};

export const canActivateAuthNotLoggedIn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).canActivateNotLoggedIn(route, state);
};

