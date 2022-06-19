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
import { ShowUserComponent } from './pages/show-user/show-user.component';
import { PrebuiltTemplateComponent } from './uiComponents/prebuilt-template/prebuilt-template.component';
import { AddComponent } from './pages/home/add/add.component';
import { AddUSerComponent } from './pages/home/add-user/add-user.component';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCardComponent,
    DividerComponent,
    NewsComponent,
    ShowUserComponent,
    PrebuiltTemplateComponent,
    AddComponent,
    AddUSerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService, FormBuilder, HttpClient, SlicePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
