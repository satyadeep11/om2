import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit {

  @Input() newCart;
 
  @Output() editCheckChange = new EventEmitter<boolean>();
  
  
  Close(){
     
      this.editCheckChange.emit(false);
    }

  constructor() {    
   }

  ngOnInit() {
  }
  

}
