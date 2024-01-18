import { Component, OnInit } from '@angular/core';
import { UsersGetByIdService } from './users-get-by-id.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersDeleteService } from '../users-delete/users-delete.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { finalize, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-users-get-by-id',
  templateUrl: './users-get-by-id.component.html',
  styleUrls: ['./users-get-by-id.component.scss']
})
export class UsersGetByIdComponent implements OnInit {
  user: any = {};
  id: string = '';  
  message: string [] = [];

  constructor(
    private route: ActivatedRoute, 
    private usersGetByIdService: UsersGetByIdService,
    private router: Router,
    private usersDeleteService: UsersDeleteService
  ){ }

  ngOnInit(): void {
    this.getOneUser();
  }

  getOneUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.usersGetByIdService.getOneUser(id).subscribe(
        user => {
          this.user = user;
        },
      );
    }
  }

  deleteUser(id: string): void {

    const idToDelete = this.route.snapshot.paramMap.get('id') || '';

    if (idToDelete) {
      this.usersDeleteService.deleteUser(idToDelete).pipe(
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
          this.redirectionToAllUsers();
        })
      )
      .subscribe();
    } else {
      this.message.push('Id manquant !');
    }
  }

  redirectionToAllUsers(): void {
    this.router.navigate(['/users']);
  }
}
