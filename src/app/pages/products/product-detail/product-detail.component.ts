import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  histories = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  favoriteClicked(event: any) {
    event.preventDefault();
  }

  bookmarkClicked(event: any) {
    event.preventDefault();
  }

  buyNow(): void {

  }

  bid(): void {
    
  }

}
