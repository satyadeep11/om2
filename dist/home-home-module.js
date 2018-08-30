(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/customer-layout/home/home-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/customer-layout/home/home-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/customer-layout/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer-layout/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/customer-layout/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Slider -->\r\n\r\n\t<div class=\"main_slider\" style=\"background-image:url(assets/images/slider1.jpg)\">\r\n\t\t<div class=\"container fill_height\">\r\n\t\t\t<div class=\"row align-items-center fill_height\">\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<div class=\"main_slider_content\">\r\n\t\t\t\t\t\t<h6>Spring / Summer Collection 2017</h6>\r\n\t\t\t\t\t\t<h1>Get up to 30% Off New Arrivals</h1>\r\n\t\t\t\t\t\t<div class=\"red_button shop_now_button\"><a href=\"#\">shop now</a></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  </div>\r\n  \r\n  <!-- Banner -->\r\n\r\n\t<div class=\"banner\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"banner_item align-items-center\" style=\"background-image:url(assets/images/slider1.jpg)\">\r\n              <div class=\"banner_category\">\r\n                <a href=\"categories.html\">Apparel</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"banner_item align-items-center\" style=\"background-image:url(assets/images/slider2.jpg)\">\r\n              <div class=\"banner_category\">\r\n                <a href=\"categories.html\">Hardgoods</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"banner_item align-items-center\" style=\"background-image:url(assets/images/slider3.jpg)\">\r\n              <div class=\"banner_category\">\r\n                <a href=\"categories.html\">Accessories</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- new arrival-->\r\n    <div class=\"colorlib-shop\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 col-md-offset-3 text-center colorlib-heading\">\r\n              <h2><span>New Arrival</span></h2>\r\n              <p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 text-center\">\r\n              <div class=\"product-entry\">\r\n                <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                  <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                  <div class=\"cart\">\r\n                    <p>\r\n                      <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                      <span><a [routerLink]=\"['/product-detail',id]\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                      <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                      <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"desc\">\r\n                  <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                  <p class=\"price\"><span>$300.00</span></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 text-center\">\r\n              <div class=\"product-entry\">\r\n                <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                  <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                  <div class=\"cart\">\r\n                    <p>\r\n                      <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                      <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                      <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                      <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"desc\">\r\n                  <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                  <p class=\"price\"><span>$300.00</span></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 text-center\">\r\n              <div class=\"product-entry\">\r\n                <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                  <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                  <div class=\"cart\">\r\n                    <p>\r\n                      <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                      <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                      <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                      <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"desc\">\r\n                  <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                  <p class=\"price\"><span>$300.00</span></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 text-center\">\r\n              <div class=\"product-entry\">\r\n                <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                  <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                  <div class=\"cart\">\r\n                    <p>\r\n                      <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                      <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                      <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                      <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"desc\">\r\n                  <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                  <p class=\"price\"><span>$300.00</span></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Products-->\r\n\r\n      <div class=\"colorlib-shop\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-md-offset-3 text-center colorlib-heading\">\r\n                <h2><span>Our Products</span></h2>\r\n                <p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 text-center\">\r\n                <div class=\"product-entry\">\r\n                  <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                    <p class=\"tag\"><span class=\"sale\">Sale</span></p>\r\n                    <div class=\"cart\">\r\n                      <p>\r\n                        <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                        <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                        <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                        <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"desc\">\r\n                    <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                    <p class=\"price\"><span>$199.00</span> <span class=\"sale\">$300.00</span> </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 text-center\">\r\n                <div class=\"product-entry\">\r\n                  <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                    <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                    <div class=\"cart\">\r\n                      <p>\r\n                        <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                        <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                        <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                        <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"desc\">\r\n                    <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                    <p class=\"price\"><span>$300.00</span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 text-center\">\r\n                <div class=\"product-entry\">\r\n                  <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                    <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                    <div class=\"cart\">\r\n                      <p>\r\n                        <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                        <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                        <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                        <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"desc\">\r\n                    <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                    <p class=\"price\"><span>$300.00</span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 text-center\">\r\n                <div class=\"product-entry\">\r\n                  <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                    <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                    <div class=\"cart\">\r\n                      <p>\r\n                        <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                        <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                        <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                        <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"desc\">\r\n                    <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                    <p class=\"price\"><span>$300.00</span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 text-center\">\r\n                <div class=\"product-entry\">\r\n                  <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                    <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                    <div class=\"cart\">\r\n                      <p>\r\n                        <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                        <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                        <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                        <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"desc\">\r\n                    <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                    <p class=\"price\"><span>$300.00</span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 text-center\">\r\n                <div class=\"product-entry\">\r\n                  <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                    <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                    <div class=\"cart\">\r\n                      <p>\r\n                        <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                        <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                        <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                        <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"desc\">\r\n                    <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                    <p class=\"price\"><span>$300.00</span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 text-center\">\r\n                <div class=\"product-entry\">\r\n                  <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                    <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                    <div class=\"cart\">\r\n                      <p>\r\n                        <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                        <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                        <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                        <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"desc\">\r\n                    <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                    <p class=\"price\"><span>$300.00</span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 text-center\">\r\n                <div class=\"product-entry\">\r\n                  <div class=\"product-img\" style=\"background-image: url(assets/images/slider3.jpg);\">\r\n                    <p class=\"tag\"><span class=\"new\">New</span></p>\r\n                    <div class=\"cart\">\r\n                      <p>\r\n                        <span class=\"addtocart\"><a [routerLink]=\"['/cart']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-shopping-cart\"></i></a></span> \r\n                        <span><a [routerLink]=\"['/product-detail']\" [routerLinkActive]=\"['router-link-active']\"><i class=\"fa fa-eye\"></i></a></span> \r\n                        <span><a href=\"#\"><i class=\"fa fa-heart\"></i></a></span>\r\n                        <span><a href=\"add-to-wishlist.html\"><i class=\"fa fa-bar-chart\"></i></a></span>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"desc\">\r\n                    <h3><a href=\"shop.html\">Floral Dress</a></h3>\r\n                    <p class=\"price\"><span>$300.00</span></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n                    \r\n\r\n\r\n\r\n    \r\n\r\n    "

/***/ }),

/***/ "./src/app/customer-layout/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/customer-layout/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*********************************\r\n3. Home\r\n*********************************/\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: #FFFFFF;\n  z-index: 10; }\n.top_nav {\n  width: 100%;\n  height: 50px;\n  background: #1e1e27; }\n.top_nav_left {\n  height: 50px;\n  line-height: 50px;\n  font-size: 13px;\n  color: #b5aec4;\n  text-transform: uppercase; }\n/*********************************\r\n3.7 Main Slider\r\n*********************************/\n.main_slider {\n  width: 100%;\n  height: 700px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center; }\n.main_slider_content {\n  margin-top: 150px;\n  width: 60%; }\n.main_slider_content h6 {\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 29px; }\n.main_slider_content h1 {\n  font-weight: 400;\n  line-height: 1; }\n.red_button {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  height: 40px;\n  background: #fe4c50;\n  border-radius: 3px;\n  transition: all 0.3s ease; }\n.red_button:hover {\n  background: #FE7C7F !important; }\n.red_button a {\n  display: block;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  line-height: 40px;\n  width: 100%; }\n.shop_now_button {\n  width: 140px;\n  margin-top: 32px; }\n/*********************************\r\n4. Banner\r\n*********************************/\n.banner {\n  width: 100%;\n  margin-top: 30px; }\n.banner_item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 265px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center; }\n.banner_category {\n  height: 50px;\n  background: #FFFFFF;\n  min-width: 180px;\n  padding-left: 25px;\n  padding-right: 25px; }\n.banner_category a {\n  display: block;\n  color: #1e1e27;\n  text-transform: uppercase;\n  font-size: 22px;\n  font-weight: 600;\n  text-align: center;\n  line-height: 50px;\n  width: 100%;\n  transition: color 0.3s ease; }\n.banner_category a:hover {\n  color: #b5aec4; }\n/*********************************\r\n4. New arrival\r\n*********************************/\n#colorlib-featured-product,\n.colorlib-shop,\n#colorlib-contact,\n#colorlib-intro,\n#colorlib-testimony,\n.colorlib-blog,\n#colorlib-subscribe,\n#colorlib-footer {\n  margin-top: 30px;\n  padding-bottom: 9em;\n  clear: both; }\n.colorlib-shop .icon {\n  margin-bottom: 2em;\n  display: block; }\n.colorlib-shop .icon i {\n  font-size: 100px;\n  color: #FFC300; }\n.product-entry {\n  margin-bottom: 40px; }\n.product-entry .product-img {\n  display: block;\n  height: 350px;\n  margin-bottom: 20px;\n  position: relative; }\n.product-entry .product-img .tag {\n  position: absolute;\n  top: 10px;\n  left: 10px; }\n.product-entry .product-img .tag .new {\n  font-size: 11px;\n  background: #FFC300;\n  color: #fff;\n  padding: .3em .5em;\n  border-radius: 2px; }\n.product-entry .product-img .tag .sale {\n  font-size: 11px;\n  background: #DD3E3E;\n  color: #fff;\n  padding: .3em .5em;\n  border-radius: 2px; }\n.product-entry .product-img .cart {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  display: block;\n  padding: 0 1em;\n  opacity: 0;\n  transition: 0.3s; }\n.product-entry .product-img .cart p {\n  display: block;\n  margin-bottom: 0;\n  width: 100%;\n  text-transform: uppercase;\n  font-size: 12px; }\n.product-entry .product-img .cart p span {\n  display: inline-block; }\n.product-entry .product-img .cart p span a {\n  display: block;\n  color: #fff;\n  padding: 1em; }\n.product-entry .product-img .cart p span a:hover {\n  background: #FFC300; }\n.product-entry .desc h3 {\n  font-size: 20px;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-bottom: 10px; }\n.product-entry .desc h3 a {\n  color: #000; }\n.product-entry .desc .price span {\n  color: #FFC300;\n  font-weight: 400; }\n.product-entry .desc .price .sale {\n  color: gray;\n  text-decoration: line-through;\n  font-weight: 300; }\n.product-entry:hover .product-img .cart {\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/customer-layout/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/customer-layout/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.id = 56;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/customer-layout/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/customer-layout/home/home.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/customer-layout/home/home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer-layout/home/home.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/customer-layout/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/customer-layout/home/home.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map