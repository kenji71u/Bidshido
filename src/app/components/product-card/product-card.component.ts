import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  posterProfileImageUrl = "";

  @Input()
  productName = "";

  @Input()
  productImageUrl = "";

  @Input()
  isSold = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  favoriteClicked(event: any) {
    event.preventDefault();
  }

  bookmarkClicked(event: any) {
    event.preventDefault();
  }

}
