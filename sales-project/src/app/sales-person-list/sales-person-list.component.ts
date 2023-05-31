import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //creating an array of SalesPerson
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup","Soni","anupsoni@gmail.com",600000),
    new SalesPerson("Anup","Soni","anupsoni@gmail.com",700000),
    new SalesPerson("Anup","Soni","anupsoni@gmail.com",400000),
    new SalesPerson("Anup","Soni","anupsoni@gmail.com",900000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
