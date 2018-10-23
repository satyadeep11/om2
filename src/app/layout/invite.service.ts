import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InviteUser,SecurityGroups} from './invite/invite.component';
import { map } from 'rxjs/operators';
import {GlobalCart} from '../customer-layout/globalcart';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private _http : Http,private gc: GlobalCart) { } 

  invite(person): Observable<InviteUser>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/invite.php";    
  
    return this._http.post(
      link,
      person,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  getSecurityGroups(): Observable<SecurityGroups>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/masterdb/get-security-groups.php";    
  
    return this._http.post(
      link,
      options
    ).pipe(map((res: Response) => res.json()));
  }
}
