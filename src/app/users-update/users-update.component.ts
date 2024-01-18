import { Component, OnInit } from '@angular/core';
import { UsersUpdateService } from './users-update.service';
import { UsersGetByIdService } from '../users-get-by-id/users-get-by-id.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent implements OnInit {
  user: any;
  updatedData: any = {};
  id: string = '';
  message: string [] = [];

  constructor(
    private route: ActivatedRoute, 
    private usersUpdateService: UsersUpdateService,
    private usersGetByIdService: UsersGetByIdService,
    private router: Router
  ) {}

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

  
  updateUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.updatedData.id = id;
      this.usersUpdateService.updateUser(id, this.updatedData).subscribe(
        (user) => {
          this.user = user;
          this.router.navigate(['/users', id]);
        },
        (error) => {
          this.message = [];
  
          if (!this.updatedData.firstname && !this.updatedData.lastname) {
            this.message.push('Saisissez au moins un nouveau firstname ou lastname !');
            return;
          }
           
          if (error.status === 404) {
            this.message.push('L\'utilisateur avec cet id est introuvable.');
          }
        }
      );
    } else {
      this.message.push('Id manquant !');
    }
  }
          
}
