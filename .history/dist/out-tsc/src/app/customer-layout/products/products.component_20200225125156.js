"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_detail_service_1 = require("../product-detail.service");
var globalcart_1 = require("../globalcart");
var ProductsComponent = /** @class */ (function() {
    function ProductsComponent(route, productDetailService, router, gc) {
        var _this = this;
        this.route = route;
        this.productDetailService = productDetailService;
        this.router = router;
        this.gc = gc;
        this.panelOpenState = false;
        this.id = {};
        this.url = "url(https://securedgear.com/sites/998/products/998_";
        this.url_close = ")";
        this.visitedproducts = "";
        this.startprice = 0;
        this.endprice = 0;
        this.brandArray = [];
        this.genderArray = [];
        this.colorArray = [];
        this.sizeArray = [];
        this.sizeSelected = '';
        this.searchText = '';
        this.secondsize = [];
        this.icon = 'menu';
        this.brandFilterArray = [];
        this.genderFilterArray = [];
        this.colorFilterArray = [];
        this.menuitems = require('../../../assets/menu.json');
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
        this.sub = this.route.params.subscribe(function(params) {
            if (params['id']) {
                _this.id.catid = +params['id']; // (+) converts string 'id' to a number
            } else {
                _this.id.catid = 0;
            }
            if (params['search']) {
                _this.searchText = params['search'];
            }
        });
        if (this.id && this.id.catid != 0) {
            this.id.sglist = localStorage.getItem("securityGroup");
            console.log(this.id);
            this.productDetailService.category_product(this.id)
                .subscribe(function(user) {
                    _this.myData = user;
                    console.log(_this.myData["products"], "here");
                    //get the product list for this category
                    var self = _this;
                    self.gc.productlistcategory.length = 0;
                    self.gc.productlistcategory.push(+_this.id.catid);
                    if (_this.myData.products) {
                        _this.myData.products.forEach(function(value) {
                            self.gc.productlistcategory.push(+value.ProductID);
                            self.brandArray.push({ name: value.Brand, checked: false });
                            self.genderArray.push({ name: value.Gender, checked: false });
                            self.sizeArray.push(value.sizes);
                        });
                    }
                    if (_this.myData.colorgroups) {
                        _this.myData.colorgroups.forEach(function(value) {
                            self.colorArray.push({ colorgroup: value, checked: false });
                        });
                    }
                    if (_this.myData.products) {
                        _this.myData.products.forEach(function(value) {
                            self.secondsize.push(value.A1_Label);
                        });
                    }
                    _this.secondsize = _this.secondsize.join('').split(',').filter(function(item, pos, self) {
                        if (item.length > 0)
                            return self.indexOf(item) == pos;
                    });
                    //console.log(this.gc.productlistcategory);   
                    // localStorage.setItem('productlistcategory', JSON.stringify(this.gc.productlistcategory));  
                    //this.sizeArray=[].concat.apply([], this.sizeArray);
                    //this.sizeArray=this.removeDupesSizes(this.sizeArray);
                    _this.brandArray = _this.removeDupes(_this.brandArray);
                    _this.genderArray = _this.removeDupes(_this.genderArray);
                    // this.brandArray.forEach(function (value){
                    //     self.brandFilterArray.push(value.name);
                    // });                         
                }, function(error) { return console.log(error); });
        } else {
            this.id.sglist = localStorage.getItem("securityGroup");
            this.productDetailService.category_product_all(this.id)
                .subscribe(function(user) {
                    _this.myData = user;
                    console.log(_this.myData);
                    //get the product list for this category
                    var self = _this;
                    self.gc.productlistcategory.length = 0;
                    self.gc.productlistcategory.push('');
                    if (_this.myData.products) {
                        _this.myData.products.forEach(function(value) {
                            self.gc.productlistcategory.push(+value.ProductID);
                            self.brandArray.push({ name: value.Brand, checked: false });
                            self.genderArray.push({ name: value.Gender, checked: false });
                            self.sizeArray.push(value.sizes);
                        });
                    }
                    if (_this.myData.colorgroups) {
                        _this.myData.colorgroups.forEach(function(value) {
                            self.colorArray.push({ colorgroup: value, checked: false });
                        });
                    }
                    if (_this.myData.products) {
                        _this.myData.products.forEach(function(value) {
                            self.secondsize.push(value.A1_Label);
                        });
                    }
                    _this.secondsize = _this.secondsize.join('').split(',').filter(function(item, pos, self) {
                        if (item.length > 0)
                            return self.indexOf(item) == pos;
                    });
                    //this.sizeArray=[].concat.apply([], this.sizeArray);
                    // this.sizeArray=this.removeDupesSizes(this.sizeArray);                        
                    _this.brandArray = _this.removeDupes(_this.brandArray);
                    _this.genderArray = _this.removeDupes(_this.genderArray);
                    // this.brandArray.forEach(function (value){
                    //     self.brandFilterArray.push(value.name);
                    // });
                }, function(error) { return console.log(error); });
        }
        if (localStorage.getItem("visitedproducts")) {
            this.visitedproducts = localStorage.getItem("visitedproducts");
        }
    }
    ProductsComponent.prototype.ngOnInit = function() {};
    ProductsComponent.prototype.filterButtonToggle = function() {
        console.log(this.icon);
        if (this.icon == "menu") {
            this.icon = "close";
        } else {
            this.icon = "menu";
        }
    };
    ProductsComponent.prototype.getMain = function(imagename) {
        return imagename.replace(".jpg", "_600.jpg");
    };
    ProductsComponent.prototype.removeDupes = function(array) {
        var seen = {};
        return array.filter(function(item) {
            return seen.hasOwnProperty(item.name) || item.name == null ? false : (seen[item.name] = true); //remove dupes and nulls
        });
    };
    ProductsComponent.prototype.removeDupesSizes = function(array) {
        var seen = {};
        return array.filter(function(item) {
            return seen.hasOwnProperty(item.A1_Short) || item.A1_Short == null ? false : (seen[item.A1_Short] = true); //remove dupes and nulls
        });
    };
    ProductsComponent.prototype.brandCheck = function(brand, i) {
        if (this.brandArray[i].checked) {
            this.brandFilterArray.splice(this.brandFilterArray.indexOf(brand.name), 1);
            console.log(this.brandFilterArray);
            this.brandArray[i].checked = false;
        } else {
            this.brandFilterArray.push(brand.name);
            console.log(this.brandFilterArray);
            this.brandArray[i].checked = true;
        }
    };
    ProductsComponent.prototype.NextCat = function() {
        if (localStorage.getItem("CatListFull")) {
            var retrievedData = localStorage.getItem("CatListFull");
            this.gc.CatListFull = JSON.parse(retrievedData);
            console.log(retrievedData, "ok", this.gc.CatListFull);
            if (this.id)
                this.getNextMember(this.gc.CatListFull, this.id.catid, 'genie');
        } else if (this.gc.CatListFull.length > 0) {
            if (this.id)
                this.getNextMember(this.gc.CatListFull, this.id.catid, 'genie');
        } else {
            this.router.navigate(['/home']);
        }
    };
    ProductsComponent.prototype.getNextMember = function(array, productID, from) {
        var startIndex = array.indexOf(productID);
        console.log(array, productID, startIndex);
        if (startIndex == array.length - 1) {
            if (from == 'genie') {
                this.router.navigate(['/cart']);
            } else if (from == 'category') {
                this.router.navigate(['/products', array[0]]);
            }
        } else {
            startIndex++;
            console.log(array[startIndex]);
            this.router.navigate(['/products', array[startIndex]]);
        }
    };
    ProductsComponent.prototype.colorCheck = function(color, i) {
        color = ',' + color + ','; //for search
        console.log(color);
        if (this.colorArray[i].checked) {
            this.colorFilterArray.splice(this.colorFilterArray.indexOf(color), 1);
            console.log(this.colorFilterArray);
            this.colorArray[i].checked = false;
        } else {
            this.colorFilterArray.push(color);
            console.log(this.colorFilterArray);
            this.colorArray[i].checked = true;
        }
    };
    ProductsComponent.prototype.genderCheck = function(gender, i) {
        if (this.genderArray[i].checked) {
            this.genderFilterArray.splice(this.genderFilterArray.indexOf(gender.name), 1);
            console.log(this.genderFilterArray);
            this.genderArray[i].checked = false;
        } else {
            this.genderFilterArray.push(gender.name);
            console.log(this.genderFilterArray);
            this.genderArray[i].checked = true;
        }
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, product_detail_service_1.ProductDetailService, router_1.Router, globalcart_1.GlobalCart])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map