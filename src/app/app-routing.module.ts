import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUSerComponent } from './pages/home/add-user/add-user.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowUserComponent } from './pages/show-user/show-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'show-user', component: ShowUserComponent },
  { path: 'add-user', component: AddUSerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
