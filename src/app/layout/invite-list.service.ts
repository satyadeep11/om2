import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InviteUserList} from './invite-list/invite-list.component';
import { EmailString,CustomerUID} from './invite-list/invite-list.component';
import { map } from 'rxjs/operators';
import {GlobalCart} from '../customer-layout/globalcart';

@Injectable({
  providedIn: 'root'
})
export class InviteListService {

  constructor(private _http : Http,private gc: GlobalCart) { }

  invitelist(): Observable<InviteUserList>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/invite-list.php";    
  
    return this._http.post(
      link,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  pendinglist(): Observable<InviteUserList>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/invite-pending-list.php";
  
    return this._http.post(
      link,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  acceptedlist(): Observable<InviteUserList>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/invite-accepted-list.php";
  
    return this._http.post(
      link,
      options
    ).pipe(map((res: Response) => res.json()));
  }

  searchlist(email): Observable<EmailString>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/invite-single-user.php";
  
    return this._http.post(
      link,
      email,
      options
    ).pipe(map((res: Response) => res.json()));
  }
  deleteuser(customerid:CustomerUID): Observable<CustomerUID>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('customerid',customerid.toString()); 
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/delete-single-user.php";
  
    return this._http.post(
      link,      
      options
    ).pipe(map((res: Response) => res.json()));
  }

  updateuser(userInformation): Observable<InviteUserList>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let link=this.gc.link+"/php_api/update-single-user.php";
  
    return this._http.post(
      link,
      userInformation,
      options
    ).pipe(map((res: Response) => res.json()));
  }
  
} 
