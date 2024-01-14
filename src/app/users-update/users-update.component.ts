import { Component, OnInit } from '@angular/core';
import { UsersUpdateService } from './users-update.service';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.updateUser();
  }

  
  updateUser(): void {
    if (this.id !== null) {
      this.updatedData.id = this.id;
      this.usersUpdateService.updateUser(this.id, this.updatedData).subscribe(
        (user) => {
          this.user = user;
          this.router.navigate(['/users', this.id]);
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
