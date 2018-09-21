import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Person,Cart} from './login/login.component';
import { map } from 'rxjs/operators';
import {GlobalCart} from './customer-layout/globalcart';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : Http,private gc: GlobalCart) { }

  login(person): Observable<Person>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/login.php";
  
    return this._http.post(
      link,
      person,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  getCart(product:Cart): Observable<Cart>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });    
    let link=this.gc.link+"/php_api/get-cart.php";
  
    return this._http.post(
      link,
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }
}
