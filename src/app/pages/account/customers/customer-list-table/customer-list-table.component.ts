import { Component, OnInit } from '@angular/core';

export interface Customer {
  name: string;
  isSubscribed: boolean;
  orderCount: number;
  totalSpent: number;
  address: string;
}

const ELEMENT_DATA: Customer[] = [
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
  {name: 'Abdullah Abdallah', isSubscribed: false, orderCount: 1, totalSpent: 100, address: 'Kuala Lumpur' },
];


@Component({
  selector: 'customer-list-table',
  templateUrl: './customer-list-table.component.html',
  styleUrls: ['./customer-list-table.component.scss']
})
export class CustomerListTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'isSubscribed', 'orderCount', 'totalSpent'];
  data = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
