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
      // var url_string = window.location.href; //window.location.href
      // var url = new URL(url_string);
      // var email = url.searchParams.get("email");
      // this.uuid = url.searchParams.get("uuid");
      // console.log(this.uuid);
      var query = window.location.search.substring(1);
      var qs = this.parse_query_string(query);
      var email=(qs["email"]);
      this.uuid=qs["uuid"]
      if(email){
      this.model= new newUser('','','',email,'','','','',0);
      }
      else{
        this.router.navigateByUrl('/error');
      } 


    }

parse_query_string(query) {
      var vars = query.split("&");
      var query_string = {};
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
          query_string[key] = decodeURIComponent(value);
          // If second entry with this name
        } else if (typeof query_string[key] === "string") {
          var arr = [query_string[key], decodeURIComponent(value)];
          query_string[key] = arr;
          // If third or later entry with this name
        } else {
          query_string[key].push(decodeURIComponent(value));
        }
      }
      return query_string;
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
          // else if(this.myData.user.admin==0){
            else{
          //   localStorage.setItem('isLoggedin', 'true');
          //   localStorage.setItem('fname', this.myData.user.fname);
          //   localStorage.setItem('lname', this.myData.user.lname);
          //   localStorage.setItem('securityGroup', this.myData.user['security_group']);
          //   this.router.navigateByUrl('/home');
          // }
          // else if(this.myData.user.admin==1){
          //   localStorage.setItem('isLoggedin', 'true');
          //   localStorage.setItem('admin', 'true');
          //   localStorage.setItem('fname', this.myData.user.fname);
          //   localStorage.setItem('lname', this.myData.user.lname);
          //   localStorage.setItem('securityGroup', this.myData.user['security_group']);
          if(window.confirm('Account Created. You will be redirected to the Login Page.')){
            this.router.navigateByUrl('/login');
            }
            else this.router.navigateByUrl('/login');
          }
       },
       error => console.log(error)
      );
      }
}

