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
        private authService: AuthService,
) {}
    myData:any;
    email:any;
    password:any;
    loadComponent = false;
    ngOnInit() {
      if(localStorage.getItem("isLoggedin")){
        if(localStorage.getItem("admin")){
          this.router.navigateByUrl('/dashboard');
        }
        else{
          this.router.navigateByUrl('/home');
        }
      
      }
    }

    onLoggedin(email:string,password:string) {
        this.router.navigateByUrl('/access-denied');//place login logic here
        //localStorage.setItem('isLoggedin', 'true');
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
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('fname', this.myData.user['First Name']);
            localStorage.setItem('lname', this.myData.user['Last Name']);
            localStorage.setItem('email', this.myData.Email);
            localStorage.setItem('uuid', this.myData.uuid);
            this.router.navigateByUrl('/home');
            //define user cart on login
            let user:Cart={};
            user.uuid=this.myData.uuid;
            this.authService.getCart(user)
            .subscribe(user => { 
              console.log(user); 
              localStorage.setItem('currentCart', JSON.stringify(user));     
              localStorage.setItem('selection_id', (user.selection_id)); 
           },
           error => console.log(error)
          );
            if(!localStorage.getItem("visitedproducts")){
            localStorage.setItem('visitedproducts',''); 
            }
          }
          else if(this.myData.user.Admin==1){
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('admin', 'true');
            localStorage.setItem('fname', this.myData.user['First Name']);
            localStorage.setItem('lname', this.myData.user['Last Name']);
            localStorage.setItem('email', this.myData.Email);
            localStorage.setItem('uuid', this.myData.uuid);
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

  export interface Cart {    
    uuid?:string;
    selection_id?:string;
    
  }