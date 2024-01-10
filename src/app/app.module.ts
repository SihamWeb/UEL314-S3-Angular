import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { UsersGetByIdComponent } from './users-get-by-id/users-get-by-id.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';
import { UsersService } from './users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    UsersComponent,
    MenuComponent,
    UsersGetByIdComponent,
    UsersCreateComponent,
    UsersUpdateComponent,
    UsersDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
