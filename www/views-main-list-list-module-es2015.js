(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-main-list-list-module"],{

/***/ "./node_modules/ngx-cacheable/cache-buster.decorator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-cacheable/cache-buster.decorator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
function CacheBuster(cacheBusterConfig) {
    return function (_target, _propertyKey, propertyDescriptor) {
        var oldMethod = propertyDescriptor.value;
        if (propertyDescriptor && propertyDescriptor.value) {
            /* use function instead of an arrow function to keep context of invocation */
            propertyDescriptor.value = function () {
                var parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    parameters[_i] = arguments[_i];
                }
                return oldMethod.call.apply(oldMethod, [this].concat(parameters)).pipe(operators_1.tap(function () {
                    if (cacheBusterConfig.cacheBusterNotifier) {
                        cacheBusterConfig.cacheBusterNotifier.next();
                    }
                }));
            };
        }
        ;
        return propertyDescriptor;
    };
}
exports.CacheBuster = CacheBuster;
;
//# sourceMappingURL=cache-buster.decorator.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/cacheable.decorator.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-cacheable/cacheable.decorator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ngx-cacheable/common/index.js");
exports.globalCacheBusterNotifier = new rxjs_1.Subject();
function Cacheable(cacheConfig) {
    if (cacheConfig === void 0) { cacheConfig = {}; }
    return function (_target, _propertyKey, propertyDescriptor) {
        var cacheKey = cacheConfig.cacheKey || _target.constructor.name + '#' + _propertyKey;
        var oldMethod = propertyDescriptor.value;
        if (propertyDescriptor && propertyDescriptor.value) {
            var storageStrategy_1 = !cacheConfig.storageStrategy
                ? new common_1.GlobalCacheConfig.storageStrategy()
                : new cacheConfig.storageStrategy();
            var pendingCachePairs_1 = [];
            /**
             * subscribe to the globalCacheBuster
             * if a custom cacheBusterObserver is passed, subscribe to it as well
             * subscribe to the cacheBusterObserver and upon emission, clear all caches
             */
            rxjs_1.merge(exports.globalCacheBusterNotifier.asObservable(), cacheConfig.cacheBusterObserver
                ? cacheConfig.cacheBusterObserver
                : rxjs_1.empty()).subscribe(function (_) {
                storageStrategy_1.removeAll(cacheKey);
                pendingCachePairs_1.length = 0;
            });
            cacheConfig.cacheResolver = cacheConfig.cacheResolver
                ? cacheConfig.cacheResolver
                : common_1.DEFAULT_CACHE_RESOLVER;
            /* use function instead of an arrow function to keep context of invocation */
            propertyDescriptor.value = function () {
                var _parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _parameters[_i] = arguments[_i];
                }
                var cachePairs = storageStrategy_1.getAll(cacheKey);
                var parameters = _parameters.map(function (param) { return param !== undefined ? JSON.parse(JSON.stringify(param)) : param; });
                var _foundCachePair = cachePairs.find(function (cp) {
                    return cacheConfig.cacheResolver(cp.parameters, parameters);
                });
                var _foundPendingCachePair = pendingCachePairs_1.find(function (cp) {
                    return cacheConfig.cacheResolver(cp.parameters, parameters);
                });
                /**
                 * check if maxAge is passed and cache has actually expired
                 */
                if (cacheConfig.maxAge && _foundCachePair && _foundCachePair.created) {
                    if (new Date().getTime() - new Date(_foundCachePair.created).getTime() >
                        cacheConfig.maxAge) {
                        /**
                         * cache duration has expired - remove it from the cachePairs array
                         */
                        storageStrategy_1.removeAtIndex(cachePairs.indexOf(_foundCachePair), cacheKey);
                        _foundCachePair = null;
                    }
                    else if (cacheConfig.slidingExpiration) {
                        /**
                         * renew cache duration
                         */
                        _foundCachePair.created = new Date();
                        storageStrategy_1.updateAtIndex(cachePairs.indexOf(_foundCachePair), _foundCachePair, cacheKey);
                    }
                }
                if (_foundCachePair) {
                    var cached$ = rxjs_1.of(_foundCachePair.response);
                    return cacheConfig.async ? cached$.pipe(operators_1.delay(0)) : cached$;
                }
                else if (_foundPendingCachePair) {
                    return _foundPendingCachePair.response;
                }
                else {
                    var response$ = oldMethod.call.apply(oldMethod, [this].concat(parameters)).pipe(operators_1.finalize(function () {
                        /**
                         * if there has been an observable cache pair for these parameters, when it completes or errors, remove it
                         */
                        var _pendingCachePairToRemove = pendingCachePairs_1.find(function (cp) {
                            return cacheConfig.cacheResolver(cp.parameters, parameters);
                        });
                        pendingCachePairs_1.splice(pendingCachePairs_1.indexOf(_pendingCachePairToRemove), 1);
                    }), operators_1.tap(function (response) {
                        /**
                         * if maxCacheCount has not been passed, just shift the cachePair to make room for the new one
                         * if maxCacheCount has been passed, respect that and only shift the cachePairs if the new cachePair will make them exceed the count
                         */
                        if (!cacheConfig.shouldCacheDecider ||
                            cacheConfig.shouldCacheDecider(response)) {
                            if (!cacheConfig.maxCacheCount ||
                                cacheConfig.maxCacheCount === 1 ||
                                (cacheConfig.maxCacheCount &&
                                    cacheConfig.maxCacheCount < cachePairs.length + 1)) {
                                storageStrategy_1.removeAtIndex(0, cacheKey);
                            }
                            storageStrategy_1.add({
                                parameters: parameters,
                                response: response,
                                created: cacheConfig.maxAge ? new Date() : null
                            }, cacheKey);
                        }
                    }), 
                    /**
                     * replay cached observable, so we don't enter finalize and tap for every cached observable subscription
                     */
                    operators_1.shareReplay());
                    /**
                     * cache the stream
                     */
                    pendingCachePairs_1.push({
                        parameters: parameters,
                        response: response$,
                        created: new Date()
                    });
                    return response$;
                }
            };
        }
        return propertyDescriptor;
    };
}
exports.Cacheable = Cacheable;
;
//# sourceMappingURL=cacheable.decorator.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/common/IStorageStrategy.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-cacheable/common/IStorageStrategy.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IStorageStrategy = /** @class */ (function () {
    function IStorageStrategy() {
    }
    return IStorageStrategy;
}());
exports.IStorageStrategy = IStorageStrategy;
//# sourceMappingURL=IStorageStrategy.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/common/InMemoryStorageStrategy.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-cacheable/common/InMemoryStorageStrategy.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IStorageStrategy_1 = __webpack_require__(/*! ./IStorageStrategy */ "./node_modules/ngx-cacheable/common/IStorageStrategy.js");
var InMemoryStorageStrategy = /** @class */ (function (_super) {
    __extends(InMemoryStorageStrategy, _super);
    function InMemoryStorageStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cachePairs = [];
        return _this;
    }
    InMemoryStorageStrategy.prototype.add = function (cachePair) {
        this.cachePairs.push(cachePair);
    };
    ;
    InMemoryStorageStrategy.prototype.updateAtIndex = function (index, entity) {
        var updatee = this.cachePairs[index];
        Object.assign(updatee, entity);
    };
    InMemoryStorageStrategy.prototype.getAll = function () {
        return this.cachePairs;
    };
    ;
    InMemoryStorageStrategy.prototype.removeAtIndex = function (index) {
        this.cachePairs.splice(index, 1);
    };
    InMemoryStorageStrategy.prototype.removeAll = function () {
        this.cachePairs.length = 0;
    };
    return InMemoryStorageStrategy;
}(IStorageStrategy_1.IStorageStrategy));
exports.InMemoryStorageStrategy = InMemoryStorageStrategy;
//# sourceMappingURL=InMemoryStorageStrategy.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/common/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ngx-cacheable/common/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IStorageStrategy_1 = __webpack_require__(/*! ./IStorageStrategy */ "./node_modules/ngx-cacheable/common/IStorageStrategy.js");
exports.IStorageStrategy = IStorageStrategy_1.IStorageStrategy;
var InMemoryStorageStrategy_1 = __webpack_require__(/*! ./InMemoryStorageStrategy */ "./node_modules/ngx-cacheable/common/InMemoryStorageStrategy.js");
exports.DEFAULT_CACHE_RESOLVER = function (oldParams, newParams) {
    return JSON.stringify(oldParams) === JSON.stringify(newParams);
};
exports.GlobalCacheConfig = {
    storageStrategy: InMemoryStorageStrategy_1.InMemoryStorageStrategy,
    globalCacheKey: 'CACHE_STORAGE',
    promiseImplementation: Promise
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ngx-cacheable/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./cache-buster.decorator */ "./node_modules/ngx-cacheable/cache-buster.decorator.js"));
__export(__webpack_require__(/*! ./cacheable.decorator */ "./node_modules/ngx-cacheable/cacheable.decorator.js"));
__export(__webpack_require__(/*! ./promise.cache-buster.decorator */ "./node_modules/ngx-cacheable/promise.cache-buster.decorator.js"));
__export(__webpack_require__(/*! ./promise.cacheable.decorator */ "./node_modules/ngx-cacheable/promise.cacheable.decorator.js"));
__export(__webpack_require__(/*! ./common */ "./node_modules/ngx-cacheable/common/index.js"));
__export(__webpack_require__(/*! ./common/InMemoryStorageStrategy */ "./node_modules/ngx-cacheable/common/InMemoryStorageStrategy.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/promise.cache-buster.decorator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-cacheable/promise.cache-buster.decorator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function PCacheBuster(cacheBusterConfig) {
    return function (_target, _propertyKey, propertyDescriptor) {
        var oldMethod = propertyDescriptor.value;
        if (propertyDescriptor && propertyDescriptor.value) {
            /* use function instead of an arrow function to keep context of invocation */
            propertyDescriptor.value = function () {
                var parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    parameters[_i] = arguments[_i];
                }
                return oldMethod.call.apply(oldMethod, [this].concat(parameters)).then(function (response) {
                    if (cacheBusterConfig.cacheBusterNotifier) {
                        cacheBusterConfig.cacheBusterNotifier.next();
                    }
                    return response;
                });
            };
        }
        ;
        return propertyDescriptor;
    };
}
exports.PCacheBuster = PCacheBuster;
;
//# sourceMappingURL=promise.cache-buster.decorator.js.map

/***/ }),

/***/ "./node_modules/ngx-cacheable/promise.cacheable.decorator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-cacheable/promise.cacheable.decorator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ngx-cacheable/common/index.js");
exports.promiseGlobalCacheBusterNotifier = new rxjs_1.Subject();
var getResponse = function (oldMethod, cacheKey, cacheConfig, context, cachePairs, _parameters, pendingCachePairs, storageStrategy, promiseImplementation) {
    var parameters = _parameters.map(function (param) { return param !== undefined ? JSON.parse(JSON.stringify(param)) : param; });
    var _foundCachePair = cachePairs.find(function (cp) {
        return cacheConfig.cacheResolver(cp.parameters, parameters);
    });
    var _foundPendingCachePair = pendingCachePairs.find(function (cp) {
        return cacheConfig.cacheResolver(cp.parameters, parameters);
    });
    /**
     * check if maxAge is passed and cache has actually expired
     */
    if (cacheConfig.maxAge && _foundCachePair && _foundCachePair.created) {
        if (new Date().getTime() - new Date(_foundCachePair.created).getTime() >
            cacheConfig.maxAge) {
            /**
             * cache duration has expired - remove it from the cachePairs array
             */
            storageStrategy.removeAtIndex(cachePairs.indexOf(_foundCachePair), cacheKey);
            _foundCachePair = null;
        }
        else if (cacheConfig.slidingExpiration) {
            /**
             * renew cache duration
             */
            _foundCachePair.created = new Date();
            storageStrategy.updateAtIndex(cachePairs.indexOf(_foundCachePair), _foundCachePair, cacheKey);
        }
    }
    if (_foundCachePair) {
        return promiseImplementation.resolve(_foundCachePair.response);
    }
    else if (_foundPendingCachePair) {
        return _foundPendingCachePair.response;
    }
    else {
        var response$ = oldMethod.call.apply(oldMethod, [context].concat(parameters))
            .then(function (response) {
            removeCachePair(pendingCachePairs, parameters, cacheConfig);
            /**
             * if no maxCacheCount has been passed
             * if maxCacheCount has not been passed, just shift the cachePair to make room for the new one
             * if maxCacheCount has been passed, respect that and only shift the cachePairs if the new cachePair will make them exceed the count
             */
            if (!cacheConfig.shouldCacheDecider ||
                cacheConfig.shouldCacheDecider(response)) {
                if (!cacheConfig.maxCacheCount ||
                    cacheConfig.maxCacheCount === 1 ||
                    (cacheConfig.maxCacheCount &&
                        cacheConfig.maxCacheCount < cachePairs.length + 1)) {
                    storageStrategy.removeAtIndex(0, cacheKey);
                }
                storageStrategy.add({
                    parameters: parameters,
                    response: response,
                    created: cacheConfig.maxAge ? new Date() : null
                }, cacheKey);
            }
            return response;
        })
            .catch(function (error) {
            removeCachePair(pendingCachePairs, parameters, cacheConfig);
            return promiseImplementation.reject(error);
        });
        /**
         * cache the stream
         */
        pendingCachePairs.push({
            parameters: parameters,
            response: response$,
            created: new Date()
        });
        return response$;
    }
};
var removeCachePair = function (cachePairs, parameters, cacheConfig) {
    /**
     * if there has been an pending cache pair for these parameters, when it completes or errors, remove it
     */
    var _pendingCachePairToRemove = cachePairs.find(function (cp) {
        return cacheConfig.cacheResolver(cp.parameters, parameters);
    });
    cachePairs.splice(cachePairs.indexOf(_pendingCachePairToRemove), 1);
};
function PCacheable(cacheConfig) {
    if (cacheConfig === void 0) { cacheConfig = {}; }
    return function (_target, _propertyKey, propertyDescriptor) {
        var cacheKey = cacheConfig.cacheKey || _target.constructor.name + '#' + _propertyKey;
        var oldMethod = propertyDescriptor.value;
        if (propertyDescriptor && propertyDescriptor.value) {
            var storageStrategy_1 = !cacheConfig.storageStrategy
                ? new common_1.GlobalCacheConfig.storageStrategy()
                : new cacheConfig.storageStrategy();
            var pendingCachePairs_1 = [];
            /**
             * subscribe to the promiseGlobalCacheBusterNotifier
             * if a custom cacheBusterObserver is passed, subscribe to it as well
             * subscribe to the cacheBusterObserver and upon emission, clear all caches
             */
            rxjs_1.merge(exports.promiseGlobalCacheBusterNotifier.asObservable(), cacheConfig.cacheBusterObserver
                ? cacheConfig.cacheBusterObserver
                : rxjs_1.empty()).subscribe(function (_) {
                storageStrategy_1.removeAll(cacheKey);
                pendingCachePairs_1.length = 0;
            });
            cacheConfig.cacheResolver = cacheConfig.cacheResolver
                ? cacheConfig.cacheResolver
                : common_1.DEFAULT_CACHE_RESOLVER;
            /* use function instead of an arrow function to keep context of invocation */
            propertyDescriptor.value = function () {
                var _this = this;
                var _parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _parameters[_i] = arguments[_i];
                }
                var promiseImplementation = typeof common_1.GlobalCacheConfig.promiseImplementation === 'function' && (common_1.GlobalCacheConfig.promiseImplementation !== Promise) ?
                    common_1.GlobalCacheConfig.promiseImplementation.call(this)
                    : common_1.GlobalCacheConfig.promiseImplementation;
                var cachePairs = storageStrategy_1.getAll(cacheKey);
                if (!(cachePairs instanceof promiseImplementation)) {
                    return getResponse(oldMethod, cacheKey, cacheConfig, this, cachePairs, _parameters, pendingCachePairs_1, storageStrategy_1, promiseImplementation);
                }
                else {
                    return cachePairs.then(function (cachePairs) { return getResponse(oldMethod, cacheKey, cacheConfig, _this, cachePairs, _parameters, pendingCachePairs_1, storageStrategy_1, promiseImplementation); });
                }
            };
        }
        return propertyDescriptor;
    };
}
exports.PCacheable = PCacheable;
;
//# sourceMappingURL=promise.cacheable.decorator.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/list/list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/list/list.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>List</h2>\r\n\r\n<table class=\"uk-table uk-table-responsive uk-table-divider uk-table-hover uk-table-small uk-table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th class=\"uk-text-nowrap uk-text-center@m\">Id</th>\r\n            <th class=\"uk-text-nowrap\">Name</th>\r\n            <th class=\"uk-text-nowrap\">Username</th>\r\n            <th class=\"uk-text-nowrap\">Email</th>\r\n            <th class=\"uk-text-nowrap\">Company</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of list\">\r\n            <td class=\"uk-text-nowrap uk-text-center@m\">{{ item?.id }}</td>\r\n            <td class=\"uk-text-nowrap\">{{ item?.name }}</td>\r\n            <td class=\"uk-text-nowrap\">{{ item?.username }}</td>\r\n            <td class=\"uk-text-nowrap\">{{ item?.email }}</td>\r\n            <td class=\"uk-text-nowrap\">{{ item?.company?.name }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./src/app/views/main/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/main/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: AppListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppListComponent", function() { return AppListComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cacheable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cacheable */ "./node_modules/ngx-cacheable/index.js");
/* harmony import */ var ngx_cacheable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_cacheable__WEBPACK_IMPORTED_MODULE_2__);
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



let AppListComponent = class AppListComponent {
    constructor(http) {
        this.http = http;
        this.get().subscribe((list) => this.list = list);
    }
    get() {
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
};
AppListComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
__decorate([
    Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_2__["Cacheable"])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppListComponent.prototype, "get", null);
AppListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: "app-list", template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/main/list/list.component.html")).default }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], AppListComponent);



/***/ }),

/***/ "./src/app/views/main/list/list.module.ts":
/*!************************************************!*\
  !*** ./src/app/views/main/list/list.module.ts ***!
  \************************************************/
/*! exports provided: AppListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppListModule", function() { return AppListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "./src/app/views/main/list/list.component.ts");
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
    { path: "", component: _list_component__WEBPACK_IMPORTED_MODULE_3__["AppListComponent"] }
];
let AppListModule = class AppListModule {
};
AppListModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_component__WEBPACK_IMPORTED_MODULE_3__["AppListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]
    })
], AppListModule);



/***/ })

}]);
//# sourceMappingURL=views-main-list-list-module-es2015.js.map