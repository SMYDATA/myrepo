webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angularMaterial.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOwnCustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyOwnCustomMaterialModule = /** @class */ (function () {
    function MyOwnCustomMaterialModule() {
    }
    MyOwnCustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            //declarations: [ MatSlideToggleModule ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_slide_toggle__["a" /* MatSlideToggleModule */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], MyOwnCustomMaterialModule);
    return MyOwnCustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_history_profile_history_component__ = __webpack_require__("./src/app/profile-history/profile-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobs_jobs_component__ = __webpack_require__("./src/app/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_admin_page_users_admin_page_component__ = __webpack_require__("./src/app/users-admin-page/users-admin-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__["a" /* SignInComponent */], pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_9__users_admin_page_users_admin_page_component__["a" /* UsersAdminPageComponent */] },
    { path: 'profiles', component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_8__jobs_jobs_component__["a" /* JobsComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5__users_users_component__["a" /* UsersComponent */] },
    { path: 'profile-history/:number/:action', component: __WEBPACK_IMPORTED_MODULE_6__profile_history_profile_history_component__["a" /* ProfileHistoryComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var appComponents = [__WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__["a" /* SignInComponent */]];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <h3 style=\"color:#ff7524;font-family:fantasy\">\n      <i class=\"fab fa-affiliatetheme\"\n      style=\"padding: 8px; border-radius: 17px; background-color: #eae5e62b; box-shadow: 4px 3px;\">\n      </i>\n      <span> Asterittech</span>\n    </h3>\n    </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"\n  style=\"margin-left: 900px;\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\" *ngIf='role'>\n          <a class=\"nav-link\" class=\"btn btn-primary btn-md\" style=\"font-size:20px;color:white\">\n            <i class=\"fas fa-user-tie\" *ngIf=\"role == 'ADMIN'\"></i>\n            <i class=\"fas fa-user\" *ngIf=\"role == 'USER'\"></i>\n             {{ role}}\n        </a>\n      </li>\n      <li class=\"nav-item active\" style=\"cursor:pointer\">\n          <a class=\"nav-link\" (click)=\"loginCall()\" ><h5>{{logInValue}}</h5></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<hr>\n<router-outlet style=\"margin-top:10px\"></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__("./src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(service, router, cookieService) {
        this.service = service;
        this.router = router;
        this.cookieService = cookieService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.cookieService.get('mobile'));
        this.cookieService.get('mobile');
        this.service.userCheck.subscribe(function (userlogin) { return _this.logInValue = userlogin; });
        this.service.userRole.subscribe(function (role) { return _this.role = role; });
    };
    ;
    AppComponent.prototype.loginCall = function () {
        console.log("calllll");
        this.cookieService.delete("mobile");
        this.role = null;
        this.router.navigate(['/', 'login']);
        this.service.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angularMaterial__ = __webpack_require__("./src/app/angularMaterial.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customPipe__ = __webpack_require__("./src/app/customPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_service__ = __webpack_require__("./src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_history_profile_history_component__ = __webpack_require__("./src/app/profile-history/profile-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__jobs_jobs_component__ = __webpack_require__("./src/app/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_admin_page_users_admin_page_component__ = __webpack_require__("./src/app/users-admin-page/users-admin-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { FilterPipeModule } from 'ngx-filter-pipe';
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["b" /* appComponents */],
                __WEBPACK_IMPORTED_MODULE_13__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_history_profile_history_component__["a" /* ProfileHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_16__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__jobs_jobs_component__["a" /* JobsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__users_admin_page_users_admin_page_component__["a" /* UsersAdminPageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__customPipe__["a" /* DataFilter */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angularMaterial__["a" /* MyOwnCustomMaterialModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataFilter = /** @class */ (function () {
    function DataFilter() {
    }
    DataFilter.prototype.transform = function (data, searchText, type) {
        if (searchText && searchText.length > 0 && data.length > 0) {
            console.log("data before filter");
            console.log(data);
            console.log("searchText:" + searchText);
            var filteredData_1 = [];
            if (type == 'user') {
                data.forEach(function (user) {
                    if ((user.userId && user.userId != null) && (user.userId.toString()).includes(searchText))
                        filteredData_1.push(user);
                    if ((user.userName && user.userName != null) && (user.userName.includes(searchText)))
                        filteredData_1.push(user);
                });
            }
            if (type == 'profile') {
                data.forEach(function (profile) {
                    if ((profile.jobId && profile.jobId != null) && (profile.jobId.toString()).includes(searchText))
                        filteredData_1.push(profile);
                    if ((profile.resourceName && profile.resourceName != null) && (profile.resourceName.includes(searchText)))
                        filteredData_1.push(profile);
                    if ((profile.resourceTechnology && profile.resourceTechnology != null) && (profile.resourceTechnology.includes(searchText)))
                        filteredData_1.push(profile);
                });
            }
            if (type == 'job') {
                data.forEach(function (job) {
                    if ((job.jobId && job.jobId != null) && (job.jobId.toString()).includes(searchText))
                        filteredData_1.push(job);
                    if ((job.date && job.date != null) && (job.date.toString().includes(searchText)))
                        filteredData_1.push(job);
                });
            }
            data = filteredData_1;
            console.log("data after filter");
            console.log(data);
        }
        return data;
    };
    DataFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'filterData' })
    ], DataFilter);
    return DataFilter;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <h1> JOB CREATION </h1>\n  <!-- <button  type=\"button\" name=\"button\" class=\"btn btn-success btn-lg\" (click)=\"addJob()\">Add Job</button> -->\n  <button  type=\"button\" name=\"button\" class=\"btn btn-success btn-lg\" data-toggle=\"modal\" data-target=\"#exampleModal\">Add Job</button>\n  <button  type=\"button\" name=\"button\" class=\"btn btn-primary btn-lg\" routerLink=\"/profiles\">View Profile</button>\n  <button type=\"button\" name=\"button\" class=\"btn btn-primary btn-lg\" routerLink=\"/details\">Back</button>\n  <hr>\n  <div class=\"\">\n    <div class=\"input-group input-group-lg\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Search Filter</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userFilter\" placeholder=\"Filter By Job Id\">\n  </div>\n</div><br>\n  <div class=\"\">\n  <table class=\"table table-success table-hover\">\n  <thead>\n    <tr>\n      <th>#</th>\n       <th>\n        Date <i [ngClass]=\"sort\" (click)=\"sorting(sort)\"></i>\n      </th>\n      <th>Job Id</th>\n      <th>Technology</th>\n      <th>Experience</th>\n      <th>Visa Type</th>\n      <th>Job Description</th>\n      <th>Comments</th>\n      <th>Created By</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody style=\"font-size: medium;\">\n    <tr  *ngFor=\"let data of job| filterData : userFilter: 'job'; let i = index; let lastEl = last; let firstEl = first\">\n      <td>{{i+1}}</td>\n      <td>\n        <input class=\"\" type=\"text\" [(ngModel)]='data.createDate'/>\n      </td>\n      <td>\n        <input class=\"\" type=\"text\" [(ngModel)]='data.jobId'/>\n      </td>\n      <td>\n        <input class=\"\" type=\"text\" [(ngModel)]='data.resourceTechnology'/>\n      </td>\n      <td>\n        <input class=\"\" type=\"text\" [(ngModel)]='data.resourceExp'/>\n      </td>\n      <td>\n        <input class=\"\" type=\"text\" [(ngModel)]='data.resourceVisaType'/>\n      </td>\n      <td>\n        <input class=\"\" type=\"text\" [(ngModel)]='data.description'/>\n      </td>\n      <td>\n        <input class=\"\" type=\"text\" [(ngModel)]='data.comments'/>\n      </td>\n      <td>\n        <input class=\"\" type=\"text\" [(ngModel)]='name'/>\n      </td>\n      \n      <td>\n        <button type=\"button\"  (click)='apply(data)' class=\"btn btn-success btn-md\">Apply\n        </button>\n      </td>\n      <!-- <td >\n        <button type=\"button\"  (click)='deleteRow(i)' class=\"btn btn-danger btn-sm\">\n          <span class=\"glyphicon glyphicon-minus\"></span>\n        </button>\n      </td> -->\n    </tr>\n  </tbody>\n</table>\n</div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title\" id=\"exampleModalLabel\" style=\"margin-left:160px\">Add Job</h2>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"jobCreation.reset()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n  <form name=\"jobCreation\" #jobCreation=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"tech\">Technology</label>\n    <input type=\"text\" required name=\"tech\" class=\"form-control\" [(ngModel)]=\"newJob.resourceTechnology\" id=\"tech\"   placeholder=\"Enter Technoology\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"visa\">Visa Type</label>\n    <input type=\"text\" required name=\"visa\" class=\"form-control\" [(ngModel)]=\"newJob.resourceVisaType\" id=\"visa\"  placeholder=\"Enter VisaType\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exp\">Experience</label>\n    <input type=\"text\" required name=\"exp\" class=\"form-control\" [(ngModel)]=\"newJob.resourceExp\" id=\"exp\"  placeholder=\"Enter Experience\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Job Description</label>\n    <input type=\"text\" required name=\"desc\" class=\"form-control\" [(ngModel)]=\"newJob.description\" id=\"desc\"  placeholder=\"Description\">\n  </div>\n <!--  <div class=\"form-group\">\n    <label for=\"createdby\">CreatedBy</label>\n    <input type=\"text\" required name=\"createdby\" class=\"form-control\" [(ngModel)]=\"newJob.createdBy\"   placeholder=\"CreatedBy\">\n  </div> -->\n  <div class=\"form-group\">\n    <label for=\"comments\">Comments</label>\n    <input type=\"text\" required name=\"comments\" class=\"form-control\" [(ngModel)]=\"newJob.comments\" id=\"comments\" placeholder=\"Comments\">\n  </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"jobCreation.reset()\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!jobCreation.form.valid\" (click)=\"newJobData(newJob)\"  data-dismiss=\"modal\">Submit</button>\n    </div>\n  </form>\n</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__("./src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sorting__ = __webpack_require__("./src/app/sorting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobsComponent = /** @class */ (function () {
    function JobsComponent(service, router, route, cookieService) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.cookieService = cookieService;
        this.job = [{}];
        this.sort = "fas fa-sort";
        this.newJob = { resourceTechnology: '', resourceVisaType: '', createdBy: '', resourceExp: '', description: '', comments: '' };
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.cookieService.get('name');
        //alert('name:'+this.name)
        this.service.getJobs().subscribe(function (data) {
            var obj = data;
            if (obj != null && obj.length > 0) {
                _this.job = obj;
            }
            else {
                alert('No  Data Found.');
            }
        }, function (error) {
            alert('Could Not Connect To Server! Try Again.');
        });
    };
    JobsComponent.prototype.apply = function (data) {
        this.service.changeJob(data);
        this.router.navigate(['profiles']);
    };
    JobsComponent.prototype.newJobData = function (value) {
        var _this = this;
        console.log(value);
        var dataArr = [value];
        this.service.addJob(dataArr).subscribe(function (data) {
            alert('success');
            var obj = data;
            if (obj != null && obj.length > 0) {
                // console.log(this.job);
                _this.job.push(obj[0]);
                console.log(_this.job);
            }
            else {
                alert('Could Not Fetch Data.');
            }
        }, function (error) {
            alert('Could Not Connect To Server! Try Again.');
        });
    };
    JobsComponent.prototype.sorting = function (type) {
        if (type != 'fas fa-angle-down') {
            this.sort = "fas fa-angle-down";
            this.job.sort(__WEBPACK_IMPORTED_MODULE_4__sorting__["a" /* demo */]).reverse();
        }
        else {
            this.sort = "fas fa-angle-up";
            this.job.sort(__WEBPACK_IMPORTED_MODULE_4__sorting__["a" /* demo */]);
        }
    };
    JobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-jobs',
            template: __webpack_require__("./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__("./src/app/jobs/jobs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports) {

module.exports = ".pre{\n  height: 400px;\n  color:black;\n}\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\" style=\"height:300px\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active pre\">\n      <img class=\"d-block w-100\" src=\"https://images.pexels.com/photos/886465/pexels-photo-886465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" alt=\"First slide\">\n      <div class=\"carousel-caption d-none d-md-block\">\n            <!-- <h1 class=\"display-4\" style=\"color:#ff7524;\">GET UPDATE PROFILES</h1>\n            <p class=\"lead\">This is a useful to get the profiles and to work with the users.</p> -->\n          </div>\n      </div>\n    <!-- <div class=\"carousel-item pre\">\n      <img class=\"d-block w-100\" src=\"https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" alt=\"Second slide\">\n    </div> -->\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<!-- cards -->\n<div class=\"card text-center \" style=\"margin-top:120px\">\n  <div class=\"\">\n    <!-- Container (About Section) -->\n    <div id=\"about\" class=\"container-fluid bg-grey\">\n      <div class=\"row\">\n        <div class=\"col-sm-8\" style=\"\n    font-size: medium;\n    font-family: serif;\n    font-variant-caps: titling-caps;\n\">\n          <h2>About Company Page</h2><br>\n          <h4>To create business or company profiles, one needs to carefully develop a strategy and map out the characteristics to be highlighted and how to assimilate the unique offerings of the business in a concise yet attractive manner.\n             A great profile is crucial for any business but it should not be the only promotional tool; one needs to create the right marketing mix to reach out to customers and get them interested in your brand.</h4>\n          <br><button class=\"btn btn-default btn-lg\">Get in Touch</button>\n        </div>\n        <div class=\"col-sm-4\">\n          <img class=\"img-circle\" src=\"http://www.servicesepc.org/wp-content/uploads/2013/10/consulttancy.jpg\" alt=\"\" style=\"width: 401px;border-radius: 50%;height: 340px;\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"\">\n    <h2>Services</h2><br>\n   <!--  <article class=\"col oneline\">\n      <div class=\"circle-in\"><p>only one line</p></div>\n    </article>\n    <article class=\"col oneline\">\n      <div class=\"circle-in\"><p>only one line</p></div>\n    </article> -->\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n    <div class=\"list-group\">\n  <button type=\"button\" class=\"list-group-item list-group-item-action active\">\n    Jobs By Sector\n  </button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">All Sectors</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">Deveolopment</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">Support</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\" disabled>Testing</button>\n</div>\n  </div>\n    <div class=\"col-md-4\">\n    <div class=\"list-group\">\n  <button type=\"button\" class=\"list-group-item list-group-item-action active\">\n    Job By Location\n  </button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">India</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">US</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">UK</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\" disabled>All Locations</button>\n</div>\n  </div>\n    <div class=\"col-md-4\">\n    <div class=\"list-group\">\n  <button type=\"button\" class=\"list-group-item list-group-item-action active\">\n    Job By Function\n  </button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">IT Software</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">IT Hardware</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">Marketing</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\" disabled>Others</button>\n</div>\n  </div>\n  </div>\n</div>\n<hr>\n  <div class=\"card-footer text-muted\">\n  <div id=\"contact\" class=\"container-fluid\">\n  <h2 class=\"text-center\">CONTACT</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Contact us and we'll get back to you within 24 hours.</p>\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Chicago, US</p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> hr@asterittech.com</p>\n    </div>\n    <div class=\"col-sm-7\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\" required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required>\n        </div>\n      </div>\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Comment\" rows=\"5\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__("./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/profile-history/profile-history.component.css":
/***/ (function(module, exports) {

module.exports = ".textstyle{\n  font-family: serif;\n  font-stretch: normal;\n  font-variant-caps: petite-caps;\n}\n"

/***/ }),

/***/ "./src/app/profile-history/profile-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border border-success text-center pos textstyle\">\n  <h1> PROFILE-HISTROY </h1>\n  <div class=\"\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"backToProfiles()\" name=\"button\">BACK</button>\n </div>\n  <hr>\n  <div class=\"\">\n    <div class=\"input-group input-group-lg\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Search Filter</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userFilter\" placeholder=\"Filter By JobID, Name, Technology\">\n  </div>\n</div>\n <div class=\"\">\n </div>\n       <div class=\"container-fluid\" style=\"overflow:auto;\">\n         <table class=\"table table-bordered\">\n           <thead>\n             <tr>\n               <th>#</th>\n               <th>Name</th>\n               <th>Email</th>\n               <th>Technology</th>\n               <th>Specialization</th>\n               <th>Experience</th>\n               <th>VisaType</th>\n               <th>Location</th>\n               <th>BillRate</th>\n               <th>Availability</th>\n               <th>Client</th>\n               <th>employerName</th>\n               <th>employerEmail</th>\n               <th>employerNumber</th>\n               <th>comments</th>\n             </tr>\n           </thead>\n           <tbody style=\"font-size: medium;\">\n             <tr *ngFor=\"let data of profile | filterData : userFilter : 'profile'; let i = index; let lastEl = last; let firstEl = first\">\n               <td>{{i+1}}</td>\n               <td>\n                 {{profile[i].resourceName}}\n               </td>\n               <td>\n                 {{profile[i].resourceEmail}}\n               </td>\n               <td>\n                 {{profile[i].resourceTechnology}}\n               </td>\n               <td>\n                 {{profile[i].resourceSpec}}\n               </td>\n               <td>\n                 {{profile[i].resourceExp}}\n               </td>\n               <td>\n                 {{profile[i].resourceVisaType}}\n               </td>\n               <td>\n                 {{profile[i].resourceLocation}}\n               </td>\n               <td>\n                 {{profile[i].resourceBillRate}}\n               </td>\n               <td>\n                 {{profile[i].resourceAvailability}}\n               </td>\n               <td>\n                 {{profile[i].client}}\n               </td>\n               <td>\n                 {{profile[i].employerName}}\n               </td>\n               <td>\n                 {{profile[i].employerEmail}}\n               </td>\n               <td>\n                 {{profile[i].employerNumber}}\n               </td>\n               <td>\n                 {{profile[i].comments}}\n               </td>\n             </tr>\n           </tbody>\n         </table>\n       </div>\n        <hr>\n</div>\n"

/***/ }),

/***/ "./src/app/profile-history/profile-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__("./src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileHistoryComponent = /** @class */ (function () {
    function ProfileHistoryComponent(service, router, route, cookieService) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.cookieService = cookieService;
    }
    ProfileHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.role = this.cookieService.get('role');
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.getHistory(params.number, params.action);
        });
    };
    ProfileHistoryComponent.prototype.getHistory = function (id, action) {
        var _this = this;
        // console.log('mobile'+mobile)//need to differentiate for Job and profile history here and pass respetive value
        this.service.getProfileHistroy(id, action).subscribe(function (data) {
            var obj = data;
            if (obj != null && obj.length > 0) {
                _this.profile = obj;
            }
            else {
                alert('No  Data Found.');
            }
        }, function (error) {
            alert('Could Not Connect To Server! Try Again.');
        });
        console.log(this.profile);
    };
    ProfileHistoryComponent.prototype.backToProfiles = function () {
        this.router.navigate(['/profiles']);
    };
    ProfileHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile-history',
            template: __webpack_require__("./src/app/profile-history/profile-history.component.html"),
            styles: [__webpack_require__("./src/app/profile-history/profile-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], ProfileHistoryComponent);
    return ProfileHistoryComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".pos{\n  margin: 10px;\n  padding: 15px;\n}\n.example-full-width {\n  width: 20%;\n}\n.number{\n  color: blue;\n  cursor: pointer;\n}\n.userStyle{\n  background-color: #5fe76985;\n  border: 1px solid;\n}\n.clientStyle{\n  background-color: #f5c40b85;\n  border: 1px solid red;\n}\n.empStyle{\n  background-color: #2c086c8c;\n}\n.textstyle{\n  font-family: serif;\n  font-stretch: normal;\n  font-variant-caps: petite-caps;\n}\n.modal-dialog {\n  width: 100%;\n  min-width: 100%;\n}\n.modal-content {\n  width: auto;\n  min-width: 100%;\n  border-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\" style=\"margin-left:50%\">\n</div>\n<div class=\"border border-success text-center pos textstyle\">\n  <h1> PROFILE </h1>\n  <button type=\"button\" class=\"btn btn-success btn-lg\" data-toggle=\"modal\" data-target=\"#addProfile\">Add Profile</button>\n  <button type=\"button\" name=\"button\" class=\"btn btn-primary btn-lg\" routerLink=\"/jobs\">Jobs</button>\n  <button type=\"button\" name=\"button\" class=\"btn btn-primary btn-lg\" routerLink=\"/details\">Back</button>\n\n  <hr>\n  <div class=\"\">\n    <div class=\"input-group input-group-lg\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Search Filter</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userFilter\" placeholder=\"Filter By JobID, Name, Technology\">\n  </div>\n</div>\n<br>\n       <div class=\"container-fluid\" style=\"overflow:auto;\">\n         <table class=\"table table-bordered\">\n           <thead>\n             <tr style=\"font-style: oblique;font-size: 20px;\">\n               <th>#</th>\n               <th class=\"userStyle\">Profile Id</th>\n               <th class=\"userStyle\">Job Id</th>\n               <th class=\"userStyle\">Name</th>\n               <th class=\"userStyle\">Email</th>\n               <th class=\"userStyle\">Mobile</th>\n               <th class=\"userStyle\">Technology</th>\n               <th class=\"userStyle\">Specialization</th>\n               <th class=\"userStyle\">Experience</th>\n               <th class=\"userStyle\">Visa Type</th>\n               <th class=\"userStyle\">Location</th>\n               <th class=\"userStyle\">Bill Rate</th>\n               <th class=\"userStyle\">Upload Profile</th>\n               <th class=\"clientStyle\">Client</th>\n               <th class=\"clientStyle\">Client Location</th>\n               <th class=\"empStyle\">emp Name</th>\n               <th class=\"empStyle\">emp Email</th>\n               <th class=\"empStyle\">emp Number</th>\n               <th class=\"empStyle\">comments</th>\n               <th>open/close</th>\n             </tr>\n           </thead>\n           <tbody style=\"font-size: medium;\">\n             <tr  *ngFor=\"let data of profile | filterData : userFilter : 'profile'; let i = index; let lastEl = last; let firstEl = first\">\n               <td>{{i+1}}</td>\n               <td class=\"userStyle\">\n                 <input class=\"\" type=\"text\" [readonly]=\"data.readOnly\" [(ngModel)]='data.profileId'/>\n               </td>\n               <td class=\"userStyle\">\n                 <span class=\"number\" *ngIf=\"data.readOnly\" (click)=\"showHistory(data.jobId,'job')\">{{data.jobId}}</span>\n                 <input class=\"\" type=\"text\" *ngIf=\"!data.readOnly\" [(ngModel)]='data.jobId'/>\n               </td>\n               <td class=\"userStyle\">\n                 <input class=\"\" type=\"text\" [readonly]=\"data.readOnly\" [(ngModel)]='data.resourceName'/>\n               </td>\n               <td class=\"userStyle\">\n                 <input class=\"\" type=\"text\" [readonly]=\"data.readOnly\" [(ngModel)]='data.resourceEmail'/>\n               </td>\n               <td class=\"userStyle\">\n                 <span class=\"number\" *ngIf=\"data.readOnly\" (click)=\"showHistory(data.profileId,'profile')\">{{data.resourceNumber}}</span>\n                 <input class=\"\" type=\"text\" *ngIf=\"!data.readOnly\" [(ngModel)]='data.resourceNumber'/>\n               </td>\n               <td class=\"userStyle\">\n                 <select   [(ngModel)]='data.resourceTechnology' >\n                     <option *ngFor=\"let item of tech\" value={{item}}>\n                         {{item}}\n                     </option>\n                 </select>\n               </td>\n               <td class=\"userStyle\">\n                 <select  [(ngModel)]='data.resourceSpec' >\n                     <option *ngFor=\"let item of tech\" value={{item}}>\n                         {{item}}\n                     </option>\n                 </select>\n               </td>\n               <td class=\"userStyle\">\n                 <input class=\"\" type=\"text\"   [readonly]=\"data.readOnly\" [(ngModel)]='data.resourceExp'/>\n               </td>\n               <td class=\"userStyle\">\n                 <input class=\"\" type=\"text\"  [readonly]=\"data.readOnly\" [(ngModel)]='data.resourceVisaType'/>\n               </td>\n               <td class=\"userStyle\">\n                 <input class=\"\" type=\"text\"   [readonly]=\"data.readOnly\" [(ngModel)]='data.resourceLocation'/>\n               </td>\n               <td class=\"userStyle\">\n                 <input class=\"\" type=\"text\"   [readonly]=\"data.readOnly\" [(ngModel)]='data.resourceBillRate'/>\n               </td>\n               <td class=\"userStyle\">\n                 <span class=\"number\" placeholder=\"view file\" (click)=\"downloadProfile(data.resourceNumber)\">{{data.fileName}}</span>\n                 <input type=\"file\" (change)=\"selectFile($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\" required>\n               </td>\n               <td class=\"clientStyle\">\n                 <input class=\"\" type=\"text\"   [readonly]=\"data.readOnly\" [(ngModel)]='data.client'/>\n               </td>\n               <td class=\"clientStyle\">\n                 <input class=\"\" type=\"text\"   [readonly]=\"data.readOnly\" [(ngModel)]='data.clientLocation'/>\n               </td>\n               <td class=\"empStyle\">\n                 <input class=\"\" type=\"text\"   [readonly]=\"data.readOnly\" [(ngModel)]='data.employerName'/>\n               </td>\n               <td class=\"empStyle\">\n                 <input class=\"\" type=\"text\"   [readonly]=\"data.readOnly\" [(ngModel)]='data.employerEmail'/>\n               </td>\n               <td class=\"empStyle\">\n                 <input class=\"\" type=\"text\"   [readonly]=\"data.readOnly\" [(ngModel)]='data.employerNumber'/>\n               </td>\n               <td class=\"empStyle\">\n                 <input class=\"\" type=\"text\"   [readonly]=\"data.readOnly\" [(ngModel)]='data.comments'/>\n               </td>\n               <td>\n                 <mat-slide-toggle\n                  [color]='green'\n                  [checked]=\"data.blocked\"  [(ngModel)]=\"data.resourceAvailability\"\n                  [disabled]=\"val\">\n                </mat-slide-toggle>\n               </td>\n               <td *ngIf=\"data.readOnly\"><button type=\"button\" name=\"button\" (click)=\"data.readOnly = false\">Edit</button></td>\n                 <td *ngIf=\"!data.readOnly\"><button type=\"button\" name=\"button\" (click)=\"data.readOnly = true; saveProfile(data)\">Save</button></td>\n             </tr>\n           </tbody>\n         </table>\n       </div>\n        <hr>\n<!-- <button  class=\"btn btn-primary btn-block\"type=\"button\" (click)='saveProfile(profile)' name=\"button\">Save</button> -->\n</div>\n<!-- pop up -->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addProfile\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title\" id=\"addProfileLabel\" style=\"margin-left:560px\">Add Profile</h2>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form name=\"profileCreation\" #profileCreation=\"ngForm\">\n      <div class=\"modal-body\">\n        <div class=\"container-fluid\" style=\"overflow:auto;\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr style=\"font-style: oblique;font-size: 20px;\">\n                <th class=\"userStyle\">Job Id</th>\n                <th class=\"userStyle\">Name</th>\n                <th class=\"userStyle\">Email</th>\n                <th class=\"userStyle\">Mobile</th>\n                <th class=\"userStyle\">Technology</th>\n                <th class=\"userStyle\">Specialization</th>\n                <th class=\"userStyle\">Experience</th>\n                <th class=\"userStyle\">Visa Type</th>\n                <th class=\"userStyle\">Location</th>\n                <th class=\"userStyle\">Bill Rate</th>\n                <th class=\"userStyle\">Upload Profile</th>\n                <th class=\"clientStyle\">Client</th>\n                <th class=\"clientStyle\">Client Location</th>\n                <th class=\"empStyle\">emp Name</th>\n                <th class=\"empStyle\">emp Email</th>\n                <th class=\"empStyle\">emp Number</th>\n                <th class=\"empStyle\">comments</th>\n              </tr>\n            </thead>\n            <tbody style=\"font-size: medium;\">\n              <tr>\n                <td class=\"userStyle\">\n                  <input class=\"\" type=\"text\" name=\"jobid\"  [(ngModel)]='newProfile.jobId'required />\n                </td>\n                <td class=\"userStyle\">\n                  <input class=\"\" type=\"text\"  name=\"rName\"  [(ngModel)]='newProfile.resourceName' required />\n                </td>\n                <td class=\"userStyle\">\n                  <input class=\"\" type=\"text\" name=\"email\"  [(ngModel)]='newProfile.resourceEmail' required />\n                </td>\n                <td class=\"userStyle\">\n                  <input class=\"\" type=\"text\" name=\"number\" [(ngModel)]='newProfile.resourceNumber' required />\n                </td>\n                <td class=\"userStyle\">\n                  <select  [(ngModel)]='newProfile.resourceTechnology' name=\"tech\" required>\n                      <option *ngFor=\"let item of tech\" value={{item}}>\n                          {{item}}\n                      </option>\n                  </select>\n                </td>\n                <td class=\"userStyle\">\n                  <select  [(ngModel)]='newProfile.resourceSpec' name=\"spec\" required>\n                      <option *ngFor=\"let item of tech\" value={{item}}>\n                          {{item}}\n                      </option>\n                  </select>\n                </td>\n                <td class=\"userStyle\">\n                  <input class=\"\" type=\"text\" name=\"exp\" [(ngModel)]='newProfile.resourceExp' required />\n                </td>\n                <td class=\"userStyle\">\n                  <input class=\"\" type=\"text\" name=\"visa\" [(ngModel)]='newProfile.resourceVisaType' required />\n                </td>\n                <td class=\"userStyle\">\n                  <input class=\"\" type=\"text\" name=\"location\"  [(ngModel)]='newProfile.resourceLocation' required />\n                </td>\n                <td class=\"userStyle\">\n                  <input class=\"\" type=\"text\" name=\"billRate\"  [(ngModel)]='newProfile.resourceBillRate' />\n                </td>\n                <td class=\"userStyle\">\n                  <span class=\"number\" placeholder=\"view file\" (click)=\"downloadProfile(newProfile.resourceNumber)\">{{newProfile.fileName}}</span>\n                  <input type=\"file\" name=\"fileIn\" (change)=\"selectFile($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\" required />\n                </td>\n                <td class=\"clientStyle\">\n                  <input class=\"\" type=\"text\" name=\"client\"  [(ngModel)]='newProfile.client'  />\n                </td>\n                <td class=\"clientStyle\">\n                  <input class=\"\" type=\"text\" name=\"cLocation\"  [(ngModel)]='newProfile.clientLocation'  />\n                </td>\n                <td class=\"empStyle\">\n                  <input class=\"\" type=\"text\"  name=\"empName\" [(ngModel)]='newProfile.employerName'  />\n                </td>\n                <td class=\"empStyle\">\n                  <input class=\"\" type=\"text\" name=\"empEmail\"  [(ngModel)]='newProfile.employerEmail'  />\n                </td>\n                <td class=\"empStyle\">\n                  <input class=\"\" type=\"text\" name=\"empNum\"  [(ngModel)]='newProfile.employerNumber'  />\n                </td>\n                <td class=\"empStyle\">\n                  <input class=\"\" type=\"text\" name=\"comments\"  [(ngModel)]='newProfile.comments' required />\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </form>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"profileCreation.reset()\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!profileCreation.form.valid\" (click)=\"saveProfile(newProfile)\"  data-dismiss=\"modal\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__("./src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, router, routeActive, cookieService) {
        this.service = service;
        this.router = router;
        this.routeActive = routeActive;
        this.cookieService = cookieService;
        this.profile = [];
        this.newProfile = {
            jobId: '',
            resourceName: '',
            resourceEmail: '',
            resourceNumber: '',
            resourceTechnology: '',
            resourceSpec: '',
            resourceExp: '',
            resourceVisaType: '',
            resourceLocation: '',
            resourceBillRate: '',
            resourceAvailability: true,
            client: '',
            employerName: '',
            employerEmail: '',
            employerNumber: '',
            comments: ''
        };
        this.tech = ['node', 'angular', 'java', 'spring'];
        this.userFilter = '';
        this.fileArrList = [];
        this.curDate = Date.now();
        this.addRow = function () {
            this.profile.push({});
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.urlVal = this.routeActive.snapshot.url;
        //let jobdata = this.routeActive.snapshot.queryParams;
        this.userMobile = this.cookieService.get('mobile');
        this.role = this.cookieService.get('role');
        this.service.jobData.subscribe(function (job) { return _this.jobdata = job; });
        if (this.urlVal == "profiles") {
            this.formEditable = false;
        }
        else {
            this.formEditable = true;
        }
        this.getProfileData();
    };
    ProfileComponent.prototype.deleteRow = function (index) {
        this.profile.splice(index, 1);
    };
    ;
    ProfileComponent.prototype.selectFile = function (event) {
        alert('innnnn');
        this.selectedFiles = event.target.files;
    };
    ProfileComponent.prototype.saveProfile = function (obj) {
        var _this = this;
        console.log(obj);
        var arrData = [obj];
        var userMobile = this.cookieService.get('mobile');
        var data = JSON.stringify(obj);
        if (this.selectedFiles != null && this.selectedFiles.length > 0) {
            this.currentFileUpload = this.selectedFiles[0];
        }
        this.service.saveProfile(data, userMobile, this.currentFileUpload).subscribe(function (data) {
            alert('success');
            _this.getProfileData();
        }, function (error) {
            alert('error');
        });
    };
    ;
    ProfileComponent.prototype.downloadProfile = function (mobile) {
        window.location.href = 'http://localhost:8080/api/downloadProfile/' + mobile;
    };
    ProfileComponent.prototype.showHistory = function (value, action) {
        console.log('value::' + value);
        this.router.navigate(['profile-history', value, action]);
    };
    ProfileComponent.prototype.getProfileData = function () {
        var _this = this;
        this.service.getProfile(this.userMobile, this.role).subscribe(function (data) {
            var obj = data;
            if (obj != null && obj.length > 0) {
                _this.profile = obj;
                console.log(_this.profile);
                if (_this.jobdata.jobId != null) {
                    _this.profile.push(_this.jobdata);
                    _this.service.changeJob({});
                }
            }
            else {
                if (_this.jobdata.jobId != null) {
                    _this.profile.push(_this.jobdata);
                    _this.service.changeJob({});
                }
                else {
                    _this.profile = [];
                    alert('No  Data Found.');
                }
            }
        }, function (error) {
            alert('Could Not Connect To Server! Try Again.');
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ServiceService = /** @class */ (function () {
    function ServiceService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.dispValue = this.cookie.get('mobile') ? 'LogOut' : 'Login/Register';
        this.userMobile = this.cookie.get('mobile');
        this.roleVal = this.cookie.get('role');
        this.userlogin = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.dispValue);
        this.userCheck = this.userlogin.asObservable();
        this.role = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.roleVal);
        this.userRole = this.role.asObservable();
        this.job = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.jobData = this.job.asObservable();
    }
    ServiceService.prototype.changeUserCheck = function (userCheck) {
        console.log('userCheck:' + userCheck);
        this.userlogin.next(userCheck);
    };
    ServiceService.prototype.changeRole = function (userRole) {
        console.log('userRole:' + userRole);
        this.role.next(userRole);
    };
    ServiceService.prototype.changeJob = function (jobData) {
        console.log('job:' + jobData);
        this.job.next(jobData);
    };
    ServiceService.prototype.register = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = 'http://localhost:8080/api/registerUser/false';
        return this.http.post(url, body, httpOptions);
    };
    ServiceService.prototype.editUser = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = 'http://localhost:8080/api/editUser';
        return this.http.post(url, body, httpOptions);
    };
    ServiceService.prototype.loginUser = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = 'http://localhost:8080/api/loginUser';
        console.log(url);
        return this.http.post(url, body, httpOptions);
    };
    ServiceService.prototype.getProfile = function (userMobile, role) {
        console.log('getProfileuserMobile:' + userMobile + ' getProfile roleVal:' + role);
        var url = 'http://localhost:8080/api/getProfile/' + userMobile + '/' + role;
        return this.http.get(url);
    };
    ;
    ServiceService.prototype.getProfileHistroy = function (id, action) {
        console.log(action);
        var url = 'http://localhost:8080/api/getProfileHistroy/' + action + '/' + id;
        return this.http.get(url);
    };
    ;
    ServiceService.prototype.getUsers = function () {
        var url = 'http://localhost:8080/api/getUsers';
        return this.http.get(url);
    };
    ;
    ServiceService.prototype.updateUser = function (data) {
        var url = 'http://localhost:8080/api/registerUser/true';
        return this.http.post(url, data);
    };
    ServiceService.prototype.saveProfile = function (profile, userMobile, file) {
        console.log(profile);
        console.log('saveProfile userMobile==>' + this.userMobile);
        var formdata = new FormData();
        if (file != null) {
            formdata.append('file', file, file.name);
        }
        else {
            console.log('else');
            formdata.append('file', null);
        }
        formdata.append('profile', profile);
        //let headers1 = new Headers();
        // headers1.append('Content-Type', 'multipart/form-data');
        //headers1.append('Accept', 'application/json');
        // let options1 = new RequestOptions({ headers: headers1 });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/form-data');
        var url = 'http://localhost:8080/api/saveProfile/' + userMobile;
        return this.http.post(url, formdata, { headers: headers });
    };
    ServiceService.prototype.downloadProfile = function (userMobile) {
        console.log(userMobile);
        var url = 'http://localhost:8080/api/downloadProfile/' + userMobile;
        return this.http.get(url);
    };
    ServiceService.prototype.saveAttachment = function (file) {
        console.log(file);
        var url = 'http://localhost:8080/api/saveFile';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/form-data');
        return this.http.post(url, file, { headers: headers });
    };
    ServiceService.prototype.addJob = function (data) {
        var url = 'http://localhost:8080/api/addJob';
        return this.http.post(url, data);
    };
    ServiceService.prototype.getJobs = function () {
        var url = 'http://localhost:8080/api/getJobs';
        return this.http.get(url);
    };
    ServiceService.prototype.logout = function () {
    };
    ServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports) {

module.exports = ".signIn{\n  width: 40%;\n  height: auto;\n  background-color: #1abc9c;\n  border-radius: 10px;\n  border: 1px solid;\n   -webkit-box-shadow: 5px 10px #888888;\n           box-shadow: 5px 10px #888888;\n  margin-top: 10%;\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\n\t box-shadow: 0 10px 6px -6px #777;\n }\n\n.btnStyle{\n  width: 230px;\n}\n\n.login-form{\n  margin: 20px;\n}\n\n.forgotPwd:hover{\n  cursor: pointer;\n  color: #1b69b6;\n  text-decoration:underline;\n}\n\nh1{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger alert-dismissible\" *ngIf=\"userBlocked\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <strong>Your Account Is Blocked. Please Contact ADMIN To UnBlock.</strong>\n</div>\n<div class=\"container-fluid signIn center20\">\n\t<div [hidden]=\"submitted\">\n\t\t<h1>Log In</h1>\n\t\t<div class=\"alert alert-danger alert-dismissible\" *ngIf=\"loginFail\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <strong>Invalid credentials!!</strong>\n</div>\n\t\t<form (ngSubmit)=\"onSubmit(); signin.reset()\" #signin=\"ngForm\" class=\"login-form\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Mobile</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"mobile\"\n               required\n               [(ngModel)]=\"mobileNumber\" name=\"mobile\"\n               #mobile=\"ngModel\"/>\n\t\t\t\t<div [hidden]=\"mobile.valid || mobile.pristine\"\n             class=\"alert alert-danger\">\n           Mobile Number is required\n        </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Password</label>\n\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\"\n               required\n               [(ngModel)]=\"passwordVal\" name=\"password\"\n               #password=\"ngModel\" />\n\t\t\t\t<div [hidden]=\"password.valid || password.pristine\"\n             class=\"alert alert-danger\">\n          Password is required\n        </div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t<button  type=\"submit\" class=\"btn btn-success btn-md  col-md-5\" [disabled]=\"!signin.form.valid\" >Log In</button>\n\t\t\t<button  type=\"button\" class=\"btn btn-primary btn-md  col-md-5\"  routerLink=\"/register\">Register</button>\n\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service__ = __webpack_require__("./src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {WebStorageService} from 'angular-webstorage-service';

var SignInComponent = /** @class */ (function () {
    function SignInComponent(_demoService, router, cookieService, route) {
        this._demoService = _demoService;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.pattern_mobile = /([0-9]){10}/g;
        this.onSubmit = function () {
            var _this = this;
            var obj = { mobile: this.mobileNumber, password: this.passwordVal };
            this._demoService.loginUser(obj).subscribe(function (data) {
                console.log(data);
                if (data != null) {
                    if (data.blocked == true) {
                        _this.userBlocked = true;
                    }
                    else {
                        _this.cookieService.set('mobile', obj.mobile);
                        _this.cookieService.set('name', data.userName);
                        _this._demoService.changeUserCheck('LogOut');
                        if (data.role == 'ADMIN') {
                            _this.cookieService.set('role', 'ADMIN');
                            _this._demoService.changeRole('ADMIN');
                            _this.router.navigate(['/', 'details']);
                        }
                        else if (data.role == 'USER') {
                            _this.cookieService.set('role', 'USER');
                            _this._demoService.changeRole('USER');
                            _this.router.navigate(['/', 'details']);
                        }
                    }
                }
                else {
                    _this.loginFail = true;
                    _this._demoService.changeRole(null);
                }
            }, function (error) {
                _this.loginFail = true;
                _this._demoService.changeRole(null);
            });
        };
    }
    SignInComponent.prototype.ngOnInit = function () {
        this._demoService.changeUserCheck('Login/Register');
        this.cookieService.delete('role');
    };
    ;
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".signUp{\n  /* width: auto; */\n  /* background: linear-gradient(green, yellow, green); */\n  /* background-color: #FFF; */\n  border-radius: 10px;\n  border: 1px solid;\n   -webkit-box-shadow: 5px 10px #888888;\n           box-shadow: 5px 10px #888888;\n  margin-top: 10px;\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\n\t box-shadow: 0 10px 6px -6px #777;\n }\n .signup-form{\n   margin: 20px;\n }\n .flexDiv{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n .flex-item{\n  width: 25%\n}\n .flex-item-middle{\n  margin: 0 5px;\n}\n .dropdown-flex{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n .dropdown-category{\n  width: 45%;\n}\n .dropdown-register{\n  margin-left: 10%;\n  width: 45%;\n}\n .flex-item-getAdd{\n  margin-top: 25px;\n  width:30%\n}\n .flex-item-buAdd{\n  width: 70%\n}\n h1{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"signUp row\">\n  <div class=\"col align-self-start\">\n   <div [hidden]=\"submitted\">\n      <h1>Register</h1>\n      <form (ngSubmit)=\"onSubmit(); signup.reset()\" #signup=\"ngForm\" class=\"signup-form\">\n      <div class=\"form-group\">\n         <label for=\"name\">Name:</label>\n         <input type=\"text\" class=\"form-control\" id=\"name\"\n         required\n         [(ngModel)]=\"userName\" name=\"name\"\n         #name=\"ngModel\"/>\n         <div [hidden]=\"name.valid || name.pristine\"\n            class=\"alert alert-danger\">\n             name is required\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"name\">Email Address:</label>\n         <input type=\"text\" class=\"form-control\" name=\"email\"required\n         [(ngModel)]=\"emailId\" #email=\"ngModel\" >\n         <div [hidden]=\"email.valid || email.pristine\"\n            class=\"alert alert-danger\">\n          <span>  Email is required</span>\n         </div>\n      </div>\n      <div class=\"form-group\" >\n         <label for=\"name\">Mobile Number:</label>\n         <input type=\"text\" class=\"form-control\"\n         required\n         [(ngModel)]=\"mobileNumber\" name=\"mobile\"\n         #mobile=\"ngModel\"/>\n         <div [hidden]=\"mobile.valid || mobile.pristine\"\n            class=\"alert alert-danger\">\n            <span >mobile number is required</span>\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"name\">Password:</label>\n         <input type=\"password\" class=\"form-control\" id=\"password\"\n         required\n         [(ngModel)]=\"passwordVal\" name=\"password\" placeholder=\"Min 6 Characters\"\n         #password=\"ngModel\"/>\n         <div [hidden]=\"password.valid || password.pristine\"\n            class=\"alert alert-danger\">\n            password is required\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"name\">Re-Enter Password:</label>\n         <input type=\"password\" class=\"form-control\" id=\"password2\"\n         required\n         [(ngModel)]=\"passwordVal2\" name=\"password2\" placeholder=\"Min 6 Characters\"\n         #password2=\"ngModel\"/>\n         <div [hidden]=\"password2.valid || password2.pristine\"\n            class=\"alert alert-danger\">\n            password is required\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"name\">Security Question:Your Birth Place</label>\n         <input type=\"password\" class=\"form-control\" id=\"secQ\"\n         required\n         [(ngModel)]=\"secQuestion\" name=\"secQ\" placeholder=\"Answer\"\n         #secQ=\"ngModel\"/>\n         <div [hidden]=\"secQ.valid || secQ.pristine\"\n            class=\"alert alert-danger\">\n            Answer is required\n         </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success btn-lg btn-block\" [disabled]=\"!signup.form.valid\" >Submit</button>\n      </form>\n   </div>\n   </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service__ = __webpack_require__("./src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(_demoService, router) {
        this._demoService = _demoService;
        this.router = router;
        this.onSubmit = function () {
            var _this = this;
            var obj = { userName: this.userName, email: this.emailId, mobile: this.mobileNumber, secQ: this.secQuestion, password: this.passwordVal, pswd2: this.passwordVal2 };
            console.log(obj);
            if (obj.password == obj.pswd2) {
                this._demoService.register(obj).subscribe(function (data) {
                    _this.router.navigate(['/', 'login']);
                }, function (error) {
                    alert("could not register! try again..");
                });
            }
            else {
                alert("Password Miss Match");
            }
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/sorting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = demo;
function demo(a, b) {
    var dateA = a.createDate;
    var dateB = b.createDate;
    var comparison = 0;
    if (dateA > dateB) {
        comparison = -1;
    }
    else if (dateA < dateB) {
        comparison = 1;
    }
    return comparison;
}


/***/ }),

/***/ "./src/app/users-admin-page/users-admin-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users-admin-page/users-admin-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row align-items-center\">\n  <div class=\"col\">\n    <button type=\"button\" [routerLink]=\"['/users']\" class=\"btn btn-primary btn-block\" *ngIf=\"role == 'ADMIN'\">Users</button>\n    <button type=\"button\" [routerLink]=\"['/profiles']\" class=\"btn btn-primary btn-block\">Profiles</button>\n    <button type=\"button\" [routerLink]=\"['/jobs']\" class=\"btn btn-primary btn-block\">Jobs</button>\n  </div>\n</div>\n<!-- <div class=\"\">\n<router-outlet></router-outlet>\n</div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/users-admin-page/users-admin-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersAdminPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service__ = __webpack_require__("./src/app/service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersAdminPageComponent = /** @class */ (function () {
    function UsersAdminPageComponent(service) {
        this.service = service;
    }
    UsersAdminPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.userRole.subscribe(function (role) { return _this.role = role; });
    };
    UsersAdminPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-users-admin-page',
            template: __webpack_require__("./src/app/users-admin-page/users-admin-page.component.html"),
            styles: [__webpack_require__("./src/app/users-admin-page/users-admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_service__["a" /* ServiceService */]])
    ], UsersAdminPageComponent);
    return UsersAdminPageComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ".pos{\n  margin: 10px;\n  padding: 15px;\n}\n.textstyle{\n  font-family: serif;\n  font-stretch: normal;\n  font-variant-caps: petite-caps;\n}\n"

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border border-success text-center pos textstyle\">\n  <h1> USERS </h1>\n  <button type=\"button\" name=\"button\" class=\"btn btn-primary btn-lg\" routerLink=\"/details\">Back</button>\n  <div class=\"\">\n    <div class=\"input-group input-group-lg\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Search Filter</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userFilter\" placeholder=\"Filter By Id, Name\">\n  </div>\n</div>\n<br>\n       <div class=\"container-fluid\" style=\"overflow:auto;\">\n         <table class=\"table table-bordered\">\n           <thead>\n             <tr>\n               <th>Id</th>\n               <th>Name</th>\n               <th>Email</th>\n               <th>Mobile</th>\n               <th>Blocked</th>\n             </tr>\n           </thead>\n           <tbody>\n             <tr *ngFor=\"let data of users | filterData : userFilter : 'user'; let i = index;\">\n               <td>\n                 <span>{{data.userId}}</span>\n               </td>\n               <td>\n                 <span *ngIf=\"data.edit == true || data.edit == undefined\">{{data.userName}}</span>\n                 <input *ngIf=\"data.edit == false\" type=\"text\" [(ngModel)]=\"data.userName\" name=\"\" value=\"\">\n               </td>\n               <td>\n                 <span *ngIf=\"data.edit == true || data.edit == undefined\">{{data.email}}</span>\n                 <input *ngIf=\"data.edit == false\" type=\"text\" [(ngModel)]=\"data.email\" name=\"\" value=\"\">\n               </td>\n               <td>\n                 {{data.mobile}}\n               </td>\n               <td>\n                 <mat-slide-toggle\n                  [color]=''\n                  [checked]=\"data.blocked\" [(ngModel)]=\"data.blocked\"\n                  [disabled]=\"val\" (change)='update(i)'>\n                </mat-slide-toggle>\n              </td>\n              <td>\n                <button type=\"button\" name=\"button\" *ngIf=\"data.edit == true || data.edit == undefined\" (click)=\"data.edit = false\">edit</button>\n                <button type=\"button\" name=\"button\" *ngIf=\"data.edit == false\" (click)=\"data.edit = true;editUser(data) \">save</button>\n              </td>\n             </tr>\n           </tbody>\n         </table>\n       </div>\n        <hr>\n</div>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service__ = __webpack_require__("./src/app/service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(service) {
        this.service = service;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (data) {
            if (data != null) {
                var obj = data;
                _this.users = obj;
            }
            else {
                alert('No  Data Found.');
            }
        }, function (error) {
            alert('Could Not Connect To Server! Try Again.');
        });
    };
    UsersComponent.prototype.update = function (index) {
        var _this = this;
        console.log(this.users[index]);
        if (index >= 0) {
            var obj = this.users[index];
            this.service.updateUser(obj).subscribe(function (data) {
                alert("user Blocked");
            }, function (error) {
                _this.users[index].blocked = false;
                alert("Error!!!");
                console.log(_this.users[index]);
            });
        }
        else {
            alert("Error!!");
        }
    };
    UsersComponent.prototype.editUser = function (data) {
        this.service.editUser(data).subscribe(function (data) {
            alert("success");
        }, function (error) {
            alert("Error!!!");
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_service__["a" /* ServiceService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map