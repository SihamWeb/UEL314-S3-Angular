import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { UsersDeleteService } from '../users-delete/users-delete.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { finalize, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users?: any[];
  id: string = '';
  message: string [] = [];

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private usersDeleteService: UsersDeleteService
  ) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
    });

    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id){
      this.deleteUser(this.id); 
    }
  }

  deleteUser(id: string): void {
    if (this.id !== null) {
      this.usersDeleteService.deleteUser(id).pipe(
        catchError((error: HttpErrorResponse) => {
          this.message = [];

          if (error.status === 404) {
            const errorBody = error.error;

            if (errorBody && errorBody.message) {
              this.message.push(errorBody.message);
            } else {
              this.message.push('L\'utilisateur avec cet id est introuvable.');
            }
          } else {
            this.message.push('Une erreur s\'est produite lors de la suppression');
          }

          return [];
        }),
        finalize(() => {
          this.refreshUsers();
        })
      )
      .subscribe();
    } else {
      this.message.push('Id manquant !');
    }
  }

  refreshUsers(): void {
    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
