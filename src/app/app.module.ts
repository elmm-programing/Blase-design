import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    MainComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
