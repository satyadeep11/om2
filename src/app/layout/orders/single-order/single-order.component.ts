import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit {

  @Input() newCart;
  @Input() editCheck;
  @Output() editCheckChange = new EventEmitter<boolean>();
  
  
  Close(){
      this.editCheck=false;
      this.editCheckChange.emit(this.editCheck);
    }

  constructor() {    
   }

  ngOnInit() {
  }
  

}
