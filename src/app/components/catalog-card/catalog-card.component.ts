import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})
export class CatalogCardComponent implements OnInit {

  @Input()
  bannerUrl = "";

  @Input() 
  title = "";

  @Input()
  itemCount = "";

  @Input()
  color = "";

  constructor() { }

  ngOnInit(): void {
  }

}
