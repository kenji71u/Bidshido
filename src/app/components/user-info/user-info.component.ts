import { Component, ContentChild, ViewChild, Input, OnInit, TemplateRef, AfterContentChecked, AfterContentInit } from '@angular/core';

interface UserInfo {
  profilePictureUrl: string,
  userId: string,
  name: string,
}

@Component({
  selector: 'user-extra-info',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class UserExtraInfo implements OnInit {

  @ViewChild('content') public templateRef: TemplateRef<any>;

  constructor() {}
  ngOnInit(): void {
  }
}

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input()
  user: UserInfo;

  @Input()
  hasProfilePicture = true;

  @Input()
  hasUsername = true;

  @Input()
  profilePictureSize = 16;

  @Input()
  usernameSize = 16;

  @Input()
  centerUsername = true;

  constructor() { }

  ngOnInit(): void {
  }

}
