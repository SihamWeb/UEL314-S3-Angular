import { Component, OnInit } from '@angular/core';
import { UsersGetByIdService } from './users-get-by-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-get-by-id',
  templateUrl: './users-get-by-id.component.html',
  styleUrls: ['./users-get-by-id.component.scss']
})
export class UsersGetByIdComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute, 
    private usersGetByIdService: UsersGetByIdService) 
  { }

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
}
