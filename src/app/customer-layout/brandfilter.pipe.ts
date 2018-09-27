import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'brandfilter',
  pure: false
})
export class BrandFilterPipe implements PipeTransform {
  transform(items: any[], searcharr:any[]): any[] {
      if(!items) return [];     
      if(!searcharr) return [];  
      // console.log(searchText1,searchText2,searchText3);
      return items.filter( it => {
          if(searcharr.includes(it.product.Brand)){              
              return it;
          }
      });
   }
} 