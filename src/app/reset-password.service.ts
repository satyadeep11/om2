import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { userPassword } from './reset-password/userPassword'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private _http : Http) { }

  reset(person): Observable<userPassword>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/resetpassword.php",
      person,
      options
    ).pipe(map((res: Response) => res.json()));
  }
}
 