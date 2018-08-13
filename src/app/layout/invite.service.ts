import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InviteUser} from './invite/invite.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private _http : Http) { } 

  invite(person): Observable<InviteUser>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/invite.php",
      person,
      options
    ).pipe(map((res: Response) => res.json()));
  }
}
