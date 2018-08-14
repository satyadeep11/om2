import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InviteUserList} from './invite-list/invite-list.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InviteListService {

  constructor(private _http : Http) { }

  invitelist(): Observable<InviteUserList>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/invite-list.php",
      options
    ).pipe(map((res: Response) => res.json()));
  }

  pendinglist(): Observable<InviteUserList>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/invite-pending-list.php",
      options
    ).pipe(map((res: Response) => res.json()));
  }

  acceptedlist(): Observable<InviteUserList>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this._http.post(
      "http://localhost/php_api/invite-accepted-list.php",
      options
    ).pipe(map((res: Response) => res.json()));
  }
} 
