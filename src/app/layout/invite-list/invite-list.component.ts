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

  ngOnInit() {}

  userListInvite(person: InviteUserList){ 
    
    this.inviteListService.invitelist(person)
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
  email: string;
  inviteid: string;
}

