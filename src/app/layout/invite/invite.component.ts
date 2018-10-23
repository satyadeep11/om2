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
  myData:any;
  public closed = false;  
  email: any;
  securityGroups:any;
  sgList=[];
  public sgListerror = false;  

  constructor(public router: Router,
              private inviteService: InviteService) { 
                  this.inviteService.getSecurityGroups().subscribe(user => {
                    console.log(user);  
                    this.securityGroups=user;                 
                      },
                    error => console.log(error)
                  );
              }
      

  ngOnInit() {}

  userInvite(person: InviteUser){
   
   this.sgListerror =false;
   if(this.sgList.join()){
   person.inviteid=localStorage.getItem("uuid").toString();
   person.sglist=this.sgList.join();

    this.inviteService.invite(person)
    .subscribe(user => {
      // show an alert to tell the user if user was invited
      console.log(user);

      // go back to list of products
      this.myData = user; 
      this.closed = false; 
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
    else{
      this.sgListerror =true;
    }
  }

  AddRemove(groupID,event) {//event gets the checkbox checked or not value
    
  
    if ( event.target.checked ) {
      this.sgList.push(groupID);
    } 
    else {
      this.sgList=this.sgList.filter(item => item !== groupID);
    }
    console.log(this.sgList.join());
  }

}
 
export interface InviteUser {  
  email: string;
  inviteid: string;
  sglist:string;
}

export interface SecurityGroups {  
  groupId:number;
  groupName: string;
}


