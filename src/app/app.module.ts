import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { NgModule } from '@angular/core';
import { SearchModule } from './search/search.module'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule  } from '@angular/fire/firestore'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerComponent } from './player/player.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SideMenuComponent } from './side-menu/side-menu.component'
import { SpotifyService } from "./services/spotify.service"
import { UserService } from "./services/user.service"
import { PlaylistModule } from "./playlist/playlist.module";
import { SpotifySuccessComponent } from './pages/spotify-success/spotify-success.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingComponent } from './pages/setting/setting.component';
import { PublishComponent } from './pages/publish/publish.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PlayerComponent,
    LoginComponent,
    HomeComponent,
    SideMenuComponent,
    SpotifySuccessComponent,
    SignupComponent,
    ProfileComponent,
    SettingComponent,
    PublishComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatDividerModule,
    MatButtonModule,  
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    
    SearchModule,
    PlaylistModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SpotifyService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
