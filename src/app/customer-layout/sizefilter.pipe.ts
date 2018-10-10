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
      console.log()
       return items.filter( it => {
        
        if(it.product.A1_Label!=null){ 
         
            if(it.product.A1_Label.includes(searchtext)){    
              console.log(it.product.A1_Label,searchtext)             
              return(it);
            } 
          }       
      });
      
   }
} 