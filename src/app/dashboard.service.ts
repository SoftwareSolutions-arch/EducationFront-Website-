import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getServerPath} from '../app/shared/app.config';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = getServerPath();
  constructor(private http: HttpClient) { }
  
  SearchBar(val) {
     console.log("====================" +val.searchstring);



    let jsonInput = {
     
      searchstring: val.searchstring
    }
    return this.http.post(`${this.apiUrl}/authApi/searchcolleg`, jsonInput);
  }


}
