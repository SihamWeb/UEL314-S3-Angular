import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UsersCreateService {

  constructor(private http: HttpClient) { }

  createUser(newData: any): Observable<any>{
    return this.http.post<any>(`${APIEndpoint}users`, newData);
  }
}
