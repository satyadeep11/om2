import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { userPassword } from './reset-password/userPassword'; 
import { map } from 'rxjs/operators';
import {GlobalCart} from './customer-layout/globalcart';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private _http : Http,private gc: GlobalCart) { }

  reset(person): Observable<userPassword>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/resetpassword.php";  
  
    return this._http.post(
      link,
      person,
      options
    ).pipe(map((res: Response) => res.json()));
  }
}
 