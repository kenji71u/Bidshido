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

  constructor() { }

  ngOnInit(): void {
    
  }

}
