function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  /***/
  "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdropdownbutton.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdropdownbutton.js ***!
    \******************************************************************************/

  /*! exports provided: jqxDropDownButtonComponent, jqxDropDownButtonModule */

  /***/
  function node_modulesJqwidgetsNgFesm2015JqwidgetsNgJqxdropdownbuttonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jqxDropDownButtonComponent", function () {
      return jqxDropDownButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jqxDropDownButtonModule", function () {
      return jqxDropDownButtonModule;
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


    var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jqwidgets/jqxbuttons */
    "./node_modules/jqwidgets-ng/jqwidgets/jqxbuttons.js");
    /* harmony import */


    var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _jqwidgets_jqxdropdownbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../jqwidgets/jqxdropdownbutton */
    "./node_modules/jqwidgets-ng/jqwidgets/jqxdropdownbutton.js");
    /* harmony import */


    var _jqwidgets_jqxdropdownbutton__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxdropdownbutton__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); /// <reference path="../../jqwidgets.d.ts" />


    var jqxDropDownButtonComponent =
    /*#__PURE__*/
    function () {
      function jqxDropDownButtonComponent(containerElement) {
        _classCallCheck(this, jqxDropDownButtonComponent);

        this.autoCreate = true;
        this.properties = ['animationType', 'arrowSize', 'autoOpen', 'closeDelay', 'disabled', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownWidth', 'enableBrowserBoundsDetection', 'height', 'initContent', 'openDelay', 'popupZIndex', 'rtl', 'template', 'theme', 'width']; // jqxDropDownButtonComponent events

        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.elementRef = containerElement;
      }

      _createClass(jqxDropDownButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.autoCreate) {
            this.createComponent();
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
                    areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownButton(this.properties[i]));
                  }

                  if (areEqual) {
                    return false;
                  }

                  this.host.jqxDropDownButton(this.properties[i], this[attrName]);
                  continue;
                }

                if (this[attrName] !== this.host.jqxDropDownButton(this.properties[i])) {
                  this.host.jqxDropDownButton(this.properties[i], this[attrName]);
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

          this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownButton', options);
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
        key: "setOptions",
        value: function setOptions(options) {
          this.host.jqxDropDownButton('setOptions', options);
        } // jqxDropDownButtonComponent properties

      }, {
        key: "animationType",
        value: function animationType(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('animationType', arg);
          } else {
            return this.host.jqxDropDownButton('animationType');
          }
        }
      }, {
        key: "arrowSize",
        value: function arrowSize(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('arrowSize', arg);
          } else {
            return this.host.jqxDropDownButton('arrowSize');
          }
        }
      }, {
        key: "autoOpen",
        value: function autoOpen(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('autoOpen', arg);
          } else {
            return this.host.jqxDropDownButton('autoOpen');
          }
        }
      }, {
        key: "closeDelay",
        value: function closeDelay(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('closeDelay', arg);
          } else {
            return this.host.jqxDropDownButton('closeDelay');
          }
        }
      }, {
        key: "disabled",
        value: function disabled(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('disabled', arg);
          } else {
            return this.host.jqxDropDownButton('disabled');
          }
        }
      }, {
        key: "dropDownHorizontalAlignment",
        value: function dropDownHorizontalAlignment(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownHorizontalAlignment', arg);
          } else {
            return this.host.jqxDropDownButton('dropDownHorizontalAlignment');
          }
        }
      }, {
        key: "dropDownVerticalAlignment",
        value: function dropDownVerticalAlignment(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownVerticalAlignment', arg);
          } else {
            return this.host.jqxDropDownButton('dropDownVerticalAlignment');
          }
        }
      }, {
        key: "dropDownWidth",
        value: function dropDownWidth(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownWidth', arg);
          } else {
            return this.host.jqxDropDownButton('dropDownWidth');
          }
        }
      }, {
        key: "enableBrowserBoundsDetection",
        value: function enableBrowserBoundsDetection(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('enableBrowserBoundsDetection', arg);
          } else {
            return this.host.jqxDropDownButton('enableBrowserBoundsDetection');
          }
        }
      }, {
        key: "height",
        value: function height(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('height', arg);
          } else {
            return this.host.jqxDropDownButton('height');
          }
        }
      }, {
        key: "initContent",
        value: function initContent(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('initContent', arg);
          } else {
            return this.host.jqxDropDownButton('initContent');
          }
        }
      }, {
        key: "openDelay",
        value: function openDelay(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('openDelay', arg);
          } else {
            return this.host.jqxDropDownButton('openDelay');
          }
        }
      }, {
        key: "popupZIndex",
        value: function popupZIndex(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('popupZIndex', arg);
          } else {
            return this.host.jqxDropDownButton('popupZIndex');
          }
        }
      }, {
        key: "rtl",
        value: function rtl(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('rtl', arg);
          } else {
            return this.host.jqxDropDownButton('rtl');
          }
        }
      }, {
        key: "template",
        value: function template(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('template', arg);
          } else {
            return this.host.jqxDropDownButton('template');
          }
        }
      }, {
        key: "theme",
        value: function theme(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('theme', arg);
          } else {
            return this.host.jqxDropDownButton('theme');
          }
        }
      }, {
        key: "width",
        value: function width(arg) {
          if (arg !== undefined) {
            this.host.jqxDropDownButton('width', arg);
          } else {
            return this.host.jqxDropDownButton('width');
          }
        } // jqxDropDownButtonComponent functions

      }, {
        key: "close",
        value: function close() {
          this.host.jqxDropDownButton('close');
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.host.jqxDropDownButton('destroy');
        }
      }, {
        key: "focus",
        value: function focus() {
          this.host.jqxDropDownButton('focus');
        }
      }, {
        key: "getContent",
        value: function getContent() {
          return this.host.jqxDropDownButton('getContent');
        }
      }, {
        key: "isOpened",
        value: function isOpened() {
          return this.host.jqxDropDownButton('isOpened');
        }
      }, {
        key: "open",
        value: function open() {
          this.host.jqxDropDownButton('open');
        }
      }, {
        key: "setContent",
        value: function setContent(content) {
          this.host.jqxDropDownButton('setContent', content);
        }
      }, {
        key: "__wireEvents__",
        value: function __wireEvents__() {
          var _this = this;

          this.host.on('close', function (eventData) {
            _this.onClose.emit(eventData);
          });
          this.host.on('open', function (eventData) {
            _this.onOpen.emit(eventData);
          });
        }
      }]);

      return jqxDropDownButtonComponent;
    }(); //jqxDropDownButtonComponent


    jqxDropDownButtonComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('animationType'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], jqxDropDownButtonComponent.prototype, "attrAnimationType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('arrowSize'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)], jqxDropDownButtonComponent.prototype, "attrArrowSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('autoOpen'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)], jqxDropDownButtonComponent.prototype, "attrAutoOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('closeDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)], jqxDropDownButtonComponent.prototype, "attrCloseDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('disabled'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)], jqxDropDownButtonComponent.prototype, "attrDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('dropDownHorizontalAlignment'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], jqxDropDownButtonComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('dropDownVerticalAlignment'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], jqxDropDownButtonComponent.prototype, "attrDropDownVerticalAlignment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('dropDownWidth'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], jqxDropDownButtonComponent.prototype, "attrDropDownWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('enableBrowserBoundsDetection'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)], jqxDropDownButtonComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('initContent'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function)], jqxDropDownButtonComponent.prototype, "attrInitContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('openDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)], jqxDropDownButtonComponent.prototype, "attrOpenDelay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('popupZIndex'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)], jqxDropDownButtonComponent.prototype, "attrPopupZIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('rtl'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)], jqxDropDownButtonComponent.prototype, "attrRtl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('template'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], jqxDropDownButtonComponent.prototype, "attrTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('theme'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], jqxDropDownButtonComponent.prototype, "attrTheme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('width'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], jqxDropDownButtonComponent.prototype, "attrWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('height'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], jqxDropDownButtonComponent.prototype, "attrHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])('auto-create'), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)], jqxDropDownButtonComponent.prototype, "autoCreate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], jqxDropDownButtonComponent.prototype, "onClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], jqxDropDownButtonComponent.prototype, "onOpen", void 0);
    jqxDropDownButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'jqxDropDownButton',
      template: '<div><ng-content></ng-content></div>'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]])], jqxDropDownButtonComponent);

    var jqxDropDownButtonModule = function jqxDropDownButtonModule() {
      _classCallCheck(this, jqxDropDownButtonModule);
    };

    jqxDropDownButtonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [],
      declarations: [jqxDropDownButtonComponent],
      exports: [jqxDropDownButtonComponent]
    })], jqxDropDownButtonModule);
    /**
     * Generated bundle index. Do not edit.
     */

    /***/
  },

  /***/
  "./node_modules/jqwidgets-ng/jqwidgets/jqxdropdownbutton.js":
  /*!******************************************************************!*\
    !*** ./node_modules/jqwidgets-ng/jqwidgets/jqxdropdownbutton.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJqwidgetsNgJqwidgetsJqxdropdownbuttonJs(module, exports) {
    /*
    jQWidgets v9.0.0 (2020-Jan)
    Copyright (c) 2011-2020 jQWidgets.
    License: https://jqwidgets.com/license/
    */

    /* eslint-disable */
    (function (a) {
      a.jqx.jqxWidget("jqxDropDownButton", "", {});
      a.extend(a.jqx._jqxDropDownButton.prototype, {
        defineInstance: function defineInstance() {
          var b = {
            disabled: false,
            width: null,
            height: null,
            arrowSize: 17,
            enableHover: true,
            openDelay: 250,
            closeDelay: 300,
            animationType: "default",
            placeHolder: "",
            enableBrowserBoundsDetection: false,
            dropDownHorizontalAlignment: "left",
            dropDownVerticalAlignment: "bottom",
            popupZIndex: 1500,
            dropDownContainer: "default",
            autoOpen: false,
            rtl: false,
            initContent: null,
            dropDownWidth: null,
            dropDownHeight: null,
            focusable: true,
            template: "default",
            touchMode: false,
            hint: true,
            aria: {
              "aria-disabled": {
                name: "disabled",
                type: "boolean"
              }
            },
            events: ["open", "close", "opening", "closing"]
          };

          if (this === a.jqx._jqxDropDownButton.prototype) {
            return b;
          }

          a.extend(true, this, b);
          return b;
        },
        createInstance: function createInstance(j) {
          var g = this;

          if (!g.width) {
            g.width = 200;
          }

          if (!g.height) {
            g.height = 25;
          }

          g.isanimating = false;
          var c = a("<div style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;'><div id='dropDownButtonWrapper' style='outline: none; background-color: transparent; border: none; float: left; width:100%; height: 100%; position: relative;'><div id='dropDownButtonContent' unselectable='on' style='outline: none; background-color: transparent; border: none; float: left; position: relative;'/><div id='dropDownButtonArrow' unselectable='on'  style='background-color: transparent; border: none; float: right; position: relative;'><div unselectable='on'></div></div></div></div>");

          if (g.host.attr("tabindex")) {
            c.attr("tabindex", g.host.attr("tabindex"));
            g.host.removeAttr("tabindex");
          } else {
            c.attr("tabindex", 0);
          }

          if (!g.focusable) {
            c.removeAttr("tabIndex");
          }

          a.jqx.aria(this);
          g.popupContent = g.host.children();
          g.host.attr("role", "button");

          if (g.popupContent.length == 0) {
            g.popupContent = a("<div>" + g.host.text() + "</div>");
            g.popupContent.css("display", "block");
            g.element.innerHTML = "";
          } else {
            g.popupContent.detach();
          }

          var k = this;
          g.addHandler(g.host, "loadContent", function (e) {
            k._arrange();
          });

          try {
            var f = "dropDownButtonPopup" + g.element.id;
            var d = a(a.find("#" + f));

            if (d.length > 0) {
              d.remove();
            }

            a.jqx.aria(this, "aria-haspopup", true);
            a.jqx.aria(this, "aria-owns", f);
            var b = a("<div class='dropDownButton' style='overflow: hidden; left: -1000px; top: -1000px; position: absolute;' id='dropDownButtonPopup" + g.element.id + "'></div>");
            b.addClass(g.toThemeProperty("jqx-widget-content"));
            b.addClass(g.toThemeProperty("jqx-dropdownbutton-popup"));
            b.addClass(g.toThemeProperty("jqx-popup"));
            b.addClass(g.toThemeProperty("jqx-rc-all"));

            if (g.dropDownContainer != "element") {
              b.css("z-index", g.popupZIndex);
            }

            if (a.jqx.browser.msie) {
              b.addClass(g.toThemeProperty("jqx-noshadow"));
            }

            g.popupContent.appendTo(b);

            if (g.dropDownContainer == "element") {
              b.appendTo(g.host);
            } else {
              b.appendTo(document.body);
            }

            g.container = b;
            g.container.css("visibility", "hidden");
          } catch (h) {}

          g.touch = a.jqx.mobile.isTouchDevice();
          g.dropDownButtonStructure = c;
          g.host.append(c);
          g.dropDownButtonWrapper = g.host.find("#dropDownButtonWrapper");
          g.firstDiv = g.dropDownButtonWrapper.parent();
          g.dropDownButtonArrow = g.host.find("#dropDownButtonArrow");
          g.arrow = a(g.dropDownButtonArrow.children()[0]);
          g.dropDownButtonContent = g.host.find("#dropDownButtonContent");
          g.dropDownButtonContent.addClass(g.toThemeProperty("jqx-dropdownlist-content"));
          g.dropDownButtonWrapper.addClass(g.toThemeProperty("jqx-disableselect"));

          if (g.rtl) {
            g.dropDownButtonContent.addClass(g.toThemeProperty("jqx-rtl"));
          }

          var m = this;

          if (g.host.parents()) {
            g.addHandler(g.host.parents(), "scroll.dropdownbutton" + g.element.id, function (e) {
              var n = m.isOpened();

              if (n) {
                m.close();
              }
            });
          }

          g.addHandler(g.dropDownButtonWrapper, "selectstart", function () {
            return false;
          });
          g.dropDownButtonWrapper[0].id = "dropDownButtonWrapper" + g.element.id;
          g.dropDownButtonArrow[0].id = "dropDownButtonArrow" + g.element.id;
          g.dropDownButtonContent[0].id = "dropDownButtonContent" + g.element.id;
          var m = this;

          g.propertyChangeMap.disabled = function (e, o, n, p) {
            if (p) {
              e.host.addClass(m.toThemeProperty("jqx-dropdownlist-state-disabled"));
              e.host.addClass(m.toThemeProperty("jqx-fill-state-disabled"));
              e.dropDownButtonContent.addClass(m.toThemeProperty("jqx-dropdownlist-content-disabled"));
            } else {
              e.host.removeClass(m.toThemeProperty("jqx-dropdownlist-state-disabled"));
              e.host.removeClass(m.toThemeProperty("jqx-fill-state-disabled"));
              e.dropDownButtonContent.removeClass(m.toThemeProperty("jqx-dropdownlist-content-disabled"));
            }

            a.jqx.aria(e, "aria-disabled", e.disabled);
          };

          if (g.disabled) {
            g.host.addClass(g.toThemeProperty("jqx-dropdownlist-state-disabled"));
            g.host.addClass(g.toThemeProperty("jqx-fill-state-disabled"));
            g.dropDownButtonContent.addClass(g.toThemeProperty("jqx-dropdownlist-content-disabled"));
          }

          var i = g.toThemeProperty("jqx-rc-all") + " " + g.toThemeProperty("jqx-fill-state-normal") + " " + g.toThemeProperty("jqx-widget") + " " + g.toThemeProperty("jqx-widget-content") + " " + g.toThemeProperty("jqx-dropdownlist-state-normal");
          g.host.addClass(i);
          g.arrow.addClass(g.toThemeProperty("jqx-icon-arrow-down"));
          g.arrow.addClass(g.toThemeProperty("jqx-icon"));

          if (g.template) {
            g.host.addClass(g.toThemeProperty("jqx-" + g.template));
          }

          g._setSize();

          g.render();

          if (a.jqx.browser.msie && a.jqx.browser.version < 8) {
            g.container.css("display", "none");

            if (g.host.parents(".jqx-window").length > 0) {
              var l = g.host.parents(".jqx-window").css("z-index");
              b.css("z-index", l + 10);
              g.container.css("z-index", l + 10);
            }
          }
        },
        setContent: function setContent(b) {
          var c = this;
          c.dropDownButtonContent.children().remove();
          c.dropDownButtonContent[0].innerHTML = "";
          c.dropDownButtonContent.append(b);
        },
        val: function val(c) {
          var b = this;

          if (arguments.length == 0 || typeof c == "object") {
            return b.dropDownButtonContent.text();
          } else {
            b.dropDownButtonContent.html(c);
          }
        },
        getContent: function getContent() {
          var b = this;

          if (b.dropDownButtonContent.children().length > 0) {
            return b.dropDownButtonContent.children();
          }

          return b.dropDownButtonContent.text();
        },
        _setSize: function _setSize() {
          var e = this;
          var b = window.getComputedStyle(this.element);
          var c = parseInt(b.borderLeftWidth) * 2;
          var g = b.boxSizing;

          if (g === "border-box" || isNaN(c)) {
            c = 0;
          }

          if (this.width != null && this.width.toString().indexOf("px") != -1) {
            this.element.style.width = parseInt(this.width) - c + "px";
          } else {
            if (this.width != undefined && !isNaN(this.width)) {
              this.element.style.width = parseInt(this.width) - c + "px";
            }
          }

          if (this.height != null && this.height.toString().indexOf("px") != -1) {
            this.element.style.height = parseInt(this.height) - c + "px";
          } else {
            if (this.height != undefined && !isNaN(this.height)) {
              this.element.style.height = parseInt(this.height) - c + "px";
            }
          }

          var f = false;

          if (e.width != null && e.width.toString().indexOf("%") != -1) {
            f = true;
            e.host.width(e.width);

            if (c > 0) {
              this.host.css("box-sizing", "border-box");
            }
          }

          if (e.height != null && e.height.toString().indexOf("%") != -1) {
            f = true;
            e.host.height(e.height);
          }

          var d = this;

          if (f) {
            e.refresh(false);
          }

          a.jqx.utilities.resize(e.host, function () {
            d._arrange();
          });
        },
        isOpened: function isOpened() {
          var c = this;
          var b = a.data(document.body, "openedJQXButton" + c.element.id);

          if (b != null && b == c.popupContent) {
            return true;
          }

          return false;
        },
        focus: function focus() {
          var c = this;

          try {
            c.host.focus();
          } catch (b) {}
        },
        render: function render() {
          var f = this;
          f.removeHandlers();
          var b = this;
          var d = false;

          if (!f.touch) {
            f.addHandler(f.host, "mouseenter", function () {
              if (!b.disabled && b.enableHover) {
                d = true;
                b.host.addClass(b.toThemeProperty("jqx-dropdownlist-state-hover"));
                b.arrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-hover"));
                b.host.addClass(b.toThemeProperty("jqx-fill-state-hover"));
              }
            });
            f.addHandler(f.host, "mouseleave", function () {
              if (!b.disabled && b.enableHover) {
                b.host.removeClass(b.toThemeProperty("jqx-dropdownlist-state-hover"));
                b.host.removeClass(b.toThemeProperty("jqx-fill-state-hover"));
                b.arrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-hover"));
                d = false;
              }
            });
          }

          if (b.autoOpen) {
            f.addHandler(f.host, "mouseenter", function () {
              var g = b.isOpened();

              if (!g && b.autoOpen) {
                b.open();
                b.host.focus();
              }
            });
            f.addHandler(a(document), "mousemove." + b.element.id, function (g) {
              var n = b.isOpened();

              if (n && b.autoOpen) {
                var k = b.host.coord();
                var l = k.top;
                var j = k.left;
                var h = b.container.coord();
                var o = h.left;
                var m = h.top;
                var i = true;

                if (g.pageY >= l && g.pageY <= l + b.host.height()) {
                  if (g.pageX >= j && g.pageX < j + b.host.width()) {
                    i = false;
                  }
                }

                if (g.pageY >= m && g.pageY <= m + b.container.height()) {
                  if (g.pageX >= o && g.pageX < o + b.container.width()) {
                    i = false;
                  }
                }

                if (i) {
                  b.close();
                }
              }
            });
          }

          f.addHandler(f.dropDownButtonWrapper, "mousedown", function (h) {
            if (!b.disabled) {
              var g = b.container.css("visibility") == "visible";

              if (!b.isanimating) {
                if (g) {
                  b.close();
                  return false;
                } else {
                  b.open();

                  if (!b.focusable) {
                    if (h.preventDefault) {
                      h.preventDefault();
                    }
                  }
                }
              }
            }
          });

          if (f.touch) {
            f.addHandler(a(document), a.jqx.mobile.getTouchEventName("touchstart") + "." + f.element.id, b.closeOpenedDropDown, {
              me: this,
              popup: f.container,
              id: f.element.id
            });
          }

          f.addHandler(a(document), "mousedown." + f.element.id, b.closeOpenedDropDown, {
            me: this,
            popup: f.container,
            id: f.element.id
          });
          f.addHandler(f.host, "keydown", function (h) {
            var g = b.container.css("visibility") == "visible";

            if (b.host.css("display") == "none") {
              return true;
            }

            if (h.keyCode == "13") {
              if (!b.isanimating) {
                if (g) {
                  b.close();
                }
              }
            }

            if (h.keyCode == 115) {
              if (!b.isanimating) {
                if (!b.isOpened()) {
                  b.open();
                } else {
                  if (b.isOpened()) {
                    b.close();
                  }
                }
              }

              return false;
            }

            if (h.altKey) {
              if (b.host.css("display") == "block") {
                if (h.keyCode == 38) {
                  if (b.isOpened()) {
                    b.close();
                  }
                } else {
                  if (h.keyCode == 40) {
                    if (!b.isOpened()) {
                      b.open();
                    }
                  }
                }
              }
            }

            if (h.keyCode == "27") {
              if (!b.ishiding) {
                b.close();

                if (b.tempSelectedIndex != undefined) {
                  b.selectIndex(b.tempSelectedIndex);
                }
              }
            }
          });
          f.addHandler(f.firstDiv, "focus", function () {
            b.host.addClass(b.toThemeProperty("jqx-dropdownlist-state-focus"));
            b.host.addClass(b.toThemeProperty("jqx-fill-state-focus"));
          });
          f.addHandler(f.firstDiv, "blur", function () {
            b.host.removeClass(b.toThemeProperty("jqx-dropdownlist-state-focus"));
            b.host.removeClass(b.toThemeProperty("jqx-fill-state-focus"));
          });
          var c = a("<label></label");

          if (this.hint) {
            c[0].innerHTML = this.placeHolder;
          }

          c.addClass(b.toThemeProperty("jqx-input-label"));
          b.dropDownButtonWrapper.append(c);
          b.label = c;
          var e = a("<span></span>");
          b.dropDownButtonWrapper.append(e);
          e.addClass(b.toThemeProperty("jqx-input-bar"));
          b.bar = e;
          b.bar.css("top", this.host.height());
          var f = this;

          if (f.template) {
            f.bar.addClass(f.toThemeProperty("jqx-" + f.template));
            f.label.addClass(f.toThemeProperty("jqx-" + f.template));
          }
        },
        removeHandlers: function removeHandlers() {
          var c = this;
          var b = this;
          c.removeHandler(c.dropDownButtonWrapper, "mousedown");
          c.removeHandler(c.host, "keydown");
          c.removeHandler(c.firstDiv, "focus");
          c.removeHandler(c.firstDiv, "blur");
          c.removeHandler(c.host, "mouseenter");
          c.removeHandler(c.host, "mouseleave");

          if (c.autoOpen) {
            c.removeHandler(c.host, "mouseenter");
            c.removeHandler(c.host, "mouseleave");
          }

          c.removeHandler(a(document), "mousemove." + b.element.id);
        },
        _findPos: function _findPos(c) {
          while (c && (c.type == "hidden" || c.nodeType != 1 || a.expr.filters.hidden(c))) {
            c = c.nextSibling;
          }

          var b = a(c).coord(true);
          return [b.left, b.top];
        },
        testOffset: function testOffset(h, f, c) {
          var j = this;
          var g = h.outerWidth();
          var k = h.outerHeight();
          var i = a(window).width() + a(window).scrollLeft();
          var e = a(window).height() + a(window).scrollTop();

          if (f.left + g > i) {
            if (g > j.host.width()) {
              var d = j.host.coord().left;
              var b = g - j.host.width();
              f.left = d - b + 2;
            }
          }

          if (f.left < 0) {
            f.left = parseInt(j.host.coord().left) + "px";
          }

          f.top -= Math.min(f.top, f.top + k > e && e > k ? Math.abs(k + c + 22) : 0);
          return f;
        },
        _getBodyOffset: function _getBodyOffset() {
          var c = 0;
          var b = 0;

          if (a("body").css("border-top-width") != "0px") {
            c = parseInt(a("body").css("border-top-width"));

            if (isNaN(c)) {
              c = 0;
            }
          }

          if (a("body").css("border-left-width") != "0px") {
            b = parseInt(a("body").css("border-left-width"));

            if (isNaN(b)) {
              b = 0;
            }
          }

          return {
            left: b,
            top: c
          };
        },
        open: function open() {
          a.jqx.aria(this, "aria-expanded", true);
          var i = this;
          var o = this;

          if ((i.dropDownWidth == null || i.dropDownWidth == "auto") && i.width != null && i.width.indexOf && i.width.indexOf("%") != -1) {
            var q = i.host.width();
            i.container.width(parseInt(q));
          }

          o._raiseEvent("2");

          var c = i.popupContent;
          var f = a(window).scrollTop();
          var g = a(window).scrollLeft();
          var m = parseInt(i._findPos(i.host[0])[1]) + parseInt(i.host.outerHeight()) - 1 + "px";
          var e,
              p = parseInt(Math.round(i.host.coord(true).left));
          e = p + "px";
          var u = false;
          i.ishiding = false;
          i.tempSelectedIndex = i.selectedIndex;

          if (u != null && u) {
            e = a.jqx.mobile.getLeftPos(i.element);
            m = a.jqx.mobile.getTopPos(i.element) + parseInt(i.host.outerHeight());

            if (a("body").css("border-top-width") != "0px") {
              m = parseInt(m) - i._getBodyOffset().top + "px";
            }

            if (a("body").css("border-left-width") != "0px") {
              e = parseInt(e) - i._getBodyOffset().left + "px";
            }
          }

          c.stop();
          i.host.addClass(i.toThemeProperty("jqx-dropdownlist-state-selected"));
          i.host.addClass(i.toThemeProperty("jqx-fill-state-pressed"));
          i.arrow.addClass(i.toThemeProperty("jqx-icon-arrow-down-selected"));
          var h = false;

          if (a.jqx.browser.msie && a.jqx.browser.version < 8) {
            h = true;
          }

          if (h) {
            i.container.css("display", "block");
          }

          i.container.css("left", e);
          i.container.css("top", m);
          var d = true;
          var b = false;

          var s = function s() {
            if (i.dropDownHorizontalAlignment == "right" || i.rtl) {
              var v = i.container.width();
              var t = Math.abs(v - i.host.width());

              if (v > i.host.width()) {
                i.container.css("left", parseInt(Math.round(p)) - t + "px");
              } else {
                i.container.css("left", parseInt(Math.round(p)) + t + "px");
              }
            }
          };

          s.call(this);

          if (i.dropDownVerticalAlignment == "top") {
            var r = c.height();
            b = true;
            i.container.height(c.outerHeight());
            c.addClass(this.toThemeProperty("jqx-popup-up"));
            var l = parseInt(i.host.outerHeight());
            var k = parseInt(m) - Math.abs(r + l);

            if (i.interval) {
              clearInterval(i.interval);
            }

            i.interval = setInterval(function () {
              if (c.outerHeight() != i.container.height()) {
                i.container.height(c.outerHeight());
                var v = parseInt(m) - Math.abs(c.height() + l);
                i.container.css("top", v);
              }
            }, 50);
            c.css("top", 23);
            i.container.css("top", k);
          }

          if (i.enableBrowserBoundsDetection) {
            var j = i.testOffset(c, {
              left: parseInt(i.container.css("left")),
              top: parseInt(m)
            }, parseInt(i.host.outerHeight()));

            if (parseInt(i.container.css("top")) != j.top) {
              b = true;
              i.container.height(c.outerHeight());
              c.css("top", 23);

              if (i.interval) {
                clearInterval(i.interval);
              }

              i.interval = setInterval(function () {
                if (c.outerHeight() != o.container.height()) {
                  var t = o.testOffset(c, {
                    left: parseInt(i.container.css("left")),
                    top: parseInt(m)
                  }, parseInt(i.host.outerHeight()));
                  i.container.css("top", t.top);
                  i.container.height(c.outerHeight());
                }
              }, 50);
            } else {
              c.css("top", 0);
            }

            i.container.css("top", j.top);

            if (parseInt(i.container.css("left")) != j.left) {
              i.container.css("left", j.left);
            }
          }

          if (i.animationType == "none") {
            i.container.css("visibility", "visible");
            a.data(document.body, "openedJQXButtonParent", o);
            a.data(document.body, "openedJQXButton" + i.element.id, c);
            c.css("margin-top", 0);
            c.css("opacity", 1);

            i._raiseEvent("0");

            s.call(o);
          } else {
            i.container.css("visibility", "visible");
            var n = c.outerHeight();
            o.isanimating = true;

            if (i.animationType == "fade") {
              c.css("margin-top", 0);
              c.css("opacity", 0);
              c.animate({
                opacity: 1
              }, i.openDelay, function () {
                a.data(document.body, "openedJQXButtonParent", o);
                a.data(document.body, "openedJQXButton" + o.element.id, c);
                o.ishiding = false;
                o.isanimating = false;

                o._raiseEvent("0");
              });
              s.call(o);
            } else {
              c.css("opacity", 1);

              if (b) {
                c.css("margin-top", n);
              } else {
                c.css("margin-top", -n);
              }

              s.call(o);

              if (b) {
                c.animate({
                  "margin-top": 0
                }, i.openDelay, function () {
                  a.data(document.body, "openedJQXButtonParent", o);
                  a.data(document.body, "openedJQXButton" + o.element.id, c);
                  o.ishiding = false;
                  o.isanimating = false;

                  o._raiseEvent("0");
                });
              } else {
                c.animate({
                  "margin-top": 0
                }, i.openDelay, function () {
                  a.data(document.body, "openedJQXButtonParent", o);
                  a.data(document.body, "openedJQXButton" + o.element.id, c);
                  o.ishiding = false;
                  o.isanimating = false;

                  o._raiseEvent("0");
                });
              }
            }
          }

          if (!b) {
            i.host.addClass(i.toThemeProperty("jqx-rc-b-expanded"));
            i.container.addClass(i.toThemeProperty("jqx-rc-t-expanded"));
          } else {
            i.host.addClass(i.toThemeProperty("jqx-rc-t-expanded"));
            i.container.addClass(i.toThemeProperty("jqx-rc-b-expanded"));
          }

          if (i.focusable) {
            i.firstDiv.focus();
            setTimeout(function () {
              o.firstDiv.focus();
            }, 10);
          }

          i.container.addClass(i.toThemeProperty("jqx-fill-state-focus"));
          i.host.addClass(o.toThemeProperty("jqx-dropdownlist-state-focus"));
          i.host.addClass(o.toThemeProperty("jqx-fill-state-focus"));
        },
        close: function close() {
          a.jqx.aria(this, "aria-expanded", false);
          var g = this;
          var e = g.popupContent;
          var d = g.container;
          var f = this;

          f._raiseEvent("3");

          var c = false;

          if (a.jqx.browser.msie && a.jqx.browser.version < 8) {
            c = true;
          }

          if (!g.isOpened()) {
            return;
          }

          a.data(document.body, "openedJQXButton" + g.element.id, null);

          if (g.animationType == "none") {
            g.container.css("visibility", "hidden");

            if (c) {
              g.container.css("display", "none");
            }
          } else {
            if (!f.ishiding) {
              f.isanimating = true;
              e.stop();
              var b = e.outerHeight();
              e.css("margin-top", 0);
              var h = -b;

              if (parseInt(g.container.coord().top) < parseInt(g.host.coord().top)) {
                h = b;
              }

              if (g.animationType == "fade") {
                e.css({
                  opacity: 1
                });
                e.animate({
                  opacity: 0
                }, g.closeDelay, function () {
                  d.css("visibility", "hidden");
                  f.isanimating = false;
                  f.ishiding = false;

                  if (c) {
                    d.css("display", "none");
                  }
                });
              } else {
                e.animate({
                  "margin-top": h
                }, g.closeDelay, function () {
                  d.css("visibility", "hidden");
                  f.isanimating = false;
                  f.ishiding = false;

                  if (c) {
                    d.css("display", "none");
                  }
                });
              }
            }
          }

          g.ishiding = true;
          g.host.removeClass(g.toThemeProperty("jqx-dropdownlist-state-selected"));
          g.host.removeClass(g.toThemeProperty("jqx-fill-state-pressed"));
          g.arrow.removeClass(g.toThemeProperty("jqx-icon-arrow-down-selected"));
          g.host.removeClass(g.toThemeProperty("jqx-rc-b-expanded"));
          g.container.removeClass(g.toThemeProperty("jqx-rc-t-expanded"));
          g.host.removeClass(g.toThemeProperty("jqx-rc-t-expanded"));
          g.container.removeClass(g.toThemeProperty("jqx-rc-b-expanded"));
          g.container.removeClass(g.toThemeProperty("jqx-fill-state-focus"));
          g.host.removeClass(g.toThemeProperty("jqx-dropdownlist-state-focus"));
          g.host.removeClass(g.toThemeProperty("jqx-fill-state-focus"));

          g._raiseEvent("1");
        },
        closeOpenedDropDown: function closeOpenedDropDown(e) {
          var c = e.data.me;
          var b = a(e.target);

          if (a(e.target).ischildof(e.data.me.host)) {
            return true;
          }

          if (a(e.target).ischildof(e.data.me.popupContent)) {
            return true;
          }

          var f = c;
          var d = false;
          a.each(b.parents(), function () {
            if (this.className != "undefined") {
              if (this.className.indexOf && this.className.indexOf("dropDownButton") != -1) {
                d = true;
                return false;
              }

              if (this.className.indexOf && this.className.indexOf("jqx-popup") != -1) {
                d = true;
                return false;
              }
            }
          });

          if (!d) {
            c.close();
          }

          return true;
        },
        refresh: function refresh() {
          var b = this;

          b._arrange();
        },
        _arrange: function _arrange() {
          var g = this;
          var f = parseInt(g.host.width());
          var b = parseInt(g.host.height());
          var e = g.arrowSize;
          var d = g.arrowSize;
          var h = 3;
          var c = f - d - 2 * h;

          if (c > 0) {
            g.dropDownButtonContent[0].style.width = c + "px";
          }

          g.dropDownButtonContent[0].style.height = parseInt(b) + "px";
          g.dropDownButtonContent[0].style.left = "0px";
          g.dropDownButtonContent[0].style.top = "0px";
          g.dropDownButtonArrow[0].style.width = parseInt(d) + "px";
          g.dropDownButtonArrow[0].style.height = parseInt(b) + "px";

          if (g.rtl) {
            g.dropDownButtonArrow.css("float", "left");
            g.dropDownButtonContent.css("float", "right");
            g.dropDownButtonContent.css("left", -h);
          }

          if (g.dropDownWidth != null) {
            if (g.dropDownWidth.toString().indexOf("%") >= 0) {
              var f = parseInt(g.dropDownWidth) * g.host.width() / 100;
              g.container.width(f);
            } else {
              g.container.width(g.dropDownWidth);
            }
          }

          if (g.dropDownHeight != null) {
            g.container.height(g.dropDownHeight);
          }
        },
        destroy: function destroy() {
          a.jqx.utilities.resize(this.host, null, true);
          var b = this;

          if (b.interval) {
            clearInterval(b.interval);
          }

          b.removeHandler(b.dropDownButtonWrapper, "selectstart");
          b.removeHandler(b.dropDownButtonWrapper, "mousedown");
          b.removeHandler(b.host, "keydown");
          b.host.removeClass();
          b.removeHandler(a(document), "mousedown." + b.element.id, b.closeOpenedDropDown);
          b.host.remove();
          b.container.remove();
        },
        _raiseEvent: function _raiseEvent(h, c) {
          var g = this;

          if (c == undefined) {
            c = {
              owner: null
            };
          }

          if (h == 2 && !g.contentInitialized) {
            if (g.initContent) {
              g.initContent();
              g.contentInitialized = true;
            }
          }

          var d = g.events[h];
          var e = c;
          e.owner = this;
          var f = new a.Event(d);
          f.owner = this;

          if (h == 2 || h == 3 || h == 4) {
            f.args = c;
          }

          var b = g.host.trigger(f);
          return b;
        },
        resize: function resize(c, b) {
          var d = this;
          d.width = c;
          d.height = b;

          d._setSize();

          d._arrange();
        },
        propertiesChangedHandler: function propertiesChangedHandler(b, c, d) {
          if (d.width && d.height && Object.keys(d).length == 2) {
            b._setSize();

            b._arrange();

            b.close();
          }
        },
        propertyChangedHandler: function propertyChangedHandler(b, c, f, e) {
          var d = this;

          if (d.isInitialized == undefined || d.isInitialized == false) {
            return;
          }

          if (b.batchUpdate && b.batchUpdate.width && b.batchUpdate.height && Object.keys(b.batchUpdate).length == 2) {
            return;
          }

          if (c === "dropDownVerticalAlignment") {
            b.close();
          }

          if (c == "template") {
            b.host.removeClass(b.toThemeProperty("jqx-" + f + ""));
            b.host.addClass(b.toThemeProperty("jqx-" + b.template + ""));
          }

          if (c == "rtl") {
            if (e) {
              b.dropDownButtonArrow.css("float", "left");
              b.dropDownButtonContent.css("float", "right");
            } else {
              b.dropDownButtonArrow.css("float", "right");
              b.dropDownButtonContent.css("float", "left");
            }
          }

          if (c == "autoOpen") {
            b.render();
          }

          if (c == "theme" && e != null) {
            a.jqx.utilities.setTheme(f, e, b.host);
          }

          if (c == "width" || c == "height") {
            b._setSize();

            b._arrange();
          }
        }
      });
    })(jqxBaseFramework);
    /***/

  }
}]);
//# sourceMappingURL=0-es5.81f11f7cbf2887762bab.js.map