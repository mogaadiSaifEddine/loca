import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserService } from './services/user.service';
import { UserCardComponent } from './uiComponents/user-card/user-card.component';
// import slice pipe
import { SlicePipe } from '@angular/common';
import { DividerComponent } from './uiComponents/divider/divider.component';
import { NewsComponent } from './pages/home/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCardComponent,
    DividerComponent,
    NewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService, HttpClient, SlicePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
