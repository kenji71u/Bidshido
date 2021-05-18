import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-image-gallery',
  templateUrl: './product-image-gallery.component.html',
  styleUrls: ['./product-image-gallery.component.scss']
})
export class ProductImageGalleryComponent implements OnInit {

  galleryWidth = 120;

  selectedIndex = 0;

  images = [
    {
      url: '/assets/images/mock_catalog_banner3.jpg'
    },
    {
      url: '/assets/images/mock_catalog_banner1.jpg'
    },
    {
      url: '/assets/images/mock_catalog_banner2.jpg'
    },
    {
      url: '/assets/images/mock_catalog_banner3.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  imageClicked(index: number): void {
    this.selectedIndex = index;
  }
}
