import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { InviteService } from '../invite.service'; 

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  animations: [routerTransition()]
})
export class InviteComponent implements OnInit {

  constructor(public router: Router,
              private inviteService: InviteService) { }
      myData:any;
      public closed = false;  
      email: any;

  ngOnInit() {}

  userInvite(person: InviteUser){
   this.closed = false; 
   person.inviteid=localStorage.getItem("uuid").toString(); 

    this.inviteService.invite(person)
    .subscribe(user => {
      // show an alert to tell the user if user was invited
      console.log(user);

      // go back to list of products
      this.myData = user; 
      // if(this.myData.error){
      //   this.router.navigateByUrl('/error');
      // }
      // else if(this.myData.user.Admin==0){
      //   localStorage.setItem('isLoggedin', 'true');
      //   localStorage.setItem('fname', this.myData.user['First Name']);
      //   localStorage.setItem('lname', this.myData.user['Last Name']);
      //   this.router.navigateByUrl('/dashboard');
      // }     
   },
   error => console.log(error)
  );
  }

}
 
export interface InviteUser {  
  email: string;
  inviteid: string;
}
