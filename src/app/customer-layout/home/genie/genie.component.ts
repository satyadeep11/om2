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

}
