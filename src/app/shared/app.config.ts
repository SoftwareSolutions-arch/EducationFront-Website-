import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
declare var http: any;

@Injectable({
  providedIn: 'root'
})
export class AppConfig implements OnInit {
  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  CheckUserSession() {
    if (localStorage.getItem('AuthKey') == null) {
      this.router.navigate(['/login']);
    }
  }
}

export function getServerPath() { 
  let returnValue;
  // returnValue   = 'http://localhost:8888';// Local server
  returnValue = 'https://alphawizz.org/Education';//Alphawizz Server
  return returnValue;
}
