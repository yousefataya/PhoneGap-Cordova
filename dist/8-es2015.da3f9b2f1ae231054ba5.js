(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/app/views/main/rxjs/rxjs.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/views/main/rxjs/rxjs.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_AppRxjsComponent, View_AppRxjsComponent_0, View_AppRxjsComponent_Host_0, AppRxjsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppRxjsComponent", function() { return RenderType_AppRxjsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppRxjsComponent_0", function() { return View_AppRxjsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppRxjsComponent_Host_0", function() { return View_AppRxjsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRxjsComponentNgFactory", function() { return AppRxjsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _rxjs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rxjs.component */ "./src/app/views/main/rxjs/rxjs.component.ts");
/* harmony import */ var _rxjs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rxjs.service */ "./src/app/views/main/rxjs/rxjs.service.ts");




var styles_AppRxjsComponent = [];
var RenderType_AppRxjsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AppRxjsComponent, data: {} });

function View_AppRxjsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-width-1-4@l"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], [])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).transform(_v.context.$implicit)); _ck(_v, 2, 0, currVal_0); }); }
function View_AppRxjsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Rxjs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "div", [["uk-grid", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AppRxjsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.users; _ck(_v, 4, 0, currVal_0); }, null); }
function View_AppRxjsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-rxjs", [], null, null, null, View_AppRxjsComponent_0, RenderType_AppRxjsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _rxjs_component__WEBPACK_IMPORTED_MODULE_2__["AppRxjsComponent"], [_rxjs_service__WEBPACK_IMPORTED_MODULE_3__["RxjsService"]], null, null)], null, null); }
var AppRxjsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-rxjs", _rxjs_component__WEBPACK_IMPORTED_MODULE_2__["AppRxjsComponent"], View_AppRxjsComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _rxjs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxjs.service */ "./src/app/views/main/rxjs/rxjs.service.ts");

class AppRxjsComponent {
    constructor(rxjsService) {
        this.rxjsService = rxjsService;
        this.rxjsService.getUsersCitiesCompanies().subscribe((users) => {
            this.users = users;
        });
    }
}


/***/ }),

/***/ "./src/app/views/main/rxjs/rxjs.module.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/views/main/rxjs/rxjs.module.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: AppRxjsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRxjsModuleNgFactory", function() { return AppRxjsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rxjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxjs.module */ "./src/app/views/main/rxjs/rxjs.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _rxjs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rxjs.component.ngfactory */ "./src/app/views/main/rxjs/rxjs.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rxjs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rxjs.component */ "./src/app/views/main/rxjs/rxjs.component.ts");







var AppRxjsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_rxjs_module__WEBPACK_IMPORTED_MODULE_1__["AppRxjsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _rxjs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppRxjsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _rxjs_module__WEBPACK_IMPORTED_MODULE_1__["AppRxjsModule"], _rxjs_module__WEBPACK_IMPORTED_MODULE_1__["AppRxjsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], function () { return [[{ path: "", component: _rxjs_component__WEBPACK_IMPORTED_MODULE_6__["AppRxjsComponent"] }]]; }, [])]); });



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rxjs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxjs.component */ "./src/app/views/main/rxjs/rxjs.component.ts");


const routes = [
    { path: "", component: _rxjs_component__WEBPACK_IMPORTED_MODULE_1__["AppRxjsComponent"] }
];
class AppRxjsModule {
}


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



class RxjsService {
    getUsersCitiesCompanies() {
        return this.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((users) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(users)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((user) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])([
            this.getUsersCities(user.userId),
            this.getUsersCompanies(user.userId)
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => ({ user, cities: data[0], companies: data[1] })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => data.user.cities = data.cities), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => data.user.companies = data.companies), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => data.user))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["toArray"])());
    }
    getUsers() {
        const list = [
            { userId: 1, name: "Name 1" },
            { userId: 2, name: "Name 2" }
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(list);
    }
    getUsersCities(userId) {
        let list = [
            { userId: 1, name: "City 1" },
            { userId: 2, name: "City 2" }
        ];
        list = list.filter((user) => user.userId === userId);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(list);
    }
    getUsersCompanies(userId) {
        let list = [
            { userId: 1, name: "Company 1" },
            { userId: 2, name: "Company 2" }
        ];
        list = list.filter((user) => user.userId === userId);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(list);
    }
}
RxjsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function RxjsService_Factory() { return new RxjsService(); }, token: RxjsService, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=8-es2015.da3f9b2f1ae231054ba5.js.map