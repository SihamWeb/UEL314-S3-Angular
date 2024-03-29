

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UsersGetByIdService {

  constructor(private http: HttpClient) { }

  getOneUser(id: string): Observable<any>{
    return this.http.get(`${APIEndpoint}users/${id}`);
  }
}
