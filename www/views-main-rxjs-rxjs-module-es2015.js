(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-main-rxjs-rxjs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/rxjs/rxjs.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/rxjs/rxjs.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Rxjs</h2>\r\n\r\n<div uk-grid>\r\n    <div class=\"uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-width-1-4@l\" *ngFor=\"let user of users\">\r\n        <pre>{{ user | json }}</pre>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/views/main/rxjs/rxjs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/main/rxjs/rxjs.component.ts ***!
  \***************************************************/
/*! exports provided: AppRxjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRxjsComponent", function() { return AppRxjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rxjs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxjs.service */ "./src/app/views/main/rxjs/rxjs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let AppRxjsComponent = class AppRxjsComponent {
    constructor(rxjsService) {
        this.rxjsService = rxjsService;
        this.rxjsService.getUsersCitiesCompanies().subscribe((users) => {
            this.users = users;
        });
    }
};
AppRxjsComponent.ctorParameters = () => [
    { type: _rxjs_service__WEBPACK_IMPORTED_MODULE_1__["RxjsService"] }
];
AppRxjsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: "app-rxjs", template: __importDefault(__webpack_require__(/*! raw-loader!./rxjs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/rxjs/rxjs.component.html")).default }),
    __metadata("design:paramtypes", [_rxjs_service__WEBPACK_IMPORTED_MODULE_1__["RxjsService"]])
], AppRxjsComponent);



/***/ }),

/***/ "./src/app/views/main/rxjs/rxjs.module.ts":
/*!************************************************!*\
  !*** ./src/app/views/main/rxjs/rxjs.module.ts ***!
  \************************************************/
/*! exports provided: AppRxjsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRxjsModule", function() { return AppRxjsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rxjs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rxjs.component */ "./src/app/views/main/rxjs/rxjs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




const routes = [
    { path: "", component: _rxjs_component__WEBPACK_IMPORTED_MODULE_3__["AppRxjsComponent"] }
];
let AppRxjsModule = class AppRxjsModule {
};
AppRxjsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_rxjs_component__WEBPACK_IMPORTED_MODULE_3__["AppRxjsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]
    })
], AppRxjsModule);



/***/ }),

/***/ "./src/app/views/main/rxjs/rxjs.service.ts":
/*!*************************************************!*\
  !*** ./src/app/views/main/rxjs/rxjs.service.ts ***!
  \*************************************************/
/*! exports provided: RxjsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxjsService", function() { return RxjsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let RxjsService = class RxjsService {
    getUsersCitiesCompanies() {
        return this.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((users) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(users)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((user) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this.getUsersCities(user.userId),
            this.getUsersCompanies(user.userId)
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => ({ user, cities: data[0], companies: data[1] })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => data.user.cities = data.cities), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => data.user.companies = data.companies), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.user))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])());
    }
    getUsers() {
        const list = [
            { userId: 1, name: "Name 1" },
            { userId: 2, name: "Name 2" }
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(list);
    }
    getUsersCities(userId) {
        let list = [
            { userId: 1, name: "City 1" },
            { userId: 2, name: "City 2" }
        ];
        list = list.filter((user) => user.userId === userId);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(list);
    }
    getUsersCompanies(userId) {
        let list = [
            { userId: 1, name: "Company 1" },
            { userId: 2, name: "Company 2" }
        ];
        list = list.filter((user) => user.userId === userId);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(list);
    }
};
RxjsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" })
], RxjsService);



/***/ })

}]);
//# sourceMappingURL=views-main-rxjs-rxjs-module-es2015.js.map