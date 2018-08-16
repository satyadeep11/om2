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
    public closed = false;  

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
    this.closed = false;
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
    this.closed = false;
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
    this.closed = false;
    this.inviteListService.invitelist()
     .subscribe(user => {
       // show an alert to tell the user if user was invited
       console.log(user);
       this.myData = user; 
    },
    error => console.log(error)
   );
   }


  searchlist(email:EmailString){
    this.closed = false;
    this.inviteListService.searchlist(email)
     .subscribe(user => {
       // show an alert to tell the user if user was invited
       console.log(user);
       this.myData = user; 
    },
    error => console.log(error)
   );
  }

  deleteCustomer(customerid:CustomerUID){
    
    this.closed = false;
    this.inviteListService.deleteuser(customerid)
     .subscribe(user => {
       // show an alert to tell the user if user was invited
       console.log(user);
       this.myData = user; 
    },
    error => console.log(error)
   );
       
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

export interface CustomerUID {  
  customerid:string;
}

