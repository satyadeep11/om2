import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,
        private authService: AuthService) {}
    myData:any;
    loadComponent = false;
    ngOnInit() {}

    onLoggedin(email:string,password:string) {
        this.router.navigateByUrl('/access-denied');//place login logic here
        //sessionStorage.setItem('isLoggedin', 'true');
        console.log(email);
       
    }
    userLogin(person: Person){
        this.authService.login(person)
        .subscribe(user => {
          // show an alert to tell the user if product was created or not
          console.log(user);
    
          // go back to list of products
          this.myData = user; 
          if(this.myData.error){
            console.log("Login Error");
          }
          else if(this.myData.user.Admin==0){
            sessionStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('fname', this.myData.user['First Name']);
            sessionStorage.setItem('lname', this.myData.user['Last Name']);
            sessionStorage.setItem('uuid', this.myData.uuid);
            this.router.navigateByUrl('/home');
          }
          else if(this.myData.user.Admin==1){
            sessionStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('admin', 'true');
            sessionStorage.setItem('fname', this.myData.user['First Name']);
            sessionStorage.setItem('lname', this.myData.user['Last Name']);
            sessionStorage.setItem('uuid', this.myData.uuid);
            this.router.navigateByUrl('/dashboard');
          }
       },
       error => console.log(error)
      );
      }
      forgotPassword() {
          if(this.loadComponent == true)
        this.loadComponent = false;  
        else      
        this.loadComponent = true;
      }
      
}
export interface Person {
  
    email: string;
    password: string;
  }
