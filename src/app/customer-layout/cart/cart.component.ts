import { Component, OnInit } from '@angular/core';
import {GlobalCart} from '../globalcart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  productList:any;
  
  constructor(private gc: GlobalCart) { 
    var retrievedData = sessionStorage.getItem("currentCart");        
    this.productList= JSON.parse(retrievedData); 
    
  }

  ngOnInit() {
    console.log(this.productList);
  }

}
