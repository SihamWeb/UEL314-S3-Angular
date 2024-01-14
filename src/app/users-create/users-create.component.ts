import { Component, OnInit } from '@angular/core';
import { UsersCreateService } from './users-create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  user: any;
  newData: any = {};
  id: string = '';
  message: string [] = [];

  constructor(
    private route: ActivatedRoute,
    private usersCreateService: UsersCreateService,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
  }
  
  createUser(): void {
    if (!this.newData.firstname || !this.newData.lastname) {
      this.message.push('Vous devez saisir un prénom et un nom de famille.');
      return;
    }

    this.usersCreateService.createUser(this.newData).subscribe(
      (user) => {
        this.user = user;

        this.router.navigate(['/users', user.id]);

        this.refreshUsers();
      },
      (error) => {
        this.message = [];
        
        this.message.push('Une erreur a lieu pendant la création du nouvel utilisateur');
      }
    );
  }

  refreshUsers(): void {
    this.usersService.getAllUsers().subscribe(users => {
      this.user = users;
    });
  }
}
