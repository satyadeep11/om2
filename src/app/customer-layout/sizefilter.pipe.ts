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
       return items.filter( it => {        
        if(it.A1_Label!=null){          
            if(it.A1_Label.includes(searchtext)){           
              return(it);
            } 
          }       
      });
      
   }
} 