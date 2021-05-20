import { Component, OnInit } from '@angular/core';


export interface Order {
  orderNumber: string;
  date: string;
  customer: string;
  totalPaid: number;
  isPaid: boolean;
  isFulfilled: boolean;
  itemCount: number;
  delivery: string;

}

const ELEMENT_DATA: Order[] = [
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' },
  { orderNumber: '123', date: '20 May 2021', customer: 'Abdullah Abdallah', totalPaid: 100, isPaid: true, isFulfilled: false, itemCount: 1, delivery: 'Peninsula Malaysia' }, 
];

@Component({
  selector: 'order-list-table',
  templateUrl: './order-list-table.component.html',
  styleUrls: ['./order-list-table.component.scss']
})
export class OrderListTableComponent implements OnInit {

  displayedColumns: string[] = ['orderNumber', 'date', 'customer', 'totalPaid', 'isPaid', 'isFulfilled', 'itemCount', 'delivery'];
  data = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
