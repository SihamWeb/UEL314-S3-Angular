import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersGetByIdComponent } from './users-get-by-id/users-get-by-id.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersUpdateComponent } from './users-update/users-update.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'users', component:UsersComponent },
  { path: 'createuser', component:UsersCreateComponent },
  { path: 'users/:id', component:UsersGetByIdComponent },
  { path: 'updateuser/:id', component:UsersUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
