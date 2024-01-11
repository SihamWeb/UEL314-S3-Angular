import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersGetByIdComponent } from './users-get-by-id/users-get-by-id.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'users', component:UsersComponent },
  { path: 'users/:id', component:UsersGetByIdComponent },
  { path: 'users/create', component:UsersCreateComponent },
  { path: 'updateuser/:id', component:UsersUpdateComponent },
  { path: 'users/:id/delete', component:UsersDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
