(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{mH0F:function(n,l,e){"use strict";e.r(l);var u=e("CcnG"),o=function(){},t=e("pMnS"),i=e("Ip0R"),d=e("gIcY"),r=e("ZYCi"),a=e("sE5F"),s=e("67Y/"),g=function(){function n(n){this._http=n}return n.prototype.register=function(n){var l=new a.d({"Content-Type":"application/json"}),e=new a.g({headers:l});return this._http.post("http://localhost/php_api/liveregister.php",n,e).pipe(Object(s.a)(function(n){return n.json()}))},n.ngInjectableDef=u.defineInjectable({factory:function(){return new n(u.inject(a.e))},token:n,providedIn:"root"}),n}(),p=function(n,l,e,u,o,t,i,d,r){this.uuid=n,this.fname=l,this.lname=e,this.email=u,this.password=o,this.password2=t,this.company=i,this.phone=d,this.admin=r},c=function(){function n(n,l){this.router=n,this.registerService=l,this.model=new p("","","","","","","","",0)}return n.prototype.ngOnInit=function(){var n=window.location.href,l=new URL(n),e=l.searchParams.get("email");this.uuid=l.searchParams.get("uuid"),console.log(this.uuid),e?this.model=new p("","","",e,"","","","",0):this.router.navigateByUrl("/error")},n.prototype.userRegister=function(n){var l=this;n.admin=0,n.uuid=this.uuid,this.registerService.register(n).subscribe(function(n){console.log(n),l.myData=n,l.myData.error?l.router.navigateByUrl("/access-denied"):0==l.myData.user.admin?(localStorage.setItem("isLoggedin","true"),localStorage.setItem("fname",l.myData.user.fname),localStorage.setItem("lname",l.myData.user.lname),l.router.navigateByUrl("/home")):1==l.myData.user.admin&&(localStorage.setItem("isLoggedin","true"),localStorage.setItem("admin","true"),localStorage.setItem("fname",l.myData.user.fname),localStorage.setItem("lname",l.myData.user.lname),l.router.navigateByUrl("/dashboard"))},function(n){return console.log(n)})},n}(),m=u["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.login-page[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;background:#222;text-align:center;color:#fff;padding:3em}.login-page[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]{padding:0}.login-page[_ngcontent-%COMP%]   .input-lg[_ngcontent-%COMP%]{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]{background:0 0;border:none;box-shadow:none;border-bottom:2px solid rgba(255,255,255,.5);color:#fff;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]:focus{border-bottom:2px solid #fff;box-shadow:none}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{border-radius:50px;color:rgba(255,255,255,.8);background:#222;border:2px solid rgba(255,255,255,.8);font-size:18px;line-height:40px;padding:0 25px}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:active, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:focus, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:hover, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:visited{color:#fff;border:2px solid #fff;outline:0}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;margin-top:20px;margin-bottom:10px;font-size:36px}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{padding:8px 0}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{padding:40px 0}.login-page[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{border-radius:50%;border:2px solid #fff}.login-page[_ngcontent-%COMP%]   .user-avatar1[_ngcontent-%COMP%]{border-radius:1%}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:0,name:"void",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translateY(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function v(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u["\u0275ted"](2,null,["Welcome Admin "," ",""]))],null,function(n,l){var e=l.component;n(l,2,0,e.myData.user.fname,e.myData.user.lname)})}function f(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u["\u0275ted"](1,null,["Welcome User "," ",""]))],null,function(n,l){var e=l.component;n(l,1,0,e.myData.user.fname,e.myData.user.lname)})}function h(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,v)),u["\u0275did"](2,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),u["\u0275and"](0,[["regularUser",2]],null,0,null,f))],function(n,l){n(l,2,0,1==l.component.myData.user.Admin,u["\u0275nov"](l,3))},null)}function C(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u["\u0275ted"](1,null,[""," "]))],null,function(n,l){n(l,1,0,l.component.myData.error_msg)})}function y(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](2,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),u["\u0275and"](0,[["loginerror",2]],null,0,null,C))],function(n,l){n(l,2,0,0==l.component.myData.error,u["\u0275nov"](l,3))},null)}function b(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["First Name is required."]))],null,null)}function P(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](2,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,u["\u0275nov"](l.parent,20).errors.required)},null)}function _(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Last Name is required."]))],null,null)}function M(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,_)),u["\u0275did"](2,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,u["\u0275nov"](l.parent,31).errors.required)},null)}function I(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Company Name is required."]))],null,null)}function w(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,I)),u["\u0275did"](2,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,u["\u0275nov"](l.parent,42).errors.required)},null)}function R(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Company Name is required."]))],null,null)}function O(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,R)),u["\u0275did"](2,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,u["\u0275nov"](l.parent,53).errors.required)},null)}function q(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Password needs to be more than 8 characters "]))],null,null)}function T(n){return u["\u0275vid"](0,[(n()(),u["\u0275ted"](-1,null,[" Passwords don't match "]))],null,null)}function x(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,3,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,q)),u["\u0275did"](2,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),u["\u0275and"](0,[["nomatch",2]],null,0,null,T))],function(n,l){n(l,2,0,u["\u0275nov"](l.parent,66).invalid,u["\u0275nov"](l,3))},null)}function k(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,94,"div",[["class","login-page"]],[[24,"@routerTransition",0]],null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,y)),u["\u0275did"](2,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](3,0,null,null,91,"div",[["class","row justify-content-md-center"]],null,null,null,null,null)),(n()(),u["\u0275eld"](4,0,null,null,90,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),u["\u0275eld"](5,0,null,null,0,"img",[["class","user-avatar1"],["src","http://apparel.idw-quickselect.com/wp-content/uploads/sites/3/2017/06/Artboard-1.png"],["width","250px"]],null,null,null,null,null)),(n()(),u["\u0275eld"](6,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Registration"])),(n()(),u["\u0275eld"](8,0,null,null,86,"form",[["autocomplete","off"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var o=!0,t=n.component;return"submit"===l&&(o=!1!==u["\u0275nov"](n,10).onSubmit(e)&&o),"reset"===l&&(o=!1!==u["\u0275nov"](n,10).onReset()&&o),"ngSubmit"===l&&(o=!1!==t.userRegister(u["\u0275nov"](n,10).value)&&o),o},null,null)),u["\u0275did"](9,16384,null,0,d.w,[],null,null),u["\u0275did"](10,4210688,[["newuserForm",4]],0,d.o,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,d.b,null,[d.o]),u["\u0275did"](12,16384,null,0,d.n,[[4,d.b]],null,null),(n()(),u["\u0275eld"](13,0,null,null,74,"div",[["class","form-content"]],null,null,null,null,null)),(n()(),u["\u0275eld"](14,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u["\u0275eld"](15,0,null,null,7,"input",[["class","form-control input-underline input-lg"],["id","fname"],["name","fname"],["placeholder","First Name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,t=n.component;return"input"===l&&(o=!1!==u["\u0275nov"](n,16)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==u["\u0275nov"](n,16).onTouched()&&o),"compositionstart"===l&&(o=!1!==u["\u0275nov"](n,16)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u["\u0275nov"](n,16)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(t.model.fname=e)&&o),o},null,null)),u["\u0275did"](16,16384,null,0,d.c,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275did"](17,16384,null,0,d.t,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,d.j,function(n){return[n]},[d.t]),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.c]),u["\u0275did"](20,671744,[["signupfname",4]],0,d.p,[[2,d.b],[6,d.j],[8,null],[6,d.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,d.l,null,[d.p]),u["\u0275did"](22,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,P)),u["\u0275did"](24,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](25,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u["\u0275eld"](26,0,null,null,7,"input",[["class","form-control input-underline input-lg"],["id","lname"],["name","lname"],["placeholder","Last Name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,t=n.component;return"input"===l&&(o=!1!==u["\u0275nov"](n,27)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==u["\u0275nov"](n,27).onTouched()&&o),"compositionstart"===l&&(o=!1!==u["\u0275nov"](n,27)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u["\u0275nov"](n,27)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(t.model.lname=e)&&o),o},null,null)),u["\u0275did"](27,16384,null,0,d.c,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275did"](28,16384,null,0,d.t,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,d.j,function(n){return[n]},[d.t]),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.c]),u["\u0275did"](31,671744,[["signuplname",4]],0,d.p,[[2,d.b],[6,d.j],[8,null],[6,d.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,d.l,null,[d.p]),u["\u0275did"](33,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,M)),u["\u0275did"](35,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](36,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u["\u0275eld"](37,0,null,null,7,"input",[["class","form-control input-underline input-lg"],["id","company"],["name","company"],["placeholder","Company Name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,t=n.component;return"input"===l&&(o=!1!==u["\u0275nov"](n,38)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==u["\u0275nov"](n,38).onTouched()&&o),"compositionstart"===l&&(o=!1!==u["\u0275nov"](n,38)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u["\u0275nov"](n,38)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(t.model.company=e)&&o),o},null,null)),u["\u0275did"](38,16384,null,0,d.c,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275did"](39,16384,null,0,d.t,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,d.j,function(n){return[n]},[d.t]),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.c]),u["\u0275did"](42,671744,[["signupcompany",4]],0,d.p,[[2,d.b],[6,d.j],[8,null],[6,d.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,d.l,null,[d.p]),u["\u0275did"](44,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,w)),u["\u0275did"](46,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](47,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u["\u0275eld"](48,0,null,null,7,"input",[["class","form-control input-underline input-lg"],["id","phone"],["name","phone"],["placeholder","Phone"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,t=n.component;return"input"===l&&(o=!1!==u["\u0275nov"](n,49)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==u["\u0275nov"](n,49).onTouched()&&o),"compositionstart"===l&&(o=!1!==u["\u0275nov"](n,49)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u["\u0275nov"](n,49)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(t.model.phone=e)&&o),o},null,null)),u["\u0275did"](49,16384,null,0,d.c,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275did"](50,16384,null,0,d.t,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,d.j,function(n){return[n]},[d.t]),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.c]),u["\u0275did"](53,671744,[["signupphone",4]],0,d.p,[[2,d.b],[6,d.j],[8,null],[6,d.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,d.l,null,[d.p]),u["\u0275did"](55,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,O)),u["\u0275did"](57,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](58,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u["\u0275eld"](59,0,null,null,5,"input",[["class","form-control input-underline input-lg"],["id","email"],["name","email"],["placeholder","Email"],["readonly",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,t=n.component;return"input"===l&&(o=!1!==u["\u0275nov"](n,60)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==u["\u0275nov"](n,60).onTouched()&&o),"compositionstart"===l&&(o=!1!==u["\u0275nov"](n,60)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u["\u0275nov"](n,60)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(t.model.email=e)&&o),o},null,null)),u["\u0275did"](60,16384,null,0,d.c,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.c]),u["\u0275did"](62,671744,null,0,d.p,[[2,d.b],[8,null],[8,null],[6,d.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,d.l,null,[d.p]),u["\u0275did"](64,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275eld"](65,0,null,null,22,"div",[["ngModelGroup","password"],["required",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](66,212992,[["userPassword",4]],0,d.q,[[1,d.b],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,d.b,null,[d.q]),u["\u0275did"](68,16384,null,0,d.n,[[4,d.b]],null,null),(n()(),u["\u0275eld"](69,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u["\u0275eld"](70,0,null,null,8,"input",[["class","form-control input-underline input-lg"],["id","inputPassword"],["minlength","8"],["name","password"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,t=n.component;return"input"===l&&(o=!1!==u["\u0275nov"](n,71)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==u["\u0275nov"](n,71).onTouched()&&o),"compositionstart"===l&&(o=!1!==u["\u0275nov"](n,71)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u["\u0275nov"](n,71)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(t.model.password=e)&&o),o},null,null)),u["\u0275did"](71,16384,null,0,d.c,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275did"](72,16384,null,0,d.t,[],{required:[0,"required"]},null),u["\u0275did"](73,540672,null,0,d.i,[],{minlength:[0,"minlength"]},null),u["\u0275prd"](1024,null,d.j,function(n,l){return[n,l]},[d.t,d.i]),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.c]),u["\u0275did"](76,671744,null,0,d.p,[[2,d.b],[6,d.j],[8,null],[6,d.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,d.l,null,[d.p]),u["\u0275did"](78,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275eld"](79,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),u["\u0275eld"](80,0,null,null,5,"input",[["class","form-control input-underline input-lg"],["id","confirmPassword"],["name","password2"],["placeholder","Confirm Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,t=n.component;return"input"===l&&(o=!1!==u["\u0275nov"](n,81)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==u["\u0275nov"](n,81).onTouched()&&o),"compositionstart"===l&&(o=!1!==u["\u0275nov"](n,81)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u["\u0275nov"](n,81)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(t.model.password2=e)&&o),o},null,null)),u["\u0275did"](81,16384,null,0,d.c,[u.Renderer2,u.ElementRef,[2,d.a]],null,null),u["\u0275prd"](1024,null,d.k,function(n){return[n]},[d.c]),u["\u0275did"](83,671744,null,0,d.p,[[2,d.b],[8,null],[8,null],[6,d.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,d.l,null,[d.p]),u["\u0275did"](85,16384,null,0,d.m,[[4,d.l]],null,null),(n()(),u["\u0275and"](16777216,null,null,1,null,x)),u["\u0275did"](87,16384,null,0,i.n,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](88,0,null,null,1,"button",[["class","btn rounded-btn"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" Register "])),(n()(),u["\u0275ted"](-1,null,["\xa0 "])),(n()(),u["\u0275eld"](91,0,null,null,3,"a",[["class","btn rounded-btn"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==u["\u0275nov"](n,92).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),u["\u0275did"](92,671744,null,0,r.o,[r.l,r.a,i.k],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](93,1),(n()(),u["\u0275ted"](-1,null,[" Log in "]))],function(n,l){var e=l.component;n(l,2,0,e.myData),n(l,17,0,""),n(l,20,0,"fname",e.model.fname),n(l,24,0,u["\u0275nov"](l,20).invalid&&(u["\u0275nov"](l,20).dirty||u["\u0275nov"](l,20).touched)),n(l,28,0,""),n(l,31,0,"lname",e.model.lname),n(l,35,0,u["\u0275nov"](l,31).invalid&&(u["\u0275nov"](l,31).dirty||u["\u0275nov"](l,31).touched)),n(l,39,0,""),n(l,42,0,"company",e.model.company),n(l,46,0,u["\u0275nov"](l,42).invalid&&(u["\u0275nov"](l,42).dirty||u["\u0275nov"](l,42).touched)),n(l,50,0,""),n(l,53,0,"phone",e.model.phone),n(l,57,0,u["\u0275nov"](l,53).invalid&&(u["\u0275nov"](l,53).dirty||u["\u0275nov"](l,53).touched)),n(l,62,0,"email",e.model.email),n(l,66,0,"password"),n(l,72,0,""),n(l,73,0,"8"),n(l,76,0,"password",e.model.password),n(l,83,0,"password2",e.model.password2),n(l,87,0,(u["\u0275nov"](l,66).invalid||(null==u["\u0275nov"](l,66).value?null:u["\u0275nov"](l,66).value.password)!=(null==u["\u0275nov"](l,66).value?null:u["\u0275nov"](l,66).value.password2))&&u["\u0275nov"](l,66).touched),n(l,92,0,n(l,93,0,"/login"))},function(n,l){n(l,0,0,void 0),n(l,8,0,u["\u0275nov"](l,12).ngClassUntouched,u["\u0275nov"](l,12).ngClassTouched,u["\u0275nov"](l,12).ngClassPristine,u["\u0275nov"](l,12).ngClassDirty,u["\u0275nov"](l,12).ngClassValid,u["\u0275nov"](l,12).ngClassInvalid,u["\u0275nov"](l,12).ngClassPending),n(l,15,0,u["\u0275nov"](l,17).required?"":null,u["\u0275nov"](l,22).ngClassUntouched,u["\u0275nov"](l,22).ngClassTouched,u["\u0275nov"](l,22).ngClassPristine,u["\u0275nov"](l,22).ngClassDirty,u["\u0275nov"](l,22).ngClassValid,u["\u0275nov"](l,22).ngClassInvalid,u["\u0275nov"](l,22).ngClassPending),n(l,26,0,u["\u0275nov"](l,28).required?"":null,u["\u0275nov"](l,33).ngClassUntouched,u["\u0275nov"](l,33).ngClassTouched,u["\u0275nov"](l,33).ngClassPristine,u["\u0275nov"](l,33).ngClassDirty,u["\u0275nov"](l,33).ngClassValid,u["\u0275nov"](l,33).ngClassInvalid,u["\u0275nov"](l,33).ngClassPending),n(l,37,0,u["\u0275nov"](l,39).required?"":null,u["\u0275nov"](l,44).ngClassUntouched,u["\u0275nov"](l,44).ngClassTouched,u["\u0275nov"](l,44).ngClassPristine,u["\u0275nov"](l,44).ngClassDirty,u["\u0275nov"](l,44).ngClassValid,u["\u0275nov"](l,44).ngClassInvalid,u["\u0275nov"](l,44).ngClassPending),n(l,48,0,u["\u0275nov"](l,50).required?"":null,u["\u0275nov"](l,55).ngClassUntouched,u["\u0275nov"](l,55).ngClassTouched,u["\u0275nov"](l,55).ngClassPristine,u["\u0275nov"](l,55).ngClassDirty,u["\u0275nov"](l,55).ngClassValid,u["\u0275nov"](l,55).ngClassInvalid,u["\u0275nov"](l,55).ngClassPending),n(l,59,0,u["\u0275nov"](l,64).ngClassUntouched,u["\u0275nov"](l,64).ngClassTouched,u["\u0275nov"](l,64).ngClassPristine,u["\u0275nov"](l,64).ngClassDirty,u["\u0275nov"](l,64).ngClassValid,u["\u0275nov"](l,64).ngClassInvalid,u["\u0275nov"](l,64).ngClassPending),n(l,65,0,u["\u0275nov"](l,68).ngClassUntouched,u["\u0275nov"](l,68).ngClassTouched,u["\u0275nov"](l,68).ngClassPristine,u["\u0275nov"](l,68).ngClassDirty,u["\u0275nov"](l,68).ngClassValid,u["\u0275nov"](l,68).ngClassInvalid,u["\u0275nov"](l,68).ngClassPending),n(l,70,0,u["\u0275nov"](l,72).required?"":null,u["\u0275nov"](l,73).minlength?u["\u0275nov"](l,73).minlength:null,u["\u0275nov"](l,78).ngClassUntouched,u["\u0275nov"](l,78).ngClassTouched,u["\u0275nov"](l,78).ngClassPristine,u["\u0275nov"](l,78).ngClassDirty,u["\u0275nov"](l,78).ngClassValid,u["\u0275nov"](l,78).ngClassInvalid,u["\u0275nov"](l,78).ngClassPending),n(l,80,0,u["\u0275nov"](l,85).ngClassUntouched,u["\u0275nov"](l,85).ngClassTouched,u["\u0275nov"](l,85).ngClassPristine,u["\u0275nov"](l,85).ngClassDirty,u["\u0275nov"](l,85).ngClassValid,u["\u0275nov"](l,85).ngClassInvalid,u["\u0275nov"](l,85).ngClassPending),n(l,88,0,!u["\u0275nov"](l,10).form.valid),n(l,91,0,u["\u0275nov"](l,92).target,u["\u0275nov"](l,92).href)})}var D=u["\u0275ccf"]("app-signup",c,function(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"app-signup",[],null,null,null,k,m)),u["\u0275did"](1,114688,null,0,c,[r.l,g],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),E=function(){};e.d(l,"SignupModuleNgFactory",function(){return S});var S=u["\u0275cmf"](o,[],function(n){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,D]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,i.p,i.o,[u.LOCALE_ID,[2,i.C]]),u["\u0275mpd"](4608,d.x,d.x,[]),u["\u0275mpd"](4608,d.e,d.e,[]),u["\u0275mpd"](4608,a.c,a.c,[]),u["\u0275mpd"](4608,a.h,a.b,[]),u["\u0275mpd"](5120,a.j,a.k,[]),u["\u0275mpd"](4608,a.i,a.i,[a.c,a.h,a.j]),u["\u0275mpd"](4608,a.g,a.a,[]),u["\u0275mpd"](5120,a.e,a.l,[a.i,a.g]),u["\u0275mpd"](1073742336,i.b,i.b,[]),u["\u0275mpd"](1073742336,d.u,d.u,[]),u["\u0275mpd"](1073742336,d.h,d.h,[]),u["\u0275mpd"](1073742336,d.s,d.s,[]),u["\u0275mpd"](1073742336,r.p,r.p,[[2,r.v],[2,r.l]]),u["\u0275mpd"](1073742336,E,E,[]),u["\u0275mpd"](1073742336,a.f,a.f,[]),u["\u0275mpd"](1073742336,o,o,[]),u["\u0275mpd"](1024,r.j,function(){return[[{path:"",component:c}]]},[])])})}}]);