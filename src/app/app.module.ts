import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserService } from './services/user.service';
import { UserCardComponent } from './uiComponents/user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, UserCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
