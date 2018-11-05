import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
import {VERSION} from '@angular/material';
import {GenieComponent} from "../home/genie/genie.component";
import {MatDialog} from "@angular/material";
import IntroJs from 'intro.js/intro.js';
import { ProductDetailService } from '../product-detail.service'; 

//const IntroJs = require('../../../../node_modules/intro.js');
declare var require: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  searchText:any;
  version = VERSION;
  navItems  = require('../../../assets/menu.json');
  intro:any;  
  myData:any;
  QuestionBounceCheck:string='';

  constructor( public router: Router,private productDetailService: ProductDetailService,public dialog : MatDialog) {
    this.intro = IntroJs();
    var self=this;
    // Initialize steps
    console.log(window.location.pathname,localStorage.getItem("ProductsVisit"));
    this.intro.oncomplete(function(targetElement) {         
        if(!localStorage.getItem("HomeVisit") && (window.location.pathname.includes("home"))){
            localStorage.setItem('HomeVisit', 'Yes');
            self.LoadGenie();
        }
        if(!localStorage.getItem("ProductsVisit") && (window.location.pathname.includes("products"))){
            localStorage.setItem('ProductsVisit', 'Yes'); 
            this.QuestionBounceCheck='';                
        }
        if(!localStorage.getItem("DetailVisit") && (window.location.pathname.includes("product-detail"))){
            localStorage.setItem('DetailVisit', 'Yes');
            this.QuestionBounceCheck='';                
        }
        }).start();
    this.intro.onexit(function(targetElement) {  
        if(!localStorage.getItem("HomeVisit") && (window.location.pathname.includes("home"))){
            localStorage.setItem('HomeVisit', 'Yes');
            // self.LoadGenie();
        }
        if(!localStorage.getItem("ProductsVisit") && (window.location.pathname.includes("products"))){
            localStorage.setItem('ProductsVisit', 'Yes');                
        }
        if(!localStorage.getItem("DetailVisit") && (window.location.pathname.includes("product-detail"))){
            localStorage.setItem('DetailVisit', 'Yes');                
        }
        }).start();
        
        this.productDetailService.category_all().subscribe(user => {
            this.myData = user;  
            console.log(this.myData);
          },
          error => console.log(error)
          );
      }

  ngOnInit() {  

  }
  ngAfterViewInit() {
    if(!localStorage.getItem('HomeVisit') && (window.location.pathname.includes("home"))) {
        // localStorage.setItem('HomeVisit', 'Yes');
        // this.OpenTour(); 
        this.QuestionBounceCheck='question';  
      }
     if(!localStorage.getItem('ProductsVisit') && (window.location.pathname.includes("products"))) {
              
              this.QuestionBounceCheck='question';          
      }
     if(!localStorage.getItem('DetailVisit') && (window.location.pathname.includes("product-detail"))) {
        
        
        this.QuestionBounceCheck= 'question';
      }
  }

  OpenTour(){
    this.LoadTourValues();
    var self=this;
    if(window.location.pathname.includes("home")){
    this.intro.onchange(function(targetElement) {  
      console.log(this._currentStep,"here"); 
        //   switch (this._currentStep) 
        //       { 
        //       case 0: 
        //       self.LoadGenie();
        //       break; 
        //       case 1: 
        //           self.dialog.closeAll();
        //       break;
        //       }
      }).start();
    }
    if(window.location.pathname.includes("products")){
      this.intro.onchange(function(targetElement) {  
        console.log(this._currentStep,"here"); 
            // switch (this._currentStep) 
            //     { 
            //     case 0: 
            //     self.LoadGenie();
            //     break; 
            //     case 1: 
            //         self.dialog.closeAll();
            //     break;
            //     }
        }).start();
      }
      if(window.location.pathname.includes("product-detail")){
        this.intro.onchange(function(targetElement) {  
          console.log(this._currentStep,"here"); 
              // switch (this._currentStep) 
              //     { 
              //     case 0: 
              //     self.LoadGenie();
              //     break; 
              //     case 1: 
              //         self.dialog.closeAll();
              //     break;
              //     }
          }).start();
      }


  }
  Search(searchText){
    if(searchText)
    this.router.navigate(['/products/search/',searchText]);
  }
  
  LoadTourValues(){
    if(window.location.pathname.includes("home")){
      this.intro.setOptions({
          steps: [
              {
                  element: '.step-one',
                  intro: "Use this for Genie Selection ",
                  position: 'bottom'
              },
              {
                  element: '.step-two',
                  intro: "Search for products here",
                  position: 'bottom'
              },
              {
                  element: '.step-three',
                  intro: 'Access the categories using the menu',
                  position: 'bottom'
              },
              {
                  element: '.step-four',
                  intro: 'Have Questions about using the Quick Select Website? Click here!',
                  position: 'bottom'
              },
              {
                  element: '.step-five',
                  intro: 'Dont know how to prodceed? Click on the Question mark to quickly get more information.',
                  position: 'bottom'
              }

              
          ].filter(function (obj) {            
            console.log(document.getElementsByClassName(obj.element.substr(1)).length,obj.element.substr(1));
            return document.getElementsByClassName(obj.element.substr(1)).length || obj.element == ".introjsFloatingElement";
            
         })
      });
    }
    if(window.location.pathname.includes("product-detail")){
      this.intro.setOptions({
          steps: [
              // {
              // element: '.navbar .detail-nine',
              // intro: 'Quickly View your Cart with all the Products you have selected',
              // position: 'bottom'
              
              // },
              {
                  element: '.detail-one',
                  intro: "Current Product being Viewed",
                  position: 'right'
              },
              {
                  element: '.detail-two',
                  intro: "The price would vary depending on work involved",
                  position: 'bottom'
              },
              {
                  element: '.detail-three',
                  intro: 'All the different colors you can add to your selection',
                  position: 'bottom'
              },
              {
                  element: '.detail-four',
                  intro: 'The number of available sizes for this product',
                  position: 'right'
              },
              {
                element: '.detail-five',
                intro: 'Click on Next product to view the next product in the Category',
                position: 'right'
              },            
              {
                  element: '.detail-six',
                  intro: 'These are companion Products for the current product',
                  position: 'right'
              },
              {
                  element: '.detail-seven',
                  intro: 'This Section provides additonal information about the product and Sizing Chart if available',
                  position: 'right'
              },
              {
                  element: '.detail-eight',
                  intro: 'A list of Similar Products which updates with the your selections',
                  position: 'right'
              }         
          ].filter(function (obj) {            
            console.log(document.getElementsByClassName(obj.element.substr(1)).length,obj.element.substr(1));
            return document.getElementsByClassName(obj.element.substr(1)).length || obj.element == ".introjsFloatingElement";
            
         })
      });
    }
    if(window.location.pathname.includes("products")){
      this.intro.setOptions({
          steps: [
              {
                  element: '.products-one',
                  intro: "Instant Search Filter",
                  position: 'left'
              },
              {
                  element: '.products-two',
                  intro: "Quick Category selection",
                  position: 'left'
              },
              {
                  element: '.products-three',
                  intro: 'Gender Filter to select the specific gender apparels instantly',
                  position: 'left'
              },
              {
                  element: '.products-four',
                  intro: 'Color Family Filter helps you select products which have colors in selected color family',
                  position: 'left'
              },
              {
                  element: '.products-five',
                  intro: 'Brand Filter immidiately filters the products with selected Brand',
                  position: 'left'
              },
              {
                  element: '.products-six',
                  intro: 'The Size filter helps you find products that come in selected Size',
                  position: 'left'
              },
              {
                  element: '.products-seven',
                  intro: 'The Price Filter quickly helps you to see products in the slected price range',
                  position: 'left'
              },
              {
                  element: '.products-eight',
                  intro: 'Current Category',
                  position: 'right'
              },
              {
                  element: '.products-nine',
                  intro: 'Goto next Category',
                  position: 'right'
              }
              
          ].filter(function (obj) {
              
            console.log(document.getElementsByClassName(obj.element.substr(1)).length,obj.element.substr(1));
            return document.getElementsByClassName(obj.element.substr(1)).length || obj.element == ".introjsFloatingElement";
            
         })
      });
    }
  }
 

  LoadGenie(){
    this.dialog.open(GenieComponent, {
      width: '500px',
      data: {}
    });
  }
  
  
}

