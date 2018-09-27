import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'genderfilter'
})
export class GenderFilterPipe implements PipeTransform {
  transform(items: any[], searchText1: string,searchText2: string,searchText3: string): any[] {
    
      if(!items) return [];     
      searchText1 = searchText1.toLowerCase();
      searchText2 = searchText2.toLowerCase();
      searchText3 = searchText3.toLowerCase();
      // console.log(searchText1,searchText2,searchText3);
      return items.filter( it => {
         if(it.product.ProductName.toLowerCase().includes(searchText1)||it.product.ProductName.toLowerCase().includes(searchText2)||it.product.ProductName.toLowerCase().includes(searchText3)){
          return it;
         }
      });
   }
} 