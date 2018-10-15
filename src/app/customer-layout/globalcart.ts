import { Injectable } from '@angular/core';

@Injectable()
export class GlobalCart {
 count:number=0;  
 productlist:any[]=[]; 
 productlistcategory:any[]=[]; 
 link="http://localhost";
}