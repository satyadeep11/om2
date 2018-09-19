import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { ResetPasswordService} from '../reset-password.service';
import { Router } from '@angular/router';

import { userPassword } from './userPassword'; 

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [routerTransition()] 
})
export class ResetPasswordComponent implements OnInit {

  myData:any;
  public uuid:string;
  public email:string;
  model = new userPassword('','','','');//get form control

  constructor(public router: Router,private resetService: ResetPasswordService) { }

  ngOnInit() {
    var url_string = window.location.href; //window.location.href
      var url = new URL(url_string);
      this.email = url.searchParams.get("email");
      this.uuid = url.searchParams.get("uuid");
      console.log(this.uuid);
      if(!this.email && !this.uuid){      
        this.router.navigateByUrl('/error');
      }
  }

  resetPassword(person: userPassword){
    person.uuid=this.uuid;
    person.email=this.email;
    this.resetService.reset(person)
    .subscribe(user => {
      // show an alert to tell the user if product was created or not
      console.log(user);
      // go back to list of products
      this.myData = user; 
      if(this.myData.error){
        this.router.navigateByUrl('/error');
      }
      else if(this.myData.user.admin==0){
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('fname', this.myData.user.fname);
        localStorage.setItem('lname', this.myData.user.lname);
        this.router.navigateByUrl('/home');
      }
      else if(this.myData.user.admin==1){
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('admin', 'true');
        localStorage.setItem('fname', this.myData.user.fname);
        localStorage.setItem('lname', this.myData.user.lname);
        this.router.navigateByUrl('/dashboard');
      }
   },
   error => console.log(error)
  );
  }

}


