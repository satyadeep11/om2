import { Injectable } from '@angular/core';
import IntroJs from 'intro.js/intro.js';

@Injectable()

export class IntroTourService {
  intro:any;
  
  LoadTourValues(){
    this.intro = IntroJs();
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
                  intro: "Search products here",
                  position: 'bottom'
              },
              {
                  element: '.step-three',
                  intro: 'The menu',
                  position: 'bottom'
              },
              {
                  element: '.step-four',
                  intro: 'Our latest Arrivals',
                  position: 'right'
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
}