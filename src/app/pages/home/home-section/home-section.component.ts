import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  @Input()
  title = "";

  @Input()
  productItems: any;

  constructor() { }

  ngOnInit(): void {
  }

}
