import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ForgotUser} from './forgot-password/forgot-password.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private _http : Http) { }

  forgot(person): Observable<ForgotUser>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/forgot.php",
      person,
      options
    ).pipe(map((res: Response) => res.json()));
  }
} 
