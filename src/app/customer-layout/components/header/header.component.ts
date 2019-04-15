import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {GlobalCart} from '../../globalcart';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    fname:String;
    lname:String;
    admin:boolean;
    
    constructor(private translate: TranslateService, public router: Router,public gc: GlobalCart) {

        this.router.events.subscribe(val => {
            this.gcUpdate();            
        });
 
    }

    ngOnInit() {
       this.fname= localStorage.getItem("fname").toString();
       this.lname= localStorage.getItem("lname").toString();   
       this.admin=  (localStorage.getItem('admin')=='true'); 
    }

    gcUpdate(){
        var retrievedData = localStorage.getItem("currentCart");        
        var cartdetails = JSON.parse(retrievedData);         
         
        var uniqueproductid=[];
        if(cartdetails){
        cartdetails.cartproducts.forEach(function (value) {
            uniqueproductid.push(value.ProductID);
          }); 

          var unique = uniqueproductid.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        })
        this.gc.count=unique.length;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('currentCart');
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('uuid');
        localStorage.removeItem('lname');
        localStorage.removeItem('fname'); 
        localStorage.removeItem('admin');
        // localStorage.clear();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
