import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { InviteListService } from '../invite-list.service'; 
import { InviteService } from '../invite.service'; 

@Component({
  selector: 'app-invite-list',
  templateUrl: './invite-list.component.html',
  styleUrls: ['./invite-list.component.scss'],
  animations: [routerTransition()]
})
export class InviteListComponent implements OnInit {

  myData:any;
  email:any;
  public closed = false; 
  editCustomer:boolean=false; 
  currentUser='';
  securityGroups:any;
  sgList=[];
  userInformation:InviteUserList={};
  ufname='';
  ulname='';
  ucompany='';
  uphone='';

  constructor(public router: Router,
    private inviteListService: InviteListService,
    private inviteService: InviteService) { 

      this.inviteService.getSecurityGroups().subscribe(user => {
        console.log(user);  
        this.securityGroups=user;                 
          },
        error => console.log(error)
      );

    }



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
       console.log(user,"here");
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
    if(window.confirm('Are you sure you want to delete this customer ?')){
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
  editCustomerInfo(customerid,fname,lname,company,phone,securityGroups){
    console.log(customerid,fname,lname,company,phone,securityGroups)
    this.sgList=securityGroups.split(',');
    this.editCustomer=true;
    this.closed = false;
    this.currentUser=customerid;
    this.ufname=fname;
    this.ulname=lname;
    this.ucompany=company;
    this.uphone=phone;
    
  //   this.inviteListService.deleteuser(customerid)
  //    .subscribe(user => {
  //      // show an alert to tell the user if user was invited
  //      console.log(user);
  //      this.myData = user; 
  //   },
  //   error => console.log(error)
  //  );
       
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

  updateCustomer(fname,lname,company,phone) {//event gets the checkbox checked or not value      
    this.userInformation.customerid=this.currentUser;
    this.userInformation.fname=fname;
    this.userInformation.lname=lname;
    this.userInformation.company=company;
    this.userInformation.phone=phone;
    this.userInformation.security_group=this.sgList.join();
    console.log(this.userInformation)
    this.inviteListService.updateuser(this.userInformation)
     .subscribe(user => {
       // show an alert to tell the user if user was invited
       console.log(user);
       this.myData = user; 
       this.editCustomer=false;
       this.currentUser='';
    },
    error => console.log(error)
   );
  }
}

export interface InviteUserList { 
  customerid?:string;
  fname?:string;
  lname?:string;
  company?:string;
  phone?:string; 
  email?: string;
  inviteid?: string;
  updated_at?:string;
  security_group?:string;
}

export interface EmailString {  
  email: string;
}

export interface CustomerUID {  
  customerid:string;
}

