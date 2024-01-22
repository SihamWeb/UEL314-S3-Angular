import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { UsersGetByIdComponent } from './users-get-by-id/users-get-by-id.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersService } from './users/users.service';
import { UsersGetByIdService } from './users-get-by-id/users-get-by-id.service';
import { UsersUpdateService } from './users-update/users-update.service';
import { UsersDeleteService } from './users-delete/users-delete.service';
import { UsersCreateService } from './users-create/users-create.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    UsersComponent,
    MenuComponent,
    UsersGetByIdComponent,
    UsersCreateComponent,
    UsersUpdateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService,
    UsersGetByIdService,
    UsersUpdateService,
    UsersDeleteService,
    UsersCreateService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
