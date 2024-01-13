
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UsersDeleteService {

  constructor(private http: HttpClient) { }

  deleteUser(id: string): Observable<any>{
    return this.http.delete<any>(`${APIEndpoint}users/${id}`).pipe(
      catchError((error) => {
        throw error; // Rethrow the error after logging.
      })
    );
  }
}
