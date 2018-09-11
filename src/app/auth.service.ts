import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Person,Cart} from './login/login.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : Http) { }

  login(person): Observable<Person>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/login.php",
      person,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  getCart(product:Cart): Observable<Cart>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/get-cart.php",
      product,
      options
    ).pipe(map((res: Response) => res.json()));
  }
}
