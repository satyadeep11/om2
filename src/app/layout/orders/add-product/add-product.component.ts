import { Component, OnInit,Input,ViewChild } from '@angular/core';
import {MatSelect} from '@angular/material';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  searchText='';

  @Input() allProducts;
  @ViewChild(MatSelect) mySelector: MatSelect;

  constructor() { }

  ngOnInit() {
    console.log(this.allProducts);    
  }
  openSelector() {
    this.mySelector.open();
 }

}
