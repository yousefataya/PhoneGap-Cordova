function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-main-files-files-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/file/file.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/file/file.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFileFileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"js-upload uk-padding-small uk-padding-remove-left\" uk-form-custom>\r\n    <input type=\"file\" multiple #input [disabled]=\"disabled\" [id]=\"formControlName\" [name]=\"formControlName\" [required]=\"required\" (change)=\"change(input.files)\">\r\n    <button class=\"uk-button uk-button-default\" type=\"button\" tabindex=\"-1\">Select</button>\r\n</div>\r\n\r\n<div>\r\n    <ul class=\"uk-list uk-list-bullet\">\r\n        <li *ngFor=\"let upload of uploads\" class=\"uk-text-warning\">{{ upload.id }}: {{ upload.progress }}%</li>\r\n        <li *ngFor=\"let file of value\" class=\"uk-text-success\">{{ file.name }}</li>\r\n    </ul>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/files/files.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/files/files.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsMainFilesFilesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Files</h2>\r\n\r\n<app-file name=\"files\" [(ngModel)]=\"files\"></app-file>\r\n\r\n<div class=\"uk-padding-remove\">\r\n    <h3>Files</h3>\r\n\r\n    <ul class=\"uk-list uk-list-bullet\">\r\n        <li *ngFor=\"let file of files\">{{ file | json }}</li>\r\n    </ul>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/components/file/file.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/file/file.component.ts ***!
    \***************************************************/

  /*! exports provided: AppFileComponent */

  /***/
  function srcAppComponentsFileFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFileComponent", function () {
      return AppFileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_file_file_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/file/file.model */
    "./src/app/models/file/file.model.ts");
    /* harmony import */


    var src_app_models_file_file_upload_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/file/file.upload.model */
    "./src/app/models/file/file.upload.model.ts");
    /* harmony import */


    var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/file.service */
    "./src/app/services/file.service.ts");
    /* harmony import */


    var _base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../base/base.component */
    "./src/app/components/base/base.component.ts");

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

    var AppFileComponent_1;

    var AppFileComponent = AppFileComponent_1 =
    /*#__PURE__*/
    function (_base_base_component_) {
      _inherits(AppFileComponent, _base_base_component_);

      function AppFileComponent(appFileService) {
        var _this;

        _classCallCheck(this, AppFileComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AppFileComponent).call(this));
        _this.appFileService = appFileService;
        _this.uploads = new Array();
        return _this;
      }

      _createClass(AppFileComponent, [{
        key: "change",
        value: function change(files) {
          var _this2 = this;

          var _loop = function _loop(index) {
            var file = files.item(index);
            var upload = new src_app_models_file_file_upload_model__WEBPACK_IMPORTED_MODULE_3__["FileUploadModel"](file.name, 0);

            _this2.uploads.push(upload);

            _this2.appFileService.upload(file).subscribe(function (result) {
              upload.progress = result.progress;

              if (result.id) {
                _this2.value.push(new src_app_models_file_file_model__WEBPACK_IMPORTED_MODULE_2__["FileModel"](result.id, file.name));

                _this2.uploads = _this2.uploads.filter(function (x) {
                  return x.progress < 100;
                });
              }
            });
          };

          for (var index = 0; index < files.length; index++) {
            _loop(index);
          }
        }
      }]);

      return AppFileComponent;
    }(_base_base_component__WEBPACK_IMPORTED_MODULE_5__["AppBaseComponent"]);

    AppFileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_4__["AppFileService"]
      }];
    };

    AppFileComponent = AppFileComponent_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: AppFileComponent_1,
        multi: true
      }],
      selector: "app-file",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./file.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/file/file.component.html"))["default"]
    }), __metadata("design:paramtypes", [src_app_services_file_service__WEBPACK_IMPORTED_MODULE_4__["AppFileService"]])], AppFileComponent);
    /***/
  },

  /***/
  "./src/app/components/file/file.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/file/file.module.ts ***!
    \************************************************/

  /*! exports provided: AppFileModule */

  /***/
  function srcAppComponentsFileFileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFileModule", function () {
      return AppFileModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./file.component */
    "./src/app/components/file/file.component.ts");

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

    var AppFileModule = function AppFileModule() {
      _classCallCheck(this, AppFileModule);
    };

    AppFileModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_file_component__WEBPACK_IMPORTED_MODULE_3__["AppFileComponent"]],
      exports: [_file_component__WEBPACK_IMPORTED_MODULE_3__["AppFileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
    })], AppFileModule);
    /***/
  },

  /***/
  "./src/app/models/file/file.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/file/file.model.ts ***!
    \*******************************************/

  /*! exports provided: FileModel */

  /***/
  function srcAppModelsFileFileModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileModel", function () {
      return FileModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FileModel = function FileModel(id, name) {
      _classCallCheck(this, FileModel);

      this.id = id;
      this.name = name;
    };
    /***/

  },

  /***/
  "./src/app/models/file/file.upload.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/models/file/file.upload.model.ts ***!
    \**************************************************/

  /*! exports provided: FileUploadModel */

  /***/
  function srcAppModelsFileFileUploadModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModel", function () {
      return FileUploadModel;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FileUploadModel = function FileUploadModel(id, progress) {
      _classCallCheck(this, FileUploadModel);

      this.id = id;
      this.progress = progress;
    };
    /***/

  },

  /***/
  "./src/app/services/file.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/file.service.ts ***!
    \******************************************/

  /*! exports provided: AppFileService */

  /***/
  function srcAppServicesFileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFileService", function () {
      return AppFileService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_file_file_upload_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/file/file.upload.model */
    "./src/app/models/file/file.upload.model.ts");

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

    var AppFileService =
    /*#__PURE__*/
    function () {
      function AppFileService(http) {
        _classCallCheck(this, AppFileService);

        this.http = http;
      }

      _createClass(AppFileService, [{
        key: "upload",
        value: function upload(file) {
          var _this3 = this;

          var formData = new FormData();
          formData.append(file.name, file);
          var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]("POST", "Files", formData, {
            reportProgress: true
          });
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observable) {
            _this3.http.request(request).subscribe(function (event) {
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response) {
                return observable.next(new _models_file_file_upload_model__WEBPACK_IMPORTED_MODULE_3__["FileUploadModel"](event.body[0].id, 100));
              }

              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress && event.total) {
                var progress = Math.round(100 * event.loaded / event.total);
                return observable.next(new _models_file_file_upload_model__WEBPACK_IMPORTED_MODULE_3__["FileUploadModel"]("", progress));
              }

              return observable.next(new _models_file_file_upload_model__WEBPACK_IMPORTED_MODULE_3__["FileUploadModel"]("", 0));
            });
          });
        }
      }]);

      return AppFileService;
    }();

    AppFileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }];
    };

    AppFileService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], AppFileService);
    /***/
  },

  /***/
  "./src/app/views/main/files/files.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/views/main/files/files.component.ts ***!
    \*****************************************************/

  /*! exports provided: AppFilesComponent */

  /***/
  function srcAppViewsMainFilesFilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFilesComponent", function () {
      return AppFilesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    var AppFilesComponent = function AppFilesComponent() {
      _classCallCheck(this, AppFilesComponent);

      this.files = new Array();
    };

    AppFilesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: "app-files",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./files.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/files/files.component.html"))["default"]
    })], AppFilesComponent);
    /***/
  },

  /***/
  "./src/app/views/main/files/files.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/views/main/files/files.module.ts ***!
    \**************************************************/

  /*! exports provided: AppFilesModule */

  /***/
  function srcAppViewsMainFilesFilesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFilesModule", function () {
      return AppFilesModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_components_file_file_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/file/file.module */
    "./src/app/components/file/file.module.ts");
    /* harmony import */


    var _files_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./files.component */
    "./src/app/views/main/files/files.component.ts");

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
      component: _files_component__WEBPACK_IMPORTED_MODULE_5__["AppFilesComponent"]
    }];

    var AppFilesModule = function AppFilesModule() {
      _classCallCheck(this, AppFilesModule);
    };

    AppFilesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_files_component__WEBPACK_IMPORTED_MODULE_5__["AppFilesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_components_file_file_module__WEBPACK_IMPORTED_MODULE_4__["AppFileModule"]]
    })], AppFilesModule);
    /***/
  }
}]);
//# sourceMappingURL=views-main-files-files-module-es5.js.map