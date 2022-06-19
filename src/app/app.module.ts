import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

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
import { AddUSerComponent } from './pages/home/add-user/add-user.component';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderInterceptor } from './header.interceptor';
import { ListUsersComponent } from './pages/home/list-users/list-users.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCardComponent,
    DividerComponent,
    NewsComponent,
    ShowUserComponent,
    PrebuiltTemplateComponent,
    AddUSerComponent,
    ListUsersComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    FormBuilder,
    HttpClient,
    SlicePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
