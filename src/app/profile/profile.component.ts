import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: any = [];
  constructor() { }

  ngOnInit() {
    this.profileData = JSON.parse(localStorage.getItem('UserInfo'));
  }

}
