import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'pricefilter'
})
export class PriceFilterPipe implements PipeTransform {
  transform(items: any[], startPrice:number , endPrice:number): any[] {
      if(!items) return [];
      if(!startPrice) return items;      
      if(!endPrice) return items;
      return items.filter( it => {
          if((parseInt(it.Price)>=startPrice)  && (parseInt(it.Price) <= endPrice)){
            return it;
          }
      });
   }
} 