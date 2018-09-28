import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sizefilter',
  pure: false
})
export class SizeFilterPipe implements PipeTransform {
    
  transform(items: any[], searchtext): any[] {
    var x=[];
      if(!items) return [];     
      if(searchtext=='') return items;  
       items.filter( it => {
        it.sizes.filter(it1=>{            
            if(it1.A1_Label==searchtext){              
                x.push(it);
            }
        });
      });
      return x;
   }
} 