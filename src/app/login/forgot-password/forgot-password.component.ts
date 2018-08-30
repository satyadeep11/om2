import { Component, OnInit } from '@angular/core';
import { ForgotService } from '../forgot.service'; 

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private forgotService: ForgotService) { }
  myData:any;
  email:any;
  public closed = false;

  ngOnInit() {
  }

  userForgot(person: ForgotUser){
    this.closed = false;      
 
     this.forgotService.forgot(person)
     .subscribe(user => {
       console.log(user);
       this.myData = user;
    },
    error => console.log(error)
   );
   }

}

export interface ForgotUser {  
  email: string;
}
