import { Component, OnInit,Input,ViewChild } from '@angular/core';
import {MatSelect} from '@angular/material';
import { MatStepper } from '@angular/material';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  searchText='';
  selectedProduct:any;

  @Input() allProducts;
  @ViewChild(MatSelect) mySelector: MatSelect;

  constructor(public snackBar: MatSnackBar,) { }

  ngOnInit() {
    console.log(this.allProducts);    
  }
  openSelector() {
    this.mySelector.open();
 }
 CheckSelection(stepper: MatStepper) {
  if(this.selectedProduct!=undefined){
    stepper.next();
  }
  else{
    this.openSnackBar('No Product Selected','OK','red-snackbar');
  }
}
openSnackBar(msg,action,className)  {
  this.snackBar.open(msg,action, {
    duration: 250000,
    panelClass: [className]
  });
}

}
