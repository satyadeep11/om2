import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PriceId } from './product-detail/product-detail.component';
import { CatId } from './products/products.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private _http : Http) { }

  product_detail(product): Observable<PriceId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/masterdb/single-product.php",
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  category_product(product): Observable<CatId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/masterdb/single-category.php",
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }
}
 