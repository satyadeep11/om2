import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PriceId,Cart } from './product-detail/product-detail.component';
import { PID,CID} from './cart/cart.component';
import { OrderConfirm } from '../layout/orders/single-order/single-order.component';
import { CatId } from './products/products.component';
import { map } from 'rxjs/operators';
import {GlobalCart} from './globalcart';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private _http : Http,private gc: GlobalCart) { }

  product_detail(product): Observable<PriceId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/masterdb/single-product.php";
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  category_product(product): Observable<CatId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/masterdb/single-category.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  category_product_all(product): Observable<CatId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/masterdb/all-category.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  category_all(): Observable<CatId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/masterdb/get-all-categories-list.php";
  
    return this._http.post(
      link,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  all_products(): Observable<CatId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/masterdb/all-products.php";
  
    return this._http.post(
      link,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  new_products(): Observable<CatId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/masterdb/get-new-product.php";
  
    return this._http.post(
      link,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  addToCart(product:Cart): Observable<Cart>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/add-to-cart.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  deleteFromCart(product:Cart): Observable<Cart>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/delete-from-cart.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  deleteProduct(product:PID): Observable<PID>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/delete-product.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  SubmitCart(product:CID): Observable<PID>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/submit-product.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  OrderConfirm(product:OrderConfirm): Observable<OrderConfirm>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/order-confirm.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  getCustomerOrdersList(product:Cart): Observable<Cart>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });    
    let link=this.gc.link+"/php_api/get-customer-orders-list.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  get_category_products(product:Cart): Observable<Cart>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/masterdb/get-all-cat-products-list.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  update_category(product:Cart): Observable<Cart>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/insert-category.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }


}
 