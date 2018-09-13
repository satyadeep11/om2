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
    quantity:number;
    
    constructor(private translate: TranslateService, public router: Router,private gc: GlobalCart) {
        

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
        
        
    }

    ngOnInit() {
       this.fname= sessionStorage.getItem("fname").toString();
       this.lname= sessionStorage.getItem("lname").toString();
       this.gcUpdate();
            
    }

    gcUpdate(){
        var retrievedData = sessionStorage.getItem("currentCart");        
        var cartdetails = JSON.parse(retrievedData);         

        var uniqueproductid=[];
        if(cartdetails){
        cartdetails.cartproducts.forEach(function (value) {
            uniqueproductid.push(value.qs_prod_id);
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
        sessionStorage.clear();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
