import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'orderfilter',
  pure: false//important when passing array to pipes
})
export class OrderFilterPipe implements PipeTransform {
    transform(items: any[]): any[] {
        if(!items) return [];

        console.log(items);
        items.sort((a: any, b: any) => {
            if (a.ProductName < b.ProductName) {
              return -1;
            } else if (a.ProductName > b.ProductName) {
              return 1;
            } else {
              return 0;
            }
          });
          return items;
        
     }
} 