import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersDeleteService } from './users-delete.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.scss']
})
export class UsersDeleteComponent implements OnInit {
  id: string = '';
  message: string [] = [];  
  
  constructor(
    private route: ActivatedRoute,
    private usersDeleteService: UsersDeleteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.deleteUser();
  }

  deleteUser(): void {
    if (this.id !== null) {
      this.usersDeleteService.deleteUser(this.id).subscribe(
        (response) => {
          console.log('Réponse de suppression:', response);
          if (response && response.status === 200) {
            console.log('Statut de la réponse:', response.status);
            this.message.push('Supprimé avec succès !');
          } else {
            this.message.push('Une erreur s\'est produite lors de la suppression de l\'utilisateur...');
          }
        },
        (error) => {
          this.message = [];

          if (error.status === 404) {
            this.message.push('L\'utilisateur avec cet id est introuvable.');
          } else {
            this.message.push('Une erreur s\'est produite lors de la suppression de l\'utilisateur...');
          }
        }
      );
    } else {
      this.message.push('Id manquant !');
    }
  }
}
