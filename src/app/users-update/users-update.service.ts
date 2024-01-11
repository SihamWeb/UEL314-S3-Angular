import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UsersUpdateService {

  constructor(private http: HttpClient) { }

  updateUser(id: string, updatedData: any): Observable<any>{
    return this.http.patch<any>(`${APIEndpoint}users/${id}`, updatedData);
  }
}
