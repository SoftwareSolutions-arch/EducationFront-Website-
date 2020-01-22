import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getServerPath } from '../../../app/shared/app.config';

@Injectable({
  providedIn: 'root'
})
export class SearchcollegeService {
  apiUrl = getServerPath();
  constructor(private http: HttpClient) { }
  
  searchcolleges(val) {
    let jsonInput = {
      searchstring: val,
    }
    return this.http.post(`${this.apiUrl}/authApi/searchcollege`, jsonInput);
  }

  // ForgotPassword(val) {
  //   let jsonInput = {
  //     "email": val.Email,
  //   }
  //   return this.http.post(`${this.apiUrl}/authApi/forgetpassword`, jsonInput);
  // }

}