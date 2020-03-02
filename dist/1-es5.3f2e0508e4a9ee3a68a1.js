function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
  /***/
  "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdropdownlist.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdropdownlist.js ***!
    \****************************************************************************/

  /*! exports provided: jqxDropDownListComponent, jqxDropDownListModule, ɵ0 */

  /***/
  function node_modulesJqwidgetsNgFesm2015JqwidgetsNgJqxdropdownlistJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jqxDropDownListComponent", function () {
      return jqxDropDownListComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jqxDropDownListModule", function () {
      return jqxDropDownListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../jqwidgets/jqxcore */
    "./node_modules/jqwidgets-ng/jqwidgets/jqxcore.js");
    /* harmony import */


    var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jqwidgets/jqxdata */
    "./node_modules/jqwidgets-ng/jqwidgets/jqxdata.js");
    /* harmony import */


    var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../jqwidgets/jqxbuttons */
    "./node_modules/jqwidgets-ng/jqwidgets/jqxbuttons.js");
    /* harmony import */


    var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../jqwidgets/jqxscrollbar */
    "./node_modules/jqwidgets-ng/jqwidgets/jqxscrollbar.js");
    /* harmony import */


    var _jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../jqwidgets/jqxlistbox */
    "./node_modules/jqwidgets-ng/jqwidgets/jqxlistbox.js");
    /* harmony import */


    var _jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _jqwidgets_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../jqwidgets/jqxdropdownlist */
    "./node_modules/jqwidgets-ng/jqwidgets/jqxdropdownlist.js");
    /* harmony import */


    var _jqwidgets_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); /// <reference path="../../jqwidgets.d.ts" />


    var noop = function noop() {};

    var ɵ0 = noop;
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
        return jqxDropDownListComponent;
      }),
      multi: true
    };

    var jqxDropDownListComponent =
    /*#__PURE__*/
    function () {
      function jqxDropDownListComponent(containerElement) {
        _classCallCheck(this, jqxDropDownListComponent);

        this.autoCreate = true;
        this.properties = ['autoOpen', 'autoDropDownHeight', 'animationType', 'checkboxes', 'closeDelay', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableSelection', 'enableBrowserBoundsDetection', 'enableHover', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'incrementalSearch', 'incrementalSearchDelay', 'itemHeight', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'renderer', 'selectionRenderer', 'searchMode', 'source', 'selectedIndex', 'theme', 'template', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop; // jqxDropDownListComponent events

        this.onBindingComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onCheckChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.elementRef = containerElement;
      }

      _createClass(jqxDropDownListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var children = JQXLite(this.elementRef.nativeElement.children).find('li');
          var html = '';
          var options = {};

          if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            var result = JQXLite.jqx.parseSourceTag(this.container);
            options['source'] = result.items;
          }

          if (this.autoCreate) {
            this.createComponent(options);
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.container) {
            if (this.content !== this.container.innerHTML) {
              this.content = this.container.innerHTML;
              var result = JQXLite.jqx.parseSourceTag(this.container);
              this.host.jqxDropDownList({
                source: result.items
              });
            }
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
              var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
              var areEqual = false;

              if (this[attrName] !== undefined) {
                if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                    areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownList(this.properties[i]));
                  }

                  if (areEqual) {
                    return false;
                  }

                  this.host.jqxDropDownList(this.properties[i], this[attrName]);
                  continue;
                }

                if (this[attrName] !== this.host.jqxDropDownList(this.properties[i])) {
                  this.host.jqxDropDownList(this.properties[i], this[attrName]);
                }
              }
            }
          }
        }
      }, {
        key: "arraysEqual",
        value: function arraysEqual(attrValue, hostValue) {
          if (attrValue && !hostValue || !attrValue && hostValue) {
            return false;
          }

          if (attrValue.length != hostValue.length) {
            return false;
          }

          for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "manageAttributes",
        value: function manageAttributes() {
          var options = {};

          for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);

            if (this[attrName] !== undefined) {
              options[this.properties[i]] = this[attrName];
            }
          }

          return options;
        }
      }, {
        key: "moveClasses",
        value: function moveClasses(parentEl, childEl) {
          var classes = parentEl.classList;

          if (classes.length > 0) {
            var _childEl$classList;

            (_childEl$classList = childEl.classList).add.apply(_childEl$classList, _toConsumableArray(classes));
          }

          parentEl.className = '';
        }
      }, {
        key: "moveStyles",
        value: function moveStyles(parentEl, childEl) {
          var style = parentEl.style.cssText;
          childEl.style.cssText = style;
          parentEl.style.cssText = '';
        }
      }, {
        key: "createComponent",
        value: function createComponent(options) {
          if (this.host) {
            return;
          }

          if (options) {
            JQXLite.extend(options, this.manageAttributes());
          } else {
            options = this.manageAttributes();
          }

          this.host = JQXLite(this.elementRef.nativeElement.firstChild);
          this.moveClasses(this.elementRef.nativeElement, this.host[0]);
          this.moveStyles(this.elementRef.nativeElement, this.host[0]);

          this.__wireEvents__();

          this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownList', options);
        }
      }, {
        key: "createWidget",
        value: function createWidget(options) {
          this.createComponent(options);
        }
      }, {
        key: "__updateRect__",
        value: function __updateRect__() {
          if (this.host) this.host.css({
            width: this.attrWidth,
            height: this.attrHeight
          });
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChangeCallback = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouchedCallback = fn;
        }
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          this.host.jqxDropDownList('setOptions', options);
        } // jqxDropDownListComponent properties

      }, {
        key: "autoOpen",
        value: function autoOpen(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('autoOpen', arg);
          } else {
            return this.host.jqxDropDownList('autoOpen');
          }
        }
      }, {
        key: "autoDropDownHeight",
        value: function autoDropDownHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('autoDropDownHeight', arg);
          } else {
            return this.host.jqxDropDownList('autoDropDownHeight');
          }
        }
      }, {
        key: "animationType",
        value: function animationType(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('animationType', arg);
          } else {
            return this.host.jqxDropDownList('animationType');
          }
        }
      }, {
        key: "checkboxes",
        value: function checkboxes(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('checkboxes', arg);
          } else {
            return this.host.jqxDropDownList('checkboxes');
          }
        }
      }, {
        key: "closeDelay",
        value: function closeDelay(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('closeDelay', arg);
          } else {
            return this.host.jqxDropDownList('closeDelay');
          }
        }
      }, {
        key: "disabled",
        value: function disabled(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('disabled', arg);
          } else {
            return this.host.jqxDropDownList('disabled');
          }
        }
      }, {
        key: "displayMember",
        value: function displayMember(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('displayMember', arg);
          } else {
            return this.host.jqxDropDownList('displayMember');
          }
        }
      }, {
        key: "dropDownHorizontalAlignment",
        value: function dropDownHorizontalAlignment(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownHorizontalAlignment', arg);
          } else {
            return this.host.jqxDropDownList('dropDownHorizontalAlignment');
          }
        }
      }, {
        key: "dropDownVerticalAlignment",
        value: function dropDownVerticalAlignment(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownVerticalAlignment', arg);
          } else {
            return this.host.jqxDropDownList('dropDownVerticalAlignment');
          }
        }
      }, {
        key: "dropDownHeight",
        value: function dropDownHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownHeight', arg);
          } else {
            return this.host.jqxDropDownList('dropDownHeight');
          }
        }
      }, {
        key: "dropDownWidth",
        value: function dropDownWidth(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownWidth', arg);
          } else {
            return this.host.jqxDropDownList('dropDownWidth');
          }
        }
      }, {
        key: "enableSelection",
        value: function enableSelection(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('enableSelection', arg);
          } else {
            return this.host.jqxDropDownList('enableSelection');
          }
        }
      }, {
        key: "enableBrowserBoundsDetection",
        value: function enableBrowserBoundsDetection(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('enableBrowserBoundsDetection', arg);
          } else {
            return this.host.jqxDropDownList('enableBrowserBoundsDetection');
          }
        }
      }, {
        key: "enableHover",
        value: function enableHover(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('enableHover', arg);
          } else {
            return this.host.jqxDropDownList('enableHover');
          }
        }
      }, {
        key: "filterable",
        value: function filterable(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('filterable', arg);
          } else {
            return this.host.jqxDropDownList('filterable');
          }
        }
      }, {
        key: "filterHeight",
        value: function filterHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('filterHeight', arg);
          } else {
            return this.host.jqxDropDownList('filterHeight');
          }
        }
      }, {
        key: "filterDelay",
        value: function filterDelay(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('filterDelay', arg);
          } else {
            return this.host.jqxDropDownList('filterDelay');
          }
        }
      }, {
        key: "filterPlaceHolder",
        value: function filterPlaceHolder(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('filterPlaceHolder', arg);
          } else {
            return this.host.jqxDropDownList('filterPlaceHolder');
          }
        }
      }, {
        key: "height",
        value: function height(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('height', arg);
          } else {
            return this.host.jqxDropDownList('height');
          }
        }
      }, {
        key: "incrementalSearch",
        value: function incrementalSearch(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('incrementalSearch', arg);
          } else {
            return this.host.jqxDropDownList('incrementalSearch');
          }
        }
      }, {
        key: "incrementalSearchDelay",
        value: function incrementalSearchDelay(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('incrementalSearchDelay', arg);
          } else {
            return this.host.jqxDropDownList('incrementalSearchDelay');
          }
        }
      }, {
        key: "itemHeight",
        value: function itemHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('itemHeight', arg);
          } else {
            return this.host.jqxDropDownList('itemHeight');
          }
        }
      }, {
        key: "openDelay",
        value: function openDelay(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('openDelay', arg);
          } else {
            return this.host.jqxDropDownList('openDelay');
          }
        }
      }, {
        key: "placeHolder",
        value: function placeHolder(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('placeHolder', arg);
          } else {
            return this.host.jqxDropDownList('placeHolder');
          }
        }
      }, {
        key: "popupZIndex",
        value: function popupZIndex(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('popupZIndex', arg);
          } else {
            return this.host.jqxDropDownList('popupZIndex');
          }
        }
      }, {
        key: "rtl",
        value: function rtl(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('rtl', arg);
          } else {
            return this.host.jqxDropDownList('rtl');
          }
        }
      }, {
        key: "renderer",
        value: function renderer(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('renderer', arg);
          } else {
            return this.host.jqxDropDownList('renderer');
          }
        }
      }, {
        key: "selectionRenderer",
        value: function selectionRenderer(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('selectionRenderer', arg);
          } else {
            return this.host.jqxDropDownList('selectionRenderer');
          }
        }
      }, {
        key: "searchMode",
        value: function searchMode(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('searchMode', arg);
          } else {
            return this.host.jqxDropDownList('searchMode');
          }
        }
      }, {
        key: "source",
        value: function source(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('source', arg);
          } else {
            return this.host.jqxDropDownList('source');
          }
        }
      }, {
        key: "selectedIndex",
        value: function selectedIndex(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('selectedIndex', arg);
          } else {
            return this.host.jqxDropDownList('selectedIndex');
          }
        }
      }, {
        key: "theme",
        value: function theme(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('theme', arg);
          } else {
            return this.host.jqxDropDownList('theme');
          }
        }
      }, {
        key: "template",
        value: function template(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('template', arg);
          } else {
            return this.host.jqxDropDownList('template');
          }
        }
      }, {
        key: "valueMember",
        value: function valueMember(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('valueMember', arg);
          } else {
            return this.host.jqxDropDownList('valueMember');
          }
        }
      }, {
        key: "width",
        value: function width(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDropDownList('width', arg);
          } else {
            return this.host.jqxDropDownList('width');
          }
        } // jqxDropDownListComponent functions

      }, {
        key: "addItem",
        value: function addItem(item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDropDownList('addItem', item);
        }
      }, {
        key: "clearSelection",
        value: function clearSelection() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('clearSelection');
        }
      }, {
        key: "clear",
        value: function clear() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('clear');
        }
      }, {
        key: "close",
        value: function close() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('close');
        }
      }, {
        key: "checkIndex",
        value: function checkIndex(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('checkIndex', index);
        }
      }, {
        key: "checkItem",
        value: function checkItem(item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('checkItem', item);
        }
      }, {
        key: "checkAll",
        value: function checkAll() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('checkAll');
        }
      }, {
        key: "clearFilter",
        value: function clearFilter() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('clearFilter');
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('destroy');
        }
      }, {
        key: "disableItem",
        value: function disableItem(item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('disableItem', item);
        }
      }, {
        key: "disableAt",
        value: function disableAt(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('disableAt', index);
        }
      }, {
        key: "enableItem",
        value: function enableItem(item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('enableItem', item);
        }
      }, {
        key: "enableAt",
        value: function enableAt(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('enableAt', index);
        }
      }, {
        key: "ensureVisible",
        value: function ensureVisible(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('ensureVisible', index);
        }
      }, {
        key: "focus",
        value: function focus() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('focus');
        }
      }, {
        key: "getItem",
        value: function getItem(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDropDownList('getItem', index);
        }
      }, {
        key: "getItemByValue",
        value: function getItemByValue(itemValue) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDropDownList('getItemByValue', itemValue);
        }
      }, {
        key: "getItems",
        value: function getItems() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDropDownList('getItems');
        }
      }, {
        key: "getCheckedItems",
        value: function getCheckedItems() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDropDownList('getCheckedItems');
        }
      }, {
        key: "getSelectedItem",
        value: function getSelectedItem() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDropDownList('getSelectedItem');
        }
      }, {
        key: "getSelectedIndex",
        value: function getSelectedIndex() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDropDownList('getSelectedIndex');
        }
      }, {
        key: "insertAt",
        value: function insertAt(item, index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('insertAt', item, index);
        }
      }, {
        key: "isOpened",
        value: function isOpened() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDropDownList('isOpened');
        }
      }, {
        key: "indeterminateIndex",
        value: function indeterminateIndex(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('indeterminateIndex', index);
        }
      }, {
        key: "indeterminateItem",
        value: function indeterminateItem(item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('indeterminateItem', item);
        }
      }, {
        key: "loadFromSelect",
        value: function loadFromSelect(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('loadFromSelect', arg);
        }
      }, {
        key: "open",
        value: function open() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('open');
        }
      }, {
        key: "removeItem",
        value: function removeItem(item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('removeItem', item);
        }
      }, {
        key: "removeAt",
        value: function removeAt(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('removeAt', index);
        }
      }, {
        key: "selectIndex",
        value: function selectIndex(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('selectIndex', index);
        }
      }, {
        key: "selectItem",
        value: function selectItem(item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('selectItem', item);
        }
      }, {
        key: "setContent",
        value: function setContent(content) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('setContent', content);
        }
      }, {
        key: "updateItem",
        value: function updateItem(newItem, item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('updateItem', newItem, item);
        }
      }, {
        key: "updateAt",
        value: function updateAt(item, index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('updateAt', item, index);
        }
      }, {
        key: "unselectIndex",
        value: function unselectIndex(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('unselectIndex', index);
        }
      }, {
        key: "unselectItem",
        value: function unselectItem(item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('unselectItem', item);
        }
      }, {
        key: "uncheckIndex",
        value: function uncheckIndex(index) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('uncheckIndex', index);
        }
      }, {
        key: "uncheckItem",
        value: function uncheckItem(item) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('uncheckItem', item);
        }
      }, {
        key: "uncheckAll",
        value: function uncheckAll() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDropDownList('uncheckAll');
        }
      }, {
        key: "val",
        value: function val(value) {
          if (value !== undefined) {
            return this.host.jqxDropDownList('val', value);
          } else {
            return this.host.jqxDropDownList('val');
          }
        }
      }, {
        key: "__wireEvents__",
        value: function __wireEvents__() {
          var _this = this;

          this.host.on('bindingComplete', function (eventData) {
            _this.onBindingComplete.emit(eventData);
          });
          this.host.on('close', function (eventData) {
            _this.onClose.emit(eventData);
          });
          this.host.on('checkChange', function (eventData) {
            _this.onCheckChange.emit(eventData);
          });
          this.host.on('change', function (eventData) {
            _this.onChange.emit(eventData);

            if (eventData.args) _this.onChangeCallback(eventData.args.item.value);
          });
          this.host.on('open', function (eventData) {
            _this.onOpen.emit(eventData);
          });
          this.host.on('select', function (eventData) {
            _this.onSelect.emit(eventData);
          });
          this.host.on('unselect', function (eventData) {
            _this.onUnselect.emit(eventData);
          });
        }
      }]);

      return jqxDropDownListComponent;
    }(); //jqxDropDownListComponent


    jqxDropDownListComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('autoOpen'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrAutoOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('autoDropDownHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrAutoDropDownHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('animationType'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrAnimationType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('checkboxes'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrCheckboxes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('closeDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)], jqxDropDownListComponent.prototype, "attrCloseDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('disabled'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('displayMember'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrDisplayMember", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownHorizontalAlignment'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownVerticalAlignment'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrDropDownVerticalAlignment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "attrDropDownHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownWidth'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "attrDropDownWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableSelection'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrEnableSelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableBrowserBoundsDetection'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableHover'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrEnableHover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterable'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrFilterable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)], jqxDropDownListComponent.prototype, "attrFilterHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)], jqxDropDownListComponent.prototype, "attrFilterDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterPlaceHolder'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrFilterPlaceHolder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('incrementalSearch'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrIncrementalSearch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('incrementalSearchDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)], jqxDropDownListComponent.prototype, "attrIncrementalSearchDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('itemHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)], jqxDropDownListComponent.prototype, "attrItemHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('openDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)], jqxDropDownListComponent.prototype, "attrOpenDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('placeHolder'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrPlaceHolder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('popupZIndex'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)], jqxDropDownListComponent.prototype, "attrPopupZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('rtl'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "attrRtl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('renderer'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function)], jqxDropDownListComponent.prototype, "attrRenderer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('selectionRenderer'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Function)], jqxDropDownListComponent.prototype, "attrSelectionRenderer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('searchMode'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrSearchMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('source'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Array)], jqxDropDownListComponent.prototype, "attrSource", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('selectedIndex'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Number)], jqxDropDownListComponent.prototype, "attrSelectedIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('theme'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrTheme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('template'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('valueMember'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", String)], jqxDropDownListComponent.prototype, "attrValueMember", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('width'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "attrWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('height'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "attrHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('auto-create'), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Boolean)], jqxDropDownListComponent.prototype, "autoCreate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "onBindingComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "onClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "onCheckChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "onOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)], jqxDropDownListComponent.prototype, "onUnselect", void 0);
    jqxDropDownListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
      selector: 'jqxDropDownList',
      template: '<div><ng-content></ng-content></div>',
      providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]])], jqxDropDownListComponent);

    var jqxDropDownListModule = function jqxDropDownListModule() {
      _classCallCheck(this, jqxDropDownListModule);
    };

    jqxDropDownListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
      declarations: [jqxDropDownListComponent],
      exports: [jqxDropDownListComponent]
    })], jqxDropDownListModule);
    /**
     * Generated bundle index. Do not edit.
     */

    /***/
  }
}]);
//# sourceMappingURL=1-es5.3f2e0508e4a9ee3a68a1.js.map