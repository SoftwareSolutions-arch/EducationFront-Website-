import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getServerPath } from '../../app/shared/app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = getServerPath();
  constructor(private http: HttpClient) { }
  
  loginUser(val) {
    let jsonInput = {
      username: val.Email,
      password: val.password
    }
    return this.http.post(`${this.apiUrl}/authApi/login`, jsonInput);
  }

  ForgotPassword(val) {
    let jsonInput = {
      "email": val.Email,
    }
    return this.http.post(`${this.apiUrl}/authApi/forgetpassword`, jsonInput);
  }

}
