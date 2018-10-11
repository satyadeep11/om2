import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchfilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText1: string): any[] {
      if(!items) return [];     
      if(!searchText1) return items;
      searchText1 = searchText1.toLowerCase();
      // console.log(searchText1,searchText2,searchText3);
      return items.filter( it => {
         if(it.ProductName.toLowerCase().includes(searchText1)){
          return it;
         }
      });
   }
} 