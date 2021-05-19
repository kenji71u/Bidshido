import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-grid-list',
  templateUrl: './product-grid-list.component.html',
  styleUrls: ['./product-grid-list.component.scss']
})
export class ProductGridListComponent implements OnInit {

  @Input()
  gridSize = 4;
  
  constructor() { }

  ngOnInit(): void {
  }

}
