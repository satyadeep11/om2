import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PriceId,Cart } from './product-detail/product-detail.component';
import { PID } from './cart/cart.component';
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

  category_product_all(): Observable<CatId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/masterdb/all-category.php",
      options
    ).pipe(map((res: Response) => res.json()));
  }

  addToCart(product:Cart): Observable<Cart>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/add-to-cart.php",
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  deleteFromCart(product:Cart): Observable<Cart>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/delete-from-cart.php",
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  deleteProduct(product:PID): Observable<PID>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/delete-product.php",
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }



}
 