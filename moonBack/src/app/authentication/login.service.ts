import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _registerUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) { }

  loginInRequest(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
}
