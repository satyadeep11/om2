import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../../product-detail.service'; 

@Component({
  selector: 'app-genie',
  templateUrl: './genie.component.html',
  styleUrls: ['./genie.component.scss']
})
export class GenieComponent implements OnInit {
isLinear = true;
myData:any;
catList=[];
finalcatList='';
  constructor(private productDetailService: ProductDetailService) { 

    this.productDetailService.category_all().subscribe(user => {
      this.myData = user; 
      console.log(this.myData);      
    },
    error => console.log(error)
    );
  }

  ngOnInit() {
  }
AddRemoveCat(event,value){
  if ( event.target.checked ){
    this.catList.push(value);
    console.log(this.catList);
  }
  else{    
    this.catList.splice( this.catList.indexOf(value), 1 );
    console.log(this.catList);
  }
}
SaveCat(){
this.finalcatList=this.catList.join(", ");
console.log(this.finalcatList);
}
}
