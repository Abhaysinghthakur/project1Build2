(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'projectFrontEnd';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_management_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management/login/login.component */ "./src/app/user-management/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-management/user-management.module */ "./src/app/user-management/user-management.module.ts");
/* harmony import */ var _shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-component/shared-component.module */ "./src/app/shared-component/shared-component.module.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _issue_issue_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./issue/issue.module */ "./src/app/issue/issue.module.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//resources




//modules


//services


//social login

function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"]("440119432708-mkpkund91033ei0r05od5fmjvpkcfa6u.apps.googleusercontent.com")
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _issue_issue_module__WEBPACK_IMPORTED_MODULE_11__["IssueModule"],
                _shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentModule"],
                _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_8__["UserManagementModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["SocialLoginModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'login', component: _user_management_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                    { path: '', component: _user_management_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                    { path: '*', component: _user_management_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                    { path: '**', component: _user_management_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
                ])
            ],
            providers: [_http_service_service__WEBPACK_IMPORTED_MODULE_10__["HttpServiceService"],
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//HTTP Import


//TOASTR IMPORTING

//Cookie import.

var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(http, toastr) {
        var _this = this;
        this.http = http;
        this.toastr = toastr;
        this.url = 'http://api.developtheworld.co.in/api/project';
        this.allUsers = function () {
            return _this.http.get(_this.url + "/users/allUsers");
        };
        this.createIssue = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('by', data.by)
                .set('title', data.title)
                .set('description', data.description)
                .set('byId', data.byId)
                .set('status', data.status)
                .set('assignedToId', data.assignedToId)
                .set('assignedToName', data.assignedToName);
            return _this.http.post(_this.url + "/issue/create", params);
        };
        this.getIssue = function (issueId) {
            return _this.http.get(_this.url + "/issue/view/" + issueId);
        };
        this.getComments = function (issueId) {
            return _this.http.get(_this.url + "/issue/readComment/" + issueId);
        };
        this.makeComment = function (commentData) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('issueId', commentData.issueId)
                .set('description', commentData.description)
                .set('by', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName'))
                .set('byId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'));
            return _this.http.post(_this.url + "/issue/addComment", params);
        };
        this.assignedIssue = function () {
            return _this.http.get(_this.url + "/issue/assigned/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'));
        };
        this.searchIssue = function (arg, skip) {
            if (skip === void 0) { skip = 0; }
            return _this.http.get(_this.url + "/issue/search?arg=" + arg + "&skip=" + skip);
        };
        this.getNotification = function () {
            return _this.http.get(_this.url + "/notify/get/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("userId"));
        };
        this.addToWatcherList = function (issueId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('issueId', issueId)
                .set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'));
            return _this.http.post(_this.url + "/notify/addWatcher/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'), params);
        };
        this.getWatcherList = function () {
            return _this.http.get(_this.url + "/getwatcherlist/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'));
        };
        this.getWatcherIssues = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('issueIdArray', data.data[0].issueIdArray);
            return _this.http.post(_this.url + "/issue/filter", params);
        };
        this.getnotifications = function () {
            return _this.http.get(_this.url + "/notify/get/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'));
        };
        this.removeWatcher = function (issueId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
                .set('issueId', issueId);
            return _this.http.post(_this.url + "/removeWatcher/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'), params);
        };
    }
    HttpServiceService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/users/login", params);
    }; // signinFunction end 
    HttpServiceService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobile)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/users/signup", params);
    }; // signupFunction end
    HttpServiceService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/users/logout", params);
    }; // end logout function
    HttpServiceService.prototype.editIssue = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('by', data.by)
            .set('title', data.title)
            .set('description', data.description)
            .set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'))
            .set('status', data.status)
            .set('assignedToId', data.assignedToId)
            .set('assignedToName', data.assignedToName);
        return this.http.post(this.url + "/issue/edit/" + data.issueId, params);
    };
    HttpServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/issue/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/issue/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerNav{\n    align-items: center;\n    justify-content: space-around;\n    margin: 0 !important;\n    border: 0 !important;\n    padding: 0 !important;\n}\n\n.noMargin{\n    margin: 0 !important;\n    border: 0 !important;\n    padding: 0 !important;\n    text-align: center;\n}\n\n.noMargin::first-letter{\n    text-transform: capitalize;\n}\n\n.noMargin2{\n    margin: 0 !important;\n    border: 0 !important;\n    padding: 0 0 0 5% !important;\n}\n\n.noMargin2::first-letter{\n    text-transform: capitalize;\n}\n\n.sideNav{\n    height: 8vh;\n    width: 100%;\n    border: 1px 0 1px 0 white solid;\n}\n\n.sideNav:hover{\n    height: 9vh;\n    width: 100%;\n    transition: linear;\n    background: #1d1e1f;\n    transition-timing-function: linear 2s;\n}\n\n.sideItem{\n    color:whitesmoke;\n}\n\n.backgroungColor{\n    background: transparent;\n    cursor: pointer;\n}\n\n.navTitle{\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 2em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n    background: #96c2c9;\n}\n\n.containerIssues{\n    height: 100vh;\n    overflow-y: scroll;\n}\n"

/***/ }),

/***/ "./src/app/issue/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/issue/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2 containerNav bg-dark rounded\">\n            <div class=\"sideItem p-3 row borderClass\">\n                <div class=\"navTitle col-3\">\n                    {{firstChar}}\n                </div>\n                <div class=\"col-9 noMargin\">\n                    {{userName}}<br>\n                    Dashboard\n                </div>\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark\" (click)=\"home()\"> Home</button>\n                </div>\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\n                        aria-expanded=\"false\" aria-controls=\"collapseExample\">Search</button>\n                </div>\n            </div>\n            <div class=\"collapse\" id=\"collapseExample\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon2\"\n                    (keydown)=\"searchIssue($event)\" [(ngModel)]=\"searchData\">\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark\" [routerLink]=\"['/create']\"> create</button>\n                </div>\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-flag-o\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark  dropdown-toggle\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"getNotifications()\">\n                        Notification's\n                        <span class=\"badge badge-light\" *ngIf=\"watcherList\">\n                            <span *ngIf=\"watcherList\"><span *ngIf=\"watcherList.data[0].notificationCount > 0\">{{watcherList.data[0].notificationCount}}\n                            </span></span>\n                        </span>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                            <span *ngIf=\"notificationData\">\n                                <span *ngFor=\"let x of notificationData\">\n                                    <a class=\"dropdown-item\" [routerLink]=\"['/view/'+x.issueId]\">{{x.description}}</a>\n                                    <div class=\"dropdown-divider\"></div>\n                                </span>\n                                <a class=\"dropdown-item\" style=\"text-align:center\"><u>see all</u></a>\n                            </span>\n                            <span *ngIf=\"!notificationData\">\n                                <a class=\"dropdown-item\"> No Notification Present </a>\n                            </span>\n                        </div>\n                    </button>\n                </div>\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark\" (click)=\"issuesWatching()\"> Watching</button>\n                </div>\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-caret-square-o-left\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark\" (click)=\"functionBacklog()\"> Backlog</button>\n                </div>\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-spinner\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark\" (click)=\"functionInprogess()\"> In-progress</button>\n                </div>\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark\" (click)=\"functionIntest()\"> In-test</button>\n                </div>\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark\" (click)=\"functionDone()\"> Done</button>\n                </div>\n            </div>\n            <div class=\"sideNav col-12\">\n                <div class=\"sideItem\">\n                    <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n                    <button class=\"noMargin2 backgroungColor btn-dark\" (click)=\"logout()\"> Log-Out</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-10 containerIssues\" style=\"padding:5%\">\n            <span *ngIf=\"someIssueData\">\n                <span *ngIf=\"toggler\">\n                    <data-board [backlogs]=\"backlogs\" [inProgress]=\"inProgress\" [inTest]=\"inTest\" [done]=\"done\"></data-board>\n                </span>\n                <span *ngIf=\"!toggler\">\n                    <single-data-board [data]=\"someIssueData\"></single-data-board>\n                </span>\n            </span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/issue/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/issue/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, router, toastr) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.today = Date.now();
        this.backlogs = [];
        this.inProgress = [];
        this.inTest = [];
        this.done = [];
        this.toggler = true;
        this.logout = function () {
            _this.http.logout().subscribe(function (apiResponse) {
                if (apiResponse['status'] == 200) {
                    console.log('logout');
                    console.log(apiResponse);
                    _this.router.navigate(['/login']);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].deleteAll();
                }
            }, function (error) {
                console.log(error.message);
            });
        };
        this.searchIssue = function (event) {
            if (event.keyCode == 13) {
                _this.http.searchIssue(_this.searchData).subscribe(function (response) {
                    if (response['status'] == 200) {
                        _this.searchData = "";
                        _this.someIssueData = response['data'];
                        _this.toggler = false;
                    }
                    else if (response['status'] == 404) {
                        _this.toastr.info('No result Found');
                    }
                }, function (error) {
                    console.log(error);
                    _this.toastr.error('Some error ocurred');
                });
            }
        };
        this.home = function () {
            _this.toggler = true;
        };
        this.functionBacklog = function () {
            _this.toggler = false;
            _this.someIssueData = _this.backlogs;
        };
        this.functionInprogess = function () {
            _this.toggler = false;
            _this.someIssueData = _this.inProgress;
        };
        this.functionIntest = function () {
            _this.toggler = false;
            _this.someIssueData = _this.inTest;
        };
        this.functionDone = function () {
            _this.toggler = false;
            _this.someIssueData = _this.done;
        };
        this.getNotification = function () {
            _this.http.getNotification().subscribe(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        };
        this.issuesWatching = function () {
            if (_this.watcherList['status'] == 200) {
                _this.http.getWatcherIssues(_this.watcherList).subscribe(function (response) {
                    if (response['status'] == 200) {
                        _this.toggler = false;
                        _this.someIssueData = response['data'];
                    }
                    else if (response['status'] == 404) {
                        _this.toastr.info('No issues found');
                    }
                });
            }
            else {
                _this.toastr.info('No issues watching');
            }
        };
        this.getNotifications = function () {
            console.log('here');
            _this.watcherList.data[0].notificationCount = 0;
            if (!_this.notificationData) {
                _this.http.getNotification().subscribe(function (response) {
                    console.log(response);
                    if (response['status'] == 200) {
                        _this.notificationData = response["data"];
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userName') || "Test User";
        this.firstChar = this.userName[0];
        this.http.assignedIssue().subscribe(function (response) {
            _this.someIssueData = response['data'];
            for (var _i = 0, _a = _this.someIssueData; _i < _a.length; _i++) {
                var x = _a[_i];
                switch (x.status) {
                    case 'Backlog':
                        _this.backlogs.push(x);
                        break;
                    case 'In-progress':
                        _this.inProgress.push(x);
                        break;
                    case 'In-test':
                        _this.inTest.push(x);
                        break;
                    case 'Done':
                        _this.done.push(x);
                        break;
                }
            }
        }, function (error) {
            console.log(error);
        });
        this.http.getWatcherList().subscribe(function (response) {
            _this.watcherList = response;
        }, function (error) {
            console.log(error);
            _this.toastr.error("error while retriving watcherList");
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/issue/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/issue/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/issue/issue-create/issue-create.component.css":
/*!***************************************************************!*\
  !*** ./src/app/issue/issue-create/issue-create.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }"

/***/ }),

/***/ "./src/app/issue/issue-create/issue-create.component.html":
/*!****************************************************************!*\
  !*** ./src/app/issue/issue-create/issue-create.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">DashBoard</a>\n</nav>\n<div class=\"container\">\n  <div class=\"row p-5\" style=\"text-align:left\">\n    <div class=\"col-md-12\">\n      <form #createIssueForm=\"ngForm\" (ngSubmit)=\"createIssue()\">\n        <div class=\"form-group\">\n          <label>Issue Title</label>\n          <input type=\"text\" name=\"issueTitle\" [(ngModel)]=\"issueTitle\" #title=\"ngModel\" class=\"form-control\"\n            placeholder=\"Enter issue Title\" required>\n        </div>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n          Issue Title is required\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n            <app-ngx-editor [placeholder]=\"'Enter Description here...'\" [spellcheck]=\"true\" name=\"issueDescription\" [(ngModel)]=\"issueDescription\" style=\"height:20vh\" required></app-ngx-editor>\n        </div>\n        <div class=\"form-group\">\n          <label>Status</label>\n          <select [(ngModel)]=\"issueStatus\" #category=\"ngModel\" name=\"issueStatus\" class=\"form-control\" id=\"category\"\n            required>\n            <option *ngFor=\"let category of possibleStatus\" [value]=\"category\">{{category}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n            <label>Assign To</label>\n            <select [(ngModel)]=\"assginedTo\" #category=\"ngModel\" name=\"assginedTo\" class=\"form-control\" id=\"Assgin\"\n              required>\n              <option *ngFor=\"let name of users\" [value]=\"name.userId\">{{name.firstName}} {{name.lastName}}</option>\n            </select>\n          </div>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createIssueForm.form.valid\">Post the issue</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/issue/issue-create/issue-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/issue/issue-create/issue-create.component.ts ***!
  \**************************************************************/
/*! exports provided: IssueCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueCreateComponent", function() { return IssueCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IssueCreateComponent = /** @class */ (function () {
    function IssueCreateComponent(http, toastr, router) {
        var _this = this;
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.possibleStatus = ['Backlog', 'In-progress', 'In-test', 'Done'];
        this.users = [];
        this.createIssue = function () {
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.userId === _this.assginedTo) {
                    _this.assignedToName = user.firstName + " " + user.lastName;
                }
            }
            _this.issue = {
                status: _this.issueStatus,
                title: _this.issueTitle,
                description: _this.issueDescription,
                assignedToName: _this.assignedToName,
                assignedToId: _this.assginedTo,
                by: ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userName'),
                byId: ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId')
            };
            _this.http.createIssue(_this.issue).subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.toastr.success('New Issue Created');
                    console.log(response);
                    setTimeout(function () {
                        _this.router.navigate(['/dashboard']);
                    }, 2000);
                }
            });
        };
    }
    IssueCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issueStatus = this.possibleStatus[0];
        this.http.allUsers().subscribe(function (apiResponse) {
            if (apiResponse['status'] == 200) {
                _this.users = apiResponse['data'];
                console.log(_this.users);
            }
            else {
                _this.toastr.warning('No user Found');
            }
        }, function (error) {
            console.log(error);
        });
    };
    IssueCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-create',
            template: __webpack_require__(/*! ./issue-create.component.html */ "./src/app/issue/issue-create/issue-create.component.html"),
            styles: [__webpack_require__(/*! ./issue-create.component.css */ "./src/app/issue/issue-create/issue-create.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_1__["HttpServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], IssueCreateComponent);
    return IssueCreateComponent;
}());



/***/ }),

/***/ "./src/app/issue/issue-edit/issue-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/issue/issue-edit/issue-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }"

/***/ }),

/***/ "./src/app/issue/issue-edit/issue-edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/issue/issue-edit/issue-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">DashBoard</a>\n  </nav>\n  <div class=\"container\">\n    <div class=\"row p-5\" style=\"text-align:left\">\n      <div class=\"col-md-12\">\n        <form #createIssueForm=\"ngForm\" (ngSubmit)=\"createIssue()\">\n          <div class=\"form-group\">\n            <label>Issue Title</label>\n            <input type=\"text\" name=\"issueTitle\" [(ngModel)]=\"issueTitle\" #title=\"ngModel\" class=\"form-control\"\n              placeholder=\"Enter issue Title\" required>\n          </div>\n          <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n            Issue Title is required\n          </div>\n          <div class=\"form-group\">\n            <label>Description</label>\n              <app-ngx-editor [placeholder]=\"'Enter Description here...'\" [spellcheck]=\"true\" name=\"issueDescription\" [(ngModel)]=\"issueDescription\" style=\"height:20vh\" required></app-ngx-editor>\n          </div>\n          <div class=\"form-group\">\n            <label>Status</label>\n            <select [(ngModel)]=\"issueStatus\" #category=\"ngModel\" name=\"issueStatus\" class=\"form-control\" id=\"category\"\n              required>\n              <option *ngFor=\"let category of possibleStatus\" [value]=\"category\">{{category}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n              <label>Assign To</label>\n              <select [(ngModel)]=\"assginedTo\" #category=\"ngModel\" name=\"assginedTo\" class=\"form-control\" id=\"Assgin\"\n                required>\n                <option *ngFor=\"let name of users\" [value]=\"name.userId\">{{name.firstName}} {{name.lastName}}</option>\n              </select>\n            </div>\n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createIssueForm.form.valid\">Post the issue</button>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/issue/issue-edit/issue-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/issue/issue-edit/issue-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: IssueEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueEditComponent", function() { return IssueEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IssueEditComponent = /** @class */ (function () {
    function IssueEditComponent(http, toastr, router, _route) {
        var _this = this;
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this._route = _route;
        this.possibleStatus = ['Backlog', 'In-progress', 'In-test', 'Done'];
        this.users = [];
        this.createIssue = function () {
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.userId === _this.assginedTo) {
                    _this.assignedToName = user.firstName + " " + user.lastName;
                }
            }
            _this.issue = {
                issueId: _this.issueId,
                status: _this.issueStatus,
                title: _this.issueTitle,
                description: _this.issueDescription,
                assignedToName: _this.assignedToName,
                assignedToId: _this.assginedTo
            };
            _this.http.editIssue(_this.issue).subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.toastr.success(response['message']);
                    setTimeout(function () {
                        _this.router.navigate(['/dashboard']);
                    }, 2000);
                }
            });
        };
    }
    IssueEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issueId = this._route.snapshot.paramMap.get('issueId');
        this.http.getIssue(this.issueId).subscribe(function (response) {
            if (response['status'] == 200) {
                _this.issue = response['data'];
                _this.issueTitle = response['data']['title'];
                _this.issueDescription = response['data']['description'];
                _this.assginedTo = response['data']['assignedToId'];
                _this.assignedToName = response['data']['assignedToName'];
                _this.issueStatus = response['data']['status'];
            }
            else {
                _this.toastr.error("Issue not found");
            }
        }, function (error) {
            console.log(error);
        });
        this.http.allUsers().subscribe(function (apiResponse) {
            if (apiResponse['status'] == 200) {
                _this.users = apiResponse['data'];
            }
            else {
                _this.toastr.warning('No user Found');
            }
        }, function (error) {
            console.log(error);
        });
    };
    IssueEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-edit',
            template: __webpack_require__(/*! ./issue-edit.component.html */ "./src/app/issue/issue-edit/issue-edit.component.html"),
            styles: [__webpack_require__(/*! ./issue-edit.component.css */ "./src/app/issue/issue-edit/issue-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], IssueEditComponent);
    return IssueEditComponent;
}());



/***/ }),

/***/ "./src/app/issue/issue-view/issue-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/issue/issue-view/issue-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/issue/issue-view/issue-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/issue/issue-view/issue-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n</nav>\n<div class=\"container\">\n  <div class=\"row\" *ngIf=\"data\">\n    <ul class=\"list-group p-5\" style=\"width:100%;\">\n      <li class=\"list-group-item list-group-item-dark\">\n        <span style=\"font-size:1.3em\" class=\"letterClass\">{{data.title}}</span>\n        <button type=\"button\" [ngClass]=\"{'btn btn-danger':data.status == 'Backlog','btn btn-warning':data.status == 'In-progress','btn btn-info':data.status == 'In-test','btn btn-success':data.status == 'Done'}\"\n          style=\"float:right;font-size:small\">{{data.status}}</button>\n      </li>\n      <li class=\"list-group-item list-group-item-light\" [innerHtml]=\"data.description\"></li>\n      <li class=\"list-group-item list-group-item-light\"><b>Reported By:</b> {{data.by}}</li>\n      <li class=\"list-group-item list-group-item-light\"><b>Assigned By:</b> {{data.assignedToName}}</li>\n      <li class=\"list-group-item list-group-item-light\">\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"float:right\" [routerLink]=\"['/edit/'+data.issueId]\">edit</button>\n\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"float:right;margin-right: 2%\" (click)=\"watchListToggler()\">\n          <span *ngIf=\"!isIn\">\n            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n            Watch\n          </span>\n          <span *ngIf=\"isIn\">\n            <i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i>\n            Un Watch\n          </span>\n        </button>\n        <span><b>Created On:</b> \"{{data.createdOn | date:\"short\"}}\"</span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <ul class=\"list-group\" style=\"width:100%;\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Comment here</span>\n          </div>\n          <textarea class=\"form-control\" aria-label=\"With textarea\" [(ngModel)]=\"comment\" placeholder=\"Enter Comment here....\"></textarea>\n          <button class=\"btn btn-secoundry\" style=\"float:Right\" (click)=\"makeComment()\">comment</button>\n        </div>\n        <span *ngIf=\"commentData\">\n          <span *ngFor=\"let comments of commentData\">\n            <li class=\"list-group-item list-group-item-light\"><b>{{comments.by}}</b><br>\n              {{comments.description}}\n              <br>\n              <span style=\"font-size:smaller\">{{comments.createdOn | date:\"short\"}}</span>\n            </li>\n          </span>\n        </span>\n        <span *ngIf=\"!commentData\">\n          <li class=\"list-group-item list-group-item-light\">Be the first one to comment on this issue</li>\n        </span>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/issue/issue-view/issue-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/issue/issue-view/issue-view.component.ts ***!
  \**********************************************************/
/*! exports provided: IssueViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueViewComponent", function() { return IssueViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IssueViewComponent = /** @class */ (function () {
    function IssueViewComponent(router, _route, http, toastr) {
        var _this = this;
        this.router = router;
        this._route = _route;
        this.http = http;
        this.toastr = toastr;
        this.isIn = false;
        this.getComment = function () {
            _this.http.getComments(_this.issueId).subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.commentData = response['data'];
                }
            }, function (error) {
                _this.toastr.error("error while retrieving comments");
            });
        };
        this.watchListUpdate = function () {
            _this.http.getWatcherList().subscribe(function (response) {
                if (response['status'] == 200) {
                    console.log(response);
                    for (var _i = 0, _a = response['data'][0]['issueIdArray']; _i < _a.length; _i++) {
                        var x = _a[_i];
                        (x == _this.issueId) ? _this.isIn = true : "";
                    }
                    console.log(_this.isIn);
                }
            });
        };
        this.makeComment = function () {
            _this.makeCommentData = {
                issueId: _this.issueId,
                description: _this.comment
            };
            _this.http.makeComment(_this.makeCommentData).subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.toastr.success("Comment created");
                    _this.getComment();
                    _this.comment = "";
                }
            }, function (err) {
                console.log(err);
            });
        };
        this.addToWatcherList = function () {
            _this.http.addToWatcherList(_this.issueId).subscribe(function (response) {
                if (response["status"] == 200) {
                    _this.toastr.success("Issue Added To Watcher List");
                    _this.isIn = true;
                    _this.watchListUpdate();
                }
            }, function (error) {
                console.log(error);
            });
        };
        this.removeFromWatcherList = function () {
            _this.http.removeWatcher(_this.issueId).subscribe(function (response) {
                if (response['status'] == 200) {
                    _this.toastr.success("Issue Removed from Watcher List");
                    _this.isIn = false;
                    _this.watchListUpdate();
                }
            }, function (error) {
                console.log(error);
            });
        };
        this.watchListToggler = function () {
            if (_this.isIn) {
                _this.removeFromWatcherList();
            }
            else {
                _this.addToWatcherList();
            }
        };
    }
    IssueViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issueId = this._route.snapshot.paramMap.get('issueId');
        this.http.getIssue(this.issueId).subscribe(function (response) {
            if (response['status'] == 200) {
                _this.data = response['data'];
                console.log(_this.data);
            }
            else {
                _this.toastr.error('No issue by this Id');
                console.log(response);
            }
        }, function (error) {
            console.log(error);
        });
        this.getComment();
        this.watchListUpdate();
    };
    IssueViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-view',
            template: __webpack_require__(/*! ./issue-view.component.html */ "./src/app/issue/issue-view/issue-view.component.html"),
            styles: [__webpack_require__(/*! ./issue-view.component.css */ "./src/app/issue/issue-view/issue-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], IssueViewComponent);
    return IssueViewComponent;
}());



/***/ }),

/***/ "./src/app/issue/issue.module.ts":
/*!***************************************!*\
  !*** ./src/app/issue/issue.module.ts ***!
  \***************************************/
/*! exports provided: IssueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueModule", function() { return IssueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/issue/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-component/shared-component.module */ "./src/app/shared-component/shared-component.module.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./issue-view/issue-view.component */ "./src/app/issue/issue-view/issue-view.component.ts");
/* harmony import */ var _issue_edit_issue_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./issue-edit/issue-edit.component */ "./src/app/issue/issue-edit/issue-edit.component.ts");
/* harmony import */ var _issue_create_issue_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./issue-create/issue-create.component */ "./src/app/issue/issue-create/issue-create.component.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 //FORM

// ROUTER IMPORTING

//TOASTR IMPORTING









var IssueModule = /** @class */ (function () {
    function IssueModule() {
    }
    IssueModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_12__["NgxEditorModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
                    { path: 'create', component: _issue_create_issue_create_component__WEBPACK_IMPORTED_MODULE_11__["IssueCreateComponent"] },
                    { path: 'edit/:issueId', component: _issue_edit_issue_edit_component__WEBPACK_IMPORTED_MODULE_10__["IssueEditComponent"] },
                    { path: 'view/:issueId', component: _issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_9__["IssueViewComponent"] }
                ]),
            ],
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _issue_view_issue_view_component__WEBPACK_IMPORTED_MODULE_9__["IssueViewComponent"], _issue_edit_issue_edit_component__WEBPACK_IMPORTED_MODULE_10__["IssueEditComponent"], _issue_create_issue_create_component__WEBPACK_IMPORTED_MODULE_11__["IssueCreateComponent"]]
        })
    ], IssueModule);
    return IssueModule;
}());



/***/ }),

/***/ "./src/app/shared-component/data-board/data-board.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared-component/data-board/data-board.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date{\n    float: right;\n}\n\n.status{\n    float: right;\n    text-align: center;\n}\n\n.cardTitle{\n    font-size: 1.3em;\n    text-align: center;\n}\n\n.cardContainer{\n    box-shadow: 0 0 5px 5px #888;\n    width: 15vw;\n    padding: 0;\n    border: 0;\n    margin: 3% 0 3% 0;\n}\n\n.cardContainer:hover{\n    width: 15.2vw;\n    background: rgb(197, 194, 194);\n}\n\n.columnContainer{\n    background: lightgray;\n    border-radius: 5%;\n    width: 17vw;\n    padding: 1vw;\n    margin: 0 0.5vw 0 0.5vw;\n    display: flex;\n    flex-direction: column;\n}\n\n.columnTitle{\n    font-size: 0.8em;\n    color: rgb(119, 117, 117);\n}"

/***/ }),

/***/ "./src/app/shared-component/data-board/data-board.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared-component/data-board/data-board.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\" columnContainer\">\n    <div class=\"columnTitle\">Backlogs</div>\n    <span *ngIf=\"backlogs\">\n      <span *ngFor=\"let x of backlogs\">\n        <div class=\"card cardContainer\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">\n              <span class=\"status\" style=\"color:red\">{{x.status}}</span>\n              <span class=\"cardTitle\">{{x.title}}</span>\n            </div>\n            <p class=\"card-text\" [innerHtml]=\"x.description\"></p>\n            <p>By:{{x.by}}<br><span>On:{{x.createdOn | date:\"shortDate\"}}</span></p>\n            <a [routerLink]=\"['/view/'+x.issueId]\" class=\"card-link\">view</a>\n          </div>\n        </div>\n      </span>\n    </span>\n  </div>\n\n  <div class=\" columnContainer\">\n    <div class=\"columnTitle\">In-progress</div>\n    <span *ngIf=\"inProgress\">\n      <span *ngFor=\"let x of inProgress\">\n        <div class=\"card cardContainer\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">\n              <span class=\"status\" style=\"color:yellow\">{{x.status}}</span>\n              <span class=\"cardTitle\">{{x.title}}</span>\n            </div>\n            <p class=\"card-text\" [innerHtml]=\"x.description\"></p>\n            <p>By:{{x.by}}<br><span>On:{{x.createdOn | date:\"shortDate\"}}</span></p>\n            <a [routerLink]=\"['/view/'+x.issueId]\" class=\"card-link\">view</a>\n          </div>\n        </div>\n      </span>\n    </span>\n  </div>\n\n  <div class=\" columnContainer\">\n    <div class=\"columnTitle\">In-test</div>\n    <span *ngIf=\"inTest\">\n      <span *ngFor=\"let x of inTest\">\n        <div class=\"card cardContainer\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">\n              <span class=\"status\" style=\"color:blue\">{{x.status}}</span>\n              <span class=\"cardTitle\">{{x.title}}</span>\n            </div>\n            <p class=\"card-text\" [innerHtml]=\"x.description\"></p>\n            <p>By:{{x.by}}<br><span>On:{{x.createdOn | date:\"shortDate\"}}</span></p>\n            <a [routerLink]=\"['/view/'+x.issueId]\" class=\"card-link\">view</a>\n          </div>\n        </div>\n      </span>\n    </span>\n  </div>\n\n  <div class=\" columnContainer\">\n    <div class=\"columnTitle\">Done</div>\n    <span *ngIf=\"done\">\n      <span *ngFor=\"let x of done\">\n        <div class=\"card cardContainer\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">\n              <span class=\"status\" style=\"color:green\">{{x.status}}</span>\n              <span class=\"cardTitle\">{{x.title}}</span>\n            </div>\n            <p class=\"card-text\" [innerHtml]=\"x.description\"></p>\n            <p>By:{{x.by}}<br><span>On:{{x.createdOn | date:\"shortDate\"}}</span></p>\n            <a [routerLink]=\"['/view/'+x.issueId]\" class=\"card-link\">view</a>\n          </div>\n        </div>\n      </span>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared-component/data-board/data-board.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared-component/data-board/data-board.component.ts ***!
  \*********************************************************************/
/*! exports provided: DataBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBoardComponent", function() { return DataBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataBoardComponent = /** @class */ (function () {
    function DataBoardComponent() {
    }
    DataBoardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataBoardComponent.prototype, "backlogs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataBoardComponent.prototype, "inProgress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataBoardComponent.prototype, "inTest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataBoardComponent.prototype, "done", void 0);
    DataBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-board',
            template: __webpack_require__(/*! ./data-board.component.html */ "./src/app/shared-component/data-board/data-board.component.html"),
            styles: [__webpack_require__(/*! ./data-board.component.css */ "./src/app/shared-component/data-board/data-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataBoardComponent);
    return DataBoardComponent;
}());



/***/ }),

/***/ "./src/app/shared-component/shared-component.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared-component/shared-component.module.ts ***!
  \*************************************************************/
/*! exports provided: SharedComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentModule", function() { return SharedComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_board_data_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-board/data-board.component */ "./src/app/shared-component/data-board/data-board.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _single_data_board_single_data_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-data-board/single-data-board.component */ "./src/app/shared-component/single-data-board/single-data-board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedComponentModule = /** @class */ (function () {
    function SharedComponentModule() {
    }
    SharedComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])
            ],
            declarations: [_data_board_data_board_component__WEBPACK_IMPORTED_MODULE_2__["DataBoardComponent"], _single_data_board_single_data_board_component__WEBPACK_IMPORTED_MODULE_4__["SingleDataBoardComponent"]],
            exports: [_data_board_data_board_component__WEBPACK_IMPORTED_MODULE_2__["DataBoardComponent"], _single_data_board_single_data_board_component__WEBPACK_IMPORTED_MODULE_4__["SingleDataBoardComponent"]]
        })
    ], SharedComponentModule);
    return SharedComponentModule;
}());



/***/ }),

/***/ "./src/app/shared-component/single-data-board/single-data-board.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/shared-component/single-data-board/single-data-board.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardContainer{\n    padding: 0;\n    margin: 3% 0 3% 0;\n}\n\n.cardContainer:hover{\n    background: rgb(197, 194, 194);\n}\n\n.classRed{\n    color:red;\n}\n\n.classYellow{\n    color:yellow;\n}\n\n.classBlue{\n    color:blue;\n}\n\n.classGreen{\n    color:green;\n}"

/***/ }),

/***/ "./src/app/shared-component/single-data-board/single-data-board.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-component/single-data-board/single-data-board.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"container\">\n    <span *ngFor=\"let x of data\">\n      <div class=\"card cardContainer\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <span class=\"status\" style=\"float:right\" [ngClass]=\"{'classRed':x.status=='Backlog','classYellow':x.status=='In-progress','classBlue':x.status=='In-test','classGreen':x.status=='Done'}\">{{x.status}}</span>\n            <span class=\"cardTitle\" style=\"font-size:1.3em\"><b>{{x.title}}</b></span>\n          </div>\n          <p class=\"card-text\" [innerHtml]=\"x.description\"></p>\n          <p class=\"card-text\">Assignd To: {{x.assignedToName}}</p>\n          <p class=\"card-text\">By: {{x.by}}</p>\n          <p><span class=\"date\">Created On:{{x.createdOn | date:\"short\"}}</span></p>\n          <a [routerLink]=\"['/view/'+x.issueId]\" class=\"card-link\">view</a>\n        </div>\n      </div>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared-component/single-data-board/single-data-board.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared-component/single-data-board/single-data-board.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SingleDataBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleDataBoardComponent", function() { return SingleDataBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleDataBoardComponent = /** @class */ (function () {
    function SingleDataBoardComponent() {
    }
    SingleDataBoardComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    SingleDataBoardComponent.prototype.ngOnChanges = function (changes) {
        var someData = changes.data;
        this.data = someData.currentValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleDataBoardComponent.prototype, "data", void 0);
    SingleDataBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'single-data-board',
            template: __webpack_require__(/*! ./single-data-board.component.html */ "./src/app/shared-component/single-data-board/single-data-board.component.html"),
            styles: [__webpack_require__(/*! ./single-data-board.component.css */ "./src/app/shared-component/single-data-board/single-data-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleDataBoardComponent);
    return SingleDataBoardComponent;
}());



/***/ }),

/***/ "./src/app/user-management/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-management/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.image{\n    margin: 0 0 0 0;\n    height: 100%;\n    width: 100%;\n}\n\n.imageButton{\n    height:80%;\n    width:80%;\n    margin: 0 !important;\n    border: 0 !important;\n    padding: 0 !important;\n    background: white;\n}\n"

/***/ }),

/***/ "./src/app/user-management/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-management/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"row p-0 m-0\">\n  <div class=\"col-sm\"></div>\n  <div class=\"col-sm p-5\">\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required\n      autofocus>\n    <br>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"\n      required>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-sm-9\">\n        <button class=\"btn btn-lg btn-dark btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n      </div>\n      <div class=\"col-sm-3\">\n        <button class=\"btn btn-lg btn-dark btn-block imageButton\" type=\"image\" data-target=\"#exampleModal\" data-toggle=\"modal\"\n          (click)=\"socialSignIn('google')\"><img src=\"assets/google.png\" class=\"image\" alt=\"Responsive image\"></button>\n\n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n          aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Social Login</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <input type=\"password\" id=\"inputPassword2\" class=\"form-control\" [(ngModel)]=\"password2\" placeholder=\"Password\"\n                  required>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"signUp()\">Sign-Up</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm\"></div>\n</div>"

/***/ }),

/***/ "./src/app/user-management/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-management/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, toastr, socialAuthService) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.socialAuthService = socialAuthService;
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning("Enter the email");
            }
            else if (!_this.password) {
                _this.toastr.warning("Enter the password");
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.http.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        //setting the cokies here 
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + " " + ((!apiResponse.data.userDetails.lastName || apiResponse.data.userDetails.lastName == 'undefined') ? "" : apiResponse.data.userDetails.lastName));
                        _this.toastr.success(apiResponse.message, 'Login Sucessful');
                        _this.router.navigate(['/dashboard']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    if (err.status === 500) {
                        _this.toastr.error('Invalid Password');
                    }
                });
            }
        };
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        };
        this.signUp = function () {
            if (_this.password2 && _this.socialData) {
                var data = {
                    firstName: _this.socialData.name,
                    mobile: 0,
                    email: _this.socialData.email,
                    password: _this.password2
                };
                _this.http.signupFunction(data).subscribe(function (apiResponse) {
                    if (apiResponse["status"] == 200) {
                        console.log(apiResponse);
                        _this.toastr.success('Signup sucessful');
                        setTimeout(function () {
                            _this.router.navigate(['/dashboard']);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse['message']);
                    }
                }, function (error) {
                    console.log(error);
                    _this.toastr.error('error occoured while signing in');
                });
            }
            else {
                _this.toastr.error("password or social data missing", "Social SignUp error");
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        this.socialAuthService.signIn(angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            _this.socialData = userData;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user-management/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user-management/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _http_service_service__WEBPACK_IMPORTED_MODULE_1__["HttpServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user-management/signup/signup.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-management/signup/signup.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-management/signup/signup.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-management/signup/signup.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"goToLogIn()\">log-in</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"row p-0 m-0\">\n    <div class=\"col-sm\"></div>\n    <div class=\"col-sm p-5\">\n      <h2 class=\"form-signin-heading\">Sign Up To Use Service's</h2>\n      <br>\n      <span>FirstName: </span>\n      <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n      <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n      <br>\n      <span>LastName: </span>\n      <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n      <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n      <br>\n      <span>Mobile: </span>\n      <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n      <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n      <br>\n      <span>Email: </span>\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n      <br>\n      <span>Password: </span>\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n      <br>\n      <button class=\"btn btn-lg btn-dark btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n    </div>\n    <div class=\"col-sm\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/user-management/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-management/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, http, toastr) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning('Enter first Name');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('Enter Last Name');
            }
            else if (!_this.mobile) {
                _this.toastr.warning('Enter Mobile No');
            }
            else if (!_this.email) {
                _this.toastr.warning('Enter Email');
            }
            else if (!_this.password) {
                _this.toastr.warning('Enter Password');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName || "",
                    mobile: _this.mobile || 0,
                    email: _this.email,
                    password: _this.password
                };
                _this.http.signupFunction(data).subscribe(function (apiResponse) {
                    if (apiResponse["status"] == 200) {
                        console.log(apiResponse);
                        //setting the cokies here 
                        _this.toastr.success("Sign up Successful");
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + " " + ((!apiResponse.data.userDetails.lastName || apiResponse.data.userDetails.lastName == 'undefined') ? "" : apiResponse.data.userDetails.lastName));
                        _this.toastr.success(apiResponse.message, 'Login Sucessful');
                        _this.router.navigate(['/dashboard']);
                    }
                    else {
                        _this.toastr.error(apiResponse['message']);
                    }
                }, function (error) {
                    console.log(error);
                    _this.toastr.error('error occoured while signing in');
                });
            }
        };
        this.goToLogIn = function () {
            _this.router.navigate(['/']);
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user-management/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user-management/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-management.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-management/user-management.module.ts ***!
  \***********************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user-management/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user-management/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//FORM

// ROUTER IMPORTING

//TOASTR IMPORTING


var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abhay/Documents/Work/projects/project1/projectFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map