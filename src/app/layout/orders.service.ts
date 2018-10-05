import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { InviteUserList } from './invite-list/invite-list.component';
import { OrderId } from './orders/orders.component';
import { ColorSet } from './orders/single-order/single-order.component';
import { GlobalCart} from '../customer-layout/globalcart';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _http : Http,private gc: GlobalCart) { }

  getOrders(): Observable<InviteUserList>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/order-list.php";    
  
    return this._http.post(
      link,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  getApprovedOrders(): Observable<InviteUserList>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/order-list-full.php";    
  
    return this._http.post(
      link,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  getOrder(product:OrderId): Observable<OrderId>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });    
    let link=this.gc.link+"/php_api/get-single-order.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  getColors(product:ColorSet): Observable<ColorSet>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });    
    let link=this.gc.link+"/php_api/masterdb/get-colors.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }

}
