function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-main-rxjs-rxjs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/rxjs/rxjs.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/rxjs/rxjs.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsMainRxjsRxjsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Rxjs</h2>\r\n\r\n<div uk-grid>\r\n    <div class=\"uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-width-1-4@l\" *ngFor=\"let user of users\">\r\n        <pre>{{ user | json }}</pre>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/views/main/rxjs/rxjs.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/views/main/rxjs/rxjs.component.ts ***!
    \***************************************************/

  /*! exports provided: AppRxjsComponent */

  /***/
  function srcAppViewsMainRxjsRxjsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRxjsComponent", function () {
      return AppRxjsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rxjs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./rxjs.service */
    "./src/app/views/main/rxjs/rxjs.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppRxjsComponent = function AppRxjsComponent(rxjsService) {
      var _this = this;

      _classCallCheck(this, AppRxjsComponent);

      this.rxjsService = rxjsService;
      this.rxjsService.getUsersCitiesCompanies().subscribe(function (users) {
        _this.users = users;
      });
    };

    AppRxjsComponent.ctorParameters = function () {
      return [{
        type: _rxjs_service__WEBPACK_IMPORTED_MODULE_1__["RxjsService"]
      }];
    };

    AppRxjsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: "app-rxjs",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./rxjs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/rxjs/rxjs.component.html"))["default"]
    }), __metadata("design:paramtypes", [_rxjs_service__WEBPACK_IMPORTED_MODULE_1__["RxjsService"]])], AppRxjsComponent);
    /***/
  },

  /***/
  "./src/app/views/main/rxjs/rxjs.module.ts":
  /*!************************************************!*\
    !*** ./src/app/views/main/rxjs/rxjs.module.ts ***!
    \************************************************/

  /*! exports provided: AppRxjsModule */

  /***/
  function srcAppViewsMainRxjsRxjsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRxjsModule", function () {
      return AppRxjsModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _rxjs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rxjs.component */
    "./src/app/views/main/rxjs/rxjs.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: "",
      component: _rxjs_component__WEBPACK_IMPORTED_MODULE_3__["AppRxjsComponent"]
    }];

    var AppRxjsModule = function AppRxjsModule() {
      _classCallCheck(this, AppRxjsModule);
    };

    AppRxjsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_rxjs_component__WEBPACK_IMPORTED_MODULE_3__["AppRxjsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
    })], AppRxjsModule);
    /***/
  },

  /***/
  "./src/app/views/main/rxjs/rxjs.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/views/main/rxjs/rxjs.service.ts ***!
    \*************************************************/

  /*! exports provided: RxjsService */

  /***/
  function srcAppViewsMainRxjsRxjsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RxjsService", function () {
      return RxjsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RxjsService =
    /*#__PURE__*/
    function () {
      function RxjsService() {
        _classCallCheck(this, RxjsService);
      }

      _createClass(RxjsService, [{
        key: "getUsersCitiesCompanies",
        value: function getUsersCitiesCompanies() {
          var _this2 = this;

          return this.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (users) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(users);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([_this2.getUsersCities(user.userId), _this2.getUsersCompanies(user.userId)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return {
                user: user,
                cities: data[0],
                companies: data[1]
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
              return data.user.cities = data.cities;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
              return data.user.companies = data.companies;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return data.user;
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])());
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var list = [{
            userId: 1,
            name: "Name 1"
          }, {
            userId: 2,
            name: "Name 2"
          }];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(list);
        }
      }, {
        key: "getUsersCities",
        value: function getUsersCities(userId) {
          var list = [{
            userId: 1,
            name: "City 1"
          }, {
            userId: 2,
            name: "City 2"
          }];
          list = list.filter(function (user) {
            return user.userId === userId;
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(list);
        }
      }, {
        key: "getUsersCompanies",
        value: function getUsersCompanies(userId) {
          var list = [{
            userId: 1,
            name: "Company 1"
          }, {
            userId: 2,
            name: "Company 2"
          }];
          list = list.filter(function (user) {
            return user.userId === userId;
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(list);
        }
      }]);

      return RxjsService;
    }();

    RxjsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: "root"
    })], RxjsService);
    /***/
  }
}]);
//# sourceMappingURL=views-main-rxjs-rxjs-module-es5.js.map