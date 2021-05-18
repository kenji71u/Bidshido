import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input()
  rating = 0;

  @Input()
  starSize = 12;

  constructor() { }

  ngOnInit(): void {
  }

}
