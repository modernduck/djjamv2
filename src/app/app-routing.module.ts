import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }  from  './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { SettingComponent } from "./pages/setting/setting.component"
import { PublishComponent } from './pages/publish/publish.component'
import { SpotifySuccessComponent } from "./pages/spotify-success/spotify-success.component"
import { AngularFireAuthGuard, redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/auth-guard';
import { SignupComponent } from "./pages/signup/signup.component"

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { path:"login", component:LoginComponent, canActivate:[AngularFireAuthGuard], data:{authGuardPipe:redirectLoggedInToItems}},
  { path:"signup", component:SignupComponent, canActivate:[AngularFireAuthGuard], data:{authGuardPipe:redirectLoggedInToItems}},
  { path:"profile", component:ProfileComponent, canActivate:[AngularFireAuthGuard], data:{authGuardPipe:redirectUnauthorizedToLogin}},
  { path:"setting", component:SettingComponent, canActivate:[AngularFireAuthGuard], data:{authGuardPipe:redirectUnauthorizedToLogin}},
  { path:"publish", component:PublishComponent, canActivate:[AngularFireAuthGuard], data:{authGuardPipe:redirectUnauthorizedToLogin}},
  { path:'spotify-success', component:SpotifySuccessComponent },
  { path:"", component:HomeComponent, canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
