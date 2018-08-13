import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

import { newUser }    from './newUser';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()] 
})
export class SignupComponent implements OnInit {
    constructor(public router: Router,private registerService: RegisterService) {}
    myData:any;
    public uuid:string;
    // @Input() useremail: string = 'email';
    model = new newUser('','','','','','','','',0);//get form control

    ngOnInit() {
      var url_string = window.location.href; //window.location.href
      var url = new URL(url_string);
      var email = url.searchParams.get("email");
      this.uuid = url.searchParams.get("uuid");
      console.log(this.uuid);
      if(email){
      this.model= new newUser('','','',email,'','','','',0);
      }
      else{
        this.router.navigateByUrl('/error');
      }
    }

    userRegister(person: newUser){
        person.admin=0;
        person.uuid=this.uuid;
        this.registerService.register(person)
        .subscribe(user => {
          // show an alert to tell the user if product was created or not
          console.log(user);
          // go back to list of products
          this.myData = user; 
          if(this.myData.error){
            this.router.navigateByUrl('/access-denied');
          }
          else if(this.myData.user.Admin==0){
            sessionStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('fname', this.myData.user['First Name']);
            sessionStorage.setItem('lname', this.myData.user['Last Name']);
            this.router.navigateByUrl('/dashboard');
          }
          else if(this.myData.user.Admin==1){
            sessionStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('admin', 'true');
            sessionStorage.setItem('fname', this.myData.user['First Name']);
            sessionStorage.setItem('lname', this.myData.user['Last Name']);
            this.router.navigateByUrl('/dashboard');
          }
       },
       error => console.log(error)
      );
      }
}

