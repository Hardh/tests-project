import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {canActivateAuthLogged, canActivateAuthNotLoggedIn} from "./core/guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'login', canActivate: [canActivateAuthNotLoggedIn], loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: 'user-home', canActivate: [canActivateAuthLogged], loadChildren: () => import('./modules/user-home/user-home.module').then(m => m.UserHomeModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
