import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  host: {
    class: 'flex flex-col flex-grow'
  },
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  menuWidth = 250; 

  constructor() { }

  ngOnInit(): void {
  }

  message() {

  }

  follow() {

  }

}
