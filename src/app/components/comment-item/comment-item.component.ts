import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})

export class CommentItemComponent implements OnInit {

  @Input()
  level = 0;

  @Input()
  replies: any[] = [];

  @Input()
  canReply = true;

  constructor() { }

  ngOnInit(): void {
  }

}
