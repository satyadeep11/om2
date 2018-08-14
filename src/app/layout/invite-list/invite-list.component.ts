import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { InviteListService } from '../invite-list.service'; 

@Component({
  selector: 'app-invite-list',
  templateUrl: './invite-list.component.html',
  styleUrls: ['./invite-list.component.scss'],
  animations: [routerTransition()]
})
export class InviteListComponent implements OnInit {

  constructor(public router: Router,
    private inviteListService: InviteListService) { }

    myData:any;

  ngOnInit() {
    this.inviteListService.invitelist()
     .subscribe(user => {
       // show an alert to tell the user if user was invited
       console.log(user);
       this.myData = user; 
    },
    error => console.log(error)
   );
  }

  acceptedList(){ 
    
    this.inviteListService.acceptedlist()
     .subscribe(user => {
       // show an alert to tell the user if user was invited
       console.log(user);
       this.myData = user; 
    },
    error => console.log(error)
   );
   }

   pendingList(){ 
    
    this.inviteListService.pendinglist()
     .subscribe(user => {
       // show an alert to tell the user if user was invited
       console.log(user);
       this.myData = user; 
    },
    error => console.log(error)
   );
   }

   inviteList(){ 
    
    this.inviteListService.invitelist()
     .subscribe(user => {
       // show an alert to tell the user if user was invited
       console.log(user);
       this.myData = user; 
    },
    error => console.log(error)
   );
   }

   keyDownFunction(event,email:EmailString) {
    if(event.keyCode == 13) {
    this.inviteListService.searchlist(email)
     .subscribe(user => {
       // show an alert to tell the user if user was invited
       console.log(user);
       this.myData = user; 
    },
    error => console.log(error)
   );
    }
  }
}

export interface InviteUserList { 
  fname:string;
  lname:string;
  company:string;
  phone:string; 
  email: string;
  inviteid: string;
  updated_at:string;
}

export interface EmailString {  
  email: string;
}
