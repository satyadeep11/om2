import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { newUser} from './signup/newUser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http : Http) { }

  register(person): Observable<newUser>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/liveregister.php",
      person,
      options
    ).pipe(map((res: Response) => res.json()));
  }
}
 