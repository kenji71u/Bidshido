import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  @Input()
  profilePictureUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
