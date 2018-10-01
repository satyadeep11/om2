import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'genderfilter',
  pure: false
})
export class GenderFilterPipe implements PipeTransform {
  transform(items: any[], searcharr:any[]): any[] {
    if(!items) return [];     
    if(!searcharr) return []; 
    if(searcharr.length==0) return items;      
    return items.filter( it => {
        if(searcharr.includes(it.product.Gender)){              
            return it;
        }
    });
 }
} 