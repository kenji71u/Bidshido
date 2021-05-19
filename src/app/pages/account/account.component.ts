import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  host: {
    class: 'flex flex-col flex-grow'
  },
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  menuWidth = 250;

  constructor() { }

  ngOnInit(): void {
  }

  editProfile() {
    
  }

}
