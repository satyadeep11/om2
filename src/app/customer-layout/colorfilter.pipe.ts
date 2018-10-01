import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'colorfilter',
  pure: false
})
export class ColorFilterPipe implements PipeTransform {
  transform(items: any[], searcharr:any[]): any[] {

    if(!items) return [];     
    if(!searcharr) return []; 
    if(searcharr.length==0) return items;      
    return items.filter( it => {

        if(it.product.Colorgroups!=null){
            if(searcharr.some(substring=>it.product.Colorgroups.includes(substring))){              
                return it;
            }
        }
    });
 }
} 