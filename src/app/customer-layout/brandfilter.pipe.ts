import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'brandfilter',
  pure: false//important when passing array to pipes
})
export class BrandFilterPipe implements PipeTransform {
  transform(items: any[], searcharr:any[]): any[] {
      if(!items) return [];     
      if(!searcharr) return []; 
      if(searcharr.length==0) return items; 
      // console.log(searchText1,searchText2,searchText3);
      return items.filter( it => {
          if(searcharr.includes(it.product.Brand)){              
              return it;
          }
      });
   }
} 