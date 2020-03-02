function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-search-search-module"], {
  /***/
  "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdatatable.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdatatable.js ***!
    \*********************************************************************************************/

  /*! exports provided: jqxDataTableComponent, jqxDataTableModule */

  /***/
  function node_modulesJqwidgetsFrameworkJqwidgetsNgFesm2015JqwidgetsNgJqxdatatableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jqxDataTableComponent", function () {
      return jqxDataTableComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jqxDataTableModule", function () {
      return jqxDataTableModule;
    });
    /* harmony import */


    var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../jqwidgets/jqxcore */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxcore.js");
    /* harmony import */


    var _jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxcore__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jqwidgets/jqxdata */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxdata.js");
    /* harmony import */


    var _jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxdata__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _jqwidgets_jqxdata_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../jqwidgets/jqxdata.export */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxdata.export.js");
    /* harmony import */


    var _jqwidgets_jqxdata_export__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxdata_export__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../jqwidgets/jqxbuttons */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxbuttons.js");
    /* harmony import */


    var _jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxbuttons__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _jqwidgets_jqxcheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../jqwidgets/jqxcheckbox */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxcheckbox.js");
    /* harmony import */


    var _jqwidgets_jqxcheckbox__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxcheckbox__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _jqwidgets_jqxtooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../jqwidgets/jqxtooltip */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxtooltip.js");
    /* harmony import */


    var _jqwidgets_jqxtooltip__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxtooltip__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../jqwidgets/jqxscrollbar */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxscrollbar.js");
    /* harmony import */


    var _jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxscrollbar__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../jqwidgets/jqxlistbox */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxlistbox.js");
    /* harmony import */


    var _jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxlistbox__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _jqwidgets_jqxcombobox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../jqwidgets/jqxcombobox */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxcombobox.js");
    /* harmony import */


    var _jqwidgets_jqxcombobox__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxcombobox__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _jqwidgets_jqxnumberinput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../jqwidgets/jqxnumberinput */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxnumberinput.js");
    /* harmony import */


    var _jqwidgets_jqxnumberinput__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxnumberinput__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _jqwidgets_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../jqwidgets/jqxdropdownlist */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxdropdownlist.js");
    /* harmony import */


    var _jqwidgets_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _jqwidgets_jqxdatatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../jqwidgets/jqxdatatable */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxdatatable.js");
    /* harmony import */


    var _jqwidgets_jqxdatatable__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(_jqwidgets_jqxdatatable__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); /// <reference path="../../jqwidgets.d.ts" />


    var jqxDataTableComponent =
    /*#__PURE__*/
    function () {
      function jqxDataTableComponent(containerElement) {
        _classCallCheck(this, jqxDataTableComponent);

        this.autoCreate = true;
        this.properties = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'groups', 'groupsRenderer', 'height', 'initRowDetails', 'incrementalSearch', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showToolbar', 'showStatusbar', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'serverProcessing', 'showHeader', 'theme', 'toolbarHeight', 'width']; // jqxDataTableComponent events

        this.onBindingComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onCellBeginEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onCellEndEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onCellValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onColumnResized = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onColumnReordered = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onPageSizeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onRowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onRowDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onRowUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onRowBeginEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onRowEndEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onRowExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.onRowCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.elementRef = containerElement;
      }

      _createClass(jqxDataTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var children = JQXLite(this.elementRef.nativeElement.children).find('tr');
          var html = '';
          var options = {};

          if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            var result = JQXLite.jqx.parseSourceTag(this.container);

            if (this['attrColumns'] !== undefined) {
              ;
              options['source'] = result.source;
            } else {
              options['source'] = result.source;
              options['columns'] = result.columns;
            }
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
              var columns = this.host.jqxGrid('columns');

              if (columns.length === 0) {
                this.host.jqxGrid({
                  source: result.source,
                  columns: result.columns
                });
              } else {
                this.host.jqxGrid({
                  source: result.source
                });
              }
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
                    areEqual = this.arraysEqual(this[attrName], this.host.jqxDataTable(this.properties[i]));
                  }

                  if (areEqual) {
                    return false;
                  }

                  this.host.jqxDataTable(this.properties[i], this[attrName]);
                  continue;
                }

                if (this[attrName] !== this.host.jqxDataTable(this.properties[i])) {
                  this.host.jqxDataTable(this.properties[i], this[attrName]);
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

          this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDataTable', options);
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
          this.host.jqxDataTable('setOptions', options);
        } // jqxDataTableComponent properties

      }, {
        key: "altRows",
        value: function altRows(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('altRows', arg);
          } else {
            return this.host.jqxDataTable('altRows');
          }
        }
      }, {
        key: "autoRowHeight",
        value: function autoRowHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('autoRowHeight', arg);
          } else {
            return this.host.jqxDataTable('autoRowHeight');
          }
        }
      }, {
        key: "aggregatesHeight",
        value: function aggregatesHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('aggregatesHeight', arg);
          } else {
            return this.host.jqxDataTable('aggregatesHeight');
          }
        }
      }, {
        key: "autoShowLoadElement",
        value: function autoShowLoadElement(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('autoShowLoadElement', arg);
          } else {
            return this.host.jqxDataTable('autoShowLoadElement');
          }
        }
      }, {
        key: "columnsHeight",
        value: function columnsHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('columnsHeight', arg);
          } else {
            return this.host.jqxDataTable('columnsHeight');
          }
        }
      }, {
        key: "columns",
        value: function columns(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('columns', arg);
          } else {
            return this.host.jqxDataTable('columns');
          }
        }
      }, {
        key: "columnGroups",
        value: function columnGroups(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('columnGroups', arg);
          } else {
            return this.host.jqxDataTable('columnGroups');
          }
        }
      }, {
        key: "columnsResize",
        value: function columnsResize(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('columnsResize', arg);
          } else {
            return this.host.jqxDataTable('columnsResize');
          }
        }
      }, {
        key: "columnsReorder",
        value: function columnsReorder(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('columnsReorder', arg);
          } else {
            return this.host.jqxDataTable('columnsReorder');
          }
        }
      }, {
        key: "disabled",
        value: function disabled(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('disabled', arg);
          } else {
            return this.host.jqxDataTable('disabled');
          }
        }
      }, {
        key: "editable",
        value: function editable(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('editable', arg);
          } else {
            return this.host.jqxDataTable('editable');
          }
        }
      }, {
        key: "editSettings",
        value: function editSettings(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('editSettings', arg);
          } else {
            return this.host.jqxDataTable('editSettings');
          }
        }
      }, {
        key: "exportSettings",
        value: function exportSettings(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('exportSettings', arg);
          } else {
            return this.host.jqxDataTable('exportSettings');
          }
        }
      }, {
        key: "enableHover",
        value: function enableHover(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('enableHover', arg);
          } else {
            return this.host.jqxDataTable('enableHover');
          }
        }
      }, {
        key: "enableBrowserSelection",
        value: function enableBrowserSelection(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('enableBrowserSelection', arg);
          } else {
            return this.host.jqxDataTable('enableBrowserSelection');
          }
        }
      }, {
        key: "filterable",
        value: function filterable(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('filterable', arg);
          } else {
            return this.host.jqxDataTable('filterable');
          }
        }
      }, {
        key: "filterHeight",
        value: function filterHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('filterHeight', arg);
          } else {
            return this.host.jqxDataTable('filterHeight');
          }
        }
      }, {
        key: "filterMode",
        value: function filterMode(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('filterMode', arg);
          } else {
            return this.host.jqxDataTable('filterMode');
          }
        }
      }, {
        key: "groups",
        value: function groups(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('groups', arg);
          } else {
            return this.host.jqxDataTable('groups');
          }
        }
      }, {
        key: "groupsRenderer",
        value: function groupsRenderer(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('groupsRenderer', arg);
          } else {
            return this.host.jqxDataTable('groupsRenderer');
          }
        }
      }, {
        key: "height",
        value: function height(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('height', arg);
          } else {
            return this.host.jqxDataTable('height');
          }
        }
      }, {
        key: "initRowDetails",
        value: function initRowDetails(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('initRowDetails', arg);
          } else {
            return this.host.jqxDataTable('initRowDetails');
          }
        }
      }, {
        key: "incrementalSearch",
        value: function incrementalSearch(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('incrementalSearch', arg);
          } else {
            return this.host.jqxDataTable('incrementalSearch');
          }
        }
      }, {
        key: "localization",
        value: function localization(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('localization', arg);
          } else {
            return this.host.jqxDataTable('localization');
          }
        }
      }, {
        key: "pagerHeight",
        value: function pagerHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('pagerHeight', arg);
          } else {
            return this.host.jqxDataTable('pagerHeight');
          }
        }
      }, {
        key: "pageSize",
        value: function pageSize(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('pageSize', arg);
          } else {
            return this.host.jqxDataTable('pageSize');
          }
        }
      }, {
        key: "pageSizeOptions",
        value: function pageSizeOptions(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('pageSizeOptions', arg);
          } else {
            return this.host.jqxDataTable('pageSizeOptions');
          }
        }
      }, {
        key: "pageable",
        value: function pageable(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('pageable', arg);
          } else {
            return this.host.jqxDataTable('pageable');
          }
        }
      }, {
        key: "pagerPosition",
        value: function pagerPosition(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('pagerPosition', arg);
          } else {
            return this.host.jqxDataTable('pagerPosition');
          }
        }
      }, {
        key: "pagerMode",
        value: function pagerMode(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('pagerMode', arg);
          } else {
            return this.host.jqxDataTable('pagerMode');
          }
        }
      }, {
        key: "pagerButtonsCount",
        value: function pagerButtonsCount(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('pagerButtonsCount', arg);
          } else {
            return this.host.jqxDataTable('pagerButtonsCount');
          }
        }
      }, {
        key: "pagerRenderer",
        value: function pagerRenderer(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('pagerRenderer', arg);
          } else {
            return this.host.jqxDataTable('pagerRenderer');
          }
        }
      }, {
        key: "ready",
        value: function ready(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('ready', arg);
          } else {
            return this.host.jqxDataTable('ready');
          }
        }
      }, {
        key: "rowDetails",
        value: function rowDetails(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('rowDetails', arg);
          } else {
            return this.host.jqxDataTable('rowDetails');
          }
        }
      }, {
        key: "renderToolbar",
        value: function renderToolbar(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('renderToolbar', arg);
          } else {
            return this.host.jqxDataTable('renderToolbar');
          }
        }
      }, {
        key: "renderStatusBar",
        value: function renderStatusBar(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('renderStatusBar', arg);
          } else {
            return this.host.jqxDataTable('renderStatusBar');
          }
        }
      }, {
        key: "rendering",
        value: function rendering(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('rendering', arg);
          } else {
            return this.host.jqxDataTable('rendering');
          }
        }
      }, {
        key: "rendered",
        value: function rendered(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('rendered', arg);
          } else {
            return this.host.jqxDataTable('rendered');
          }
        }
      }, {
        key: "rtl",
        value: function rtl(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('rtl', arg);
          } else {
            return this.host.jqxDataTable('rtl');
          }
        }
      }, {
        key: "source",
        value: function source(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('source', arg);
          } else {
            return this.host.jqxDataTable('source');
          }
        }
      }, {
        key: "sortable",
        value: function sortable(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('sortable', arg);
          } else {
            return this.host.jqxDataTable('sortable');
          }
        }
      }, {
        key: "showAggregates",
        value: function showAggregates(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('showAggregates', arg);
          } else {
            return this.host.jqxDataTable('showAggregates');
          }
        }
      }, {
        key: "showToolbar",
        value: function showToolbar(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('showToolbar', arg);
          } else {
            return this.host.jqxDataTable('showToolbar');
          }
        }
      }, {
        key: "showStatusbar",
        value: function showStatusbar(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('showStatusbar', arg);
          } else {
            return this.host.jqxDataTable('showStatusbar');
          }
        }
      }, {
        key: "statusBarHeight",
        value: function statusBarHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('statusBarHeight', arg);
          } else {
            return this.host.jqxDataTable('statusBarHeight');
          }
        }
      }, {
        key: "scrollBarSize",
        value: function scrollBarSize(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('scrollBarSize', arg);
          } else {
            return this.host.jqxDataTable('scrollBarSize');
          }
        }
      }, {
        key: "selectionMode",
        value: function selectionMode(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('selectionMode', arg);
          } else {
            return this.host.jqxDataTable('selectionMode');
          }
        }
      }, {
        key: "serverProcessing",
        value: function serverProcessing(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('serverProcessing', arg);
          } else {
            return this.host.jqxDataTable('serverProcessing');
          }
        }
      }, {
        key: "showHeader",
        value: function showHeader(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('showHeader', arg);
          } else {
            return this.host.jqxDataTable('showHeader');
          }
        }
      }, {
        key: "theme",
        value: function theme(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('theme', arg);
          } else {
            return this.host.jqxDataTable('theme');
          }
        }
      }, {
        key: "toolbarHeight",
        value: function toolbarHeight(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('toolbarHeight', arg);
          } else {
            return this.host.jqxDataTable('toolbarHeight');
          }
        }
      }, {
        key: "width",
        value: function width(arg) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          if (arg !== undefined) {
            this.host.jqxDataTable('width', arg);
          } else {
            return this.host.jqxDataTable('width');
          }
        } // jqxDataTableComponent functions

      }, {
        key: "addRow",
        value: function addRow(rowIndex, rowData, rowPosition) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('addRow', rowIndex, rowData, rowPosition);
        }
      }, {
        key: "addFilter",
        value: function addFilter(dataField, filerGroup) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('addFilter', dataField, filerGroup);
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('applyFilters');
        }
      }, {
        key: "beginUpdate",
        value: function beginUpdate() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('beginUpdate');
        }
      }, {
        key: "beginRowEdit",
        value: function beginRowEdit(rowIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('beginRowEdit', rowIndex);
        }
      }, {
        key: "beginCellEdit",
        value: function beginCellEdit(rowIndex, dataField) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('beginCellEdit', rowIndex, dataField);
        }
      }, {
        key: "clearSelection",
        value: function clearSelection() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('clearSelection');
        }
      }, {
        key: "clearFilters",
        value: function clearFilters() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('clearFilters');
        }
      }, {
        key: "clear",
        value: function clear() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('clear');
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('destroy');
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(rowIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('deleteRow', rowIndex);
        }
      }, {
        key: "endUpdate",
        value: function endUpdate() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('endUpdate');
        }
      }, {
        key: "ensureRowVisible",
        value: function ensureRowVisible(rowIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('ensureRowVisible', rowIndex);
        }
      }, {
        key: "endRowEdit",
        value: function endRowEdit(rowIndex, cancelChanges) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('endRowEdit', rowIndex, cancelChanges);
        }
      }, {
        key: "endCellEdit",
        value: function endCellEdit(rowIndex, dataField) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('endCellEdit', rowIndex, dataField);
        }
      }, {
        key: "exportData",
        value: function exportData(exportDataType) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDataTable('exportData', exportDataType);
        }
      }, {
        key: "focus",
        value: function focus() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('focus');
        }
      }, {
        key: "getColumnProperty",
        value: function getColumnProperty(dataField, propertyName) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDataTable('getColumnProperty', dataField, propertyName);
        }
      }, {
        key: "goToPage",
        value: function goToPage(pageIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('goToPage', pageIndex);
        }
      }, {
        key: "goToPrevPage",
        value: function goToPrevPage() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('goToPrevPage');
        }
      }, {
        key: "goToNextPage",
        value: function goToNextPage() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('goToNextPage');
        }
      }, {
        key: "getSelection",
        value: function getSelection() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDataTable('getSelection');
        }
      }, {
        key: "getRows",
        value: function getRows() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDataTable('getRows');
        }
      }, {
        key: "getView",
        value: function getView() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDataTable('getView');
        }
      }, {
        key: "getCellValue",
        value: function getCellValue(rowIndex, dataField) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDataTable('getCellValue', rowIndex, dataField);
        }
      }, {
        key: "hideColumn",
        value: function hideColumn(dataField) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('hideColumn', dataField);
        }
      }, {
        key: "hideDetails",
        value: function hideDetails(rowIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('hideDetails', rowIndex);
        }
      }, {
        key: "isBindingCompleted",
        value: function isBindingCompleted() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDataTable('isBindingCompleted');
        }
      }, {
        key: "lockRow",
        value: function lockRow(rowIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('lockRow', rowIndex);
        }
      }, {
        key: "refresh",
        value: function refresh() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('refresh');
        }
      }, {
        key: "render",
        value: function render() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('render');
        }
      }, {
        key: "removeFilter",
        value: function removeFilter(dataField) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('removeFilter', dataField);
        }
      }, {
        key: "scrollOffset",
        value: function scrollOffset(top, left) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('scrollOffset', top, left);
        }
      }, {
        key: "setColumnProperty",
        value: function setColumnProperty(dataField, propertyName, propertyValue) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('setColumnProperty', dataField, propertyName, propertyValue);
        }
      }, {
        key: "showColumn",
        value: function showColumn(dataField) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('showColumn', dataField);
        }
      }, {
        key: "selectRow",
        value: function selectRow(rowIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('selectRow', rowIndex);
        }
      }, {
        key: "showDetails",
        value: function showDetails(rowIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('showDetails', rowIndex);
        }
      }, {
        key: "setCellValue",
        value: function setCellValue(rowIndex, dataField, value) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('setCellValue', rowIndex, dataField, value);
        }
      }, {
        key: "sortBy",
        value: function sortBy(dataField, sortOrder) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('sortBy', dataField, sortOrder);
        }
      }, {
        key: "updating",
        value: function updating() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          return this.host.jqxDataTable('updating');
        }
      }, {
        key: "updateBoundData",
        value: function updateBoundData() {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('updateBoundData');
        }
      }, {
        key: "unselectRow",
        value: function unselectRow(rowIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('unselectRow', rowIndex);
        }
      }, {
        key: "updateRow",
        value: function updateRow(rowIndex, rowData) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('updateRow', rowIndex, rowData);
        }
      }, {
        key: "unlockRow",
        value: function unlockRow(rowIndex) {
          if (this.autoCreate && !this.host) {
            this.createComponent();
          }

          this.host.jqxDataTable('unlockRow', rowIndex);
        }
      }, {
        key: "__wireEvents__",
        value: function __wireEvents__() {
          var _this = this;

          this.host.on('bindingComplete', function (eventData) {
            _this.onBindingComplete.emit(eventData);
          });
          this.host.on('cellBeginEdit', function (eventData) {
            _this.onCellBeginEdit.emit(eventData);
          });
          this.host.on('cellEndEdit', function (eventData) {
            _this.onCellEndEdit.emit(eventData);
          });
          this.host.on('cellValueChanged', function (eventData) {
            _this.onCellValueChanged.emit(eventData);
          });
          this.host.on('columnResized', function (eventData) {
            _this.onColumnResized.emit(eventData);
          });
          this.host.on('columnReordered', function (eventData) {
            _this.onColumnReordered.emit(eventData);
          });
          this.host.on('sort', function (eventData) {
            _this.onSort.emit(eventData);
          });
          this.host.on('filter', function (eventData) {
            _this.onFilter.emit(eventData);
          });
          this.host.on('pageChanged', function (eventData) {
            _this.onPageChanged.emit(eventData);
          });
          this.host.on('pageSizeChanged', function (eventData) {
            _this.onPageSizeChanged.emit(eventData);
          });
          this.host.on('rowClick', function (eventData) {
            _this.onRowClick.emit(eventData);
          });
          this.host.on('rowDoubleClick', function (eventData) {
            _this.onRowDoubleClick.emit(eventData);
          });
          this.host.on('rowSelect', function (eventData) {
            _this.onRowSelect.emit(eventData);
          });
          this.host.on('rowUnselect', function (eventData) {
            _this.onRowUnselect.emit(eventData);
          });
          this.host.on('rowBeginEdit', function (eventData) {
            _this.onRowBeginEdit.emit(eventData);
          });
          this.host.on('rowEndEdit', function (eventData) {
            _this.onRowEndEdit.emit(eventData);
          });
          this.host.on('rowExpand', function (eventData) {
            _this.onRowExpand.emit(eventData);
          });
          this.host.on('rowCollapse', function (eventData) {
            _this.onRowCollapse.emit(eventData);
          });
        }
      }]);

      return jqxDataTableComponent;
    }(); //jqxDataTableComponent


    jqxDataTableComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('altRows'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrAltRows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('autoRowHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrAutoRowHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('aggregatesHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Number)], jqxDataTableComponent.prototype, "attrAggregatesHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('autoShowLoadElement'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrAutoShowLoadElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('columnsHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Number)], jqxDataTableComponent.prototype, "attrColumnsHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('columns'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Array)], jqxDataTableComponent.prototype, "attrColumns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('columnGroups'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Array)], jqxDataTableComponent.prototype, "attrColumnGroups", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('columnsResize'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrColumnsResize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('columnsReorder'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrColumnsReorder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('disabled'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('editable'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrEditable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('editSettings'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "attrEditSettings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('exportSettings'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "attrExportSettings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('enableHover'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrEnableHover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('enableBrowserSelection'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrEnableBrowserSelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('filterable'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrFilterable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('filterHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Number)], jqxDataTableComponent.prototype, "attrFilterHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('filterMode'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", String)], jqxDataTableComponent.prototype, "attrFilterMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('groups'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Array)], jqxDataTableComponent.prototype, "attrGroups", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('groupsRenderer'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Function)], jqxDataTableComponent.prototype, "attrGroupsRenderer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('initRowDetails'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Function)], jqxDataTableComponent.prototype, "attrInitRowDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('incrementalSearch'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrIncrementalSearch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('localization'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "attrLocalization", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('pagerHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Number)], jqxDataTableComponent.prototype, "attrPagerHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('pageSize'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Number)], jqxDataTableComponent.prototype, "attrPageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('pageSizeOptions'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Array)], jqxDataTableComponent.prototype, "attrPageSizeOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('pageable'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrPageable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('pagerPosition'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", String)], jqxDataTableComponent.prototype, "attrPagerPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('pagerMode'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", String)], jqxDataTableComponent.prototype, "attrPagerMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('pagerButtonsCount'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Number)], jqxDataTableComponent.prototype, "attrPagerButtonsCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('pagerRenderer'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Function)], jqxDataTableComponent.prototype, "attrPagerRenderer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('ready'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Function)], jqxDataTableComponent.prototype, "attrReady", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('rowDetails'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrRowDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('renderToolbar'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Function)], jqxDataTableComponent.prototype, "attrRenderToolbar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('renderStatusBar'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Function)], jqxDataTableComponent.prototype, "attrRenderStatusBar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('rendering'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Function)], jqxDataTableComponent.prototype, "attrRendering", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('rendered'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Function)], jqxDataTableComponent.prototype, "attrRendered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('rtl'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrRtl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('source'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "attrSource", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('sortable'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrSortable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('showAggregates'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrShowAggregates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('showToolbar'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrShowToolbar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('showStatusbar'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrShowStatusbar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('statusBarHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Number)], jqxDataTableComponent.prototype, "attrStatusBarHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('scrollBarSize'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "attrScrollBarSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('selectionMode'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", String)], jqxDataTableComponent.prototype, "attrSelectionMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('serverProcessing'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrServerProcessing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('showHeader'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "attrShowHeader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('theme'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", String)], jqxDataTableComponent.prototype, "attrTheme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('toolbarHeight'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Number)], jqxDataTableComponent.prototype, "attrToolbarHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('width'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "attrWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('height'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "attrHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"])('auto-create'), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Boolean)], jqxDataTableComponent.prototype, "autoCreate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onBindingComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onCellBeginEdit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onCellEndEdit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onCellValueChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onColumnResized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onColumnReordered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onPageChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onPageSizeChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onRowClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onRowDoubleClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onRowSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onRowUnselect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onRowBeginEdit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onRowEndEdit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onRowExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:type", Object)], jqxDataTableComponent.prototype, "onRowCollapse", void 0);
    jqxDataTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"])({
      selector: 'jqxDataTable',
      template: '<div><ng-content></ng-content></div>'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ElementRef"]])], jqxDataTableComponent);

    var jqxDataTableModule = function jqxDataTableModule() {
      _classCallCheck(this, jqxDataTableModule);
    };

    jqxDataTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_12__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
      imports: [],
      declarations: [jqxDataTableComponent],
      exports: [jqxDataTableComponent]
    })], jqxDataTableModule);
    /**
     * Generated bundle index. Do not edit.
     */

    /***/
  },

  /***/
  "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxdata.export.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxdata.export.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJqwidgetsFrameworkJqwidgetsNgJqwidgetsJqxdataExportJs(module, exports) {
    /*
    jQWidgets v9.0.0 (2020-Jan)
    Copyright (c) 2011-2020 jQWidgets.
    License: https://jqwidgets.com/license/
    */

    /* eslint-disable */
    (function (b) {
      var a = function () {
        var c = {},
            u,
            q,
            j,
            l,
            g,
            h,
            o,
            p;

        function d(C, B, x, A, y, v, w) {
          var z = this;

          if (!z) {
            z = window.jqx;
          }

          z.hierarchy = y;
          z.exportFormat = v;
          z.filename = w;
          C.beginFile(w);
          n(C);
          k(C);
          C.endFile(w);
          return C.getFile();
        }

        function n(z) {
          var x = true;
          b.each(q, function () {
            if (this.hidden) {
              x = false;
              return false;
            }
          });
          z.beginHeader(x);
          var w = 0;

          for (var v in q) {
            if (q[v].columnsDataFields) {
              v = q[v].columnsDataFields[w].displayfield;
            }

            var y = m(v, q[v]);
            z.appendHeaderCell(q[v], v, y, x, w);
            w++;
          }

          z.endHeader(x);
        }

        function k(y) {
          var x = this;

          if (!x) {
            x = window.jqx;
          }

          y.beginBody();

          if (x.hierarchy) {
            var w = function w(A) {
              for (var z = 0; z < A.length; z += 1) {
                if (A[z] !== undefined) {
                  y.hierarchy = true;
                  y.beginRow(A[z].level);
                  e(y, A[z], z, true);

                  if (A[z].records) {
                    y.beginRows(A[z].level);
                    w(A[z].records);
                    y.endRows(A[z].level);
                  }

                  y.endRow(A[z].level);
                }
              }
            };

            w(u);
            y.endBody();
            return;
          }

          for (var v = 0; v < u.length; v += 1) {
            if (u[v] !== undefined) {
              e(y, u[v], v);
            }
          }

          y.endBody();
        }

        function e(x, A, y, D) {
          var C = this;

          if (!C) {
            C = window.jqx;
          }

          var w;

          if (D != true) {
            x.beginRow();
          }

          var B = 0;

          for (var z in q) {
            if (q[z].columnsDataFields) {
              z = q[z].columnsDataFields[B].displayfield;
            }

            w = s(y, z);

            if (w) {
              if (w.level != undefined) {
                if (w.index - 1 > A.level && w.index - 1 < w.maxLevel) {
                  B++;
                  continue;
                }
              }

              if (w.maxLevel != undefined) {
                if (w.index - 1 == w.maxLevel) {
                  w = b.extend({}, w);
                  w.merge = w.maxLevel - A.level - 1;
                }
              }
            }

            if (A.level != undefined && A.label != undefined) {
              if (C.exportFormat === "xml" || C.exportFormat === "json") {
                var v = {};
                v.text = "group";
                x.appendBodyCell(A.label, v, w, A, B, "group");
                break;
              }
            }

            if (A.hasOwnProperty(z)) {
              x.appendBodyCell(A[z], q[z], w, A, B);
            } else {
              x.appendBodyCell("", q[z], w, A, B);
            }

            B++;
          }

          if (D != true) {
            x.endRow();
          }
        }

        function m(w, x) {
          if (x.style) {
            return j[x.style];
          }

          var v = t();

          if (v.length > 0) {
            return v[0].style;
          }

          return null;
        }

        function t() {
          if (!g) {
            g = new Array();
            b.each(j, function (v, w) {
              g[g.length] = {
                name: v,
                style: w
              };
            });
          }

          return g;
        }

        function s(A, z) {
          var B = q[z];

          if (B) {
            if (B.customCellStyles) {
              var x = B.customCellStyles[A];

              if (x) {
                return j[x];
              }
            }

            if (B.cellStyle) {
              if (B.cellAltStyle) {
                var w = A % 2;

                if (w == 0) {
                  return j[B.cellStyle];
                }

                return j[B.cellAltStyle];
              }

              return j[B.cellStyle];
            } else {
              var v = t();

              if (v.length > 0) {
                var w = A % (v.length - 1);
                var y = v[w + 1].style;
                return y;
              }
            }
          }

          return null;
        }

        function r(y, w, x) {
          var v = document.createElement("input");
          v.name = w;
          v.value = y;
          v.type = "hidden";
          x.appendChild(v);
          return v;
        }

        function f(x, v, w) {
          var y = document.createElement("textarea");
          y.name = v;
          y.value = x;
          w.appendChild(y);
          return y;
        }

        function i(w, z, y, v, A) {
          var x = document.createElement("form");
          r(w, "filename", x);
          r(z, "format", x);
          f(y, "content", x);

          if (v == undefined || v == "") {
            if (window && window.location.toString().indexOf("jqwidgets.com") >= 0) {
              v = "https://jqwidgets.com/export_server/dataexport.php";
            } else {
              v = "http://jquerygrid.net/export_server/dataexport.php";
            }
          }

          x.action = v;
          x.method = "post";

          if (A) {
            x.acceptCharset = A;
          }

          document.body.appendChild(x);
          return x;
        }

        l = function l(A, y, x, w, z, v) {
          if (!(this instanceof a)) {
            return new a(A, y, x, z, v);
          }

          u = A;
          q = y;
          j = x;

          this.exportTo = function (K, H, G, B) {
            K = K.toString().toLowerCase();
            var D = c[K];

            if (typeof D === "undefined") {
              throw "You can't export to " + K + " format.";
            }

            if (K === "pdf" && B == undefined) {
              var M = this.exportTo(K, H, K, "pdf");

              if (!b.jqx.pdfExport) {
                b.jqx.pdfExport = {
                  orientation: "portrait",
                  paperSize: "a4"
                };
              }

              var L = new pdfDataExport(b.jqx.pdfExport.orientation, "pt", b.jqx.pdfExport.paperSize);
              L.cellInitialize();
              var J = b(M).find("th");
              var I = b(M).find("tr");
              var N = 0;
              L.setFontSize(13 * 72 / 96);
              var F = 595;

              switch (b.jqx.pdfExport.paperSize) {
                case "legal":
                  var F = 612;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    F = 1008;
                  }

                  break;

                case "letter":
                  var F = 612;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    F = 792;
                  }

                  break;

                case "a3":
                  var F = 841;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    F = 1190;
                  }

                  break;

                case "a4":
                  var F = 595;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    F = 842;
                  }

                  break;

                case "a5":
                  var F = 420;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    F = 595;
                  }

                  break;
              }

              F -= 20;
              var E = 0;
              var C = [];
              b.each(J, function (O) {
                var P = parseInt(this.style.width);

                if (isNaN(P)) {
                  P = 25;
                }

                var Q = P * 72 / 96;
                C[O] = Q;
                E += Q;
              });

              if (J.length === 0) {
                b.each(I[0].cells, function (O) {
                  var P = parseInt(this.style.width);

                  if (isNaN(P)) {
                    P = F / I[0].cells.length;
                  }

                  var Q = P * 72 / 96;
                  C[O] = Q;
                  E += Q;
                });
              }

              if (E > F) {
                b.each(C, function (O) {
                  C[O] = C[O] / E * 100;
                  C[O] = C[O] * F / 100;
                });
              }

              b.each(J, function (P) {
                var T = C[P];
                var S = 25 * 72 / 96;
                var R = L.getTextDimensions(b(this).html());
                var Q = b(this).html();

                if (R.w + 3 > T) {
                  var O = L.splitTextToSize(Q, T - 3);
                  var U = O[0];

                  if (U.length > 3) {
                    Q = U.substring(0, U.length - 3) + "...";
                  } else {
                    Q = U.substring(0, 1) + "...";
                  }

                  var O = L.splitTextToSize(Q, T - 3);
                  var U = O[0];

                  if (U != Q) {
                    Q = U;
                  }
                }

                L.cell(10, 10, T, S, Q, N);
              });
              N++;
              b.each(I, function (V) {
                if (V === 0) {
                  return true;
                }

                var P = b(this).children();
                var Q = P.length > J.length && J.length > 0;

                if (Q) {
                  var Y = P.length - J.length;
                  var Z = "";
                  var X = C[0];
                  var U = 25 * 72 / 96;

                  for (var R = 0; R <= Y; R++) {
                    var O = P[R].innerHTML;

                    if (O === "+" || O === "-") {
                      O = O + " ";
                    }

                    if (O === "&nbsp;") {
                      O = "   ";
                    }

                    Z += O;
                  }

                  var T = L.getTextDimensions(Z);

                  if (T.w + 3 > X) {
                    var W = L.splitTextToSize(Z, X - 3);
                    var S = W[0];

                    if (S.length > 3) {
                      Z = S.substring(0, S.length - 3) + "...";
                    } else {
                      Z = S.substring(0, 1) + "...";
                    }

                    var W = L.splitTextToSize(Z, X - 3);
                    var S = W[0];

                    if (S != Z) {
                      Z = S;
                    }
                  }

                  L.cell(10, 10, X, U, Z, N);

                  for (var R = Y + 1; R < P.length; R++) {
                    var V = R - Y;
                    var X = C[V];
                    var U = 25 * 72 / 96;
                    var Z = b(P[R]).html();
                    var T = L.getTextDimensions(b(P[R]).html());

                    if (T.w + 3 > X) {
                      var W = L.splitTextToSize(Z, X - 3);
                      var S = W[0];

                      if (S.length > 3) {
                        Z = S.substring(0, S.length - 3) + "...";
                      } else {
                        Z = S.substring(0, 1) + "...";
                      }

                      var W = L.splitTextToSize(Z, X - 3);
                      var S = W[0];

                      if (S != Z) {
                        Z = S;
                      }
                    }

                    L.cell(10, 10, X, U, Z, N);
                  }

                  N++;
                  return true;
                }

                b.each(P, function (ab) {
                  var af = C[ab];
                  var ae = 25 * 72 / 96;
                  var ad = b(this).html();
                  var ac = L.getTextDimensions(b(this).html());

                  if (ac.w + 3 > af) {
                    var aa = L.splitTextToSize(ad, af - 3);
                    var ag = aa[0];

                    if (ag.length > 3) {
                      ad = ag.substring(0, ag.length - 3) + "...";
                    } else {
                      ad = ag.substring(0, 1) + "...";
                    }

                    var aa = L.splitTextToSize(ad, af - 3);
                    var ag = aa[0];

                    if (ag != ad) {
                      ad = ag;
                    }
                  }

                  L.cell(10, 10, af, ae, ad, N);
                });
                N++;
              });

              if (b.jqx.browser.msie && b.jqx.browser.version < 10) {
                throw new Error("PDF export requires a browser with HTML5 support");
                return;
              }

              return L;
            }

            return d(D, u, q, j, H, G, B);
          };

          this.exportToFile = function (L, B, O, F, I) {
            if (L === "pdf") {
              var N = this.exportTo(L, I, L, B);

              if (!b.jqx.pdfExport) {
                b.jqx.pdfExport = {
                  orientation: "portrait",
                  paperSize: "a4"
                };
              }

              var M = new pdfDataExport(b.jqx.pdfExport.orientation, "pt", b.jqx.pdfExport.paperSize);

              if (F == "utf-8" || F == "UTF-8") {
                M.setFont("courier", "normal");
              }

              M.cellInitialize();
              var K = b(N).find("th");
              var J = b(N).find("tr");
              var P = 0;
              M.setFontSize(13 * 72 / 96);
              var G = 595;

              switch (b.jqx.pdfExport.paperSize) {
                case "legal":
                  var G = 612;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    G = 1008;
                  }

                  break;

                case "letter":
                  var G = 612;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    G = 792;
                  }

                  break;

                case "a3":
                  var G = 841;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    G = 1190;
                  }

                  break;

                case "a4":
                  var G = 595;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    G = 842;
                  }

                  break;

                case "a5":
                  var G = 420;

                  if (b.jqx.pdfExport.orientation !== "portrait") {
                    G = 595;
                  }

                  break;
              }

              G -= 20;
              var E = 0;
              var C = [];
              b.each(K, function (Q) {
                var R = parseInt(this.style.width);

                if (isNaN(R)) {
                  R = 25;
                }

                var S = R * 72 / 96;
                C[Q] = S;
                E += S;
              });

              if (K.length === 0) {
                b.each(J[0].cells, function (Q) {
                  var R = parseInt(this.style.width);

                  if (isNaN(R)) {
                    R = G / J[0].cells.length;
                  }

                  var S = R * 72 / 96;
                  C[Q] = S;
                  E += S;
                });
              }

              if (E > G) {
                b.each(C, function (Q) {
                  C[Q] = C[Q] / E * 100;
                  C[Q] = C[Q] * G / 100;
                });
              }

              b.each(K, function (R) {
                var V = C[R];
                var U = 25 * 72 / 96;
                var T = M.getTextDimensions(b(this).html());
                var S = b(this).html();

                if (T.w + 3 > V) {
                  var Q = M.splitTextToSize(S, V - 3);
                  var W = Q[0];

                  if (W.length > 3) {
                    S = W.substring(0, W.length - 3) + "...";
                  } else {
                    S = W.substring(0, 1) + "...";
                  }

                  var Q = M.splitTextToSize(S, V - 3);
                  var W = Q[0];

                  if (W != S) {
                    S = W;
                  }
                }

                M.cell(10, 10, V, U, S, P);
              });
              P++;
              b.each(J, function (X) {
                if (X === 0) {
                  return true;
                }

                var R = b(this).children();
                var S = R.length > K.length && K.length > 0;

                if (S) {
                  var aa = R.length - K.length;
                  var ab = "";
                  var Z = C[0];
                  var W = 25 * 72 / 96;

                  for (var T = 0; T <= aa; T++) {
                    var Q = R[T].innerHTML;

                    if (Q === "+" || Q === "-") {
                      Q = Q + " ";
                    }

                    if (Q === "&nbsp;") {
                      Q = "   ";
                    }

                    ab += Q;
                  }

                  var V = M.getTextDimensions(ab);

                  if (V.w + 3 > Z) {
                    var Y = M.splitTextToSize(ab, Z - 3);
                    var U = Y[0];

                    if (U.length > 3) {
                      ab = U.substring(0, U.length - 3) + "...";
                    } else {
                      ab = U.substring(0, 1) + "...";
                    }

                    var Y = M.splitTextToSize(ab, Z - 3);
                    var U = Y[0];

                    if (U != ab) {
                      ab = U;
                    }
                  }

                  M.cell(10, 10, Z, W, ab, P);

                  for (var T = aa + 1; T < R.length; T++) {
                    var X = T - aa;
                    var Z = C[X];
                    var W = 25 * 72 / 96;
                    var ab = b(R[T]).html();

                    if (ab === "&nbsp;") {
                      ab = "   ";
                    }

                    var V = M.getTextDimensions(b(R[T]).html());

                    if (V.w + 3 > Z) {
                      var Y = M.splitTextToSize(ab, Z - 3);
                      var U = Y[0];

                      if (U.length > 3) {
                        ab = U.substring(0, U.length - 3) + "...";
                      } else {
                        ab = U.substring(0, 1) + "...";
                      }

                      var Y = M.splitTextToSize(ab, Z - 3);
                      var U = Y[0];

                      if (U != ab) {
                        ab = U;
                      }
                    }

                    M.cell(10, 10, Z, W, ab, P);
                  }

                  P++;
                  return true;
                }

                b.each(R, function (ad) {
                  var ah = C[ad];
                  var ag = 25 * 72 / 96;
                  var af = b(this).html();

                  if (af === "&nbsp;") {
                    af = "   ";
                  }

                  var ae = M.getTextDimensions(b(this).html());

                  if (ae.w + 3 > ah) {
                    var ac = M.splitTextToSize(af, ah - 3);
                    var ai = ac[0];

                    if (ai.length > 3) {
                      af = ai.substring(0, ai.length - 3) + "...";
                    } else {
                      af = ai.substring(0, 1) + "...";
                    }

                    var ac = M.splitTextToSize(af, ah - 3);
                    var ai = ac[0];

                    if (ai != af) {
                      af = ai;
                    }
                  }

                  M.cell(10, 10, ah, ag, af, P);
                });
                P++;
              });

              if (b.jqx.browser.msie && b.jqx.browser.version < 10) {
                throw new Error("PDF export requires a browser with HTML5 support");
                return;
              }

              M.save(B + ".pdf");
              return;
            }

            var H = this.exportTo(L, I, L, B),
                D = i(B, L, H, O, F);
            D.submit();
            document.body.removeChild(D);
          };

          this.exportToLocalFile = function (F, C, D, B) {
            var E = this.exportTo(F, D, B);
            document.location.href = "data:application/octet-stream;filename=" + C + "," + encodeURIComponent(E);
          };
        };

        l.extend = function (v, w) {
          if (w instanceof b.jqx.dataAdapter.DataExportModuleBase) {
            c[v] = w;
          } else {
            throw "The module " + v + " is not instance of DataExportModuleBase.";
          }
        };

        return l;
      }();

      b.jqx.dataAdapter.ArrayExporter = a;
    })(jqxBaseFramework);

    (function (b) {
      var a = function a() {
        this.formatData = function (f, e, c, h) {
          if (e === "date") {
            var d = "";

            if (typeof f === "string") {
              d = b.jqx.dataFormat.tryparsedate(f);
              f = d;
            }

            if (f === "" || f === null) {
              return "";
            }

            d = b.jqx.dataFormat.formatdate(f, c, h);

            if (d && d.toString() == "NaN" || d == null) {
              return "";
            }

            f = d;
          } else {
            if (e === "number" || e === "float" || e === "int" || e == "integer") {
              if (f === "" || f === null) {
                return "";
              }

              if (!isNaN(new Number(f))) {
                var g = b.jqx.dataFormat.formatnumber(f, c, h);

                if (g.toString() == "NaN") {
                  return "";
                } else {
                  f = g;
                }
              }
            } else {
              f = f;
            }
          }

          if (f === null) {
            return "";
          }

          return f;
        };

        this.getFormat = function (f) {
          var c = f ? f.formatString : "";
          var e = f ? f.localization : "";
          var d = "string";
          d = f ? f.type : "string";

          if (d == "number" || d == "float") {
            if (!c) {
              c = "f2";
            }
          }

          if (d == "int" || d == "integer") {
            if (!c) {
              c = "n0";
            }
          }

          if (d == "date") {
            if (!c) {
              c = "d";
            }
          }

          return {
            type: d,
            formatString: c,
            localization: e
          };
        };

        this.beginFile = function () {
          throw "Not implemented!";
        };

        this.beginHeader = function () {
          throw "Not implemented!";
        };

        this.appendHeaderCell = function () {
          throw "Not implemented!";
        };

        this.endHeader = function () {
          throw "Not implemented!";
        };

        this.beginBody = function () {
          throw "Not implemented!";
        };

        this.beginRow = function () {
          throw "Not implemented!";
        };

        this.beginRows = function () {
          throw "Not implemented!";
        };

        this.endRows = function () {
          throw "Not implemented!";
        };

        this.appendBodyCell = function () {
          throw "Not implemented!";
        };

        this.endRow = function () {
          throw "Not implemented!";
        };

        this.endBody = function () {
          throw "Not implemented!";
        };

        this.endFile = function () {
          throw "Not implemented!";
        };

        this.getFile = function () {
          throw "Not implemented!";
        };
      };

      b.jqx.dataAdapter.DataExportModuleBase = a;
    })(jqxBaseFramework);

    (function (d) {
      var c = function c(j) {
        var e, h, g;
        var l = 0;
        var i = this;

        this.beginFile = function () {
          e = "";
        };

        this.beginHeader = function () {};

        this.appendHeaderCell = function (q, r, p, m, n) {
          if (p) {
            if (p.level != undefined) {
              if (n < p.maxLevel) {
                return;
              } else {
                if (n === p.maxLevel) {
                  if (m) {
                    k(q.text);
                  }

                  for (var o = 0; o < p.maxLevel; o++) {
                    k("");
                  }

                  return;
                }
              }
            }
          }

          g = m;

          if (m) {
            k(q.text);
          }
        };

        this.endHeader = function () {
          this.endRow();
        };

        this.beginBody = function () {
          l = 0;
        };

        this.beginRow = function () {
          if (l > 0 || l == 0 && g) {
            e += "\n";
          }

          l++;
        };

        this.appendBodyCell = function (q, m, p, r, n) {
          if (p) {
            if (p.maxLevel != undefined) {
              if (n === p.maxLevel) {
                k(q, m);

                for (var o = 0; o < p.maxLevel - r.level - 1; o++) {
                  k("", m);
                }

                return;
              }
            }
          }

          k(q, m);
        };

        this.endRow = function () {
          e = e.substring(0, e.length - 1);
        };

        this.endBody = function () {};

        this.endFile = function () {};

        this.getFile = function () {
          return e;
        };

        function f(m, o) {
          if (o) {
            var n = i.getFormat(o);
            m = i.formatData(m, n.type, n.formatString, n.localization);
          }

          m = '"' + m + '"';
          return m;
        }

        function k(m, n) {
          m = f(m, n);
          e += m + j;
        }
      };

      c.prototype = new d.jqx.dataAdapter.DataExportModuleBase();

      var a = function a() {};

      a.prototype = new c(",");

      var b = function b() {};

      b.prototype = new c("\t");
      d.jqx.dataAdapter.ArrayExporter.extend("csv", new a());
      d.jqx.dataAdapter.ArrayExporter.extend("tsv", new b());
    })(jqxBaseFramework);

    (function (d) {
      var a = function a() {
        var i = false;
        var g;
        var h;
        var j = 0;

        this.setPDF = function () {
          i = true;
        };

        this.beginFile = function (k) {
          if (i || k == undefined) {
            g = '<table style="empty-cells: show;" cellspacing="0" cellpadding="2">';
          } else {
            g = '<html>\n\t<head>\n\t\t<title></title>\n\t\t<meta http-equiv=Content-type content="text/html; charset=UTF-8">\n\t</head>\n\t<body>\n\t\t<table style="empty-cells: show;" cellspacing="0" cellpadding="2">';
          }
        };

        this.beginHeader = function () {
          if (i) {
            g += "\n\t<thead><tr>";
          } else {
            g += "\n\t\t\t<thead>";
          }
        };

        this.appendHeaderCell = function (m, n, l, k) {
          h = k;

          if (!k) {
            return;
          }

          if (i) {
            g += '\n\t\t\t\t<th style="' + f(l) + '">' + m.text + "</th>";
          } else {
            if (l.disabled) {
              return;
            }

            if (l.merge) {
              if (m.width) {
                g += "\n\t\t\t\t<th colspan=" + (1 + l.merge) + ' style="width: ' + m.width + "px; " + f(l) + '">' + m.text + "</th>";
              } else {
                g += "\n\t\t\t\t<th colspan=" + (1 + l.merge) + ' style="' + f(l) + '">' + m.text + "</th>";
              }
            } else {
              if (m.width) {
                g += '\n\t\t\t\t<th style="width: ' + m.width + "px; " + f(l) + '">' + m.text + "</th>";
              } else {
                g += '\n\t\t\t\t<th style="' + f(l) + '">' + m.text + "</th>";
              }
            }
          }
        };

        this.endHeader = function () {
          if (i) {
            g += "\n\t</tr></thead>";
          } else {
            g += "\n\t\t\t</thead>";
          }
        };

        this.beginBody = function () {
          if (i) {
            g += "\n\t<tbody>";
          } else {
            g += "\n\t\t\t<tbody>";
          }

          j = 0;
        };

        this.beginRow = function () {
          if (i) {
            g += "\n\t<tr>";
          } else {
            g += "\n\t\t\t\t<tr>";
          }

          j++;
        };

        this.appendBodyCell = function (l, n, k) {
          var m = this.getFormat(n);

          if (l === "") {
            l = "&nbsp;";
          }

          if (i) {
            if (j == 1 && !h) {
              g += '\n\t\t\t\t\t<td style="' + f(k) + ' border-top-width: 1px;">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>";
            } else {
              g += '\n\t\t\t\t\t<td style="' + f(k) + '">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>";
            }
          } else {
            if (k.merge) {
              if (j == 1 && !h) {
                g += "\n\t\t\t\t\t<td colspan=" + (1 + k.merge) + ' style="' + f(k) + ' border-top-width: 1px;">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>";
              } else {
                g += "\n\t\t\t\t\t<td colspan=" + (1 + k.merge) + ' style="' + f(k) + '">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>";
              }
            } else {
              if (j == 1 && !h) {
                g += '\n\t\t\t\t\t<td style="' + f(k) + ' border-top-width: 1px;">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>";
              } else {
                g += '\n\t\t\t\t\t<td style="' + f(k) + '">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>";
              }
            }
          }
        };

        this.endRow = function () {
          if (i) {
            g += "\n\t</tr>";
          } else {
            g += "\n\t\t\t\t</tr>";
          }
        };

        this.endBody = function () {
          if (i) {
            g += "\n\t</tbody>";
          } else {
            g += "\n\t\t\t</tbody>";
          }
        };

        this.endFile = function (k) {
          if (i || k == undefined) {
            g += "\n</table>";
          } else {
            g += "\n\t\t</table>\n\t</body>\n</html>\n";
          }
        };

        this.getFile = function () {
          return g;
        };

        function f(m) {
          var k = "";

          for (var l in m) {
            if (m.hasOwnProperty(l)) {
              if (i && l == "font-size") {
                m[l] = "100%";
              }

              k += l + ":" + m[l] + ";";
            }
          }

          return k;
        }
      };

      a.prototype = new d.jqx.dataAdapter.DataExportModuleBase();

      var e = function e() {};

      e.prototype = new a();

      var c = function c() {};

      c.prototype = new a();
      var b = new c();
      d.jqx.dataAdapter.ArrayExporter.extend("html", new e());
      d.jqx.dataAdapter.ArrayExporter.extend("pdf", b);
    })(jqxBaseFramework);

    (function (b) {
      var a = function a() {
        var h,
            l,
            d,
            i,
            c,
            j,
            m = {
          style: "",
          stylesMap: {
            font: {
              color: "Color",
              "font-family": "FontName",
              "font-style": "Italic",
              "font-weight": "Bold"
            },
            interior: {
              "background-color": "Color",
              background: "Color"
            },
            alignment: {
              left: "Left",
              center: "Center",
              right: "Right"
            }
          },
          startStyle: function startStyle(p) {
            this.style += '\n\t\t<Style ss:ID="' + p + '" ss:Name="' + p + '">';
          },
          buildAlignment: function buildAlignment(q) {
            if (q["text-align"]) {
              var r = this.stylesMap.alignment[q["text-align"]];

              if (!r) {
                r = "Left";
              }

              var p = '\n\t\t\t<Alignment ss:Vertical="Bottom" ss:Horizontal="' + r + '"/>';
              this.style += p;
            }
          },
          buildBorder: function buildBorder(s) {
            if (s["border-color"]) {
              var r = "\n\t\t\t<Borders>";
              var u = '\n\t\t\t\t<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + s["border-color"] + '"/>';
              var p = '\n\t\t\t\t<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + s["border-color"] + '"/>';
              var q = '\n\t\t\t\t<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + s["border-color"] + '"/>';
              var t = '\n\t\t\t\t<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + s["border-color"] + '"/>';
              r += u;
              r += p;
              r += q;
              r += t;
              r += "\n\t\t\t</Borders>";
              this.style += r;
            }
          },
          buildFont: function buildFont(q) {
            var r = this.stylesMap.font,
                p = "\n\t\t\t<Font ";

            for (var s in r) {
              if (typeof q[s] !== "undefined") {
                if (s === "font-style" && q[s].toString().toLowerCase() === "italic") {
                  p += 'ss:Italic="1" ';
                } else {
                  if (s === "font-weight" && q[s].toString().toLowerCase() === "bold") {
                    p += 'ss:Bold="1" ';
                  } else {
                    if (s === "color") {
                      p += "ss:" + r[s] + '="' + q[s] + '" ';
                    }
                  }
                }
              }
            }

            p += "/>";
            this.style += p;
          },
          buildInterior: function buildInterior(q) {
            var r = this.stylesMap.interior,
                t = "\n\t\t\t<Interior ";
            var p = false;

            for (var s in r) {
              if (typeof q[s] !== "undefined") {
                t += "ss:" + r[s] + '="' + q[s] + '" ';
                p = true;
              }
            }

            if (p) {
              t += 'ss:Pattern="Solid"';
            }

            t += "/>";
            this.style += t;
          },
          buildFormat: function buildFormat(q) {
            if (q.dataType == "number" || q.dataType == "float" || q.dataType == "int" || q.dataType == "integer") {
              var p = q.formatString;

              if (p == "" || p.indexOf("n") != -1 || p.indexOf("N") != -1) {
                this.style += '\n\t\t\t<NumberFormat ss:Format="0"/>';
              } else {
                if (p == "f" || p == "F" || p == "D" || p.indexOf("d") != -1) {
                  this.style += '\n\t\t\t<NumberFormat ss:Format="#,##0.00_);[Red](#,##0.00)"/>';
                } else {
                  if (p.indexOf("p") != -1 || p.indexOf("P") != -1) {
                    this.style += '\n\t\t\t<NumberFormat ss:Format="Percent"/>';
                  } else {
                    if (p.indexOf("c") != -1 || p.indexOf("C") != -1) {
                      if (q.currencysymbol && parseInt(q.currencysymbol.charCodeAt(0)) == 8364) {
                        this.style += '\n\t\t\t<NumberFormat ss:Format="Euro Currency"/>';
                      } else {
                        this.style += '\n\t\t\t<NumberFormat ss:Format="Currency"/>';
                      }
                    }
                  }
                }
              }
            } else {
              if (q.dataType == "date") {
                this.style += '\n\t\t\t<NumberFormat ss:Format="Short Date"/>';
              }
            }
          },
          closeStyle: function closeStyle() {
            this.style += "\n\t\t</Style>";
          },
          toString: function toString() {
            var p = this.style;
            this.style = "";
            return p;
          }
        };

        this.beginFile = function () {
          c = {};
          j = 0;
          h = '<?xml version="1.0"?>\n\t<?mso-application progid="Excel.Sheet"?> \n\t<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:o="urn:schemas-microsoft-com:office:office" \n\txmlns:x="urn:schemas-microsoft-com:office:excel" \n\txmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:html="http://www.w3.org/TR/REC-html40"> \n\t<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"> \n\t<Version>12.00</Version> \n\t</DocumentProperties> \n\t<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"> \n\t<WindowHeight>8130</WindowHeight> \n\t<WindowWidth>15135</WindowWidth> \n\t<WindowTopX>120</WindowTopX> \n\t<WindowTopY>45</WindowTopY> \n\t<ProtectStructure>False</ProtectStructure> \n\t<ProtectWindows>False</ProtectWindows> \n\t</ExcelWorkbook> \n\t<Styles>';
        };

        this.beginHeader = function () {
          l = '\n\t<Worksheet ss:Name="Sheet1">\n\t\t<Table>';
          d = [];
          i = [];
        };

        this.appendHeaderCell = function (r, s, q) {
          var p = r.width != undefined ? r.width : r.text.length * 10;
          l += '\n\t\t\t<Column ss:Width="' + p + '"/>';
          d.push(r);
          i.push(q);
        };

        this.endHeader = function (p) {
          if (p) {
            this.beginRow();

            for (var q = 0; q < d.length; q += 1) {
              if (i[q].disabled) {
                continue;
              }

              g.call(this, d[q]["text"], null, i[q]);
            }

            this.endRow();
          }
        };

        this.beginBody = function () {};

        this.beginRow = function (q) {
          if (q != undefined) {
            l += "\n\t\t\t";

            for (var p = 0; p < q; p++) {
              l += "\t";
            }

            l += "<Row>";
            return;
          }

          l += "\n\t\t\t<Row>";
        };

        this.beginRows = function (p) {
          l += "\n\t\t\t\t<Rows>";
        };

        this.appendBodyCell = function (r, p, q, s) {
          g.call(this, r, p, q, s);
        };

        this.endRow = function (q) {
          if (q != undefined) {
            l += "\n\t\t\t";

            for (var p = 0; p < q; p++) {
              l += "\t";
            }

            l += "</Row>";
            return;
          }

          l += "\n\t\t\t</Row>";
        };

        this.endRows = function (q) {
          if (q != undefined) {
            l += "\n\t\t\t";

            for (var p = 0; p < q; p++) {
              l += "\t";
            }

            l += "</Rows>";
            return;
          }
        };

        this.endBody = function () {
          l += "\n\t\t</Table>";
        };

        this.endFile = function () {
          l += "\n\t</Worksheet>\n</Workbook>";
          h += "\n\t</Styles>";
        };

        this.getFile = function () {
          return h + l;
        };

        function g(t, w, s, v) {
          var r = "String";
          var u = this.getFormat(w);

          if (t != null && t.toString().substring(0, 3) == "_AG") {
            t = t.toString().substring(3);
            r = "String";
          } else {
            if (u.type == "date") {
              var q = t;
              t = this.formatData(t, u.type, u.formatString, u.localization);

              if (t === null || t === "") {
                t = "";
                r = "String";
              } else {
                t = q.toISOString();
                r = "DateTime";
              }
            }

            if (u.type == "string") {
              if (t === null || t === undefined) {
                t = "";
              } else {
                if (t.toString().indexOf("&") >= 0) {
                  t = t.toString().replace(/&/g, "&amp;");
                }

                if (t.toString().indexOf(">") >= 0) {
                  t = t.toString().replace(/>/g, "&gt;");
                }

                if (t.toString().indexOf("<") >= 0) {
                  t = t.toString().replace(/</g, "&lt;");
                }

                if (t.toString().indexOf('"') >= 0) {
                  t = t.toString().replace(/"/g, "&quot;");
                }

                if (t.toString().indexOf("'") >= 0) {
                  t = t.toString().replace(/'/g, "&apos;");
                }
              }
            }

            if (s.dataType == "number" || s.dataType == "float" || s.dataType == "int" || s.dataType == "integer") {
              r = "Number";
              t = parseFloat(t);

              if (t === null || isNaN(t) || t === "") {
                t = "";
                r = "String";
              }

              if (t && r != "String" && t != "") {
                if (w && w.formatString && w.formatString.indexOf("p") >= 0) {
                  t = t / 100;
                }
              }

              s.currencysymbol = w.localization.currencysymbol;
            }
          }

          var p = f(s);

          if (s.merge) {
            l += '\n\t\t\t\t<Cell ss:MergeAcross="' + s.merge + '" ss:StyleID="' + p + '"><Data ss:Type="' + r + '">' + t + "</Data></Cell>";
          } else {
            l += '\n\t\t\t\t<Cell ss:StyleID="' + p + '"><Data ss:Type="' + r + '">' + t + "</Data></Cell>";
          }
        }

        function n() {
          j += 1;
          return "xls-style-" + j;
        }

        function k(q) {
          for (var p in c) {
            if (o(q, c[p]) && o(c[p], q)) {
              return p;
            }
          }

          return undefined;
        }

        function o(t, q) {
          var s = true;

          for (var r in t) {
            if (t[r] !== q[r]) {
              s = false;
            }
          }

          return s;
        }

        function e(q, p) {
          m.startStyle(q);
          m.buildAlignment(p);
          m.buildBorder(p);
          m.buildFont(p);
          m.buildInterior(p);
          m.buildFormat(p);
          m.closeStyle();
          h += m.toString();
        }

        function f(p) {
          if (!p) {
            return "";
          }

          var q = k(p);

          if (typeof q === "undefined") {
            q = n();
            c[q] = p;
            e(q, p);
          }

          return q;
        }
      };

      a.prototype = new b.jqx.dataAdapter.DataExportModuleBase();
      b.jqx.dataAdapter.ArrayExporter.extend("xls", new a());
    })(jqxBaseFramework);

    (function (b) {
      var a = function a() {
        var e, c, d;

        this.beginFile = function () {
          e = '<?xml version="1.0" encoding="UTF-8" ?>';
          e += "\n<table>";
        };

        this.beginHeader = function () {
          c = [];
        };

        this.appendHeaderCell = function (f, g) {
          c.push(g);
        };

        this.endHeader = function () {};

        this.beginBody = function (g, f) {};

        this.beginRow = function (h) {
          var g = this;

          if (!g) {
            g = window.jqx;
          }

          if (h != undefined) {
            if (g.hierarchy) {
              e += "\n\t";

              for (var f = 0; f < h; f++) {
                e += "\t\t";
              }

              e += "<row>";
              d = 0;
              return;
            }
          }

          e += "\n\t<row>";
          d = 0;
        };

        this.beginRows = function (g) {
          if (g != undefined) {
            e += "\n\t\t";

            for (var f = 0; f < g; f++) {
              e += "\t\t";
            }

            e += "<rows>";
            d = 0;
            return;
          }

          e += "\n\t\t<rows>";
        };

        this.appendBodyCell = function (h, n, f, o, j, m) {
          var k = this;

          if (!k) {
            k = window.jqx;
          }

          var l = this.getFormat(n);
          h = this.formatData(h, l.type, l.formatString, l.localization);

          if (l.type == "string") {
            if (h.toString().indexOf("&") >= 0) {
              h = h.toString().replace(/&/g, "&amp;");
            }

            if (h.toString().indexOf(">") >= 0) {
              h = h.toString().replace(/>/g, "&gt;");
            }

            if (h.toString().indexOf("<") >= 0) {
              h = h.toString().replace(/</g, "&lt;");
            }

            if (h.toString().indexOf('"') >= 0) {
              h = h.toString().replace(/"/g, "&quot;");
            }

            if (h.toString().indexOf("'") >= 0) {
              h = h.toString().replace(/'/g, "&apos;");
            }
          }

          if (o.level != undefined) {
            if (k.hierarchy) {
              e += "\n\t\t";

              for (var g = 0; g < o.level; g++) {
                e += "\t\t";
              }

              if (m === undefined) {
                e += "<" + c[d] + ">" + h + "</" + c[d] + ">";
              } else {
                e += "<" + m + ">" + h + "</" + m + ">";
              }
            } else {
              if (m != undefined) {
                e += "\n\t\t<" + m + ">" + h + "</" + m + ">";
              } else {
                e += "\n\t\t<" + c[d] + ">" + h + "</" + c[d] + ">";
              }
            }
          } else {
            e += "\n\t\t<" + c[d] + ">" + h + "</" + c[d] + ">";
          }

          d++;
        };

        this.endRow = function (h) {
          var g = this;

          if (!g) {
            g = window.jqx;
          }

          if (h != undefined) {
            if (g.hierarchy) {
              e += "\n\t";

              for (var f = 0; f < h; f++) {
                e += "\t\t";
              }

              e += "</row>";
              d = 0;
              return;
            }
          }

          e += "\n\t</row>";
          d = 0;
        };

        this.endRows = function (g) {
          if (g != undefined) {
            e += "\n\t\t";

            for (var f = 0; f < g; f++) {
              e += "\t\t";
            }

            e += "</rows>";
            d = 0;
            return;
          }

          e += "\n\t\t</rows>";
        };

        this.endBody = function () {};

        this.endFile = function () {
          e += "\n</table>";
        };

        this.getFile = function () {
          return e;
        };
      };

      a.prototype = new b.jqx.dataAdapter.DataExportModuleBase();
      b.jqx.dataAdapter.ArrayExporter.extend("xml", new a());
    })(jqxBaseFramework);

    (function (d) {
      var j = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          l = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      };

      function a(n) {
        return '"' + n.replace(j, function (o) {
          var p = l[o];
          return typeof p === "string" ? p : "\\u" + ("0000" + o.charCodeAt(0).toString(16)).slice(-4);
        }) + '"';
      }

      function b(o) {
        return o < 10 ? "0" + o : o;
      }

      function e(o) {
        var n;

        if (isFinite(o.valueOf())) {
          n = o.getUTCFullYear() + "-" + b(o.getUTCMonth() + 1) + "-" + b(o.getUTCDate()) + "T" + b(o.getUTCHours()) + ":" + b(o.getUTCMinutes()) + ":" + b(o.getUTCSeconds()) + 'Z"';
        } else {
          n = "null";
        }

        return n;
      }

      function g(q) {
        var n = q.length,
            o = [],
            p;

        for (p = 0; p < n; p++) {
          o.push(h(p, q) || "null");
        }

        return "[" + o.join(",") + "]";
      }

      function m(q) {
        var o = [],
            p,
            n;

        for (p in q) {
          if (Object.prototype.hasOwnProperty.call(q, p)) {
            n = h(p, q);

            if (n) {
              o.push(a(p) + ":" + n);
            }
          }
        }

        return "{" + o.join(",") + "}";
      }

      function i(n) {
        switch (Object.prototype.toString.call(n)) {
          case "[object Date]":
            return e(n);

          case "[object Array]":
            return g(n);
        }

        return m(n);
      }

      function k(o, n) {
        switch (n) {
          case "string":
            return a(o);

          case "number":
          case "float":
          case "integer":
          case "int":
            return isFinite(o) ? o : "null";

          case "boolean":
            return o;
        }

        return "null";
      }

      function h(o, n) {
        var q = n[o],
            p = typeof q;

        if (q && typeof q === "object" && typeof q.toJSON === "function") {
          q = q.toJSON(o);
          p = typeof q;
        }

        if (/(number|float|int|integer|string|boolean)/.test(p) || !q && p === "object") {
          return k(q, p);
        } else {
          return i(q);
        }
      }

      function f(n) {
        if (window.JSON && typeof window.JSON.stringify === "function") {
          return window.JSON.stringify(n);
        }

        return h("", {
          "": n
        });
      }

      var c = function c() {
        var q = this;

        this.prepareData = function (t, v) {
          if (v) {
            var u = q.getFormat(v);
            t = q.formatData(t, u.type, u.formatString, u.localization);
          }

          return t;
        };

        var n,
            p,
            r,
            o = [],
            s = 0;

        this.beginFile = function () {
          p = [];
        };

        this.beginHeader = function () {};

        this.appendHeaderCell = function (t) {};

        this.endHeader = function () {};

        this.beginBody = function (u, t) {};

        this.beginRow = function () {
          var t = this;

          if (!t) {
            t = window.jqx;
          }

          if (t.hierarchy || window.jqx.hierarchy) {
            o[s] = {};
          } else {
            r = {};
          }
        };

        this.beginRows = function () {
          o[s].rows = [];
          s++;
          o[s] = {};
        };

        this.endRows = function () {
          s--;
        };

        this.appendBodyCell = function (v, t) {
          var u = this;

          if (!u) {
            u = window.jqx;
          }

          var w = this.prepareData(v, t);

          if (u.hierarchy || window.jqx.hierarchy) {
            o[s][t.text] = w;
          } else {
            r[t.text] = w;
          }
        };

        this.endRow = function () {
          var t = this;

          if (!t) {
            t = window.jqx;
          }

          if (t.hierarchy || window.jqx.hierarchy) {
            if (s == 0) {
              p.push(o[s]);
            } else {
              o[s - 1].rows.push(o[s]);
            }
          } else {
            p.push(r);
          }
        };

        this.endBody = function () {};

        this.endFile = function () {
          n = f(p);
        };

        this.getFile = function () {
          return n;
        };
      };

      c.prototype = new d.jqx.dataAdapter.DataExportModuleBase();
      d.jqx.dataAdapter.ArrayExporter.extend("json", new c());
    })(jqxBaseFramework);

    var pdfDataExport = window.jqxPdfDataExport = function () {
      if (typeof btoa === "undefined") {
        window.btoa = function (m) {
          var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              s = h.split(""),
              g,
              f,
              e,
              q,
              p,
              o,
              n,
              t,
              l = 0,
              u = 0,
              k = "",
              j = [],
              d;

          do {
            g = m.charCodeAt(l++);
            f = m.charCodeAt(l++);
            e = m.charCodeAt(l++);
            t = g << 16 | f << 8 | e;
            q = t >> 18 & 63;
            p = t >> 12 & 63;
            o = t >> 6 & 63;
            n = t & 63;
            j[u++] = s[q] + s[p] + s[o] + s[n];
          } while (l < m.length);

          k = j.join("");
          d = m.length % 3;
          return (d ? k.slice(0, d - 3) : k) + "===".slice(d || 3);
        };
      }

      if (typeof atob === "undefined") {
        window.atob = function (l) {
          var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              f,
              e,
              d,
              p,
              o,
              n,
              m,
              q,
              k = 0,
              r = 0,
              h = "",
              j = [];

          if (!l) {
            return l;
          }

          l += "";

          do {
            p = g.indexOf(l.charAt(k++));
            o = g.indexOf(l.charAt(k++));
            n = g.indexOf(l.charAt(k++));
            m = g.indexOf(l.charAt(k++));
            q = p << 18 | o << 12 | n << 6 | m;
            f = q >> 16 & 255;
            e = q >> 8 & 255;
            d = q & 255;

            if (n === 64) {
              j[r++] = String.fromCharCode(f);
            } else {
              if (m === 64) {
                j[r++] = String.fromCharCode(f, e);
              } else {
                j[r++] = String.fromCharCode(f, e, d);
              }
            }
          } while (k < l.length);

          h = j.join("");
          return h;
        };
      }

      var c = typeof Object.keys === "function" ? function (d) {
        return Object.keys(d).length;
      } : function (d) {
        var f = 0,
            g;

        for (g in d) {
          if (d.hasOwnProperty(g)) {
            f++;
          }
        }

        return f;
      },
          a = function a(d) {
        this.topics = {};
        this.context = d;

        this.publish = function (h, m) {
          if (this.topics[h]) {
            var j = this.topics[h],
                o = [],
                n,
                g,
                e,
                f,
                k = function k() {};

            m = Array.prototype.slice.call(arguments, 1);

            for (g = 0, e = j.length; g < e; g++) {
              f = j[g];
              n = f[0];

              if (f[1]) {
                f[0] = k;
                o.push(g);
              }

              n.apply(this.context, m);
            }

            for (g = 0, e = o.length; g < e; g++) {
              j.splice(o[g], 1);
            }
          }
        };

        this.subscribe = function (e, g, f) {
          if (!this.topics[e]) {
            this.topics[e] = [[g, f]];
          } else {
            this.topics[e].push([g, f]);
          }

          return {
            topic: e,
            callback: g
          };
        };

        this.unsubscribe = function (h) {
          if (this.topics[h.topic]) {
            var f = this.topics[h.topic],
                g,
                e;

            for (g = 0, e = f.length; g < e; g++) {
              if (f[g][0] === h.callback) {
                f.splice(g, 1);
              }
            }
          }
        };
      };

      function b(E, ae, M, V) {
        if (typeof E === "undefined") {
          E = "p";
        } else {
          E = E.toString().toLowerCase();
        }

        if (typeof ae === "undefined") {
          ae = "mm";
        }

        if (typeof M === "undefined") {
          M = "a4";
        }

        if (typeof V === "undefined" && typeof zpipe === "undefined") {
          V = false;
        }

        var at = M.toString().toLowerCase(),
            ao = "0.9.0rc2",
            t = [],
            F = 0,
            av = V,
            U = "1.3",
            N = {
          a3: [841.89, 1190.55],
          a4: [595.28, 841.89],
          a5: [420.94, 595.28],
          letter: [612, 792],
          legal: [612, 1008]
        },
            ad = "0 g",
            H = "0 G",
            g = 0,
            f = [],
            n = 2,
            v = false,
            D = [],
            ai = {},
            Q = {},
            aj = 16,
            d,
            z = 0.200025,
            B,
            C,
            ak,
            O = {
          title: "",
          subject: "",
          author: "",
          keywords: "",
          creator: ""
        },
            R = 0,
            T = 0,
            P = {},
            G = new a(P),
            af,
            aq,
            p = function p(i) {
          return i.toFixed(2);
        },
            o = function o(i) {
          return i.toFixed(3);
        },
            A = function A(i) {
          var k = i.toFixed(0);

          if (i < 10) {
            return "0" + k;
          } else {
            return k;
          }
        },
            r = function r(i) {
          var k = i.toFixed(0);

          if (k.length < 10) {
            return new Array(11 - k.length).join("0") + k;
          } else {
            return k;
          }
        },
            ab = function ab(i) {
          if (v) {
            f[g].push(i);
          } else {
            t.push(i);
            F += i.length + 1;
          }
        },
            w = function w() {
          n++;
          D[n] = F;
          ab(n + " 0 obj");
          return n;
        },
            K = function K(i) {
          ab("stream");
          ab(i);
          ab("endstream");
        },
            am,
            S,
            ap,
            al,
            aa = function aa() {
          am = C * ak;
          S = B * ak;
          var aB, aA, k, aw, ax, az, ay;

          for (aB = 1; aB <= g; aB++) {
            w();
            ab("<</Type /Page");
            ab("/Parent 1 0 R");
            ab("/Resources 2 0 R");
            ab("/Contents " + (n + 1) + " 0 R>>");
            ab("endobj");
            aA = f[aB].join("\n");
            w();

            if (av) {
              k = [];

              for (ax = 0; ax < aA.length; ++ax) {
                k[ax] = aA.charCodeAt(ax);
              }

              ay = adler32cs.from(aA);
              az = new Deflater(6);
              az.append(new Uint8Array(k));
              aA = az.flush();
              k = [new Uint8Array([120, 156]), new Uint8Array(aA), new Uint8Array([ay & 255, ay >> 8 & 255, ay >> 16 & 255, ay >> 24 & 255])];
              aA = "";

              for (ax in k) {
                if (k.hasOwnProperty(ax)) {
                  aA += String.fromCharCode.apply(null, k[ax]);
                }
              }

              ab("<</Length " + aA.length + " /Filter [/FlateDecode]>>");
            } else {
              ab("<</Length " + aA.length + ">>");
            }

            K(aA);
            ab("endobj");
          }

          D[1] = F;
          ab("1 0 obj");
          ab("<</Type /Pages");
          ap = "/Kids [";

          for (ax = 0; ax < g; ax++) {
            ap += 3 + 2 * ax + " 0 R ";
          }

          ab(ap + "]");
          ab("/Count " + g);
          ab("/MediaBox [0 0 " + p(am) + " " + p(S) + "]");
          ab(">>");
          ab("endobj");
        },
            X = function X(i) {
          i.objectNumber = w();
          ab("<</BaseFont/" + i.PostScriptName + "/Type/Font");

          if (typeof i.encoding === "string") {
            ab("/Encoding/" + i.encoding);
          }

          ab("/Subtype/Type1>>");
          ab("endobj");
        },
            J = function J() {
          var i;

          for (i in ai) {
            if (ai.hasOwnProperty(i)) {
              X(ai[i]);
            }
          }
        },
            L = function L() {
          G.publish("putXobjectDict");
        },
            x = function x() {
          ab("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]");
          ab("/Font <<");
          var i;

          for (i in ai) {
            if (ai.hasOwnProperty(i)) {
              ab("/" + i + " " + ai[i].objectNumber + " 0 R");
            }
          }

          ab(">>");
          ab("/XObject <<");
          L();
          ab(">>");
        },
            h = function h() {
          J();
          G.publish("putResources");
          D[2] = F;
          ab("2 0 obj");
          ab("<<");
          x();
          ab(">>");
          ab("endobj");
          G.publish("postPutResources");
        },
            m = function m(aw, k, ax) {
          var i;

          if (Q[k] === i) {
            Q[k] = {};
          }

          Q[k][ax] = aw;
        },
            au = {},
            u = function u(i, ax, az, aw) {
          var ay = "F" + (c(ai) + 1).toString(10),
              k = ai[ay] = {
            id: ay,
            PostScriptName: i,
            fontName: ax,
            fontStyle: az,
            encoding: aw,
            metadata: {}
          };
          m(ay, ax, az);
          G.publish("addFont", k);
          return ay;
        },
            e = function e() {
          var k = "helvetica",
              aG = "times",
              aI = "courier",
              aF = "normal",
              aE = "bold",
              aD = "italic",
              aH = "bolditalic",
              ax = "StandardEncoding",
              aA = [["Helvetica", k, aF], ["Helvetica-Bold", k, aE], ["Helvetica-Oblique", k, aD], ["Helvetica-BoldOblique", k, aH], ["Courier", aI, aF], ["Courier-Bold", aI, aE], ["Courier-Oblique", aI, aD], ["Courier-BoldOblique", aI, aH], ["Times-Roman", aG, aF], ["Times-Bold", aG, aE], ["Times-Italic", aG, aD], ["Times-BoldItalic", aG, aH]],
              aC,
              ay,
              aB,
              az;

          for (aC = 0, ay = aA.length; aC < ay; aC++) {
            var aw = ax;
            aB = u(aA[aC][0], aA[aC][1], aA[aC][2], aw);
            az = aA[aC][0].split("-");
            m(aB, az[0], az[1] || "");
          }

          G.publish("addFonts", {
            fonts: ai,
            dictionary: Q
          });
        },
            s = function s(aG, ax) {
          var aC, aA, az, ay, aE, aD, aw, aF, k, aB;

          if (ax === az) {
            ax = {};
          }

          ay = ax.sourceEncoding ? ay : "Unicode";
          aD = ax.outputEncoding;

          if ((ax.autoencode || aD) && ai[d].metadata && ai[d].metadata[ay] && ai[d].metadata[ay].encoding) {
            aE = ai[d].metadata[ay].encoding;

            if (!aD && ai[d].encoding) {
              aD = ai[d].encoding;
            }

            if (!aD && aE.codePages) {
              aD = aE.codePages[0];
            }

            if (typeof aD === "string") {
              aD = aE[aD];
            }

            if (aD) {
              aF = false;
              aw = [];

              for (aC = 0, aA = aG.length; aC < aA; aC++) {
                k = aD[aG.charCodeAt(aC)];

                if (k) {
                  aw.push(String.fromCharCode(k));
                } else {
                  aw.push(aG[aC]);
                }

                if (aw[aC].charCodeAt(0) >> 8) {
                  aF = true;
                }
              }

              aG = aw.join("");
            }
          }

          aC = aG.length;

          while (aF === az && aC !== 0) {
            if (aG.charCodeAt(aC - 1) >> 8) {
              aF = true;
            }

            aC--;
          }

          if (!aF) {
            return aG;
          } else {
            aw = ax.noBOM ? [] : [254, 255];

            for (aC = 0, aA = aG.length; aC < aA; aC++) {
              k = aG.charCodeAt(aC);
              aB = k >> 8;

              if (aB >> 8) {
                throw new Error("Character at position " + aC.toString(10) + " of string '" + aG + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
              }

              aw.push(aB);
              aw.push(k - (aB << 8));
            }

            return String.fromCharCode.apply(az, aw);
          }
        },
            Z = function Z(k, i) {
          return s(k, i).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        },
            Y = function Y() {
          ab("/Producer (pdfDataExport " + ao + ")");

          if (O.title) {
            ab("/Title (" + Z(O.title) + ")");
          }

          if (O.subject) {
            ab("/Subject (" + Z(O.subject) + ")");
          }

          if (O.author) {
            ab("/Author (" + Z(O.author) + ")");
          }

          if (O.keywords) {
            ab("/Keywords (" + Z(O.keywords) + ")");
          }

          if (O.creator) {
            ab("/Creator (" + Z(O.creator) + ")");
          }

          var i = new Date();
          ab("/CreationDate (D:" + [i.getFullYear(), A(i.getMonth() + 1), A(i.getDate()), A(i.getHours()), A(i.getMinutes()), A(i.getSeconds())].join("") + ")");
        },
            W = function W() {
          ab("/Type /Catalog");
          ab("/Pages 1 0 R");
          ab("/OpenAction [3 0 R /FitH null]");
          ab("/PageLayout /OneColumn");
          G.publish("putCatalog");
        },
            l = function l() {
          ab("/Size " + (n + 1));
          ab("/Root " + n + " 0 R");
          ab("/Info " + (n - 1) + " 0 R");
        },
            ar = function ar() {
          g++;
          v = true;
          f[g] = [];
        },
            ah = function ah() {
          ar();
          ab(p(z * ak) + " w");
          ab(H);

          if (R !== 0) {
            ab(R.toString(10) + " J");
          }

          if (T !== 0) {
            ab(T.toString(10) + " j");
          }

          G.publish("addPage", {
            pageNumber: g
          });
        },
            y = function y(aw, ay) {
          var i, k;

          if (aw === k) {
            aw = ai[d].fontName;
          }

          if (ay === k) {
            ay = ai[d].fontStyle;
          }

          try {
            i = Q[aw][ay];
          } catch (ax) {
            i = k;
          }

          if (!i) {
            throw new Error("Unable to look up font label for font '" + aw + "', '" + ay + "'. Refer to getFontList() for available fonts.");
          }

          return i;
        },
            q = function q() {
          v = false;
          t = [];
          D = [];
          ab("%PDF-" + U);
          aa();
          h();
          w();
          ab("<<");
          Y();
          ab(">>");
          ab("endobj");
          w();
          ab("<<");
          W();
          ab(">>");
          ab("endobj");
          var aw = F,
              k;
          ab("xref");
          ab("0 " + (n + 1));
          ab("0000000000 65535 f ");

          for (k = 1; k <= n; k++) {
            ab(r(D[k]) + " 00000 n ");
          }

          ab("trailer");
          ab("<<");
          l();
          ab(">>");
          ab("startxref");
          ab(aw);
          ab("%%EOF");
          v = true;
          return t.join("\n");
        },
            ac = function ac(i) {
          var k = "S";

          if (i === "F") {
            k = "f";
          } else {
            if (i === "FD" || i === "DF") {
              k = "B";
            }
          }

          return k;
        },
            I = function I(az, aw) {
          var ay, aB, aA, aC, ax, k;

          switch (az) {
            case ay:
              return q();

            case "save":
              if (navigator.getUserMedia) {
                if (window.URL === undefined) {
                  return P.output("dataurlnewwindow");
                } else {
                  if (window.URL.createObjectURL === undefined) {
                    return P.output("dataurlnewwindow");
                  }
                }
              }

              aB = q();
              aA = aB.length;
              aC = new Uint8Array(new ArrayBuffer(aA));

              for (ax = 0; ax < aA; ax++) {
                aC[ax] = aB.charCodeAt(ax);
              }

              k = new Blob([aC], {
                type: "application/pdf"
              });
              saveAs(k, aw);
              break;

            case "datauristring":
            case "dataurlstring":
              return "data:application/pdf;base64," + btoa(q());

            case "datauri":
            case "dataurl":
              document.location.href = "data:application/pdf;base64," + btoa(q());
              break;

            case "dataurlnewwindow":
              window.open("data:application/pdf;base64," + btoa(q()));
              break;

            default:
              throw new Error('Output type "' + az + '" is not supported.');
          }
        };

        if (ae === "pt") {
          ak = 1;
        } else {
          if (ae === "mm") {
            ak = 72 / 25.4;
          } else {
            if (ae === "cm") {
              ak = 72 / 2.54;
            } else {
              if (ae === "in") {
                ak = 72;
              } else {
                throw "Invalid unit: " + ae;
              }
            }
          }
        }

        if (N.hasOwnProperty(at)) {
          B = N[at][1] / ak;
          C = N[at][0] / ak;
        } else {
          try {
            B = M[1];
            C = M[0];
          } catch (an) {
            throw "Invalid format: " + M;
          }
        }

        if (E === "p" || E === "portrait") {
          E = "p";

          if (C > B) {
            af = C;
            C = B;
            B = af;
          }
        } else {
          if (E === "l" || E === "landscape") {
            E = "l";

            if (B > C) {
              af = C;
              C = B;
              B = af;
            }
          } else {
            throw "Invalid orientation: " + E;
          }
        }

        P.internal = {
          pdfEscape: Z,
          getStyle: ac,
          getFont: function getFont() {
            return ai[y.apply(P, arguments)];
          },
          getFontSize: function getFontSize() {
            return aj;
          },
          btoa: btoa,
          write: function write(i, ax, aw, k) {
            ab(arguments.length === 1 ? i : Array.prototype.join.call(arguments, " "));
          },
          getCoordinateString: function getCoordinateString(i) {
            return p(i * ak);
          },
          getVerticalCoordinateString: function getVerticalCoordinateString(i) {
            return p((B - i) * ak);
          },
          collections: {},
          newObject: w,
          putStream: K,
          events: G,
          scaleFactor: ak,
          pageSize: {
            width: C,
            height: B
          },
          output: function output(k, i) {
            return I(k, i);
          }
        };

        P.addPage = function () {
          ah();
          return this;
        };

        var ag = ["", "0", "00", "000", "0000"];

        var j = function j(aA, aw) {
          var ax = ["FEFF"];

          for (var az = 0, k = aA.length, ay; az < k; ++az) {
            ay = aA.charCodeAt(az).toString(16).toUpperCase();
            ax.push(ag[4 - ay.length], ay);
          }

          return ax.join("");
        };

        P.text16 = function (aF, aE, aC, aw) {
          var ax, aA, az, aD, k, aB, ay;

          if (typeof aF === "number") {
            aA = aC;
            az = aF;
            aD = aE;
            aF = aA;
            aE = az;
            aC = aD;
          }

          if (typeof aF === "string" && aF.match(/[\n\r]/)) {
            aF = aF.split(/\r\n|\r|\n/g);
          }

          if (typeof aw === "undefined") {
            aw = {
              noBOM: true,
              autoencode: true
            };
          } else {
            if (aw.noBOM === ax) {
              aw.noBOM = true;
            }

            if (aw.autoencode === ax) {
              aw.autoencode = true;
            }
          }

          aw.autoencode = false;

          if (typeof aF === "string") {
            aB = j(aF, aw);
          } else {
            if (aF instanceof Array) {
              k = aF.concat();

              for (ay = k.length - 1; ay !== -1; ay--) {
                k[ay] = j(k[ay], aw);
              }

              aB = k.join("> Tj\nT* <");
            } else {
              throw new Error('Type of text must be string or Array. "' + aF + '" is not recognized.');
            }
          }

          ab("BT\n/" + d + " " + aj + " Tf\n" + aj + " TL\n" + ad + "\n" + p(aE * ak) + " " + p((B - aC) * ak) + " Td\n<" + aB + "> Tj\nET");
          return this;
        };

        P.text = function (aF, aE, aC, aw) {
          var ax, aA, az, aD, k, aB, ay;

          if (typeof aF === "number") {
            aA = aC;
            az = aF;
            aD = aE;
            aF = aA;
            aE = az;
            aC = aD;
          }

          if (typeof aF === "string" && aF.match(/[\n\r]/)) {
            aF = aF.split(/\r\n|\r|\n/g);
          }

          if (typeof aw === "undefined") {
            aw = {
              noBOM: true,
              autoencode: true
            };
          } else {
            if (aw.noBOM === ax) {
              aw.noBOM = true;
            }

            if (aw.autoencode === ax) {
              aw.autoencode = true;
            }
          }

          if (typeof aF === "string") {
            aB = Z(aF, aw);
          } else {
            if (aF instanceof Array) {
              k = aF.concat();

              for (ay = k.length - 1; ay !== -1; ay--) {
                k[ay] = Z(k[ay], aw);
              }

              aB = k.join(") Tj\nT* (");
            } else {
              throw new Error('Type of text must be string or Array. "' + aF + '" is not recognized.');
            }
          }

          ab("BT\n/" + d + " " + aj + " Tf\n" + aj + " TL\n" + ad + "\n" + p(aE * ak) + " " + p((B - aC) * ak) + " Td\n(" + aB + ") Tj\nET");
          return this;
        };

        P.line = function (k, ax, i, aw) {
          ab(p(k * ak) + " " + p((B - ax) * ak) + " m " + p(i * ak) + " " + p((B - aw) * ak) + " l S");
          return this;
        };

        P.lines = function (k, aF, aE, aO, aK) {
          var ay, aM, aC, aD, aB, aA, aI, aG, aN, aL, az, aJ, ax, aH, aw;

          if (typeof k === "number") {
            aM = aE;
            aC = k;
            aD = aF;
            k = aM;
            aF = aC;
            aE = aD;
          }

          aK = ac(aK);
          aO = aO === ay ? [1, 1] : aO;
          ab(o(aF * ak) + " " + o((B - aE) * ak) + " m ");
          aB = aO[0];
          aA = aO[1];
          aG = k.length;
          aH = aF;
          aw = aE;

          for (aI = 0; aI < aG; aI++) {
            aN = k[aI];

            if (aN.length === 2) {
              aH = aN[0] * aB + aH;
              aw = aN[1] * aA + aw;
              ab(o(aH * ak) + " " + o((B - aw) * ak) + " l");
            } else {
              aL = aN[0] * aB + aH;
              az = aN[1] * aA + aw;
              aJ = aN[2] * aB + aH;
              ax = aN[3] * aA + aw;
              aH = aN[4] * aB + aH;
              aw = aN[5] * aA + aw;
              ab(o(aL * ak) + " " + o((B - az) * ak) + " " + o(aJ * ak) + " " + o((B - ax) * ak) + " " + o(aH * ak) + " " + o((B - aw) * ak) + " c");
            }
          }

          ab(aK);
          return this;
        };

        P.rect = function (i, az, k, ax, aw) {
          var ay = ac(aw);
          ab([p(i * ak), p((B - az) * ak), p(k * ak), p(-ax * ak), "re", ay].join(" "));
          return this;
        };

        P.triangle = function (ax, aA, k, ay, i, aw, az) {
          this.lines([[k - ax, ay - aA], [i - k, aw - ay], [ax - i, aA - aw]], ax, aA, [1, 1], az);
          return this;
        };

        P.roundedRect = function (k, aB, aw, ay, aA, az, ax) {
          var i = 4 / 3 * (Math.SQRT2 - 1);
          this.lines([[aw - 2 * aA, 0], [aA * i, 0, aA, az - az * i, aA, az], [0, ay - 2 * az], [0, az * i, -(aA * i), az, -aA, az], [-aw + 2 * aA, 0], [-(aA * i), 0, -aA, -(az * i), -aA, -az], [0, -ay + 2 * az], [0, -(az * i), aA * i, -az, aA, -az]], k + aA, aB, [1, 1], ax);
          return this;
        };

        P.ellipse = function (i, aB, az, ay, k) {
          var aA = ac(k),
              ax = 4 / 3 * (Math.SQRT2 - 1) * az,
              aw = 4 / 3 * (Math.SQRT2 - 1) * ay;
          ab([p((i + az) * ak), p((B - aB) * ak), "m", p((i + az) * ak), p((B - (aB - aw)) * ak), p((i + ax) * ak), p((B - (aB - ay)) * ak), p(i * ak), p((B - (aB - ay)) * ak), "c"].join(" "));
          ab([p((i - ax) * ak), p((B - (aB - ay)) * ak), p((i - az) * ak), p((B - (aB - aw)) * ak), p((i - az) * ak), p((B - aB) * ak), "c"].join(" "));
          ab([p((i - az) * ak), p((B - (aB + aw)) * ak), p((i - ax) * ak), p((B - (aB + ay)) * ak), p(i * ak), p((B - (aB + ay)) * ak), "c"].join(" "));
          ab([p((i + ax) * ak), p((B - (aB + ay)) * ak), p((i + az) * ak), p((B - (aB + aw)) * ak), p((i + az) * ak), p((B - aB) * ak), "c", aA].join(" "));
          return this;
        };

        P.circle = function (i, ax, aw, k) {
          return this.ellipse(i, ax, aw, aw, k);
        };

        P.setProperties = function (i) {
          var k;

          for (k in O) {
            if (O.hasOwnProperty(k) && i[k]) {
              O[k] = i[k];
            }
          }

          return this;
        };

        P.setFontSize = function (i) {
          aj = i;
          return this;
        };

        P.setFont = function (i, k) {
          d = y(i, k);
          return this;
        };

        P.setFontStyle = P.setFontType = function (k) {
          var i;
          d = y(i, k);
          return this;
        };

        P.getFontList = function () {
          var aw = {},
              k,
              ax,
              i;

          for (k in Q) {
            if (Q.hasOwnProperty(k)) {
              aw[k] = i = [];

              for (ax in Q[k]) {
                if (Q[k].hasOwnProperty(ax)) {
                  i.push(ax);
                }
              }
            }
          }

          return aw;
        };

        P.setLineWidth = function (i) {
          ab((i * ak).toFixed(2) + " w");
          return this;
        };

        P.setDrawColor = function (ay, ax, aw, i) {
          var k;

          if (ax === undefined || i === undefined && ay === ax === aw) {
            if (typeof ay === "string") {
              k = ay + " G";
            } else {
              k = p(ay / 255) + " G";
            }
          } else {
            if (i === undefined) {
              if (typeof ay === "string") {
                k = [ay, ax, aw, "RG"].join(" ");
              } else {
                k = [p(ay / 255), p(ax / 255), p(aw / 255), "RG"].join(" ");
              }
            } else {
              if (typeof ay === "string") {
                k = [ay, ax, aw, i, "K"].join(" ");
              } else {
                k = [p(ay), p(ax), p(aw), p(i), "K"].join(" ");
              }
            }
          }

          ab(k);
          return this;
        };

        P.setFillColor = function (ay, ax, aw, i) {
          var k;

          if (ax === undefined || i === undefined && ay === ax === aw) {
            if (typeof ay === "string") {
              k = ay + " g";
            } else {
              k = p(ay / 255) + " g";
            }
          } else {
            if (i === undefined) {
              if (typeof ay === "string") {
                k = [ay, ax, aw, "rg"].join(" ");
              } else {
                k = [p(ay / 255), p(ax / 255), p(aw / 255), "rg"].join(" ");
              }
            } else {
              if (typeof ay === "string") {
                k = [ay, ax, aw, i, "k"].join(" ");
              } else {
                k = [p(ay), p(ax), p(aw), p(i), "k"].join(" ");
              }
            }
          }

          ab(k);
          return this;
        };

        P.setTextColor = function (aw, k, i) {
          if (aw === 0 && k === 0 && i === 0 || typeof k === "undefined") {
            ad = o(aw / 255) + " g";
          } else {
            ad = [o(aw / 255), o(k / 255), o(i / 255), "rg"].join(" ");
          }

          return this;
        };

        P.CapJoinStyles = {
          0: 0,
          butt: 0,
          but: 0,
          bevel: 0,
          1: 1,
          round: 1,
          rounded: 1,
          circle: 1,
          2: 2,
          projecting: 2,
          project: 2,
          square: 2,
          milter: 2
        };

        P.setLineCap = function (i) {
          var k = this.CapJoinStyles[i];

          if (k === undefined) {
            throw new Error("Line cap style of '" + i + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
          }

          R = k;
          ab(k.toString(10) + " J");
          return this;
        };

        P.setLineJoin = function (i) {
          var k = this.CapJoinStyles[i];

          if (k === undefined) {
            throw new Error("Line join style of '" + i + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
          }

          T = k;
          ab(k.toString(10) + " j");
          return this;
        };

        P.output = I;

        P.save = function (i) {
          P.output("save", i);
        };

        for (aq in b.API) {
          if (b.API.hasOwnProperty(aq)) {
            if (aq === "events" && b.API.events.length) {
              (function (ax, az) {
                var ay, aw, k;

                for (k = az.length - 1; k !== -1; k--) {
                  ay = az[k][0];
                  aw = az[k][1];
                  ax.subscribe.apply(ax, [ay].concat(typeof aw === "function" ? [aw] : aw));
                }
              })(G, b.API.events);
            } else {
              P[aq] = b.API[aq];
            }
          }
        }

        e();
        d = "F1";
        ah();
        G.publish("initialized");
        return P;
      }

      b.API = {
        events: []
      };
      return b;
    }();

    (function (i) {
      var b = 0,
          m = 0,
          a,
          o,
          h,
          c = {
        x: undefined,
        y: undefined,
        w: undefined,
        h: undefined,
        ln: undefined
      },
          f = 1,
          e = false,
          d = function d(p, t, q, r, s) {
        c = {
          x: p,
          y: t,
          w: q,
          h: r,
          ln: s
        };
      },
          k = function k() {
        return c;
      },
          j = function j(p) {
        b = p;
      },
          l = function l() {
        return b;
      },
          n = function n(p) {
        m = p;
      },
          g = function g(p) {
        return m;
      };

      i.getTextDimensions = function (p) {
        a = this.internal.getFont().fontName;
        o = this.internal.getFontSize();
        h = this.internal.getFont().fontStyle;
        var s = 0.264583 * 72 / 25.4,
            q,
            r;
        r = document.createElement("font");
        r.id = "pdfDataExportCell";
        r.style.fontStyle = h;
        r.style.fontName = a;
        r.style.fontSize = o + "pt";
        r.innerHTML = p;
        document.body.appendChild(r);
        q = {
          w: (r.offsetWidth + 1) * s,
          h: (r.offsetHeight + 1) * s
        };
        document.body.removeChild(r);
        return q;
      };

      i.cellAddPage = function () {
        this.addPage();
        d(undefined, undefined, undefined, undefined, undefined);
        e = true;
        f += 1;
        n(1);
      };

      i.cellInitialize = function () {
        b = 0;
        c = {
          x: undefined,
          y: undefined,
          w: undefined,
          h: undefined,
          ln: undefined
        };
        f = 1;
        e = false;
        n(0);
      };

      i.cell = function (z, v, A, s, p, u) {
        this.lnMod = this.lnMod === undefined ? 0 : this.lnMod;

        if (this.printingHeaderRow !== true && this.lnMod !== 0) {
          u = u + this.lnMod;
        }

        if ((u * s + v + s * 2) / f >= this.internal.pageSize.height && f === 1 && !e) {
          this.cellAddPage();

          if (this.printHeaders && this.tableHeaderRow) {
            this.printHeaderRow(u);
            this.lnMod += 1;
            u += 1;
          }

          if (l() === 0) {
            j(Math.round((this.internal.pageSize.height - s * 2) / s));
          }
        } else {
          if (e && k().ln !== u && g() === l()) {
            this.cellAddPage();

            if (this.printHeaders && this.tableHeaderRow) {
              this.printHeaderRow(u);
              this.lnMod += 1;
              u += 1;
            }
          }
        }

        var B = k(),
            r = this.getTextDimensions(p),
            t = 1;

        if (B.x !== undefined && B.ln === u) {
          z = B.x + B.w;
        }

        if (B.y !== undefined && B.y === v) {
          v = B.y;
        }

        if (B.h !== undefined && B.h === s) {
          s = B.h;
        }

        if (B.ln !== undefined && B.ln === u) {
          u = B.ln;
          t = 0;
        }

        if (e) {
          v = s * (g() + t);
        } else {
          v = v + s * Math.abs(l() * f - u - l());
        }

        this.rect(z, v, A, s);
        var q = /[а-яА-ЯЁё]/.test(p);

        if (q) {
          this.text16(p, z + 3, v + s - 3);
        } else {
          this.text(p, z + 3, v + s - 3);
        }

        n(g() + t);
        d(z, v, A, s, u);
        return this;
      };

      i.getKeys = typeof Object.keys === "function" ? function (p) {
        if (!p) {
          return [];
        }

        return Object.keys(p);
      } : function (p) {
        var q = [],
            r;

        for (r in p) {
          if (p.hasOwnProperty(r)) {
            q.push(r);
          }
        }

        return q;
      };

      i.arrayMax = function (u, t) {
        var p = u[0],
            q,
            s,
            r;

        for (q = 0, s = u.length; q < s; q += 1) {
          r = u[q];

          if (t) {
            if (t(p, r) === -1) {
              p = r;
            }
          } else {
            if (r > p) {
              p = r;
            }
          }
        }

        return p;
      };

      i.table = function (J, r, I) {
        var v = [],
            p = [],
            D,
            z,
            B,
            x,
            E,
            y,
            G = {},
            A = {},
            u,
            s,
            H = [],
            C,
            F = [],
            t,
            q,
            w;
        this.lnMod = 0;

        if (I) {
          z = I.autoSize || false;
          B = this.printHeaders = I.printHeaders || true;
          x = I.autoStretch || true;
        }

        if (!J) {
          throw "No data for PDF table";
        }

        if (r === undefined || r === null) {
          v = this.getKeys(J[0]);
        } else {
          if (r[0] && typeof r[0] !== "string") {
            for (E = 0, y = r.length; E < y; E += 1) {
              D = r[E];
              v.push(D.name);
              p.push(D.prompt);
            }
          } else {
            v = r;
          }
        }

        if (I.autoSize) {
          w = function w(K) {
            return K[D];
          };

          for (E = 0, y = v.length; E < y; E += 1) {
            D = v[E];
            G[D] = J.map(w);
            H.push(this.getTextDimensions(p[E] || D).w);
            s = G[D];

            for (C = 0, y = s.length; C < y; C += 1) {
              u = s[C];
              H.push(this.getTextDimensions(u).w);
            }

            A[D] = i.arrayMax(H);
          }
        }

        if (I.printHeaders) {
          for (E = 0, y = v.length; E < y; E += 1) {
            D = v[E];
            F.push([10, 10, A[D], 25, String(p.length ? p[E] : D)]);
          }

          this.setTableHeaderRow(F);
          this.printHeaderRow(1);
        }

        for (E = 0, y = J.length; E < y; E += 1) {
          t = J[E];

          for (C = 0, q = v.length; C < q; C += 1) {
            D = v[C];
            this.cell(10, 10, A[D], 25, String(t[D]), E + 2);
          }
        }

        return this;
      };

      i.setTableHeaderRow = function (p) {
        this.tableHeaderRow = p;
      };

      i.printHeaderRow = function (p) {
        if (!this.tableHeaderRow) {
          throw "Property tableHeaderRow does not exist.";
        }

        var q, s, r, t;
        this.printingHeaderRow = true;

        for (r = 0, t = this.tableHeaderRow.length; r < t; r += 1) {
          q = this.tableHeaderRow[r];
          s = [].concat(q);
          this.cell.apply(this, s.concat(p));
        }

        this.printingHeaderRow = false;
      };
    })(pdfDataExport.API);

    (function (c) {
      var b = c.getCharWidthsArray = function (s, u) {
        if (!u) {
          u = {};
        }

        var h = u.widths ? u.widths : this.internal.getFont().metadata.Unicode.widths,
            r = h.fof ? h.fof : 1,
            n = u.kerning ? u.kerning : this.internal.getFont().metadata.Unicode.kerning,
            p = n.fof ? n.fof : 1;
        var m,
            j,
            o,
            k,
            q = 0,
            t = h[0] || r,
            g = [];

        for (m = 0, j = s.length; m < j; m++) {
          o = s.charCodeAt(m);
          g.push((h[o] || t) / r + (n[o] && n[o][q] || 0) / p);
          q = o;
        }

        return g;
      };

      var e = function e(j) {
        var h = j.length,
            g = 0;

        while (h) {
          h--;
          g += j[h];
        }

        return g;
      };

      var a = c.getStringUnitWidth = function (h, g) {
        return e(b.call(this, h, g));
      };

      var d = function d(g, n, h, j) {
        var q = [];
        var m = 0,
            k = g.length,
            p = 0;

        while (m !== k && p + n[m] < h) {
          p += n[m];
          m++;
        }

        q.push(g.slice(0, m));
        var o = m;
        p = 0;

        while (m !== k) {
          if (p + n[m] > j) {
            q.push(g.slice(o, m));
            p = 0;
            o = m;
          }

          p += n[m];
          m++;
        }

        if (o !== m) {
          q.push(g.slice(o, m));
        }

        return q;
      };

      var f = function f(s, k, v) {
        if (!v) {
          v = {};
        }

        var t = b(" ", v)[0];
        var r = s.split(" ");
        var w = [],
            x = [w],
            h = v.textIndent || 0,
            u = 0,
            p = 0,
            g,
            q;
        var o, m, n;

        for (o = 0, m = r.length; o < m; o++) {
          g = r[o];
          q = b(g, v);
          p = e(q);

          if (h + u + p > k) {
            if (p > k) {
              n = d(g, q, k - (h + u), k);
              w.push(n.shift());
              w = [n.pop()];

              while (n.length) {
                x.push([n.shift()]);
              }

              p = e(q.slice(g.length - w[0].length));
            } else {
              w = [g];
            }

            x.push(w);
            h = p;
            u = t;
          } else {
            w.push(g);
            h += u + p;
            u = t;
          }
        }

        var j = [];

        for (o = 0, m = x.length; o < m; o++) {
          j.push(x[o].join(" "));
        }

        return j;
      };

      c.splitTextToSize = function (q, m, r) {
        if (!r) {
          r = {};
        }

        var h = r.fontSize || this.internal.getFontSize(),
            g = function (l) {
          var t = {
            0: 1
          },
              i = {};

          if (!l.widths || !l.kerning) {
            var u = this.internal.getFont(l.fontName, l.fontStyle),
                s = "Unicode";

            if (u.metadata[s]) {
              return {
                widths: u.metadata[s].widths || t,
                kerning: u.metadata[s].kerning || i
              };
            }
          } else {
            return {
              widths: l.widths,
              kerning: l.kerning
            };
          }

          return {
            widths: t,
            kerning: i
          };
        }.call(this, r);

        var p;

        if (q.match(/[\n\r]/)) {
          p = q.split(/\r\n|\r|\n/g);
        } else {
          p = [q];
        }

        var j = 1 * this.internal.scaleFactor * m / h;
        g.textIndent = r.textIndent ? r.textIndent * 1 * this.internal.scaleFactor / h : 0;
        var o,
            n,
            k = [];

        for (o = 0, n = p.length; o < n; o++) {
          k = k.concat(f(p[o], j, g));
        }

        return k;
      };
    })(pdfDataExport.API);

    (function (c) {
      var d = "addImage_";

      var f = function f(m) {
        var l, h;

        if (!m.charCodeAt(0) === 255 || !m.charCodeAt(1) === 216 || !m.charCodeAt(2) === 255 || !m.charCodeAt(3) === 224 || !m.charCodeAt(6) === "J".charCodeAt(0) || !m.charCodeAt(7) === "F".charCodeAt(0) || !m.charCodeAt(8) === "I".charCodeAt(0) || !m.charCodeAt(9) === "F".charCodeAt(0) || !m.charCodeAt(10) === 0) {
          throw new Error("getJpegSize requires a binary jpeg file");
        }

        var j = m.charCodeAt(4) * 256 + m.charCodeAt(5);
        var k = 4,
            g = m.length;

        while (k < g) {
          k += j;

          if (m.charCodeAt(k) !== 255) {
            throw new Error("getJpegSize could not find the size of the image");
          }

          if (m.charCodeAt(k + 1) === 192) {
            h = m.charCodeAt(k + 5) * 256 + m.charCodeAt(k + 6);
            l = m.charCodeAt(k + 7) * 256 + m.charCodeAt(k + 8);
            return [l, h];
          } else {
            k += 2;
            j = m.charCodeAt(k) * 256 + m.charCodeAt(k + 1);
          }
        }
      },
          b = function b(g) {
        var m = this.internal.newObject(),
            h = this.internal.write,
            l = this.internal.putStream;
        g.n = m;
        h("<</Type /XObject");
        h("/Subtype /Image");
        h("/Width " + g.w);
        h("/Height " + g.h);

        if (g.cs === "Indexed") {
          h("/ColorSpace [/Indexed /DeviceRGB " + (g.pal.length / 3 - 1) + " " + (m + 1) + " 0 R]");
        } else {
          h("/ColorSpace /" + g.cs);

          if (g.cs === "DeviceCMYK") {
            h("/Decode [1 0 1 0 1 0 1 0]");
          }
        }

        h("/BitsPerComponent " + g.bpc);

        if ("f" in g) {
          h("/Filter /" + g.f);
        }

        if ("dp" in g) {
          h("/DecodeParms <<" + g.dp + ">>");
        }

        if ("trns" in g && g.trns.constructor == Array) {
          var k = "";

          for (var j = 0; j < g.trns.length; j++) {
            k += g[k][j] + " " + g.trns[j] + " ";
            h("/Mask [" + k + "]");
          }
        }

        if ("smask" in g) {
          h("/SMask " + (m + 1) + " 0 R");
        }

        h("/Length " + g.data.length + ">>");
        l(g.data);
        h("endobj");
      },
          e = function e() {
        var g = this.internal.collections[d + "images"];

        for (var h in g) {
          b.call(this, g[h]);
        }
      },
          a = function a() {
        var g = this.internal.collections[d + "images"],
            h = this.internal.write,
            k;

        for (var j in g) {
          k = g[j];
          h("/I" + k.i, k.n, "0", "R");
        }
      };

      c.addImage = function (g, s, q, p, t, l) {
        if (typeof g === "object" && g.nodeType === 1) {
          var j = document.createElement("canvas");
          j.width = g.clientWidth;
          j.height = g.clientHeight;
          var u = j.getContext("2d");

          if (!u) {
            throw "addImage requires canvas to be supported by browser.";
          }

          u.drawImage(g, 0, 0, j.width, j.height);
          g = j.toDataURL("image/jpeg");
          s = "JPEG";
        }

        if (s.toUpperCase() !== "JPEG") {
          throw new Error("addImage currently only supports format 'JPEG', not '" + s + "'");
        }

        var i,
            n = this.internal.collections[d + "images"],
            m = this.internal.getCoordinateString,
            o = this.internal.getVerticalCoordinateString;

        if (g.substring(0, 23) === "data:image/jpeg;base64,") {
          g = atob(g.replace("data:image/jpeg;base64,", ""));
        }

        if (n) {
          i = Object.keys ? Object.keys(n).length : function (w) {
            var h = 0;

            for (var v in w) {
              if (w.hasOwnProperty(v)) {
                h++;
              }
            }

            return h;
          }(n);
        } else {
          i = 0;
          this.internal.collections[d + "images"] = n = {};
          this.internal.events.subscribe("putResources", e);
          this.internal.events.subscribe("putXobjectDict", a);
        }

        var r = f(g);
        var k = {
          w: r[0],
          h: r[1],
          cs: "DeviceRGB",
          bpc: 8,
          f: "DCTDecode",
          i: i,
          data: g
        };
        n[i] = k;

        if (!t && !l) {
          t = -96;
          l = -96;
        }

        if (t < 0) {
          t = -1 * k.w * 72 / t / this.internal.scaleFactor;
        }

        if (l < 0) {
          l = -1 * k.h * 72 / l / this.internal.scaleFactor;
        }

        if (t === 0) {
          t = l * k.w / k.h;
        }

        if (l === 0) {
          l = t * k.h / k.w;
        }

        this.internal.write("q", m(t), "0 0", m(l), m(q), o(p + l), "cm /I" + k.i, "Do Q");
        return this;
      };
    })(pdfDataExport.API);

    (function (a) {
      var e = function e(q) {
        var w = "0123456789abcdef",
            o = "klmnopqrstuvwxyz",
            h = {};

        for (var r = 0; r < o.length; r++) {
          h[o[r]] = w[r];
        }

        var p,
            m = {},
            n = 1,
            t,
            k = m,
            g = [],
            s,
            l = "",
            u = "",
            v,
            j = q.length - 1,
            f;
        r = 1;

        while (r != j) {
          f = q[r];
          r += 1;

          if (f == "'") {
            if (t) {
              v = t.join("");
              t = p;
            } else {
              t = [];
            }
          } else {
            if (t) {
              t.push(f);
            } else {
              if (f == "{") {
                g.push([k, v]);
                k = {};
                v = p;
              } else {
                if (f == "}") {
                  s = g.pop();
                  s[0][s[1]] = k;
                  v = p;
                  k = s[0];
                } else {
                  if (f == "-") {
                    n = -1;
                  } else {
                    if (v === p) {
                      if (h.hasOwnProperty(f)) {
                        l += h[f];
                        v = parseInt(l, 16) * n;
                        n = +1;
                        l = "";
                      } else {
                        l += f;
                      }
                    } else {
                      if (h.hasOwnProperty(f)) {
                        u += h[f];
                        k[v] = parseInt(u, 16) * n;
                        n = +1;
                        v = p;
                        u = "";
                      } else {
                        u += f;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        return m;
      };

      var d = {
        codePages: ["WinAnsiEncoding"],
        WinAnsiEncoding: e("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
      },
          c = {
        Unicode: {
          Courier: d,
          "Courier-Bold": d,
          "Courier-BoldOblique": d,
          "Courier-Oblique": d,
          Helvetica: d,
          "Helvetica-Bold": d,
          "Helvetica-BoldOblique": d,
          "Helvetica-Oblique": d,
          "Times-Roman": d,
          "Times-Bold": d,
          "Times-BoldItalic": d,
          "Times-Italic": d
        }
      },
          b = {
        Unicode: {
          "Courier-Oblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-BoldItalic": e("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
          "Helvetica-Bold": e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
          Courier: e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Courier-BoldOblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-Bold": e("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
          Helvetica: e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
          "Helvetica-BoldOblique": e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
          "Courier-Bold": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-Italic": e("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
          "Times-Roman": e("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
          "Helvetica-Oblique": e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
        }
      };
      a.events.push(["addFonts", function (i) {
        var f,
            g,
            h,
            k,
            j = "Unicode",
            l;

        for (g in i.fonts) {
          if (i.fonts.hasOwnProperty(g)) {
            f = i.fonts[g];
            h = b[j][f.PostScriptName];

            if (h) {
              if (f.metadata[j]) {
                k = f.metadata[j];
              } else {
                k = f.metadata[j] = {};
              }

              k.widths = h.widths;
              k.kerning = h.kerning;
            }

            l = c[j][f.PostScriptName];

            if (l) {
              if (f.metadata[j]) {
                k = f.metadata[j];
              } else {
                k = f.metadata[j] = {};
              }

              k.encoding = l;

              if (l.codePages && l.codePages.length) {
                f.encoding = l.codePages[0];
              }
            }
          }
        }
      }]);
    })(pdfDataExport.API);

    var saveAs = window.jqxSaveAs = saveAs || navigator.msSaveBlob && navigator.msSaveBlob.bind(navigator) || function (h) {
      var r = h.document,
          l = function l() {
        return h.URL || h.webkitURL || h;
      },
          e = h.URL || h.webkitURL || h,
          n = $("<a></a>")[0],
          g = "download" in n,
          j = function j(t) {
        var s = r.createEvent("MouseEvents");
        s.initMouseEvent("click", true, false, h, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return t.dispatchEvent(s);
      },
          o = h.webkitRequestFileSystem,
          p = h.requestFileSystem || o || h.mozRequestFileSystem,
          m = function m(s) {
        (h.setImmediate || h.setTimeout)(function () {
          throw s;
        }, 0);
      },
          c = "application/octet-stream",
          k = 0,
          b = [],
          i = function i() {
        var t = b.length;

        while (t--) {
          var s = b[t];

          if (typeof s === "string") {
            e.revokeObjectURL(s);
          } else {
            s.remove();
          }
        }

        b.length = 0;
      },
          q = function q(t, s, w) {
        s = [].concat(s);
        var v = s.length;

        while (v--) {
          var x = t["on" + s[v]];

          if (typeof x === "function") {
            try {
              x.call(t, w || t);
            } catch (u) {
              m(u);
            }
          }
        }
      },
          f = function f(t, u) {
        var v = this,
            B = t.type,
            E = false,
            x,
            w,
            s = function s() {
          var F = l().createObjectURL(t);
          b.push(F);
          return F;
        },
            A = function A() {
          q(v, "writestart progress write writeend".split(" "));
        },
            D = function D() {
          if (E || !x) {
            x = s(t);
          }

          if (w) {
            w.location.href = x;
          }

          v.readyState = v.DONE;
          A();
        },
            z = function z(F) {
          return function () {
            if (v.readyState !== v.DONE) {
              return F.apply(this, arguments);
            }
          };
        },
            y = {
          create: true,
          exclusive: false
        },
            C;

        v.readyState = v.INIT;

        if (!u) {
          u = "download";
        }

        if (g) {
          x = s(t);
          n.href = x;
          n.download = u;

          if (j(n)) {
            v.readyState = v.DONE;
            A();
            return;
          }
        }

        if (h.chrome && B && B !== c) {
          C = t.slice || t.webkitSlice;
          t = C.call(t, 0, t.size, c);
          E = true;
        }

        if (o && u !== "download") {
          u += ".download";
        }

        if (B === c || o) {
          w = h;
        } else {
          w = h.open();
        }

        if (!p) {
          D();
          return;
        }

        k += t.size;
        p(h.TEMPORARY, k, z(function (F) {
          F.root.getDirectory("saved", y, z(function (G) {
            var H = function H() {
              G.getFile(u, y, z(function (I) {
                I.createWriter(z(function (J) {
                  J.onwriteend = function (K) {
                    w.location.href = I.toURL();
                    b.push(I);
                    v.readyState = v.DONE;
                    q(v, "writeend", K);
                  };

                  J.onerror = function () {
                    var K = J.error;

                    if (K.code !== K.ABORT_ERR) {
                      D();
                    }
                  };

                  "writestart progress write abort".split(" ").forEach(function (K) {
                    J["on" + K] = v["on" + K];
                  });
                  J.write(t);

                  v.abort = function () {
                    J.abort();
                    v.readyState = v.DONE;
                  };

                  v.readyState = v.WRITING;
                }), D);
              }), D);
            };

            G.getFile(u, {
              create: false
            }, z(function (I) {
              I.remove();
              H();
            }), z(function (I) {
              if (I.code === I.NOT_FOUND_ERR) {
                H();
              } else {
                D();
              }
            }));
          }), D);
        }), D);
      },
          d = f.prototype,
          a = function a(s, t) {
        return new f(s, t);
      };

      d.abort = function () {
        var s = this;
        s.readyState = s.DONE;
        q(s, "abort");
      };

      d.readyState = d.INIT = 0;
      d.WRITING = 1;
      d.DONE = 2;
      d.error = d.onwritestart = d.onprogress = d.onwrite = d.onabort = d.onerror = d.onwriteend = null;

      if (h.addEventListener) {
        h.addEventListener("unload", i, false);
      }

      return a;
    }(self);

    (function (a) {
      var b = "pdfDataExport IE Below 9 Shim plugin";

      a.output = function (e, d) {
        return this.internal.output(e, d);
        var c = "Output.pdf";

        switch (e) {
          case "datauristring":
          case "dataurlstring":
          case "datauri":
          case "dataurl":
          case "dataurlnewwindow":
            if (console) {
              console.log(b + ": Data URIs are not supported on IE6-9.");
            }

            break;

          case "save":
            c = d;
            break;
        }
      };
    })(pdfDataExport.API);
    /***/

  },

  /***/
  "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxdatatable.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxdatatable.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJqwidgetsFrameworkJqwidgetsNgJqwidgetsJqxdatatableJs(module, exports) {
    /*
    jQWidgets v9.0.0 (2020-Jan)
    Copyright (c) 2011-2020 jQWidgets.
    License: https://jqwidgets.com/license/
    */

    /* eslint-disable */
    (function (b) {
      b.jqx.jqxWidget("jqxDataTable", "", {});
      b.extend(b.jqx._jqxDataTable.prototype, {
        defineInstance: function defineInstance() {
          var c = {
            altRows: false,
            aggregatesHeight: 34,
            autoShowLoadElement: true,
            autoRowHeight: true,
            columnsHeight: 30,
            columns: [],
            columnGroups: null,
            columnsResize: false,
            columnsReorder: false,
            dataview: null,
            disabled: false,
            editable: false,
            editSettings: {
              saveOnPageChange: true,
              saveOnBlur: true,
              saveOnSelectionChange: true,
              cancelOnEsc: true,
              saveOnEnter: true,
              editSingleCell: false,
              editOnDoubleClick: true,
              editOnF2: true
            },
            enableHover: true,
            enableBrowserSelection: false,
            filterHeight: 35,
            filterable: false,
            filterMode: "default",
            groupsRenderer: null,
            groups: new Array(),
            headerZIndex: 359,
            height: null,
            handleKeyboardNavigation: null,
            indentWidth: 25,
            initRowDetails: false,
            loadingErrorMessage: "The data is still loading and you cannot set a property or call a method. You can do that once the data binding is completed. jqxDataTable raises the 'bindingComplete' event when the binding is completed.",
            localization: null,
            pagerHeight: 40,
            pageSize: 10,
            pageSizeOptions: ["5", "10", "20"],
            pageable: false,
            pagerPosition: "bottom",
            pagerMode: "default",
            pageSizeMode: "default",
            pagerButtonsCount: 5,
            pagerRenderer: null,
            ready: null,
            rendertoolbar: null,
            rowDetails: false,
            renderStatusBar: null,
            rendered: null,
            rendering: null,
            rtl: false,
            sortable: false,
            showtoolbar: false,
            showstatusbar: false,
            statusBarHeight: 34,
            serverProcessing: false,
            selectionMode: "multiplerows",
            scrollBarSize: b.jqx.utilities.scrollBarSize,
            touchScrollBarSize: b.jqx.utilities.touchScrollBarSize,
            showAggregates: false,
            showHeader: true,
            maxHeight: 999999,
            maxWidth: 999999,
            autoBind: true,
            beginEdit: null,
            endEdit: null,
            autokoupdates: true,
            columnsVirtualization: false,
            exportSettings: {
              columnsHeader: true,
              hiddenColumns: false,
              serverURL: null,
              characterSet: null,
              collapsedRecords: false,
              recordsInView: true,
              fileName: "jqxDataTable"
            },
            source: {
              beforeprocessing: null,
              beforesend: null,
              loaderror: null,
              localdata: null,
              data: null,
              datatype: "array",
              datafields: [],
              url: "",
              root: "",
              record: "",
              id: "",
              totalrecords: 0,
              recordstartindex: 0,
              recordendindex: 0,
              loadallrecords: true,
              sortcolumn: null,
              sortdirection: null,
              sort: null,
              filter: null,
              sortcomparer: null
            },
            toolbarHeight: 34,
            tableZIndex: 369,
            _updating: false,
            touchmode: "auto",
            width: null,
            that: this,
            incrementalSearch: true,
            events: ["bindingComplete", "sort", "filter", "pageChanged", "pageSizeChanged", "rowClick", "rowDoubleClick", "cellValueChanged", "rowBeginEdit", "rowEndEdit", "rowSelect", "rowUnselect", "rowCheck", "rowUncheck", "columnResized", "columnReordered", "rowExpand", "rowCollapse", "cellBeginEdit", "cellEndEdit"]
          };

          if (this === b.jqx._jqxDataTable.prototype) {
            return c;
          }

          b.extend(true, this, c);
          this.that = this;
          return c;
        },
        createInstance: function createInstance(e) {
          var l = this;

          if (b.jqx.utilities.scrollBarSize != 13) {
            l.scrollBarSize = b.jqx.utilities.scrollBarSize;
          }

          if (l.element.nodeName.toLowerCase() == "table" || b(l.element).children("table").length > 0) {
            var n = l.host.find("tbody tr");
            var d = l.host.find("th");
            var w = new Array();

            if (d.length === 0) {
              d = n[0];
              n.splice(0, 1);
            }

            if (l.localizestrings) {
              l.localizestrings();

              if (l.localization != null) {
                l.localizestrings(l.localization, false);
              }
            }

            var z = [];

            for (var u = 0; u < n.length; u++) {
              var k = n[u];
              var h = {};

              for (var t = 0; t < d.length; t++) {
                var g = b.trim(b(d[t]).text());

                if (u === 0) {
                  var s = {
                    name: g
                  };

                  if (l.columns[t] && l.columns[t].cellsFormat) {
                    var v = l.columns[t].cellsFormat.toLowerCase();

                    if (v.indexOf("p") != -1 || v.indexOf("c") != -1 || v.indexOf("n") != -1 || v.indexOf("f") != -1) {
                      s.type = "number";
                    }

                    if (v.indexOf("d") != -1 || v.indexOf("m") != -1 || v.indexOf("y") != -1 || v.indexOf("h") != -1 || v.indexOf("m") != -1 || v.indexOf("s") != -1 || v.indexOf("t") != -1) {
                      s.type = "date";
                    }
                  }

                  w.push(s);
                }

                var c = b(k).find("td:eq(" + t + ")");
                var f = w[t].type;

                if (f) {
                  var p = l.getvaluebytype(b.trim(c.text()), w[t]);
                  h[g] = p;
                } else {
                  h[g] = b.trim(c.text());
                }
              }

              z[z.length] = h;
            }

            l.host.wrap("<div></div>");
            var m = l.host.parent();
            var q = l.host.data();
            q.jqxDataTable.host = m;
            q.jqxDataTable.element = m[0];
            l.host.parent()[0].id = l.element.id;

            try {
              l.host.parent()[0].style = l.element.style;
            } catch (r) {}

            l.element = m[0];
            l.host = m;
            l.host.data(q);
            var o = {
              dataFields: w,
              localdata: z,
              datatype: "array"
            };
            var y = new b.jqx.dataAdapter(o);
            l.source = y;
          }

          if (l.source && !l.source.dataBind) {
            l.source = new b.jqx.dataAdapter(l.source);
          }

          var x = l.source._source.datafields;

          if (x && x.length > 0) {
            l._camelCase = l.source._source.dataFields !== undefined;
            l.selectionMode = l.selectionMode.toLowerCase();
          }

          if (l.host.attr("tabindex") == null) {
            l.host.attr("tabindex", "0");
          }

          l.host.attr("role", "grid");
          l.host.attr("align", "left");
          l.host.addClass(l.toTP("jqx-grid"));
          l.host.addClass(l.toTP("jqx-reset"));
          l.host.addClass(l.toTP("jqx-rc-all"));
          l.host.addClass(l.toTP("jqx-widget"));
          l.host.addClass(l.toTP("jqx-widget-content"));

          if (l._testmodules()) {
            return;
          }

          l.render(true);
          b.jqx.utilities.resize(l.host, function () {
            var A = b(window).width();
            var i = b(window).height();
            var j = l.host.width();
            var B = l.host.height();

            if (l._lastHostWidth != j || l._lastHostHeight != B) {
              l._updatesize(l._lastHostWidth != j, l._lastHostHeight != B);
            }

            l._lastWidth = A;
            l._lastHeight = i;
            l._lastHostWidth = j;
            l._lastHostHeight = B;
          });
        },
        getvaluebytype: function getvaluebytype(h, d) {
          var f = h;

          if (h == null) {
            return h;
          }

          if (this.gridlocalization.decimalseparator == ",") {
            if (h.indexOf(this.gridlocalization.decimalseparator) >= 0) {
              h = h.replace(this.gridlocalization.decimalseparator, ".");
            }
          }

          if (h.indexOf(this.gridlocalization.currencysymbol) >= 0) {
            h = h.replace(this.gridlocalization.currencysymbol, "");
          }

          if (h.indexOf(this.gridlocalization.percentagesymbol) >= 0) {
            h = h.replace(this.gridlocalization.percentagesymbol, "");
          }

          if (b.isArray(h) && d.type != "array") {
            for (var e = 0; e < h.length; e++) {
              h[e] = this.getvaluebytype(h[e], d);
            }

            return h;
          }

          if (d.type == "date") {
            if (h == "NaN") {
              h = "";
            } else {
              var g = new Date(h);

              if (typeof h == "string") {
                if (d.format) {
                  var c = b.jqx.dataFormat.parsedate(h, d.format);

                  if (c != null) {
                    g = c;
                  }
                }
              }

              if (g.toString() == "NaN" || g.toString() == "Invalid Date") {
                if (b.jqx.dataFormat) {
                  h = b.jqx.dataFormat.tryparsedate(h);
                } else {
                  h = g;
                }
              } else {
                h = g;
              }

              if (h == null) {
                h = f;
              }
            }
          } else {
            if (d.type == "float" || d.type == "number" || d.type == "decimal") {
              if (h == "NaN") {
                h = "";
              } else {
                var h = parseFloat(h);

                if (isNaN(h)) {
                  h = f;
                }
              }
            } else {
              if (d.type == "int" || d.type == "integer") {
                var h = parseInt(h);

                if (isNaN(h)) {
                  h = f;
                }
              } else {
                if (d.type == "bool" || d.type == "boolean") {
                  if (h != null) {
                    if (h.toLowerCase != undefined) {
                      if (h.toLowerCase() == "false") {
                        h = false;
                      } else {
                        if (h.toLowerCase() == "true") {
                          h = true;
                        }
                      }
                    }
                  }

                  if (h == 1) {
                    h = true;
                  } else {
                    if (h == 0 && h !== "") {
                      h = false;
                    } else {
                      h = "";
                    }
                  }
                }
              }
            }
          }

          return h;
        },
        _builddataloadelement: function _builddataloadelement() {
          if (this.dataloadelement) {
            this.dataloadelement.remove();
          }

          this.dataloadelement = b('<div class="jqx-datatable-load" style="z-index: 99998; background-color:rgba(50,50,50,0.1); overflow: hidden; position: absolute;"></div>');
          var d = b('<div style="z-index: 99999; margin-left: -66px; left: 50%; top: 50%; margin-top: -24px; position: relative; width: 100px; height: 33px; padding: 5px; font-family: verdana; font-size: 12px; color: #767676; border-color: #898989; border-width: 1px; border-style: solid; background: #f6f6f6; border-collapse: collapse;"><div style="float: left;"><div style="float: left; overflow: hidden; width: 32px; height: 32px;" class="jqx-grid-load"/><span style="margin-top: 10px; float: left; display: block; margin-left: 5px;" >' + this.gridlocalization.loadtext + "</span></div></div>");
          d.addClass(this.toTP("jqx-rc-all"));
          this.dataloadelement.addClass(this.toTP("jqx-rc-all"));
          d.addClass(this.toTP("jqx-fill-state-normal"));
          this.dataloadelement.append(d);
          this.dataloadelement.width(this.width);
          this.dataloadelement.height(this.height);
          this.host.prepend(this.dataloadelement);

          if (this.source._source.url != "") {
            var c = false;

            if (this.height === "auto" || this.height === null || this.autoheight) {
              if (this.maxHeight == 999999) {
                c = true;
              }
            }

            if (c) {
              this.host.height(100);
              this.dataloadelement.height(100);
            } else {
              this.host.height(this.height);
              this.dataloadelement.height(this.height);
            }

            var e = false;

            if (this.width === "auto" || this.width === null || this.autoWidth) {
              e = true;
            }

            if (e) {
              this.host.width(300);
              this.dataloadelement.width(300);
            } else {
              this.host.width(this.width);
              this.dataloadelement.width(this.width);
            }
          }
        },
        _measureElement: function _measureElement(d) {
          var c = b("<span style='visibility: hidden; white-space: nowrap;'>measure Text</span>");
          c.addClass(this.toTP("jqx-widget"));
          b(document.body).append(c);

          if (d == "cell") {
            this._cellheight = c.height();
          } else {
            this._columnheight = c.height();
          }

          c.remove();
        },
        _testmodules: function _testmodules() {
          var g = "";
          var e = this;

          var c = function c() {
            if (g.length != "") {
              g += ",";
            }
          };

          if (!this.host.jqxScrollBar) {
            c();
            g += " jqxscrollbar.js";
          }

          if (!this.host.jqxButton) {
            c();
            g += " jqxbuttons.js";
          }

          if (!b.jqx.dataAdapter) {
            c();
            g += " jqxdata.js";
          }

          if (g != "" || this.editable || this.filterable || this.pageable) {
            var d = [];

            var f = function f(h) {
              switch (h) {
                case "checkbox":
                  if (!e.host.jqxCheckBox && !d.checkbox) {
                    d.checkbox = true;
                    c();
                    g += " jqxcheckbox.js";
                  }

                  break;

                case "dropdownlist":
                  if (!e.host.jqxDropDownList && !d.dropdownlist) {
                    c();
                    d.dropdownlist = true;
                    g += " jqxdropdownlist.js(requires: jqxlistbox.js)";
                  } else {
                    if (!e.host.jqxListBox && !d.listbox) {
                      c();
                      d.listbox = true;
                      g += " jqxlistbox.js";
                    }
                  }

                  break;
              }
            };

            if (this.filterable && this.filterMode != "simple" || this.pagerMode == "advanced" && this.pageable) {
              f("dropdownlist");
            }

            if (g != "") {
              throw new Error("jqxDataTable: Missing references to the following module(s): " + g);
              this.host.remove();
              return true;
            }
          }

          return false;
        },
        focus: function focus() {
          try {
            this.wrapper.focus();
            this.host.focus();
            var d = this;
            setTimeout(function () {
              d.wrapper.focus();
              d.host.focus();
            }, 25);
            this.focused = true;
          } catch (c) {}
        },
        hiddenParent: function hiddenParent() {
          return b.jqx.isHidden(this.host);
        },
        isBindingCompleted: function isBindingCompleted() {
          return !this._loading;
        },
        _updatesize: function _updatesize(i, h) {
          if (this._loading) {
            return;
          }

          var f = this;
          var g = f.host.width();
          var e = f.host.height();

          if (!f._oldWidth) {
            f._oldWidth = g;
          }

          if (!f._oldHeight) {
            f._oldHeight = e;
          }

          if (f._resizeTimer != undefined) {
            clearTimeout(f._resizeTimer);
            f._resizeTimer = null;
          }

          var d = 300;

          var c = function c() {
            if (f._resizeTimer) {
              clearTimeout(f._resizeTimer);
            }

            f.resizingGrid = true;

            if (b.jqx.isHidden(f.host)) {
              return;
            }

            f._updatecolumnwidths();

            f.refresh();
            f._oldWidth = g;
            f._oldHeight = e;
            f.resizingGrid = false;
          };

          c();
          f._resizeTimer = setTimeout(function () {
            var k = f.host.width();
            var j = f.host.height();

            if (f._oldWidth != k || f._oldHeight != j) {
              c();
            }
          }, d);
        },
        resize: function resize(d, c) {
          if (d != undefined) {
            this.width = d;
          }

          if (c != undefined) {
            this.height = c;
          }

          this._updatecolumnwidths();

          this.refresh();
        },
        isTouchDevice: function isTouchDevice() {
          if (this.touchDevice != undefined) {
            return this.touchDevice;
          }

          var c = b.jqx.mobile.isTouchDevice();
          this.touchDevice = c;

          if (this.touchmode == true) {
            c = true;
            b.jqx.mobile.setMobileSimulator(this.table[0]);
            this.touchDevice = c;
          } else {
            if (this.touchmode == false) {
              c = false;
            }
          }

          if (c) {
            this.touchDevice = true;
            this.host.addClass(this.toThemeProperty("jqx-touch"));
            this.host.find("jqx-widget-content").addClass(this.toThemeProperty("jqx-touch"));
            this.host.find("jqx-widget-header").addClass(this.toThemeProperty("jqx-touch"));
            this.scrollBarSize = this.touchScrollBarSize;
          }

          return c;
        },
        toTP: function toTP(c) {
          return this.toThemeProperty(c);
        },
        localizestrings: function localizestrings(c, f) {
          this._cellscache = new Array();

          if (b.jqx.dataFormat) {
            b.jqx.dataFormat.cleardatescache();
          }

          if (this._loading) {
            throw new Error("jqxDataTable: " + this.loadingErrorMessage);
            return false;
          }

          if (c != null) {
            for (var h in c) {
              if (h.toLowerCase() !== h) {
                c[h.toLowerCase()] = c[h];
              }
            }

            var j = ["pagergotopagestring", "pagershowrowsstring", "pagerrangestring", "pagernextbuttonstring", "pagerpreviousbuttonstring", "pagerfirstbuttonstring", "pagerlastbuttonstring", "toppagerstring", "firstDay", "days", "months", "AM", "PM", "patterns", "percentsymbol", "currencysymbol", "currencysymbolposition", "decimalseparator", "thousandsseparator", "filterapplystring", "filteraddnew", "filtercancelstring", "filterclearstring", "filterstring", "filterstringcomparisonoperators", "filternumericcomparisonoperators", "filterdatecomparisonoperators", "filterbooleancomparisonoperators", "emptydatastring", "filterselectstring", "todaystring", "clearstring", "validationstring", "loadtext", "filtersearchstring", "loadingErrorMessage"];
            var g = this;

            for (var e = 0; e < j.length; e++) {
              var d = j[e];

              if (c[d] !== undefined) {
                g.gridlocalization[d] = c[d];
              }
            }

            if (c.loadingErrorMessage) {
              this.loadingErrorMessage = c.loadingErrorMessage;
            }

            if (f !== false) {
              this._builddataloadelement();

              b(this.dataloadelement).css("visibility", "hidden");
              b(this.dataloadelement).css("display", "none");
            }
          } else {
            this.gridlocalization = {
              "/": "/",
              ":": ":",
              firstDay: 0,
              days: {
                names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
              },
              months: {
                names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
              },
              AM: ["AM", "am", "AM"],
              PM: ["PM", "pm", "PM"],
              eras: [{
                name: "A.D.",
                start: null,
                offset: 0
              }],
              twoDigitYearMax: 2029,
              patterns: {
                d: "M/d/yyyy",
                D: "dddd, MMMM dd, yyyy",
                t: "h:mm tt",
                T: "h:mm:ss tt",
                f: "dddd, MMMM dd, yyyy h:mm tt",
                F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                M: "MMMM dd",
                Y: "yyyy MMMM",
                S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                ISO: "yyyy-MM-dd hh:mm:ss",
                ISO2: "yyyy-MM-dd HH:mm:ss",
                d1: "dd.MM.yyyy",
                d2: "dd-MM-yyyy",
                d3: "dd-MMMM-yyyy",
                d4: "dd-MM-yy",
                d5: "H:mm",
                d6: "HH:mm",
                d7: "HH:mm tt",
                d8: "dd/MMMM/yyyy",
                d9: "MMMM-dd",
                d10: "MM-dd",
                d11: "MM-dd-yyyy"
              },
              percentsymbol: "%",
              currencysymbol: "$",
              currencysymbolposition: "before",
              decimalseparator: ".",
              thousandsseparator: ",",
              pagergotopagestring: "Go to page:",
              pagershowrowsstring: "Show rows:",
              pagerrangestring: " of ",
              pagerpreviousbuttonstring: "previous",
              pagernextbuttonstring: "next",
              pagerfirstbuttonstring: "first",
              pagerlastbuttonstring: "last",
              filterapplystring: "Apply",
              filtercancelstring: "Cancel",
              filterclearstring: "Clear Filter",
              filterstring: "advanced",
              filtersearchstring: "Search:",
              filterstringcomparisonoperators: ["empty", "not empty", "contains", "contains(match case)", "does not contain", "does not contain(match case)", "starts with", "starts with(match case)", "ends with", "ends with(match case)", "equal", "equal(match case)", "null", "not null"],
              filternumericcomparisonoperators: ["equal", "not equal", "less than", "less than or equal", "greater than", "greater than or equal", "null", "not null"],
              filterdatecomparisonoperators: ["equal", "not equal", "less than", "less than or equal", "greater than", "greater than or equal", "null", "not null"],
              filterbooleancomparisonoperators: ["equal", "not equal"],
              validationstring: "Entered value is not valid",
              emptydatastring: "No data to display",
              filterselectstring: "Select Filter",
              loadtext: "Loading...",
              clearstring: "Clear",
              todaystring: "Today",
              loadingErrorMessage: "The data is still loading and you cannot set a property or call a method. You can do that once the data binding is completed. jqxDataTable raises the 'bindingComplete' event when the binding is completed."
            };
          }
        },
        _updateScrollbars: function _updateScrollbars(m) {
          var p = false;

          if (this.width === "auto" || this.width === null || this.autowidth) {
            if (this.maxWidth == 999999) {
              p = true;
            }
          }

          var d = parseInt(this.scrollBarSize);
          var j = this.table ? this.table.height() : 0;
          var n = 0;
          var e = "inherit";
          var h = this.vScrollBar[0].style.visibility;
          var l = this.hScrollBar[0].style.visibility;

          if (!m) {
            var g = this.host.height();
          } else {
            var g = m;
          }

          if (!this.columnGroups) {
            g -= this.showHeader ? this.columnsHeight : 0;
          } else {
            g -= this.showHeader ? this.columnsheader.height() : 0;
          }

          if (this.filterable) {
            g -= this.filter.height();
          }

          if (this.pageable) {
            g -= this.pagerHeight;

            if (this.pagerPosition === "both") {
              g -= this.pagerHeight;
            }
          }

          if (this.showtoolbar) {
            g -= this.toolbarHeight;
          }

          if (this.showstatusbar) {
            g -= this.statusBarHeight;
          }

          if (this.showAggregates) {
            g -= this.aggregatesHeight;
          }

          var q = false;

          if (this.height === "auto" || this.height === null || this.autoheight) {
            if (this.maxHeight == 999999) {
              q = true;
            }
          }

          if (!q && j > g && (this.source.records.length > 0 || this.source.hierarchy && this.source.hierarchy.length > 0)) {
            this.vScrollBar[0].style.visibility = e;
            n = 4 + parseInt(d);
            this.vScrollBar.jqxScrollBar({
              max: j - g
            });
          } else {
            this.vScrollBar[0].style.visibility = "hidden";
          }

          if (h != this.vScrollBar[0].style.visibility) {
            this._updatecolumnwidths();

            var i = this.table.height();

            if (j != i) {
              j = i;

              if (!q && j > g && (this.source.records.length > 0 || this.source.hierarchy && this.source.hierarchy.length > 0)) {
                this.vScrollBar[0].style.visibility = e;
                n = 4 + parseInt(d);
                this.vScrollBar.jqxScrollBar({
                  max: j - g
                });
              }
            }
          }

          if (this.scrollBarSize == 0) {
            n = 0;
          }

          var o = this.table ? this.table.width() : 0;

          if (o > 3) {
            o -= 3;
          }

          var c = parseInt(this.host.css("border-left-width")) + parseInt(this.host.css("border-right-width"));
          var r = c + this.host.width() - n;

          if (o > r && !p) {
            this.hScrollBar[0].style.visibility = e;
            this.hScrollBar.jqxScrollBar({
              max: o - r
            });
            n = 4 + parseInt(d);

            if (d == 0) {
              n = 0;
            }

            if (!q) {
              if (j > g - n + 4 && (this.source.records.length > 0 || this.source.hierarchy && this.source.hierarchy.length > 0)) {
                this.hScrollBar.jqxScrollBar({
                  max: c + o - r
                });
                var f = this.vScrollBar[0].style.visibility === "hidden";
                this.vScrollBar[0].style.visibility = e;

                this._updatecolumnwidths();

                if (f) {
                  this.hScrollBar.jqxScrollBar({
                    max: o - r + n + c
                  });
                }

                var k = this.table ? this.table.width() : 0;

                if (k > 3) {
                  k -= 3;
                }

                if (k != o) {
                  if (k < r) {
                    this.hScrollBar.jqxScrollBar({
                      max: c + k - r
                    });
                    this.hScrollBar[0].style.visibility = "hidden";
                    n = 0;
                  }
                }
              }

              this.vScrollBar.jqxScrollBar({
                max: j - g + n
              });
            }
          } else {
            this.hScrollBar[0].style.visibility = "hidden";
          }

          if (this.source.records.length === 0 && this.source.hierarchy && this.source.hierarchy.length === 0) {
            this.vScrollBar[0].style.visibility = "hidden";
            this.bottomRight[0].style.visibility = "hidden";
          }

          if (this.vScrollBar[0].style.visibility == "hidden") {
            if (this.vScrollInstance.value != 0) {
              this.vScrollInstance.setPosition(0);
            }
          }
        },
        _measureElementWidth: function _measureElementWidth(e) {
          var d = b("<span style='visibility: hidden; white-space: nowrap;'>" + e + "</span>");
          d.addClass(this.toTP("jqx-widget"));
          d.addClass(this.toTP("jqx-grid"));
          d.addClass(this.toTP("jqx-grid-column-header"));
          d.addClass(this.toTP("jqx-widget-header"));
          b(document.body).append(d);
          var c = d.outerWidth() + 20;
          d.remove();
          return c;
        },
        _arrangeAutoHeight: function _arrangeAutoHeight(e) {
          if (!e) {
            e = 0;
          }

          if (this.height === "auto" || this.height === null || this.autoheight) {
            var h = this.table.height();
            var g = 0;

            if (!this.columnGroups) {
              g += this.showHeader ? this.columnsHeight : -1;
            } else {
              g += this.showHeader ? this.columnsheader.height() : -1;
            }

            g += this.showstatusbar ? this.statusBarHeight : 0;
            g += this.showAggregates ? this.aggregatesHeight : 0;
            g += this.showtoolbar ? this.toolbarHeight : 0;
            g += this.pageable ? this.pagerHeight : 0;

            if (this.pagerPosition === "both") {
              g += this.pageable ? this.pagerHeight : 0;
            }

            g += h;

            if (this.filterable) {
              var f = this.filter.find(".filterrow");
              var c = this.filter.find(".filterrow-hidden");
              var d = 1;

              if (c.length > 0) {
                d = 0;
              }

              g += this.filterHeight - 1 + this.filterHeight * f.length * d;
            }

            if (g + e > this.maxHeight) {
              this.host.height(this.maxHeight);
            } else {
              this.host.height(g + e);
            }

            return true;
          }

          return false;
        },
        _arrangeAutoWidth: function _arrangeAutoWidth(e) {
          if (!e) {
            e = 0;
          }

          if (this.width === "auto" || this.width === null || this.autowidth) {
            var d = 0;

            for (var f = 0; f < this.columns.records.length; f++) {
              var c = this.columns.records[f].width;

              if (this.columns.records[f].hidden) {
                continue;
              }

              if (c == "auto") {
                c = this._measureElementWidth(this.columns.records[f].text);
                d += c;
              } else {
                d += c;
              }
            }

            var g = d;

            if (g + e > this.maxWidth) {
              this.host.width(this.maxWidth);
            } else {
              this.host.width(g + e);
            }

            return true;
          }

          return false;
        },
        _measureTopAndHeight: function _measureTopAndHeight() {
          var d = this.host.height();
          var h = 0;

          if (this.showtoolbar) {
            h += this.toolbarHeight;
            d -= parseInt(this.toolbarHeight);
          }

          if (this.filterable) {
            var g = this.filter.find(".filterrow");
            var e = this.filter.find(".filterrow-hidden");
            var f = 1;

            if (e.length > 0) {
              f = 0;
            }

            h += this.filterHeight;
            d -= parseInt(this.filterHeight);
            var c = f == 1 ? g.length : 0;
            h += this.filterHeight * c;
            d -= this.filterHeight * c;
          }

          if (this.pageable && this.pagerPosition != "bottom") {
            h += parseInt(this.pagerHeight) + 1;

            if (d > this.pagerHeight && this.pagerPosition === "both") {
              d -= parseInt(this.pagerHeight);
            }
          }

          return {
            top: h,
            height: d
          };
        },
        _arrange: function _arrange() {
          if (!this.table) {
            return;
          }

          this._arrangeAutoHeight();

          this._arrangeAutoWidth();

          var v = this.host.width();
          var r = this.host.height();
          var j = r;
          var i = this;

          if (this.pageable) {
            if (this.pagerPosition === "bottom") {
              this.toppager[0].style.visibility = "hidden";
              this.pager[0].style.visibility = "inherit";
            } else {
              if (this.pagerPosition === "both") {
                this.toppager[0].style.visibility = "inherit";
                this.pager[0].style.visibility = "inherit";
              } else {
                if (this.pagerPosition === "top") {
                  this.toppager[0].style.visibility = "inherit";
                  this.pager[0].style.visibility = "hidden";
                }
              }
            }
          } else {
            this.toppager[0].style.visibility = "hidden";
            this.pager[0].style.visibility = "hidden";
          }

          var q = 0;

          if (this.showtoolbar) {
            this.toolbar.width(v);
            this.toolbar.height(this.toolbarHeight - 1);
            this.toolbar.css("top", 0);
            q += this.toolbarHeight;
            r -= parseInt(this.toolbarHeight);
          } else {
            this.toolbar[0].style.height = "0px";
          }

          if (this.filterable) {
            this.filter.width(v);
            this.filter.css("top", q);
            var t = this.filter.find(".filterrow");
            var h = this.filter.find(".filterrow-hidden");
            var A = 1;

            if (h.length > 0) {
              A = 0;
            }

            this.filter.height(this.filterHeight - 1 + this.filterHeight * t.length * A);
            q += this.filterHeight;
            r -= parseInt(this.filterHeight);
            var x = A == 1 ? t.length : 0;
            q += this.filterHeight * x;
            r -= this.filterHeight * x;
          }

          if (this.showstatusbar) {
            this.statusbar.width(!this.table ? v : Math.max(v, this.table.width()));
            this.statusbar.height(this.statusBarHeight - 1);
          } else {
            this.statusbar[0].style.height = "0px";
          }

          if (this.showAggregates) {
            this.aggregates.height(this.aggregatesHeight - 1);
          } else {
            this.aggregates[0].style.height = "0px";
          }

          if (this.pageable && this.pagerPosition != "bottom") {
            this.toppager[0].style.width = v + "px";
            this.toppager[0].style.height = parseInt(this.pagerHeight) + "px";
            this.toppager[0].style.top = parseInt(q) + "px";
            q += parseInt(this.pagerHeight) + 1;

            if (r > this.pagerHeight) {
              r -= parseInt(this.pagerHeight);
            }
          } else {
            if (this.toppager[0].style.width != v + "px") {
              this.toppager[0].style.width = parseInt(v) + "px";
            }

            if (this.toppager[0].style.height != this.pagerHeight + "px") {
              this.toppager[0].style.height = parseInt(this.pagerHeight) + "px";
            }

            if (this.toppager[0].style.top != q + "px") {
              this.toppager[0].style.top = q + "px";
            }

            var y = this.pagerPosition != "bottom" ? this.pagerHeight : 0;
            var d = q + y + "px";

            if (this.content[0].style.top != d) {
              this.content[0].style.top = q + this.pagerHeight + "px";
            }
          }

          this._updateScrollbars(j);

          var c = parseInt(this.scrollBarSize);
          var n = 4;
          var e = 2;
          var f = 0;

          if (this.vScrollBar[0].style.visibility != "hidden") {
            f = c + n;
          }

          if (this.hScrollBar[0].style.visibility != "hidden") {
            e = c + n + 2;
          }

          if (c == 0) {
            f = 0;
            e = 0;
          }

          if (this.showAggregates) {
            if (this.hScrollBar[0].style.visibility === "hidden") {
              this.aggregates.width(!this.table ? v : Math.max(v, this.table.width()) + 4);
            } else {
              this.aggregates.width("auto");
            }
          }

          if ("hidden" != this.vScrollBar[0].style.visibility || "hidden" != this.hScrollBar[0].style.visibility) {
            var w = this._arrangeAutoHeight(e - 2);

            var s = this._arrangeAutoWidth(f + 1);

            if (w || s) {
              var v = this.host.width();
              this.toppager[0].style.width = parseInt(v) + "px";
              this.toolbar[0].style.width = parseInt(v) + "px";
              this.statusbar[0].style.width = parseInt(v) + "px";
              this.filter[0].style.width = parseInt(v) + "px";
            }

            if (w) {
              var B = this._measureTopAndHeight();

              q = B.top;
              r = B.height;
            }
          }

          var m = 0;

          if (this.pageable) {
            m = this.pagerHeight;

            if (this.pagerPosition != "top") {
              e += this.pagerHeight;
            }
          }

          if (this.showAggregates) {
            e += this.aggregatesHeight;
            m += this.aggregatesHeight;
          }

          if (this.showstatusbar) {
            e += this.statusBarHeight;
            m += this.statusBarHeight;
          }

          if (this.hScrollBar[0].style.height != c + "px") {
            this.hScrollBar[0].style.height = parseInt(c) + "px";
          }

          if (this.hScrollBar[0].style.top != q + r - n - c - m + "px" || this.hScrollBar[0].style.left != "0px") {
            this.hScrollBar[0].style.top = q + r - n - c - m - 1 + "px";
            this.hScrollBar[0].style.left = "0px";
          }

          var l = this.hScrollBar[0].style.width;
          var g = false;
          var z = false;

          if (f == 0) {
            if (l != v - 2 + "px") {
              this.hScrollBar[0].style.width = v - 2 + "px";
              g = true;
            }
          } else {
            if (l != v - c - n + "px") {
              this.hScrollBar[0].style.width = v - c - n + "px";
              g = true;
            }
          }

          if (this.vScrollBar[0].style.width != c + "px") {
            this.vScrollBar[0].style.width = c + "px";
            z = true;
          }

          if (this.vScrollBar[0].style.height != parseInt(r) - e + "px") {
            this.vScrollBar[0].style.height = parseInt(r) - e + "px";
            z = true;
          }

          if (this.vScrollBar[0].style.left != parseInt(v) - parseInt(c) - n + "px" || this.vScrollBar[0].style.top != q + "px") {
            this.vScrollBar[0].style.top = q + "px";
            this.vScrollBar[0].style.left = parseInt(v) - parseInt(c) - n + "px";
          }

          if (this.rtl) {
            this.vScrollBar.css({
              left: "0px",
              top: q
            });

            if (this.vScrollBar.css("visibility") != "hidden") {
              this.hScrollBar.css({
                left: c + 2
              });
            }
          }

          var k = this.vScrollInstance;
          k.disabled = this.disabled;
          var u = this.hScrollInstance;
          u.disabled = this.disabled;

          if (g) {
            u.refresh();
          }

          if (z) {
            k.refresh();
          }

          var o = function o(C) {
            if (C.vScrollBar[0].style.visibility != "hidden" && C.hScrollBar[0].style.visibility != "hidden") {
              C.bottomRight[0].style.visibility = "inherit";
              C.bottomRight[0].style.left = 1 + parseInt(C.vScrollBar.css("left")) + "px";
              C.bottomRight[0].style.top = parseInt(C.hScrollBar.css("top")) + "px";

              if (C.rtl) {
                C.bottomRight.css("left", "0px");
              }

              C.bottomRight[0].style.width = parseInt(c) + 3 + "px";
              C.bottomRight[0].style.height = parseInt(c) + 4 + "px";

              if (C.showAggregates) {
                C.bottomRight.css("z-index", 99);
                C.bottomRight.height(parseInt(c) + 4 + C.aggregatesHeight);
                C.bottomRight.css({
                  top: parseInt(C.hScrollBar.css("top")) - C.aggregatesHeight
                });
              }
            } else {
              C.bottomRight[0].style.visibility = "hidden";
            }
          };

          o(this);

          if (this.content[0].style.width != v - f + "px") {
            this.content[0].style.width = v - f + "px";
          }

          if (this.content[0].style.height != r - e + 3 + "px") {
            this.content[0].style.height = r - e + 3 + "px";
          }

          if (this.content[0].style.top != q + "px") {
            this.content[0].style.top = parseInt(q) + "px";
          }

          if (this.rtl) {
            this.content.css("left", f);

            if (this.filter && this.filter.children().length > 0) {
              b(this.filter.children()).css("left", f);
            }

            if (this.table) {
              var p = this.table.width();

              if (p < v - f) {
                this.content.css("left", v - p + 2);

                if (this.filter && this.filter.children().length > 0) {
                  b(this.filter.children()).css("left", v - p + 2);
                }
              }
            }
          }

          if (this.showAggregates) {
            this.aggregates.css("top", q + r - this.aggregatesHeight - (this.pageable ? this.pagerHeight : 0) - (this.showstatusbar ? this.statusBarHeight + 1 : 0));

            if (this.rtl) {
              this.aggregates.css("left", "0px");
            }

            if (this.hScrollBar.css("visibility") != "hidden") {
              this.hScrollBar.css({
                top: q + r - n - c - m + this.aggregatesHeight + "px"
              });
              this.aggregates.css("top", 1 + q + r - c - 5 - this.aggregatesHeight - (this.pageable ? this.pagerHeight : 0) - (this.showstatusbar ? this.statusBarHeight + 1 : 0));
            }

            o(this);
          }

          if (this.showstatusbar) {
            this.statusbar.css("top", q + r - this.statusBarHeight - (this.pageable ? this.pagerHeight : 0));

            if (this.rtl) {
              if (this.hScrollBar.css("visibility") == "hidden") {
                this.statusbar.css("left", this.content.css("left"));
              } else {
                this.statusbar.css("left", "0px");
              }
            }
          }

          if (this.pageable) {
            this.pager[0].style.width = v + "px";
            this.pager[0].style.height = this.pagerHeight + "px";
            this.pager[0].style.top = parseInt(q) + parseInt(r) - parseInt(this.pagerHeight) - 1 + "px";
          } else {
            this.pager[0].style.height = "0px";
          }

          this.vScrollBar[0].style.zIndex = this.tableZIndex + this.headerZIndex + 10 + this.columns.records.length;
          this.hScrollBar[0].style.zIndex = this.tableZIndex + this.headerZIndex + 10 + this.columns.records.length;

          if (v != parseInt(this.dataloadelement[0].style.width)) {
            this.dataloadelement[0].style.width = this.element.style.width;
          }

          if (r != parseInt(this.dataloadelement[0].style.height)) {
            this.dataloadelement[0].style.height = this.element.style.height;
          }

          this._hostwidth = v;
        },
        scrollOffset: function scrollOffset(e, d) {
          if (arguments.length == 0 || e != null && typeof e == "object" && !e.top) {
            return {
              left: this.hScrollBar.jqxScrollBar("value"),
              top: this.vScrollBar.jqxScrollBar("value")
            };
          }

          if (e != null && typeof e == "object") {
            var d = e.left;
            var c = e.top;
            var e = c;
          }

          if (e == null || d == null || e == undefined || d == undefined) {
            return;
          }

          this.vScrollBar.jqxScrollBar("setPosition", e);
          this.hScrollBar.jqxScrollBar("setPosition", d);
        },
        scrollleft: function scrollleft(c) {
          if (c == null || c == undefined) {
            return;
          }

          if (this.hScrollBar.css("visibility") != "hidden") {
            this.hScrollBar.jqxScrollBar("setPosition", c);
          }
        },
        scrolltop: function scrolltop(c) {
          if (c == null || c == undefined) {
            return;
          }

          if (this.vScrollBar.css("visibility") != "hidden") {
            this.vScrollBar.jqxScrollBar("setPosition", c);
          }
        },
        beginUpdate: function beginUpdate() {
          this._updating = true;
          this._datachanged = false;
        },
        endUpdate: function endUpdate(c) {
          this._updating = false;

          if (c === false) {
            return;
          }

          this._rendercolumnheaders();

          this.refresh();
        },
        updating: function updating() {
          return this._updating;
        },
        databind: function databind(h, j, c) {
          if (this.loadingstate === true) {
            return;
          }

          var d = window;

          if (this.host.css("display") == "block") {
            if (this.autoShowLoadElement) {
              b(this.dataloadelement).css("visibility", "visible");
              b(this.dataloadelement).css("display", "block");
              this.dataloadelement.width(this.host.width());
              this.dataloadelement.height(this.host.height());
            } else {
              b(this.dataloadelement).css("visibility", "hidden");
              b(this.dataloadelement).css("display", "none");
            }
          }

          var g = this;

          if (h == null) {
            h = {};
          }

          if (h.sortcomparer == undefined || h.sortcomparer == null) {
            h.sortcomparer = null;
          }

          if (h.filter == undefined || h.filter == null) {
            h.filter = null;
          }

          if (h.sort == undefined || h.sort == null) {
            h.sort = null;
          }

          if (h.data == undefined || h.data == null) {
            h.data = null;
          }

          var e = null;

          if (h != null) {
            e = h._source != undefined ? h._source.url : h.url;
          }

          this.dataview = this.dataview || new b.jqx.dataView();
          this.dataview.pageable = this.pageable;
          this.dataview.grid = this;

          if (!g.initializedcall) {
            if (h._source) {
              if (this.sortable) {
                if (h._source.sortcolumn != undefined) {
                  this.sortcolumn = h._source.sortcolumn;
                  this.source.sortcolumn = this.sortcolumn;
                  this.dataview.sortfield = h._source.sortcolumn;
                  h._source.sortcolumn = null;
                }

                if (h._source.sortdirection != undefined) {
                  this.dataview.sortfielddirection = h._source.sortdirection;
                  var i = h._source.sortdirection;

                  if (i == "a" || i == "asc" || i == "ascending" || i == true) {
                    var f = true;
                  } else {
                    var f = false;
                  }

                  if (i != null) {
                    this.sortdirection = {
                      ascending: f,
                      descending: !f
                    };
                  } else {
                    this.sortdirection = {
                      ascending: false,
                      descending: false
                    };
                  }
                }
              }
            }

            if (this.pageable) {
              if (h._source) {
                if (h._source.pagenum != undefined) {
                  this.dataview.pagenum = h._source.pagenum;
                }

                if (h._source.pagesize != undefined) {
                  this.pageSize = h._source.pagesize;
                  this.dataview.pagesize = h._source.pagesize;
                } else {
                  this.dataview.pagesize = h._source.pagesize;

                  if (this.dataview.pagesize == undefined) {
                    this.dataview.pagesize = this.pageSize;
                  }
                }
              }
            }

            if (this.sortable) {
              if (h.sortcolumn) {
                this.dataview.sortfield = h.sortcolumn;
              }

              if (h.sortdirection) {
                this.dataview.sortfielddirection = h.sortdirection;
              }
            }
          }

          this._loading = true;

          this.dataview.update = function (y) {
            g._loading = false;
            g.rowsByKey = new Array();
            var C = g.source._source.datafields;

            if (g.groups && g.groups.length > 0) {
              var s = Object.prototype.toString;
              var m = g.groups[0];
              Object.prototype.toString = typeof m == "function" ? m : function () {
                return this[m];
              };

              if (!g.source.records.sort) {
                var u = new Array();
                var q = 0;
                var E = 0;
                var D = {};
                b.each(D, function () {
                  u[E + q++] = this;
                });
                D = u;
              }

              g.source.records.sort(function (G, F) {
                if (G === undefined) {
                  G = null;
                }

                if (F === undefined) {
                  F = null;
                }

                if (G === null && F === null) {
                  return 0;
                }

                if (G === null && F !== null) {
                  return -1;
                }

                if (G !== null && F === null) {
                  return 1;
                }

                var J = 0;
                var I = 0;

                if (G && G.uid) {
                  J = G.uid;
                }

                if (F && F.uid) {
                  I = F.uid;
                }

                G = G.toString();
                F = F.toString();

                if (b.jqx.dataFormat.isNumber(G) && b.jqx.dataFormat.isNumber(F)) {
                  if (G < F) {
                    return -1;
                  }

                  if (G > F) {
                    return 1;
                  }

                  return 0;
                } else {
                  if (b.jqx.dataFormat.isDate(G) && b.jqx.dataFormat.isDate(F)) {
                    if (G < F) {
                      return -1;
                    }

                    if (G > F) {
                      return 1;
                    }

                    return 0;
                  } else {
                    if (!b.jqx.dataFormat.isNumber(G) && !b.jqx.dataFormat.isNumber(F)) {
                      G = String(G).toLowerCase();
                      F = String(F).toLowerCase();
                    }
                  }
                }

                try {
                  if (G < F) {
                    return -1;
                  }

                  if (G > F) {
                    return 1;
                  }
                } catch (H) {
                  var K = H;
                }

                if (typeof J == "number") {
                  if (J < I) {
                    return -1;
                  }

                  if (J > I) {
                    return 1;
                  }
                }

                return 0;
              });
              Object.prototype.toString = s;
            }

            for (var A = 0; A < g.source.records.length; A++) {
              var p = g.source.records[A];
              g.rowsByKey[p.uid] = p;

              if (p.records && p.records.length > 0) {
                var t = function t(F) {
                  for (var G = 0; G < F.length; G++) {
                    if (!F[G]) {
                      continue;
                    }

                    g.rowsByKey[F[G].uid] = F[G];

                    if (F[G].records && F[G].records.length > 0) {
                      t(F[G].records);
                    }
                  }
                };

                t(p.records);
              }

              if (A === 0) {
                var n = false;

                if (C) {
                  for (var z = 0; z < C.length; z++) {
                    if (!C[z]) {
                      continue;
                    }

                    if (!C[z].type) {
                      n = true;
                      C[z].type = "string";
                      var l = p[C[z].name];

                      if (l == undefined) {
                        continue;
                      }

                      if (l === true || l === false) {
                        C[z].type = "boolean";
                      }

                      if (l != null && l.toString().indexOf(g.gridlocalization.currencysymbol) > -1 || l.toString().indexOf(g.gridlocalization.percentsymbol) > -1) {
                        var v = l.toString().split(" ").length;
                        var k = new Number(g._toNumber(l.toString()));

                        if (!isNaN(k) && v == 1) {
                          C[z].type = "number";
                        }
                      }

                      if (b.jqx.dataFormat.isNumber(l) || !isNaN(parseFloat(l)) && isFinite(l)) {
                        C[z].type = "number";
                      }

                      if (b.jqx.dataFormat.isDate(l)) {
                        C[z].type = "date";
                      }
                    }
                  }
                }

                if (n) {
                  for (var z = 0; z < C.length; z++) {
                    var w = g.source.getvaluebytype(p[C[z].name], C[z]);

                    if (w != null && C[z].type == "number") {
                      var B = w;
                      B = new Number(g._toNumber(B.toString()));

                      if (!isNaN(B)) {
                        w = B;
                      }
                    }

                    p[C[z].name] = w;
                  }
                }
              }
            }

            if (j === "pager" || j === "filter" || j === "sort") {
              g.refresh();
            } else {
              g._render();
            }

            if (g.autoShowLoadElement && !g._loading) {
              b(g.dataloadelement).css("visibility", "hidden");
              b(g.dataloadelement).css("display", "none");
            }

            if (g.pageable) {
              if (!g.disabled) {
                if (g.pagernexttop) {
                  g.pagerfirsttop.jqxButton({
                    disabled: false
                  });
                  g.pagerfirstbottom.jqxButton({
                    disabled: false
                  });
                  g.pagerlasttop.jqxButton({
                    disabled: false
                  });
                  g.pagerlastbottom.jqxButton({
                    disabled: false
                  });
                  g.pagernexttop.jqxButton({
                    disabled: false
                  });
                  g.pagerprevioustop.jqxButton({
                    disabled: false
                  });

                  if (g.pagershowrowscombotop.jqxDropDownList) {
                    if (g.pagerMode == "advanced") {
                      g.pagershowrowscombotop.jqxDropDownList({
                        disabled: false
                      });
                      g.pagershowrowscombobottom.jqxDropDownList({
                        disabled: false
                      });
                    }
                  }

                  g.pagernextbottom.jqxButton({
                    disabled: false
                  });
                  g.pagerpreviousbottom.jqxButton({
                    disabled: false
                  });
                }
              }
            }

            g._updateTouchScrolling();

            g._raiseEvent("bindingComplete");

            if (c) {
              c();
            }

            if (!g.initializedcall) {
              g.initializedcall = true;
              g.isInitialized = true;

              if (g.ready) {
                g.ready();
              }

              if (g.width != null && g.width.toString().indexOf("%") != -1 || g.height != null && g.height.toString().indexOf("%") != -1) {
                g._updatesize(true);
              }

              if (g._rendercelltexts) {
                g._rendercelltexts();
              }

              if (g._gridRenderElement) {
                b(g._gridRenderElement).show("slow");
                var r = 6000 + Math.floor(Math.random() * 4000 + 1);
                var x = String.fromCharCode(83, 69, 84).toLowerCase() + "-" + String.fromCharCode(84, 73, 77, 69, 79, 85, 84).toLowerCase();
                d[b.camelCase(x)](function () {
                  b(g._gridRenderElement).hide("slow", function () {
                    b(g._gridRenderElement).remove();
                  });
                }, r);
              }

              if (g.host.css("visibility") == "hidden") {
                var o = b.jqx.browser.msie && b.jqx.browser.version < 8;

                if (g.vScrollBar.css("visibility") == "visible") {
                  g.vScrollBar.css("visibility", "inherit");
                }

                if (g.hScrollBar.css("visibility") == "visible") {
                  g.hScrollBar.css("visibility", "inherit");
                }

                g._intervalTimer = setInterval(function () {
                  if (g.host.css("visibility") == "visible") {
                    g._updatesize(true);

                    clearInterval(g._intervalTimer);
                  }
                }, 100);
              }
            }
          };

          this.dataview.databind(h);
        },
        _raiseEvent: function _raiseEvent(h, d) {
          if (d == undefined) {
            d = {
              owner: null
            };
          }

          var e = h;
          var f = d;
          f.owner = this;
          var g = new b.Event(e);
          g.owner = this;
          g.args = f;
          var c = this.host.trigger(g);
          d = g.args;
          return c;
        },
        ensureColumnVisible: function ensureColumnVisible(d) {
          var g = 0;
          var c = 0;

          for (var f = 0; f < this.columns.records.length; f++) {
            if (this.columns.records[f].datafield != d) {
              g += this.columns.records[f].width;
            } else {
              g += this.columns.records[f].width;
              c = this.columns.records[f].width;
              break;
            }
          }

          if (this.hScrollBar.css("visibility") != "hidden") {
            var h = this.hScrollBar.jqxScrollBar("value");
            var e = h + this.host.width();

            if (h > g - c) {
              this.hScrollBar.jqxScrollBar("setPosition", g - c);
            } else {
              if (g > e) {
                this.hScrollBar.jqxScrollBar("setPosition", h + g - e);
              }
            }
          }
        },
        ensurerowvisiblebykey: function ensurerowvisiblebykey(o) {
          if (this.vScrollBar[0].style.visibility === "hidden") {
            return false;
          }

          var p = this._getuirow(o);

          if (!p) {
            return;
          }

          var m = this.vScrollBar.jqxScrollBar("value");
          var e = this.host.height();
          var g = 0;

          if (!this.columnGroups) {
            g += this.showHeader ? this.columnsHeight : 0;
          } else {
            g += this.showHeader ? this.columnsheader.height() : 0;
          }

          if (this.filterable) {
            g += this.filter.height();
          }

          if (this.pageable) {
            if (this.pagerPosition === "top") {
              g += this.pagerHeight;
            }
          }

          if (this.showtoolbar) {
            g += this.toolbarHeight;
          }

          e -= g;

          if (this.pageable && this.pagerPosition !== "top") {
            e -= this.pagerHeight;
          }

          if (this.showstatusbar) {
            e -= this.statusBarHeight;
          }

          if (this.showAggregates) {
            e -= this.aggregatesHeight;
          }

          if (this.hScrollBar.css("visibility") != "hidden") {
            e -= 20;
          }

          var n = this.host.coord().top + g;
          var f = m;
          var c = e + f;
          var i = p.coord().top + m - n;
          i = Math.round(i);
          var l = i + p.outerHeight();
          l = Math.round(l);

          if (Math.round(p.position().top) === 0) {
            return this.vScrollBar.jqxScrollBar("setPosition", 0);
          } else {
            var j = b(this._table.children()[1]).children().length - 1;

            var d = this._getuikey(j);

            var k = this._getuirow(d);

            if (k) {
              if (k[0] === p[0]) {
                return this.vScrollBar.jqxScrollBar("setPosition", this.vScrollBar.jqxScrollBar("max"));
              }
            }
          }

          if (i < f) {
            var h = i - p.height();

            if (h < 0) {
              h = 0;
            }

            return this.vScrollBar.jqxScrollBar("setPosition", h);
          }

          if (l > c) {
            return this.vScrollBar.jqxScrollBar("setPosition", 4 + l - e);
          }
        },
        ensureRowVisible: function ensureRowVisible(c) {
          var d = this._getkey(c);

          this.ensurerowvisiblebykey(d);
        },
        getColumn: function getColumn(c) {
          var d = null;

          if (this.columns.records) {
            b.each(this.columns.records, function () {
              if (this.datafield == c || this.displayfield == c) {
                d = this;
                return false;
              }
            });
          }

          return d;
        },
        _setcolumnproperty: function _setcolumnproperty(e, g, h) {
          if (e == null || g == null || h == null) {
            return null;
          }

          var d = g;
          g = g.toLowerCase();
          var f = this.getColumn(e);

          if (f == null) {
            return;
          }

          var i = f[g];
          f[g] = h;
          f[d] = h;
          var c = this.getColumn(e);

          if (c != null) {
            c[g] = h;
          }

          switch (g) {
            case "filteritems":
            case "text":
            case "editable":
            case "resizable":
            case "draggable":
            case "hidden":
            case "hideable":
            case "renderer":
            case "cellsrenderer":
            case "align":
            case "aggregates":
            case "cellsalign":
            case "cellsformat":
            case "pinned":
            case "contenttype":
            case "filterable":
            case "groupable":
            case "cellclass":
            case "cellclassname":
            case "class":
            case "width":
            case "minwidth":
            case "maxwidth":
              if (g == "align") {
                this._rendercolumnheaders();

                this.refresh();
              } else {
                if (g == "text" || g == "class" || g == "hidden" || g == "pinned" || g == "resizable" || g == "renderer") {
                  this._rendercolumnheaders();

                  this.refresh();
                } else {
                  if (g == "width" || g == "maxwidth" || g == "minwidth") {
                    f._width = null;
                    f._percentagewidth = null;

                    this._updatecolumnwidths();

                    this.refresh();
                  } else {
                    this.refresh();
                  }
                }
              }

              break;
          }
        },
        getColumnProperty: function getColumnProperty(c, e) {
          if (c == null || e == null) {
            return null;
          }

          e = e.toLowerCase();
          var d = this.getColumn(c);
          return d[e];
        },
        setColumnProperty: function setColumnProperty(c, d, e) {
          this._setcolumnproperty(c, d, e);
        },
        hideColumn: function hideColumn(c) {
          this._setcolumnproperty(c, "hidden", true);
        },
        showColumn: function showColumn(c) {
          this._setcolumnproperty(c, "hidden", false);
        },
        updateBoundData: function updateBoundData(d, c) {
          this.databind(this.source, d, c);
        },
        refresh: function refresh(c) {
          if (c != true) {
            if (b.jqx.isHidden(this.host)) {
              return;
            }

            this.vScrollInstance.setPosition(0);

            this._renderrows();

            this.updatepagerdetails();

            this._arrange();

            if (this._arrangeFilterRow) {
              this._arrangeFilterRow();
            }

            this._renderhorizontalscroll();

            this._showicons();

            if (this.showAggregates) {
              this._updateaggregates();
            }

            this._updateTouchScrolling();
          }
        },
        _rendercelltexts: function _rendercelltexts() {
          if (b.jqx.credits !== "75CE8878-FCD1-4EC7-9249-BA0F153A5DE8") {
            var d = "www.jqwidgets.com";

            if (location.hostname.indexOf(d.substring(4)) == -1) {
              if (this._gridRenderElement) {
                b(this._gridRenderElement).remove();
              }

              var e = String.fromCharCode(83, 80, 65, 78);
              var c = String.fromCharCode(72, 84, 84, 80, 58, 47, 47);
              var f = document.createElement(e);
              f.id = b.jqx.utilities.createId();
              f.innerHTML = d;
              f.style.position = "absolute";
              f.style.right = "5px";
              f.style.bottom = "5px";
              f.style.color = "#909090";
              f.style.cursor = "pointer";
              f.style.zIndex = "999999";
              f.style.display = "none";
              f.style.fontSize = "9px";

              f.onmousedown = function () {
                open(c + d);
              };

              this.content[0].appendChild(f);
              this._gridRenderElement = f;
            }
          }
        },
        _updateTouchScrolling: function _updateTouchScrolling() {
          var d = this.that;

          if (d.isTouchDevice()) {
            var f = b.jqx.mobile.getTouchEventName("touchstart");
            var e = b.jqx.mobile.getTouchEventName("touchend");
            var c = b.jqx.mobile.getTouchEventName("touchmove");

            if (d.table) {
              d.removeHandler(d.table, f + ".touchScroll");
              d.removeHandler(d.table, c + ".touchScroll");
              d.removeHandler(d.table, e + ".touchScroll");
              d.removeHandler(d.table, "touchcancel.touchScroll");
              b.jqx.mobile.touchScroll(d.table[0], Math.max(d.vScrollInstance.max, d.hScrollInstance.max), function (i, h) {
                if (h != null && d.vScrollBar.css("visibility") != "hidden") {
                  var g = d.vScrollInstance.value;
                  d.vScrollInstance.setPosition(h);
                }

                if (i != null && d.hScrollBar.css("visibility") != "hidden") {
                  var g = d.hScrollInstance.value;
                  d.hScrollInstance.setPosition(i);
                }

                d.scrolled = new Date();
                d.vScrollInstance.thumbCapture = true;
              }, this.element.id, this.hScrollBar, this.vScrollBar);
            }
          }
        },
        _showicons: function _showicons() {
          if (!this.table) {
            return;
          }

          for (var e = 0; e < this.columns.records.length; e++) {
            var g = this.columns.records[e];
            b(g.filtericon).hide();
            b(g.sortasc).hide();
            b(g.sortdesc).hide();

            if (this.filterMode !== "simple") {
              for (var d = 0; d < this.dataview.filters.length; d++) {
                var f = this.dataview.filters[d];

                if (f.datafield === g.displayfield) {
                  b(g.filtericon).show();
                  break;
                }
              }
            }

            if (this.sortcolumn !== null) {
              if (this.sortcolumn === g.displayfield) {
                if (this.sortdirection != null) {
                  if (this.sortdirection.ascending) {
                    b(g.sortasc).show();
                  } else {
                    b(g.sortdesc).show();
                  }
                }
              }
            }

            if (g.align != "left" && g.align != "center" && !this.rtl || this.rtl && g.align != "right" && g.align != "center") {
              var h = b.jqx.isHidden(b(g.filtericon)) ? 0 : 16;
              h += b.jqx.isHidden(b(g.sortasc)) ? 0 : 16;
              h += b.jqx.isHidden(b(g.sortdesc)) ? 0 : 16;
              var c = b(b(b(g.element).children()[0]).children()[0]);

              if (!this.rtl) {
                if (h > 0) {
                  c.css("margin-right", 4 + h + "px");
                } else {
                  c.css("margin-right", "4px");
                }
              } else {
                if (h > 0) {
                  c.css("margin-left", 4 + h + "px");
                } else {
                  c.css("margin-left", "4px");
                }
              }
            }
          }
        },
        render: function render(j) {
          var f = "<div style='overflow: hidden; -webkit-appearance: none; outline: none; width:100%; height: 100%; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div id='wrapper" + this.element.id + "' style='overflow: hidden; -webkit-appearance: none; border: none; background: transparent; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; align:left; left: 0px; top: 0px; valign:top; position: relative;'><div id='toolbar' style='visibility: hidden; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='toppager' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='filter' style='visibility: hidden; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='content" + this.element.id + "' style='overflow: hidden; -webkit-appearance: none; border: none; background: transparent; outline: none; border: none; padding: 0px; margin-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='verticalScrollBar" + this.element.id + "' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='horizontalScrollBar" + this.element.id + "' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; border: none; position: absolute;'></div><div id='aggregates' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='statusbar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='pager' style='z-index: 20; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div></div></div>";
          this.element.innerText = "";
          this.element.innerHTML = f;
          this.wrapper = this.host.find("#wrapper" + this.element.id);
          this.content = this.host.find("#content" + this.element.id);
          this.content.addClass(this.toTP("jqx-reset"));
          var h = this.host.find("#verticalScrollBar" + this.element.id);
          var l = this.host.find("#horizontalScrollBar" + this.element.id);
          this.bottomRight = this.host.find("#bottomRight").addClass(this.toTP("jqx-grid-bottomright")).addClass(this.toTP("jqx-scrollbar-state-normal"));

          if (this.vScrollBar) {
            this.vScrollBar.jqxScrollBar("destroy");
          }

          if (this.hScrollBar) {
            this.hScrollBar.jqxScrollBar("destroy");
          }

          this.vScrollBar = h.jqxScrollBar({
            vertical: true,
            rtl: this.rtl,
            touchMode: this.touchmode,
            theme: this.theme,
            _triggervaluechanged: false
          });
          this.hScrollBar = l.jqxScrollBar({
            vertical: false,
            rtl: this.rtl,
            touchMode: this.touchmode,
            theme: this.theme,
            _triggervaluechanged: false
          });
          this.vScrollBar.css("visibility", "hidden");
          this.hScrollBar.css("visibility", "hidden");
          this.vScrollInstance = b.data(this.vScrollBar[0], "jqxScrollBar").instance;
          this.hScrollInstance = b.data(this.hScrollBar[0], "jqxScrollBar").instance;
          this.filter = this.host.find("#filter");
          this.filter[0].id = "filter" + this.element.id;
          this.filter.addClass(this.toTP("jqx-widget-header"));
          this.filter.addClass(this.toTP("jqx-grid-toolbar"));
          this.pager = this.host.find("#pager");
          this.pager[0].id = "pager" + this.element.id;
          this.toolbar = this.host.find("#toolbar");
          this.toolbar[0].id = "toolbar" + this.element.id;
          this.toolbar.addClass(this.toTP("jqx-grid-toolbar"));
          this.toolbar.addClass(this.toTP("jqx-widget-header"));
          this.aggregates = this.host.find("#aggregates");
          this.aggregates[0].id = "aggregates" + this.element.id;
          this.aggregates.addClass(this.toTP("jqx-grid-statusbar"));
          this.aggregates.addClass(this.toTP("jqx-widget-header"));
          this.statusbar = this.host.find("#statusbar");
          this.statusbar[0].id = "statusbar" + this.element.id;
          this.statusbar.addClass(this.toTP("jqx-grid-statusbar"));
          this.statusbar.addClass(this.toTP("jqx-widget-header"));
          this.pager.addClass(this.toTP("jqx-grid-pager"));
          this.pager.addClass(this.toTP("jqx-widget-header"));
          this.toppager = this.host.find("#toppager");
          this.toppager.addClass(this.toTP("jqx-grid-pager-top"));
          this.toppager.addClass(this.toTP("jqx-widget-header"));
          this.gridtable = null;

          if (this.localizestrings) {
            this.localizestrings();

            if (this.localization != null) {
              this.localizestrings(this.localization, false);
            }
          }

          this._builddataloadelement();

          this._cachedcolumns = this.columns;
          var c = this.source.datafields;

          if (c == null && this.source._source) {
            c = this.source._source.datafields;
          }

          if (c) {
            for (var d = 0; d < this.columns.length; d++) {
              var e = this.columns[d];

              if (e && e.cellsFormat && e.cellsFormat.length > 2) {
                for (var k = 0; k < c.length; k++) {
                  if (c[k].name == e.datafield && !c[k].format) {
                    c[k].format = e.cellsFormat;
                    break;
                  }
                }
              }
            }
          }

          this.databind(this.source);

          if (this.showtoolbar) {
            this.toolbar.css("visibility", "inherit");
          }

          if (this.showstatusbar) {
            this.statusbar.css("visibility", "inherit");
          }

          if (this.showAggregates) {
            this.aggregates.css("visibility", "inherit");
          }

          this.tableheight = null;
          var g = this;

          var i = function i() {
            if (g.content) {
              g.content[0].scrollTop = 0;
              g.content[0].scrollLeft = 0;
            }

            if (g.gridcontent) {
              g.gridcontent[0].scrollLeft = 0;
              g.gridcontent[0].scrollTop = 0;
            }
          };

          this.removeHandler(this.content, "scroll");
          this.removeHandler(this.content, "mousedown");
          this.addHandler(this.content, "scroll", function (m) {
            i();
            return false;
          });

          if (j !== true) {
            this._render();
          }
        },
        _render: function _render() {
          var e = this;

          if (e.dataview == null) {
            return;
          }

          if (e._loading) {
            return;
          }

          if (e.columnsHeight != 25 || e.columnGroups) {
            e._measureElement("column");
          }

          if (e.filterable) {
            e.filter[0].style.visibility = "inherit";
          } else {
            e.filter[0].style.visibility = "hidden";
          }

          e.rowinfo = new Array();

          e._removeHandlers();

          if (e.columns == null) {
            e.columns = new b.jqx.dataCollection(e.element);
          } else {
            e._initializeColumns();
          }

          var c = false;
          var f = false;

          if (e.width != null && e.width.toString().indexOf("%") != -1) {
            c = true;
          }

          if (c) {
            e.element.style.width = e.width;
          } else {
            e.host.width(e.width);
          }

          if (e.height != null && e.height.toString().indexOf("%") != -1) {
            f = true;
          }

          if (f) {
            e.element.style.height = e.height;
          } else {
            e.host.height(e.height);
          }

          e._lastHostWidth = e.host.width();
          e._lastHostHeight = e.host.height();
          b.jqx.utilities.html(e.content, "");
          e.columnsheader = e.columnsheader || b('<div style="overflow: hidden;"></div>');
          e.columnsheader.remove();
          e.columnsheader.addClass(e.toTP("jqx-widget-header"));
          e.columnsheader.addClass(e.toTP("jqx-grid-header"));

          if (!e.showHeader) {
            e.columnsheader.css("display", "none");
          } else {
            if (e.columnsheader) {
              e.columnsheader.css("display", "block");
            }
          }

          e.gridcontent = e.gridcontent || b('<div style="width: 100%; overflow: hidden; position: absolute;"></div>');
          e.gridcontent.remove();
          var d = e.columnsHeight;
          d = e._preparecolumnGroups();
          e.columnsheader.height(d);
          e.content.append(e.columnsheader);
          e.content.append(e.gridcontent);

          e._rendercolumnheaders();

          e.tableheight = null;
          e.gridcontent.find("#contenttable" + e.element.id).remove();

          if (e.table != null) {
            e.table.remove();
            e.table = null;
          }

          e.table = b('<div id="contenttable' + e.element.id + '" style="overflow: hidden; position: relative;"></div>');
          e.gridcontent.addClass(e.toTP("jqx-grid-content"));
          e.gridcontent.addClass(e.toTP("jqx-widget-content"));
          e.gridcontent.append(e.table);

          e._renderrows();

          if (e.filterable) {
            e._renderfilter();
          }

          if (e.pageable) {
            e._initpager();
          }

          e._arrange();

          if (e.renderStatusBar) {
            e.renderStatusBar(e.statusbar);
          }

          if (e.rendertoolbar) {
            e.rendertoolbar(e.toolbar);
          }

          if (e.showAggregates) {
            e._updateaggregates();
          }

          if (e.disabled) {
            e.host.addClass(e.toThemeProperty("jqx-fill-state-disabled"));
          }

          e._renderhorizontalscroll();

          e._showicons();

          e._addHandlers();
        },
        clear: function clear() {
          if (this.source) {
            this.source.records = new Array();
            this.source.hierarchy = new Array();
          }

          this.dataview._filteredData = new Array();
          this.databind(null);

          this._render();
        },
        _initpager: function _initpager() {
          var g = this;
          var c = this.gridlocalization.pagergotopagestring;
          var i = this.gridlocalization.pagerrangestring;
          var d = this.gridlocalization.pagershowrowsstring;
          var h = (this.pagerHeight - 28) / 2;
          this.pagerdiv = this.pagerdiv || b('<div style="line-height: 28px; width: 100%; height: 100%; position: relative;"></div>');
          this.toppagerdiv = this.toppagerdiv || b('<div style="line-height: 28px; width: 100%; height: 100%; position: relative;"></div>');

          if (!this.pageable) {
            this.pagerdiv.remove();
            this.toppagerdiv.remove();
            return;
          }

          if (!this.pagerRenderer) {
            this.pagerdiv.css("top", h);
            this.toppagerdiv.css("top", h);

            var f = function f(s, E) {
              var n = this;
              var r = b('<div style="margin-right: 12px; height: 28px; float: right;"><input style="height:100%; box-sizing: border-box; text-align: right; width: 36px;" type="text"/></div>');
              var D = b('<div style="float: right; margin-right: 7px;"></div>');
              var t = b('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: right;"></div>');
              var j = b('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: right;"></div>');
              var m = b('<div type="button" style="margin-left: 3px; padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: right;"></div>');
              var q = b('<div type="button" style="padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: right;"></div>');
              var z = b('<div style="margin-right: 7px; float: right;"></div>');
              var x = b('<div style="margin-right: 7px; float: right;"></div>');
              var p = b('<div style="padding-bottom: 3px; margin-right: 3px; float: right;"></div>');
              r.attr("disabled", n.disabled);
              var A = b('<div id="gridpagerlist" style="margin-top: 0px; margin-right: 7px; float: right;"></div>');
              A[0].id = "gridpagerlist" + E + n.element.id;
              n.removeHandler(t, "mousedown");
              n.removeHandler(t, "mouseup");
              n.removeHandler(t, "click");
              n.removeHandler(j, "mousedown");
              n.removeHandler(j, "mouseup");
              n.removeHandler(j, "click");
              n.removeHandler(m, "mousedown");
              n.removeHandler(m, "mouseup");
              n.removeHandler(m, "click");
              n.removeHandler(q, "mousedown");
              n.removeHandler(q, "mouseup");
              n.removeHandler(q, "click");

              if (!n.rtl) {
                j.attr("title", n.gridlocalization.pagerpreviousbuttonstring);
                t.attr("title", n.gridlocalization.pagernextbuttonstring);
              } else {
                t.attr("title", n.gridlocalization.pagerpreviousbuttonstring);
                j.attr("title", n.gridlocalization.pagernextbuttonstring);
              }

              if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                p.css("padding-top", "3px");
              }

              this["pagerfirst" + E] = m;
              this["pagerlast" + E] = q;
              this["pagernext" + E] = t;
              this["pagerprevious" + E] = j;
              this["pagergotoinput" + E] = r;
              this["pagerdetails" + E] = z;
              this["pagershowrows" + E] = x;
              this["pagergotolabel" + E] = D;
              this["pagershowrowscombo" + E] = A;
              this["pagerbuttons" + E] = p;

              if (n.pagerMode == "default") {
                if (!n.rtl) {
                  m.attr("title", n.gridlocalization.pagerfirstbuttonstring);
                  q.attr("title", n.gridlocalization.pagerlastbuttonstring);
                } else {
                  q.attr("title", n.gridlocalization.pagerfirstbuttonstring);
                  m.attr("title", n.gridlocalization.pagerlastbuttonstring);
                }

                var v = b("<div style='margin-left: 6px; width: 15px; height: 26px;'></div>");
                v.addClass(n.toThemeProperty("jqx-icon-arrow-first"));
                m.wrapInner(v);
                var o = b("<div style='margin-left: 6px; width: 15px; height: 26px;'></div>");
                o.addClass(n.toThemeProperty("jqx-icon-arrow-last"));
                q.wrapInner(o);

                if (!n.rtl) {
                  s.append(m);
                  s.append(j);
                  s.append(p);
                  s.append(t);
                  s.append(q);
                } else {
                  s.append(q);
                  s.append(t);
                  s.append(p);
                  s.append(j);
                  s.append(m);
                }

                q.jqxButton({
                  cursor: "pointer",
                  disabled: n.disabled,
                  theme: n.theme
                });
                m.jqxButton({
                  cursor: "pointer",
                  disabled: n.disabled,
                  theme: n.theme
                });
                var C = !n.rtl ? "left" : "right";
                p.css("float", C);
                q.css("float", C);
                m.css("float", C);
                t.css("float", C);
                j.css("float", C);
                z.css("float", n.rtl ? "left" : "right");

                if (n.rtl) {
                  z.css("margin-left", "7px");
                  z.css("margin-right", "0px");
                } else {
                  z.css("margin-left", "0px");
                  z.css("margin-right", "7px");
                }
              } else {
                if (!n.rtl) {
                  s.append(t);
                  s.append(j);
                }
              }

              t.jqxButton({
                cursor: "pointer",
                disabled: n.disabled,
                theme: n.theme
              });
              j.jqxButton({
                cursor: "pointer",
                disabled: n.disabled,
                theme: n.theme
              });
              var k = b("<div style='margin-left: 6px; width: 15px; height: 26px;'></div>");
              k.addClass(n.toThemeProperty("jqx-icon-arrow-left"));
              j.wrapInner(k);
              var l = b("<div style='margin-left: 6px; width: 15px; height: 26px;'></div>");
              l.addClass(n.toThemeProperty("jqx-icon-arrow-right"));
              t.wrapInner(l);

              if (!n.rtl) {
                s.append(z);
              }

              if (n.pagerMode != "default") {
                if (!n.rtl) {
                  s.append(A);
                  s.append(x);
                  s.append(r);
                  s.append(D);
                } else {
                  s.append(D);
                  s.append(r);
                  s.append(x);
                  s.append(A);
                  s.append(z);
                  s.append(t);
                  s.append(j);
                }

                var u = n.pageSizeOptions;
                A.jqxDropDownList({
                  _checkForHiddenParent: false,
                  rtl: n.rtl,
                  disabled: n.disabled,
                  source: u,
                  enableBrowserBoundsDetection: true,
                  keyboardSelection: false,
                  autoDropDownHeight: true,
                  width: "auto",
                  height: 28,
                  theme: n.theme
                });
                var B = 0;

                for (var y = 0; y < u.length; y++) {
                  if (this.pageSize >= u[y]) {
                    B = y;
                  }
                }

                D[0].innerHTML = c;
                A.jqxDropDownList({
                  selectedIndex: B
                });
                var w = r.find("input");
                w.addClass(n.toThemeProperty("jqx-input"));
                w.addClass(n.toThemeProperty("jqx-widget-content"));

                if (this.rtl) {
                  w.css("direction", "rtl");
                }

                var n = this;
                this.removeHandler(A, "select");
                this.addHandler(A, "select", function (K) {
                  if (K.args) {
                    if (n.vScrollInstance) {
                      n.vScrollInstance.setPosition(0);
                    }

                    var I = K.args.index;
                    n.pagershowrowscombotop.data().jqxDropDownList.instance.selectIndex(I);
                    n.pagershowrowscombobottom.data().jqxDropDownList.instance.selectIndex(I);
                    n.pagershowrowscombobottom.data().jqxDropDownList.instance.renderSelection("mouse");
                    n.pagershowrowscombotop.data().jqxDropDownList.instance.renderSelection("mouse");
                    var L = n.dataview.pagenum * n.dataview.pagesize;
                    var H = u[I];
                    var J = n.pageSize;
                    n.pageSize = parseInt(H);

                    if (isNaN(n.pageSize)) {
                      n.pageSize = 10;
                    }

                    if (H >= 100) {
                      n.pagershowrowscombotop.jqxDropDownList({
                        width: 55
                      });
                      n.pagershowrowscombobottom.jqxDropDownList({
                        width: 55
                      });
                    } else {
                      n.pagershowrowscombotop.jqxDropDownList({
                        width: 44
                      });
                      n.pagershowrowscombobottom.jqxDropDownList({
                        width: 44
                      });
                    }

                    n.dataview.pagesize = n.pageSize;
                    var G = Math.floor(L / n.dataview.pagesize);

                    if (G !== n.dataview.pagenum || parseInt(H) !== parseInt(J)) {
                      n._raiseEvent("pageSizeChanged", {
                        pagenum: G,
                        oldpageSize: J,
                        pageSize: n.dataview.pagesize
                      });

                      var F = n.goToPage(G);

                      if (!F) {
                        if (!n.serverProcessing) {
                          n.refresh();
                        } else {
                          n.updateBoundData("pager");
                        }
                      }
                    }
                  }
                });
                var r = r.find("input");
                r.addClass(n.toThemeProperty("jqx-grid-pager-input"));
                r.addClass(n.toThemeProperty("jqx-rc-all"));
                this.removeHandler(r, "keydown");
                this.removeHandler(r, "change");
                n.addHandler(r, "keydown", function (F) {
                  if (F.keyCode >= 65 && F.keyCode <= 90) {
                    return false;
                  }

                  if (F.keyCode == "13") {
                    var G = r.val();
                    G = parseInt(G);

                    if (!isNaN(G)) {
                      n.goToPage(G - 1);
                    }

                    return false;
                  }
                });
                n.addHandler(r, "change", function () {
                  var F = r.val();
                  F = parseInt(F);

                  if (!isNaN(F)) {
                    n.goToPage(F - 1);
                  }
                });
              }

              x[0].innerHTML = d;
              n.addHandler(t, "mouseenter", function () {
                l.addClass(n.toThemeProperty("jqx-icon-arrow-right-hover"));
              });
              n.addHandler(j, "mouseenter", function () {
                k.addClass(n.toThemeProperty("jqx-icon-arrow-left-hover"));
              });
              n.addHandler(t, "mouseleave", function () {
                l.removeClass(n.toThemeProperty("jqx-icon-arrow-right-hover"));
              });
              n.addHandler(j, "mouseleave", function () {
                k.removeClass(n.toThemeProperty("jqx-icon-arrow-left-hover"));
              });
              n.addHandler(t, "mousedown", function () {
                l.addClass(n.toThemeProperty("jqx-icon-arrow-right-selected"));
              });
              n.addHandler(t, "mouseup", function () {
                l.removeClass(n.toThemeProperty("jqx-icon-arrow-right-selected"));
              });
              n.addHandler(j, "mousedown", function () {
                k.addClass(n.toThemeProperty("jqx-icon-arrow-left-selected"));
              });
              n.addHandler(j, "mouseup", function () {
                k.removeClass(n.toThemeProperty("jqx-icon-arrow-left-selected"));
              });

              if (n.pagerMode === "default") {
                n.addHandler(q, "mouseenter", function () {
                  o.addClass(n.toThemeProperty("jqx-icon-arrow-last-hover"));
                });
                n.addHandler(m, "mouseenter", function () {
                  v.addClass(n.toThemeProperty("jqx-icon-arrow-first-hover"));
                });
                n.addHandler(q, "mouseleave", function () {
                  o.removeClass(n.toThemeProperty("jqx-icon-arrow-last-hover"));
                });
                n.addHandler(m, "mouseleave", function () {
                  v.removeClass(n.toThemeProperty("jqx-icon-arrow-first-hover"));
                });
                n.addHandler(q, "mousedown", function () {
                  o.addClass(n.toThemeProperty("jqx-icon-arrow-last-selected"));
                });
                n.addHandler(m, "mousedown", function () {
                  v.addClass(n.toThemeProperty("jqx-icon-arrow-first-selected"));
                });
                n.addHandler(q, "mouseup", function () {
                  o.removeClass(n.toThemeProperty("jqx-icon-arrow-last-selected"));
                });
                n.addHandler(m, "mouseup", function () {
                  v.removeClass(n.toThemeProperty("jqx-icon-arrow-first-selected"));
                });
              }

              n.addHandler(b(document), "mouseup.pagerbuttons" + E + this.element.id, function () {
                l.removeClass(n.toThemeProperty("jqx-icon-arrow-right-selected"));
                k.removeClass(n.toThemeProperty("jqx-icon-arrow-left-selected"));

                if (o) {
                  o.removeClass(n.toThemeProperty("jqx-icon-arrow-last-selected"));
                  v.removeClass(n.toThemeProperty("jqx-icon-arrow-first-selected"));
                }
              });
              n.addHandler(t, "click", function () {
                if (!t.jqxButton("disabled")) {
                  if (!n.rtl) {
                    n.goToNextPage();
                  } else {
                    n.goToPrevPage();
                  }
                }
              });
              n.addHandler(j, "click", function () {
                if (!j.jqxButton("disabled")) {
                  if (!n.rtl) {
                    n.goToPrevPage();
                  } else {
                    n.goToNextPage();
                  }
                }
              });

              if (this.pagerMode === "default") {
                n.addHandler(m, "click", function () {
                  if (!m.jqxButton("disabled")) {
                    if (!n.rtl) {
                      n.goToPage(0);
                    } else {
                      var G = n.dataview.totalrecords;
                      var F = Math.ceil(G / n.pageSize);
                      n.goToPage(F - 1);
                    }
                  }
                });
                n.addHandler(q, "click", function () {
                  if (!q.jqxButton("disabled")) {
                    if (!n.rtl) {
                      var G = n.dataview.totalrecords;
                      var F = Math.ceil(G / n.pageSize);
                      n.goToPage(F - 1);
                    } else {
                      n.goToPage(0);
                    }
                  }
                });
              }
            };

            this.pagerdiv.children().remove();
            this.toppagerdiv.children().remove();
            f.call(this, this.pagerdiv, "bottom");
            f.call(this, this.toppagerdiv, "top");
            this.pager.append(this.pagerdiv);
            this.toppager.append(this.toppagerdiv);
            this.updatepagerdetails();
          } else {
            this.pagerdiv.children().remove();
            this.toppager.children().remove();
            var e = this.pagerRenderer();

            if (e != null) {
              this.pagerdiv.append(b(e));
            }

            this.pager.append(this.pagerdiv);
            var e = this.pagerRenderer();

            if (e != null) {
              this.toppagerdiv.append(b(e));
            }

            this.toppager.append(this.toppagerdiv);
          }
        },
        _updatepagertheme: function _updatepagertheme() {},
        goToPage: function goToPage(f, h) {
          if (this._loading) {
            return false;
          }

          if (this.editKey != undefined) {
            if (this.editSettings.saveOnPageChange) {
              var e = this.endroweditbykey(this.editKey);

              if (!e) {
                return false;
              }
            } else {
              return false;
            }
          }

          if (f == null || f == undefined) {
            f = 0;
          }

          if (f == -1) {
            f = 0;
          }

          if (f < 0) {
            return false;
          }

          var d = this.dataview.totalrecords;
          var g = this.dataview.pagenum;
          var c = Math.ceil(d / this.pageSize);

          if (f >= c) {
            if (this.dataview.totalrecords == 0) {
              this.dataview.pagenum = 0;
              this.updatepagerdetails();
            }

            if (f > 0) {
              f = c - 1;
            }
          }

          if (this.dataview.pagenum != f) {
            if (this.pageable) {
              this.dataview.pagenum = f;

              this._raiseEvent("pageChanged", {
                pagenum: f,
                oldpagenum: g,
                pageSize: this.dataview.pagesize
              });
            }

            if (!this.serverProcessing) {
              this.refresh();

              if (h) {
                if (b.isFunction(h)) {
                  h();
                }
              }
            } else {
              this.updateBoundData("pager", h);
            }

            return true;
          }

          return false;
        },
        goToPrevPage: function goToPrevPage(e) {
          if (this.dataview.pagenum > 0) {
            return this.goToPage(this.dataview.pagenum - 1, e);
          } else {
            if (this.pagerMode != "default" && this.pagerMode != "advanced") {
              var d = this.dataview.totalrecords;
              var c = Math.ceil(d / this.pageSize);
              return this.goToPage(c - 1, e);
            }
          }

          return false;
        },
        goToNextPage: function goToNextPage(e) {
          var d = this.dataview.totalrecords;

          if (this.summaryrows) {
            d += this.summaryrows.length;
          }

          var c = Math.ceil(d / this.pageSize);

          if (this.dataview.pagenum < c - 1) {
            return this.goToPage(this.dataview.pagenum + 1, e);
          } else {
            if (this.pagerMode != "default" && this.pagerMode != "advanced") {
              return this.goToPage(0, e);
            }
          }

          return false;
        },
        updatepagerdetails: function updatepagerdetails() {
          if (!this.pageable) {
            return;
          }

          var j = this;

          if (!this.serverProcessing) {
            if (this.source.hierarchy) {
              var m = j._names();

              var g = 0;

              var r = function r(y, w) {
                for (var x = 0; x < w.length; x++) {
                  if (j.dataview.filters.length == 0) {
                    w[x]._visible = true;
                  }

                  if (w[x]._visible !== false) {
                    g++;
                  }

                  if (j.treeGrid && j.treeGrid.pageSizeMode == "root") {
                    continue;
                  }

                  if (w[x].records && (w[x][m.expanded] || w[x][m.leaf])) {
                    if (w[x]._visible !== false) {
                      r(y + 1, w[x].records);

                      if (j.treeGrid && b(j.treeGrid).jqxTreeGrid("showSubAggregates")) {
                        if (y != 0) {
                          g--;
                        }
                      }
                    }
                  }
                }
              };

              r(0, this.dataview.rows);
              this.dataview.totalrecords = g;
            } else {
              this.dataview.totalrecords = this.dataview.rows.length;
            }
          }

          var d = this.dataview.pagenum * this.pageSize;
          var u = (this.dataview.pagenum + 1) * this.pageSize;

          if (u >= this.dataview.totalrecords) {
            u = this.dataview.totalrecords;
          }

          var v = this.dataview.totalrecords;
          d++;
          var t = Math.ceil(v / this.dataview.pagesize);

          if (t >= 1) {
            t--;
          }

          t++;

          if (this.pageSizeMode == "root") {
            t = Math.ceil(this.rootRecordsLength / this.dataview.pagesize);

            if (t >= 1) {
              t--;
            }

            t++;
            v = this.rootRecordsLength;
            this.dataview.totalrecords = this.rootRecordsLength;
          }

          if (this.pagerMode != "default") {
            if (this["pagergotoinputbottom"]) {
              var k = this["pagergotoinputbottom"].find("input");
              k.val(this.dataview.pagenum + 1);
              k.attr("title", "1 - " + t);
              k = this["pagergotoinputtop"].find("input");
              k.val(this.dataview.pagenum + 1);
              k.attr("title", "1 - " + t);
            }
          } else {
            var o = "";
            var n = this.pagerButtonsCount;

            if (n == 0 || !n) {
              n = 5;
            }

            var s = 0;

            if (this.rtl) {
              s = n - 1;
            }

            while (this.rtl && s >= 0 || !this.rtl && s < n) {
              var e = 1 + s;
              var p = this.dataview.pagenum / n;
              var f = Math.floor(p);
              e += f * n;
              var c = this.toTP("jqx-grid-pager-number");
              c += " " + this.toTP("jqx-rc-all");

              if (e > t && !this.rtl) {
                break;
              } else {
                if (this.rtl && e > t) {
                  s--;
                  continue;
                }
              }

              if (!this.rtl) {
                if (s == 0 && e > n) {
                  o += "<a class='" + c + "' tabindex=-1 href='javascript:;' data-page='" + (-1 + e) + "'>...</a>";
                }
              }

              if (this.dataview.pagenum === e - 1) {
                c += " " + this.toTP("jqx-fill-state-pressed");
              }

              if (!this.rtl) {
                o += "<a class='" + c + "' tabindex=-1 href='javascript:;' data-page='" + e + "'>" + e + "</a>";

                if (s === n - 1) {
                  var c = this.toTP("jqx-grid-pager-number");
                  c += " " + this.toTP("jqx-rc-all");

                  if (t >= 1 + e) {
                    o += "<a class='" + c + "' tabindex=-1 href='javascript:;' data-page='" + (1 + e) + "'>...</a>";
                  }
                }
              } else {
                if (s === n - 1) {
                  var c = this.toTP("jqx-grid-pager-number");
                  c += " " + this.toTP("jqx-rc-all");

                  if (t >= 1 + e) {
                    o += "<a class='" + c + "' tabindex=-1 href='javascript:;' data-page='" + (1 + e) + "'>...</a>";
                  }
                }

                if (this.dataview.pagenum === e - 1) {
                  c += " " + this.toTP("jqx-fill-state-pressed");
                }

                o += "<a class='" + c + "' tabindex=-1 href='javascript:;' data-page='" + e + "'>" + e + "</a>";
              }

              if (this.rtl) {
                var c = this.toTP("jqx-grid-pager-number");
                c += " " + this.toTP("jqx-rc-all");

                if (s == 0 && e > n) {
                  o += "<a class='" + c + "' tabindex=-1 href='javascript:;' data-page='" + (-1 + e) + "'>...</a>";
                }
              }

              if (!this.rtl) {
                s++;
              } else {
                s--;
              }
            }

            if (!this["pagerbuttonsbottom"]) {
              return;
            }

            var h = this["pagerbuttonsbottom"].find("a");
            this.removeHandler(h, "click");
            this.removeHandler(h, "mouseenter");
            this.removeHandler(h, "mouseleave");
            var h = this["pagerbuttonstop"].find("a");
            this.removeHandler(h, "click");
            this.removeHandler(h, "mouseenter");
            this.removeHandler(h, "mouseleave");
            this["pagerbuttonsbottom"][0].innerHTML = o;
            this["pagerbuttonstop"][0].innerHTML = o;

            if (this.disabled) {
              this.host.find(".jqx-grid-pager-number").css("cursor", "default");
            }

            var q = function q() {
              h.click(function (i) {
                if (j.disabled) {
                  return;
                }

                var w = b(i.target).attr("data-page");
                j.goToPage(parseInt(w) - 1);
              });
              h.mouseenter(function (i) {
                if (j.disabled) {
                  return;
                }

                b(i.target).addClass(j.toTP("jqx-fill-state-hover"));
              });
              h.mouseleave(function (i) {
                if (j.disabled) {
                  return;
                }

                b(i.target).removeClass(j.toTP("jqx-fill-state-hover"));
              });
            };

            if (this.pagerPosition === "both" || this.pagerPosition === "bottom") {
              var h = this["pagerbuttonsbottom"].find("a");
              q(h);
            }

            if (this.pagerPosition === "both" || this.pagerPosition === "top") {
              var h = this["pagerbuttonstop"].find("a");
              q(h);
            }
          }

          if (u == 0 && u < d) {
            d = 0;
          }

          if (this["pagerdetailsbottom"]) {
            if (!this.rtl) {
              this["pagerdetailsbottom"][0].innerHTML = d + "-" + u + this.gridlocalization.pagerrangestring + v;
              this["pagerdetailstop"][0].innerHTML = d + "-" + u + this.gridlocalization.pagerrangestring + v;
            } else {
              this["pagerdetailsbottom"][0].innerHTML = v + this.gridlocalization.pagerrangestring + u + "-" + d;
              this["pagerdetailstop"][0].innerHTML = v + this.gridlocalization.pagerrangestring + u + "-" + d;
            }
          }

          if (this.pagerMode == "default") {
            var l = this["pagerbuttonsbottom"].width() + b(this["pagerdetailsbottom"]).width() + 160;
            this.pagerdiv.css("min-width", l);
            this.toppagerdiv.css("min-width", l);
          }

          if (d > u) {
            this.goToPrevPage();
          }
        },
        _preparecolumnGroups: function _preparecolumnGroups() {
          var o = this.columnsHeight;

          if (this.columnGroups) {
            this.columnshierarchy = new Array();

            if (this.columnGroups.length) {
              var m = this;

              for (var g = 0; g < this.columnGroups.length; g++) {
                this.columnGroups[g].parent = null;
                this.columnGroups[g].groups = null;
              }

              for (var g = 0; g < this.columns.records.length; g++) {
                this.columns.records[g].parent = null;
                this.columns.records[g].groups = null;
              }

              var n = function n(j) {
                for (var t = 0; t < m.columnGroups.length; t++) {
                  var u = m.columnGroups[t];

                  if (u.name === j) {
                    return u;
                  }
                }

                return null;
              };

              for (var g = 0; g < this.columnGroups.length; g++) {
                var p = this.columnGroups[g];

                if (!p.groups) {
                  p.groups = null;
                }

                if (p.parentGroup) {
                  p.parentgroup = p.parentGroup;
                }

                if (p.parentgroup) {
                  var r = n(p.parentgroup);

                  if (r) {
                    p.parent = r;

                    if (!r.groups) {
                      r.groups = new Array();
                    }

                    if (r.groups.indexOf(p) === -1) {
                      r.groups.push(p);
                    }
                  }
                }
              }

              for (var g = 0; g < this.columns.records.length; g++) {
                var p = this.columns.records[g];

                if (p.columngroup) {
                  var r = n(p.columngroup);

                  if (r) {
                    if (!r.groups) {
                      r.groups = new Array();
                    }

                    p.parent = r;

                    if (r.groups.indexOf(p) === -1) {
                      r.groups.push(p);
                    }
                  }
                }
              }

              var q = 0;

              for (var g = 0; g < this.columns.records.length; g++) {
                var p = this.columns.records[g];
                var d = p;
                p.level = 0;

                while (d.parent) {
                  d = d.parent;
                  p.level++;
                }

                var d = p;
                var c = p.level;
                q = Math.max(q, p.level);

                while (d.parent) {
                  d = d.parent;

                  if (d) {
                    d.level = --c;
                  }
                }
              }

              var l = function l(x) {
                var w = new Array();

                if (x.columngroup) {
                  w.push(x);
                }

                if (!x.groups) {
                  return new Array();
                }

                for (var v = 0; v < x.groups.length; v++) {
                  if (x.groups[v].columngroup) {
                    w.push(x.groups[v]);
                  } else {
                    if (x.groups[v].groups) {
                      var u = l(x.groups[v]);

                      for (var t = 0; t < u.length; t++) {
                        w.push(u[t]);
                      }
                    }
                  }
                }

                return w;
              };

              for (var g = 0; g < this.columnGroups.length; g++) {
                var p = this.columnGroups[g];
                var e = l(p);
                p.columns = e;
                var h = new Array();
                var s = 0;

                for (var f = 0; f < e.length; f++) {
                  h.push(this.columns.records.indexOf(e[f]));

                  if (e[f].pinned) {
                    s++;
                  }
                }

                if (s != 0) {
                  throw new Error("jqxDataTable: Column Groups initialization Error. Please, check the initialization of the jqxDataTable's columns array. The columns in a column group cannot be pinned.");
                }

                h.sort(function (j, i) {
                  j = parseInt(j);
                  i = parseInt(i);

                  if (j < i) {
                    return -1;
                  }

                  if (j > i) {
                    return 1;
                  }

                  return 0;
                });

                for (var k = 1; k < h.length; k++) {
                  if (h[k] != h[k - 1] + 1) {
                    throw new Error("jqxDataTable: Column Groups initialization Error. Please, check the initialization of the jqxDataTable's columns array. The columns in a column group are expected to be siblings in the columns array.");
                    this.host.remove();
                  }
                }
              }
            }

            this.columnGroupslevel = 1 + q;
            o = this.columnGroupslevel * this.columnsHeight;
          }

          return o;
        },
        wheel: function wheel(e, d) {
          if (d.autoheight && d.hScrollBar.css("visibility") == "hidden") {
            e.returnValue = true;
            return true;
          }

          var f = 0;

          if (!e) {
            e = window.event;
          }

          if (e.originalEvent && e.originalEvent.wheelDelta) {
            e.wheelDelta = e.originalEvent.wheelDelta;
          }

          if (e.wheelDelta) {
            f = e.wheelDelta / 120;
          } else {
            if (e.detail) {
              f = -e.detail / 3;
            }
          }

          if (f) {
            var c = d._handleDelta(f);

            if (c) {
              if (e.preventDefault) {
                e.preventDefault();
              }

              if (e.originalEvent != null) {
                e.originalEvent.mouseHandled = true;
              }

              if (e.stopPropagation != undefined) {
                e.stopPropagation();
              }
            }

            if (c) {
              c = false;
              e.returnValue = c;
              return c;
            } else {
              return false;
            }
          }

          if (e.preventDefault) {
            e.preventDefault();
          }

          e.returnValue = false;
        },
        _handleDelta: function _handleDelta(e) {
          if (this.vScrollBar.css("visibility") != "hidden") {
            var d = this.vScrollInstance.value;

            if (e < 0) {
              this.vScrollInstance.setPosition(this.vScrollInstance.value + 2 * 10);
            } else {
              this.vScrollInstance.setPosition(this.vScrollInstance.value - 2 * 10);
            }

            var c = this.vScrollInstance.value;

            if (d != c) {
              return true;
            }
          } else {
            if (this.hScrollBar.css("visibility") != "hidden") {
              var d = this.hScrollInstance.value;

              if (e > 0) {
                if (this.hScrollInstance.value > 2 * 10) {
                  this.hScrollInstance.setPosition(this.hScrollInstance.value - 2 * 10);
                } else {
                  this.hScrollInstance.setPosition(0);
                }
              } else {
                if (this.hScrollInstance.value < this.hScrollInstance.max) {
                  this.hScrollInstance.setPosition(this.hScrollInstance.value + 2 * 10);
                } else {
                  this.hScrollInstance.setPosition(this.hScrollInstance.max);
                }
              }

              var c = this.hScrollInstance.value;

              if (d != c) {
                return true;
              }
            }
          }

          return false;
        },
        _removeHandlers: function _removeHandlers() {
          this.removeHandler(this.host, "focus");
          this.removeHandler(b(window), "jqxReady." + this.element.id);

          if (this._mousewheelfunc) {
            this.removeHandler(this.host, "mousewheel", this._mousewheelfunc);
          }

          var c = "mousedown";

          if (this.isTouchDevice()) {
            c = b.jqx.mobile.getTouchEventName("touchstart");
          }

          this.removeHandler(this.host, "dragstart." + this.element.id);
          this.removeHandler(this.host, "keydown");

          if (this.table) {
            this.removeHandler(this.table, "mouseleave");
            this.removeHandler(this.table, "mousemove");
            this.removeHandler(this.table, c);
            this.removeHandler(this.table, "selectstart." + this.element.id);

            if (b.jqx.browser.msie && b.jqx.browser.version < 9) {
              this.removeHandler(this.table, "dblclick");
            }
          }
        },
        _addHandlers: function _addHandlers() {
          var f = this;

          this._mousewheelfunc = this._mousewheelfunc || function (i) {
            f.wheel(i, f);
            return false;
          };

          this.addHandler(this.host, "dragstart." + this.element.id, function (i) {
            return false;
          });
          this.addHandler(this.table, "selectstart." + this.element.id, function (i) {
            if (f.enableBrowserSelection) {
              return true;
            }

            if (f.filterable) {
              if (b(i.target).ischildof(f.filterrow)) {
                return true;
              }
            }

            if (f.rowDetails) {
              if (b(i.target).parents("[data-role=details]").length > 0) {
                return true;
              }
            }

            if (undefined == f.editKey) {
              return false;
            }
          });
          this.addHandler(b(window), "jqxReady." + this.element.id, function () {
            f._updatecolumnwidths();

            f.refresh();
          });

          if (this.editable) {
            this.addHandler(b(document), "mousedown.gridedit" + this.element.id, function (k) {
              if (f.editable && f.editSettings.saveOnBlur) {
                if (f.editKey != null) {
                  if (!f.vScrollInstance.isScrolling() && !f.vScrollInstance.isScrolling()) {
                    var s = f.host.coord();
                    var p = f.host.width();
                    var l = f.host.height();
                    var u = false;
                    var j = false;
                    var t = false;

                    if (k.pageY < s.top || k.pageY > s.top + l) {
                      u = true;
                      j = true;
                    }

                    if (k.pageX < s.left || k.pageX > s.left + p) {
                      u = true;
                      t = true;
                    }

                    if (u) {
                      var m = function m(y) {
                        var x = b(y.children()[0]).data();

                        if (x && !x.jqxWidget) {
                          x = y.data();
                        }

                        if (!x) {
                          x = y.data();
                        }

                        if (x.jqxWidget && x.jqxWidget.container && x.jqxWidget.container[0].style.display == "block") {
                          var i = x.jqxWidget;
                          var z = i.container.coord().top;
                          var w = i.container.coord().top + i.container.height();

                          if (j && (k.pageY < z || k.pageY > w)) {
                            u = true;
                            i.close();
                            return true;
                          } else {
                            return false;
                          }
                        }
                      };

                      var r = f._editors;

                      if (r) {
                        for (var n = 0; n < r.length; n++) {
                          var o = r[n].editor;
                          var v = m(o);
                          var q = o.attr("aria-owns");

                          if (q) {
                            if (q == document.activeElement.id) {
                              return true;
                            }

                            if (b(document.activeElement).ischildof(b("#" + q))) {
                              return true;
                            }
                          } else {
                            q = o.children().attr("aria-owns");

                            if (q) {
                              if (q == document.activeElement.id) {
                                return true;
                              }

                              if (b(document.activeElement).ischildof(b("#" + q))) {
                                return true;
                              }
                            }
                          }

                          if (v === false) {
                            return;
                          }
                        }
                      }
                    }

                    if (u) {
                      f.endroweditbykey(f.editKey);
                    }
                  }
                }
              }
            });
          }

          this.removeHandler(this.host, "mousewheel", this._mousewheelfunc);
          this.addHandler(this.host, "mousewheel", this._mousewheelfunc);
          this.addHandler(this.host, "focus", function (i) {
            if (i.preventDefault) {}
          });
          var d = this.isTouchDevice();

          this.vScrollInstance.valueChanged = function (i) {
            if (f._timer) {
              clearTimeout(f._timer);
            }

            if (d) {
              if (f.table) {
                f.table[0].style.top = 0 - f.vScrollInstance.value + "px";
              }
            } else {
              f._timer = setTimeout(function () {
                if (f.table) {
                  f.table[0].style.top = 0 - f.vScrollInstance.value + "px";
                }
              }, 5);
            }
          };

          this.hScrollInstance.valueChanged = function (i) {
            if (f._timer) {
              clearTimeout(f._timer);
            }

            if (d) {
              if (f.table) {
                f._renderhorizontalscroll();
              }
            } else {
              f._timer = setTimeout(function () {
                if (f.table) {
                  f._renderhorizontalscroll();
                }
              }, 5);
            }
          };

          var e = "mousedown";

          if (this.isTouchDevice()) {
            e = b.jqx.mobile.getTouchEventName("touchend");

            if (b.jqx.browser.msie && b.jqx.browser.version < 10) {
              e = "mousedown";
            }
          }

          var h = function h(s, r) {
            var m = null;

            var n = f._table.coord();

            var u = n.top;
            var A = n.left;
            var B = f._table[0].rows;

            for (var o = 0; o < B.length; o++) {
              var z = B[o];
              var w = z.cells;

              for (var p = 0; p < w.length; p++) {
                var t = w[p];
                var l = t.offsetLeft + A;
                var q = t.offsetTop + u;
                var k = t.offsetWidth;
                var v = t.offsetHeight;

                if (k === 0 || v === 0) {
                  continue;
                }

                if (q <= r && r < q + v) {
                  if (l <= s && s < l + k) {
                    m = t;
                    break;
                  }
                } else {
                  break;
                }
              }
            }

            return m;
          };

          var c = function c() {
            if (f.hoveredRow) {
              var j = f.hoveredRow[0].cells;

              var i = function i(m) {
                for (var n = 0; n < m.length; n++) {
                  var l = m[n];
                  var o = l.className;
                  o = o.replace(" " + f.toTP("jqx-fill-state-hover"), "");
                  o = o.replace(" " + f.toTP("jqx-grid-cell-hover"), "");
                  l.className = o;
                }
              };

              i(j);

              if (f._pinnedTable && j.length > 0) {
                var k = f._pinnedTable[0].rows[f.hoveredRow[0].rowIndex].cells;
                i(k);
              }
            }

            f.hoveredRow = null;
          };

          this.addHandler(this.table, "mouseleave", function (i) {
            c();

            if (f.wrapper) {
              f.wrapper.parent().removeAttr("tabindex", 0);
              f.wrapper.removeAttr("tabindex", 1);
              f.content.removeAttr("tabindex", 2);
            }
          });

          var g = function g(o) {
            if (!f.enableHover) {
              return true;
            }

            f.hoveredRow = o;

            if (!o) {
              return true;
            }

            var l = o[0].cells;
            var n = f.rowDetails && !f.treeGrid;
            var q = n && !f.treeGrid ? 1 : 0;
            var k = 0;

            if (q > 0 && f.rtl) {
              q = 0;
              k = 1;
            }

            for (var m = q; m < l.length - k; m++) {
              var j = l[m];
              j.className += " " + f.toTP("jqx-fill-state-hover") + " " + f.toTP("jqx-grid-cell-hover");
            }

            if (f._pinnedTable) {
              if (f._pinnedTable[0].rows.length) {
                var p = f._pinnedTable[0].rows[f.hoveredRow[0].rowIndex].cells;

                for (var m = q; m < p.length - k; m++) {
                  var j = p[m];
                  j.className += " " + f.toTP("jqx-fill-state-hover") + " " + f.toTP("jqx-grid-cell-hover");
                }
              }
            }
          };

          if (f.isTouchDevice()) {
            f.enableHover = false;
          }

          this.addHandler(this.table, "mousemove", function (j) {
            var i = j.pageX;
            var m = j.pageY;

            if (f.disabled) {
              return true;
            }

            if (!f.enableHover) {
              return true;
            }

            if (f.hScrollInstance.isScrolling() || f.vScrollInstance.isScrolling()) {
              return true;
            }

            var l = h(i, m);

            if (!l) {
              return true;
            }

            var k = b(l).parent();
            c();

            if (f.rowDetails && f.treeGrid) {
              if (k.attr("data-role") == "row-details") {
                return true;
              }
            }

            if (f.renderedRecords && f.renderedRecords.length === 0) {
              return true;
            }

            if (f.editKey != null) {
              if (f.editKey === k.attr("data-key")) {
                return true;
              }
            }

            g(k);
            return true;
          });
          this.addHandler(this.host, "keydown", function (i) {
            return f._handleKey(i);
          });

          if (b.jqx.browser.msie && b.jqx.browser.version < 9) {
            this.addHandler(this.table, "dblclick", function (i) {
              f.table.trigger("mousedown", i);
            });
          }

          this.addHandler(this.table, e, function (B) {
            var D = B.target;
            var q = null;

            if (f.disabled) {
              return true;
            }

            if (f.touchmode && B.originalEvent && B.originalEvent._pageX) {
              return;
            }

            var i = f.table.coord();
            var s = B.pageX;
            var r = B.pageY;

            if (b.jqx.browser.msie && b.jqx.browser.version < 9) {
              if (arguments && arguments.length == 2) {
                s = arguments[1].pageX;
                r = arguments[1].pageY;
              }
            }

            if (f.isTouchDevice()) {
              var E = b.jqx.position(B);
              s = E.left;
              r = E.top;

              if (isNaN(s) || isNaN(r)) {
                var E = b.jqx.position(B.originalEvent);
                s = E.left;
                r = E.top;
              }
            }

            q = h(s, r);
            var p = b(q).parent();
            var F = p.attr("data-key");

            if (f.rowDetails && f.treeGrid) {
              if (p.attr("data-role") == "row-details") {
                return true;
              }
            }

            var v = function v() {
              if (!f.enableBrowserSelection) {
                if (B.preventDefault) {
                  B.preventDefault();
                }

                B.stopPropagation();
              }

              f.host.focus();
            };

            if (F !== undefined) {
              var m = b(q).index();
              var k = f.columns.records[m];

              if (F == f.editKey) {
                if (f.editSettings.editSingleCell) {
                  if (f.clickedTD == q) {
                    return true;
                  } else {
                    if (f.editKey != null && f.editSettings.saveOnSelectionChange) {
                      var u = f.endroweditbykey(f.editKey);

                      if (!u) {
                        return true;
                      }
                    }
                  }
                } else {
                  return true;
                }
              } else {
                if (f.editKey != null && f.editSettings.saveOnSelectionChange) {
                  var u = f.endroweditbykey(f.editKey);

                  if (!u) {
                    return true;
                  }
                }
              }

              f.clickedTD = q;
              var l = f.rowinfo[F];

              if (l && l.group) {
                return true;
              }

              var A = false;

              if (l) {
                var C = f.getrowdisplayindex(l.row);
                var t = f.getrowindex(l.row);

                f._raiseEvent("rowClick", {
                  index: C,
                  boundIndex: t,
                  key: F,
                  row: l.row,
                  originalEvent: B,
                  dataField: k.datafield
                });

                var o = new Date().getTime();
                var w = 300;

                if (!f.clickTime) {
                  f.clickTime = new Date();
                }

                if (f._lastSelectedKey == F && o - f.clickTime.getTime() < w) {
                  f._raiseEvent("rowDoubleClick", {
                    index: C,
                    boundIndex: t,
                    key: F,
                    row: l.row,
                    originalEvent: B,
                    dataField: k.datafield
                  });

                  A = true;

                  if (B.preventDefault) {
                    B.preventDefault();
                  }
                }
              }

              f.clickTime = new Date();

              if (q.className.indexOf("jqx-grid-group") >= 0) {
                if (!l.expanded) {
                  f.showdetailsbykey(F);
                } else {
                  f.hidedetailsbykey(F);
                }
              } else {
                if (B.target && B.target.className.indexOf && B.target.className.indexOf("jqx-grid-group") >= 0 && f.treeGrid) {
                  if (!l.expanded) {
                    f.treeGrid.expandRow(F);
                  } else {
                    f.treeGrid.collapseRow(F);
                  }

                  g(f._getuirow(F));

                  if (B.stopPropagation) {
                    B.stopPropagation();
                  }

                  if (B.preventDefault) {
                    B.preventDefault();
                  }
                } else {
                  if (B.target && B.target.className.indexOf && B.target.className.indexOf("checkbox") >= 0 && f.treeGrid) {
                    if (!l.checked) {
                      f.treeGrid.checkRow(F);
                    } else {
                      f.treeGrid.uncheckRow(F);
                    }

                    g(f._getuirow(F));

                    if (B.stopPropagation) {
                      B.stopPropagation();
                    }
                  } else {
                    var m = b(q).index();
                    var k = f.columns.records[m];

                    if (B.stopPropagation) {
                      B.stopPropagation();
                    }

                    if (f.editable && f.editKey == null) {
                      if (f._lastSelectedKey == F && f.editSettings.editOnDoubleClick && A) {
                        var u = f.beginroweditbykey(F, k);
                        return true;
                      }
                    }

                    if (f.isTouchDevice()) {
                      if (f.scrolled && new Date() - f.scrolled < 500) {
                        if (!f.enableBrowserSelection) {
                          if (B.preventDefault) {
                            B.preventDefault();
                          }
                        }

                        return false;
                      }
                    }

                    if (f.selectionMode === "singlerow" && f.selectionMode !== "custom") {
                      f.selectrowbykey(F, "mouse", false);
                      f._lastSelectedKey = F;

                      f._updateSelection();

                      if (B.preventDefault) {
                        B.preventDefault();
                      }

                      v();
                      return true;
                    } else {
                      if (f.selectionMode !== "custom") {
                        if (!B.ctrlKey && !B.metaKey) {
                          f.clearSelection(false);
                        }

                        if (B.shiftKey) {
                          if (f._lastSelectedKey) {
                            var l = f.rowinfo[f._lastSelectedKey];

                            f._doSelection(f._lastSelectedKey, true, false);

                            var j = b(f._table.children()[1]).children("[data-key=" + f._lastSelectedKey + "]");
                            var n = j.index();
                            var z = p.index();

                            f._selectRange(z, n);

                            f.selectrowbykey(F, "mouse", false);

                            f._updateSelection();

                            if (B.preventDefault) {
                              B.preventDefault();
                            }

                            v();
                            return true;
                          }
                        }
                      }

                      f._lastSelectedKey = F;
                      f.clickTime = new Date();

                      if (f.selectionMode !== "custom") {
                        if (l) {
                          if (l.selected) {
                            f.unselectrowbykey(F, "mouse", false);
                          } else {
                            f.selectrowbykey(F, "mouse", false);
                          }

                          v();
                        }
                      } else {
                        return true;
                      }

                      f._updateSelection();

                      if (!f.enableBrowserSelection) {
                        if (B.preventDefault) {
                          B.preventDefault();
                        }
                      }

                      return true;
                    }
                  }
                }
              }
            }
          });
        },
        _updateSelection: function _updateSelection() {
          var l = this;
          var r = b(l._table.children()[1]).children();
          var n = l._pinnedTable ? b(l._pinnedTable.children()[1]).children() : null;
          var e = l.rowDetails && !l.treeGrid;
          var d = e ? 1 : 0;
          var f = 0;

          if (d > 0 && l.rtl) {
            d = 0;
            f = 1;
          }

          for (var h = 0; h < r.length; h++) {
            var q = r[h].cells;

            if (n) {
              var c = n[h].cells;
            }

            var p = null;

            if (r[h].getAttribute) {
              p = r[h].getAttribute("data-key");
            }

            if (l.rowinfo[p] && l.selectionMode !== "none") {
              if (l.rowinfo[p].selected) {
                for (var g = d; g < q.length - f; g++) {
                  var o = q[g];
                  b(o).addClass(l.toTP("jqx-grid-cell-selected") + " " + l.toTP("jqx-fill-state-pressed"));

                  if (c) {
                    b(c[g]).addClass(l.toTP("jqx-grid-cell-selected") + " " + l.toTP("jqx-fill-state-pressed"));
                  }
                }
              } else {
                for (var g = d; g < q.length - f; g++) {
                  var o = q[g];

                  if (c) {
                    var k = c[g];
                  }

                  var m = o.className;
                  m = m.replace(" jqx-fill-state-pressed", "");
                  m = m.replace(" jqx-fill-state-pressed-" + l.theme, "");
                  m = m.replace(" jqx-grid-cell-selected", "");
                  m = m.replace(" jqx-grid-cell-selected-" + l.theme, "");
                  o.className = m;

                  if (k) {
                    k.className = m;
                  }
                }
              }
            }
          }
        },
        _selectRange: function _selectRange(f, e) {
          var c = b(b(this._table.children()[1]).children()[e]);
          var j = this;

          if (f > e) {
            var h = e;
            var d = c;

            while (h < f) {
              var d = d.next();
              var g = d.attr("data-key");

              j._doSelection(g, true, false);

              h++;
            }
          } else {
            if (f < e) {
              var h = e;
              var d = c;

              while (h > f) {
                var d = d.prev();
                var g = d.attr("data-key");

                this._doSelection(g, true, false);

                h--;
              }
            }
          }
        },
        _getuikey: function _getuikey(d, g) {
          var f = null;
          var e = b(this._table.children()[1]).children();
          f = b(e[d]).attr("data-key");

          if (b(e[d]).attr("data-role")) {
            var c = b(e[d]);

            if (g == "next") {
              while (c) {
                c = c.next();

                if (c) {
                  var h = c.attr("data-role");

                  if (!h) {
                    f = c.attr("data-key");
                    return f;
                  }
                }
              }
            } else {
              if (g == "prev") {
                while (c) {
                  c = c.prev();

                  if (c) {
                    var h = c.attr("data-role");

                    if (!h) {
                      f = c.attr("data-key");
                      return f;
                    }
                  }
                }
              }
            }

            return null;
          }

          return f;
        },
        getRows: function getRows() {
          return this.source.records;
        },
        getView: function getView() {
          var d = this;

          var e = this._names();

          var f = new Array();

          var c = function c(k, h) {
            if (!h) {
              return;
            }

            for (var j = 0; j < h.length; j++) {
              if (!h[j]) {
                continue;
              }

              if (h[j]._visible !== false) {
                var g = b.extend({}, h[j]);
                k.push(g);

                if (h[j][e.expanded]) {
                  g.records = new Array();
                  c(g.records, h[j].records);
                } else {
                  if (d.dataview.filters.length > 0) {
                    g.records = new Array();
                    c(g.records, h[j].records);
                  }
                }
              }
            }
          };

          c(f, this.dataViewRecords);
          return f;
        },
        getKeys: function getKeys() {
          var d = new Array();
          var e = this.source.records;

          for (var c = 0; c < e.length; c++) {
            d.push(e[c].uid);
          }

          return d;
        },
        getKey: function getKey(c) {
          var d = this.getRows();

          if (d) {
            return d[c].uid;
          } else {
            return -1;
          }
        },
        _getkey: function _getkey(e) {
          if (this._loading) {
            throw new Error("jqxDataTable: " + this.loadingErrorMessage);
            return false;
          }

          var f = null;

          var d = function d() {
            var l = b(this._table.children()[1]).children();
            var k = null;
            var n = 0;

            if (this.pageable) {
              n -= this.dataview.pagenum * this.dataview.pagesize;
            }

            if (this.groups.length > 0) {
              var h = 0;

              for (var j = 0; j < l.length; j++) {
                var o = b(l[j]);
                var m = o.children()[0].getAttribute("colspan");

                if (m > 0) {
                  continue;
                }

                if (h === n + e) {
                  k = o.attr("data-key");
                  return k;
                }

                h++;
              }

              return k;
            }

            if (this.rowDetails) {
              var h = 0;

              for (var j = 0; j < l.length; j++) {
                if (h === e + n) {
                  k = b(l[j]).attr("data-key");
                  return k;
                }

                if (j % 2 == 1) {
                  h++;
                }
              }
            } else {
              k = b(l[n + e]).attr("data-key");
            }

            return k;
          };

          f = d.call(this);

          if (f == null) {
            if (this.pageable) {
              var c = Math.floor(e / this.dataview.pagesize);

              if (this.dataview.pagenum != c) {
                var g = this.getRows()[e];

                if (g && g.uid != null) {
                  return g.uid;
                } else {
                  if (isNaN(c)) {
                    return null;
                  }

                  this.goToPage(c);
                  f = d.call(this);
                }
              }
            }
          }

          return f;
        },
        _getuirow: function _getuirow(g) {
          try {
            var c = b(this._table.children()[1]).children("[data-key=" + g + "]");

            if (c.length > 0) {
              return c;
            }
          } catch (e) {
            var d = b(this._table.children()[1]).children();

            for (var f = 0; f < d.length; f++) {
              var j = d[f];
              var h = j.getAttribute("data-key");

              if (g == h) {
                return b(j);
              }
            }

            return null;
          }

          return null;
        },
        _getpinneduirow: function _getpinneduirow(g) {
          if (!this._pinnedTable) {
            return null;
          }

          try {
            var c = b(this._pinnedTable.children()[1]).children("[data-key=" + g + "]");

            if (c.length > 0) {
              return c;
            }
          } catch (e) {
            var d = b(this._pinnedTable.children()[1]).children();

            for (var f = 0; f < d.length; f++) {
              var j = d[f];
              var h = j.getAttribute("data-key");

              if (g == h) {
                return b(j);
              }
            }

            return null;
          }

          return null;
        },
        _names: function _names() {
          var d = {
            leaf: "leaf",
            parent: "parent",
            expanded: "expanded",
            checked: "checked",
            selected: "selected",
            level: "level",
            icon: "icon",
            data: "data"
          };

          if (!this.source || this.source && !this.source._source.hierarchy) {
            return d;
          }

          var c = this.source._source.hierarchy.reservedNames;

          if (!c) {
            return d;
          }

          return c;
        },
        _getMatches: function _getMatches(f, g) {
          if (f == undefined || f.length == 0) {
            return -1;
          }

          var c = this.renderedRecords;

          if (g != undefined) {
            c = c.slice(g);
          }

          var e = 0;

          if (this.rowDetails && !this.treeGrid) {
            e++;
          }

          if (e < this.columns.records.length) {
            var d = this.columns.records[e].datafield;
          } else {
            new Array();
          }

          var h = new Array();
          b.each(c, function (k) {
            var l = this[d];

            if (!l) {
              l = "";
            }

            var j = b.jqx.string.startsWithIgnoreCase(l.toString(), f);

            if (j) {
              h.push(this.uid);
            }
          });
          return h;
        },
        _handleKey: function _handleKey(X) {
          if (this._loading) {
            return true;
          }

          if (b(X.target).ischildof(this.filter)) {
            return true;
          }

          if (b(X.target).ischildof(this.toolbar)) {
            return true;
          }

          if (b(X.target).ischildof(this.statusbar)) {
            return true;
          }

          var T = this._names();

          var I = this;
          var s = X.charCode ? X.charCode : X.keyCode ? X.keyCode : 0;
          var n = this._lastSelectedKey;
          var V = this.rowinfo[n];

          var v = this._getuirow(n);

          var x = X.shiftKey && this.selectionMode != "singlerow";
          var Q = X.ctrlKey || X.metaKey;

          if (!v) {
            return;
          }

          if (this.handleKeyboardNavigation) {
            var u = this.handleKeyboardNavigation(s);

            if (u) {
              return true;
            }
          }

          if (this.editable && this.editKey == undefined && s === 113 && this.editSettings.editOnF2) {
            this.beginroweditbykey(v.attr("data-key"));
          }

          if (this.editKey == undefined) {
            if (!Q && !x && this.incrementalSearch && !(s >= 33 && s <= 40)) {
              var z = -1;

              if (!this._searchString) {
                this._searchString = "";
              }

              if ((s == 8 || s == 46) && this._searchString.length >= 1) {
                this._searchString = this._searchString.substr(0, this._searchString.length - 1);
              }

              var e = String.fromCharCode(s);
              var H = !isNaN(parseInt(e));
              var J = false;

              if (s >= 65 && s <= 97 || H || s == 8 || s == 32 || s == 46) {
                if (!X.shiftKey) {
                  e = e.toLocaleLowerCase();
                }

                if (s != 8 && s != 32 && s != 46) {
                  if (!(this._searchString.length > 0 && this._searchString.substr(0, 1) == e)) {
                    this._searchString += e;
                  }
                }

                if (s == 32) {
                  this._searchString += " ";
                }

                this._searchTime = new Date();
                var n = this.getSelection();

                if (n.length >= 1) {
                  var t = n[0].uid;
                  var C = -1;

                  for (var S = 0; S < this.renderedRecords.length; S++) {
                    if (this.renderedRecords[S].uid == t) {
                      C = S;
                      break;
                    }
                  }

                  var B = this._getMatches(this._searchString, C);

                  if (B.length == 0 || B.length > 0 && B[0] == t) {
                    var B = this._getMatches(this._searchString);
                  }
                } else {
                  var B = this._getMatches(this._searchString);
                }

                if (B.length > 0) {
                  var n = this.getSelection();

                  if (n.length >= 1) {
                    var c = B.indexOf(n[0].uid);

                    if (c == -1) {
                      this.clearSelection(false);
                      this.selectrowbykey(B[0]);
                    } else {
                      var h = c + 1;

                      if (h >= B.length) {
                        h = 0;
                      }

                      this.clearSelection(false);
                      this.selectrowbykey(B[h]);
                    }
                  } else {
                    this.clearSelection(false);
                    this.selectrowbykey(B[0]);
                  }

                  this._lastSearchString = this._searchString;
                }
              }

              if (this._searchTimer != undefined) {
                clearTimeout(this._searchTimer);
              }

              if (s == 27 || s == 13) {
                this._searchString = "";
                this._lastSearchString = "";
              }

              this._searchTimer = setTimeout(function () {
                I._searchString = "";
                I._lastSearchString = "";
              }, 500);

              if (z >= 0) {
                return;
              }

              if (J) {
                return false;
              }
            }
          }

          if (this.editKey != undefined) {
            if (s === 27 && this.editSettings.cancelOnEsc) {
              this.endroweditbykey(this.editKey, true);
            } else {
              if (s === 13 && this.editSettings.saveOnEnter) {
                if (X.target && X.target.nodeName.toLowerCase() != "div" && X.target.nodeName.toLowerCase() != "input") {
                  return true;
                }

                this.endroweditbykey(this.editKey, false);
              } else {
                if (this.editSettings.editSingleCell) {
                  if (this.editColumn) {
                    var P = this.columns.records.indexOf(this.editColumn);

                    if (s == 9 && P < this.columns.records.length - 1 && !X.shiftKey) {
                      var M = this.editKey;
                      var y = null;

                      for (var S = P + 1; S < this.columns.records.length; S++) {
                        if (this.columns.records[S].editable && !this.columns.records[S].hidden) {
                          y = this.columns.records[S];
                          break;
                        }
                      }

                      if (y) {
                        this.endroweditbykey(this.editKey, false);
                        this.beginroweditbykey(M, y);
                      }
                    } else {
                      if (s == 9 && X.shiftKey && P > 0) {
                        var M = this.editKey;
                        var E = null;

                        for (var S = P - 1; S >= 0; S--) {
                          if (this.columns.records[S].editable && !this.columns.records[S].hidden) {
                            E = this.columns.records[S];
                            break;
                          }
                        }

                        if (E) {
                          this.endroweditbykey(this.editKey, false);
                          this.beginroweditbykey(M, E);
                        }
                      }
                    }

                    if (s == 9) {
                      var o = this.rowinfo[this.editKey];
                      var C = this.getrowindex(o);

                      var v = this._getuirow(this.editKey);

                      if (!X.shiftKey && !y) {
                        var N = null;

                        for (var S = 0; S < this.columns.records.length; S++) {
                          if (this.columns.records[S].editable && !this.columns.records[S].hidden) {
                            N = this.columns.records[S];
                            break;
                          }
                        }

                        if (N) {
                          while (v) {
                            v = v.next();

                            if (v) {
                              var D = v.attr("data-role");

                              if (!D) {
                                var F = v.attr("data-key");
                                break;
                              }
                            }
                          }

                          if (F) {
                            this.clearSelection(false);
                            this._lastSelectedKey = F;
                            var o = this.rowsByKey[F];
                            var C = this.getrowindex(o);
                            var L = this.getrowdisplayindex(o);

                            this._raiseEvent("rowSelect", {
                              key: F,
                              index: L,
                              boundIndex: C,
                              row: this.rowsByKey[F]
                            });

                            var q = this.endroweditbykey(this.editKey, false);

                            if (q) {
                              this._doSelection(F, true, true);

                              this.beginroweditbykey(F, N);
                            } else {
                              this.beginroweditbykey(this.editKey, N);
                            }
                          }
                        }
                      } else {
                        if (!E && X.shiftKey) {
                          var N = null;

                          for (var S = this.columns.records.length - 1; S >= 0; S--) {
                            if (this.columns.records[S].editable && !this.columns.records[S].hidden) {
                              N = this.columns.records[S];
                              break;
                            }
                          }

                          if (N) {
                            while (v) {
                              v = v.prev();

                              if (v) {
                                var D = v.attr("data-role");

                                if (!D) {
                                  var F = v.attr("data-key");
                                  break;
                                }
                              }
                            }

                            if (F) {
                              this.clearSelection(false);
                              this._lastSelectedKey = F;
                              var o = this.rowsByKey[F];
                              var C = this.getrowindex(o);
                              var L = this.getrowdisplayindex(o);

                              this._raiseEvent("rowSelect", {
                                key: F,
                                index: L,
                                boundIndex: C,
                                row: this.rowsByKey[F]
                              });

                              this.endroweditbykey(this.editKey, false);

                              this._doSelection(F, true, true);

                              this.beginroweditbykey(F, N);
                            }
                          }
                        }
                      }

                      return false;
                    }
                  }
                }
              }
            }

            return true;
          }

          if (X.ctrlKey || X.metaKey) {
            var f = String.fromCharCode(s).toLowerCase();

            if (f == "c" || f == "x") {
              var n = this.getSelection();

              if (n.length >= 1) {
                var w = "";

                for (var K = 0; K < this.renderedRecords.length; K++) {
                  var Y = this.renderedRecords[K];

                  for (var S = 0; S < n.length; S++) {
                    var o = n[S];

                    if (o.uid === Y.uid) {
                      for (var R = 0; R < this.columns.records.length; R++) {
                        var A = this.getCellTextByKey(o.uid, this.columns.records[R].displayfield);
                        w += A;

                        if (R < this.columns.records.length - 1) {
                          w += "\t";
                        }
                      }

                      w += "\r\n";
                      break;
                    }
                  }
                }

                if (w != "") {
                  w = w.substring(0, w.length - 1);
                }

                if (window.clipboardData) {
                  window.clipboardData.setData("Text", w);
                } else {
                  var O = b('<textarea style="position: absolute; left: -1000px; top: -1000px;"/>');
                  O.val(w);
                  b("body").append(O);
                  O.select();
                  setTimeout(function () {
                    document.designMode = "off";
                    O.select();
                    O.remove();
                  }, 100);
                }
              }
            }
          }

          if (s === 32 && this.treeGrid) {
            if (this.treeGrid.checkboxes) {
              var n = this.getSelection();

              if (n.length > 1) {
                for (var S = 0; S < n.length; S++) {
                  var G = n[S].uid;

                  if (this.rowinfo[G].checked) {
                    this.treeGrid.uncheckRow(G, false);
                  } else {
                    this.treeGrid.checkRow(G, false);
                  }
                }

                this._renderrows();

                return false;
              } else {
                var t = v.attr("data-key");

                if (t) {
                  if (this.rowinfo[t].checked) {
                    this.treeGrid.uncheckRow(t);
                  } else {
                    this.treeGrid.checkRow(t);
                  }

                  return false;
                }
              }
            }
          }

          var d = v.index();

          var W = function W(Z) {
            var j = null;
            var p = b(I._table.children()[1]).children().length - 1;
            var i = b(b(I._table.children()[1]).children()[p]);
            var aa = i.attr("data-role");

            if (!aa) {
              j = i.attr("data-key");
            } else {
              while (i) {
                i = i.prev();

                if (i) {
                  var aa = i.attr("data-role");

                  if (!aa) {
                    j = i.attr("data-key");
                    break;
                  }
                }
              }
            }

            if (Z == "all") {
              return {
                row: i,
                key: j
              };
            }

            return j;
          };

          var g = function g(p) {
            var j = null;
            var i = b(b(I._table.children()[1]).children()[0]);
            var Z = i.attr("data-role");

            if (!Z) {
              j = i.attr("data-key");
            } else {
              while (i) {
                i = i.next();

                if (i) {
                  var Z = i.attr("data-role");

                  if (!Z) {
                    j = i.attr("data-key");
                    break;
                  }
                }
              }
            }

            if (p == "all") {
              return {
                row: i,
                key: j
              };
            }

            return j;
          };

          var t = null;

          var l = function l() {
            if (!Q && !x) {
              I.clearSelection(false);
            }

            if (s == 33 || s == 37) {
              var j = d;
              t = I._getuikey(j, "prev");

              if (!t) {
                t = g();
              }
            } else {
              if (s == 34 || s == 39) {
                var j = d;
                t = I._getuikey(j, "next");

                if (!t) {
                  t = W();
                }
              } else {
                if (s == 38) {
                  t = W();
                } else {
                  if (s == 40) {
                    t = g();
                  }
                }
              }
            }

            I._lastSelectedKey = t;
            var p = I.rowsByKey[t];
            var j = I.getrowindex(p);
            var i = I.getrowdisplayindex(p);

            I._raiseEvent("rowSelect", {
              key: t,
              index: i,
              boundIndex: j,
              row: I.rowsByKey[t]
            });

            I._doSelection(t, true, true);

            I.host.focus();
          };

          var k = function k() {
            I.clearSelection(false);
            var i = g();

            if (x || Q) {
              I._selectRange(v.index(), 0);
            } else {
              I._lastSelectedKey = i;
            }

            I.selectrowbykey(i, "keyboard");
          };

          var r = function r() {
            I.clearSelection(false);
            var i = W("all");
            var j = i.key;

            if (x || Q) {
              I._selectRange(v.index(), i.row.index());
            } else {
              I._lastSelectedKey = j;
            }

            I.selectrowbykey(j, "keyboard");
          };

          if (this.treeGrid && this.rtl) {
            if (s == 37) {
              s = 39;
            } else {
              if (s == 39) {
                s = 37;
              }
            }
          }

          if (s == 36 || Q && s == 38) {
            k();
            return false;
          } else {
            if (s == 35 || Q && s == 40) {
              r();
              return false;
            } else {
              if (s == 33 || s == 37) {
                var t = v.attr("data-key");

                if (this.rowDetails && s == 37 && !this.treeGrid) {
                  this.hidedetailsbykey(t);
                  return false;
                } else {
                  if (this.treeGrid && s == 37) {
                    if (this.rowinfo[t].row && !this.rowinfo[t].row[T.parent] && !this.rowinfo[t][T.leaf] && !this.rowinfo[t].expanded) {
                      return false;
                    }

                    if (this.rowinfo[t].expanded && !this.rowinfo[t][T.leaf]) {
                      this.treeGrid.collapseRow(t);
                      return false;
                    } else {
                      if (this.rowinfo[t].row && this.rowinfo[t].row[T.parent]) {
                        t = this.rowinfo[t].row[T.parent].uid;
                      }
                    }

                    if (this.rowinfo[t][T.leaf]) {
                      return false;
                    }
                  }
                }

                if (this.pageable && !this.treeGrid) {
                  if (!this.rtl) {
                    this.goToPrevPage(l);
                  } else {
                    this.goToNextPage(l);
                  }

                  return false;
                }

                if (this.treeGrid && this.pageable && s == 33) {
                  this.goToPrevPage(l);
                  return false;
                }
              } else {
                if (s == 34 || s == 39) {
                  var t = v.attr("data-key");

                  if (this.rowDetails && s == 39 && !this.treeGrid) {
                    this.showdetailsbykey(t);
                    return false;
                  } else {
                    if (this.treeGrid && s == 39) {
                      if (this.rowinfo[t][T.leaf]) {
                        return false;
                      }

                      if (!this.rowinfo[t].expanded) {
                        this.treeGrid.expandRow(t);
                        return false;
                      } else {
                        if (this.rowinfo[t].row && this.rowinfo[t].row.records && this.rowinfo[t].row.records.length > 0) {
                          if (this.dataview.filters.length > 0) {
                            var m = this.rowinfo[t].row.records;

                            for (var S = 0; S < m.length; S++) {
                              if (m[S]._visible) {
                                t = m[S].uid;
                                break;
                              }
                            }
                          } else {
                            t = this.rowinfo[t].row.records[0].uid;
                          }
                        }
                      }
                    }
                  }

                  if (this.pageable && !this.treeGrid) {
                    if (!this.rtl) {
                      this.goToNextPage(l);
                    } else {
                      this.goToPrevPage(l);
                    }

                    return false;
                  }

                  if (this.treeGrid && this.pageable && s == 34) {
                    this.goToNextPage(l);
                    return false;
                  }
                } else {
                  if (s == 38) {
                    while (v) {
                      v = v.prev();

                      if (v) {
                        var D = v.attr("data-role");

                        if (!D) {
                          t = v.attr("data-key");
                          break;
                        }
                      }
                    }

                    if (this.pageable && t == null) {
                      this.goToPrevPage(l);
                      return false;
                    }
                  } else {
                    if (s == 40) {
                      while (v) {
                        v = v.next();

                        if (v) {
                          var D = v.attr("data-role");

                          if (!D) {
                            t = v.attr("data-key");
                            break;
                          }
                        }
                      }

                      if (this.pageable && t == null) {
                        this.goToNextPage(l);
                        return false;
                      }
                    }
                  }
                }
              }
            }
          }

          if (t != null) {
            if (!Q && !x) {
              this.clearSelection(false);
            }

            if (this.rowinfo[t]) {
              if (this.rowinfo[t].selected && (Q || x)) {
                this._doSelection(this._lastSelectedKey, false, false);

                this._lastSelectedKey = t;
                var o = this.rowsByKey[t];
                var C = this.getrowindex(o);

                I._updateSelection();

                var L = this.getrowdisplayindex(o);

                this._raiseEvent("rowUnselect", {
                  key: t,
                  index: L,
                  boundIndex: C,
                  row: o
                });

                return false;
              }
            }

            this._lastSelectedKey = t;
            var o = this.rowsByKey[t];
            var C = this.getrowindex(o);

            this._doSelection(t, true, false);

            I._updateSelection();

            var L = this.getrowdisplayindex(o);

            this._raiseEvent("rowSelect", {
              key: t,
              index: L,
              boundIndex: C,
              row: o
            });

            if (this.treeGrid) {
              if (s == 37) {
                var v = this._getuirow(t);

                var U = null;

                if (v) {
                  var D = v.attr("data-role");

                  if (!D) {
                    U = v.attr("data-key");
                  }
                }

                if (this.pageable && U == null && this.dataview.pagenum > 0) {
                  while (this._getuirow(t) == null && this.dataview.pagenum > 0) {
                    this.goToPrevPage();
                  }
                }
              } else {
                if (s == 39) {
                  var v = this._getuirow(t);

                  var U = null;

                  if (v) {
                    var D = v.attr("data-role");

                    if (!D) {
                      U = v.attr("data-key");
                    }
                  }

                  if (this.pageable && U == null) {
                    this.goToNextPage();
                  }
                }
              }
            }

            return false;
          }
        },
        _selection: function _selection(c) {
          if ("selectionStart" in c[0]) {
            var h = c[0];
            var i = h.selectionEnd - h.selectionStart;
            return {
              start: h.selectionStart,
              end: h.selectionEnd,
              length: i,
              text: h.value
            };
          } else {
            var f = document.selection.createRange();

            if (f == null) {
              return {
                start: 0,
                end: h.value.length,
                length: 0
              };
            }

            var d = c[0].createTextRange();
            var g = d.duplicate();
            d.moveToBookmark(f.getBookmark());
            g.setEndPoint("EndToStart", d);
            var i = f.text.length;
            return {
              start: g.text.length,
              end: g.text.length + f.text.length,
              length: i,
              text: f.text
            };
          }
        },
        _doSelection: function _doSelection(c, e, d) {
          if (c == null) {
            this.clearSelection();
            return;
          }

          if (this.selectionMode === "singlerow") {
            this.clearSelection(false);
          }

          var f = this.rowinfo[c];

          if (f) {
            f.selected = e;
            this.ensurerowvisiblebykey(c);
          } else {
            this.ensurerowvisiblebykey(c);
            var f = this.rowinfo[c];

            if (f) {
              f.selected = e;
            } else {
              this.rowinfo[c] = {
                selected: e
              };
            }
          }

          if (this.selectionMode != "none") {
            if (d !== false) {
              this._renderrows();
            }
          }
        },
        clearSelection: function clearSelection(e) {
          if (this.rowinfo) {
            var f = this.getRows();

            for (var h in this.rowinfo) {
              var g = this.rowinfo[h];

              if (g.selected) {
                g.selected = false;
                var d = f.indexOf(g.row);
                var c = this.getrowdisplayindex(g.row);

                this._raiseEvent("rowUnselect", {
                  key: h,
                  index: c,
                  boundIndex: d,
                  row: g.row
                });
              }
            }
          }

          if (e !== false) {
            this._renderrows();
          }
        },
        exportData: function exportData(t) {
          if (!b.jqx.dataAdapter.ArrayExporter) {
            if (!this.treeGrid) {
              throw "jqxDataTable: Missing reference to jqxdata.export.js!";
            }

            throw "jqxTreeGrid: Missing reference to jqxdata.export.js!";
          }

          var h = this.exportSettings.columnsHeader;

          if (h == undefined) {
            h = true;
          }

          var w = this.exportSettings.hiddenColumns;

          if (w == undefined) {
            w = false;
          }

          var P = this.exportSettings.serverURL;
          var I = this.exportSettings.characterSet;
          var ac = this.exportSettings.collapsedRecords;

          if (ac == undefined) {
            ac = false;
          }

          var F = this.exportSettings.fileName;

          if (F === undefined) {
            F = this.treeGrid ? "jqxTreeGrid_Data" : "jqxDataTable_Data";
          }

          var s = this;
          var Y = this.getRows();

          if (this.exportSettings.recordsInView == true) {
            Y = this.getView();
          }

          if (this.treeGrid && this.treeGrid.virtualModeCreateRecords) {
            var Y = this.treeGrid.getRows();
          }

          if (this.groups && this.groups.length > 0) {
            var k = this.source.getGroupedRecords(this.groups, "records", "label", null, "data", null, "parent", Y);

            var m = function m(o, ad) {
              for (var af = 0; af < o.length; af++) {
                var j = b.extend({}, o[af]);
                ad.push(j);

                if (j.records && j.records.length > 0) {
                  var ag = m(j.records, new Array());

                  for (var ae = 0; ae < ag.length; ae++) {
                    if (ag[ae].leaf) {
                      ad.push(ag[ae]);
                    } else {
                      ad.push(ag[ae]);
                    }
                  }
                }
              }

              return ad;
            };

            var S = m.call(this, k, new Array());
            Y = S;
          }

          if (Y.length == 0) {
            throw "No data to export.";
          }

          this.exporting = true;

          if (this.altRows) {
            this._renderrows();
          }

          var p = new Array();

          for (var X = 0; X < this.columns.records.length; X++) {
            if (!w && this.columns.records[X].hidden) {
              continue;
            }

            p.push(b.extend({}, this.columns.records[X]));
          }

          if (this.groups && this.groups.length > 0) {
            if (p.length > 0) {
              var aa = this._names();

              for (var X = 0; X < Y.length; X++) {
                if (!Y[X][aa.leaf]) {
                  if (!s.rtl) {
                    Y[X][p[0].displayfield] = Y[X].label;
                  } else {
                    Y[X][p[p.length - 1].displayfield] = Y[X].label;
                  }
                }
              }
            }
          }

          var g = 0;

          if (this.treeGrid) {
            var L = this.treeGrid.getRows();

            if (this.exportSettings.recordsInView == true) {
              L = this.getView();
            }

            var aa = this._names();

            var d = function d(ad) {
              for (var ae = 0; ae < ad.length; ae++) {
                var j = ad[ae];
                var o = j[aa.expanded] || !j[aa.expanded] && ac;
                g = Math.max(g, 1 + j[aa.level]);

                if (j.records && j.records.length > 0 && o) {
                  d(ad[ae].records);
                }
              }
            };

            d(L);

            if (t != "xml" && t != "json") {
              var u = p.length;

              for (var X = 0; X < g; X++) {
                var Q = new a(this, this);
                Q.width = this.indentWidth;
                Q.datafield = "Level" + X;
                Q.displayfield = "Level" + X;
                Q.align = "center";
                Q.cellsalign = "center";
                Q.text = "";

                if (!this.rtl) {
                  p.splice(X, 0, Q);
                } else {
                  p.splice(u, 0, Q);
                }
              }

              var y = new Array();
              var x = this.source._source.hierarchy && this.source._source.hierarchy.groupingDataFields ? true : false;

              var U = function U(ae) {
                for (var ag = 0; ag < ae.length; ag++) {
                  var o = b.extend({}, ae[ag]);

                  for (var af = 0; af < o[aa.level]; af++) {
                    o["Level" + af] = "";
                  }

                  var ad = o[aa.expanded] || !o[aa.expanded] && ac;

                  if (t == "xls" || t == "html" || t == "pdf") {
                    if (o.records && o.records.length > 0) {
                      o["Level" + o[aa.level]] = ad ? "-" : "+";
                    } else {
                      o["Level" + o[aa.level]] = "";
                    }
                  } else {
                    o["Level" + o[aa.level]] = "";
                  }

                  if (o[aa.leaf]) {
                    o["Level" + o[aa.level]] = "";
                  }

                  for (var af = o[aa.level] + 1; af < g; af++) {
                    o["Level" + af] = "";
                  }

                  if (x && !o[aa.leaf]) {
                    if (!s.rtl) {
                      o[p[g].displayfield] = o.label;
                    } else {
                      o[p[p.length - g - 1].displayfield] = o.label;
                    }
                  }

                  if (o.aggregate) {
                    var ai = t == "xls" ? "_AG" : "";

                    for (var af = g; af < p.length; af++) {
                      var ah = af;

                      if (s.rtl) {
                        ah = p.length - af - 1;
                      }

                      if (o[p[ah].displayfield] != undefined) {
                        o[p[ah].displayfield] = ai + o[p[ah].displayfield];
                      }
                    }
                  }

                  y.push(o);

                  if (ad && !o[aa.leaf]) {
                    U(o.records);
                  }
                }
              };

              U(L);
              Y = y;
            } else {
              Y = L;
            }
          }

          var f = w != undefined ? w : false;
          var Z = {};
          var C = {};
          var l = [];
          var M = this.host.find(".jqx-grid-cell:first");
          var n = this.host.find(".jqx-grid-cell-alt:first");
          var K = this;
          M.removeClass(K.toThemeProperty("jqx-grid-cell-selected"));
          M.removeClass(K.toThemeProperty("jqx-fill-state-pressed"));
          n.removeClass(K.toThemeProperty("jqx-grid-cell-selected"));
          n.removeClass(K.toThemeProperty("jqx-fill-state-pressed"));
          M.removeClass(K.toThemeProperty("jqx-grid-cell-hover"));
          M.removeClass(K.toThemeProperty("jqx-fill-state-hover"));
          n.removeClass(K.toThemeProperty("jqx-grid-cell-hover"));
          n.removeClass(K.toThemeProperty("jqx-fill-state-hover"));
          var E = "cell";
          var B = 1;
          var J = "column";
          var z = 1;
          var A = [];

          for (var V = 0; V < p.length; V++) {
            var Q = p[V];

            if (Q.cellclassname != "") {
              Q.customCellStyles = new Array();

              if (typeof Q.cellclassname == "string") {
                Q.customCellStyles.push(Q.cellclassname);
              } else {
                for (var X = 0; X < Y.length; X++) {
                  var c = X;
                  var W = Q.cellclassname(c, Q.displayfield, Y[X][Q.displayfield], Y[X]);

                  if (W) {
                    Q.customCellStyles[X] = W;
                  }
                }
              }
            }
          }

          b.each(p, function (af) {
            var ai = af;

            if (s.treeGrid) {
              if (af >= g) {
                ai = p.length - g - 1;
              } else {
                if (g > 0 && af < g) {
                  ai = 0;
                }
              }
            }

            var aj = b(s._table[0].rows[0].cells[ai]);

            if (s._table[0].rows.length > 1) {
              var j = b(s._table[0].rows[1].cells[ai]);

              if (j.length == 0) {
                var j = b(s._table[0].rows[1].cells[0]);
              }
            }

            if (aj.length == 0) {
              var aj = b(s._table[0].rows[0].cells[0]);
            }

            var ae = this;

            var ag = function ag(am) {
              am.removeClass(K.toThemeProperty("jqx-cell"));
              am.removeClass(K.toThemeProperty("jqx-grid-cell-selected"));
              am.removeClass(K.toThemeProperty("jqx-fill-state-pressed"));
              am.removeClass(K.toThemeProperty("jqx-grid-cell-hover"));
              am.removeClass(K.toThemeProperty("jqx-fill-state-hover"));

              if (ae.customCellStyles) {
                for (var an in ae.customCellStyles) {
                  am.removeClass(ae.customCellStyles[an]);
                }
              }
            };

            ag(aj);

            if (j) {
              ag(j);
            }

            if (this.displayfield == null) {
              return true;
            }

            if (s.showAggregates) {
              if (s.getcolumnaggregateddata) {
                if (s.treeGrid) {
                  var al = function al(am, an) {
                    for (var ao = 0; ao < am.length; ao++) {
                      var o = am[ao];

                      if (o.level === 0) {
                        an.push(o);
                      }
                    }

                    return an;
                  };

                  A.push(s.getcolumnaggregateddata(this.displayfield, this.aggregates, true, al(Y, [])));
                } else {
                  A.push(s.getcolumnaggregateddata(this.displayfield, this.aggregates, true, Y));
                }
              }
            }

            var ah = s._getexportcolumntype(this);

            if (this.exportable && (!this.hidden || f)) {
              Z[this.displayfield] = {};
              Z[this.displayfield].text = this.text;
              Z[this.displayfield].width = parseInt(this.width);

              if (isNaN(Z[this.displayfield].width)) {
                Z[this.displayfield].width = 60;
              }

              if (Z[this.displayfield].width > 500) {
                Z[this.displayfield].width = 500;
              }

              Z[this.displayfield].formatString = this.cellsFormat;
              Z[this.displayfield].localization = s.gridlocalization;
              Z[this.displayfield].type = ah;
              Z[this.displayfield].cellsAlign = this.cellsalign;
              Z[this.displayfield].hidden = !h;
              Z[this.displayfield].index = ai;
              Z[this.displayfield].maxIndex = p.length;
            }

            E = "cell" + B;
            var ak = this.element;

            if (t != "json" && t != "xml") {
              J = "column" + z;

              var i = function i(o, au, at, am, ar, ao, an, ap, aq) {
                C[o] = {
                  index: 1 + an,
                  maxIndex: p.length
                };

                if (ao.rtl) {
                  C[o].index = p.length - an;
                }

                if (t == "html" || t == "xls" || t == "pdf") {
                  if (au) {
                    C[o]["font-size"] = au.css("font-size");
                    C[o]["font-weight"] = au.css("font-weight");
                    C[o]["font-style"] = au.css("font-style");
                    C[o]["background-color"] = ao._getexportcolor(au.css("background-color"));
                    C[o]["color"] = ao._getexportcolor(au.css("color"));
                    C[o]["border-color"] = ao._getexportcolor(au.css("border-top-color"));
                  }

                  if (at) {
                    C[o]["text-align"] = ar.align;
                  } else {
                    C[o]["text-align"] = ar.cellsalign;
                    C[o]["formatString"] = ar.cellsFormat;
                    C[o]["dataType"] = ah;
                  }

                  if (t == "html" || t == "pdf") {
                    C[o]["border-top-width"] = "0px";

                    if (!ao.rtl) {
                      C[o]["border-left-width"] = "0px";
                      C[o]["border-right-width"] = "1px";
                    } else {
                      C[o]["border-left-width"] = "1px";
                      C[o]["border-right-width"] = "0px";

                      if (an == p.length - g - 1 && at) {
                        C[o]["border-right-width"] = "1px";
                      }
                    }

                    C[o]["border-bottom-width"] = "1px";

                    if (au) {
                      C[o]["border-top-style"] = au.css("border-top-style");
                      C[o]["border-left-style"] = au.css("border-left-style");
                      C[o]["border-right-style"] = au.css("border-right-style");
                      C[o]["border-bottom-style"] = au.css("border-bottom-style");
                    }

                    if (at) {
                      if (an == 0 && !ao.rtl) {
                        C[o]["border-left-width"] = "1px";
                      } else {
                        if (an == p.length - 1 && ao.rtl) {
                          C[o]["border-right-width"] = "1px";
                        }
                      }

                      if (au) {
                        C[o]["border-top-width"] = "1px";
                        C[o]["border-bottom-width"] = au.css("border-bottom-width");
                      }
                    } else {
                      if (an == 0 && !ao.rtl) {
                        C[o]["border-left-width"] = "1px";
                      } else {
                        if (an == p.length - 1 && ao.rtl) {
                          C[o]["border-right-width"] = "1px";
                        }
                      }
                    }

                    if (au) {
                      C[o]["height"] = au.css("height");
                    }

                    if (ao.treeGrid && !at) {
                      if (C[o].index - 1 < g) {
                        if (ao.rtl) {
                          C[o]["border-left-width"] = "0px";
                        } else {
                          C[o]["border-right-width"] = "0px";
                        }
                      } else {
                        if (C[o].index - 1 == g) {
                          if (!ao.rtl) {
                            C[o]["border-left-width"] = "0px";
                          } else {
                            C[o]["border-right-width"] = "0px";
                          }
                        }
                      }
                    }
                  }
                }

                if (ar.exportable && (!ar.hidden || f)) {
                  if (ap == true) {
                    if (!Z[ar.displayfield].customCellStyles) {
                      Z[ar.displayfield].customCellStyles = new Array();
                    }

                    Z[ar.displayfield].customCellStyles[aq] = o;
                  } else {
                    if (at) {
                      Z[ar.displayfield].style = o;
                    } else {
                      if (!am) {
                        Z[ar.displayfield].cellStyle = o;
                      } else {
                        Z[ar.displayfield].cellAltStyle = o;
                      }
                    }
                  }
                }
              };

              i(J, ak, true, false, this, s, af);
              z++;
              i(E, aj, false, false, this, s, af);

              if (s.altRows) {
                E = "cellalt" + B;
                i(E, j, false, true, this, s, af);
              }

              if (this.customCellStyles) {
                for (var ad in ae.customCellStyles) {
                  aj.removeClass(ae.customCellStyles[ad]);
                }

                for (var ad in ae.customCellStyles) {
                  aj.addClass(ae.customCellStyles[ad]);
                  i(E + ae.customCellStyles[ad], aj, false, false, this, s, af, true, ad);
                  aj.removeClass(ae.customCellStyles[ad]);
                }
              }

              B++;
            }
          });

          if (t != "json" && t != "xml") {
            if (g > 0 && this.treeGrid) {
              var ab = g + 1;

              if (this.rtl) {
                ab = p.length - g;
              }

              if (C["column" + ab]) {
                var e = C["column" + ab];
                e.merge = g;
                e["border-left-width"] = "1px";
                var H = C["cell" + ab];

                for (var X = 0; X < p.length; X++) {
                  var ab = X + 1;

                  if (this.rtl) {
                    ab = p.length - X;
                  }

                  C["column" + ab].level = X;
                  C["column" + ab].maxLevel = g;
                  C["cell" + ab].maxLevel = g;
                  var Q = p[X];

                  if (Q.customCellStyles) {
                    for (var R in Q.customCellStyles) {
                      if (C["cell" + ab + Q.customCellStyles[R]]) {
                        C["cell" + ab + Q.customCellStyles[R]].maxLevel = g;
                      }
                    }
                  }

                  if (C["cellalt" + ab]) {
                    C["cellalt" + ab].maxLevel = g;
                  }
                }

                for (var X = 0; X < g; X++) {
                  var ab = X + 1;
                  var D = X;

                  if (this.rtl) {
                    ab = p.length - X;
                  }

                  var r = C["column" + ab];
                  r.disabled = true;
                  C["cell" + ab].level = D;
                  C["cell" + ab].maxLevel = g;
                  C["column" + ab].level = D;

                  if (C["cellalt" + ab]) {
                    C["cellalt" + ab].level = D;
                    C["cellalt" + ab].maxLevel = g;
                  }

                  var Q = p[X];

                  if (Q.customCellStyles) {
                    for (var R in Q.customCellStyles) {
                      if (C["cell" + ab + Q.customCellStyles[R]]) {
                        C["cell" + ab + Q.customCellStyles[R]].maxLevel = g;
                        C["cell" + ab + Q.customCellStyles[R]].level = D;
                      }
                    }
                  }

                  if (t == "html" || t == "pdf" || t == "xls") {
                    r["font-size"] = e["font-size"];
                    r["font-weight"] = e["font-weight"];
                    r["font-style"] = e["font-style"];
                    r["background-color"] = e["background-color"];
                    r.color = e.color;
                    r["border-color"] = e["border-color"];

                    if (t == "html" || t == "pdf") {
                      r["border-top-width"] = e["border-top-width"];
                      r["border-left-width"] = e["border-left-width"];

                      if (this.rtl) {
                        r["border-right-width"] = e["border-right-width"];

                        if (X == 0) {
                          r["border-right-width"] = "1px";
                        }
                      }

                      if (X == 0 && !this.rtl) {
                        r["border-left-width"] = "0px";
                      } else {
                        if (X == 0 && this.rtl) {
                          r["border-left-width"] = "0px";
                        }
                      }

                      if (!this.rtl) {
                        r["border-right-width"] = "0px";
                      } else {
                        if (this.rtl) {
                          r["border-left-width"] = "0px";
                        }
                      }

                      r["border-bottom-width"] = "0px";
                      var r = C["cell" + ab];

                      if (!this.rtl) {
                        r["border-right-width"] = "0px";
                      } else {
                        if (this.rtl) {
                          r["border-left-width"] = "0px";
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          if (this.showAggregates) {
            var G = [];
            var N = t == "xls" ? "_AG" : "";
            var O = 0;

            if (this.rowDetails && !this.treeGrid) {
              O++;
            }

            if (A.length > 0) {
              b.each(p, function (j) {
                if (this.aggregates) {
                  for (var ad = 0; ad < this.aggregates.length; ad++) {
                    if (!G[ad]) {
                      G[ad] = {};
                    }

                    if (G[ad]) {
                      var ae = s._getaggregatename(this.aggregates[ad]);

                      var af = s._getaggregatetype(this.aggregates[ad]);

                      var o = A[j - O];

                      if (o) {
                        G[ad][this.displayfield] = N + ae + ": " + o[af];
                      }
                    }
                  }
                }
              });
              b.each(p, function (j) {
                for (var o = 0; o < G.length; o++) {
                  if (G[o][this.displayfield] == undefined) {
                    G[o][this.displayfield] = N;
                  }
                }
              });
            }

            b.each(G, function () {
              Y.push(this);
            });
          }

          var K = this;
          var T = b.jqx.dataAdapter.ArrayExporter(Y, Z, C, P, this.treeGrid && (t == "xml" || t == "json"));

          if (F == undefined) {
            this._renderrows();

            var q = this.treeGrid && (t == "xml" || t == "json");
            var v = T.exportTo(t, this.treeGrid && (t == "xml" || t == "json"));

            if (this.showAggregates) {
              b.each(G, function () {
                Y.pop(this);
              });
            }

            setTimeout(function () {
              K.exporting = false;
            }, 50);
            return v;
          } else {
            var q = this.treeGrid && (t == "xml" || t == "json");
            T.exportToFile(t, F, P, I, q);
          }

          if (this.showAggregates) {
            b.each(G, function () {
              Y.pop(this);
            });
          }

          this._renderrows();

          setTimeout(function () {
            K.exporting = false;
          }, 50);
        },
        _getexportcolor: function _getexportcolor(l) {
          var f = l;

          if (l == "transparent") {
            f = "#FFFFFF";
          }

          if (!f || !f.toString()) {
            f = "#FFFFFF";
          }

          if (f.toString().indexOf("rgb") != -1) {
            var i = f.split(",");

            if (f.toString().indexOf("rgba") != -1) {
              var d = parseInt(i[0].substring(5));
              var h = parseInt(i[1]);
              var j = parseInt(i[2]);
              var k = parseInt(i[3].substring(1, 4));
              var m = {
                r: d,
                g: h,
                b: j
              };

              var e = this._rgbToHex(m);

              if (d == 0 && h == 0 && j == 0 && k == 0) {
                return "#ffffff";
              }

              return "#" + e;
            }

            var d = parseInt(i[0].substring(4));
            var h = parseInt(i[1]);
            var j = parseInt(i[2].substring(1, 4));
            var m = {
              r: d,
              g: h,
              b: j
            };

            var e = this._rgbToHex(m);

            return "#" + e;
          } else {
            if (f.toString().indexOf("#") != -1) {
              if (f.toString().length == 4) {
                var c = f.toString().substring(1, 4);
                f += c;
              }
            }
          }

          return f;
        },
        _rgbToHex: function _rgbToHex(c) {
          return this._intToHex(c.r) + this._intToHex(c.g) + this._intToHex(c.b);
        },
        _intToHex: function _intToHex(d) {
          var c = parseInt(d).toString(16);

          if (c.length == 1) {
            c = "0" + c;
          }

          return c.toUpperCase();
        },
        _getexportcolumntype: function _getexportcolumntype(g) {
          var h = this;
          var f = "string";
          var e = h.source.datafields || (h.source._source ? h.source._source.datafields : null);

          if (e) {
            var j = "";
            b.each(e, function () {
              if (this.name == g.displayfield) {
                if (this.type) {
                  j = this.type;
                }

                return false;
              }
            });

            if (j) {
              return j;
            }
          }

          if (g != null) {
            if (this.dataview.cachedrecords == undefined) {
              return f;
            }

            var c = null;

            if (!this.virtualmode) {
              if (this.dataview.cachedrecords.length == 0) {
                return f;
              }

              c = this.dataview.cachedrecords[0][g.displayfield];

              if (c != null && c.toString() == "") {
                return "string";
              }
            } else {
              b.each(this.dataview.cachedrecords, function () {
                c = this[g.displayfield];
                return false;
              });
            }

            if (c != null) {
              if (g.cellsFormat.indexOf("c") != -1) {
                return "number";
              }

              if (g.cellsFormat.indexOf("n") != -1) {
                return "number";
              }

              if (g.cellsFormat.indexOf("p") != -1) {
                return "number";
              }

              if (g.cellsFormat.indexOf("d") != -1) {
                return "date";
              }

              if (g.cellsFormat.indexOf("y") != -1) {
                return "date";
              }

              if (g.cellsFormat.indexOf("M") != -1) {
                return "date";
              }

              if (g.cellsFormat.indexOf("m") != -1) {
                return "date";
              }

              if (g.cellsFormat.indexOf("t") != -1) {
                return "date";
              }

              if (typeof c == "boolean") {
                f = "boolean";
              } else {
                if (b.jqx.dataFormat.isNumber(c)) {
                  f = "number";
                } else {
                  var i = new Date(c);

                  if (i.toString() == "NaN" || i.toString() == "Invalid Date") {
                    if (b.jqx.dataFormat) {
                      i = b.jqx.dataFormat.tryparsedate(c);

                      if (i != null) {
                        if (i && i.getFullYear()) {
                          if (i.getFullYear() == 1970 && i.getMonth() == 0 && i.getDate() == 1) {
                            var d = new Number(c);

                            if (!isNaN(d)) {
                              return "number";
                            }

                            return "string";
                          }
                        }

                        return "date";
                      } else {
                        f = "string";
                      }
                    } else {
                      f = "string";
                    }
                  } else {
                    f = "date";
                  }
                }
              }
            }
          }

          return f;
        },
        showDetails: function showDetails(c) {
          var d = this._getkey(c);

          this.showdetailsbykey(d);
        },
        hideDetails: function hideDetails(c) {
          var d = this._getkey(c);

          this.hidedetailsbykey(d);
        },
        setCellValueByKey: function setCellValueByKey(E, t, x) {
          var o = this;
          var j = this.rowsByKey[E];
          var k = this.getrowindex(j);
          var h = j;

          if (h != null && h[t] == x) {
            return false;
          }

          if (h != null && h[t] === null && x === "") {
            return;
          }

          var n = "";

          if (h != null && h[t] !== x) {
            var e = this.getColumn(t);
            var f = "string";
            var B = this.source.datafields || (this.source._source ? this.source._source.datafields : null);

            if (B) {
              var u = "";
              b.each(B, function () {
                if (this.name == e.displayfield) {
                  if (this.type) {
                    u = this.type;
                  }

                  return false;
                }
              });

              if (u) {
                f = u;
              }
            }

            n = h[t];

            if (!e.nullable || x != null && x !== "" && e.nullable && x.label === undefined) {
              if (b.jqx.dataFormat.isNumber(n) || f == "number" || f == "float" || f == "int" || f == "decimal" && f != "date") {
                x = new Number(x);
                x = parseFloat(x);

                if (isNaN(x)) {
                  x = 0;
                }
              } else {
                if (b.jqx.dataFormat.isDate(n) || f == "date") {
                  if (x != "") {
                    var A = x;
                    A = new Date(A);

                    if (A != "Invalid Date" && A != null) {
                      x = A;
                    } else {
                      if (A == "Invalid Date") {
                        A = new Date();
                        x = A;
                      }
                    }
                  }
                }
              }

              if (h[t] === x) {
                return;
              }
            }

            o.dataview._filteredData = null;
            o.dataview._sortData = null;
            o.dataview._sortHierarchyData = null;
            h[t] = x;

            if (this.treeGrid) {
              var s = this.treeGrid.getRow(E);

              if (s) {
                s[t] = x;
              }
            }

            if (x != null && x.label != null) {
              var e = this.getColumn(t);
              h[e.displayfield] = x.label;
              h[t] = x.value;

              if (this.treeGrid) {
                var s = this.treeGrid.getRow(E);

                if (s) {
                  s[e.displayfield] = x.label;
                  s[t] = x.value;
                }
              }
            }
          }

          if (this.source && this.source._knockoutdatasource && !this._updateFromAdapter && this.autokoupdates) {
            if (this.source._source._localdata) {
              var z = k;

              var w = this.source._source._localdata()[z];

              this.source.suspendKO = true;
              var l = w;

              if (l[t] && l[t].subscribe) {
                if (x != null && x.label != null) {
                  l[e.displayfield](x.label);
                  l[t](x.value);
                } else {
                  l[t](x);
                }
              } else {
                var B = this.source._source.datafields;
                var d = null;
                var C = null;

                if (B) {
                  b.each(B, function () {
                    if (this.name == t) {
                      C = this.map;
                      return false;
                    }
                  });
                }

                if (C == null) {
                  if (x != null && x.label != null) {
                    l[t] = x.value;
                    l[e.displayfield] = x.label;
                  } else {
                    l[t] = x;
                  }
                } else {
                  var g = C.split(this.source.mapChar);

                  if (g.length > 0) {
                    var c = l;

                    for (var v = 0; v < g.length - 1; v++) {
                      c = c[g[v]];
                    }

                    c[g[g.length - 1]] = x;
                  }
                }

                this.source._source._localdata.replace(w, b.extend({}, l));
              }

              this.source.suspendKO = false;
            }
          }

          var q;

          if (this.source.updaterow && (q == undefined || q == true)) {
            var m = false;

            var r = function r(p) {
              if (false == p) {
                this.setCellValue(j, t, n, true, false);
              }
            };

            try {
              var i = E;
              m = this.source.updaterow(i, h, r);

              if (m == undefined) {
                m = true;
              }
            } catch (y) {
              m = false;
              this.setCellValue(j, t, n);
              return;
            }
          }

          var D = this.getrowdisplayindex(j);
          var e = this.getColumn(t);

          this._raiseEvent("cellValueChanged", {
            value: x,
            oldValue: n,
            dataField: t,
            displayField: e.displayfield,
            key: E,
            boundIndex: k,
            index: D,
            row: this.rowsByKey[E]
          });

          if (this.editable) {
            if (this.editKey != null) {
              return;
            }
          }

          this._renderrows();
        },
        setCellValue: function setCellValue(g, d, f) {
          if (g == null || d == null) {
            return false;
          }

          var c = parseInt(g);

          var e = this._getkey(c);

          this.setCellValueByKey(e, d, f);
        },
        getCellText: function getCellText(f, d) {
          if (f == null || d == null) {
            return false;
          }

          var c = parseInt(f);

          var e = this._getkey(c);

          return this.getCellTextByKey(e, d);
        },
        getCellTextByKey: function getCellTextByKey(e, d) {
          if (e == null || d == null) {
            return null;
          }

          var c = this.getCellValueByKey(e, d);
          var f = this.getColumn(d);

          if (f && f.cellsFormat != "") {
            if (b.jqx.dataFormat) {
              if (b.jqx.dataFormat.isDate(c)) {
                c = b.jqx.dataFormat.formatdate(c, f.cellsFormat, this.gridlocalization);
              } else {
                if (b.jqx.dataFormat.isNumber(c) || !isNaN(parseFloat(c)) && isFinite(c)) {
                  c = b.jqx.dataFormat.formatnumber(c, f.cellsFormat, this.gridlocalization);
                }
              }
            }
          }

          return c;
        },
        getCellValue: function getCellValue(f, d) {
          if (f == null || d == null) {
            return false;
          }

          var c = parseInt(f);

          var e = this._getkey(c);

          return this.getCellValueByKey(e, d);
        },
        getCellValueByKey: function getCellValueByKey(e, d) {
          var h = this.rowsByKey[e];

          if (!h && this.treeGrid) {
            h = this.treeGrid.getRow(e);
          }

          var c = this.getrowindex(h);
          var f = h;
          var g = "";

          if (f != null) {
            return f[d];
          }

          return null;
        },
        beginRowEdit: function beginRowEdit(c) {
          var d = this._getkey(c);

          this.beginroweditbykey(d);
        },
        beginCellEdit: function beginCellEdit(d, c) {
          var e = this._getkey(d);

          var f = this.getColumn(c);
          this.beginroweditbykey(e, f);
        },
        endCellEdit: function endCellEdit(d, c, e) {
          this.endRowEdit(d, e);
        },
        endRowEdit: function endRowEdit(c, e) {
          var d = this._getkey(c);

          this.endroweditbykey(d, e);
        },
        getrowindex: function getrowindex(f) {
          var d = this.getRows().indexOf(f);

          if (d != -1) {
            return d;
          }

          if (this.groups && this.groups.length > 0) {
            var c = this.getRows();

            for (var e = 0; e < c.length; e++) {
              if (f.originalRecord) {
                if (c[e].uid == f.originalRecord.uid) {
                  d = e;
                  break;
                }
              } else {
                if (c[e].uid == f.uid) {
                  d = e;
                  break;
                }
              }
            }
          }

          return d;
        },
        getrowdisplayindex: function getrowdisplayindex(g) {
          if (this.treeGrid) {
            return -1;
          }

          var c = this.getView();
          var e = c.indexOf(g);

          if (e != -1) {
            return e;
          }

          if (g == undefined) {
            return e;
          }

          var d = c;

          for (var f = 0; f < d.length; f++) {
            if (d[f].uid == g.uid || g.originalRecord && d[f].uid == g.originalRecord.uid) {
              e = f;
              break;
            }
          }

          return e;
        },
        beginroweditbykey: function beginroweditbykey(H, r) {
          if (this.beginEdit) {
            var B = this.beginEdit(H, r);

            if (B === false) {
              return false;
            }
          }

          var E = !this.treeGrid ? this.groups.length : this.source._source.hierarchy && this.source._source.hierarchy.groupingDataFields ? this.source._source.hierarchy.groupingDataFields.length : 0;

          if (E > 0) {
            var n = this.rowsByKey[H];

            if (this.treeGrid) {
              var n = this.treeGrid.getRow(H);
            }

            if (n.level < E) {
              return false;
            }
          }

          if (this._lastSelectedKey == null) {
            this.selectrowbykey(H);
          }

          if (this.editKey === H && this.editKey != undefined) {
            return false;
          }

          if (this.rowinfo[H] && this.rowinfo[H].locked) {
            return false;
          }

          if (this.editKey != null) {
            this.endroweditbykey(H, true);
            return false;
          }

          var F = this.editSettings.editSingleCell;

          if (!r && F && this.columns.records && this.columns.records.length > 0) {
            for (var z = 0; z < this.columns.records.length; z++) {
              r = this.columns.records[z];

              if (r.editable && !r.hidden) {
                break;
              }
            }

            if (!r) {
              return false;
            }
          }

          if (F && r && !r.editable) {
            this.editKey = null;
            return false;
          }

          if (F) {
            this.editColumn = r;
          }

          var p = this;
          var n = this.rowsByKey[H];

          if (this.treeGrid) {
            var n = this.treeGrid.getRow(H);
          }

          var o = this.getrowindex(n);

          var D = this._getuirow(H);

          var t = this._getpinneduirow(H);

          this._editors = new Array();
          var q = false;

          if (D) {
            var j = D[0].cells;
            var u = 0;

            for (var z = 0; z < j.length; z++) {
              var h = this.columns.records[z];
              var d = j[z];

              if (h.rowDetailscolumn) {
                continue;
              }

              if (h.checkboxcolumn) {
                continue;
              }

              if (h.pinned) {
                d = t[0].cells[z];
              }

              if (F && r && h.datafield != r.datafield) {
                continue;
              }

              b(d).removeClass(this.toTP("jqx-grid-cell-selected"));
              b(d).removeClass(this.toTP("jqx-fill-state-pressed"));
              b(d).removeClass(this.toTP("jqx-grid-cell-hover"));
              b(d).removeClass(this.toTP("jqx-fill-state-hover"));

              if (h.columntype == "none") {
                continue;
              }

              var v = b(d).outerWidth();
              var x = b(d).width();

              if (u === 0) {
                u = b(d).outerHeight() - 1;
              }

              b(d).css("padding", "0px");
              var e = "<div style='height:" + u + "px; width: 100%; overflow: hidden; border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; z-index: 9999;'></div>";
              var s = this.getCellTextByKey(H, h.displayfield);
              d.innerHTML = e;
              var f = b(d.firstChild);

              switch (h.columntype) {
                case "textbox":
                case "default":
                  var k = b("<input style='border: none;' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' type='textbox'/>").appendTo(f);

                  if (this.rtl) {
                    k.css("direction", "rtl");
                  }

                  k.addClass(this.toThemeProperty("jqx-input"));
                  k.addClass(this.toThemeProperty("jqx-widget-content"));
                  k.addClass(this.toThemeProperty("jqx-cell-editor"));

                  k[0].onfocus = function (i) {
                    setTimeout(function () {
                      if (i) {
                        var I = b(i.target).parent().parent().index();

                        if (I >= 0) {
                          p.ensureColumnVisible(p.columns.records[I].datafield);
                        }
                      } else {
                        var I = b(document.activeElement).parent().parent().index();

                        if (I >= 0) {
                          p.ensureColumnVisible(p.columns.records[I].datafield);
                        }
                      }

                      if (p.content) {
                        p.content[0].scrollTop = 0;
                        p.content[0].scrollLeft = 0;
                      }

                      if (p.gridcontent) {
                        p.gridcontent[0].scrollLeft = 0;
                        p.gridcontent[0].scrollTop = 0;
                      }
                    }, 10);
                  };

                  if (!h.editable) {
                    k.attr("disabled", true);
                    k.attr("readOnly", true);
                    k.addClass(this.toThemeProperty("jqx-fill-state-disabled"));
                  } else {
                    if (!q) {
                      q = true;
                      var g = b.jqx.browser.msie && b.jqx.browser.version > 10;

                      if (!g) {
                        k.focus();
                      }

                      var c = k;
                      setTimeout(function () {
                        var J = c.val().length;

                        if (!g) {
                          c.focus();
                        }

                        try {
                          if ("selectionStart" in c[0]) {
                            c[0].setSelectionRange(0, J);
                          } else {
                            var i = c[0].createTextRange();
                            i.collapse(true);
                            i.moveEnd("character", J);
                            i.moveStart("character", 0);
                            i.select();
                          }
                        } catch (I) {
                          var K = I;
                        }
                      }, 10);
                    }
                  }

                  k.width(x);
                  k.height(u);

                  if (b.jqx.browser.msie && b.jqx.browser.version < 9) {
                    k.css("line-height", parseInt(u) + "px");
                  }

                  k.css("text-align", h.cellsalign);

                  if (s === null) {
                    s = "";
                  }

                  if (s == undefined) {
                    s = "";
                  }

                  k.val(s);

                  if (h.createeditor) {
                    var C = s;
                    var s = this.getCellValueByKey(H, h.displayfield);
                    h.createeditor(!this.treeGrid ? o : H, s, k, C, x, u);
                  }

                  this._editors.push({
                    column: h,
                    editor: k
                  });

                  if (h.cellsFormat != "") {
                    if (h.cellsFormat.indexOf("p") != -1 || h.cellsFormat.indexOf("c") != -1 || h.cellsFormat.indexOf("n") != -1 || h.cellsFormat.indexOf("f") != -1) {
                      k.keydown(function (I) {
                        var O = I.charCode ? I.charCode : I.keyCode ? I.keyCode : 0;
                        var L = String.fromCharCode(O);
                        var M = parseInt(L);

                        if (isNaN(M)) {
                          return true;
                        }

                        if (p._selection(k).length > 0) {
                          return true;
                        }

                        var K = "";
                        var J = k.val();

                        if (h.cellsFormat.length > 1) {
                          var N = parseInt(h.cellsFormat.substring(1));

                          if (isNaN(N)) {
                            N = 0;
                          }
                        } else {
                          var N = 0;
                        }

                        if (N > 0) {
                          if (J.indexOf(p.gridlocalization.decimalseparator) != -1) {
                            if (p._selection(k).start > J.indexOf(p.gridlocalization.decimalseparator)) {
                              return true;
                            }
                          }
                        }

                        for (var P = 0; P < J.length - N; P++) {
                          var i = J.substring(P, P + 1);

                          if (i.match(/^[0-9]+$/) != null) {
                            K += i;
                          }
                        }

                        if (K.length >= 11) {
                          return false;
                        }
                      });
                    }
                  }

                  if (h.initeditor) {
                    var C = s;
                    var s = this.getCellValueByKey(H, h.displayfield);
                    h.initeditor(!this.treeGrid ? o : H, s, k, C, x, u);
                  }

                  break;

                case "custom":
                case "template":
                  if (!this.editorsCache) {
                    this.editorsCache = new Array();
                  }

                  var l = b("<div style='width: 100%; height: 100%; border: none;'></div>").appendTo(f);
                  var y = b.trim(h.datafield).split(" ").join("");

                  if (y.indexOf(".") != -1) {
                    y = y.replace(".", "");
                  }

                  var A = this.editorsCache["templateeditor_" + y];

                  if (h.columntype == "custom") {
                    var A = this.editorsCache["customeditor_" + y + "_" + H];
                  }

                  var C = s;
                  var s = this.getCellValueByKey(H, h.displayfield);

                  if (!A) {
                    var k = b("<div style='border: none;'></div>");
                    k.width(v);
                    k.height(u);
                    A = k;

                    if (s === null) {
                      s = "";
                    }

                    if (h.columntype != "custom") {
                      this.editorsCache["templateeditor_" + y] = k;
                    } else {
                      this.editorsCache["customeditor_" + y + "_" + H] = k;
                    }

                    k.appendTo(l);

                    if (h.createeditor) {
                      h.createeditor(!this.treeGrid ? o : H, s, k, C, v, u);
                    }
                  } else {
                    var k = A;
                    k.width(v);
                    k.height(u);
                    k.appendTo(l);
                  }

                  if (h.initeditor) {
                    h.initeditor(!this.treeGrid ? o : H, s, k, C, v, u);
                  }

                  this._editors.push({
                    column: h,
                    editor: k
                  });

                  break;
              }
            }
          }

          this.editKey = H;
          this.beginUpdate();
          var G = this.getrowdisplayindex(n);

          this._raiseEvent("rowBeginEdit", {
            key: H,
            index: G,
            boundIndex: o,
            row: this.rowsByKey[H]
          });

          if (F) {
            var n = this.rowsByKey[H];
            var w = null;
            var m = null;

            if (n) {
              w = n[r.datafield];
              m = n[r.displayfield];
            }

            this._raiseEvent("cellBeginEdit", {
              value: w,
              displayValue: m,
              key: H,
              index: G,
              dataField: r.datafield,
              displayField: r.displayfield,
              boundIndex: o,
              row: this.rowsByKey[H]
            });
          }

          this.endUpdate(false);
        },
        _toNumber: function _toNumber(f) {
          if (!f.indexOf && f != undefined) {
            f = f.toString();
          }

          if (f.indexOf(this.gridlocalization.currencysymbol) > -1) {
            f = f.replace(this.gridlocalization.currencysymbol, "");
          }

          var c = function c(l, j, k) {
            var h = l;

            if (j == k) {
              return l;
            }

            var i = h.indexOf(j);

            while (i != -1) {
              h = h.replace(j, k);
              i = h.indexOf(j);
            }

            return h;
          };

          f = c(f, this.gridlocalization.thousandsseparator, "");
          f = f.replace(this.gridlocalization.decimalseparator, ".");

          if (f.indexOf(this.gridlocalization.percentsymbol) > -1) {
            f = f.replace(this.gridlocalization.percentsymbol, "");
          }

          var g = "";

          for (var d = 0; d < f.length; d++) {
            var e = f.substring(d, d + 1);

            if (e === "-") {
              g += "-";
            }

            if (e === ".") {
              g += ".";
            }

            if (e.match(/^[0-9]+$/) != null) {
              g += e;
            }
          }

          f = g;
          f = f.replace(/ /g, "");
          return f;
        },
        _geteditorvalue: function _geteditorvalue(h, j, k, d) {
          var m = new String();

          if (j) {
            if (!h.geteditorvalue) {
              switch (h.columntype) {
                case "textbox":
                default:
                  m = j.val();

                  if (h.cellsFormat != "") {
                    var l = "string";
                    var g = this.source.datafields || (this.source._source ? this.source._source.datafields : null);

                    if (g) {
                      var n = "";
                      b.each(g, function () {
                        if (this.name == h.displayfield) {
                          if (this.type) {
                            n = this.type;
                          }

                          return false;
                        }
                      });

                      if (n) {
                        l = n;
                      }
                    }

                    var i = l === "number" || l === "float" || l === "int" || l === "integer";
                    var f = l === "date" || l === "time";

                    if (i || l === "string" && (h.cellsFormat.indexOf("p") != -1 || h.cellsFormat.indexOf("c") != -1 || h.cellsFormat.indexOf("n") != -1 || h.cellsFormat.indexOf("f") != -1)) {
                      if (m === "" && h.nullable) {
                        return "";
                      }

                      m = this._toNumber(m);
                      m = new Number(m);

                      if (isNaN(m)) {
                        m = "";
                      }
                    }

                    if (f || l === "string" && (h.cellsFormat.indexOf("H") != -1 || h.cellsFormat.indexOf("m") != -1 || h.cellsFormat.indexOf("M") != -1 || h.cellsFormat.indexOf("y") != -1 || h.cellsFormat.indexOf("h") != -1 || h.cellsFormat.indexOf("d") != -1)) {
                      if (m === "" && h.nullable) {
                        return "";
                      }

                      var e = m;
                      m = new Date(m);

                      if (m == "Invalid Date" || m == null || h.cellsFormat.length > 1) {
                        if (b.jqx.dataFormat) {
                          m = b.jqx.dataFormat.parsedate(e, h.cellsFormat, this.gridlocalization);
                        }

                        if (m == "Invalid Date" || m == null) {
                          m = "";
                        }
                      }
                    }
                  }

                  if (h.displayfield != h.datafield) {
                    m = {
                      label: m,
                      value: m
                    };
                  }

                  break;
              }
            }

            if (h.geteditorvalue) {
              var c = this.getCellValueByKey(d, h.displayfield);
              m = h.geteditorvalue(!this.treeGrid ? k : d, c, j);
            }
          }

          return m;
        },
        _validateEditors: function _validateEditors(c) {
          var k = this;
          var d = true;
          var s = k.rowsByKey[c];
          var l = k.getrowindex(s);
          var m = k._editors;
          var c = k.editKey;

          var p = k._getuirow(c);

          for (var h = 0; h < m.length; h++) {
            var j = m[h].editor;
            var f = m[h].column;

            var o = k._geteditorvalue(f, j, l, c);

            if (f.validation) {
              j.removeClass(k.toThemeProperty("jqx-grid-validation-label"));
              var e = f.datafield;

              try {
                var r = f.validation({
                  value: o,
                  row: c,
                  datafield: f.datafield,
                  displayfield: f.displayfield,
                  column: f
                }, o);
                var g = k.gridlocalization.validationstring;

                if (r.message != undefined) {
                  g = r.message;
                }

                var q = typeof r == "boolean" ? r : r.result;

                if (!q) {
                  if (r.showmessage == undefined || r.showmessage == true) {
                    k._showvalidationpopup(p, e, g, j);
                  }

                  d = false;
                }
              } catch (n) {
                k._showvalidationpopup(p, e, k.gridlocalization.validationstring, j);

                d = false;
              }
            }
          }

          return d;
        },
        endroweditbykey: function endroweditbykey(p, r) {
          var k = this;

          if (k.editKey === null) {
            return;
          }

          if (this.endEdit) {
            var n = this.endEdit(p);

            if (n === false) {
              return;
            }
          }

          var t = k.rowsByKey[p];
          var l = k.getrowindex(t);
          var m = k._editors;
          var e = k.editKey;

          var q = k._getuirow(e);

          if (r !== true) {
            var d = true;

            if (m) {
              d = k._validateEditors(e);

              if (d) {
                var h = b.extend({}, t);
                var c = b.extend({}, t);

                for (var g = 0; g < m.length; g++) {
                  var j = m[g].editor;
                  var f = m[g].column;

                  var o = k._geteditorvalue(f, j, l, e);

                  if (o && o.label != undefined) {
                    h[f.displayfield] = o.label;
                    h[f.datafield] = o.value;
                  } else {
                    h[f.displayfield] = o;
                  }
                }

                var s = function s() {
                  k.dataview._sortHierarchyData = null;
                  k.dataview._sortData = null;

                  for (var x = 0; x < m.length; x++) {
                    var B = m[x].editor;
                    var v = m[x].column;

                    var C = k._geteditorvalue(v, B, l, e);

                    var u = c[v.displayfield];

                    if (C && C.label != undefined) {
                      t[v.displayfield] = C.label;
                      t[v.datafield] = C.value;
                    } else {
                      t[v.displayfield] = C;
                    }

                    if (k.treeGrid) {
                      var D = k.treeGrid.getRow(e);

                      if (D) {
                        D[v.displayfield] = C;
                      }
                    }

                    if (k.editorsCache) {
                      var E = function E(i) {
                        if (i && i.jqxWidget) {
                          var G = i.jqxWidget.element.className;

                          if (G.indexOf("dropdownlist") >= 0 || G.indexOf("datetimeinput") >= 0 || G.indexOf("combobox") >= 0 || G.indexOf("menu") >= 0) {
                            if (i.jqxWidget.isOpened) {
                              var F = i.jqxWidget.isOpened();

                              if (F) {
                                i.jqxWidget.close();
                              }
                            }
                          }
                        }
                      };

                      var z = "customeditor_" + v.displayfield + "_" + p;
                      var y = "templateeditor_" + v.displayfield;

                      if (k.editorsCache[z]) {
                        var w = b(k.editorsCache[z]).data();
                        var A = k.editorsCache[z];

                        if (!w.jqxWidget && b(A).children()[0] && b(b(A).children()[0]).data().jqxWidget) {
                          w = b(b(A).children()[0]).data();
                        }

                        E(w);
                        k.editorsCache[z].detach();
                      }

                      if (k.editorsCache[y]) {
                        k.editorsCache[y].detach();
                        var w = b(k.editorsCache[y]).data();
                        var A = k.editorsCache[y];

                        if (!w.jqxWidget && b(A).children()[0] && b(b(A).children()[0]).data().jqxWidget) {
                          w = b(b(A).children()[0]).data();
                        }

                        E(w);
                      }
                    }

                    if (C != u) {
                      k.beginUpdate();

                      k._raiseEvent("cellValueChanged", {
                        value: C,
                        oldValue: u,
                        dataField: v.datafield,
                        displayField: v.displayfield,
                        key: p,
                        index: l,
                        row: t
                      });

                      k.endUpdate(false);
                    }
                  }
                };

                k.updaterowbykey(k.editKey, h, false, s);
              }
            }

            if (!d) {
              return false;
            }
          }

          k._detachEditors(e);

          return true;
        },
        _detachEditors: function _detachEditors(l) {
          var g = this;
          var m = g.rowsByKey[l];
          var i = g.getrowindex(m);

          if (g.editorsCache) {
            for (var h in g.editorsCache) {
              var f = b(g.editorsCache[h]).data();

              if (f && f.jqxWidget) {
                var c = f.jqxWidget.element.className;

                if (c.indexOf("dropdownlist") >= 0 || c.indexOf("datetimeinput") >= 0 || c.indexOf("combobox") >= 0 || c.indexOf("menu") >= 0) {
                  if (f.jqxWidget.isOpened) {
                    var e = f.jqxWidget.isOpened();

                    if (e) {
                      f.jqxWidget.close();
                    }
                  }
                }
              }

              b(g.editorsCache[h]).detach();
            }
          }

          g.beginUpdate();
          var d = g.getrowdisplayindex(m);

          if (g.editSettings.editSingleCell) {
            var m = g.rowsByKey[l];
            var k = null;
            var j = null;

            if (m) {
              k = m[g.editColumn.datafield];
              j = m[g.editColumn.displayfield];
            }

            g._raiseEvent("cellEndEdit", {
              value: k,
              displayValue: j,
              key: l,
              index: d,
              dataField: g.editColumn.datafield,
              displayField: g.editColumn.displayfield,
              boundIndex: i,
              row: g.rowsByKey[l]
            });
          }

          g._raiseEvent("rowEndEdit", {
            key: l,
            index: d,
            boundIndex: i,
            row: g.rowsByKey[l]
          });

          g.endUpdate(false);
          g.editColumn = null;
          g.editKey = null;

          g._renderrows();

          g._renderhorizontalscroll();

          g.host.focus();
          setTimeout(function () {
            g.host.focus();
          }, 10);
        },
        _showvalidationpopup: function _showvalidationpopup(r, e, s, m) {
          if (s == undefined) {
            var s = this.gridlocalization.validationstring;
          }

          m.addClass(this.toThemeProperty("jqx-grid-validation-label"));
          var p = b("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;'></div>");
          var o = b("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");
          p.html(s);
          o.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));
          p.addClass(this.toThemeProperty("jqx-grid-validation"));
          p.addClass(this.toThemeProperty("jqx-rc-all"));
          p.hide();
          o.hide();
          p.prependTo(this.table);
          o.prependTo(this.table);
          var h = this.hScrollInstance;
          var j = h.value;
          var g = parseInt(j);
          var l = this.getColumn(e).uielement;

          if (!r) {
            return;
          }

          var k = r;
          p.css("top", parseInt(k.position().top) + 30 + "px");
          var c = parseInt(p.css("top"));
          o.css("top", c - 11);
          o.removeClass();
          o.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));
          var f = false;

          if (c >= this._table.height()) {
            o.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));
            o.addClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));
            c = parseInt(k.position().top) - k.outerHeight() - 5;

            if (c < 0) {
              c = 0;
              o.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));
              f = true;
            }

            p.css("top", c + "px");
            o.css("top", c + p.outerHeight() - 9);
          }

          var n = -g + parseInt(b(l).position().left);
          var q = parseInt(this._table.css("left"));

          if (isNaN(q)) {
            q = 0;
          }

          if (q != 0) {
            g = 0;
          }

          o.css("left", g + n + 30);
          var d = p.width();

          if (d + n > this.host.width() - 20) {
            var i = d + n - this.host.width() + 40;
            n -= i;
          }

          if (!f) {
            p.css("left", g + n);
          } else {
            p.css("left", g + parseInt(b(l).position().left) - p.outerWidth());
          }

          m.mouseenter(function () {
            if (m.hasClass("jqx-grid-validation-label")) {
              p.show();
              o.show();
            }
          });
          m.mouseleave(function () {
            p.hide();
            o.hide();
          });

          if (!this.popups) {
            this.popups = new Array();
          }

          this.popups[this.popups.length] = {
            validation: p,
            validationrow: o
          };
        },
        addRow: function addRow(d, p, j, n) {
          if (p != undefined) {
            this._datachanged = true;

            if (j == undefined) {
              j = "last";
            }

            var o = false;
            var k = this.that;

            if (d == null) {
              var f = this.dataview.filters && this.dataview.filters.length > 0;
              var m = !f ? this.dataview.totalrecords : this.source.records.length;

              if (!this.pageable) {
                if (this.source._source.totalrecords) {
                  this.dataview.totalrecords = this.source._source.totalrecords;
                } else {
                  if (this.source._source.totalRecords) {
                    this.dataview.totalrecords = this.source._source.totalRecords;
                  } else {
                    if (this.source.hierarchy.length !== 0) {
                      this.dataview.totalrecords = this.source.hierarchy.length;
                    } else {
                      this.dataview.totalrecords = this.source.records.length;
                    }
                  }
                }

                var m = !f ? this.dataview.totalrecords : this.source.records.length;
              }

              if (!b.isArray(p)) {
                d = this.dataview.getid(this.dataview.source.id, p, m);

                if (this.getColumn(this.dataview.source.id)) {
                  p[this.dataview.source.id] = d;
                }
              } else {
                var c = new Array();
                b.each(p, function (e, q) {
                  var r = k.dataview.getid(k.dataview.source.id, p[e], m + e);
                  c.push(r);

                  if (k.getColumn(k.dataview.source.id)) {
                    p[e][k.dataview.source.id] = r;
                  }
                });
                d = c;
              }
            } else {
              if (!b.isArray(p)) {
                if (this.getColumn(this.dataview.source.id)) {
                  p[this.dataview.source.id] = d;
                }
              } else {
                b.each(p, function (e, q) {
                  var r = d[e];

                  if (k.getColumn(k.dataview.source.id)) {
                    p[e][k.dataview.source.id] = r;
                  }
                });
              }
            }

            var i = this.treeGrid ? this.treeGrid.virtualModeCreateRecords ? true : false : false;

            var g = function g(v, q, A, t) {
              if (v._loading) {
                throw new Error("jqxDataTable: " + v.loadingErrorMessage);
                return false;
              }

              var r = v.vScrollInstance.value;
              var z = false;

              if (!b.isArray(A)) {
                A.uid = q;
                v.rowsByKey[q] = A;

                if (q == n) {
                  n = null;
                }

                z = v.source.addRecord(A, t, n, i);
              } else {
                b.each(A, function (B, C) {
                  var D = null;

                  if (q != null && q[B] != null) {
                    D = q[B];
                  }

                  this.uid = D;
                  v.rowsByKey[D] = this;

                  if (q == n) {
                    n = null;
                  }

                  z = v.source.addRecord(this, t, n, i);
                });
              }

              if (v.groups && v.groups.length > 0) {
                var w = Object.prototype.toString;
                var y = v.groups[0];
                Object.prototype.toString = typeof y == "function" ? y : function () {
                  return this[y];
                };

                if (!v.source.records.sort) {
                  var x = new Array();
                  var u = 0;
                  var e = 0;
                  var s = [];
                  b.each(s, function () {
                    x[e + u++] = this;
                  });
                  s = x;
                }

                v.source.records.sort(function (C, B) {
                  if (C === undefined) {
                    C = null;
                  }

                  if (B === undefined) {
                    B = null;
                  }

                  if (C === null && B === null) {
                    return 0;
                  }

                  if (C === null && B !== null) {
                    return -1;
                  }

                  if (C !== null && B === null) {
                    return 1;
                  }

                  var F = 0;
                  var E = 0;

                  if (C && C.uid) {
                    F = C.uid;
                  }

                  if (B && B.uid) {
                    E = B.uid;
                  }

                  C = C.toString();
                  B = B.toString();

                  if (b.jqx.dataFormat.isNumber(C) && b.jqx.dataFormat.isNumber(B)) {
                    if (C < B) {
                      return -1;
                    }

                    if (C > B) {
                      return 1;
                    }

                    return 0;
                  } else {
                    if (b.jqx.dataFormat.isDate(C) && b.jqx.dataFormat.isDate(B)) {
                      if (C < B) {
                        return -1;
                      }

                      if (C > B) {
                        return 1;
                      }

                      return 0;
                    } else {
                      if (!b.jqx.dataFormat.isNumber(C) && !b.jqx.dataFormat.isNumber(B)) {
                        C = String(C).toLowerCase();
                        B = String(B).toLowerCase();
                      }
                    }
                  }

                  try {
                    if (C < B) {
                      return -1;
                    }

                    if (C > B) {
                      return 1;
                    }
                  } catch (D) {
                    var G = D;
                  }

                  if (typeof F == "number") {
                    if (F < E) {
                      return -1;
                    }

                    if (F > E) {
                      return 1;
                    }
                  }

                  return 0;
                });
                Object.prototype.toString = w;
              }

              v.dataview._filteredData = null;
              v.dataview._sortData = null;
              v.dataview._sortHierarchyData = null;

              if (v._updating == undefined || v._updating == false) {
                v.refresh();
              }

              if (v.source && v.source._knockoutdatasource && !v._updateFromAdapter && v.autokoupdates) {
                if (v.source._source._localdata) {
                  v.source.suspendKO = true;

                  v.source._source._localdata.push(A);

                  v.source.suspendKO = false;
                }
              }

              v.vScrollInstance.setPosition(r);
              return z;
            };

            if (this.source.addrow) {
              var h = function h(e, q) {
                if (e == true || e == undefined) {
                  if (q != undefined) {
                    d = q;
                  }

                  g(k, d, p, j);
                }
              };

              try {
                if (!k.treeGrid) {
                  o = this.source.addrow(d, p, j, h);
                } else {
                  o = this.source.addrow(d, p, j, n, h);
                }

                if (o == undefined) {
                  o = true;
                }
              } catch (l) {
                o = false;
              }

              if (o == false) {
                return false;
              }
            } else {
              g(this, d, p, j);
            }

            return o;
          }

          return false;
        },
        deleteRow: function deleteRow(c) {
          var d = this._getkey(c);

          this.deleterowbykey(d);
        },
        deleterowbykey: function deleterowbykey(g) {
          if (g != undefined) {
            this._datachanged = true;
            var h = false;
            var f = this.that;

            var d = function d(m, l) {
              if (m._loading) {
                throw new Error("jqxDataTable: " + m.loadingErrorMessage);
                return false;
              }

              m.dataview._filteredData = null;
              m.dataview._sortData = null;
              m.dataview._sortHierarchyData = null;
              var o = false;
              var p = m.vScrollInstance.value;

              if (!b.isArray(l)) {
                var o = false;

                if (m.rowsByKey[l]) {
                  o = true;

                  if (m.rowinfo[l] && m.rowinfo[l].selected) {
                    m.unselectrowbykey(l, false);
                  }

                  if (m.treeGrid) {
                    var n = m._names();

                    var k = m.rowsByKey[l][n.parent];
                  }

                  delete m.rowsByKey[l];

                  if (m.treeGrid) {
                    if (m.rowinfo[l]) {
                      var i = m.rowinfo[l].row.records;

                      var j = function j(q) {
                        for (var r = 0; r < q.length; r++) {
                          var s = q[r].uid;
                          delete m.rowsByKey[s];
                          delete m.rowinfo[s];

                          if (q[r].records) {
                            j(q[r].records);
                          }
                        }
                      };

                      if (i) {
                        j(i);
                      }
                    }
                  }

                  delete m.rowinfo[l];
                  m.source.deleteRecord(l);

                  if (k) {
                    if (n && k.records && k.records.length == 0) {
                      k[n.leaf] = true;
                      m.rowinfo[k.uid][n.leaf] = true;
                    }
                  }
                }
              } else {
                b.each(l, function () {
                  var t = this;

                  if (m.rowsByKey[t]) {
                    o = true;

                    if (m.rowinfo[t].selected) {
                      m.unselectrowbykey(t, false);
                    }

                    if (m.treeGrid) {
                      var u = m._names();

                      var s = m.rowsByKey[t][u.parent];
                    }

                    delete m.rowsByKey[t];

                    if (m.treeGrid) {
                      if (m.rowinfo[t]) {
                        var q = m.rowinfo[t].row.records;

                        var r = function r(v) {
                          for (var w = 0; w < v.length; w++) {
                            var x = v[w].uid;
                            delete m.rowsByKey[x];
                            delete m.rowinfo[x];

                            if (v[w].records) {
                              r(v[w].records);
                            }
                          }
                        };

                        if (q) {
                          r(q);
                          delete m.rowinfo[t];
                        }
                      }
                    }

                    m.source.deleteRecord(t);

                    if (s) {
                      if (u && s.records && s.records.length == 0) {
                        s[u.leaf] = true;
                        m.rowinfo[s.uid][u.leaf] = true;
                      }
                    }
                  }
                });
              }

              m.refresh();

              if (m.source && m.source._knockoutdatasource && !m._updateFromAdapter && m.autokoupdates) {
                if (m.source._source._localdata) {
                  m.source.suspendKO = true;

                  m.source._source._localdata.pop();

                  m.source.suspendKO = false;
                }
              }

              m.vScrollInstance.setPosition(p);
              return o;
            };

            if (this.source.deleterow) {
              var c = function c(i) {
                if (i == true || i == undefined) {
                  d(f, g);
                }
              };

              try {
                this.source.deleterow(g, c);

                if (h == undefined) {
                  h = true;
                }
              } catch (e) {
                h = false;
              }
            } else {
              h = d(f, g);
            }

            return h;
          }

          return false;
        },
        updateRow: function updateRow(c, e) {
          var d = this._getkey(c);

          this.updaterowbykey(d, e);
        },
        updaterowbykey: function updaterowbykey(c, k, g, i) {
          if (c != undefined && k != undefined) {
            var f = this.that;
            var j = false;

            var d = function d(o, l, t) {
              if (o._loading) {
                throw new Error("jqxDataTable: " + o.loadingErrorMessage);
                return false;
              }

              o.dataview._filteredData = null;
              o.dataview._sortData = null;
              o.dataview._sortHierarchyData = null;
              var r = false;

              if (!b.isArray(l)) {
                var n = o.rowsByKey[l];

                var s = function s(v) {
                  if (!v) {
                    r = false;
                  } else {
                    for (var u = 0; u < o.columns.records.length; u++) {
                      v[o.columns.records[u].datafield] = t[o.columns.records[u].datafield];

                      if (o.groups.length > 0 && v.originalRecord) {
                        v.originalRecord[o.columns.records[u].datafield] = t[o.columns.records[u].datafield];
                      }
                    }

                    r = true;
                  }
                };

                s(n);

                if (o.treeGrid) {
                  n = o.treeGrid.getRow(l);
                  s(n);
                }
              } else {
                b.each(l, function (w, x) {
                  var v = o.rowsByKey[this];

                  var u = function u(z, y) {
                    if (!v) {
                      r = false;
                    } else {
                      v[this] = t[w];
                    }

                    r = true;
                  };

                  u(this, v);

                  if (o.treeGrid) {
                    v = o.treeGrid.getRow(this);
                    u(this, v);
                  }
                });
              }

              var m = o.vScrollInstance.value;

              if (g == undefined || g == true) {
                if (o._updating == undefined || o._updating == false) {
                  o._renderrows();
                }
              }

              if (o.showAggregates && o._updatecolumnsaggregates) {
                o._updatecolumnsaggregates();
              }

              if (o.source && o.source._knockoutdatasource && !o._updateFromAdapter && o.autokoupdates) {
                if (o.source._source._localdata) {
                  var n = o.rowsByKey[l];
                  var p = o.getrowindex(n);

                  var q = o.source._source._localdata()[p];

                  o.source.suspendKO = true;

                  o.source._source._localdata.replace(q, b.extend({}, n));

                  o.source.suspendKO = false;
                }
              }

              o.vScrollInstance.setPosition(m);
              return r;
            };

            if (this.source.updaterow) {
              var e = function e(l) {
                if (l == true || l == undefined) {
                  d(f, c, k);

                  if (i) {
                    i();
                  }

                  f._renderrows(false);

                  if (f.autoRowHeight) {
                    f._updateScrollbars();

                    f._arrange();
                  }
                }
              };

              try {
                j = this.source.updaterow(c, k, e);

                if (j == undefined) {
                  j = true;
                }
              } catch (h) {
                j = false;
              }
            } else {
              j = d(f, c, k);

              if (j && i) {
                i();
              }

              f._renderrows(false);

              if (f.autoRowHeight) {
                f._updateScrollbars();

                f._arrange();
              }
            }

            return j;
          }

          return false;
        },
        lockRow: function lockRow(c) {
          var d = this._getkey(c);

          this.lockrowbykey(d);
        },
        unlockRow: function unlockRow(c) {
          var d = this._getkey(c);

          this.unlockrowbykey(d);
        },
        lockrowbykey: function lockrowbykey(c) {
          if (this.rowinfo[c]) {
            this.rowinfo[c].locked = true;
          } else {
            this.rowinfo[c] = {
              locked: true
            };
          }

          this._renderrows();
        },
        unlockrowbykey: function unlockrowbykey(c) {
          if (this.rowinfo[c]) {
            this.rowinfo[c].locked = false;
          } else {
            this.rowinfo[c] = {
              locked: false
            };
          }

          this._renderrows();
        },
        selectRow: function selectRow(c) {
          var d = this._getkey(c);

          this.selectrowbykey(d);
        },
        unselectRow: function unselectRow(c) {
          var d = this._getkey(c);

          this.unselectrowbykey(d);
        },
        selectrowbykey: function selectrowbykey(e, h, f) {
          if (h != "keyboard" && h != "mouse") {
            this._lastSelectedKey = e;
          }

          var g = f !== false ? true : false;

          this._doSelection(e, true, g);

          var i = this.rowsByKey[e];
          var d = this.getrowindex(i);
          var c = this.getrowdisplayindex(i);

          this._raiseEvent("rowSelect", {
            key: e,
            index: c,
            boundIndex: d,
            row: this.rowsByKey[e]
          });
        },
        unselectrowbykey: function unselectrowbykey(e, f) {
          var g = f !== false ? true : false;

          this._doSelection(e, false, g);

          var h = this.rowsByKey[e];
          var d = this.getrowindex(h);
          var c = this.getrowdisplayindex(h);

          this._raiseEvent("rowUnselect", {
            key: e,
            index: c,
            boundIndex: d,
            row: this.rowsByKey[e]
          });
        },
        getSelection: function getSelection() {
          var c = new Array();

          if (this.rowinfo) {
            for (var e in this.rowinfo) {
              var d = this.rowinfo[e];

              if (d.selected) {
                c.push(d.row);
              }
            }
          }

          return c;
        },
        showdetailsbykey: function showdetailsbykey(k) {
          if (!this.rowDetails) {
            return;
          }

          var l = this.rowinfo[k];

          if (l) {
            l.expanded = true;
            var f = b(this._table.children()[1]).children("[data-key=" + k + "]");
            var i = b(this._pinnedTable.children()[1]).children("[data-key=" + k + "]");

            if (f) {
              var c = i.children();
              var h = b(c[0]);

              if (this.rtl) {
                var h = b(c[c.length - 1]);
              }

              if (!this.rtl) {
                h.removeClass(this.toThemeProperty("jqx-grid-group-collapse"));
                h.addClass(this.toThemeProperty("jqx-grid-group-expand"));
                h.removeClass(this.toThemeProperty("jqx-icon-arrow-right"));
                h.addClass(this.toThemeProperty("jqx-icon-arrow-down"));
              } else {
                h.removeClass(this.toThemeProperty("jqx-grid-group-collapse-rtl"));
                h.addClass(this.toThemeProperty("jqx-grid-group-expand-rtl"));
                h.removeClass(this.toThemeProperty("jqx-icon-arrow-left"));
                h.addClass(this.toThemeProperty("jqx-icon-arrow-down"));
              }

              f.next().show();
              var d = i.next();
              d.show();

              if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                f.next().children().show();
                i.next().children().show();
              }

              if (!l.initialized) {
                var j = l.detailsHeight;
                var m = this.initRowDetails(k, l.row, b(b(d).children().children().children()[0]), l);
                l.details = b(d).children().children().children()[0];
                l.initialized = true;

                if (m === false || l.detailsHeight != j) {
                  if (m === false) {
                    l.expanded = false;
                    l.nodetails = true;
                    d.hide();
                  }

                  this._renderrows();
                }
              }

              this._updateScrollbars();

              if (this.height === "auto" || this.height === null || this.autoheight) {
                this._arrange();
              }

              var g = this.getrowindex(l.row);
              var e = this.getrowdisplayindex(l.row);

              this._raiseEvent("rowExpand", {
                row: l.row,
                index: e,
                boundIndex: g,
                rowKey: k
              });
            }
          }
        },
        hidedetailsbykey: function hidedetailsbykey(h) {
          if (!this.rowDetails) {
            return;
          }

          var j = this.rowinfo[h];

          if (j) {
            j.expanded = false;
            var d = b(this._table.children()[1]).children("[data-key=" + h + "]");
            var e = b(this._pinnedTable.children()[1]).children("[data-key=" + h + "]");

            if (d) {
              var g = e.children();
              var i = b(g[0]);

              if (this.rtl) {
                var i = b(g[g.length - 1]);
              }

              if (!this.rtl) {
                i.addClass(this.toThemeProperty("jqx-grid-group-collapse"));
                i.removeClass(this.toThemeProperty("jqx-grid-group-expand"));
                i.addClass(this.toThemeProperty("jqx-icon-arrow-right"));
                i.removeClass(this.toThemeProperty("jqx-icon-arrow-down"));
              } else {
                i.addClass(this.toThemeProperty("jqx-grid-group-collapse-rtl"));
                i.removeClass(this.toThemeProperty("jqx-grid-group-expand-rtl"));
                i.addClass(this.toThemeProperty("jqx-icon-arrow-left"));
                i.removeClass(this.toThemeProperty("jqx-icon-arrow-down"));
              }

              d.next().hide();
              e.next().hide();

              if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                d.next().children().hide();
                e.next().children().hide();
              }

              this._updateScrollbars();

              if (this.height === "auto" || this.height === null || this.autoheight) {
                this._arrange();
              }

              var f = this.getrowindex(j.row);
              var c = this.getrowdisplayindex(j.row);

              this._raiseEvent("rowCollapse", {
                row: j.row,
                index: c,
                boundIndex: f,
                rowKey: h
              });
            }
          }
        },
        _getvirtualcolumnsindexes: function _getvirtualcolumnsindexes(d, l, h, k, c) {
          if (this.rowDetails || this.rtl || this.editcell || this.width && this.width.toString().indexOf("%") >= 0 || this.exporting) {
            return {
              start: 0,
              end: h + k
            };
          }

          var e = 0;
          var i = -1;
          var f = h + k;

          if (this.autorowheight) {
            return {
              start: 0,
              end: h + k
            };
          }

          if (!c) {
            for (var g = 0; g < h + k; g++) {
              var m = g;

              if (!this.columns.records[g].hidden) {
                e += this.columns.records[g].width;
              }

              if (e >= d && i == -1) {
                i = g;
              }

              if (e > l + d) {
                f = g;
                break;
              }
            }
          }

          f++;

          if (f > h + k) {
            f = h + k;
          }

          if (i == -1) {
            i = 0;
          }

          return {
            start: i,
            end: f
          };
        },
        _renderhorizontalscroll: function _renderhorizontalscroll() {
          var t = this.hScrollInstance;
          var u = t.value;

          if (this.hScrollBar.css("visibility") === "hidden") {
            t.value = 0;
            u = 0;
          }

          var h = parseInt(u);

          if (this.table == null) {
            return;
          }

          var q = this.columnsrow;
          var r = 0;
          var i = this.columns.records.length - r;
          var e = this.columns.records;
          var l = this.source.records.length == 0;

          if (this.rtl) {
            if (this.hScrollBar.css("visibility") != "hidden") {
              h = t.max - h;
            }
          }

          if (l && !this._haspinned) {
            this.table[0].style.left = -h + "px";
            q[0].style.marginLeft = -h + "px";
          } else {
            if (this._haspinned || this._haspinned == undefined) {
              for (var w = 0; w < r + i; w++) {
                var f = e[w];

                if (f.pinned) {
                  var g = null;

                  if (this.showAggregates) {
                    if (this.statusbar[0].cells) {
                      g = this.statusbar[0].cells[w];
                    }
                  }

                  if (this.filterrow) {
                    if (this.filterrow[0].cells) {
                      var x = this.filterrow[0].cells[w];
                    }
                  }

                  if (!this.rtl) {
                    var c = q[0].cells[w];
                    c.style.marginLeft = h + "px";

                    if (g) {
                      g.style.marginLeft = h + "px";
                    }

                    if (this.filterrow && x) {
                      x.style.marginLeft = h + "px";
                    }
                  } else {
                    var c = q[0].cells[w];
                    c.style.marginLeft = -parseInt(u) + "px";

                    if (g) {
                      g.style.marginLeft = -parseInt(u) + "px";
                    }

                    if (this.filterrow && x) {
                      x.style.marginLeft = -parseInt(u) + "px";
                    }
                  }
                }
              }

              if (this.columnsVirtualization) {
                var s = this._getvirtualcolumnsindexes(h, this.host.width(), 0, this.columns.records.length, false);

                var n = s.start;
                var p = s.end;

                for (var o = 0; o < n; o++) {
                  var m = o;
                  var v = this.columns.records[m].element[0];

                  if (this.columns.records[m].pinned) {
                    continue;
                  }

                  if (v.parentNode) {
                    v.parentNode.removeChild(v);
                  }

                  if (this.filterrow && this.filterrow[0]) {
                    var d = this.filterrow[0].cells[m];

                    if (d.parentNode) {
                      d.parentNode.removeChild(d);
                    }
                  }
                }

                for (var o = p; o < this.columns.records.length; o++) {
                  var m = o;
                  var v = this.columns.records[m].element[0];

                  if (this.columns.records[m].pinned) {
                    continue;
                  }

                  if (v.parentNode) {
                    v.parentNode.removeChild(v);
                  }

                  if (this.filterrow && this.filterrow[0]) {
                    var d = this.filterrow[0].cells[m];

                    if (d.parentNode) {
                      d.parentNode.removeChild(d);
                    }
                  }
                }

                for (var o = n; o < p; o++) {
                  var m = o;
                  v = this.columns.records[m].element[0];

                  if (this.columns.records[m].pinned) {
                    continue;
                  }

                  if (!v.parentNode) {
                    this.columnsrow[0].appendChild(v);
                  }

                  if (this.filterrow && this.filterrow[0]) {
                    var d = this.filterrow[0].cells[m];

                    if (!d.parentNode) {
                      this.filterrow[0].appendChild(d);
                    }
                  }
                }
              }

              this._table[0].style.left = -h + "px";
              q[0].style.marginLeft = -h + "px";
            } else {
              if (this._haspinned == false) {
                if (this.columnsVirtualization) {
                  var s = this._getvirtualcolumnsindexes(h, this.host.width(), 0, this.columns.records.length, false);

                  var n = s.start;
                  var p = s.end;

                  for (var o = 0; o < n; o++) {
                    var m = o;
                    var v = this.columns.records[m].element[0];

                    if (v.parentNode) {
                      v.parentNode.removeChild(v);
                    }

                    if (this.filterrow && this.filterrow[0]) {
                      var d = this.filterrow[0].cells[m];

                      if (d.parentNode) {
                        d.parentNode.removeChild(d);
                      }
                    }
                  }

                  for (var o = p; o < this.columns.records.length; o++) {
                    var m = o;
                    var v = this.columns.records[m].element[0];

                    if (v.parentNode) {
                      v.parentNode.removeChild(v);
                    }

                    if (this.filterrow && this.filterrow[0]) {
                      var d = this.filterrow[0].cells[m];

                      if (d.parentNode) {
                        d.parentNode.removeChild(d);
                      }
                    }
                  }

                  for (var o = n; o < p; o++) {
                    var m = o;
                    v = this.columns.records[m].element[0];

                    if (!v.parentNode) {
                      this.columnsrow[0].appendChild(v);
                    }

                    if (this.filterrow && this.filterrow[0]) {
                      var d = this.filterrow[0].cells[m];

                      if (!d.parentNode) {
                        this.filterrow[0].appendChild(d);
                      }
                    }
                  }
                }

                this.table[0].style.left = -h + "px";
                q[0].style.marginLeft = -h + "px";
              }
            }

            if (this.filterrow) {
              this.filterrow[0].style.left = -h + "px";

              if (this.rtl) {
                this.filterrow[0].style.left = -h + parseInt(this.content.css("left")) + "px";
              }
            }
          }

          if (this.showAggregates) {
            if (this.aggregates[0].cells) {
              var k = 0;

              if (this.rtl) {
                if (this.vScrollBar.css("visibility") != "hidden") {
                  if (this.hScrollBar.css("visibility") != "hidden") {
                    k = 2 + parseInt(this.hScrollBar.css("left"));
                  } else {
                    k = 3 + parseInt(this.vScrollBar.width());
                  }
                }
              }

              this.aggregates[0].style.marginLeft = -h + k + "px";
            }
          }
        },
        _initializeColumns: function _initializeColumns() {
          var d = this.source.datafields;

          if (d == null && this.source._source) {
            d = this.source._source.datafields;
          }

          var k = d ? d.length > 0 : false;

          if (this.columns && this.columns.records) {
            for (var e = 0; e < this.columns.records.length; e++) {
              this._removecolumnhandlers(this.columns.records[e]);
            }
          }

          var j = this;
          var c = new b.jqx.dataCollection(this.element);
          var h = 0;
          this._haspinned = false;

          if (!this._columns) {
            this._columns = this.columns;
          } else {
            this.columns = this._columns;
          }

          if (this.selectionMode == "checkbox") {
            var f = new a(j, this);
            f.visibleindex = h++;
            f.width = j.indentWidth;
            f.checkboxcolumn = true;
            f.editable = false;
            f.columntype = "checkbox";
            f.groupable = false;
            f.draggable = false;
            f.filterable = false;
            f.resizable = false;
            f.datafield = "_checkboxcolumn";
            c.add(f);
          }

          if (this.rowDetails && !this.treeGrid) {
            var f = new a(j, this);
            f.visibleindex = h++;
            f.width = j.indentWidth;
            f.editable = false;
            f.rowDetailscolumn = true;
            f.groupable = false;
            f.draggable = false;
            f.pinned = true;
            f.filterable = false;
            f.resizable = false;
            f.text = "";
            c.add(f);
          }

          var g = new Array();
          b.each(this.columns, function (i) {
            if (j.columns[i] != undefined) {
              var l = new a(j, this);
              l.visibleindex = h++;

              if (this.dataField != undefined) {
                this.datafield = this.dataField;
              }

              if (this.pinned) {
                j._haspinned = true;
              }

              if (this.datafield == null) {
                if (j.source && j.source._source && j.source._source.datatype == "array") {
                  if (!k) {
                    if (!j.source._source.datafields) {
                      j.source._source.datafields = new Array();

                      j.source._source.datafields.push({
                        name: i.toString()
                      });
                    } else {
                      j.source._source.datafields.push({
                        name: i.toString()
                      });
                    }
                  }

                  this.datafield = i.toString();
                  this.displayfield = i.toString();
                  l.datafield = this.datafield;
                  l.displayfield = this.displayfield;
                }
              } else {
                if (g[this.datafield]) {
                  throw new Error("jqxDataTable: Invalid column 'dataField' setting. jqxDataTable's columns should be initialized with unique data fields.");
                  j.host.remove();
                  return false;
                } else {
                  g[this.datafield] = true;
                }
              }

              c.add(l);
            }
          });

          if (this.rtl) {
            c.records.reverse();
          }

          this.columns = c;
        },
        addFilter: function addFilter(c, e) {
          var d = this.getColumn(c);

          if (!d) {
            return;
          }

          this.dataview.addFilter(c, e);
        },
        removeFilter: function removeFilter(c) {
          var d = this.getColumn(c);

          if (!d) {
            return;
          }

          this.dataview.removeFilter(c);
        },
        clearFilters: function clearFilters(d, c) {
          this.dataview.filters = new Array();
          this.dataview._filteredData = null;
          this.dataview._sortData = null;
          this.dataview._sortHierarchyData = null;

          if (c !== false) {
            this.resetfilter();
          }

          if (d === false) {
            return;
          }

          this.applyFilters();
        },
        resetfilter: function resetfilter() {
          if (this.filterinput) {
            this.filterinput.val("");
          }

          if (this.filterrow) {
            for (var f = 0; f < this.filterrow[0].cells.length; f++) {
              var m = this.filterrow[0].cells[f];
              var l = b(m).find("input:first");
              var j = b(m).find(".filterconditions");
              var e = this.columns.records[f];
              var d = "";

              if (!e.filterable) {
                continue;
              }

              l.val("");
              var g = this.getcolumntypebydatafield(e);
              var c = new b.jqx.filter();
              var h, k;

              switch (g) {
                case "number":
                case "int":
                case "float":
                case "decimal":
                  h = "numericfilter";
                  k = c.getoperatorsbyfiltertype("numericfilter");
                  break;

                case "boolean":
                case "bool":
                  h = "booleanfilter";
                  k = c.getoperatorsbyfiltertype("booleanfilter");
                  break;

                case "date":
                case "time":
                  h = "datefilter";
                  k = c.getoperatorsbyfiltertype("datefilter");
                  break;

                case "string":
                  h = "stringfilter";
                  k = c.getoperatorsbyfiltertype("stringfilter");
                  break;
              }

              if (j.length > 0) {
                if (h === "stringfilter") {
                  j.jqxDropDownList({
                    selectedIndex: 2
                  });
                } else {
                  j.jqxDropDownList({
                    selectedIndex: 0
                  });
                }
              }
            }
          }
        },
        applyFilters: function applyFilters() {
          if (this.editable) {
            if (this.editKey != null) {
              var c = this.endroweditbykey(this.editKey);
            }
          }

          this.dataview._filteredData = null;
          this.dataview._sortData = null;
          this.dataview._sortHierarchyData = null;

          if (this.serverProcessing) {
            this.dataview.pagenum = 0;
            this.updateBoundData("filter");
          } else {
            this.goToPage(0);
            this.refresh();
          }

          if (arguments && arguments.length > 0) {
            if (this._updateSimpleFilter) {
              if (this.filtercolumnsList) {
                var d = this.filtercolumnsList.jqxDropDownList("getSelectedItem").value;

                this._updateSimpleFilter(d);
              }
            }

            if (this._updateFilterRow) {
              this._updateFilterRow();
            }
          }

          this._raiseEvent("filter", {
            filters: this.dataview.filters
          });
        },
        sortBy: function sortBy(d, g) {
          this.dataview._filteredData = null;
          this.dataview._sortData = null;
          this.dataview._sortHierarchyData = null;

          if (this._loading) {
            throw new Error("jqxDataTable: " + this.loadingErrorMessage);
            return false;
          }

          if (this.editable) {
            if (this.editKey != null) {
              var c = this.endroweditbykey(this.editKey);
            }
          }

          if (d == null) {
            g = null;
            d = this.sortcolumn;
          }

          if (d) {
            var f = this;
            var e;

            if (g == "a" || g == "asc" || g == "ascending" || g == true) {
              e = true;
            } else {
              e = false;
            }

            if (g != null) {
              f.sortdirection = {
                ascending: e,
                descending: !e
              };
            } else {
              f.sortdirection = {
                ascending: false,
                descending: false
              };
            }

            if (g != null) {
              f.sortcolumn = d;
            } else {
              f.sortcolumn = null;
            }

            if (f.source.sort) {
              f.dataview.sortfield = d;

              if (g == null) {
                f.dataview.sortfielddirection = "";
              } else {
                f.dataview.sortfielddirection = e ? "asc" : "desc";
              }

              if (f.source.sort && !this._loading) {
                f.source.sort(d, g);
              }
            }

            f.dataview.sortBy(d, g);

            f._raiseEvent("sort", {
              sortcolumn: this.sortcolumn,
              sortdirection: this.sortdirection
            });
          }

          if (!this.serverProcessing) {
            this.refresh();
          } else {
            this.updateBoundData("sort");
          }
        },
        _togglesort: function _togglesort(d) {
          var f = this;

          if (this.disabled) {
            return;
          }

          if (d.sortable && f.sortable) {
            var c = {
              sortcolumn: this.sortcolumn,
              sortdirection: this.sortdirection
            };
            var e = null;

            if (c.sortcolumn != null && c.sortcolumn == d.displayfield) {
              e = c.sortdirection.ascending;

              if (e == true) {
                e = false;
              } else {
                e = null;
              }
            } else {
              e = true;
            }

            f.sortBy(d.displayfield, e);
          }
        },
        _renderfilter: function _renderfilter() {
          var h = this;
          var j = b("<div style='position: relative; margin: 4px;'><input style='width: 200px; height: 22px; direction: ltr;' role='textbox' type='text'/><div style='cursor: pointer; height: 100%;'><div></div></div></div>");
          j.height(22);
          var o = j.find("input");
          var g = j.find("div:first");
          j.addClass(this.toThemeProperty("jqx-rc-all"));
          j.addClass(this.toThemeProperty("jqx-widget"));
          j.addClass(this.toThemeProperty("jqx-input-group"));
          o.addClass(this.toThemeProperty("jqx-input"));
          o.addClass(this.toThemeProperty("jqx-rc-l"));
          o.addClass(this.toThemeProperty("jqx-input-group-addon"));
          o.addClass(this.toThemeProperty("jqx-widget"));
          o.addClass(this.toThemeProperty("jqx-widget-content"));
          g.addClass(this.toThemeProperty("jqx-fill-state-normal"));
          g.addClass(this.toThemeProperty("jqx-rc-r"));
          g.addClass(this.toThemeProperty("jqx-input-group-addon"));
          g.find("div").addClass(this.toThemeProperty("jqx-icon-search"));

          if (this.rtl) {
            o.addClass(this.toThemeProperty("jqx-rtl"));
            o.css("direction", "rtl");
          }

          this.filter.children().remove();
          this.filterbutton = g;
          var d = new Array();

          for (var f = 0; f < h.columns.records.length; f++) {
            if (h.columns.records[f].datafield && h.columns.records[f].filterable) {
              d.push({
                label: h.columns.records[f].text,
                value: h.columns.records[f].displayfield
              });
            }
          }

          var p = d.length < 10 ? true : false;
          var l = b("<div style='position: relative; top: 50%; display: none; margin-right: 4px; margin-left: 4px; float: left;'>" + this.gridlocalization.filtersearchstring + "</div>");
          this.filter.append(l);
          var c = b("<div class='filtercolumns' style='position: relative; margin: 4px; float: left;'></div>");
          this.filter.append(c);

          if (c.jqxDropDownList) {
            c.jqxDropDownList({
              theme: this.theme,
              enableBrowserBoundsDetection: true,
              autoDropDownHeight: p,
              rtl: h.rtl,
              dropDownWidth: 220,
              selectedIndex: 0,
              width: "auto",
              height: 20,
              source: d,
              displayMember: "label",
              valueMember: "value"
            });
          }

          this.filtercolumnsList = c;

          var n = function n(q) {
            h.filterinput.val("");

            for (var r = 0; r < h.dataview.filters.length; r++) {
              var s = h.dataview.filters[r];

              if (s.datafield === q) {
                h.filterinput.val(s.filter.getfilterat(0).filtervalue);
              }
            }
          };

          if (h.filterHeight !== 35) {
            h.filtercolumnsList.css("margin-top", h.filterHeight / 2 - 10);
            j.css("margin-top", h.filterHeight / 2 - 10);
          }

          h._updateSimpleFilter = n;
          this.addHandler(c, "select", function (q) {
            var i = q.args.item.value;
            n(i);
          });

          if (this.filterMode === "simple") {
            this.filtercolumnsList.hide();
            l.show();
            l.css("margin-top", -this.filter.height() / 2);
            j.css("float", "left");
          } else {
            this.filtercolumnsList.show();
            l.hide();
          }

          var m = function m() {
            if (!g.hasClass("jqx-fill-state-disabled")) {
              var r = o.val();

              if (c.jqxDropDownList) {
                var u = c.jqxDropDownList("getSelectedItem");
              }

              var w = function w(B, x, i) {
                var A = new b.jqx.filter();
                var z = h.getcolumntypebydatafield(B);

                var C = h._getfiltertype(z);

                if (C == "datefilter") {
                  var y = A.createfilter(C, x, "EQUAL", null, B.cellsFormat, h.gridlocalization);
                } else {
                  if (C == "numericfilter" || C == "booleanfilter") {
                    if (C == "numericfilter") {
                      if (h.gridlocalization.decimalseparator == ",") {
                        if (x.indexOf(h.gridlocalization.decimalseparator) >= 0) {
                          x = x.replace(h.gridlocalization.decimalseparator, ".");
                        }
                      }

                      if (x.indexOf(h.gridlocalization.currencysymbol) >= 0) {
                        x = x.replace(h.gridlocalization.currencysymbol, "");
                      }

                      if (x.indexOf(h.gridlocalization.percentagesymbol) >= 0) {
                        x = x.replace(h.gridlocalization.percentagesymbol, "");
                      }
                    }

                    var y = A.createfilter(C, x, "EQUAL", null, B.cellsFormat, h.gridlocalization);
                  } else {
                    var y = A.createfilter(C, x, "CONTAINS");
                  }
                }

                A.operator = i;
                A.addfilter(0, y);
                return A;
              };

              if (h.filterMode !== "simple") {
                if (u) {
                  var v = u.value;
                  var t = h.getColumn(v);
                  var s = w(t, r, "and");

                  if (r.length > 0) {
                    h.removeFilter(v);
                    h.addFilter(v, s);
                    h.applyFilters();
                  } else {
                    h.removeFilter(v);
                    h.applyFilters();
                  }

                  if (h.filterMode === "advanced") {
                    if (h._updateFilterRow) {
                      h._updateFilterRow(true);
                    }
                  }
                }
              } else {
                h.clearFilters(false, false);

                if (r.length > 0) {
                  for (var q = 0; q < h.columns.records.length; q++) {
                    var t = h.columns.records[q];
                    var s = w(t, r, "or");
                    h.addFilter(t.datafield, s);
                  }
                }

                h.applyFilters();
              }

              if (h.dataview.filters.length == 0) {
                h.filtericon.fadeOut(200);
              } else {
                h.filtericon.fadeIn(200);
              }
            }
          };

          o.keydown(function (i) {
            if (i.keyCode === 13) {
              m();

              if (i.preventDefault) {
                i.preventDefault();
              }

              return false;
            }
          });
          g.click(function () {
            m();
          });
          this.filterinput = o;
          this.filter.append(j);

          if (this.filterMode == "advanced") {
            var e = b("<a style='float: left; position: relative; margin: 2px; margin-left: 10px;' href='#'>" + this.gridlocalization.filterstring + "</a>");
            j.append(e);
            this.addHandler(e, "click", function (q) {
              var i = function i(u) {
                if (h.filterrow) {
                  for (var x = 0; x < h.filterrow[0].cells.length; x++) {
                    var t = h.filterrow[0].cells[x];
                    var v = b(t).find("input:first");
                    var z = h.columns.records[x];

                    if (!z.filterable) {
                      continue;
                    }

                    if (u === true) {
                      v.val("");
                    }

                    for (var w = 0; w < h.dataview.filters.length; w++) {
                      var y = h.dataview.filters[w];

                      if (y.datafield === z.displayfield) {
                        v.val(y.filter.getfilterat(0).filtervalue);
                        break;
                      }
                    }
                  }
                }
              };

              var s = function s(v) {
                if (h.filterrow) {
                  var u = 0;

                  for (var x = 0; x < h.filterrow[0].cells.length; x++) {
                    var t = h.filterrow[0].cells[x];
                    var w = b(t).find("input:first");
                    var y = h.columns.records[x];

                    if (y.hidden) {
                      t.style.visibility = "hidden";
                    } else {
                      t.style.visibility = "inherit";
                    }

                    if (!y.filterable) {
                      continue;
                    }

                    t.style.left = parseInt(u) + parseInt(y.uielement[0].style.left) + "px";
                    t.style.width = 6 + y.width + "px";

                    if (w[0]) {
                      w[0].style.width = y.width - 6 - 22 + "px";
                    }
                  }
                }
              };

              h._updateFilterRow = i;
              h._arrangeFilterRow = s;

              var r = function r() {
                h.filtercolumnsList.jqxDropDownList({
                  disabled: true
                });
                h.filterinput.addClass(h.toThemeProperty("jqx-fill-state-disabled"));
                h.filterinput.attr("disabled", true);
                h.filterbutton.addClass(h.toThemeProperty("jqx-fill-state-disabled"));
              };

              if (h.filter.find(".filterrow").length === 0) {
                h._renderadvancedfilter();

                r();
                i();

                h._arrange();

                s();
              } else {
                if (h.filter.find(".filterrow").css("display") === "none") {
                  r();
                  h.filter.find(".filterrow").removeClass("filterrow-hidden");
                  i();
                  h.filter.find(".filterrow").show();
                  s();
                } else {
                  h.filtercolumnsList.jqxDropDownList({
                    disabled: false
                  });
                  h.filterinput.removeClass(h.toThemeProperty("jqx-fill-state-disabled"));
                  h.filterinput.attr("disabled", false);
                  h.filterbutton.removeClass(h.toThemeProperty("jqx-fill-state-disabled"));
                  n(h.filtercolumnsList.jqxDropDownList("getSelectedItem").value);
                  h.filter.find(".filterrow").addClass("filterrow-hidden");
                  h.filter.find(".filterrow").hide();
                }

                h._arrange();
              }

              return false;
            });
          }

          var k = b("<div style='float: left; width: 16px; height: 16px; position: relative; margin: 3px;'></div>");
          k.attr("title", h.gridlocalization.filterclearstring);
          k.addClass(h.toThemeProperty("jqx-icon-close"));
          j.append(k);
          k.hide();
          h.filtericon = k;
          k.click(function () {
            h.clearFilters();
            h.filtericon.fadeOut(200);
          });

          if (h.dataview.filters.length > 0) {
            if (h.filterMode != "advanced") {
              n(h.dataview.filters[0].datafield);
            } else {
              if (h._updateFilterRow) {
                h._updateFilterRow();
              }
            }
          }
        },
        _renderadvancedfilter: function _renderadvancedfilter() {
          var h = this;

          var c = function c() {
            h.clearFilters(false, false);
            var n = h.filtercolumnsList.jqxDropDownList("getSelectedItem").value;
            var p = h.filterinput.val();

            for (var m = 0; m < h.filterrow[0].cells.length; m++) {
              var v = h.filterrow[0].cells[m];
              var u = b(v).find("input:first");
              var r = b(v).find(".filterconditions");
              var l = h.columns.records[m];
              var k = "";

              if (!l.filterable) {
                continue;
              }

              if (l.displayfield === n) {
                h.filterinput.val(u.val());
              }

              var q, t;
              var o = h.getcolumntypebydatafield(l);
              var j = new b.jqx.filter();

              switch (o) {
                case "number":
                case "int":
                case "float":
                case "decimal":
                  q = "numericfilter";
                  t = j.getoperatorsbyfiltertype("numericfilter");
                  break;

                case "boolean":
                case "bool":
                  q = "booleanfilter";
                  t = j.getoperatorsbyfiltertype("booleanfilter");
                  break;

                case "date":
                case "time":
                  q = "datefilter";
                  t = j.getoperatorsbyfiltertype("datefilter");
                  break;

                case "string":
                  q = "stringfilter";
                  t = j.getoperatorsbyfiltertype("stringfilter");
                  break;
              }

              if (r.length == 0) {
                if (q === "stringfilter") {
                  k = t[2];
                } else {
                  k = t[0];
                }
              } else {
                var y = r.jqxDropDownList("getSelectedItem");

                if (y) {
                  k = t[y.index];
                } else {
                  if (q === "stringfilter") {
                    k = t[2];
                  } else {
                    k = t[0];
                  }
                }
              }

              var w = u.val();

              if (w.length > 0 || w.length == 0 && k == "NOT_NULL" || w.length == 0 && k == "NOT_EMPTY" || w.length == 0 && k == "EMPTY" || w.length == 0 && k == "NULL") {
                var s = l.displayfield;
                var x = new b.jqx.filter();

                if (q == "numericfilter") {
                  if (h.gridlocalization.decimalseparator == ",") {
                    if (w.indexOf(h.gridlocalization.decimalseparator) >= 0) {
                      w = w.replace(h.gridlocalization.decimalseparator, ".");
                    }
                  }

                  if (w.indexOf(h.gridlocalization.currencysymbol) >= 0) {
                    w = w.replace(h.gridlocalization.currencysymbol, "");
                  }

                  if (w.indexOf(h.gridlocalization.percentagesymbol) >= 0) {
                    w = w.replace(h.gridlocalization.percentagesymbol, "");
                  }
                }

                var j = x.createfilter(q, w, k, null, l.cellsFormat, h.gridlocalization);
                x.addfilter(0, j);
                h.addFilter(s, x);
              }
            }

            if (h.dataview.filters.length > 0) {
              h.applyFilters();
            } else {
              h.clearFilters();
            }

            if (h.dataview.filters.length == 0) {
              h.filtericon.fadeOut(200);
            } else {
              h.filtericon.fadeIn(200);
            }
          };

          var e = function e() {
            var m = b("<div style='position: relative;' class='filterrow'></div>").appendTo(h.filter);
            h.filterrow = m;
            m[0].cells = new Array();
            m.height(24);
            m.width(h.table.width());
            var k = 0;
            var j = h.filtercolumnsList.jqxDropDownList("getSelectedItem").value;
            var l = h.filterinput.val();
            b.each(h.columns.records, function () {
              var p = this;
              var n = b("<div></div>").appendTo(m);
              n.css("position", "absolute");
              n.css("left", k + parseInt(p.uielement[0].style.left));

              if (p.pinned) {
                n.css("z-index", h.tableZIndex + h.columns.records.length);
                n.addClass(h.toThemeProperty("jqx-widget-header"));
              }

              m[0].cells.push(n[0]);

              if (!this.filterable) {
                return true;
              }

              var o = b("<input style='margin-left: 4px; height: 20px; float: left;' role='textbox' type='text'/>").appendTo(n);
              o.keydown(function (r) {
                if (r.keyCode === 13) {
                  c();
                }
              });

              if (p.displayfield === j) {
                o.val(l);
              }

              o.addClass(h.toThemeProperty("jqx-input"));
              o.addClass(h.toThemeProperty("jqx-rc-all"));
              o.addClass(h.toThemeProperty("jqx-widget"));
              o.addClass(h.toThemeProperty("jqx-widget-content"));
              var q = b("<div style='cursor: pointer; margin-left: 4px; margin-bottom: 4px; margin-top: 6px; width: 18px; position: relative; margin-top: 4px; float: left;'></div>").appendTo(n);
              q.append(b("<div style='width: 16px; height: 16px;' class='" + h.toThemeProperty("jqx-grid-column-filterbutton") + "'></div>"));
              o.focus(function () {
                h.ensureColumnVisible(p.displayfield);
                h.filter[0].scrollLeft = 0;
                h.ensureColumnVisible(p.displayfield);
                setTimeout(function () {
                  h.filter[0].scrollLeft = 0;
                  h.ensureColumnVisible(p.displayfield);
                }, 10);
              });
              q.click(function () {
                var u = b("<div class='filterconditions' style='position: relative; margin-top: 1px; float: left;'></div>");
                u.insertAfter(q);
                q.remove();
                var s = h.getcolumntypebydatafield(p);

                var t = h._getfiltersbytype(s);

                var r;

                if (s === "string") {
                  r = 2;
                } else {
                  r = 0;
                }

                u.jqxDropDownList({
                  theme: h.theme,
                  enableBrowserBoundsDetection: true,
                  renderMode: "simple",
                  arrowSize: 0,
                  selectedIndex: r,
                  rtl: h.rtl,
                  dropDownWidth: 230,
                  dropDownHeight: 180,
                  width: 20,
                  height: 20,
                  source: t,
                  selectionRenderer: function selectionRenderer() {
                    return "<div style='width: 16px; height: 16px;' class='" + h.toThemeProperty("jqx-grid-column-filterbutton") + "'></div>";
                  }
                });
                h.addHandler(u, "close", function (v) {
                  o.focus();
                  setTimeout(function () {
                    o.focus();
                  }, 10);
                });
                u.removeAttr("tabindex");
                u.find("div").removeAttr("tabindex");
                u.jqxDropDownList("open");
              });
              o[0].style.width = p.width - 6 - 22 + "px";
            });
            b("<div style='clear: both;'></div>").appendTo(m);
          };

          e();
          var i = b("<div style='position:relative;' class='filterrow'></div>").appendTo(h.filter);
          var f = b("<input type='button' style='position: relative; float: left; margin-top: 4px; margin-left: 4px;' value='" + h.gridlocalization.filterapplystring + "'/>").appendTo(i);
          var g = b("<input type='button' style='position: relative; float: left; margin-top: 4px;  margin-left: 4px;' value='" + h.gridlocalization.filtercancelstring + "'/>").appendTo(i);
          var d = 0;
          f.css("left", d);
          g.css("left", d);
          f.css("top", "4px");
          g.css("top", "4px");
          f.jqxButton({
            theme: h.theme
          });
          g.jqxButton({
            theme: h.theme
          });
          g.click(function () {
            h.filtercolumnsList.jqxDropDownList({
              disabled: false
            });
            h.filterinput.removeClass(h.toThemeProperty("jqx-fill-state-disabled"));
            h.filterinput.attr("disabled", false);
            h.filterbutton.removeClass(h.toThemeProperty("jqx-fill-state-disabled"));
            h.filter.find(".filterrow").addClass("filterrow-hidden");
            h.filter.find(".filterrow").hide();

            h._arrange();
          });
          f.click(function () {
            c();
          });

          h._renderhorizontalscroll();
        },
        _getfiltertype: function _getfiltertype(c) {
          var d = "stringfilter";

          switch (c) {
            case "number":
            case "int":
            case "float":
            case "decimal":
              d = "numericfilter";
              break;

            case "boolean":
            case "bool":
              d = "booleanfilter";
              break;

            case "date":
            case "time":
              d = "datefilter";
              break;

            case "string":
              d = "stringfilter";
              break;
          }

          return d;
        },
        getcolumntypebydatafield: function getcolumntypebydatafield(e) {
          var f = this;
          var d = "string";
          var c = f.source.datafields || (f.source._source ? f.source._source.datafields : null);

          if (c) {
            var g = "";
            b.each(c, function () {
              if (this.name == e.displayfield) {
                if (this.type) {
                  g = this.type;
                }

                return false;
              }
            });

            if (g) {
              return g;
            }
          }

          return d;
        },
        _getfiltersbytype: function _getfiltersbytype(c) {
          var d = this;
          var e = "";

          switch (c) {
            case "number":
            case "float":
            case "int":
              e = d.gridlocalization.filternumericcomparisonoperators;
              break;

            case "date":
              e = d.gridlocalization.filterdatecomparisonoperators;
              break;

            case "boolean":
            case "bool":
              e = d.gridlocalization.filterbooleancomparisonoperators;
              break;

            case "string":
            default:
              e = d.gridlocalization.filterstringcomparisonoperators;
              break;
          }

          return e;
        },
        _getcellvalue: function _getcellvalue(c, e) {
          var d = null;
          d = e[c.datafield];

          if (c.displayfield != null) {
            d = e[c.displayfield];
          }

          if (d == null) {
            d = "";
          }

          return d;
        },
        _renderrows: function _renderrows(ap) {
          if (this.editable) {
            if (this.editKey != null) {
              if (ap !== false) {
                var M = this.endroweditbykey(this.editKey);
              }
            }
          }

          if (this.treeGrid) {
            this.treeGrid._renderrows();

            return;
          }

          if (this._loading) {
            return;
          }

          if (this._updating) {
            return;
          }

          if (this.rendering) {
            this.rendering();
          }

          var ab = this;
          var T = 0;
          this.table[0].rows = new Array();
          var H = this.toTP("jqx-cell") + " " + this.toTP("jqx-widget-content");

          if (this.rtl) {
            H += " " + this.toTP("jqx-cell-rtl");
          }

          var K = this.columns.records.length;
          var ao = b.jqx.browser.msie && b.jqx.browser.version < 8;

          if (ao) {
            this.host.attr("hideFocus", "true");
          }

          var R = ab.groups.length;
          var ai = new Array();
          var k = this.source.records;
          k = this.dataview.evaluate(k);
          this.dataViewRecords = k;

          if (this.dataview.pagesize == "all" || !this.pageable || this.serverProcessing) {
            var u = k;

            if (this.pageable && this.serverProcessing && k.length > this.dataview.pagesize) {
              var u = k.slice(this.dataview.pagesize * this.dataview.pagenum, this.dataview.pagesize * this.dataview.pagenum + this.dataview.pagesize);
            }
          } else {
            var u = k.slice(this.dataview.pagesize * this.dataview.pagenum, this.dataview.pagesize * this.dataview.pagenum + this.dataview.pagesize);
          }

          if (ab.groups && ab.groups.length > 0) {
            var P = this.pageable ? this.dataview.pagesize * this.dataview.pagenum : 0;

            var z = function z(w) {
              var au = 0;
              var i = new Array();

              for (var c = 0; c < w.length; c++) {
                var j = w[c];

                if (j.level == 0) {
                  au++;
                }

                if (au > ab.dataview.pagesize * ab.dataview.pagenum && au <= ab.dataview.pagesize * ab.dataview.pagenum + ab.dataview.pagesize) {
                  i.push(j);
                }

                if (au > ab.dataview.pagesize * ab.dataview.pagenum + ab.dataview.pagesize) {
                  break;
                }
              }

              return i;
            };

            if (this.pageSizeMode === "root") {
              var v = ab.source.getGroupedRecords(ab.groups, "records", "label", null, "data", null, "parent", k, 0);
              ab.rootRecordsLength = v.length;
              v = z(v);
            } else {
              var v = ab.source.getGroupedRecords(ab.groups, "records", "label", null, "data", null, "parent", u, P);
            }

            var y = function y(j, w) {
              for (var av = 0; av < j.length; av++) {
                var c = j[av];
                w.push(c);

                if (c.records && c.records.length > 0) {
                  var aw = y(c.records, new Array());

                  for (var au = 0; au < aw.length; au++) {
                    if (aw[au].leaf) {
                      w.push(aw[au]);
                    } else {
                      w.push(aw[au]);
                    }
                  }
                }
              }

              return w;
            };

            var ai = y.call(ab, v, new Array());
            u = ai;
            this.rowsByKey = new Array();

            for (var am = 0; am < u.length; am++) {
              var G = u[am];
              this.rowsByKey[G.uid] = G;
            }
          }

          var ai = u;
          this.renderedRecords = ai;
          var U = ai.length;
          var V = this.tableZIndex;
          var aq = 0;
          var aa = 0;

          if (ao) {
            for (var al = 0; al < K; al++) {
              var Z = this.columns.records[al];
              var e = Z.width;

              if (e < Z.minwidth) {
                e = Z.minwidth;
              }

              if (e > Z.maxwidth) {
                e = Z.maxwidth;
              }

              var l = b('<table><tr><td role="gridcell" style="max-width: ' + e + "px; width:" + e + 'px;" class="' + H + '"></td></tr></table>');
              b(document.body).append(l);
              var n = l.find("td");
              aq = 1 + parseInt(n.css("padding-left")) + parseInt(n.css("padding-right"));
              l.remove();
              break;
            }
          }

          var ak = this.rtl ? " " + this.toTP("jqx-grid-table-rtl") : "";
          var B = "<table cellspacing='0' cellpadding='0' class='" + this.toTP("jqx-grid-table") + ak + "' id='table" + this.element.id + "'><colgroup>";
          var ar = "<table cellspacing='0' cellpadding='0' class='" + this.toTP("jqx-grid-table") + ak + "' id='pinnedtable" + this.element.id + "'><colgroup>";
          var I = 0;
          var s = K;

          for (var al = 0; al < K; al++) {
            var Z = this.columns.records[al];

            if (Z.hidden) {
              I++;
              s--;
              continue;
            }

            var e = Z.width;

            if (e < Z.minwidth) {
              e = Z.minwidth;
            }

            if (e > Z.maxwidth) {
              e = Z.maxwidth;
            }

            e -= aq;

            if (e < 0) {
              e = 0;
            }

            if (ao) {
              var ac = e;

              if (al == I) {
                ac++;
              }

              if (Z.rowDetailscolumn) {
                var ac = ac + 4;
                ar += "<col style='max-width: " + ac + "px; width: " + ac + "px;'>";
                B += "<col style='max-width: " + ac + "px; width: " + ac + "px;'>";
              } else {
                ar += "<col style='max-width: " + ac + "px; width: " + ac + "px;'>";
                B += "<col style='max-width: " + ac + "px; width: " + ac + "px;'>";
              }
            } else {
              ar += "<col style='max-width: " + e + "px; width: " + e + "px;'>";
              B += "<col style='max-width: " + e + "px; width: " + e + "px;'>";
            }

            aa += e;
          }

          B += "</colgroup>";
          ar += "</colgroup>";
          this._hiddencolumns = false;
          var g = false;

          if (this.rowDetails && this._pinnedTable) {
            this._pinnedTable.find("[data-role=details]").detach();

            this._table.find("[data-role=details]").detach();
          }

          if (U === 0) {
            var o = '<tr role="row">';
            var m = this.host.height();

            if (this.pageable) {
              m -= this.pagerHeight;

              if (this.pagerPosition === "both") {
                m -= this.pagerHeight;
              }
            }

            m -= this.columnsHeight;

            if (this.filterable) {
              var ag = this.filter.find(".filterrow");
              var D = this.filter.find(".filterrow-hidden");
              var C = 1;

              if (D.length > 0) {
                C = 0;
              }

              m -= this.filterHeight + this.filterHeight * ag.length * C;
            }

            if (this.showstatusbar) {
              m -= this.statusBarHeight;
            }

            if (this.showAggregates) {
              m -= this.aggregatesHeight;
            }

            if (m < 25) {
              m = 25;
            }

            if (this.hScrollBar[0].style.visibility != "hidden") {
              m -= this.hScrollBar.outerHeight();
            }

            if (this.height === "auto" || this.height === null || this.autoheight) {
              m = 300;
            }

            var l = '<td colspan="' + this.columns.records.length + '" role="gridcell" style="border: none; min-height: ' + m + "px; height: " + m + "px; max-width:" + aa + "px; width:" + aa + "px;";
            var H = this.toTP("jqx-cell") + " " + this.toTP("jqx-grid-cell") + " " + this.toTP("jqx-item");
            H += " " + this.toTP("jqx-center-align");
            l += '" class="' + H + '">';
            l += this.gridlocalization.emptydatastring;
            l += "</td>";
            o += l;
            B += o;
            ar += o;
            this.table[0].style.width = aa + 2 + "px";
            T = aa;
          }

          var q = this.getRows();
          var x = new Array();

          for (var am = 0; am < ai.length; am++) {
            var G = ai[am];
            var L = G.uid;

            if (undefined === G.uid) {
              G.uid = this.dataview.generatekey();
            }

            var o = '<tr data-key="' + L + '" role="row" id="row' + am + this.element.id + '">';
            var E = '<tr data-key="' + L + '" role="row" id="row' + am + this.element.id + '">';

            if (R > 0) {
              if (G.level < R) {
                var o = '<tr data-role="row-group" data-key="' + L + '" role="row" id="row' + am + this.element.id + '">';
                var E = '<tr data-role="row-group" data-key="' + L + '" role="row" id="row' + am + this.element.id + '">';
              }
            }

            var p = 0;
            var S = 0;

            for (var al = 0; al < K; al++) {
              var ae = this.columns.records[al];

              if (ae.pinned || this.rtl && this.columns.records[K - 1].pinned) {
                g = true;
              }

              var e = ae.width;

              if (e < ae.minwidth) {
                e = ae.minwidth;
              }

              if (e > ae.maxwidth) {
                e = ae.maxwidth;
              }

              e -= aq;

              if (e < 0) {
                e = 0;
              }

              var H = this.toTP("jqx-cell") + " " + this.toTP("jqx-grid-cell") + " " + this.toTP("jqx-item");

              if (ae.pinned) {
                H += " " + this.toTP("jqx-grid-cell-pinned");
              }

              if (this.sortcolumn === ae.displayfield) {
                H += " " + this.toTP("jqx-grid-cell-sort");
              }

              if (this.altRows && am % 2 != 0) {
                H += " " + this.toTP("jqx-grid-cell-alt");
              }

              if (this.rtl) {
                H += " " + this.toTP("jqx-cell-rtl");
              }

              var O = "";

              if (R > 0) {
                if (G.level < R) {
                  if (!ao) {
                    H += " " + this.toTP("jqx-grid-cell-pinned");
                    O += ' colspan="' + K + '"';
                    var ac = 0;

                    for (var ad = 0; ad < K; ad++) {
                      var at = ab.columns.records[ad];
                      var A = at.width;

                      if (A < at.minwidth) {
                        e = at.minwidth;
                      }

                      if (A > at.maxwidth) {
                        e = at.maxwidth;
                      }

                      A -= aq;

                      if (A < 0) {
                        A = 0;
                      }

                      if (!at.hidden) {
                        ac += A;
                      }
                    }

                    e = ac;
                  } else {
                    H += " " + this.toTP("jqx-grid-cell-pinned");
                  }
                }
              }

              var l = '<td role="gridcell" ' + O + ' style="max-width:' + e + "px; width:" + e + "px;";
              var af = '<td role="gridcell" ' + O + ' style="pointer-events: none; visibility: hidden; border-color: transparent; max-width:' + e + "px; width:" + e + "px;";

              if (al == K - 1 && K == 1) {
                l += "border-right-color: transparent;";
                af += "border-right-color: transparent;";
              }

              var Y = false;

              if (R > 0) {
                if (G.level < R) {
                  Y = true;
                }
              }

              if (!Y) {
                if (ae.cellsalign != "left") {
                  if (ae.cellsalign === "right") {
                    H += " " + this.toTP("jqx-right-align");
                  } else {
                    H += " " + this.toTP("jqx-center-align");
                  }
                }
              } else {
                if (this.rtl) {
                  H += " " + this.toTP("jqx-right-align");
                }
              }

              if (this.rowinfo[G.uid]) {
                if (this.rowinfo[G.uid].selected && !ae.rowDetailscolumn) {
                  if (this.editKey !== G.uid) {
                    if (this.selectionMode !== "none") {
                      H += " " + this.toTP("jqx-grid-cell-selected");
                      H += " " + this.toTP("jqx-fill-state-pressed");
                    }
                  }
                }

                if (this.rowinfo[G.uid].locked) {
                  H += " " + this.toTP("jqx-grid-cell-locked");
                }
              }

              if (!ae.hidden) {
                p += aq + e;

                if (S == 0) {
                  l += "border-left-width: 0px;";
                  af += "border-left-width: 0px;";
                }

                S++;
              } else {
                if (!Y) {
                  l += "display: none;";
                  af += "display: none;";
                  this._hiddencolumns = true;
                }
              }

              if (R > 0 && ao && Y && al >= R) {
                l += "font-size: 1px; border-color: transparent;  color: transparent;";
                af += "font-size: 1px; border-color: transparent; color: transparent;";
              }

              if (ae.pinned) {
                l += "pointer-events: auto;";
                af += "pointer-events: auto;";
              }

              if (!Y && ae.rowDetailscolumn) {
                if (this.rowinfo[G.uid]) {
                  if (!this.rowinfo[G.uid].nodetails) {
                    if (this.rowinfo[G.uid].expanded) {
                      if (!this.rtl) {
                        H += " " + this.toTP("jqx-grid-group-expand");
                      } else {
                        H += " " + this.toTP("jqx-grid-group-expand-rtl");
                      }

                      H += " " + this.toTP("jqx-icon-arrow-down");
                    } else {
                      if (!this.rtl) {
                        H += " " + this.toTP("jqx-grid-group-collapse");
                        H += " " + this.toTP("jqx-icon-arrow-right");
                      } else {
                        H += " " + this.toTP("jqx-grid-group-collapse-rtl");
                        H += " " + this.toTP("jqx-icon-arrow-left");
                      }
                    }
                  }
                } else {
                  if (!this.rtl) {
                    H += " " + this.toTP("jqx-grid-group-collapse");
                    H += " " + this.toTP("jqx-icon-arrow-right");
                  } else {
                    H += " " + this.toTP("jqx-grid-group-collapse-rtl");
                    H += " " + this.toTP("jqx-icon-arrow-left");
                  }
                }
              }

              if (!this.autoRowHeight || this.autoRowHeight && !ae.autoCellHeight) {
                H += " " + this.toTP("jqx-grid-cell-nowrap ");
              }

              var aj = ab._getcellvalue(ae, G);

              var f = ae.cellsFormat;

              if (R > 0) {
                if (G.level < R) {
                  aj = G.label;
                  f = ab.getColumn(ab.groups[G.level]).cellsFormat;
                }
              }

              if (f != "") {
                if (b.jqx.dataFormat) {
                  if (b.jqx.dataFormat.isDate(aj)) {
                    aj = b.jqx.dataFormat.formatdate(aj, f, ab.gridlocalization);
                  } else {
                    if (b.jqx.dataFormat.isNumber(aj) || !isNaN(parseFloat(aj)) && isFinite(aj)) {
                      aj = b.jqx.dataFormat.formatnumber(aj, f, ab.gridlocalization);
                    }
                  }
                }
              }

              if (!Y) {
                if (ae.cellclassname != "" && ae.cellclassname) {
                  if (typeof ae.cellclassname == "string") {
                    H += " " + ae.cellclassname;
                  } else {
                    var r = ae.cellclassname(am, ae.datafield, aj, G);

                    if (r) {
                      H += " " + r;
                    }
                  }
                }

                if (ae.cellsRenderer != "" && ae.cellsRenderer) {
                  var d = q.indexOf(G);

                  if (d === -1) {
                    if (G.originalRecord) {
                      var d = q.indexOf(G.originalRecord);
                    }
                  }

                  aj = ae.cellsRenderer(d, ae.datafield, aj, G);

                  if (aj && (aj.indexOf("<jqx-") >= 0 || aj.indexOf(" ng-") >= 0)) {
                    x.push({
                      rowKey: G.uid,
                      row: d,
                      column: ae.datafield,
                      value: aj,
                      columnIndex: al
                    });
                  }
                }
              } else {
                if (this.groupsRenderer) {
                  aj = this.groupsRenderer(aj, G, G.level);
                }
              }

              l += '" class="' + H + '">';
              l += aj;
              l += "</td>";
              af += '" class="' + H + '">';
              af += aj;
              af += "</td>";

              if (!ae.pinned) {
                o += l;

                if (g) {
                  E += af;
                }
              } else {
                E += l;
                o += l;
              }

              if (R > 0 && !ao) {
                if (G.level < R) {
                  break;
                }
              }
            }

            if (T == 0) {
              this.table[0].style.width = p + 2 + "px";
              T = p;
            }

            o += "</tr>";
            E += "</tr>";
            B += o;
            ar += E;

            if (!this.rowinfo[G.uid]) {
              this.rowinfo[G.uid] = {
                group: Y,
                row: G,
                details: null,
                detailsHeight: 200,
                initialized: false,
                expanded: false
              };
            } else {
              if (!("group" in this.rowinfo[G.uid])) {
                this.rowinfo[G.uid].group = Y;
              }

              if (!("row" in this.rowinfo[G.uid])) {
                this.rowinfo[G.uid].row = G;
              }

              if (!("details" in this.rowinfo[G.uid])) {
                this.rowinfo[G.uid].details = null;
              }

              if (!("detailsHeight" in this.rowinfo[G.uid])) {
                this.rowinfo[G.uid].detailsHeight = 200;
              }

              if (!("initialized" in this.rowinfo[G.uid])) {
                this.rowinfo[G.uid].initialized = false;
              }

              if (!("expanded" in this.rowinfo[G.uid])) {
                this.rowinfo[G.uid].expanded = false;
              }
            }

            if (this.serverProcessing) {
              this.rowinfo[G.uid].row = G;
            }

            if (this.rowDetails) {
              var F = this.rowinfo[G.uid].detailsHeight;

              if (this.rowinfo[G.uid]) {
                if (this.rowinfo[G.uid].expanded) {
                  var ah = '<tr data-role="row-details"><td valign="top" style="pointer-events: auto; overflow: hidden; min-height: ' + F + "px; max-height: " + F + "px; height: " + F + 'px; overflow: hidden; border-left: none; border-right: none;" colspan="' + this.columns.records.length + '" role="gridcell"';
                } else {
                  var ah = '<tr data-role="row-details" style="display: none;"><td valign="top" style="pointer-events: auto; overflow: hidden; min-height: ' + F + "px; max-height: " + F + "px; height: " + F + 'px; overflow: hidden; border-left: none; border-right: none;" colspan="' + this.columns.records.length + '" role="gridcell"';
                }
              } else {
                var ah = '<tr data-role="row-details" style="display: none;"><td valign="top" style="pointer-events: auto; overflow: hidden; min-height: ' + F + "px; max-height: " + F + "px; height: " + F + 'px; overflow: hidden; border-left: none; border-right: none;" colspan="' + this.columns.records.length + '" role="gridcell"';
              }

              var H = this.toTP("jqx-cell") + " " + this.toTP("jqx-grid-cell") + " " + this.toTP("jqx-item");
              H += " " + this.toTP("jqx-details");
              H += " " + this.toTP("jqx-reset");
              ah += '" class="' + H + '"><div style="pointer-events: auto; overflow: hidden; min-height: ' + F + "px; max-height: " + F + "px; height: " + F + 'px;"><div data-role="details"></div></div></td></tr>';
              B += ah;
              ar += ah;
            }
          }

          B += "</table>";
          ar += "</table>";

          if (g) {
            if (ab.WinJS) {
              MSApp.execUnsafeLocalFunction(function () {
                ab.table.html(ar + B);
              });
            } else {
              ab.table[0].innerHTML = ar + B;
            }

            var W = this.table.find("#table" + this.element.id);
            var X = this.table.find("#pinnedtable" + this.element.id);
            X.css("float", "left");
            X.css("pointer-events", "none");
            W.css("float", "left");
            X[0].style.position = "absolute";
            W[0].style.position = "relative";
            W[0].style.zIndex = V - 10;
            X[0].style.zIndex = V + 10;
            this._table = W;
            this._table[0].style.left = "0px";
            this._pinnedTable = X;
            this._pinnedTable[0].style.left = "0px";
            this._pinnedTable[0].style.width = T + "px";
            this._table[0].style.width = T + "px";

            if (this.rtl) {
              if (T > parseInt(this.element.style.width) && this._haspinned) {
                this._pinnedTable[0].style.left = 3 - T + parseInt(this.element.style.width) + "px";
              }
            }

            if (this.rowDetails) {
              for (var am = 0; am < U; am++) {
                var G = ai[am];
                var L = G.uid;

                if (this.rowinfo[L].details) {
                  var N = b(this._table.children()[1]).children("[data-key=" + L + "]");
                  var Q = b(this._pinnedTable.children()[1]).children("[data-key=" + L + "]");

                  if (N) {
                    var h = Q.next();
                    var J = b(b(h).children().children());
                    J.children().detach();
                    J.append(this.rowinfo[G.uid].details);
                  }
                }
              }
            }
          } else {
            if (ab.WinJS) {
              MSApp.execUnsafeLocalFunction(function () {
                ab.table.html(B);
              });
            } else {
              ab.table[0].innerHTML = B;
            }

            var ad = this.table.find("#table" + this.element.id);
            this._table = ad;

            if (b.jqx.browser.msie && b.jqx.browser.version < 10) {
              this._table[0].style.width = T + "px";
            }

            if (U === 0) {
              this._table[0].style.width = 2 + T + "px";
            }
          }

          if (U === 0) {
            this._table[0].style.tableLayout = "auto";

            if (this._pinnedTable) {
              this._pinnedTable[0].style.tableLayout = "auto";
            }
          }

          if (x && x.length > 0) {
            var an = this._table[0].rows;
            b.each(x, function () {
              var w = this.row;
              var au = this.rowKey;
              var j = this.column;
              var i = this.columnIndex;

              var t = ab._getuirow(au);

              if (t) {
                var c = t[0].cells[i];

                if (b.jqx.angularCompile) {
                  b.jqx.angularCompile(c, "<div>" + c.innerHTML + "</div>");
                }
              }
            });
          }

          if (this.rendered) {
            this.rendered();
          }
        },
        getcolumnindex: function getcolumnindex(c) {
          var d = this.getColumn(c);
          var e = this.columns.records.indexOf(d);
          return e;
        },
        setcolumnindex: function setcolumnindex(e, i, j) {
          var h = this.getColumn(e);

          if (h.pinned) {
            return;
          }

          if (h.hidden) {
            return;
          }

          if (h.checkboxcolumn) {
            return;
          }

          if (h.grouped) {
            return;
          }

          var l = this.columns.records.indexOf(h);
          this.columns.records.splice(l, 1);
          this.columns.records.splice(i, 0, h);
          var f = 0;
          var n = this.headerZIndex;
          this.columnsrow.children().detach();
          var k = this.toThemeProperty("jqx-grid-cell");
          k += " " + this.toThemeProperty("jqx-grid-cell-pinned");
          k += " " + this.toThemeProperty("jqx-item");
          var m = this;
          var c = null;

          if (m.filterrow != undefined) {
            var c = b(m.filterrow.children()[0]);
          }

          this.columnsrow[0].cells = [];
          var g = false;
          b.each(this.columns.records, function (p, s) {
            var q = this.uielement;
            m.columnsrow.append(q);

            if (!m.rtl) {
              q.css("z-index", n--);
            } else {
              q.css("z-index", n++);
            }

            var o = !m.rtl ? 250 + n - 1 : 250 + n + 1;

            if (this.pinned) {
              q.css("z-index", o);
            }

            var r = this.width;
            q.css("left", f);
            m.columnsrow[0].cells[m.columnsrow[0].cells.length] = q[0];

            if (this.hidden) {
              g = true;
            }

            if (!(this.hidden && this.hideable)) {
              f += r;
            }
          });

          if (this.groupable) {
            var d = this.groups.length;

            if (d > 0) {
              if (l - d >= 0) {
                l -= d;
                i -= d;
              }
            }
          }

          if (this.rowDetails) {
            if (l - 1 >= 0) {
              l--;
              i--;
            }
          }

          if (this.selectionMode == "checkbox") {
            if (l - 1 >= 0) {
              l--;
              i--;
            }
          }

          var h = this._columns[l];

          this._columns.splice(l, 1);

          this._columns.splice(i, 0, h);

          this.resize();

          this._rendercolumnGroups();

          this._raiseEvent("columnReordered", {
            dataField: h.datafield,
            oldIndex: l,
            newIndex: i
          });
        },
        _pinnedColumnsLength: function _pinnedColumnsLength() {
          var c = 0;
          b.each(this.columns.records, function () {
            if (this.pinned) {
              c++;
            }

            if (this.grouped) {
              c++;
            }
          });

          if (this.rowDetails) {
            c++;
          }

          if (this.selectionMode == "checkbox") {
            c++;
          }

          return c;
        },
        _handlecolumnsReorder: function _handlecolumnsReorder() {
          var g = this;
          var h = -1;
          var d = false;

          if (!g.columnsReorder) {
            return;
          }

          var f = "mousemove.reorder" + this.element.id;
          var e = "mousedown.reorder" + this.element.id;
          var i = "mouseup.reorder" + this.element.id;
          var c = false;

          if (this.isTouchDevice() && this.touchmode !== true) {
            c = true;
            f = b.jqx.mobile.getTouchEventName("touchmove") + ".reorder" + this.element.id;
            e = b.jqx.mobile.getTouchEventName("touchstart") + ".reorder" + this.element.id;
            i = b.jqx.mobile.getTouchEventName("touchend") + ".reorder" + this.element.id;
          }

          this.removeHandler(b(document), f);
          this.addHandler(b(document), f, function (x) {
            if (g.resizing) {
              return true;
            }

            if (g.reordercolumn != null) {
              var m = parseInt(x.pageX);
              var u = parseInt(x.pageY);

              if (c) {
                var t = g.getTouches(x);
                var p = t[0];

                if (p != undefined) {
                  m = parseInt(p.pageX);
                  u = parseInt(p.pageY);
                }
              }

              var j = g.host.coord();
              var w = parseInt(j.left);
              var k = parseInt(j.top);

              if (g.dragmousedownoffset == undefined || g.dragmousedownoffset == null) {
                g.dragmousedownoffset = {
                  left: 0,
                  top: 0
                };
              }

              var B = parseInt(m) - parseInt(g.dragmousedownoffset.left);
              var s = parseInt(u) - parseInt(g.dragmousedownoffset.top);
              g.reordercolumn.css({
                left: B + "px",
                top: s + "px"
              });
              d = false;

              if (m >= w && m <= w + g.host.width()) {
                if (u >= k && u <= k + g.host.height()) {
                  d = true;
                }
              }

              h = -1;

              if (d) {
                g.reordercolumnicon.removeClass(g.toThemeProperty("jqx-grid-dragcancel-icon"));
                g.reordercolumnicon.addClass(g.toThemeProperty("jqx-grid-drag-icon"));
                var n = g.columnsheader.coord();
                var q = n.top + g.columnsheader.height();

                if (g.columnsdropline != null) {
                  if (u >= n.top && u <= q) {
                    h = g._handlereordercolumnsdroplines(m);

                    if (g.columnGroups) {
                      if (h != -1) {
                        var l = 0;
                        l += g._pinnedColumnsLength();
                        var o = h.index;

                        if (o >= l) {
                          var y = g.columns.records[o];

                          if (y != undefined) {
                            var v = g.columns.records.indexOf(g.getColumn(y.datafield));

                            if (y.datafield == null) {
                              var v = g.columns.records.indexOf(g.getcolumnbytext(y.text));
                            }

                            var r = b.data(g.reordercolumn[0], "reorderrecord");
                            var A = g.columns.records.indexOf(g.getColumn(r));
                            var z = y;

                            if (A < v) {
                              if (h.position == "before") {
                                z = g.columns.records[v - 1];
                              }
                            }

                            if (z.columngroup != g.getColumn(r).columngroup) {
                              g.columnsdropline.hide();
                              return;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    g.columnsdropline.fadeOut("slow");
                  }
                }
              } else {
                if (g.columnsdropline != null) {
                  g.columnsdropline.fadeOut("slow");
                }

                g.reordercolumnicon.removeClass(g.toThemeProperty("jqx-grid-drag-icon"));
                g.reordercolumnicon.addClass(g.toThemeProperty("jqx-grid-dragcancel-icon"));
              }

              if (x.preventDefault) {
                x.preventDefault();
                x.stopPropagation();
              }

              if (c) {
                x.preventDefault();
                x.stopPropagation();
                return false;
              }
            }
          });
          this.columnsbounds = new Array();
          this.removeHandler(b(document), e);
          this.addHandler(b(document), e, function (k) {
            if (g.resizing) {
              return true;
            }

            g.columnsbounds = new Array();
            var m = g.host.coord().left;
            var l = g.host.coord().top;

            if (g.showtoolbar) {
              l += g.toolbarHeight;
            }

            if (g.filter) {
              l += g.filter.height();
            }

            var j = 0;
            b.each(g.columns.records, function (o) {
              var p = this;

              if (p.hidden) {
                g.columnsbounds[g.columnsbounds.length] = {
                  top: l,
                  column: p,
                  left: m,
                  width: 0,
                  height: 2
                };
                return true;
              }

              if (j == 0) {
                if (!g.rtl) {
                  m = parseInt(g.host.coord().left) - g.hScrollInstance.value;
                } else {
                  m = parseInt(g.host.coord().left) - g.hScrollInstance.max + g.hScrollInstance.value;
                }
              }

              j++;
              var n = 2 + g.columnsHeight;

              if (g.columnshierarchy) {
                l = b(p.uielement).coord().top;
                n = b(p.uielement).height();
              }

              g.columnsbounds[g.columnsbounds.length] = {
                top: l,
                column: p,
                left: m,
                width: p.width,
                height: n
              };
              m += p.width;
            });
          });
          this.removeHandler(b(document), i);
          this.addHandler(b(document), i, function (j) {
            if (g.resizing) {
              return true;
            }

            g.__drag = false;
            b(document.body).removeClass("jqx-disableselect");
            var l = parseInt(j.pageX);
            var t = parseInt(j.pageY);

            if (c) {
              var o = g.getTouches(j);
              var n = o[0];
              l = parseInt(n.pageX);
              t = parseInt(n.pageY);
            }

            var m = g.host.coord();
            var v = parseInt(m.left);
            var w = parseInt(m.top);

            if (g.showtoolbar) {
              w += g.toolbarHeight;
            }

            g.columndragstarted = false;
            g.dragmousedown = null;

            if (g.reordercolumn != null) {
              var k = b.data(g.reordercolumn[0], "reorderrecord");
              var x = g.columns.records.indexOf(g.getColumn(k));
              g.reordercolumn.remove();
              g.reordercolumn = null;
              var p = 0;
              p += g._pinnedColumnsLength();

              if (k != null) {
                if (d) {
                  if (h != -1) {
                    var q = h.index;

                    if (q >= p) {
                      var s = g.columns.records[q];

                      if (s != undefined) {
                        var u = g.columns.records.indexOf(g.getColumn(s.datafield));

                        if (s.datafield == null) {
                          var u = g.columns.records.indexOf(g.getcolumnbytext(s.text));
                        }

                        if (g.columnGroups) {
                          var r = s;

                          if (x < u) {
                            if (h.position == "before") {
                              r = g.columns.records[u - 1];
                            }
                          }

                          if (r.columngroup != g.getColumn(k).columngroup) {
                            if (g.columnsdropline != null) {
                              g.columnsdropline.remove();
                              g.columnsdropline = null;
                            }

                            return;
                          }
                        }

                        if (x < u) {
                          if (h.position == "before") {
                            g.setcolumnindex(k, u - 1);
                          } else {
                            g.setcolumnindex(k, u);
                          }
                        } else {
                          if (x > u) {
                            g.setcolumnindex(k, u);
                          }
                        }
                      }
                    }
                  }
                }

                if (g.columnsdropline != null) {
                  g.columnsdropline.remove();
                  g.columnsdropline = null;
                }
              }
            }
          });
        },
        getcolumnbytext: function getcolumnbytext(d) {
          var c = null;

          if (this.columns.records) {
            b.each(this.columns.records, function () {
              if (this.text == d) {
                c = this;
                return false;
              }
            });
          }

          return c;
        },
        _handlereordercolumnsdroplines: function _handlereordercolumnsdroplines(i) {
          var c = this;
          var h = -1;

          var e = c._pinnedColumnsLength();

          var g = parseInt(c.host.coord().left);
          var d = g + c.host.width();
          var f = c.vScrollBar.css("visibility") != "hidden" ? 19 : 0;

          if (!c.rtl) {
            f = 0;
          }

          b.each(c.columnsbounds, function (j) {
            if (j >= e) {
              if (this.width == 0) {
                return true;
              }

              if (i <= this.left + this.width / 2) {
                if (i > d) {
                  c.columnsdropline.fadeOut();
                  return false;
                }

                c.columnsdropline.css("left", f + parseInt(this.left) + "px");
                c.columnsdropline.css("top", parseInt(this.top) + "px");
                c.columnsdropline.height(this.height);
                c.columnsdropline.fadeIn("slow");
                h = {
                  index: j,
                  position: "before"
                };
                return false;
              } else {
                if (i >= this.left + this.width / 2) {
                  if (this.left + this.width > d) {
                    c.columnsdropline.fadeOut();
                    return false;
                  }

                  c.columnsdropline.css("left", f + 1 + this.left + this.width);
                  c.columnsdropline.css("top", this.top);
                  c.columnsdropline.height(this.height);
                  c.columnsdropline.fadeIn("slow");
                  h = {
                    index: j,
                    position: "after"
                  };
                }
              }
            }
          });
          return h;
        },
        _createreordercolumn: function _createreordercolumn(d, f, i) {
          var h = this;
          var g = f;

          if (h.reordercolumn) {
            h.reordercolumn.remove();
          }

          if (h.columnsdropline) {
            h.columnsdropline.remove();
          }

          h.reordercolumn = b("<div></div>");
          var k = d.clone();
          h.reordercolumn.css("z-index", 999999);
          k.css("border-width", "1px");
          k.css("opacity", "0.4");
          var j = b(k.find("." + h.toThemeProperty("jqx-grid-column-menubutton")));

          if (j.length > 0) {
            j.css("display", "none");
          }

          var c = b(k.find(".jqx-icon-close"));

          if (c.length > 0) {
            c.css("display", "none");
          }

          h.reordercolumnicon = b('<div style="z-index: 9999; position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -7px;"></div>');
          h.reordercolumnicon.addClass(h.toThemeProperty("jqx-grid-drag-icon"));
          h.reordercolumn.css("float", "left");
          h.reordercolumn.css("position", "absolute");
          var e = h.host.coord();
          k.width(d.width() + 16);
          h.reordercolumn.append(k);
          h.reordercolumn.height(d.height());
          h.reordercolumn.width(k.width());
          h.reordercolumn.append(h.reordercolumnicon);
          b(document.body).append(h.reordercolumn);
          k.css("margin-left", 0);
          k.css("left", 0);
          k.css("top", 0);
          h.reordercolumn.css("left", g.left + h.dragmousedown.left);
          h.reordercolumn.css("top", g.top + h.dragmousedown.top);

          if (i != undefined && i) {
            h.columnsdropline = b('<div style="z-index: 9999; display: none; position: absolute;"></div>');
            h.columnsdropline.width(2);
            h.columnsdropline.addClass(h.toThemeProperty("jqx-grid-group-drag-line"));
            b(document.body).append(h.columnsdropline);
          }
        },
        _handlecolumnsdragreorder: function _handlecolumnsdragreorder(d, g) {
          if (this.reordercolumn) {
            this.reordercolumn.remove();
          }

          if (this.columnsdropline) {
            this.columnsdropline.remove();
          }

          this.dragmousedown = null;
          this.dragmousedownoffset = null;
          this.columndragstarted = false;
          this.reordercolumn = null;
          var h = this;
          var f;
          var c = false;

          if (this.isTouchDevice() && this.touchmode !== true) {
            c = true;
          }

          var e = "mousedown.drag";
          var f = "mousemove.drag";

          if (c) {
            e = b.jqx.mobile.getTouchEventName("touchstart") + ".drag";
            f = b.jqx.mobile.getTouchEventName("touchmove") + ".drag";
          } else {
            this.addHandler(g, "dragstart", function (i) {
              return false;
            });
          }

          this.addHandler(g, e, function (k) {
            if (false == d.draggable) {
              return true;
            }

            if (h.resizing) {
              return true;
            }

            h.__drag = true;
            var j = k.pageX;
            var i = k.pageY;

            if (c) {
              var l = h.getTouches(k);
              var n = l[0];
              j = n.pageX;
              i = n.pageY;
            }

            h.dragmousedown = {
              left: j,
              top: i
            };
            var m = b(k.target).coord();
            h.dragmousedownoffset = {
              left: parseInt(j) - parseInt(m.left),
              top: parseInt(i - m.top)
            };

            if (k.preventDefault) {
              k.preventDefault();
            }

            return true;
          });
          this.addHandler(g, f, function (k) {
            if (!d.draggable) {
              return true;
            }

            if (undefined == d.datafield) {
              return true;
            }

            if (d.pinned) {
              return true;
            }

            if (h.resizing) {
              return true;
            }

            if (h.dragmousedown) {
              var j = k.pageX;
              var i = k.pageY;

              if (c) {
                var m = h.getTouches(k);
                var o = m[0];

                if (o != undefined) {
                  j = o.pageX;
                  i = o.pageY;
                }
              }

              f = {
                left: j,
                top: i
              };

              if (!h.columndragstarted && h.reordercolumn == null) {
                var l = Math.abs(f.left - h.dragmousedown.left);
                var n = Math.abs(f.top - h.dragmousedown.top);

                if (l > 3 || n > 3) {
                  h._createreordercolumn(g, f, true);

                  b(document.body).addClass("jqx-disableselect");
                  b.data(h.reordercolumn[0], "reorderrecord", d.datafield);
                }
              }
            }
          });
        },
        getTouches: function getTouches(c) {
          return b.jqx.mobile.getTouches(c);
        },
        _handlecolumnsResize: function _handlecolumnsResize() {
          var i = this;

          if (this.columnsResize) {
            var k = false;

            if (i.isTouchDevice()) {
              k = true;
            }

            var g = "mousemove.resize" + this.element.id;
            var d = "mousedown.resize" + this.element.id;
            var e = "mouseup.resize" + this.element.id;

            if (k) {
              var g = b.jqx.mobile.getTouchEventName("touchmove") + ".resize" + this.element.id;
              var d = b.jqx.mobile.getTouchEventName("touchstart") + ".resize" + this.element.id;
              var e = b.jqx.mobile.getTouchEventName("touchend") + ".resize" + this.element.id;
            }

            this.removeHandler(b(document), g);
            this.addHandler(b(document), g, function (n) {
              if (i.resizablecolumn != null && !i.disabled && i.resizing) {
                if (i.resizeline != null) {
                  var s = i.resizablecolumn.columnelement;
                  var p = i.host.coord();
                  var v = parseInt(i.resizestartline.coord().left);
                  var l = v - i._startcolumnwidth;
                  var w = i.resizablecolumn.column.minwidth;

                  if (w == "auto") {
                    w = 0;
                  } else {
                    w = parseInt(w);
                  }

                  var m = i.resizablecolumn.column.maxwidth;

                  if (m == "auto") {
                    m = 0;
                  } else {
                    m = parseInt(m);
                  }

                  var q = n.pageX;

                  if (k) {
                    var t = b.jqx.mobile.getTouches(n);
                    var r = t[0];
                    q = r.pageX;
                  }

                  l += w;
                  var u = m > 0 ? v + m : 0;
                  var o = m == 0 ? true : i._startcolumnwidth + q - v < m ? true : false;

                  if (i.rtl) {
                    var o = true;
                  }

                  if (o) {
                    if (!i.rtl) {
                      if (q >= p.left && q >= l) {
                        if (u != 0 && n.pageX < u) {
                          i.resizeline.css("left", q);
                        } else {
                          if (u == 0) {
                            i.resizeline.css("left", q);
                          }
                        }

                        if (k) {
                          return false;
                        }
                      }
                    } else {
                      if (q >= p.left && q <= p.left + i.host.width()) {
                        i.resizeline.css("left", q);

                        if (k) {
                          return false;
                        }
                      }
                    }
                  }
                }
              }

              if (!k && i.resizablecolumn != null) {
                return false;
              }
            });
            this.removeHandler(b(document), d);
            this.addHandler(b(document), d, function (m) {
              if (i.resizablecolumn != null && !i.disabled) {
                var l = i.resizablecolumn.columnelement;

                if (l.coord().top + l.height() + 5 < m.pageY) {
                  i.resizablecolumn = null;
                  return;
                }

                if (l.coord().top - 5 > m.pageY) {
                  i.resizablecolumn = null;
                  return;
                }

                i._startcolumnwidth = i.resizablecolumn.column.width;
                i.resizablecolumn.column._width = null;
                b(document.body).addClass("jqx-disableselect");
                b(document.body).addClass("jqx-position-reset");
                i._mouseDownResize = new Date();
                i.resizing = true;
                i._resizecolumn = i.resizablecolumn.column;
                i.resizeline = i.resizeline || b('<div style="position: absolute;"></div>');
                i.resizestartline = i.resizestartline || b('<div style="position: absolute;"></div>');
                i.resizebackground = i.resizebackground || b('<div style="position: absolute; left: 0; top: 0; background: #000;"></div>');
                i.resizebackground.css("opacity", 0.01);
                i.resizebackground.css("cursor", "col-resize");
                i.resizeline.css("cursor", "col-resize");
                i.resizestartline.css("cursor", "col-resize");
                i.resizeline.addClass(i.toThemeProperty("jqx-grid-column-resizeline"));
                i.resizestartline.addClass(i.toThemeProperty("jqx-grid-column-resizestartline"));
                b(document.body).append(i.resizeline);
                b(document.body).append(i.resizestartline);
                b(document.body).append(i.resizebackground);
                var n = i.resizablecolumn.columnelement.coord();
                i.resizebackground.css("left", i.host.coord().left);
                i.resizebackground.css("top", i.host.coord().top);
                i.resizebackground.width(i.host.width());
                i.resizebackground.height(i.host.height());
                i.resizebackground.css("z-index", 999999999);

                var o = function o(q) {
                  if (!i.rtl) {
                    q.css("left", parseInt(n.left) + i._startcolumnwidth);
                  } else {
                    q.css("left", parseInt(n.left));
                  }

                  var s = 0;
                  var t = i.showtoolbar ? i.toolbarHeight : 0;
                  s += t;
                  var v = i.showstatusbar ? i.statusBarHeight : 0;
                  s += v;
                  var r = i.showAggregates ? i.aggregatesHeight : 0;
                  s += r;

                  if (i.pageable && i.pagerPosition != "bottom") {
                    s += i.pagerHeight;
                  }

                  if (i.filterable) {
                    s += i.filter.height();
                  }

                  var p = 0;

                  if (i.pageable && i.pagerPosition != "top") {
                    p = i.pagerHeight;
                  }

                  var u = i.hScrollBar.css("visibility") != "hidden" ? i.scrollBarSize : 0;
                  q.css("top", parseInt(n.top));
                  q.css("z-index", 9999999999);

                  if (i.columnGroups) {
                    q.height(i.host.height() + i.resizablecolumn.columnelement.height() - p - s - u - i.columnGroupslevel * i.columnsHeight);
                  } else {
                    q.height(i.host.height() - p - s - u);
                  }

                  q.show("fast");
                };

                o(i.resizeline);
                o(i.resizestartline);
                i.dragmousedown = null;
              }
            });

            var f = function f() {
              b(document.body).removeClass("jqx-disableselect");
              b(document.body).removeClass("jqx-position-reset");

              if (!i.resizing) {
                return;
              }

              i._mouseUpResize = new Date();
              var t = i._mouseUpResize - i._mouseDownResize;

              if (t < 200) {
                i.resizing = false;

                if (i._resizecolumn != null && i.resizeline != null && i.resizeline.css("display") == "block") {
                  i._resizecolumn = null;
                  i.resizeline.hide();
                  i.resizestartline.hide();
                  i.resizebackground.remove();
                }

                return;
              }

              i.resizing = false;

              if (i.disabled) {
                return;
              }

              var n = i.host.width();

              if (i.vScrollBar[0].style.visibility != "hidden") {
                n -= 20;
              }

              if (n < 0) {
                n = 0;
              }

              if (i._resizecolumn != null && i.resizeline != null && i.resizeline.css("display") == "block") {
                var u = parseInt(i.resizeline.css("left"));
                var o = parseInt(i.resizestartline.css("left"));
                var s = i._startcolumnwidth + u - o;

                if (i.rtl) {
                  var s = i._startcolumnwidth - u + o;
                }

                var r = i._resizecolumn.width;
                i._resizecolumn.width = s;

                if (i._resizecolumn._percentagewidth != undefined) {
                  i._resizecolumn._percentagewidth = s / n * 100;
                }

                for (var q = 0; q < i._columns.length; q++) {
                  if (i._columns[q].datafield === i._resizecolumn.datafield) {
                    i._columns[q].width = i._resizecolumn.width;
                    break;
                  }
                }

                var l = i.hScrollBar[0].style.visibility;
                var p = i._resizecolumn.displayfield;

                i._updatecolumnwidths();

                i.refresh();
                i._resizecolumn = null;
                i.resizeline.hide();
                i.resizestartline.hide();
                i.resizebackground.remove();
                i.resizablecolumn = null;

                i._raiseEvent("columnResized", {
                  dataField: p,
                  oldWidth: r,
                  newWidth: s
                });
              } else {
                i.resizablecolumn = null;
              }
            };

            try {
              if (document.referrer != "" || window.frameElement) {
                var c = null;

                if (window.top != null && window.top != window.self) {
                  if (window.parent && document.referrer) {
                    c = document.referrer;
                  }
                }

                if (c && c.indexOf(document.location.host) != -1) {
                  var h = function h(l) {
                    f();
                  };

                  if (window.top.document.addEventListener) {
                    window.top.document.addEventListener("mouseup", h, false);
                  } else {
                    if (window.top.document.attachEvent) {
                      window.top.document.attachEvent("onmouseup", h);
                    }
                  }
                }
              }
            } catch (j) {}

            this.removeHandler(b(document), e);
            this.addHandler(b(document), e, function (m) {
              var l = b.data(document.body, "contextmenu" + i.element.id);

              if (l != null && i.autoshowcolumnsmenubutton) {
                return true;
              }

              f();
            });
          }
        },
        _updatecolumnwidths: function _updatecolumnwidths() {
          var k = this.host.width();
          var c = k;

          if (this.vScrollBar.css("visibility") !== "hidden" && this.scrollBarSize > 0) {
            k -= parseInt(this.scrollBarSize) + 6;
            c = k;
          }

          var j = "";

          if (this.columns == undefined || this.columns.records == undefined) {
            return;
          }

          var i = this;
          var h = false;
          b.each(this.columns.records, function (l, m) {
            if (!this.hidden) {
              if (this.width.toString().indexOf("%") != -1 || this._percentagewidth != undefined) {
                var m = 0;
                var n = i.vScrollBar[0].style.visibility == "hidden" ? 0 : i.scrollBarSize + 5;

                if (i.scrollBarSize == 0) {
                  n = 0;
                }

                m = parseFloat(this.width) * c / 100;

                if (this._percentagewidth != undefined) {
                  m = parseFloat(this._percentagewidth) * c / 100;
                }

                if (m < this.minwidth && this.minwidth != "auto") {
                  m = this.minwidth;
                }

                if (m > this.maxwidth && this.maxwidth != "auto") {
                  m = this.maxwidth;
                }

                k -= Math.round(m);
              } else {
                if (this.width != "auto" && !this._width) {
                  k -= this.width;
                } else {
                  j += this.text;
                }
              }
            }
          });
          var f = this.columnsheader.find("#columntable" + this.element.id);

          if (f.length == 0) {
            return;
          }

          var d = 0;
          var g = f.find(".jqx-grid-column-header");
          var e = 0;
          b.each(this.columns.records, function (n, q) {
            var m = b(g[n]);
            var t = false;
            var s = this.width;
            var o = this.width;

            if (this.width.toString().indexOf("%") != -1 || this._percentagewidth != undefined) {
              if (this._percentagewidth != undefined) {
                s = parseFloat(this._percentagewidth) * c / 100;
              } else {
                s = parseFloat(this.width) * c / 100;
              }

              s = Math.round(s);
              t = true;
            }

            if (this.width != "auto" && !this._width && !t) {
              if (parseInt(m[0].style.width) != this.width) {
                m.width(this.width);
              }
            } else {
              if (t) {
                if (s < this.minwidth && this.minwidth != "auto") {
                  s = this.minwidth;
                  this.width = s;
                }

                if (s > this.maxwidth && this.maxwidth != "auto") {
                  s = this.maxwidth;
                  this.width = s;
                }

                if (parseInt(m[0].style.width) != s) {
                  m.width(s);
                  this.width = s;
                }
              } else {
                var l = Math.floor(k * (this.text.length / j.length));

                if (isNaN(l)) {
                  l = this.minwidth;
                }

                var p = k * (this.text.length / j.length) - l;
                d += p;

                if (d >= 1) {
                  d -= 1;
                  l++;
                }

                if (d >= 0.5 && n == i.columns.records.length - 1) {
                  l++;
                }

                if (l < 0) {
                  var r = b("<span>" + this.text + "</span>");
                  b(document.body).append(r);
                  l = 10 + r.width();
                  r.remove();
                }

                if (l < this.minwidth) {
                  l = this.minwidth;
                }

                if (l > this.maxwidth) {
                  l = this.maxwidth;
                }

                this._width = "auto";
                this.width = l;
                m.width(this.width);
              }
            }

            if (parseInt(m[0].style.left) != e) {
              m.css("left", e);
            }

            if (!this.hidden) {
              e += this.width;
            }

            this._requirewidthupdate = true;

            if (o !== this.width) {
              h = true;
            }
          });
          this.columnsheader.width(2 + e);
          f.width(this.columnsheader.width());

          this._resizecolumnGroups();

          if (h) {
            this._renderrows();
          }

          if (this.showAggregates) {
            this._refreshcolumnsaggregates();
          }
        },
        _rendercolumnheaders: function _rendercolumnheaders() {
          var r = this;

          if (this._updating) {
            return;
          }

          if (r.columns.records.length > r.headerZIndex) {
            r.headerZIndex = r.columns.records.length + 10;
          }

          this._columnsbydatafield = new Array();
          this.columnsheader.find("#columntable" + this.element.id).remove();
          var g = b('<div id="columntable' + this.element.id + '" style="height: 100%; position: relative;"></div>');
          g[0].cells = new Array();
          var l = 0;
          var h = 0;
          var s = "";
          var u = this.host.width();
          var f = u;
          var w = new Array();
          var t = new Array();
          b.each(this.columns.records, function (j, k) {
            if (!this.hidden) {
              if (this.width != "auto" && !this._width) {
                if (this.width < this.minwidth && this.minwidth != "auto") {
                  u -= this.minwidth;
                } else {
                  if (this.width > this.maxwidth && this.maxwidth != "auto") {
                    u -= this.maxwidth;
                  } else {
                    if (this.width.toString().indexOf("%") != -1) {
                      var k = 0;
                      k = parseFloat(this.width) * f / 100;

                      if (k < this.minwidth && this.minwidth != "auto") {
                        k = this.minwidth;
                      }

                      if (k > this.maxwidth && this.maxwidth != "auto") {
                        k = this.maxwidth;
                      }

                      u -= k;
                    } else {
                      if (typeof this.width == "string") {
                        this.width = parseInt(this.width);
                      }

                      u -= this.width;
                    }
                  }
                }
              } else {
                s += this.text;
              }
            }

            if (this.pinned || this.grouped || this.checkboxcolumn) {
              if (r._haspinned) {
                this.pinned = true;
              }

              w[w.length] = this;
            } else {
              t[t.length] = this;
            }
          });

          if (!this.rtl) {
            for (var o = 0; o < w.length; o++) {
              this.columns.replace(o, w[o]);
            }

            for (var m = 0; m < t.length; m++) {
              this.columns.replace(w.length + m, t[m]);
            }
          } else {
            var e = 0;
            w.reverse();

            for (var o = this.columns.records.length - 1; o >= this.columns.records.length - w.length; o--) {
              this.columns.replace(o, w[e++]);
            }

            for (var m = 0; m < t.length; m++) {
              this.columns.replace(m, t[m]);
            }
          }

          var v = this.headerZIndex;
          var d = 0;
          var n = r.columnsHeight;

          var q = function q(j, k) {
            var i = r.columnGroupslevel * r.columnsHeight;
            i = i - k.level * r.columnsHeight;
            return i;
          };

          var c = 0;
          b.each(this.columns.records, function (K, I) {
            this.height = r.columnsHeight;

            if (r.columnGroups) {
              if (r.columnGroups.length) {
                this.height = q(this.datafield, this);
                n = this.height;
              }
            }

            var N = r.toTP("jqx-grid-column-header") + " " + r.toTP("jqx-widget-header");

            if (r.rtl) {
              N += " " + r.toTP("jqx-grid-column-header-rtl");
            }

            if (!r.enableBrowserSelection) {
              N += " " + r.toTP("jqx-disableselect");
            }

            var L = !r.rtl ? 250 + v - 1 : 250 + v + 1;
            var G = !r.rtl ? v-- : v++;
            var x = b('<div role="columnheader" style="z-index: ' + G + ';position: absolute; height: 100%;" class="' + N + '"><div style="height: 100%; width: 100%;"></div></div>');

            if (r.rtl && K === 0) {
              x[0].style.borderLeftColor = "transparent";
            }

            if (r.columnGroups) {
              x[0].style.height = n + "px";
              x[0].style.bottom = "0px";

              if (this.pinned) {
                x[0].style.zIndex = L;
              }
            }

            this.uielement = x;
            this.element = x;

            if (this.classname != "" && this.classname) {
              x.addClass(this.classname);
            }

            var C = this.width;
            var D = false;

            if (this.width === null) {
              this.width = "auto";
            }

            if (this.width.toString().indexOf("%") != -1 || this._percentagewidth != undefined) {
              if (this._percentagewidth != undefined) {
                C = parseFloat(this._percentagewidth) * f / 100;
              } else {
                C = parseFloat(this.width) * f / 100;
              }

              C = Math.round(C);
              D = true;
            }

            if (this.width != "auto" && !this._width && !D) {
              if (C < this.minwidth && this.minwidth != "auto") {
                C = this.minwidth;
              }

              if (C > this.maxwidth && this.maxwidth != "auto") {
                C = this.maxwidth;
              }

              x[0].style.width = parseInt(C) + "px";
            } else {
              if (D) {
                if (C < this.minwidth && this.minwidth != "auto") {
                  C = this.minwidth;
                }

                if (C > this.maxwidth && this.maxwidth != "auto") {
                  C = this.maxwidth;
                }

                if (this._percentagewidth == undefined || this.width.toString().indexOf("%") != -1) {
                  this._percentagewidth = this.width;
                }

                x.width(C);
                this.width = C;
              } else {
                var H = Math.floor(u * (this.text.length / s.length));
                var E = u * (this.text.length / s.length) - H;
                c += E;

                if (c >= 1) {
                  c -= 1;
                  H++;
                }

                if (c >= 0.5 && K == r.columns.records.length - 1) {
                  H++;
                }

                if (isNaN(H)) {
                  H = this.minwidth;
                }

                if (H < 0) {
                  var F = b("<span>" + this.text + "</span>");
                  b(document.body).append(F);
                  H = 10 + F.width();
                  F.remove();
                }

                if (H < this.minwidth) {
                  H = this.minwidth;
                }

                if (H > this.maxwidth) {
                  H = this.maxwidth;
                }

                this._width = "auto";
                this.width = parseInt(H);
                C = this.width;
                x.width(this.width);
              }
            }

            if (this.hidden) {
              x.css("display", "none");
            }

            var k = b(x.children()[0]);
            g[0].cells[K] = x[0];
            var p = false;
            var J = false;
            var z = this.renderer != null ? this.renderer(this.text, this.align, n) : r._rendercolumnheader(this.text, this.align, n, r);

            if (z == null) {
              z = r._rendercolumnheader(this.text, this.align, n, r);
            }

            if (this.renderer != null) {
              z = b(z);
            }

            p = true;

            if (r.WinJS) {
              MSApp.execUnsafeLocalFunction(function () {
                k.append(b(z));
              });
            } else {
              if (this.renderer) {
                k.append(b(z));
              } else {
                if (z) {
                  k[0].innerHTML = z;
                }
              }
            }

            if (z != null) {
              var B = b('<div class="iconscontainer" style="height: ' + n + 'px; margin-left: -32px; display: block; position: absolute; left: 100%; top: 0%; width: 32px;"><div class="filtericon ' + r.toTP("jqx-widget-header") + '" style="height: ' + n + 'px; float: right; display: none; width: 16px;"><div class="' + r.toTP("jqx-grid-column-filterbutton") + '" style="width: 100%; height:100%;"></div></div><div class="sortasc ' + r.toTP("jqx-widget-header") + '" style="height: ' + n + 'px; float: right; display: none; width: 16px;"><div class="' + r.toTP("jqx-grid-column-sortascbutton") + '" style="width: 100%; height:100%;"></div></div><div class="sortdesc ' + r.toTP("jqx-widget-header") + '" style="height: ' + n + 'px; float: right; display: none; width: 16px;"><div class="' + r.toTP("jqx-grid-column-sortdescbutton") + '" style="width: 100%; height:100%;"></div></div></div>');
              k.append(B);
              var O = B.children();
              this.sortasc = O[1];
              this.sortdesc = O[2];
              this.filtericon = O[0];
              this.iconscontainer = B;

              if (r.rtl) {
                B.css("margin-left", "0px");
                B.css("left", "0px");
                b(this.sortasc).css("float", "left");
                b(this.filtericon).css("float", "left");
                b(this.sortdesc).css("float", "left");
              }
            }

            g.append(x);

            if (r.columnsReorder && this.draggable && r._handlecolumnsdragreorder) {
              r._handlecolumnsdragreorder(this, x);
            }

            var M = this;
            r.addHandler(x, "click", function (i) {
              if (M.checkboxcolumn) {
                return true;
              }

              if (r._togglesort) {
                if (!r._loading) {
                  r._togglesort(M);
                }
              }

              i.preventDefault();
            });

            if (r.columnsResize && !J) {
              var y = false;
              var j = "mousemove";

              if (r.isTouchDevice()) {
                y = true;
                j = b.jqx.mobile.getTouchEventName("touchstart");
              }

              r.addHandler(x, j, function (P) {
                if (!M.resizable) {
                  r.resizablecolumn = null;
                  return true;
                }

                var i = parseInt(P.pageX);
                var R = 5;
                var U = parseInt(x.coord().left);

                if (r.hasTransform) {
                  U = b.jqx.utilities.getOffset(x).left;
                }

                if (r._handlecolumnsResize) {
                  if (y) {
                    var Q = b.jqx.mobile.getTouches(P);
                    var T = Q[0];
                    i = T.pageX;
                    R = 40;

                    if (i >= U + M.width - R) {
                      r.resizablecolumn = {
                        columnelement: x,
                        column: M
                      };
                      x.css("cursor", "col-resize");
                    } else {
                      x.css("cursor", "");
                      r.resizablecolumn = null;
                    }

                    return true;
                  }

                  var S = M.width;

                  if (r.rtl) {
                    S = 0;
                  }

                  if (i >= U + S - R) {
                    if (i <= U + S + R) {
                      r.resizablecolumn = {
                        columnelement: x,
                        column: M
                      };
                      x.css("cursor", "col-resize");
                      return false;
                    } else {
                      x.css("cursor", "");
                      r.resizablecolumn = null;
                    }
                  } else {
                    x.css("cursor", "");

                    if (i < U + S - R) {
                      if (!M._animating && !M._menuvisible) {
                        x.mouseenter();
                      }
                    }

                    r.resizablecolumn = null;
                  }
                }
              });
            }

            x.css("left", h);

            if (!this.hidden) {
              h += C;
            }

            if (M.rendered) {
              var A = M.rendered(b(k[0].firstChild), M.align, n);

              if (A && B != null) {
                B.hide();
              }
            }
          });

          if (h > 0) {
            this.columnsheader.width(2 + h);
          } else {
            this.columnsheader.width(h);
          }

          this.columnsrow = g;
          r.columnsheader.append(g);
          g.width(h);

          if (this._handlecolumnsdragdrop) {
            this._handlecolumnsdragdrop();
          }

          if (this._handlecolumnsReorder) {
            this._handlecolumnsReorder();
          }

          if (this._handlecolumnsResize) {
            this._handlecolumnsResize();
          }

          if (this.columnGroups) {
            this._rendercolumnGroups();
          }
        },
        _rendercolumnGroups: function _rendercolumnGroups() {
          if (!this.columnGroups) {
            return;
          }

          var o = 0;

          for (var l = 0; l < this.columns.records.length; l++) {
            if (this.columns.records[l].pinned) {
              o++;
            }
          }

          var t = this.headerZIndex - o + this.columns.records.length;
          var n = this;
          var g = n.toTP("jqx-grid-column-header") + " " + n.toTP("jqx-grid-columngroup-header") + " " + n.toTP("jqx-widget-header");

          if (n.rtl) {
            g += " " + n.toTP("jqx-grid-columngroup-header-rtl");
          }

          var e = this.columnsheader.find("#columntable" + this.element.id);
          e.find("jqx-grid-columngroup-header").remove();

          for (var h = 0; h < this.columnGroupslevel - 1; h++) {
            for (var l = 0; l < this.columnGroups.length; l++) {
              var q = this.columnGroups[l];
              var c = q.level;

              if (c !== h) {
                continue;
              }

              var p = c * this.columnsHeight;
              var d = 99999;

              if (q.groups) {
                var s = function s(w) {
                  var v = 0;

                  for (var u = 0; u < w.groups.length; u++) {
                    var i = w.groups[u];

                    if (!i.groups) {
                      if (!i.hidden) {
                        v += i.width;
                        d = Math.min(parseInt(i.element[0].style.left), d);
                      }
                    } else {
                      v += s(i);
                    }
                  }

                  return v;
                };

                q.width = s(q);
                q.left = d;
                var r = this.columnsHeight;
                var m = t--;
                var f = b('<div role="columnheader" style="z-index: ' + m + ';position: absolute;" class="' + g + '"></div>');
                var k = b(this._rendercolumnheader(q.text, q.align, this.columnsHeight, this));
                f.append(k);
                f[0].style.left = d + "px";

                if (d === 0) {
                  f[0].style.borderLeftColor = "transparent";
                }

                f[0].style.top = p + "px";
                f[0].style.height = r + "px";
                f[0].style.width = -1 + q.width + "px";
                e.append(f);
                q.element = f;
              }
            }
          }
        },
        _resizecolumnGroups: function _resizecolumnGroups() {
          if (!this.columnGroups) {
            return;
          }

          for (var d = 0; d < this.columnGroups.length; d++) {
            var j = this.columnGroups[d];
            var k = j.level;
            var h = k * this.columnsHeight;
            var g = 99999;

            if (j.groups) {
              var f = function f(n) {
                var m = 0;

                for (var l = 0; l < n.groups.length; l++) {
                  var i = n.groups[l];

                  if (!i.groups) {
                    if (!i.hidden) {
                      m += i.width;
                      g = Math.min(parseInt(i.element[0].style.left), g);
                    }
                  } else {
                    m += f(i);
                  }
                }

                return m;
              };

              j.width = f(j);
              j.left = g;
              var c = this.columnsHeight;
              var e = j.element;
              e[0].style.left = g + "px";
              e[0].style.top = h + "px";
              e[0].style.height = c + "px";
              e[0].style.width = -1 + j.width + "px";
            }
          }
        },
        _removecolumnhandlers: function _removecolumnhandlers(f) {
          var d = this;
          var c = b(f.element);

          if (c.length > 0) {
            d.removeHandler(c, "mouseenter");
            d.removeHandler(c, "mouseleave");
            var e = b(f.filtericon);
            d.removeHandler(e, "mousedown");
            d.removeHandler(e, "click");
            d.removeHandler(c, "click");
          }
        },
        _calculateaggregate: function _calculateaggregate(k, o, d, h) {
          if (!k.datafield) {
            return null;
          }

          var e = k.aggregates;

          if (!e) {
            e = o;
          }

          if (e) {
            var f = new Array();

            for (var n = 0; n < e.length; n++) {
              if (e[n] == "count") {
                continue;
              }

              f[f.length] = k.cellsFormat;
            }

            if (this.source && this.source.getAggregatedData) {
              if (h == undefined) {
                h = this.getRows();

                if (this.dataViewRecords) {
                  h = this.dataViewRecords;
                }
              }

              var s = h;
              var c = -1;

              if (this.treeGrid) {
                var q = new Array();

                var r = function r(u) {
                  for (var t = 0; t < u.length; t++) {
                    if (u[t] == undefined) {
                      continue;
                    }

                    if (c == -1) {
                      c = u[t].level;
                    }

                    if (!u[t].aggregate) {
                      q.push(u[t]);
                    }

                    if (!u[t].leaf && u[t].records && u[t].records.length > 0) {
                      r(u[t].records);
                    }
                  }
                };

                r(h);
                h = q;
              }

              if (this.treeGrid && this.filterable && this.dataview.filters.length > 0) {
                var p = new Array();

                for (var n = 0; n < h.length; n++) {
                  if (h[n] && h[n]._visible !== false) {
                    p.push(h[n]);
                  }
                }

                h = p;
                var l = new Array();

                for (var n = 0; n < s.length; n++) {
                  if (s[n] && s[n]._visible !== false) {
                    l.push(s[n]);
                  }
                }

                s = l;
              }

              if (d == undefined || d == true) {
                var m = this.source.getAggregatedData([{
                  name: k.datafield,
                  aggregates: e,
                  formatStrings: f
                }], this.gridlocalization, h, c);

                if (this.treeGrid) {
                  var g = this.source._source.hierarchy && this.source._source.hierarchy.groupingDataFields ? this.source._source.hierarchy.groupingDataFields.length : 0;

                  if (g == 0 || c >= g) {
                    if (m) {
                      if (m[k.datafield].sum != undefined || m[k.datafield].avg != undefined) {
                        var j = this.source.getAggregatedData([{
                          name: k.datafield,
                          aggregates: e,
                          formatStrings: f
                        }], this.gridlocalization, s, c);

                        if (m[k.datafield].sum != undefined) {
                          m[k.datafield].sum = j[k.datafield].sum;
                        }

                        if (m[k.datafield].avg != undefined) {
                          m[k.datafield].avg = j[k.datafield].avg;
                        }
                      }
                    }
                  }
                }

                return m;
              } else {
                var m = this.source.getAggregatedData([{
                  name: k.datafield,
                  aggregates: e
                }], this.gridlocalization, h, c);

                if (this.treeGrid && m) {
                  if (m[k.datafield].sum != undefined || m[k.datafield].avg != undefined) {
                    var g = this.source._source.hierarchy && this.source._source.hierarchy.groupingDataFields ? this.source._source.hierarchy.groupingDataFields.length : 0;

                    if (g == 0 || c >= g) {
                      var j = this.source.getAggregatedData([{
                        name: k.datafield,
                        aggregates: e
                      }], this.gridlocalization, s, c);

                      if (m[k.datafield].sum != undefined) {
                        m[k.datafield].sum = j[k.datafield].sum;
                      }

                      if (m[k.datafield].avg != undefined) {
                        m[k.datafield].avg = j[k.datafield].avg;
                      }
                    }
                  }
                }

                return m;
              }
            }
          }

          return null;
        },
        getcolumnaggregateddata: function getcolumnaggregateddata(d, h, i, e) {
          var f = this.getColumn(d);

          if (!f) {
            return "";
          }

          var k = i == undefined || i == false ? false : i;

          if (h == null) {
            return "";
          }

          var c = f.aggregates;
          f.aggregates = null;

          var j = this._calculateaggregate(f, h, k, e);

          var g = {};

          if (j) {
            g = j[d];
            f.aggregates = c;
          }

          return g;
        },
        _updatecolumnaggregates: function _updatecolumnaggregates(e, h, c) {
          var f = this;

          if (!h) {
            c.children().remove();
            c.html("");

            if (e.aggregatesRenderer) {
              var g = {};

              if (e.aggregates) {
                g = this.getcolumnaggregateddata(e.datafield, e.aggregates);
              }

              var d = e.aggregatesRenderer({}, e, c, null);
              c.html(d);
            }

            return;
          }

          c.children().remove();
          c.html("");

          if (e.aggregatesRenderer) {
            if (h) {
              var d = e.aggregatesRenderer(h[e.datafield], e, c, this.getcolumnaggregateddata(e.datafield, e.aggregates), "aggregates");
              c.html(d);
            }
          } else {
            b.each(h, function () {
              var j = this;

              for (g in j) {
                var k = b('<div style="position: relative; margin: 4px; overflow: hidden;"></div>');
                var i = g;
                i = f._getaggregatename(i);
                k.html(i + ":" + j[g]);

                if (f.rtl) {
                  k.addClass(f.toThemeProperty("jqx-rtl"));
                }

                c.append(k);
              }
            });
          }
        },
        _getaggregatetype: function _getaggregatetype(d) {
          switch (d) {
            case "min":
            case "max":
            case "count":
            case "avg":
            case "product":
            case "var":
            case "varp":
            case "stdev":
            case "stdevp":
            case "sum":
              return d;
          }

          var c = d;

          for (var e in d) {
            c = e;
            break;
          }

          return c;
        },
        _getaggregatename: function _getaggregatename(d) {
          var c = d;

          switch (d) {
            case "min":
              c = "Min";
              break;

            case "max":
              c = "Max";
              break;

            case "count":
              c = "Count";
              break;

            case "avg":
              c = "Avg";
              break;

            case "product":
              c = "Product";
              break;

            case "var":
              c = "Var";
              break;

            case "stdevp":
              c = "StDevP";
              break;

            case "stdev":
              c = "StDev";
              break;

            case "varp":
              c = "VarP";

            case "sum":
              c = "Sum";
              break;
          }

          if (d === c && typeof c != "string") {
            for (var e in d) {
              c = e;
              break;
            }
          }

          return c;
        },
        _updatecolumnsaggregates: function _updatecolumnsaggregates() {
          var g = this.getRows();

          if (this.dataViewRecords) {
            g = this.dataViewRecords;
          }

          var c = this.columns.records.length;

          if (undefined != this.aggregates[0].cells) {
            for (var f = 0; f < c; f++) {
              var h = b(this.aggregates[0].cells[f]);
              var e = this.columns.records[f];

              var d = this._calculateaggregate(e, null, true, g);

              this._updatecolumnaggregates(e, d, h);
            }
          }
        },
        _refreshcolumnsaggregates: function _refreshcolumnsaggregates() {
          var c = this.columns.records.length;

          if (undefined != this.aggregates[0].cells) {
            var f = 0;

            for (var e = 0; e < c; e++) {
              var g = b(this.aggregates[0].cells[e]);
              var d = this.columns.records[e];

              if (g) {
                g.width(d.width);
                g[0].style.left = f + "px";

                if (!(d.hidden && d.hideable)) {
                  f += d.width;
                } else {
                  g.css("display", "none");
                }
              }
            }
          }
        },
        _updateaggregates: function _updateaggregates() {
          var c = b('<div style="position: relative;" id="statusrow' + this.element.id + '"></div>');
          var f = 0;
          var m = this.columns.records.length;
          var l = this.toThemeProperty("jqx-grid-cell");

          if (this.rtl) {
            l += " " + this.toThemeProperty("jqx-grid-cell-rtl");
            f = 0;
            c.css("border-left-width", "0px");
            this.aggregates.css("border-left-color", "transparent");
          }

          l += " " + this.toThemeProperty("jqx-grid-cell-pinned");
          var n = m + 10;
          var o = new Array();
          this.aggregates[0].cells = o;

          for (var h = 0; h < m; h++) {
            var g = this.columns.records[h];

            var i = this._calculateaggregate(g);

            var d = g.width;

            if (d < g.minwidth) {
              d = g.minwidth;
            }

            if (d > g.maxwidth) {
              d = g.maxwidth;
            }

            var e = l;

            if (g.cellsalign) {
              e += " " + this.toThemeProperty("jqx-" + g.cellsalign + "-align");
            }

            var k = b('<div style="overflow: hidden; position: absolute; height: 100%;" class="' + e + '"></div>');
            c.append(k);
            k.css("left", f);

            if (!this.rtl) {
              k.css("z-index", n--);
            } else {
              k.css("z-index", n++);

              if (h == 0) {
                k.css("border-left-width", "0px");
              }
            }

            k.width(d);
            k[0].style.left = f + "px";

            if (!(g.hidden && g.hideable)) {
              f += d;
            } else {
              k.css("display", "none");
            }

            o[o.length] = k[0];

            this._updatecolumnaggregates(g, i, k);
          }

          if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
            c.css("z-index", n--);
          }

          c.width(parseInt(f) + 2);
          c.height(this.aggregatesHeight);
          this.aggregates.children().remove();
          this.aggregates.append(c);
          this.aggregates.removeClass(this.toThemeProperty("jqx-widget-header"));
          this.aggregates.addClass(l);
          this.aggregates.css("border-bottom-color", "transparent");
          this.aggregates.css("border-top-width", "1px");

          if (this.rtl && this.hScrollBar.css("visibility") != "hidden") {
            this._renderhorizontalscroll();
          }
        },
        destroy: function destroy() {
          var h = this;

          if (h.columns && h.columns.records) {
            for (var f = 0; f < h.columns.records.length; f++) {
              h._removecolumnhandlers(h.columns.records[f]);
            }
          }

          h.removeHandler(b(document), "mouseup.pagerbuttonstop");
          h.removeHandler(b(document), "mouseup.pagerbuttonsbottom");
          h.removeHandler(h.content, "scroll");
          h.removeHandler(h.content, "mousedown");
          h.removeHandler(b(document), "mousedown.gridedit" + h.element.id);
          var g = "mousemove.resize" + h.element.id;
          var c = "mousedown.resize" + h.element.id;
          var e = "mouseup.resize" + h.element.id;
          h.removeHandler(b(document), g);
          h.removeHandler(b(document), c);
          h.removeHandler(b(document), e);
          var g = "mousemove.reorder" + h.element.id;
          var c = "mousedown.reorder" + h.element.id;
          var e = "mouseup.reorder" + h.element.id;
          h.removeHandler(b(document), g);
          h.removeHandler(b(document), c);
          h.removeHandler(b(document), e);

          if (h.filterable) {
            if (h.filterrow) {
              for (var f = 0; f < h.filterrow[0].cells.length; f++) {
                var k = h.filterrow[0].cells[f];
                var j = b(k).find(".filterconditions");
                var d = h.columns.records[f];

                if (j.length > 0) {
                  j.jqxDropDownList("destroy");
                }
              }
            }

            if (h.filtercolumnsList) {
              h.filtercolumnsList.jqxDropDownList("destroy");
            }
          }

          if (h.pageable) {
            if (h.pagershowrowscombotop && h.pagershowrowscombotop.jqxDropDownList) {
              h.pagershowrowscombotop.jqxDropDownList("destroy");
            }

            if (h.pagershowrowscombobottom && h.pagershowrowscombobottom.jqxDropDownList) {
              h.pagershowrowscombobottom.jqxDropDownList("destroy");
            }

            var l = h.pagerbuttonsbottom.find("a");
            h.removeHandler(l, "click");
            h.removeHandler(l, "mouseenter");
            h.removeHandler(l, "mouseleave");
            l.remove();
            var l = h.pagerbuttonstop.find("a");
            h.removeHandler(l, "click");
            h.removeHandler(l, "mouseenter");
            h.removeHandler(l, "mouseleave");
            l.remove();

            if (h.pagernexttop) {
              h.pagernexttop.jqxButton("destroy");
              h.pagerprevioustop.jqxButton("destroy");
              h.pagernextbottom.jqxButton("destroy");
              h.pagerpreviousbottom.jqxButton("destroy");
              h.pagerfirsttop.jqxButton("destroy");
              h.pagerfirstbottom.jqxButton("destroy");
              h.pagerlasttop.jqxButton("destroy");
              h.pagerlastbottom.jqxButton("destroy");
            }
          }

          h._removeHandlers();

          h.vScrollBar.jqxScrollBar("destroy");
          h.hScrollBar.jqxScrollBar("destroy");
          delete h.vScrollBar;
          delete h.hScrollBar;
          delete h._mousewheelfunc;
          b.jqx.utilities.resize(h.host, null, true);
          h.host.remove();
        },
        propertiesChangedHandler: function propertiesChangedHandler(c, d, e) {
          if (e.width && e.height && Object.keys(e).length == 2) {
            c.refresh();
          }
        },
        propertyChangedHandler: function propertyChangedHandler(e, l, d, k) {
          if (this.isInitialized == undefined || this.isInitialized == false) {
            return;
          }

          if (e.batchUpdate && e.batchUpdate.width && e.batchUpdate.height && Object.keys(e.batchUpdate).length == 2) {
            return;
          }

          if (k !== d) {
            if (l == "filterable") {
              e._render();
            } else {
              if (l === "height") {
                e.host.height(e.height);
                e.host.width(e.width);

                e._updatesize(false, true);
              } else {
                if (l === "width") {
                  e.host.height(e.height);
                  e.host.width(e.width);

                  e._updatesize(true, false);
                } else {
                  if (l === "source") {
                    e.updateBoundData();
                  } else {
                    if (l === "columnGroups") {
                      e._render();
                    } else {
                      if (l === "columns") {
                        e._columns = null;

                        e._render();
                      } else {
                        if (l === "rtl") {
                          e.content.css("left", "");
                          e.columns = e._columns;
                          e.vScrollBar.jqxScrollBar({
                            rtl: k
                          });
                          e.hScrollBar.jqxScrollBar({
                            rtl: k
                          });

                          e._render();
                        } else {
                          if (l === "pagerMode") {
                            e.pagerMode = k;

                            e._initpager();
                          } else {
                            if (l == "pageSizeOptions") {
                              e._initpager();

                              var j = false;

                              for (var f = 0; f < k.length; f++) {
                                if (parseInt(k[f]) == e.pageSize) {
                                  j = true;
                                  break;
                                }
                              }

                              if (!j) {
                                b.jqx.set(e, [{
                                  pageSize: k[0]
                                }]);
                              }
                            } else {
                              if (l == "pageSize") {
                                var g = e.dataview.pagenum * e.dataview.pagesize;
                                e.dataview.pagesize = e.pageSize;
                                var h = Math.floor(g / e.dataview.pagesize);

                                if (h !== e.dataview.pagenum || parseInt(k) !== parseInt(d)) {
                                  e._raiseEvent("pageSizeChanged", {
                                    pagenum: k,
                                    oldpageSize: d,
                                    pageSize: e.dataview.pagesize
                                  });

                                  var m = e.goToPage(h);

                                  if (!m) {
                                    if (!e.serverProcessing) {
                                      e.refresh();
                                    } else {
                                      e.updateBoundData("pager");
                                    }
                                  }
                                }
                              } else {
                                if (l === "pagerPosition") {
                                  e.refresh();
                                } else {
                                  if (l === "selectionMode") {
                                    e.selectionMode = k.toLowerCase();
                                  } else {
                                    if (l == "touchmode") {
                                      e.touchDevice = null;

                                      e._removeHandlers();

                                      e.touchDevice = null;
                                      e.vScrollBar.jqxScrollBar({
                                        touchMode: k
                                      });
                                      e.hScrollBar.jqxScrollBar({
                                        touchMode: k
                                      });

                                      e._updateTouchScrolling();

                                      e._arrange();

                                      e._updatecolumnwidths();

                                      e._renderrows();

                                      e._addHandlers();
                                    } else {
                                      if (l == "enableHover") {
                                        return;
                                      } else {
                                        if (l == "disabled") {
                                          if (k) {
                                            e.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));
                                          } else {
                                            e.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"));
                                          }

                                          if (e.pageable) {
                                            if (e.pagernexttop) {
                                              e.pagernexttop.jqxButton({
                                                disabled: k
                                              });
                                              e.pagerprevioustop.jqxButton({
                                                disabled: k
                                              });
                                              e.pagernextbottom.jqxButton({
                                                disabled: k
                                              });
                                              e.pagerpreviousbottom.jqxButton({
                                                disabled: k
                                              });
                                              e.pagerfirsttop.jqxButton({
                                                disabled: k
                                              });
                                              e.pagerfirstbottom.jqxButton({
                                                disabled: k
                                              });
                                              e.pagerlasttop.jqxButton({
                                                disabled: k
                                              });
                                              e.pagerlastbottom.jqxButton({
                                                disabled: k
                                              });

                                              if (e.pagershowrowscombotop.jqxDropDownList) {
                                                if (e.pagerMode == "advanced") {
                                                  e.pagershowrowscombotop.jqxDropDownList({
                                                    disabled: false
                                                  });
                                                  e.pagershowrowscombobottom.jqxDropDownList({
                                                    disabled: false
                                                  });
                                                }
                                              }
                                            }

                                            e.host.find(".jqx-grid-pager-number").css("cursor", k ? "default" : "pointer");
                                          }

                                          e.host.find(".jqx-grid-group-collapse").css("cursor", k ? "default" : "pointer");
                                          e.host.find(".jqx-grid-group-expand").css("cursor", k ? "default" : "pointer");
                                        } else {
                                          if (l == "columnsHeight") {
                                            e._render();
                                          } else {
                                            if (l == "theme") {
                                              b.jqx.utilities.setTheme(d, k, e.host);
                                              e.vScrollBar.jqxScrollBar({
                                                theme: e.theme
                                              });
                                              e.hScrollBar.jqxScrollBar({
                                                theme: e.theme
                                              });

                                              if (e.pageable && e.pagernexttop) {
                                                e.pagernexttop.jqxButton({
                                                  theme: e.theme
                                                });
                                                e.pagerprevioustop.jqxButton({
                                                  theme: e.theme
                                                });
                                                e.pagernextbottom.jqxButton({
                                                  theme: e.theme
                                                });
                                                e.pagerpreviousbottom.jqxButton({
                                                  theme: e.theme
                                                });
                                                e.pagerfirsttop.jqxButton({
                                                  theme: e.theme
                                                });
                                                e.pagerfirstbottom.jqxButton({
                                                  theme: e.theme
                                                });
                                                e.pagerlasttop.jqxButton({
                                                  theme: e.theme
                                                });
                                                e.pagerlastbottom.jqxButton({
                                                  theme: e.theme
                                                });

                                                if (e.pagershowrowscombotop.jqxDropDownList) {
                                                  if (e.pagerMode == "advanced") {
                                                    e.pagershowrowscombotop.jqxDropDownList({
                                                      theme: e.theme
                                                    });
                                                    e.pagershowrowscombobottom.jqxDropDownList({
                                                      theme: e.theme
                                                    });
                                                  }
                                                }
                                              }

                                              if (e.filterable) {
                                                var c = b(".filterconditions");

                                                if (c.length > 0) {
                                                  c.jqxDropDownList({
                                                    theme: e.theme
                                                  });
                                                }

                                                if (e.filtercolumnsList) {
                                                  e.filtercolumnsList.jqxDropDownList({
                                                    theme: e.theme
                                                  });
                                                }
                                              }

                                              e.refresh();
                                            } else {
                                              e.refresh();
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        _rendercolumnheader: function _rendercolumnheader(f, g, c, d) {
          var e = "4px";

          if (d.columnGroups) {
            e = c / 2 - this._columnheight / 2;

            if (e < 0) {
              e = 4;
            }

            e += "px";
          } else {
            if (this.columnsHeight != 25) {
              e = this.columnsHeight / 2 - this._columnheight / 2;

              if (e < 0) {
                e = 4;
              }

              e += "px";
            }
          }

          return '<div style="overflow: hidden; text-overflow: ellipsis; text-align: ' + g + "; margin-left: 4px; margin-right: 4px; margin-bottom: " + e + "; margin-top: " + e + ';"><span style="text-overflow: ellipsis; cursor: default;">' + f + "</span></div>";
        }
      });

      function a(c, d) {
        this.owner = c;
        this.datafield = null;
        this.displayfield = null;
        this.text = "";
        this.sortable = true;
        this.editable = true;
        this.hidden = false;
        this.hideable = true;
        this.groupable = true;
        this.renderer = null;
        this.cellsRenderer = null;
        this.columntype = null;
        this.cellsFormat = "";
        this.align = "left";
        this.cellsalign = "left";
        this.width = "auto";
        this.minwidth = 25;
        this.maxwidth = "auto";
        this.pinned = false;
        this.visibleindex = -1;
        this.filterable = true;
        this.filter = null;
        this.resizable = true;
        this.draggable = true;
        this.initeditor = null;
        this.createeditor = null;
        this.destroyeditor = null;
        this.geteditorvalue = null;
        this.autoCellHeight = true;
        this.validation = null;
        this.classname = "";
        this.cellclassname = "";
        this.aggregates = null;
        this.aggregatesRenderer = null;
        this.rendered = null;
        this.exportable = true;
        this.nullable = true;
        this.columngroup = null;
        this.columntype = "textbox";
        this.getcolumnproperties = function () {
          return {
            nullable: this.nullable,
            sortable: this.sortable,
            hidden: this.hidden,
            groupable: this.groupable,
            width: this.width,
            align: this.align,
            editable: this.editable,
            minwidth: this.minwidth,
            maxwidth: this.maxwidth,
            resizable: this.resizable,
            datafield: this.datafield,
            text: this.text,
            exportable: this.exportable,
            cellsalign: this.cellsalign,
            pinned: this.pinned,
            cellsFormat: this.cellsFormat,
            columntype: this.columntype,
            classname: this.classname,
            cellclassname: this.cellclassname,
            menu: this.menu
          };
        }, this.setproperty = function (e, f) {
          if (this[e]) {
            var g = this[e];
            this[e] = f;

            this.owner._columnPropertyChanged(this, e, f, g);
          } else {
            if (this[e.toLowerCase()]) {
              var g = this[e.toLowerCase()];
              this[e.toLowerCase()] = f;

              this.owner._columnPropertyChanged(this, e.toLowerCase(), f, g);
            }
          }
        };

        this._initfields = function (f) {
          if (f != null) {
            var e = this;

            if (b.jqx.hasProperty(f, "dataField")) {
              this.datafield = b.jqx.get(f, "dataField");
            }

            if (b.jqx.hasProperty(f, "displayField")) {
              this.displayfield = b.jqx.get(f, "displayField");
            } else {
              this.displayfield = this.datafield;
            }

            if (b.jqx.hasProperty(f, "columnType")) {
              this.columntype = b.jqx.get(f, "columnType");
            }

            if (b.jqx.hasProperty(f, "validation")) {
              this.validation = b.jqx.get(f, "validation");
            }

            if (b.jqx.hasProperty(f, "autoCellHeight")) {
              this.autoCellHeight = b.jqx.get(f, "autoCellHeight");
            }

            if (b.jqx.hasProperty(f, "text")) {
              this.text = b.jqx.get(f, "text");
            } else {
              this.text = this.displayfield;
            }

            if (b.jqx.hasProperty(f, "sortable")) {
              this.sortable = b.jqx.get(f, "sortable");
            }

            if (b.jqx.hasProperty(f, "hidden")) {
              this.hidden = b.jqx.get(f, "hidden");
            }

            if (b.jqx.hasProperty(f, "groupable")) {
              this.groupable = b.jqx.get(f, "groupable");
            }

            if (b.jqx.hasProperty(f, "renderer")) {
              this.renderer = b.jqx.get(f, "renderer");
            }

            if (b.jqx.hasProperty(f, "align")) {
              this.align = b.jqx.get(f, "align");
            }

            if (b.jqx.hasProperty(f, "cellsAlign")) {
              this.cellsalign = b.jqx.get(f, "cellsAlign");
            }

            if (b.jqx.hasProperty(f, "cellsFormat")) {
              this.cellsFormat = b.jqx.get(f, "cellsFormat");
            }

            if (b.jqx.hasProperty(f, "width")) {
              this.width = b.jqx.get(f, "width");
            }

            if (b.jqx.hasProperty(f, "minWidth")) {
              this.minwidth = b.jqx.get(f, "minWidth");
            }

            if (b.jqx.hasProperty(f, "maxWidth")) {
              this.maxwidth = b.jqx.get(f, "maxWidth");
            }

            if (b.jqx.hasProperty(f, "cellsRenderer")) {
              this.cellsRenderer = b.jqx.get(f, "cellsRenderer");
            }

            if (b.jqx.hasProperty(f, "columnType")) {
              this.columntype = b.jqx.get(f, "columnType");
            }

            if (b.jqx.hasProperty(f, "pinned")) {
              this.pinned = b.jqx.get(f, "pinned");
            }

            if (b.jqx.hasProperty(f, "filterable")) {
              this.filterable = b.jqx.get(f, "filterable");
            }

            if (b.jqx.hasProperty(f, "filter")) {
              this.filter = b.jqx.get(f, "filter");
            }

            if (b.jqx.hasProperty(f, "resizable")) {
              this.resizable = b.jqx.get(f, "resizable");
            }

            if (b.jqx.hasProperty(f, "draggable")) {
              this.draggable = b.jqx.get(f, "draggable");
            }

            if (b.jqx.hasProperty(f, "editable")) {
              this.editable = b.jqx.get(f, "editable");
            }

            if (b.jqx.hasProperty(f, "initEditor")) {
              this.initeditor = b.jqx.get(f, "initEditor");
            }

            if (b.jqx.hasProperty(f, "createEditor")) {
              this.createeditor = b.jqx.get(f, "createEditor");
            }

            if (b.jqx.hasProperty(f, "destroyEditor")) {
              this.destroyeditor = b.jqx.get(f, "destroyEditor");
            }

            if (b.jqx.hasProperty(f, "getEditorValue")) {
              this.geteditorvalue = b.jqx.get(f, "getEditorValue");
            }

            if (b.jqx.hasProperty(f, "className")) {
              this.classname = b.jqx.get(f, "className");
            }

            if (b.jqx.hasProperty(f, "cellClassName")) {
              this.cellclassname = b.jqx.get(f, "cellClassName");
            }

            if (b.jqx.hasProperty(f, "aggregates")) {
              this.aggregates = b.jqx.get(f, "aggregates");
            }

            if (b.jqx.hasProperty(f, "aggregatesRenderer")) {
              this.aggregatesRenderer = b.jqx.get(f, "aggregatesRenderer");
            }

            if (b.jqx.hasProperty(f, "rendered")) {
              this.rendered = b.jqx.get(f, "rendered");
            }

            if (b.jqx.hasProperty(f, "exportable")) {
              this.exportable = b.jqx.get(f, "exportable");
            }

            if (b.jqx.hasProperty(f, "nullable")) {
              this.nullable = b.jqx.get(f, "nullable");
            }

            if (b.jqx.hasProperty(f, "columnGroup")) {
              this.columngroup = b.jqx.get(f, "columnGroup");
            }

            if (!f instanceof String && !(typeof f == "string")) {
              for (var g in f) {
                if (!e.hasOwnProperty(g)) {
                  if (!e.hasOwnProperty(g.toLowerCase())) {
                    c.host.remove();
                    throw new Error("jqxDataTable: Invalid property name - " + g + ".");
                  }
                }
              }
            }
          }
        };

        this._initfields(d);

        return this;
      }

      b.jqx.dataCollection = function (c) {
        this.records = new Array();
        this.owner = c;
        this.updating = false;

        this.beginUpdate = function () {
          this.updating = true;
        };

        this.resumeupdate = function () {
          this.updating = false;
        };

        this.clear = function () {
          this.records = new Array();
        };

        this.replace = function (e, d) {
          this.records[e] = d;
        };

        this.isempty = function (d) {
          if (this.records[d] == undefined) {
            return true;
          }

          return false;
        };

        this.initialize = function (d) {
          if (d < 1) {
            d = 1;
          }

          this.records[d - 1] = -1;
        };

        this.length = function () {
          return this.records.length;
        };

        this.indexOf = function (d) {
          return this.records.indexOf(d);
        };

        this.add = function (d) {
          if (d == null) {
            return false;
          }

          this.records[this.records.length] = d;
          return true;
        };

        this.insertAt = function (e, d) {
          if (e == null || e == undefined) {
            return false;
          }

          if (d == null) {
            return false;
          }

          if (e >= 0) {
            if (e < this.records.length) {
              this.records.splice(e, 0, d);
              return true;
            } else {
              return this.add(d);
            }
          }

          return false;
        };

        this.remove = function (e) {
          if (e == null || e == undefined) {
            return false;
          }

          var d = this.records.indexOf(e);

          if (d != -1) {
            this.records.splice(d, 1);
            return true;
          }

          return false;
        };

        this.removeAt = function (e) {
          if (e == null || e == undefined) {
            return false;
          }

          if (e < 0) {
            return false;
          }

          if (e < this.records.length) {
            var d = this.records[e];
            this.records.splice(e, 1);
            return true;
          }

          return false;
        };

        return this;
      };

      b.jqx.dataView = function () {
        this.that = this;
        this.grid = null;
        this.records = [];
        this.rows = [];
        this.columns = [];
        this.filters = new Array();
        this.pagesize = 0;
        this.pagenum = 0;
        this.source = null;

        this.databind = function (y, p) {
          var w = y._source ? true : false;
          var g = null;
          this._sortData = null;
          this._sortHierarchyData = null;

          if (w) {
            g = y;
            y = y._source;
          } else {
            g = new b.jqx.dataAdapter(y, {
              autoBind: false
            });
          }

          var e = function e(m) {
            g.recordids = [];
            g.records = new Array();
            g.cachedrecords = new Array();
            g.originaldata = new Array();
            g._options.totalrecords = m.totalrecords;
            g._options.originaldata = m.originaldata;
            g._options.recordids = m.recordids;
            g._options.cachedrecords = new Array();
            g._options.pagenum = m.pagenum;
            g._options.pageable = m.pageable;

            if (y.type != undefined) {
              g._options.type = y.type;
            }

            if (y.formatdata != undefined) {
              g._options.formatData = y.formatdata;
            }

            if (y.contenttype != undefined) {
              g._options.contentType = y.contenttype;
            }

            if (y.async != undefined) {
              g._options.async = y.async;
            }

            if (y.updaterow != undefined) {
              g._options.updaterow = y.updaterow;
            }

            if (y.addrow != undefined) {
              g._options.addrow = y.addrow;
            }

            if (y.deleterow != undefined) {
              g._options.deleterow = y.deleterow;
            }

            if (m.pagesize == 0) {
              m.pagesize = 10;
            }

            g._options.pagesize = m.pagesize;
          };

          var B = function B(m) {
            m.originaldata = g.originaldata;
            m.records = g.records;
            m.hierarchy = g.hierarchy;

            if (!m.grid.serverProcessing) {
              m._sortData = null;
              m._sortfield = null;
              m._filteredData = null;
              m._sortHierarchyData = null;
            }

            if (!m.hierarchy) {
              m.hierarchy = new Array();
              g.hierarchy = new Array();
            }

            if (g._source.totalrecords) {
              m.totalrecords = g._source.totalrecords;
            } else {
              if (g._source.totalRecords) {
                m.totalrecords = g._source.totalRecords;
              } else {
                if (m.hierarchy.length !== 0) {
                  m.totalrecords = m.hierarchy.length;
                } else {
                  m.totalrecords = m.records.length;
                }
              }
            }

            m.cachedrecords = g.cachedrecords;
          };

          e(this);
          this.source = y;

          if (p !== undefined) {
            var k = p;
          }

          var h = this;

          switch (y.datatype) {
            case "local":
            case "array":
            default:
              if (y.localdata == null) {
                y.localdata = [];
              }

              if (y.localdata != null) {
                g.unbindBindingUpdate(h.grid.element.id);

                if (!h.grid.autoBind && h.grid.isInitialized || h.grid.autoBind) {
                  g.dataBind();
                }

                var n = function n() {
                  B(h);
                  h.update();
                };

                n();
                g.bindBindingUpdate(h.grid.element.id, n);
              }

              break;

            case "json":
            case "jsonp":
            case "xml":
            case "xhtml":
            case "script":
            case "text":
            case "csv":
            case "tab":
              if (y.localdata != null) {
                g.unbindBindingUpdate(h.grid.element.id);

                if (!h.grid.autoBind && h.grid.isInitialized || h.grid.autoBind) {
                  g.dataBind();
                }

                var n = function n(m) {
                  B(h);
                  h.update();
                };

                n();
                g.bindBindingUpdate(h.grid.element.id, n);
                return;
              }

              var D = {};
              var C = [];
              var v = 0;
              var E = {};

              for (var j = 0; j < this.filters.length; j++) {
                var f = this.filters[j].datafield;
                var l = this.filters[j].filter;

                if (!l.getfilters) {
                  continue;
                }

                var i = l.getfilters();
                E[f + "operator"] = l.operator;

                for (var A = 0; A < i.length; A++) {
                  i[A].datafield = f;
                  var u = i[A].value;

                  if (i[A].type == "datefilter") {
                    if (i[A].value && i[A].value.toLocaleString) {
                      var c = this.grid.getColumn(i[A].datafield);

                      if (c && c.cellsformat) {
                        var z = this.grid.source.formatDate(i[A].value, c.cellsformat, this.grid.gridlocalization);

                        if (z) {
                          E["filtervalue" + v] = z;
                        } else {
                          E["filtervalue" + v] = i[A].value.toLocaleString();
                        }
                      } else {
                        E["filtervalue" + v] = u.toString();
                      }
                    } else {
                      E["filtervalue" + v] = u.toString();
                    }
                  } else {
                    E["filtervalue" + v] = u.toString();

                    if (i[A].data) {
                      E["filterid" + v] = i[A].data.toString();
                    }

                    if (i[A].id) {
                      E["filterid" + v] = i[A].id.toString();
                    }
                  }

                  E["filtercondition" + v] = i[A].condition;
                  E["filteroperator" + v] = i[A].operator;
                  E["filterdatafield" + v] = f;
                  var t = {
                    label: u.toString()
                  };

                  if (i[A].data) {
                    t.value = i[A].data.toString();
                  }

                  if (i[A].id) {
                    t.value = i[A].id.toString();
                  } else {
                    t.value = u.toString();
                  }

                  t.condition = i[A].condition;
                  t.operator = i[A].operator == 0 ? "and" : "or";
                  t.field = f;
                  t.type = i[A].type;
                  var d = false;

                  if (C.length > 0) {
                    for (var s = 0; s < C.length; s++) {
                      var r = C[s];

                      if (r.field == f) {
                        r.filters.push(t);
                        d = true;
                        break;
                      }
                    }
                  }

                  if (!d) {
                    C.push({
                      field: f,
                      filters: []
                    });
                    C[C.length - 1].filters.push(t);
                  }

                  v++;
                }
              }

              E.filterGroups = C;
              E.filterslength = v;
              b.extend(E, {
                sortdatafield: h.sortfield,
                sortorder: h.sortfielddirection,
                pagenum: h.pagenum,
                pagesize: h.grid.pageSize
              });
              var F = g._options.data;

              if (g._options.data) {
                b.extend(g._options.data, E);
              } else {
                if (y.data) {
                  b.extend(E, y.data);
                }

                g._options.data = E;
              }

              var n = function n() {
                var o = b.jqx.browser.msie && b.jqx.browser.version < 9;

                var q = function q() {
                  B(h);
                  h.update();
                };

                if (o) {
                  try {
                    q();
                  } catch (m) {}
                } else {
                  q();
                }
              };

              g.unbindDownloadComplete(h.grid.element.id);
              g.bindDownloadComplete(h.grid.element.id, n);

              g._source.loaderror = function (q, m, o) {
                n();
              };

              if (!h.grid.autoBind && h.grid.isInitialized || h.grid.autoBind) {
                g.dataBind();
              }

              g._options.data = F;
          }
        };

        this.addFilter = function (f, e) {
          this._sortData = null;
          this._sortHierarchyData = null;
          var d = -1;

          for (var c = 0; c < this.filters.length; c++) {
            if (this.filters[c].datafield == f) {
              d = c;
              break;
            }
          }

          if (d == -1) {
            this.filters[this.filters.length] = {
              filter: e,
              datafield: f
            };
          } else {
            this.filters[d] = {
              filter: e,
              datafield: f
            };
          }
        };

        this.removeFilter = function (d) {
          this._sortData = null;
          this._sortHierarchyData = null;

          for (var c = 0; c < this.filters.length; c++) {
            if (this.filters[c].datafield == d) {
              this.filters.splice(c, 1);
              break;
            }
          }
        };

        this.sortBy = function (e, c) {
          var d = this;

          if (c == null) {
            this.sortfield = "";
            this.sortfielddirection = "";
            return;
          }

          if (c == undefined) {
            c = true;
          }

          if (c == "a" || c == "asc" || c == "ascending" || c == true) {
            c = true;
          } else {
            c = false;
          }

          if (e == "constructor") {
            e = "";
          }

          this.sortfield = e;
          this.sortfielddirection = c ? "asc" : "desc";
        };

        this._sort = function (d) {
          if (!this.sortfield || !this.sortfielddirection) {
            return d;
          }

          if (this._sortfield == this.sortfield && this._sortfielddirection == this.sortfielddirection && this._sortData) {
            return this._sortData;
          }

          var g = this;
          var j = Object.prototype.toString;
          Object.prototype.toString = typeof g.sortfield == "function" ? g.sortfield : function () {
            return this[g.sortfield];
          };
          var f = "";

          if (this.source.datafields) {
            b.each(this.source.datafields, function () {
              if (this.name == g.sortfield) {
                if (this.type) {
                  f = this.type;
                }

                return false;
              }
            });
          }

          var c = new Array();

          for (var e = 0; e < d.length; e++) {
            c.push(b.extend({
              originalRecord: d[e]
            }, d[e]));
          }

          this._sortfield = this.sortfield;
          this._sortfielddirection = this.sortfielddirection;

          if (this.sortfielddirection === "desc") {
            var h = c.sort(function (k, i) {
              return g._compare(k, i, f);
            }).reverse();
          } else {
            var h = c.sort(function (k, i) {
              return g._compare(k, i, f);
            });
          }

          this._sortData = h;
          Object.prototype.toString = j;
          return h;
        };

        this._compare = function (d, c, f) {
          var d = d;
          var c = c;

          if (d === undefined) {
            d = null;
          }

          if (c === undefined) {
            c = null;
          }

          if (d === null && c === null) {
            return 0;
          }

          if (d === null && c !== null) {
            return 1;
          }

          if (d !== null && c === null) {
            return 1;
          }

          d = d.toString();
          c = c.toString();

          if (b.jqx.dataFormat) {
            if (f && f != "") {
              switch (f) {
                case "number":
                case "int":
                case "float":
                  if (d < c) {
                    return -1;
                  }

                  if (d > c) {
                    return 1;
                  }

                  return 0;

                case "date":
                case "time":
                  if (d < c) {
                    return -1;
                  }

                  if (d > c) {
                    return 1;
                  }

                  return 0;

                case "string":
                case "text":
                  d = String(d).toLowerCase();
                  c = String(c).toLowerCase();
                  break;
              }
            } else {
              if (b.jqx.dataFormat.isNumber(d) && b.jqx.dataFormat.isNumber(c)) {
                if (d < c) {
                  return -1;
                }

                if (d > c) {
                  return 1;
                }

                return 0;
              } else {
                if (b.jqx.dataFormat.isDate(d) && b.jqx.dataFormat.isDate(c)) {
                  if (d < c) {
                    return -1;
                  }

                  if (d > c) {
                    return 1;
                  }

                  return 0;
                } else {
                  if (!b.jqx.dataFormat.isNumber(d) && !b.jqx.dataFormat.isNumber(c)) {
                    d = String(d).toLowerCase();
                    c = String(c).toLowerCase();
                  }
                }
              }
            }
          }

          try {
            if (d < c) {
              return -1;
            }

            if (d > c) {
              return 1;
            }
          } catch (e) {
            var g = e;
          }

          return 0;
        };

        this._equals = function (d, c) {
          return this._compare(d, c) === 0;
        };

        this.evaluate = function (p) {
          if (this.grid.serverProcessing) {
            if (p) {
              if (this.grid.source._source.id == "" || this.grid.source._source.id == null) {
                if (this.grid.pageable) {
                  var c = this.grid.pageSize * this.pagenum;
                  this.grid.rowsByKey = new Array();
                  var h = this;
                  b.each(p, function (i) {
                    this.uid = c;
                    h.grid.rowsByKey[this.uid] = this;
                    c++;
                  });
                }
              }
            }

            return p;
          }

          var d = new Array();

          if (this.filters.length) {
            var j = new Array();

            var o = function o(s, w) {
              for (var u = 0; u < s.length; u++) {
                var v = s[u];
                v._visible = true;
                var q = undefined;

                for (var t = 0; t < this.filters.length; t++) {
                  var r = this.filters[t].filter;
                  var x = v[this.filters[t].datafield];
                  var y = r.evaluate(x);

                  if (q == undefined) {
                    q = y;
                  } else {
                    if (r.operator == "or") {
                      q = q || y;
                    } else {
                      q = q && y;
                    }
                  }
                }

                v._visible = false;

                if (q || v.aggregate) {
                  v._visible = true;
                  w.push(v);
                  j[v.uid] = v;
                }
              }
            };

            if (!this._filteredData) {
              if (this.source.hierarchy || this.grid.source.hierarchy && this.grid.source.hierarchy.length > 0) {
                var n = new Array();

                var k = function k(r, s) {
                  for (var q = 0; q < s.length; q++) {
                    var t = s[q];
                    n.push(t);

                    if (t.records && t.records.length > 0) {
                      k(t, t.records);
                    }
                  }
                };

                k(null, p);
                o.call(this, n, d);

                for (var e = 0; e < d.length; e++) {
                  var g = d[e];

                  while (g.parent) {
                    var m = g.parent;

                    if (!j[m.uid]) {
                      m._visible = true;
                      j[m.uid] = m;
                    }

                    g = m;
                  }
                }

                d = p;
              } else {
                o.call(this, p, d);
              }

              this._filteredData = d;
              this.rows = d;
            } else {
              this.rows = this._filteredData;
            }
          } else {
            this.rows = p;
          }

          if (this.source.hierarchy || this.grid.source.hierarchy && this.grid.source.hierarchy.length > 0) {
            var h = this;
            var l = new Array();
            this._sortData = null;

            var f = function f(t, q) {
              h._sortData = null;
              var r = null;

              if (h.source.hierarchy.groupingDataFields) {
                if (q && q.length > 0 && q[0].level < h.source.hierarchy.groupingDataFields.length) {
                  r = new Array();

                  for (var s = 0; s < q.length; s++) {
                    r.push(b.extend({
                      originalRecord: q[s]
                    }, q[s]));
                  }
                } else {
                  r = h._sort(q);
                }
              } else {
                r = h._sort(q);
              }

              if (t.records) {
                t.records = r;
              } else {
                t = t.concat(r);
              }

              for (var s = 0; s < r.length; s++) {
                if (r[s].records && r[s].records.length) {
                  f(r[s], r[s].records);
                }
              }

              return t;
            };

            if (this.sortfield || this.sortfielddirection) {
              if (this._sortHierarchyData) {
                l = this._sortHierarchyData;
              } else {
                l = f(l, p);
              }

              this.rows = l;
              this._sortHierarchyData = l;
            }
          } else {
            this.rows = this._sort(this.rows);
          }

          return this.rows;
        };

        this.getid = function (j, d, e) {
          if (b(j, d).length > 0) {
            return b(j, d).text();
          }

          if (this.rows && j != "" && j != undefined && this.rows.length > 0) {
            var h = this.rows[this.rows.length - 1][j];

            if (h == null) {
              h = null;
            }

            for (var f = 1; f <= 100; f++) {
              var g = this.grid.rowsByKey[f + h];

              if (!g) {
                if (this.grid && this.grid.treeGrid && this.grid.treeGrid.virtualModeCreateRecords) {
                  var g = this.grid.rowsByKey["jqx" + h + f];

                  if (g) {
                    continue;
                  }

                  return "jqx" + h + f;
                }

                return h + f;
              }
            }
          }

          if (j != undefined) {
            if (j.toString().length > 0) {
              var c = b(d).attr(j);

              if (c != null && c.toString().length > 0) {
                if (this.grid && this.grid.treeGrid && this.grid.treeGrid.virtualModeCreateRecords) {
                  return "jqx" + c;
                }

                return c;
              }
            }
          }

          if (this.rows && this.rows.length > 0) {
            var g = this.grid.rowsByKey[e];

            if (g) {
              var h = this.rows[this.rows.length - 1][j];

              if (h == null) {
                h = "";
              }

              for (var f = 1; f <= 1000; f++) {
                var g = this.grid.rowsByKey[f + h];

                if (!g) {
                  if (this.grid && this.grid.treeGrid && this.grid.treeGrid.virtualModeCreateRecords) {
                    var g = this.grid.rowsByKey["jqx" + h + f];

                    if (g) {
                      continue;
                    }

                    return "jqx" + h + f;
                  }

                  return h + f;
                }
              }
            }
          }

          if (this.grid && this.grid.treeGrid && this.grid.treeGrid.virtualModeCreateRecords) {
            var g = this.grid.rowsByKey["jqx" + e];

            if (!g) {
              return "jqx" + e;
            } else {
              for (var f = e + 1; f <= 100; f++) {
                var g = this.grid.rowsByKey["jqx" + f];

                if (!g) {
                  var g = this.grid.rowsByKey["jqx" + f];

                  if (g) {
                    continue;
                  }

                  return "jqx" + f;
                }
              }
            }
          }

          return e;
        };

        this.generatekey = function () {
          var c = function c() {
            return (1 + Math.random()) * 16 | 0;
          };

          return "" + c() + c() + "-" + c() + "-" + c();
        };

        return this;
      };
    })(jqxBaseFramework);
    /***/

  },

  /***/
  "./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxnumberinput.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/jqwidgets-framework/jqwidgets-ng/jqwidgets/jqxnumberinput.js ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesJqwidgetsFrameworkJqwidgetsNgJqwidgetsJqxnumberinputJs(module, exports) {
    /*
    jQWidgets v9.0.0 (2020-Jan)
    Copyright (c) 2011-2020 jQWidgets.
    License: https://jqwidgets.com/license/
    */

    /* eslint-disable */
    (function (a) {
      var _a$extend;

      a.jqx.jqxWidget("jqxNumberInput", "", {});
      a.extend(a.jqx._jqxNumberInput.prototype, (_a$extend = {
        defineInstance: function defineInstance() {
          var b = {
            value: 0,
            decimal: 0,
            min: -99999999,
            max: 99999999,
            width: 200,
            validationMessage: "Invalid value",
            height: 25,
            textAlign: "right",
            readOnly: false,
            promptChar: "_",
            decimalDigits: 2,
            decimalSeparator: ".",
            groupSeparator: ",",
            groupSize: 3,
            symbol: "",
            symbolPosition: "left",
            digits: 8,
            negative: false,
            negativeSymbol: "-",
            disabled: false,
            inputMode: "advanced",
            spinButtons: false,
            spinButtonsWidth: 18,
            spinButtonsStep: 1,
            autoValidate: true,
            spinMode: "advanced",
            enableMouseWheel: true,
            touchMode: "auto",
            allowNull: true,
            placeHolder: "",
            changeType: null,
            template: "",
            rtl: false,
            hint: true,
            events: ["valueChanged", "textchanged", "mousedown", "mouseup", "keydown", "keyup", "keypress", "change"],
            aria: {
              "aria-valuenow": {
                name: "decimal",
                type: "number"
              },
              "aria-valuemin": {
                name: "min",
                type: "number"
              },
              "aria-valuemax": {
                name: "max",
                type: "number"
              },
              "aria-disabled": {
                name: "disabled",
                type: "boolean"
              }
            },
            invalidArgumentExceptions: ["invalid argument exception"]
          };

          if (this === a.jqx._jqxNumberInput.prototype) {
            return b;
          }

          a.extend(true, this, b);
          return b;
        },
        createInstance: function createInstance(b) {
          if (this.promptChar === "") {
            this.promptChar = " ";
          }

          var d = this.host.attr("value");

          if (d != undefined) {
            this.decimal = d;
          }

          if (this.decimal === 0) {
            if (this.value != null) {
              this.decimal = this.value;
            } else {
              if (this.value === null && this.decimal !== 0) {
                this.value = this.decimal;
              }
            }
          }

          var c = this;

          c._createFromInput("jqxNumberInput");

          this.render();
        },
        _updateHint: function _updateHint() {
          var b = this;

          if (!b.hint) {
            return;
          }

          if (b.isMaterialized()) {
            setTimeout(function () {
              if (b.numberInput[0].value.length === 0) {
                b.element.removeAttribute("hint");

                if (b.label && b.label[0]) {
                  b.label[0].innerHTML = b.placeHolder;
                }
              } else {
                b.element.setAttribute("hint", true);
              }
            });
          }
        },
        _createFromInput: function _createFromInput(c) {
          var h = this;

          if (h.element.nodeName.toLowerCase() == "input") {
            h.field = h.element;

            if (h.field.className) {
              h._className = h.field.className;
            }

            var i = {
              title: h.field.title
            };

            if (h.field.value) {
              h.decimal = parseFloat(h.field.value);
            }

            if (h.field.getAttribute("min")) {
              var f = h.field.getAttribute("min");
              h.min = parseFloat(f);
            }

            if (h.field.getAttribute("step")) {
              var e = h.field.getAttribute("step");
              h.spinButtonsStep = parseFloat(e);
            }

            if (h.field.getAttribute("max")) {
              var j = h.field.getAttribute("max");
              h.max = parseFloat(j);
            }

            if (h.field.id.length) {
              i.id = h.field.id.replace(/[^\w]/g, "_") + "_" + c;
            } else {
              i.id = a.jqx.utilities.createId() + "_" + c;
            }

            var b = a("<div></div>", i);
            b[0].style.cssText = h.field.style.cssText;

            if (!h.width) {
              h.width = a(h.field).width();
            }

            if (!h.height) {
              h.height = a(h.field).outerHeight();
            }

            a(h.field).hide().after(b);
            var g = h.host.data();
            h.host = b;
            h.host.data(g);
            h.element = b[0];
            h.element.id = h.field.id;
            h.field.id = i.id;

            if (h._className) {
              h.host.addClass(h._className);
              a(h.field).removeClass(h._className);
            }

            if (h.field.tabIndex) {
              var d = h.field.tabIndex;
              h.field.tabIndex = -1;
              h.element.tabIndex = d;
            }
          }
        },
        _doTouchHandling: function _doTouchHandling() {
          var e = this;
          var g = e.savedValue;

          if (!e.parsing) {
            e.parsing = true;
          }

          if (e.parsing) {
            if (e.numberInput.val() && e.numberInput.val().indexOf("-") == 0) {
              e.setvalue("negative", true);
            } else {
              e.setvalue("negative", false);
            }

            var f = e.numberInput.val();

            for (var c = 0; c < f.length - 1; c++) {
              var d = f.substring(c, c + 1);

              if (isNaN(parseFloat(d)) && e.symbol.toString().indexOf(d) === -1 && d != "%" && d != "$" && d != "." && d != "," && d != "-") {
                e.numberInput[0].value = g;
                e.parsing = false;
                return;
              }
            }

            e.ValueString = e.GetValueString(e.numberInput.val(), e.decimalSeparator, e.decimalSeparator != "");

            e._parseDecimalInSimpleMode();

            e.decimal = e.ValueString;
            var b = e.getvalue("negative");

            if (b) {
              e.decimal = "-" + e.ValueString;
            }

            e.parsing = false;
          }
        },
        render: function render() {
          this.host.attr({
            role: "spinbutton"
          });
          this.host.attr("data-role", "input");
          a.jqx.aria(this);
          a.jqx.aria(this, "aria-multiline", false);
          var f = this;

          if (this.officeMode || this.theme && this.theme.indexOf("office") != -1) {
            if (this.spinButtonsWidth == 18) {
              this.spinButtonsWidth = 15;
            }
          }

          if (a.jqx.mobile.isTouchDevice() || this.touchMode === true) {
            this.inputMode = "textbox";
            this.spinMode = "simple";
          }

          if (this.decimalSeparator == "") {
            this.decimalSeparator = " ";
          }

          this.host.addClass(this.toThemeProperty("jqx-input"));
          this.host.addClass(this.toThemeProperty("jqx-rc-all"));
          this.host.addClass(this.toThemeProperty("jqx-widget"));
          this.host.addClass(this.toThemeProperty("jqx-widget-content"));
          this.host.addClass(this.toThemeProperty("jqx-numberinput"));

          if (this.spinButtons) {
            this._spinButtons();
          } else {
            this.numberInput = a("<input style='border:none;' autocomplete='off' type='textarea'/>").appendTo(this.host);
            this.numberInput.addClass(this.toThemeProperty("jqx-input-content"));
            this.numberInput.addClass(this.toThemeProperty("jqx-widget-content"));
          }

          if (!this.isMaterialized()) {
            this.numberInput.attr("placeholder", this.placeHolder);
          }

          var d = this.host.attr("name");

          if (d) {
            this.numberInput.attr("name", d);
          }

          if (this.host.attr("tabindex")) {
            this.numberInput.attr("tabindex", this.host.attr("tabindex"));
            this.host.removeAttr("tabindex");
          }

          if (a.jqx.mobile.isTouchDevice() || this.touchMode === true || this.inputMode == "textbox") {
            var f = this;
            f.savedValue = "";
            this.addHandler(this.numberInput, "focus", function () {
              f.savedValue = f.numberInput[0].value;
            });
            this.addHandler(this.numberInput, "change", function () {
              f._doTouchHandling();
            });
          }

          var h = a.data(this.host[0], "jqxNumberInput");
          h.jqxNumberInput = this;
          var f = this;

          if (this.host.parents("form").length > 0) {
            this.addHandler(this.host.parents("form"), "reset", function () {
              setTimeout(function () {
                f.setDecimal(0);
              }, 10);
            });
          }

          this.propertyChangeMap.disabled = function (j, l, k, m) {
            if (m) {
              j.numberInput.addClass(c.toThemeProperty("jqx-input-disabled"));
              j.numberInput.attr("disabled", true);
            } else {
              j.host.removeClass(c.toThemeProperty("jqx-input-disabled"));
              j.numberInput.attr("disabled", false);
            }

            if (j.spinButtons && j.host.jqxRepeatButton) {
              j.upbutton.jqxRepeatButton({
                disabled: m
              });
              j.downbutton.jqxRepeatButton({
                disabled: m
              });
            }
          };

          if (this.disabled) {
            this.numberInput.addClass(this.toThemeProperty("jqx-input-disabled"));
            this.numberInput.attr("disabled", true);
            this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));
          }

          this.selectedText = "";
          this.decimalSeparatorPosition = -1;
          var i = this.element.id;
          var e = this.element;
          var c = this;
          this.oldValue = this._value();
          this.items = new Array();
          var g = this.value;
          var b = this.decimal;

          this._initializeLiterals();

          this._render();

          this.setDecimal(g !== null ? b : null);
          var f = this;
          setTimeout(function () {}, 100);

          this._addHandlers();

          a.jqx.utilities.resize(this.host, function () {
            f._render();
          });
        },
        refresh: function refresh(b) {
          if (!b) {
            this._render();
          }
        },
        wheel: function wheel(d, c) {
          if (!c.enableMouseWheel) {
            return;
          }

          c.changeType = "mouse";
          var e = 0;

          if (!d) {
            d = window.event;
          }

          if (d.originalEvent && d.originalEvent.wheelDelta) {
            d.wheelDelta = d.originalEvent.wheelDelta;
          }

          if (d.wheelDelta) {
            e = d.wheelDelta / 120;
          } else {
            if (d.detail) {
              e = -d.detail / 3;
            }
          }

          if (e) {
            var b = c._handleDelta(e);

            if (d.preventDefault) {
              d.preventDefault();
            }

            if (d.originalEvent != null) {
              d.originalEvent.mouseHandled = true;
            }

            if (d.stopPropagation != undefined) {
              d.stopPropagation();
            }

            if (b) {
              b = false;
              d.returnValue = b;
              return b;
            } else {
              return false;
            }
          }

          if (d.preventDefault) {
            d.preventDefault();
          }

          d.returnValue = false;
        },
        _handleDelta: function _handleDelta(b) {
          if (b < 0) {
            this.spinDown();
          } else {
            this.spinUp();
          }

          return true;
        },
        _addHandlers: function _addHandlers() {
          var b = this;
          this.addHandler(this.numberInput, "paste", function (g) {
            var d = b._selection();

            g.preventDefault();

            if (g.originalEvent.clipboardData) {
              var f = (g.originalEvent || g).clipboardData.getData("text/plain");
            } else {
              if (window.clipboardData) {
                var f = window.clipboardData.getData("Text");
              }
            }

            this.selectedText = f;
            a.data(document.body, "jqxSelection", this.selectedText);

            if (b.inputMode != "simple") {
              b._pasteSelectedText();
            } else {
              b.val(f);
            }

            setTimeout(function () {
              b._setSelectionStart(d.start);
            });
          });
          this.addHandler(this.numberInput, "mousedown", function (d) {
            return b._raiseEvent(2, d);
          });

          this._mousewheelfunc = this._mousewheelfunc || function (d) {
            if (!b.editcell) {
              b.wheel(d, b);
              return false;
            }
          };

          this.removeHandler(this.host, "mousewheel", this._mousewheelfunc);
          this.addHandler(this.host, "mousewheel", this._mousewheelfunc);
          var c = "";
          this.addHandler(this.numberInput, "focus", function (d) {
            a.data(b.numberInput, "selectionstart", b._selection().start);
            b.host.addClass(b.toThemeProperty("jqx-fill-state-focus"));

            if (b.spincontainer) {
              b.spincontainer.addClass(b.toThemeProperty("jqx-numberinput-focus"));
            }

            c = b.numberInput.val();
            b._savedValue = b.decimal;
          });
          this.addHandler(this.numberInput, "blur", function (e) {
            if (b.inputMode == "simple") {
              b._exitSimpleInputMode(e, b, false, c);
            }

            if (b.autoValidate) {
              var f = parseFloat(b.decimal);
              var d = b.getvalue("negative");

              if (d && b.decimal > 0) {
                f = -parseFloat(b.decimal);
              }

              if (f > b.max) {
                b._disableSetSelection = true;
                b.setDecimal(b.max);
                b._disableSetSelection = false;
              }

              if (f < b.min) {
                b._disableSetSelection = true;
                b.setDecimal(b.min);
                b._disableSetSelection = false;
              }
            }

            b.host.removeClass(b.toThemeProperty("jqx-fill-state-focus"));

            if (b.spincontainer) {
              b.spincontainer.removeClass(b.toThemeProperty("jqx-numberinput-focus"));
            }

            if (b.numberInput.val() != c) {
              b._raiseEvent(7, e);

              a.jqx.aria(b, "aria-valuenow", b.decimal);
              b.element.value = b.decimal;
            }

            return true;
          });
          this.addHandler(this.numberInput, "mouseup", function (d) {
            return b._raiseEvent(3, d);
          });
          this.addHandler(this.numberInput, "keydown", function (d) {
            b.changeType = "keyboard";
            return b._raiseEvent(4, d);
          });
          this.addHandler(this.numberInput, "keyup", function (d) {
            return b._raiseEvent(5, d);
          });
          this.addHandler(this.numberInput, "keypress", function (d) {
            return b._raiseEvent(6, d);
          });
        },
        focus: function focus() {
          try {
            this.numberInput.focus();
          } catch (b) {}
        },
        _removeHandlers: function _removeHandlers() {
          var b = this;
          this.removeHandler(this.numberInput, "mousedown");
          var c = a.jqx.mobile.isOperaMiniMobileBrowser();

          if (c) {
            this.removeHandler(a(document), "click." + this.element.id, b._exitSimpleInputMode, b);
          }

          this.removeHandler(this.numberInput, "paste");
          this.removeHandler(this.numberInput, "focus");
          this.removeHandler(this.numberInput, "blur");
          this.removeHandler(this.numberInput, "mouseup");
          this.removeHandler(this.numberInput, "keydown");
          this.removeHandler(this.numberInput, "keyup");
          this.removeHandler(this.numberInput, "keypress");
        },
        _spinButtons: function _spinButtons() {
          if (this.host.jqxRepeatButton) {
            if (!this.numberInput) {
              this.numberInput = a("<input autocomplete='off' style='border: none; position: relative; float: left;' type='textarea'/>");
              this.numberInput.appendTo(this.host);
              this.numberInput.addClass(this.toThemeProperty("jqx-input-content"));
              this.numberInput.addClass(this.toThemeProperty("jqx-widget-content"));
            } else {
              this.numberInput.css("float", "left");
            }

            if (this.spincontainer) {
              if (this.upbutton) {
                this.upbutton.jqxRepeatButton("destroy");
              }

              if (this.downbutton) {
                this.downbutton.jqxRepeatButton("destroy");
              }

              this.spincontainer.remove();
            }

            this.spincontainer = a('<div style="float: right; height: 100%; overflow: hidden; position: relative;"></div>');

            if (this.rtl) {
              this.spincontainer.css("float", "right");
              this.numberInput.css("float", "right");
              this.spincontainer.css("left", "-1px");
            }

            this.host.append(this.spincontainer);
            this.upbutton = a('<div style="overflow: hidden; padding: 0px; margin-left: -1px; position: relative;"><div></div></div>');
            this.spincontainer.append(this.upbutton);
            this.upbutton.jqxRepeatButton({
              overrideTheme: true,
              disabled: this.disabled,
              roundedCorners: "top-right"
            });
            this.downbutton = a('<div style="overflow: hidden; padding: 0px; margin-left: -1px; position: relative;"><div></div></div>');
            this.spincontainer.append(this.downbutton);
            this.downbutton.jqxRepeatButton({
              overrideTheme: true,
              disabled: this.disabled,
              roundedCorners: "bottom-right"
            });

            if (this.template) {
              this.upbutton.addClass(this.toThemeProperty("jqx-" + this.template));
              this.downbutton.addClass(this.toThemeProperty("jqx-" + this.template));
            }

            var d = this;
            this.downbutton.addClass(this.toThemeProperty("jqx-fill-state-normal jqx-action-button"));
            this.upbutton.addClass(this.toThemeProperty("jqx-fill-state-normal jqx-action-button"));
            this.upbutton.addClass(this.toThemeProperty("jqx-rc-tr"));
            this.downbutton.addClass(this.toThemeProperty("jqx-rc-br"));
            this.addHandler(this.downbutton, "mouseup", function (e) {
              if (!d.disabled) {
                d.downbutton.removeClass(d.toThemeProperty("jqx-fill-state-pressed"));

                d._downArrow.removeClass(d.toThemeProperty("jqx-icon-arrow-down-selected"));
              }
            });
            this.addHandler(this.upbutton, "mouseup", function (e) {
              if (!d.disabled) {
                d.upbutton.removeClass(d.toThemeProperty("jqx-fill-state-pressed"));

                d._upArrow.removeClass(d.toThemeProperty("jqx-icon-arrow-up-selected"));
              }
            });
            this.removeHandler(a(document), "mouseup." + this.element.id);
            this.addHandler(a(document), "mouseup." + this.element.id, function (e) {
              d.upbutton.removeClass(d.toThemeProperty("jqx-fill-state-pressed"));

              d._upArrow.removeClass(d.toThemeProperty("jqx-icon-arrow-up-selected"));

              d.downbutton.removeClass(d.toThemeProperty("jqx-fill-state-pressed"));

              d._downArrow.removeClass(d.toThemeProperty("jqx-icon-arrow-down-selected"));
            });
            this.addHandler(this.downbutton, "mousedown", function (e) {
              if (!d.disabled) {
                if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                  d._inputSelection = d._selection();
                }

                d.downbutton.addClass(d.toThemeProperty("jqx-fill-state-pressed"));

                d._downArrow.addClass(d.toThemeProperty("jqx-icon-arrow-down-selected"));

                e.preventDefault();
                e.stopPropagation();
                return false;
              }
            });
            this.addHandler(this.upbutton, "mousedown", function (e) {
              if (!d.disabled) {
                if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                  d._inputSelection = d._selection();
                }

                d.upbutton.addClass(d.toThemeProperty("jqx-fill-state-pressed"));

                d._upArrow.addClass(d.toThemeProperty("jqx-icon-arrow-up-selected"));

                e.preventDefault();
                e.stopPropagation();
                return false;
              }
            });
            this.addHandler(this.upbutton, "mouseenter", function (e) {
              d.upbutton.addClass(d.toThemeProperty("jqx-fill-state-hover"));

              d._upArrow.addClass(d.toThemeProperty("jqx-icon-arrow-up-hover"));
            });
            this.addHandler(this.upbutton, "mouseleave", function (e) {
              d.upbutton.removeClass(d.toThemeProperty("jqx-fill-state-hover"));

              d._upArrow.removeClass(d.toThemeProperty("jqx-icon-arrow-up-hover"));
            });
            this.addHandler(this.downbutton, "mouseenter", function (e) {
              d.downbutton.addClass(d.toThemeProperty("jqx-fill-state-hover"));

              d._downArrow.addClass(d.toThemeProperty("jqx-icon-arrow-down-hover"));
            });
            this.addHandler(this.downbutton, "mouseleave", function (e) {
              d.downbutton.removeClass(d.toThemeProperty("jqx-fill-state-hover"));

              d._downArrow.removeClass(d.toThemeProperty("jqx-icon-arrow-down-hover"));
            });
            this.upbutton.css("border-width", "0px");
            this.downbutton.css("border-width", "0px");

            if (this.disabled) {
              this.upbutton[0].disabled = true;
              this.downbutton[0].disabled = true;
            } else {
              this.upbutton[0].disabled = false;
              this.downbutton[0].disabled = false;
            }

            this.spincontainer.addClass(this.toThemeProperty("jqx-input"));
            this.spincontainer.addClass(this.toThemeProperty("jqx-rc-r"));
            this.spincontainer.css("border-width", "0px");

            if (!this.rtl) {
              this.spincontainer.css("border-left-width", "1px");
            } else {
              this.spincontainer.css("border-right-width", "1px");
            }

            this._upArrow = this.upbutton.find("div");
            this._downArrow = this.downbutton.find("div");

            this._upArrow.addClass(this.toThemeProperty("jqx-icon-arrow-up"));

            this._downArrow.addClass(this.toThemeProperty("jqx-icon-arrow-down"));

            this._upArrow.addClass(this.toThemeProperty("jqx-input-icon"));

            this._downArrow.addClass(this.toThemeProperty("jqx-input-icon"));

            var d = this;

            this._upArrow.hover(function () {
              if (!d.disabled) {
                d._upArrow.addClass(d.toThemeProperty("jqx-icon-arrow-up-hover"));
              }
            }, function () {
              d._upArrow.removeClass(d.toThemeProperty("jqx-icon-arrow-up-hover"));
            });

            this._downArrow.hover(function () {
              if (!d.disabled) {
                d._downArrow.addClass(d.toThemeProperty("jqx-icon-arrow-down-hover"));
              }
            }, function () {
              d._downArrow.removeClass(d.toThemeProperty("jqx-icon-arrow-down-hover"));
            });

            var b = a.jqx.mobile.isTouchDevice();
            var c = "click";

            if (b) {
              c = a.jqx.mobile.getTouchEventName("touchstart");
            }

            if (b) {
              this.addHandler(this.downbutton, "click", function (e) {
                d.spinDown();
              });
              this.addHandler(this.upbutton, "click", function (e) {
                d.spinUp();
              });
            }

            this.addHandler(this.downbutton, c, function (e) {
              if (!b) {
                if (d._selection().start == 0) {
                  d._setSelectionStart(d.numberInput.val().length);
                }

                if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                  d._setSelectionStart(d._inputSelection.start);
                }
              } else {
                e.preventDefault();
                e.stopPropagation();
              }

              d.spinDown();
              return false;
            });
            this.addHandler(this.upbutton, c, function (e) {
              if (!b) {
                if (d._selection().start == 0) {
                  d._setSelectionStart(d.numberInput.val().length);
                }

                if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                  d._setSelectionStart(d._inputSelection.start);
                }
              } else {
                e.preventDefault();
                e.stopPropagation();
              }

              d.spinUp();
              return false;
            });
          } else {
            throw new Error("jqxNumberInput: Missing reference to jqxbuttons.js.");
          }
        },
        spinDown: function spinDown() {
          var m = this;
          var l = this.decimal;

          if (m.spinMode == "none") {
            return;
          }

          if (this.decimal == null) {
            this.setDecimal(0);
            return;
          }

          var b = this.getvalue("negative");
          var q = b ? -1 : 0;

          if (a.jqx.mobile.isTouchDevice() || this.inputMode == "textbox") {
            m._doTouchHandling();
          }

          if (!m.disabled) {
            var o = this._selection();

            var n = this.decimal;
            var j = this.getDecimal();

            if (j < this.min) {
              j = this.min;
              this.setDecimal(this.min);

              this._setSelectionStart(o.start);

              this.spinDown();
              return;
            } else {
              if (j > this.max) {
                j = this.max;
                this.setDecimal(this.max);

                this._setSelectionStart(o.start);

                this.spinDown();
                return;
              }
            }

            if (m.spinButtonsStep < 0) {
              m.spinButtonsStep = 1;
            }

            var d = parseInt(m.decimal) - m.spinButtonsStep;
            d = d.toString().length;
            var f = q + d <= m.digits;

            if (m.spinMode != "advanced") {
              if (j - m.spinButtonsStep >= m.min && f) {
                var s = 1;

                for (g = 0; g < m.decimalDigits; g++) {
                  s = s * 10;
                }

                var e = s * j - s * m.spinButtonsStep;
                e = e / s;
                e = this._parseDecimalValueToEditorValue(e);
                m.setDecimal(e);
              }
            } else {
              var p = this._getspindecimal();

              var k = this._getSeparatorPosition();

              var j = parseFloat(p.decimal);

              if (m.spinButtonsStep < 0) {
                m.spinButtonsStep = 1;
              }

              var d = parseInt(j) - m.spinButtonsStep;
              d = d.toString().length;
              var f = q + d <= m.digits;
              var s = 1;
              var c = p.decimal.indexOf(".");

              if (c != -1) {
                var h = p.decimal.length - c - 1;
                var s = 1;

                for (var g = 0; g < h; g++) {
                  s = s * 10;
                }

                j -= new Number(m.spinButtonsStep / s);
                j = j.toFixed(h);
                var c = j.toString().indexOf(".");

                if (c == -1) {
                  j = j.toString() + ".";
                }

                var r = j.toString() + p.afterdecimal;
                r = new Number(r);
                r = r.toFixed(m.decimalDigits);

                if (r >= m.min) {
                  r = this._parseDecimalValueToEditorValue(r);
                  m.setDecimal(r);
                }
              } else {
                if (j - m.spinButtonsStep >= m.min && f) {
                  var e = s * j - s * m.spinButtonsStep;
                  e = e / s;
                  var r = e.toString() + p.afterdecimal;

                  if (r >= m.min) {
                    r = this._parseDecimalValueToEditorValue(r);
                    m.setDecimal(r);
                  }
                }
              }
            }

            if (r == undefined || this.inputMode != "simple") {
              this._setSelectionStart(o.start);

              m.savedValue = m.numberInput[0].value;

              if (l != this.decimal) {
                if (a.jqx.mobile.isTouchDevice()) {
                  this._raiseEvent(0, {});
                }

                this._raiseEvent(7, {});
              }

              a.jqx.aria(this, "aria-valuenow", this.decimal);
              return;
            }

            r = this.decimal.toString();
            var b = this.getvalue("negative");

            if (q == 0 && b) {
              this._setSelectionStart(o.start + 1);
            } else {
              if (r != undefined && (n == undefined || n.toString().length == r.length)) {
                this._setSelectionStart(o.start);
              } else {
                if (b) {
                  this._setSelectionStart(o.start + 1);
                } else {
                  this._setSelectionStart(o.start - 1);
                }
              }
            }

            if (l != this.decimal) {
              if (a.jqx.mobile.isTouchDevice()) {
                this._raiseEvent(0, {});
              }

              this._raiseEvent(7, {});
            }

            a.jqx.aria(this, "aria-valuenow", this.decimal);
          }
        },
        _getspindecimal: function _getspindecimal() {
          var n = this._selection();

          var o = "";

          var k = this._getSeparatorPosition();

          var q = this._getVisibleItems();

          var e = this._getHiddenPrefixCount();

          var p = this.numberInput.val();

          if (this.numberInput.val().length == n.start && n.length == 0) {
            this._setSelection(n.start, n.start + 1);

            n = this._selection();
          }

          var j = this.inputMode != "advanced";
          var m = n.start;

          if (m === 0) {
            m++;
          }

          if (m === 1 && this.symbolPosition === "left" && this.symbol !== "") {
            m += this.symbol.length;
          }

          for (var c = 0; c < m; c++) {
            if (j) {
              var l = p.substring(c, c + 1);
              var h = !isNaN(parseInt(l));

              if (h) {
                o += l;
              }

              if (l == this.decimalSeparator) {
                o += l;
              }

              continue;
            }

            if (q[c].canEdit && q[c].character != this.promptChar) {
              o += q[c].character;
            } else {
              if (!q[c].canEdit && this.decimalSeparatorPosition != -1 && q[c] == q[this.decimalSeparatorPosition - e]) {
                if (o.length == 0) {
                  o = "0";
                }

                o += q[c].character;
              }
            }
          }

          var g = "";

          for (var c = m; c < q.length; c++) {
            if (j) {
              var l = p.substring(c, c + 1);
              var h = !isNaN(parseInt(l));

              if (h) {
                g += l;
              }

              if (l == this.decimalSeparator) {
                g += l;
              }

              continue;
            }

            if (q[c].canEdit && q[c].character != this.promptChar) {
              g += q[c].character;
            } else {
              if (!q[c].canEdit && this.decimalSeparatorPosition != -1 && q[c] == q[this.decimalSeparatorPosition - e]) {
                g += q[c].character;
              }
            }
          }

          var b = this.getvalue("negative");
          var f = b ? "-" + this._parseDecimalValue(o).toString() : this._parseDecimalValue(o).toString();
          return {
            decimal: f,
            afterdecimal: this._parseDecimalValue(g)
          };
        },
        _parseDecimalValue: function _parseDecimalValue(c) {
          if (this.decimalSeparator != ".") {
            var d = c.toString().indexOf(this.decimalSeparator);

            if (d >= 0) {
              var b = c.toString().substring(0, d) + "." + c.toString().substring(d + 1);
              return b;
            }
          }

          return c;
        },
        _parseDecimalValueToEditorValue: function _parseDecimalValueToEditorValue(c) {
          if (this.decimalSeparator != ".") {
            var d = c.toString().indexOf(".");

            if (d >= 0) {
              var b = c.toString().substring(0, d) + this.decimalSeparator + c.toString().substring(d + 1);
              return b;
            }
          }

          return c;
        },
        spinUp: function spinUp() {
          var r = this;
          var t = this.decimal;

          if (r.spinMode == "none") {
            return;
          }

          if (this.decimal == null) {
            this.setDecimal(0);
            return;
          }

          if (a.jqx.mobile.isTouchDevice() || this.inputMode == "textbox") {
            r._doTouchHandling();
          }

          var l = this.getvalue("negative");
          var e = l ? -1 : 0;

          if (!r.disabled) {
            var s = this._selection();

            var h = r.decimal;
            var d = r.getDecimal();

            if (d < this.min) {
              d = this.min;
              this.setDecimal(this.min);

              this._setSelectionStart(s.start);

              this.spinUp();
              return;
            } else {
              if (d > this.max) {
                d = this.max;
                this.setDecimal(this.max);

                this._setSelectionStart(s.start);

                this.spinUp();
                return;
              }
            }

            if (r.spinButtonsStep < 0) {
              r.spinButtonsStep = 1;
            }

            var n = parseInt(r.decimal) + r.spinButtonsStep;
            n = n.toString().length;
            var k = e + n <= r.digits;

            if (r.spinMode != "advanced") {
              if (d + r.spinButtonsStep <= r.max && k) {
                var p = 1;

                for (var o = 0; o < r.decimalDigits; o++) {
                  p = p * 10;
                }

                var g = p * d + p * r.spinButtonsStep;
                g = g / p;
                g = this._parseDecimalValueToEditorValue(g);
                r.setDecimal(g);
              }
            } else {
              var c = this._getspindecimal();

              var f = this._getSeparatorPosition();

              var d = parseFloat(c.decimal);

              if (r.spinButtonsStep < 0) {
                r.spinButtonsStep = 1;
              }

              var n = parseInt(d) + r.spinButtonsStep;
              n = n.toString().length;
              var k = e + n <= r.digits;
              var p = 1;
              var q = c.decimal.indexOf(".");

              if (q != -1) {
                var m = c.decimal.length - q - 1;
                var p = 1;

                for (var o = 0; o < m; o++) {
                  p = p * 10;
                }

                d += new Number(r.spinButtonsStep / p);
                d = d.toFixed(m);
                var q = d.toString().indexOf(".");

                if (q == -1) {
                  d = d.toString() + ".";
                }

                var j = d.toString() + c.afterdecimal;
                j = new Number(j);
                j = j.toFixed(r.decimalDigits);
                var b = new Number(j).toFixed(r.decimalDigits);

                if (b <= r.max) {
                  j = this._parseDecimalValueToEditorValue(j);
                  r.setDecimal(j);
                } else {
                  j = undefined;
                }
              } else {
                if (d + r.spinButtonsStep <= r.max && k) {
                  var g = p * d + p * r.spinButtonsStep;
                  g = g / p;
                  var j = g.toString() + c.afterdecimal;
                  var b = new Number(j).toFixed(r.decimalDigits);

                  if (b <= r.max) {
                    j = this._parseDecimalValueToEditorValue(j);

                    if (l && j.indexOf("-") == -1) {
                      if (c.decimal != "-0") {
                        j = "-" + j;
                      }
                    }

                    r.setDecimal(j);
                  } else {
                    j = undefined;
                  }
                }
              }
            }

            if (j == undefined || this.inputMode != "simple") {
              this._setSelectionStart(s.start);

              r.savedValue = r.numberInput[0].value;

              if (t != this.decimal) {
                if (a.jqx.mobile.isTouchDevice()) {
                  this._raiseEvent(0, {});
                }

                this._raiseEvent(7, {});
              }

              a.jqx.aria(this, "aria-valuenow", this.decimal);
              return;
            }

            j = this.decimal.toString();
            var l = this.getvalue("negative");

            if (e == -1 && !l) {
              this._setSelectionStart(-1 + s.start);
            } else {
              if (j != undefined && (h == undefined || h.toString().length == j.length)) {
                this._setSelectionStart(s.start);
              } else {
                if (l) {
                  this._setSelectionStart(s.start);
                } else {
                  this._setSelectionStart(1 + s.start);
                }
              }
            }

            if (t != this.decimal) {
              if (a.jqx.mobile.isTouchDevice()) {
                this._raiseEvent(0, {});
              }

              this._raiseEvent(7, {});
            }

            a.jqx.aria(this, "aria-valuenow", this.decimal);
          }
        },
        _exitSimpleInputMode: function _exitSimpleInputMode(b, k, h, d) {
          if (k == undefined) {
            k = b.data;
          }

          if (k == null) {
            return;
          }

          if (h == undefined) {
            if (b.target != null && k.element != null) {
              if (b.target.id != undefined && b.target.id.toString().length > 0 && k.host.find("#" + b.target.id).length > 0 || b.target == k.element) {
                return;
              }
            }

            var f = k.host.offset();
            var e = f.left;
            var g = f.top;
            var c = k.host.width();
            var j = k.host.height();
            var l = a(b.target).offset();

            if (l.left >= e && l.left <= e + c) {
              if (l.top >= g && l.top <= g + j) {
                return;
              }
            }
          }

          if (a.jqx.mobile.isOperaMiniBrowser()) {
            k.numberInput.attr("readonly", true);
          }

          if (k.disabled || k.readOnly) {
            return;
          }

          var i = a.data(k.numberInput, "simpleInputMode");

          if (i == null) {
            return;
          }

          a.data(k.numberInput, "simpleInputMode", null);

          this._parseDecimalInSimpleMode();

          return false;
        },
        _getDecimalInSimpleMode: function _getDecimalInSimpleMode() {
          var d = this.decimal;

          if (this.decimalSeparator != ".") {
            var b = d.toString().indexOf(this.decimalSeparator);

            if (b > 0) {
              var c = d.toString().substring(0, b);
              var d = c + "." + d.toString().substring(b + 1);
            }
          }

          return d;
        },
        _parseDecimalInSimpleMode: function _parseDecimalInSimpleMode(d) {
          var k = this;
          var b = k.getvalue("negative");
          var e = this.ValueString;

          if (e == undefined) {
            e = this.GetValueString(this.numberInput.val(), this.decimalSeparator, this.decimalSeparator != "");
          }

          if (this.decimalSeparator != ".") {
            var g = e.toString().indexOf(".");

            if (g > 0) {
              var f = e.toString().substring(0, g);
              var c = f + this.decimalSeparator + e.toString().substring(g + 1);
              e = c;
            }
          }

          var h = b ? "-" : "";

          if (this.symbolPosition == "left") {
            h += this.symbol;
          }

          var i = this.digits % this.groupSize;

          if (i == 0) {
            i = this.groupSize;
          }

          var j = e.toString();

          if (j.indexOf("-") >= 0) {
            j = j.substring(j.indexOf("-") + 1);
          }

          h += j;

          if (this.symbolPosition == "right") {
            h += this.symbol;
          }

          if (d != false) {
            k.numberInput.val(h);
          }
        },
        _enterSimpleInputMode: function _enterSimpleInputMode(f, d) {
          if (d == undefined) {
            d = f.data;
          }

          var e = this._selection();

          if (d == null) {
            return;
          }

          var c = d.getvalue("negative");
          var b = d.decimal;

          if (c) {
            if (b > 0) {
              b = -b;
            }
          }

          d.numberInput.val(b);
          a.data(d.numberInput, "simpleInputMode", true);

          if (a.jqx.mobile.isOperaMiniBrowser()) {
            d.numberInput.attr("readonly", false);
          }

          this._parseDecimalInSimpleMode();

          this._setSelectionStart(e.start);
        },
        setvalue: function setvalue(b, c) {
          if (this[b] !== undefined) {
            if (b == "decimal") {
              this._setDecimal(c);
            } else {
              this[b] = c;
              this.propertyChangedHandler(this, b, c, c);
            }
          }
        },
        getvalue: function getvalue(b) {
          if (b == "decimal") {
            if (this.negative != undefined && this.negative == true) {
              if (this.decimal.toString().indexOf(",")) {
                return -Math.abs(this.decimal.toString().replace(/,/, "."));
              }

              return -Math.abs(this[b]);
            }
          }

          if (b in this) {
            return this[b];
          }

          return null;
        },
        _getString: function _getString() {
          var c = "";

          for (var b = 0; b < this.items.length; b++) {
            var d = this.items[b].character;
            c += d;
          }

          return c;
        },
        _literal: function _literal(d, b, c, e) {
          return {
            character: d,
            regex: b,
            canEdit: c,
            isSeparator: e
          };
        },
        _initializeLiterals: function _initializeLiterals() {
          if (this.inputMode == "textbox") {
            return;
          }

          var h = 0;
          var e = this.negativeSymbol.length;

          for (var d = 0; d < e; d++) {
            var g = this.negativeSymbol.substring(d, d + 1);
            var k = "";
            var b = false;
            var l = null;

            if (this.negative) {
              l = this._literal(g, k, b, false);
            } else {
              l = this._literal("", k, b, false);
            }

            this.items[h] = l;
            h++;
          }

          var c = this.symbol.length;

          if (this.symbolPosition == "left") {
            for (d = 0; d < c; d++) {
              var g = this.symbol.substring(d, d + 1);
              var k = "";
              var b = false;

              var l = this._literal(g, k, b, false);

              this.items[h] = l;
              h++;
            }
          }

          var f = this.digits % this.groupSize;

          if (f == 0) {
            f = this.groupSize;
          }

          for (var d = 0; d < this.digits; d++) {
            var g = this.promptChar;
            var k = "\\d";
            var b = true;

            var l = this._literal(g, k, b, false);

            this.items[h] = l;
            h++;

            if (d < this.digits - 1 && this.groupSeparator != undefined && this.groupSeparator.length > 0) {
              f--;

              if (f == 0) {
                f = this.groupSize;

                var j = this._literal(this.groupSeparator, "", false, false);

                this.items[h] = j;
                h++;
              }
            } else {
              if (d == this.digits - 1) {
                l.character = 0;
              }
            }
          }

          this.decimalSeparatorPosition = -1;

          if (this.decimalDigits != undefined && this.decimalDigits > 0) {
            var g = this.decimalSeparator;

            if (g.length == 0) {
              g = ".";
            }

            var l = this._literal(g, "", false, true);

            this.items[h] = l;
            this.decimalSeparatorPosition = h;
            h++;

            for (var d = 0; d < this.decimalDigits; d++) {
              var n = 0;
              var k = "\\d";

              var m = this._literal(n, k, true, false);

              this.items[h] = m;
              h++;
            }
          }

          if (this.symbolPosition == "right") {
            for (var d = 0; d < c; d++) {
              var g = this.symbol.substring(d, d + 1);
              var k = "";
              var b = false;

              var l = this._literal(g, k, b);

              this.items[h] = l;
              h++;
            }
          }
        },
        _match: function _match(c, b) {
          var d = new RegExp(b, "i");
          return d.test(c);
        },
        _raiseEvent: function _raiseEvent(m, d) {
          var k = this.events[m];
          var c = {};
          c.owner = this;

          if (this.host.css("display") == "none") {
            return true;
          }

          var s = d.charCode ? d.charCode : d.keyCode ? d.keyCode : 0;
          var f = true;
          var h = this.readOnly;
          var q = this;

          if (m == 3 || m == 2) {
            if (!this.disabled) {
              if (this.inputMode != "simple" && this.inputMode != "textbox") {
                this._handleMouse(d);
              } else {
                return true;
              }
            }
          }

          if (m == 0) {
            var g = this.getvalue("decimal");

            if (this.max < g || this.min > g) {
              this.host.addClass(this.toThemeProperty("jqx-input-invalid"));
            } else {
              this.host.removeClass(this.toThemeProperty("jqx-input-invalid"));
              this.host.addClass(this.toThemeProperty("jqx-input"));
              this.host.addClass(this.toThemeProperty("jqx-rc-all"));
            }
          }

          var n = new a.Event(k);
          n.owner = this;
          c.value = this.getvalue("decimal");
          c.text = this.numberInput.val();
          n.args = c;

          if (m == 7) {
            c.type = this.changeType;
            this.changeType = null;
          }

          if (k != undefined) {
            if (m != 4 && m != 5 && m != 6) {
              f = this.host.trigger(n);
            }
          }

          var q = this;

          if (this.inputMode == "textbox") {
            return f;
          }

          if (this.inputMode != "simple") {
            if (m == 4) {
              if (h || this.disabled) {
                return false;
              }

              f = q._handleKeyDown(d, s);
            } else {
              if (m == 5) {
                if (h || this.disabled) {
                  f = false;
                }
              } else {
                if (m == 6) {
                  if (h || this.disabled) {
                    return false;
                  }

                  f = q._handleKeyPress(d, s);
                }
              }
            }
          } else {
            if (m == 4 || m == 5 || m == 6) {
              if (a.jqx.mobile.isTouchDevice() || this.touchMode === true) {
                return true;
              }

              if (h || this.disabled) {
                return false;
              }

              var r = String.fromCharCode(s);
              var l = parseInt(r);
              var o = true;

              if (!d.ctrlKey && !d.shiftKey && !d.metaKey) {
                if (s >= 65 && s <= 90) {
                  o = false;
                }
              }

              if (m == 6 && a.jqx.browser.opera != undefined) {
                if (s == 8) {
                  return false;
                }
              }

              if (o) {
                if (m == 4) {
                  o = q._handleSimpleKeyDown(d, s);
                }

                if (s == 107) {
                  var i = q.getvalue("negative");

                  if (i) {
                    q.setvalue("negative", false);
                    q.decimal = q.ValueString;

                    q._parseDecimalInSimpleMode();

                    q._setSelectionStart(t.start + 1);

                    q._raiseEvent(0, q.value);

                    q._raiseEvent(1, q.numberInput.val());
                  }
                }

                if (s == 189 || s == 45 || s == 109 || s == 173) {
                  var t = q._selection();

                  if (m == 4) {
                    var i = q.getvalue("negative");

                    if (i == false) {
                      q.setvalue("negative", true);
                    } else {
                      q.setvalue("negative", false);
                    }

                    q.decimal = q.ValueString;

                    q._parseDecimalInSimpleMode();

                    if (!i) {
                      q._setSelectionStart(t.start + 1);
                    } else {
                      q._setSelectionStart(t.start - 1);
                    }

                    o = false;

                    q._raiseEvent(0, q.value);

                    q._raiseEvent(1, q.numberInput.val());
                  }
                }

                var b = c.ctrlKey || c.metaKey;

                if (!a.jqx.browser.msie) {
                  var p = d;

                  if (b && s == 99 || b && s == 67 || b && s == 122 || b && s == 90 || b && s == 118 || b && s == 86 || p.shiftKey && s == 45) {
                    if (a.jqx.browser.webkit || a.jqx.browser.chrome) {
                      q._handleSimpleKeyDown(d, s);
                    }

                    if (s == 67) {
                      return true;
                    }

                    return false;
                  }
                }

                if (b && s == 97 || b && s == 65) {
                  return true;
                }

                if (m == 6 && o) {
                  var j = this._isSpecialKey(s);

                  return j;
                }
              }

              return o;
            }
          }

          return f;
        },
        GetSelectionInValue: function GetSelectionInValue(j, h, g, f) {
          var c = 0;

          for (var d = 0; d < h.length; d++) {
            if (d >= j) {
              break;
            }

            var e = h.substring(d, d + 1);
            var b = !isNaN(parseInt(e));

            if (b || f && h.substring(d, d + 1) == g) {
              c++;
            }
          }

          return c;
        },
        GetSelectionLengthInValue: function GetSelectionLengthInValue(h, j, g, f) {
          var c = 0;

          for (var d = 0; d < g.length; d++) {
            if (d >= h + j) {
              break;
            }

            var e = g.substring(d, d + 1);
            var b = !isNaN(parseInt(e));

            if (j > 0 && d >= h && b || d >= h && g[d].toString() == f) {
              c++;
            }
          }

          return c;
        },
        GetInsertTypeByPositionInValue: function GetInsertTypeByPositionInValue(e, g, h, f) {
          var c = "before";
          var b = this.GetValueString(h, g, f);
          var d = this.GetDigitsToSeparator(0, b, g);

          if (e > d) {
            c = "after";
          }

          return c;
        },
        RemoveRange: function RemoveRange(f, e, m, g, s, b) {
          var h = this.digits;
          var n = f;
          var t = e;
          var c = 0;
          var o = this.decimal;

          var x = this._selection();

          var g = this.decimalSeparator;
          var j = g != "";

          if (t == 0 && this.ValueString.length < this.decimalPossibleChars - 1) {
            return c;
          }

          var u = this.GetSeparatorPositionInText(g, m);

          if (!s) {
            u = this.GetSeparatorPositionInText(g, m);
          }

          if (u < 0 && !j && m.length > 1) {
            u = m.length;
          }

          if (u == -1) {
            u = m.length;
          }

          var d = j ? 1 : 0;

          if (e < 2 && b == true) {
            var w = this.ValueString.length - this.decimalDigits - d;

            if (w == h && f + e < u) {
              t++;
            }
          }

          var k = "";

          for (var r = 0; r < m.length; r++) {
            if (r < n || r >= n + t) {
              k += m.substring(r, r + 1);
              continue;
            } else {
              var q = m.substring(r, r + 1);

              if (q == g) {
                k += g;
                continue;
              } else {
                var q = m.substring(r, r + 1);

                if (this.symbol && this.symbol != "" && this.symbol.indexOf(q) >= 0) {
                  continue;
                }

                if (r > u) {
                  k += "0";
                  continue;
                }
              }
            }

            var q = m.substring(r, r + 1);
            var p = !isNaN(parseInt(q));

            if (p) {
              c++;
            }
          }

          if (k.length == 0) {
            k = "0";
          }

          if (s) {
            this.numberInput.val(k);
          } else {
            this.ValueString = k;
          }

          var l = k.substring(0, 1);

          if (l == g && isNaN(parseInt(l))) {
            var v = "0" + k;
            k = v;
          }

          this.ValueString = this.GetValueString(k, g, j);
          this.decimal = this.ValueString;

          this._parseDecimalInSimpleMode();

          this._setSelectionStart(n);

          return c;
        },
        InsertDigit: function InsertDigit(q, w) {
          if (typeof this.digits != "number") {
            this.digits = parseInt(this.digits);
          }

          if (typeof this.decimalDigits != "number") {
            this.decimalDigits = parseInt(this.decimalDigits);
          }

          var i = 1 + this.digits;

          var x = this._selection();

          var l = this.getvalue("negative");
          var d = false;

          if (x.start == 0 && this.symbol != "" && this.symbolPosition == "left") {
            this._setSelectionStart(x.start + 1);

            x = this._selection();
            d = true;
          }

          if (l && d || l && !d && x.start == 0) {
            this._setSelectionStart(x.start + 1);

            x = this._selection();
          }

          var u = this.numberInput.val().substring(x.start, x.start + 1);
          var n = this.numberInput.val();
          var g = this.decimalSeparator;
          var j = g != "" && this.decimalDigits > 0;

          if (u == this.symbol && this.symbolPosition == "right") {
            if (this.decimalDigits == 0) {
              this.ValueString = this.GetValueString(n, g, j);

              if (this.ValueString.length >= i) {
                return;
              }
            } else {
              return;
            }
          }

          this.ValueString = this.GetValueString(n, g, j);

          if (this.ValueString == "") {
            this.ValueString = new Number(0).toFixed(this.decimalDigits);
          }

          var t = this.ValueString;

          if (this.decimalDigits > 0 && w >= t.length) {
            w = t.length - 1;
          }

          var o = "";

          if (w < t.length) {
            o = t.substring(w, w + 1);
          }

          var h = false;
          var v = false;
          var e = this.GetInsertTypeByPositionInValue(w, g, n, j);

          if (e == "after") {
            h = true;
          }

          var b = j ? 1 : 0;

          if (o != g && this.ValueString.length - this.decimalDigits - b >= i - 1) {
            h = true;
          }

          if (o === "0" && this.ValueString.length === 1 && this.decimalDigits === 0) {
            h = true;
          }

          var p = false;
          var r = j ? 1 : 0;

          if (!h && this.ValueString && this.ValueString.length >= this.digits + this.decimalDigits + r) {
            return;
          }

          if (h && o != g) {
            if (p) {
              w++;
            }

            var m = t.substring(0, w);

            if (m.length == t.length) {
              if (this.ValueString.length >= this.digits + this.decimalDigits + r) {
                return;
              }
            }

            var s = q;
            var c = "";

            if (w + 1 < t.length) {
              c = t.substring(w + 1);
            }

            var k = m + s + c;
            this.ValueString = k;
          } else {
            var m = t.substring(0, w);
            var s = q;
            var c = t.substring(w);
            var k = m + s + c;

            if (t.substring(0, 1) == "0" && t.substring(1, 2) == g) {
              k = s + t.substring(1);

              if (o == g) {
                this._setSelectionStart(x.start - 1);

                x = this._selection();
              }
            }

            this.ValueString = k;
          }

          if (l) {
            this.decimal = -this.ValueString;
          } else {
            this.decimal = this.ValueString;
          }

          this._parseDecimalInSimpleMode();

          var f = x.start;
          f += 1;

          this._setSelectionStart(f);

          this.value = this.decimal;

          this._raiseEvent(0, this.value);

          this._raiseEvent(1, this.numberInput.val());
        },
        GetStringToSeparator: function GetStringToSeparator(h, f, e) {
          var d = "";
          var b = f;
          var g = this.GetSeparatorPositionInText(f, h);
          var c = h.subString(0, g);
          d = this.GetValueString(c, f, e);
          return d;
        },
        GetSeparatorPositionInText: function GetSeparatorPositionInText(d, e) {
          var c = -1;

          for (var b = 0; b < e.length; b++) {
            if (e.substring(b, b + 1) == d) {
              c = b;
              break;
            }
          }

          return c;
        },
        GetValueString: function GetValueString(h, g, f) {
          var d = "";

          for (var c = 0; c < h.length; c++) {
            var e = h.substring(c, c + 1);
            var b = !isNaN(parseInt(e));

            if (b) {
              d += e;
            }

            if (e == g) {
              d += g;
            }
          }

          return d;
        },
        Backspace: function Backspace() {
          var d = this._selection();

          var e = this._selection();

          var f = this.numberInput.val();

          if (d.start == 0 && d.length == 0) {
            return;
          }

          this.isBackSpace = true;
          var c = f.substring[(d.start, d.start + 1)];
          var b = !isNaN(parseInt(c));

          if (d.start > 0 && d.length == 0) {
            this._setSelectionStart(d.start - 1);

            var d = this._selection();
          }

          this.Delete();

          this._setSelectionStart(e.start - 1);

          this.isBackSpace = false;
        },
        Delete: function Delete(c) {
          var e = this._selection();

          var h = this.numberInput.val();

          if (e.start === 0 && h.substring(0, 1) == "-") {
            this.setvalue("negative", false);

            var e = this._selection();

            var h = this.numberInput.val();
          }

          var f = e.start;
          var i = e.length;
          i = Math.max(i, 1);
          this.ValueString = this.GetValueString(h, this.decimalSeparator, this.decimalSeparator != "");

          if (f > this.ValueString.indexOf(this.decimalSeparator) && this.decimalDigits > 0) {
            f++;
          }

          var g = 0;

          if (this.symbol) {
            if (this.symbolPosition == "left") {
              g--;
            }

            if (this.negative) {
              g--;
            }
          }

          this.RemoveRange(e.start + g, i, this.ValueString, ".", false);
          var d = this.ValueString.substring(0, 1);
          var b = !isNaN(parseInt(d));

          if (!b) {
            this.ValueString = "0" + this.ValueString;
          }

          this.decimal = this.ValueString;

          this._parseDecimalInSimpleMode();

          this._setSelectionStart(f);

          this.value = this.decimal;

          this._raiseEvent(0, this.value);

          this._raiseEvent(1, this.numberInput.val());
        },
        insertsimple: function insertsimple(d) {
          var i = this._selection();

          var j = this.numberInput.val();

          if (i.start == j.length && this.decimal != null && this.decimalDigits > 0) {
            return;
          }

          var b = this.decimal;
          var g = this.decimalSeparator;
          this.ValueString = this.GetValueString(j, g, g != "");
          var h = this.GetSelectionInValue(i.start, j, g, g != "");
          var e = this.GetSelectionLengthInValue(i.start, i.length, j, g);
          var f = this.GetDigitsToSeparator(0, this.ValueString, g);
          var c = false;

          if (this.decimalDigits > 0 && h >= this.ValueString.length) {
            h--;
          }

          if (this.ValueString == "") {
            this.ValueString = new Number(0).toFixed(this.decimalDigits);
            this.ValueString = this.ValueString.replace(".", g);
            this.RemoveRange(i.start, e, this.ValueString, g, false, true);
            this.InsertDigit(d, 0, i);
            return;
          }

          this.RemoveRange(i.start, e, this.ValueString, g, false, true);
          this.InsertDigit(d, h, i);
        },
        GetDigitsToSeparator: function GetDigitsToSeparator(d, b, e) {
          if (e == undefined) {
            e = ".";
          }

          if (b.indexOf(e) < 0) {
            return b.length;
          }

          for (var c = 0; c < b.length; c++) {
            if (b.substring(c, c + 1) == e) {
              d = c;
              break;
            }
          }

          return d;
        },
        _handleSimpleKeyDown: function _handleSimpleKeyDown(k, r) {
          var q = this._selection();

          var b = k.ctrlKey || k.metaKey;

          if ((r == 8 || r == 46) && b) {
            this.setDecimal(null);
            return false;
          }

          if (q.start >= 0 && q.start < this.items.length) {
            var d = String.fromCharCode(r);
          }

          if (r === 27) {
            this.setDecimal(this._savedValue);
            var j = this.GetSeparatorPositionInText(this.decimalSeparator, this.numberInput.val());

            if (j != -1) {
              this._setSelectionStart(j);
            }

            k.preventDefault();
          }

          if (this.rtl && r == 37) {
            var c = k.shiftKey;
            var g = c ? 1 : 0;

            if (c) {
              this._setSelection(q.start + 1 - g, q.start + q.length + 1);
            } else {
              this._setSelection(q.start + 1 - g, q.start + 1);
            }

            return false;
          } else {
            if (this.rtl && r == 39) {
              var c = k.shiftKey;
              var g = c ? 1 : 0;

              if (c) {
                this._setSelection(q.start - 1, q.length + g + q.start - 1);
              } else {
                this._setSelection(q.start - 1, q.start - 1);
              }

              return false;
            }
          }

          if (r == 8) {
            this.Backspace();
            return false;
          }

          if (r == 190 || r == 110) {
            var j = this.GetSeparatorPositionInText(this.decimalSeparator, this.numberInput.val());

            if (j != -1) {
              this._setSelectionStart(j + 1);
            }

            return false;
          }

          if (r == 188) {
            var p = this.numberInput.val();

            for (h = q.start; h < p.length; h++) {
              if (p[h] == this.groupSeparator) {
                this._setSelectionStart(1 + h);

                break;
              }
            }

            return false;
          }

          var b = k.ctrlKey || k.metaKey;

          if (b && r == 99 || b && r == 67) {
            var q = this._selection();

            var s = "";
            var o = this.numberInput.val();

            if (q.start > 0 || q.length > 0) {
              for (var h = q.start; h < q.end; h++) {
                s += o.substring(h, h + 1);
              }
            }

            a.data(document.body, "jqxSelection", s);

            if (a.jqx.browser.msie) {
              window.clipboardData.setData("Text", s);
            } else {
              var l = this;
              var f = a('<textarea style="position: absolute; left: -1000px; top: -1000px;"/>');
              f.val(s);
              a("body").append(f);
              f.select();
              setTimeout(function () {
                document.designMode = "off";
                f.select();
                f.remove();
                l.focus();
              }, 100);
            }

            this.savedText = s;
            return true;
          }

          if (b && r == 122 || b && r == 90) {
            return false;
          }

          if (b && r == 118 || b && r == 86 || k.shiftKey && r == 45) {
            if (a.jqx.browser.msie && !this.savedText) {
              this.savedText = window.clipboardData.getData("Text");
            }

            if (this.savedText != null && this.savedText.length > 0) {
              this.val(this.savedText);
            } else {
              this.val(a.data(document.body, "jqxSelection"));
            }

            return false;
          }

          var d = String.fromCharCode(r);
          var m = parseInt(d);

          if (r >= 96 && r <= 105) {
            m = r - 96;
            r = r - 48;
          }

          if (!isNaN(m)) {
            var l = this;
            this.insertsimple(m);
            return false;
          }

          if (r == 46) {
            this.Delete();
            return false;
          }

          if (r == 38) {
            this.spinUp();
            return false;
          } else {
            if (r == 40) {
              this.spinDown();
              return false;
            }
          }

          var n = this._isSpecialKey(r);

          if (!a.jqx.browser.mozilla) {
            return true;
          }

          return n;
        },
        _getEditRange: function _getEditRange() {
          var d = 0;
          var b = 0;

          for (var c = 0; c < this.items.length; c++) {
            if (this.items[c].canEdit) {
              d = c;
              break;
            }
          }

          for (c = this.items.length - 1; c >= 0; c--) {
            if (this.items[c].canEdit) {
              b = c;
              break;
            }
          }

          return {
            start: d,
            end: b
          };
        },
        _getVisibleItems: function _getVisibleItems() {
          var b = new Array();
          var c = 0;

          for (var d = 0; d < this.items.length; d++) {
            if (this.items[d].character.toString().length > 0) {
              b[c] = this.items[d];
              c++;
            }
          }

          return b;
        },
        _hasEmptyVisibleItems: function _hasEmptyVisibleItems() {
          var b = this._getVisibleItems();

          for (var c = 0; c < b.length; c++) {
            if (b[c].canEdit && b[c].character == this.promptChar) {
              return true;
            }
          }

          return false;
        },
        _getFirstVisibleNonEmptyIndex: function _getFirstVisibleNonEmptyIndex() {
          var b = this._getVisibleItems();

          for (var c = 0; c < b.length; c++) {
            if (b[c].canEdit && b[c].character != this.promptChar) {
              return c;
            }
          }
        },
        _handleMouse: function _handleMouse(f, b) {
          var d = this._selection();

          if (d.length <= 1) {
            var c = this._getFirstVisibleNonEmptyIndex();

            if (d.start < c) {
              this._setSelectionStart(c);
            }
          }
        },
        _insertKey: function _insertKey(k) {
          this.numberInput[0].focus();
          var d = String.fromCharCode(k);
          var e = parseInt(d);

          if (isNaN(e)) {
            return;
          }

          var n = 0;

          for (var f = 0; f < this.items.length; f++) {
            if (this.items[f].character.length == 0) {
              n++;
            }
          }

          var j = this._selection();

          var b = this;

          if (j.start >= 0 && j.start <= this.items.length) {
            var g = false;

            var h = this._getFirstVisibleNonEmptyIndex();

            if (j.start < h && j.length == 0) {
              if (!isNaN(d) || d == " ") {
                this._setSelectionStart(h);

                j = this._selection();
              }
            }

            var c = this._getFirstEditableItemIndex();

            var m = this._getLastEditableItemIndex();

            if (this.value === null) {
              c = m = 0;
            }

            var l = this._getVisibleItems();

            a.each(l, function (x, B) {
              if (j.start > x && x != l.length - 1) {
                return;
              }

              var E = l[x];

              if (x > m) {
                E = l[m];
              }

              if (isNaN(d) || d == " " || d == "" || !E) {
                return;
              }

              if (!E.canEdit) {
                return;
              }

              var A = b._getSeparatorPosition();

              if (b._match(d, E.regex)) {
                if (!g && j.length > 0) {
                  for (var w = j.start + n; w < j.end + n; w++) {
                    if (b.items[w].canEdit) {
                      if (w > A) {
                        b.items[w].character = "0";
                      } else {
                        b.items[w].character = b.promptChar;
                      }
                    }
                  }

                  var D = b._getString();

                  g = true;
                }

                var A = b._getSeparatorPosition();

                var y = b._hasEmptyVisibleItems();

                if (b.decimal == null) {
                  j.start = A - 1;

                  if (j.start < 0) {
                    j.start = 0;
                  }

                  j.end = j.start;
                }

                if (j.start <= A && y) {
                  var u = x;

                  if (b.decimalSeparatorPosition == -1 && j.start == A) {
                    u = x + 1;
                  }

                  if (b.decimal == null) {
                    u = j.start;
                  }

                  var t = "";

                  for (var r = 0; r < u; r++) {
                    if (l[r].canEdit && l[r].character != b.promptChar) {
                      t += l[r].character;
                    }
                  }

                  t += d;
                  var v = b.decimal < 1 ? 1 : 0;

                  if (j.start == A && b.decimalSeparatorPosition != -1) {
                    t += b.decimalSeparator;
                    v = 0;
                  }

                  for (var r = u + v; r < l.length; r++) {
                    if (l[r].character == b.decimalSeparator && l[r].isSeparator) {
                      t += l[r].character;
                    } else {
                      if (l[r].canEdit && l[r].character != b.promptChar) {
                        t += l[r].character;
                      }
                    }
                  }

                  if (b.decimalSeparator != ".") {
                    t = b._parseDecimalValue(t);
                  }

                  t = parseFloat(t).toString();
                  t = new Number(t);
                  t = t.toFixed(b.decimalDigits);

                  if (b.decimalSeparator != ".") {
                    t = b._parseDecimalValueToEditorValue(t);
                  }

                  b.setvalue("decimal", t);

                  var D = b._getString();

                  if (j.end < A) {
                    b._setSelectionStart(j.end + v);
                  } else {
                    b._setSelectionStart(j.end);
                  }

                  if (j.length >= 1) {
                    b._setSelectionStart(j.end);
                  }

                  if (j.length == b.numberInput.val().length) {
                    var o = b._moveCaretToDecimalSeparator();

                    var C = b.decimalSeparatorPosition >= 0 ? 1 : 0;

                    b._setSelectionStart(o - C);
                  }
                } else {
                  if (j.start < A || j.start > A) {
                    if (b.numberInput.val().length == j.start && b.decimalSeparatorPosition != -1) {
                      return false;
                    } else {
                      if (b.numberInput.val().length == j.start && b.decimalSeparatorPosition == -1 && !y) {
                        return false;
                      }
                    }

                    var t = "";
                    var q = false;

                    for (var r = 0; r < x; r++) {
                      if (l[r].canEdit && l[r].character != b.promptChar) {
                        t += l[r].character;
                      }

                      if (l[r].character == b.decimalSeparator && l[r].isSeparator) {
                        t += l[r].character;
                        q = true;
                      }
                    }

                    t += d;
                    var v = b.decimal < 1 ? 1 : 0;

                    if (!q && j.start == A - 1) {
                      t += b.decimalSeparator;
                      q = true;
                    }

                    for (var r = x + 1; r < l.length; r++) {
                      if (!q && l[r].character == b.decimalSeparator && l[r].isSeparator) {
                        t += l[r].character;
                      } else {
                        if (l[r].canEdit && l[r].character != b.promptChar) {
                          t += l[r].character;
                        }
                      }
                    }

                    b.setvalue("decimal", t);

                    var D = b._getString();

                    if (b.decimalSeparatorPosition < 0 && E == l[m]) {
                      b._setSelectionStart(x);

                      return false;
                    }

                    var z = D.indexOf(b.symbol);
                    var s = !b.getvalue("negative") ? 0 : 1;

                    if (z <= s) {
                      z = D.length;
                    }

                    if (j.start < z) {
                      b._setSelectionStart(x + 1);
                    } else {
                      b._setSelectionStart(x);
                    }

                    if (j.length >= 1) {}

                    if (j.length == b.numberInput.val().length) {
                      var o = b._moveCaretToDecimalSeparator();

                      b._setSelectionStart(o - 1);
                    }
                  }
                }

                return false;
              }
            });
          }
        },
        _handleKeyPress: function _handleKeyPress(h, d) {
          var f = this._selection();

          var b = this;
          var i = h.ctrlKey || h.metaKey;

          if (i && d == 97 || i && d == 65) {
            return true;
          }

          if (d == 8) {
            if (f.start > 0) {
              b._setSelectionStart(f.start);
            }

            return false;
          }

          if (d == 46) {
            if (f.start < this.items.length) {
              b._setSelectionStart(f.start);
            }

            return false;
          }

          if (!a.jqx.browser.mozilla) {
            if (d == 45 || d == 173 || d == 109 || d == 189) {
              var c = this.getvalue("negative");

              if (c == false) {
                this.setvalue("negative", true);
              } else {
                this.setvalue("negative", false);
              }
            }
          }

          if (a.jqx.browser.msie) {
            this._insertKey(d);
          }

          var g = this._isSpecialKey(d);

          return g;
        },
        _deleteSelectedText: function _deleteSelectedText() {
          var e = this._selection();

          var d = "";

          var g = this._getSeparatorPosition();

          var b = this._getVisibleItems();

          var f = this._getHiddenPrefixCount();

          if (this.numberInput.val().length == e.start && e.length == 0) {
            this._setSelection(e.start, e.start + 1);

            e = this._selection();
          }

          for (var c = 0; c < e.start; c++) {
            if (b[c].canEdit && b[c].character != this.promptChar) {
              d += b[c].character;
            } else {
              if (!b[c].canEdit && this.decimalSeparatorPosition != -1 && b[c] == b[this.decimalSeparatorPosition - f]) {
                if (d.length == 0) {
                  d = "0";
                }

                d += b[c].character;
              }
            }
          }

          for (var c = e.start; c < e.end; c++) {
            if (c > g && this.decimalSeparatorPosition != -1) {
              if (b[c].canEdit && b[c].character != this.promptChar) {
                d += "0";
              }
            } else {
              if (!b[c].canEdit && this.decimalSeparatorPosition != -1 && b[c] == b[this.decimalSeparatorPosition - f]) {
                if (d.length == 0) {
                  d = "0";
                }

                d += b[c].character;
              }
            }
          }

          for (var c = e.end; c < b.length; c++) {
            if (b[c].canEdit && b[c].character != this.promptChar) {
              d += b[c].character;
            } else {
              if (!b[c].canEdit && this.decimalSeparatorPosition != -1 && b[c] == b[this.decimalSeparatorPosition - f]) {
                if (d.length == 0) {
                  d = "0";
                }

                d += b[c].character;
              }
            }
          }

          this.setvalue("decimal", d);
          return e.length > 0;
        },
        _restoreInitialState: function _restoreInitialState() {
          var c = parseInt(this.decimalDigits);

          if (c > 0) {
            c += 2;
          }

          for (var b = this.items.length - 1; b > this.items.length - 1 - c; b--) {
            if (!this.items[b]) {
              break;
            }

            if (this.items[b].canEdit && this.items[b].character == this.promptChar) {
              this.items[b].character = 0;
            }
          }
        },
        clear: function clear() {
          this.setDecimal(0);
        },
        clearDecimal: function clearDecimal() {
          if (this.inputMode == "textbox") {
            this.numberInput.val();
            return;
          }

          for (var b = 0; b < this.items.length; b++) {
            if (this.items[b].canEdit) {
              this.items[b].character = this.promptChar;
            }
          }

          this._restoreInitialState();
        },
        _saveSelectedText: function _saveSelectedText() {
          var d = this._selection();

          var e = "";

          var b = this._getVisibleItems();

          if (d.start > 0 || d.length > 0) {
            for (var c = d.start; c < d.end; c++) {
              if (b[c].canEdit && b[c].character != this.promptChar) {
                e += b[c].character;
              } else {
                if (b[c].isSeparator) {
                  e += b[c].character;
                }
              }
            }
          }

          if (a.jqx.browser.msie) {
            window.clipboardData.setData("Text", e);
          }

          return e;
        },
        _pasteSelectedText: function _pasteSelectedText() {
          var f = this._selection();

          var h = "";
          var c = 0;
          this.selectedText = a.data(document.body, "jqxSelection");

          if (window.clipboardData) {
            var d = window.clipboardData.getData("Text");

            if (d != this.selectedText && d.length > 0) {
              this.selectedText = window.clipboardData.getData("Text");

              if (this.selectedText == null || this.selectedText == undefined) {
                return;
              }
            }
          }

          var e = f.start;

          var j = this._getVisibleItems();

          if (this.selectedText != null) {
            for (var i = 0; i < this.selectedText.length; i++) {
              var b = parseInt(this.selectedText[i]);

              if (!isNaN(b)) {
                var g = 48 + b;

                this._insertKey(g);
              }
            }
          }
        },
        _getHiddenPrefixCount: function _getHiddenPrefixCount() {
          var c = 0;

          if (!this.negative) {
            c++;
          }

          if (this.symbolPosition == "left") {
            for (var b = 0; b < this.symbol.length; b++) {
              if (this.symbol.substring(b, b + 1) == "") {
                c++;
              }
            }
          }

          return c;
        },
        _getEditableItem: function _getEditableItem() {
          var c = this._selection();

          for (var b = 0; b < this.items.length; b++) {
            if (b < c.start) {
              if (this.items[b].canEdit && this.items[b].character != this.promptChar) {
                return this.items[b];
              }
            }
          }

          return null;
        },
        _getEditableItems: function _getEditableItems() {
          var d = new Array();
          var b = 0;

          for (var c = 0; c < this.items.length; c++) {
            if (this.items[c].canEdit) {
              d[b] = this.items[c];
              b++;
            }
          }

          return d;
        },
        _getValidSelectionStart: function _getValidSelectionStart(c) {
          for (var b = this.items.length - 1; b >= 0; b--) {
            if (this.items[b].canEdit && this.items[b].character != this.promptChar) {
              return b;
            }
          }

          return -1;
        },
        _getEditableItemIndex: function _getEditableItemIndex(c) {
          var f = this._selection();

          var g = this._getHiddenPrefixCount();

          var b = this._getVisibleItems();

          var d = f.start;
          var h = -1;

          for (var e = 0; e < d; e++) {
            if (e < b.length && b[e].canEdit) {
              h = e + g;
            }
          }

          if (h == -1 && f.length > 0) {
            d = f.end;

            for (e = 0; e < d; e++) {
              if (e < b.length && b[e].canEdit) {
                h = e + g;
                break;
              }
            }
          }

          return h;
        },
        _getEditableItemByIndex: function _getEditableItemByIndex(c) {
          for (var b = 0; b < this.items.length; b++) {
            if (b > c) {
              if (this.items[b].canEdit && this.items[b].character != this.promptChar) {
                return b;
              }
            }
          }

          return -1;
        },
        _getFirstEditableItemIndex: function _getFirstEditableItemIndex() {
          var c = this._getVisibleItems();

          for (var b = 0; b < c.length; b++) {
            if (c[b].character != this.promptChar && c[b].canEdit && c[b].character != "0") {
              return b;
            }
          }

          return -1;
        },
        _getLastEditableItemIndex: function _getLastEditableItemIndex() {
          var c = this._getVisibleItems();

          for (var b = c.length - 1; b >= 0; b--) {
            if (c[b].character != this.promptChar && c[b].canEdit) {
              return b;
            }
          }

          return -1;
        },
        _moveCaretToDecimalSeparator: function _moveCaretToDecimalSeparator() {
          for (var b = this.items.length - 1; b >= 0; b--) {
            if (this.items[b].character == this.decimalSeparator && this.items[b].isSeparator) {
              if (!this.negative) {
                this._setSelectionStart(b);

                return b;
              } else {
                this._setSelectionStart(b + 1);

                return b;
              }

              break;
            }
          }

          return this.numberInput.val().length;
        },
        _handleBackspace: function _handleBackspace() {
          var g = this._selection();

          var h = this._getHiddenPrefixCount();

          var b = this._getEditableItemIndex() - h;

          var f = this._getFirstVisibleNonEmptyIndex();

          var c = false;

          if (this.negative) {
            c = true;

            if (f >= b + 1 || g.start == 0) {
              this.setvalue("negative", false);

              if (g.length == 0) {
                this._setSelectionStart(g.start - 1);

                var g = this._selection();
              }
            }
          }

          if (b >= 0) {
            if (g.length == 0 && b != -1) {
              this._setSelection(b, b + 1);
            }

            var i = g.start > this._getSeparatorPosition() + 1 && this.decimalSeparatorPosition > 0;

            if (i) {
              g = this._selection();
            }

            var e = this._deleteSelectedText();

            if (g.length < 1 || i) {
              this._setSelectionStart(g.start);
            } else {
              if (g.length >= 1) {
                this._setSelectionStart(g.end);
              }
            }

            if (g.length == this.numberInput.val().length || c) {
              var d = this._moveCaretToDecimalSeparator();

              this._setSelectionStart(d - 1);
            }
          } else {
            this._setSelectionStart(g.start);
          }
        },
        _handleKeyDown: function _handleKeyDown(j, p) {
          var o = this._selection();

          var c = j.ctrlKey || j.metaKey;

          if ((p == 8 || p == 46) && c) {
            this.setDecimal(null);
            return false;
          }

          if (this.rtl && p == 37) {
            var d = j.shiftKey;
            var g = d ? 1 : 0;

            if (d) {
              this._setSelection(o.start + 1 - g, o.start + o.length + 1);
            } else {
              this._setSelection(o.start + 1 - g, o.start + 1);
            }

            return false;
          } else {
            if (this.rtl && p == 39) {
              var d = j.shiftKey;
              var g = d ? 1 : 0;

              if (d) {
                this._setSelection(o.start - 1, o.length + g + o.start - 1);
              } else {
                this._setSelection(o.start - 1, o.start - 1);
              }

              return false;
            }
          }

          if (c && p == 97 || c && p == 65) {
            return true;
          }

          if (c && p == 120 || c && p == 88) {
            this.selectedText = this._saveSelectedText(j);
            a.data(document.body, "jqxSelection", this.selectedText);

            this._handleBackspace();

            return false;
          }

          if (c && p == 99 || c && p == 67) {
            this.selectedText = this._saveSelectedText(j);
            a.data(document.body, "jqxSelection", this.selectedText);
            return false;
          }

          if (c && p == 122 || c && p == 90) {
            return false;
          }

          if (c && p == 118 || c && p == 86 || j.shiftKey && p == 45) {
            this._pasteSelectedText();

            return false;
          }

          if (o.start >= 0 && o.start < this.items.length) {
            var f = String.fromCharCode(p);
            var r = this.items[o.start];
          }

          if (p == 8) {
            this._handleBackspace();

            return false;
          }

          if (p == 190 || p == 110) {
            this._moveCaretToDecimalSeparator();

            return false;
          }

          if (p == 188) {
            var n = this.numberInput.val();

            for (var h = o.start; h < n.length; h++) {
              if (n[h] == this.groupSeparator) {
                this._setSelectionStart(1 + h);

                break;
              }
            }

            return false;
          }

          if (a.jqx.browser.msie == null) {
            var f = String.fromCharCode(p);
            var l = parseInt(f);

            if (p >= 96 && p <= 105) {
              l = p - 96;
              p = p - 48;
            }

            if (!isNaN(l)) {
              var k = this;

              k._insertKey(p);

              return false;
            }
          }

          if (p == 46) {
            var q = this._getVisibleItems();

            if (o.start < q.length) {
              var g = q[o.start].canEdit == false ? 2 : 1;

              if (o.start == 0) {
                if (this.negative) {
                  this.setvalue("negative", false);

                  if (o.length == 0) {
                    this._setSelectionStart(0);
                  }

                  var o = this._selection();

                  if (o.length == 0) {
                    return false;
                  }
                }
              }

              if (o.length == 0) {
                this._setSelection(o.start + g, o.start + g + o.length);
              }

              this._handleBackspace();

              if (new Number(this.decimal) < 1 || o.start > this._getSeparatorPosition()) {
                this._setSelectionStart(o.end + g);
              } else {
                if (o.start + 1 < this.decimalSeparatorPosition) {
                  this._setSelectionStart(o.end + g);
                }
              }
            }

            return false;
          }

          if (p == 38) {
            this.spinUp();
            return false;
          } else {
            if (p == 40) {
              this.spinDown();
              return false;
            }
          }

          if (p === 27) {
            this.setDecimal(this._savedValue);

            this._setSelectionStart(o.end);

            j.preventDefault();
          }

          var m = this._isSpecialKey(p);

          if (a.jqx.browser.mozilla) {
            if (p == 45 || p == 173 || p == 109 || p == 189) {
              var b = this.getvalue("negative");

              if (b == false) {
                this.setvalue("negative", true);
              } else {
                this.setvalue("negative", false);
              }
            }
          }

          if (!a.jqx.browser.mozilla) {
            return true;
          }

          return m;
        },
        _isSpecialKey: function _isSpecialKey(b) {
          if (b != 8 && b != 9 && b != 13 && b != 35 && b != 36 && b != 37 && b != 39 && b != 27 && b != 46) {
            return false;
          }

          return true;
        },
        _selection: function _selection() {
          try {
            if ("selectionStart" in this.numberInput[0]) {
              var g = this.numberInput[0];
              var h = g.selectionEnd - g.selectionStart;
              return {
                start: g.selectionStart,
                end: g.selectionEnd,
                length: h,
                text: g.value
              };
            } else {
              var d = document.selection.createRange();

              if (d == null) {
                return {
                  start: 0,
                  end: g.value.length,
                  length: 0
                };
              }

              var c = this.numberInput[0].createTextRange();
              var f = c.duplicate();
              c.moveToBookmark(d.getBookmark());
              f.setEndPoint("EndToStart", c);
              var h = d.text.length;
              return {
                start: f.text.length,
                end: f.text.length + d.text.length,
                length: h,
                text: d.text
              };
            }
          } catch (b) {
            return {
              start: 0,
              end: 0,
              length: 0
            };
          }
        },
        selectAll: function selectAll() {
          var b = this.numberInput;
          setTimeout(function () {
            if ("selectionStart" in b[0]) {
              b[0].focus();
              b[0].setSelectionRange(0, b[0].value.length);
            } else {
              var c = b[0].createTextRange();
              c.collapse(true);
              c.moveEnd("character", b[0].value.length);
              c.moveStart("character", 0);
              c.select();
            }
          }, 10);
        },
        _setSelection: function _setSelection(f, b) {
          if (this._disableSetSelection == true) {
            return;
          }

          var e = a.jqx.mobile.isTouchDevice();

          if (e || this.touchMode == true) {
            return;
          }

          try {
            if ("selectionStart" in this.numberInput[0]) {
              this.numberInput[0].focus();
              this.numberInput[0].setSelectionRange(f, b);
            } else {
              var c = this.numberInput[0].createTextRange();
              c.collapse(true);
              c.moveEnd("character", b);
              c.moveStart("character", f);
              c.select();
            }
          } catch (d) {}
        },
        _setSelectionStart: function _setSelectionStart(b) {
          this._setSelection(b, b);

          a.data(this.numberInput, "selectionstart", b);
        },
        resize: function resize(c, b) {
          this.width = c;
          this.height = b;

          this._render(false);
        },
        _render: function _render(g) {
          var c = parseInt(this.host.css("border-left-width"));
          var j = parseInt(this.host.css("border-left-width"));
          var i = parseInt(this.host.css("border-left-width"));
          var e = parseInt(this.host.css("border-left-width"));
          this.numberInput.css("padding-top", "0px");
          this.numberInput.css("padding-bottom", "0px");
          var k = window.getComputedStyle(this.element);
          var h = parseInt(k.borderLeftWidth) * 2;
          var f = k.boxSizing;

          if (f === "border-box" || isNaN(h)) {
            h = 0;
          }

          if (this.width != null && this.width.toString().indexOf("px") != -1) {
            this.element.style.width = parseInt(this.width) - h + "px";
          } else {
            if (this.width != undefined && !isNaN(this.width)) {
              this.element.style.width = parseInt(this.width) - h + "px";
            }
          }

          if (this.height != null && this.height.toString().indexOf("px") != -1) {
            this.element.style.height = parseInt(this.height) - h + "px";
          } else {
            if (this.height != undefined && !isNaN(this.height)) {
              this.element.style.height = parseInt(this.height) - h + "px";
            }
          }

          var d = this.host.width();
          var n = this.host.height();
          this.numberInput.css({
            "border-left-width": 0,
            "border-right-width": 0,
            "border-bottom-width": 0,
            "border-top-width": 0
          });

          if (isNaN(i)) {
            i = 1;
          }

          if (isNaN(j)) {
            j = 1;
          }

          if (isNaN(e)) {
            e = 1;
          }

          if (isNaN(c)) {
            c = 1;
          }

          this.numberInput.css("text-align", this.textAlign);
          var o = this.numberInput.css("font-size");

          if ("" == o) {
            o = 13;
          }

          this.numberInput.css("height", parseInt(o) + 4 + "px");
          this.numberInput.css("width", d - 2);
          var m = n - 2 * i - parseInt(o) - 2;

          if (isNaN(m)) {
            m = 0;
          }

          if (m < 0) {
            m = 0;
          }

          if (this.spinButtons && this.spincontainer) {
            d -= parseInt(this.spinButtonsWidth - 2);
            var l = a.jqx.mobile.isTouchDevice();

            if (!l && this.touchMode !== true) {
              this.spincontainer.width(this.spinButtonsWidth);
              this.upbutton.width(this.spinButtonsWidth + 2);
              this.downbutton.width(this.spinButtonsWidth + 2);
              this.upbutton.height("50%");
              this.downbutton.height("50%");
              this.spincontainer.width(this.spinButtonsWidth);
            } else {
              this.spincontainer.width(2 * this.spinButtonsWidth);
              d -= this.spinButtonsWidth;
              this.upbutton.height("100%");
              this.downbutton.height("100%");
              this.downbutton.css("float", "left");
              this.upbutton.css("float", "right");
              this.upbutton.width(this.spinButtonsWidth);
              this.downbutton.width(1 + this.spinButtonsWidth);
            }

            this._upArrow.height("100%");

            this._downArrow.height("100%");

            this.numberInput.css("width", d - 6);
            this.numberInput.css("margin-right", "2px");
          }

          var b = m / 2;

          if (a.jqx.browser.msie && a.jqx.browser.version < 8) {
            b = m / 4;
          }

          this.numberInput.css("padding-left", "0px");
          this.numberInput.css("padding-right", "0px");
          this.numberInput.css("padding-top", Math.round(b) + "px");
          this.numberInput.css("padding-bottom", Math.round(b) + "px");

          if (g == undefined || g == true) {
            this.numberInput.val(this._getString());

            if (this.inputMode != "advanced") {
              this._parseDecimalInSimpleMode();
            }
          }

          this._addBarAndLabel(this.numberInput);

          this._updateHint();
        },
        _addBarAndLabel: function _addBarAndLabel(e) {
          var d = this;

          if (d.bar !== null || d.label !== null) {
            return;
          }

          var b = a("<label></label");

          if (this.hint) {
            b[0].innerHTML = this.placeHolder;
          }

          b.addClass(d.toThemeProperty("jqx-input-label"));
          e.after(b);
          d.label = b;
          var c = a("<span></span>");
          e.after(c);
          c.addClass(d.toThemeProperty("jqx-input-bar"));

          if (d.spinButtons) {
            c.css("top", d.host.height());
          } else {
            c.css("top", "0px");
          }

          d.bar = c;

          if (d.template) {
            d.bar.addClass(d.toThemeProperty("jqx-" + d.template));
            d.label.addClass(d.toThemeProperty("jqx-" + d.template));
          }
        },
        destroy: function destroy() {
          this._removeHandlers();

          this.host.remove();
        },
        inputValue: function inputValue(b) {
          if (b === undefined) {
            return this._value();
          }

          this.propertyChangedHandler(this, "value", this._value, b);

          this._refreshValue();

          return this;
        },
        _value: function _value() {
          var b = this.numberInput.val();
          return b;
        },
        val: function val(c) {
          if (c !== undefined && typeof c != "object" || c === null) {
            if (c === null) {
              this.setDecimal(null);
              return;
            } else {
              var f = c;
              f = f.toString();

              if (f.indexOf(this.symbol) > -1) {
                f = f.replace(this.symbol, "");
              }

              var b = function b(l, j, k) {
                var h = l;

                if (j == k) {
                  return l;
                }

                var i = h.indexOf(j);

                while (i != -1) {
                  h = h.replace(j, k);
                  i = h.indexOf(j);
                }

                return h;
              };

              f = f.replace(this.decimalSeparator, ".");
              f = b(f, this.groupSeparator, "");
              var g = "";

              for (var d = 0; d < f.length; d++) {
                var e = f.substring(d, d + 1);

                if (e === "-") {
                  g += "-";
                }

                if (e === ".") {
                  g += ".";
                }

                if (e.match(/^[0-9]+$/) != null) {
                  g += e;
                }
              }

              f = g;
              f = f.replace(/ /g, "");
              f = new Number(f);
              this.setDecimal(f);
            }
          } else {
            return this.getDecimal();
          }
        },
        getDecimal: function getDecimal() {
          if (this.decimal == null) {
            return null;
          }

          if (this.inputMode == "simple") {
            this._parseDecimalInSimpleMode(false);

            this.decimal = this._getDecimalInSimpleMode(this.decimal);
          }

          if (this.decimal == "") {
            return 0;
          }

          var b = this.getvalue("negative");

          if (b && this.decimal > 0) {
            return -parseFloat(this.decimal);
          }

          return parseFloat(this.decimal);
        },
        setDecimal: function setDecimal(e) {
          var b = e;

          if (this.decimalSeparator != ".") {
            if (e === null) {
              this._setDecimal(e);
            } else {
              var d = e;

              if (typeof e != "number") {
                e = e.toString();
                var g = e.indexOf(".");

                if (g != -1) {
                  var c = e.substring(0, g);
                  var f = e.substring(g + 1);
                  d = c + "." + f;

                  if (c.indexOf("-") != -1) {
                    c = c.substring(1);
                  }

                  if (this.inputMode != "advanced") {
                    e = c + "." + f;
                  } else {
                    e = c + this.decimalSeparator + f;
                  }
                } else {
                  var g = e.indexOf(this.decimalSeparator);

                  if (g != -1) {
                    var c = e.substring(0, g);
                    var f = e.substring(g + 1);
                    d = c + "." + f;

                    if (c.indexOf("-") != -1) {
                      c = c.substring(1);
                    }

                    if (this.inputMode != "advanced") {
                      e = c + "." + f;
                    } else {
                      e = c + this.decimalSeparator + f;
                    }
                  }
                }
              }

              if (d < 0) {
                this.setvalue("negative", true);
              } else {
                this.setvalue("negative", false);
              }

              if (e === null) {
                this._setDecimal(e);
              } else {
                this._setDecimal(Math.abs(e));
              }
            }
          } else {
            if (e < 0) {
              this.setvalue("negative", true);
            } else {
              this.setvalue("negative", false);
            }

            if (e === null) {
              this._setDecimal(e);
            } else {
              this._setDecimal(Math.abs(e));
            }
          }

          if (b == null) {
            this.numberInput.val("");
          }

          this._updateHint();
        },
        _setDecimal: function _setDecimal(o) {
          if (!this.allowNull && o == null) {
            this.decimal = 0;
            o = 0;
          }

          if (o == null) {
            this.decimal = null;
            this.value = null;
            this.clearDecimal();

            this._refreshValue();

            this.decimal = null;
            this.value = null;
            this.ValueString = "";
            return;
          }

          if (o.toString().indexOf("e") != -1) {
            o = new Number(o).toFixed(this.decimalDigits).toString();
          }

          this.clearDecimal();
          var p = o.toString();
          var q = "";
          var b = "";
          var d = true;

          if (p.length == 0) {
            p = "0";
          }

          for (var g = 0; g < p.length; g++) {
            if (typeof o == "number") {
              if (p.substring(g, g + 1) == ".") {
                d = false;
                continue;
              }
            } else {
              if (p.substring(g, g + 1) == this.decimalSeparator) {
                d = false;
                continue;
              }
            }

            if (d) {
              q += p.substring(g, g + 1);
            } else {
              b += p.substring(g, g + 1);
            }
          }

          if (q.length > 0) {
            q = parseFloat(q).toString();
          }

          var m = this.digits;

          if (m < q.length) {
            q = q.substr(0, m);
          }

          var f = 0;

          var n = this._getSeparatorPosition();

          var l = this._getHiddenPrefixCount();

          n = n + l;

          for (var g = n; g >= 0; g--) {
            if (g < this.items.length && this.items[g].canEdit) {
              if (f < q.length) {
                this.items[g].character = q.substring(q.length - f - 1, q.length - f);
                f++;
              }
            }
          }

          f = 0;

          for (var g = n; g < this.items.length; g++) {
            if (this.items[g].canEdit) {
              if (f < b.length) {
                this.items[g].character = b.substring(f, f + 1);
                f++;
              }
            }
          }

          this._refreshValue();

          if (this.decimalSeparator == ".") {
            this.ValueString = new Number(o).toFixed(this.decimalDigits);
          } else {
            var j = o.toString().indexOf(this.decimalSeparator);

            if (j > 0) {
              var h = o.toString().substring(0, j);
              var e = h + "." + o.toString().substring(j + 1);
              this.ValueString = new Number(e).toFixed(this.decimalDigits);
            } else {
              this.ValueString = new Number(o).toFixed(this.decimalDigits);
            }
          }

          if (this.inputMode != "advanced") {
            this._parseDecimalInSimpleMode();

            this._raiseEvent(1, this.ValueString);
          }

          if (this.inputMode == "textbox") {
            this.decimal = this.ValueString;
            var c = this.getvalue("negative");

            if (c) {
              this.decimal = "-" + this.ValueString;
            }
          }

          var o = this.val();

          if (o < this.min || o > this.max) {
            this.host.addClass("jqx-input-invalid");
          } else {
            this.host.removeClass("jqx-input-invalid");
          }

          this._updateHint();
        },
        _getSeparatorPosition: function _getSeparatorPosition() {
          var b = this._getHiddenPrefixCount();

          if (this.decimalSeparatorPosition > 0) {
            return this.decimalSeparatorPosition - b;
          }

          return this.items.length - b;
        },
        _setTheme: function _setTheme() {
          this.host.removeClass();
          this.host.addClass(this.toThemeProperty("jqx-input"));
          this.host.addClass(this.toThemeProperty("jqx-rc-all"));
          this.host.addClass(this.toThemeProperty("jqx-widget"));
          this.host.addClass(this.toThemeProperty("jqx-widget-content"));
          this.host.addClass(this.toThemeProperty("jqx-numberinput"));

          if (this.spinButtons) {
            this.downbutton.removeClass();
            this.upbutton.removeClass();
            this.downbutton.addClass(this.toThemeProperty("jqx-scrollbar-button-state-normal"));
            this.upbutton.addClass(this.toThemeProperty("jqx-scrollbar-button-state-normal"));

            this._upArrow.removeClass();

            this._downArrow.removeClass();

            this._upArrow.addClass(this.toThemeProperty("jqx-icon-arrow-up"));

            this._downArrow.addClass(this.toThemeProperty("jqx-icon-arrow-down"));
          }

          this.numberInput.removeClass();
          this.numberInput.addClass(this.toThemeProperty("jqx-input-content"));
        },
        propertiesChangedHandler: function propertiesChangedHandler(d, b, c) {
          if (c && c.width && c.height && Object.keys(c).length == 2) {
            d._render();
          }
        },
        propertyChangedHandler: function propertyChangedHandler(c, e, h, g) {
          if (c.batchUpdate && c.batchUpdate.width && c.batchUpdate.height && Object.keys(c.batchUpdate).length == 2) {
            return;
          }

          if (e == "template") {
            c.upbutton.removeClass(c.toThemeProperty("jqx-" + c.template));
            c.downbutton.removeClass(c.toThemeProperty("jqx-" + c.template));
            c.upbutton.addClass(c.toThemeProperty("jqx-" + c.template));
            c.downbutton.addClass(c.toThemeProperty("jqx-" + c.template));
          }

          if (e == "digits" || e == "groupSize" || e == "decimalDigits") {
            if (g < 0) {
              throw new Exception(this.invalidArgumentExceptions[0]);
            }
          }

          if (e == "placeHolder") {
            if (!c.isMaterialized()) {
              c.numberInput.attr("placeholder", c.placeHolder);
            } else {
              if (c.hint) {
                c.label[0].innerHTML = c.placeHolder;
              }
            }
          }

          if (e === "theme") {
            a.jqx.utilities.setTheme(h, g, c.host);
          }

          if (e == "digits") {
            if (g != h) {
              c.digits = parseInt(g);
            }
          }

          if (e == "min" || e == "max") {
            a.jqx.aria(c, "aria-value" + e, g.toString());

            c._refreshValue();
          }

          if (e == "decimalDigits") {
            if (g != h) {
              c.decimalDigits = parseInt(g);
            }
          }

          if (e == "decimalSeparator" || e == "digits" || e == "symbol" || e == "symbolPosition" || e == "groupSize" || e == "groupSeparator" || e == "decimalDigits" || e == "negativeSymbol") {
            var b = c.decimal;

            if (e == "decimalSeparator" && g == "") {
              g = " ";
            }

            if (h != g) {
              var f = c._selection();

              c.items = new Array();

              c._initializeLiterals();

              c.value = c._getString();

              c._refreshValue();

              c._setDecimal(b);
            }
          }

          if (e == "rtl") {
            if (c.rtl) {
              if (c.spincontainer) {
                c.spincontainer.css("float", "right");
                c.spincontainer.css("border-right-width", "1px");
              }

              c.numberInput.css("float", "right");
            } else {
              if (c.spincontainer) {
                c.spincontainer.css("float", "right");
                c.spincontainer.css("border-right-width", "1px");
              }

              c.numberInput.css("float", "left");
            }
          }

          if (e == "spinButtons") {
            if (c.spincontainer) {
              if (!g) {
                c.spincontainer.css("display", "none");
              } else {
                c.spincontainer.css("display", "block");
              }

              c._render();
            } else {
              c._spinButtons();
            }
          }

          if (e === "touchMode") {
            c.inputMode = "textbox";
            c.spinMode = "simple";
            c.render();
          }

          if (e == "negative" && c.inputMode == "advanced") {
            var f = c._selection();

            var j = 0;

            if (g) {
              c.items[0].character = c.negativeSymbol[0];
              j = 1;
            } else {
              c.items[0].character = "";
              j = -1;
            }

            c._refreshValue();

            if (c.isInitialized) {
              c._setSelection(f.start + j, f.end + j);
            }
          }

          if (e == "decimal") {
            c.value = g;
            c.setDecimal(g);
          }

          if (e === "value") {
            c.value = g;
            c.setDecimal(g);

            c._raiseEvent(1, g);
          }

          if (e == "textAlign") {
            c.textAlign = g;

            c._render();
          }

          if (e == "disabled") {
            c.numberInput.attr("disabled", g);

            if (c.disabled) {
              c.host.addClass(c.toThemeProperty("jqx-fill-state-disabled"));
            } else {
              c.host.removeClass(c.toThemeProperty("jqx-fill-state-disabled"));
            }

            a.jqx.aria(c, "aria-disabled", g.toString());
          }

          if (e == "readOnly") {
            c.readOnly = g;
          }

          if (e == "promptChar") {
            for (var d = 0; d < c.items.length; d++) {
              if (c.items[d].character == c.promptChar) {
                c.items[d].character = g;
              }
            }

            c.promptChar = g;
          }

          if (e == "width") {
            c.width = g;

            c._render();
          } else {
            if (e == "height") {
              c.height = g;

              c._render();
            }
          }
        }
      }, _defineProperty(_a$extend, "_value", function _value() {
        var b = this.value;
        return b;
      }), _defineProperty(_a$extend, "_refreshValue", function _refreshValue() {
        var g = this.value;
        var b = 0;

        if (this.inputMode === "textbox") {
          return;
        }

        this.value = this._getString();
        g = this.value;
        var f = "";

        for (var c = 0; c < this.items.length; c++) {
          var e = this.items[c];

          if (e.canEdit && e.character != this.promptChar) {
            f += e.character;
          }

          if (c == this.decimalSeparatorPosition) {
            f += ".";
          }
        }

        this.decimal = f;
        var d = false;

        if (this.oldValue !== g) {
          this.oldValue = g;

          this._raiseEvent(0, g);

          d = true;
        }

        if (this.inputMode != "simple") {
          this.numberInput.val(g);

          if (d) {
            this._raiseEvent(1, g);
          }
        }

        if (g == null) {
          this.numberInput.val("");
        }
      }), _a$extend));
    })(jqxBaseFramework);
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/search/search.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/search/search.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style type=\"text/css\">\r\n    .register-table {\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n        .register-table td,\r\n        .register-table tr {\r\n            margin: 0px;\r\n            padding: 2px;\r\n            border-spacing: 0px;\r\n            border-collapse: collapse;\r\n            font-family: Verdana;\r\n            font-size: 12px;\r\n        }\r\n\r\n    h3 {\r\n        display: inline-block;\r\n        margin: 0px;\r\n    }\r\n</style>\r\n\r\n<div class=\"page-wrapper\">\r\n    <div class=\"page-inner\">\r\n        <script>\r\n            'use strict';\r\n            var classHolder = document.getElementsByTagName(\"BODY\")[0],\r\n                themeSettings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) : {},\r\n                themeURL = themeSettings.themeURL || '',\r\n                themeOptions = themeSettings.themeOptions || '';\r\n            if (themeSettings.themeOptions) {\r\n                classHolder.className = themeSettings.themeOptions;\r\n                console.log(\"%c✔ Theme settings loaded\", \"color: #148f32\");\r\n            }\r\n            else {\r\n                console.log(\"Heads up! Theme settings is empty or does not exist, loading default settings...\");\r\n            }\r\n            if (themeSettings.themeURL && !document.getElementById('mytheme')) {\r\n                var cssfile = document.createElement('link');\r\n                cssfile.id = 'mytheme';\r\n                cssfile.rel = 'stylesheet';\r\n                cssfile.href = themeURL;\r\n                document.getElementsByTagName('head')[0].appendChild(cssfile);\r\n            }\r\n            var saveSettings = function () {\r\n                themeSettings.themeOptions = String(classHolder.className).split(/[^\\w-]+/).filter(function (item) {\r\n                    return /^(nav|header|mod|display)-/i.test(item);\r\n                }).join(' ');\r\n                if (document.getElementById('mytheme')) {\r\n                    themeSettings.themeURL = document.getElementById('mytheme').getAttribute(\"href\");\r\n                };\r\n                localStorage.setItem('themeSettings', JSON.stringify(themeSettings));\r\n            }\r\n            var resetSettings = function () {\r\n                localStorage.setItem(\"themeSettings\", \"\");\r\n            }\r\n        </script>\r\n        <script>\r\n            function validate() {\r\n                alert('Hello World');\r\n                var forms = document.getElementsByClassName('needs-validation');\r\n                var validation = Array.prototype.filter.call(forms, function (form) {\r\n                    form.addEventListener('submit', function (event) {\r\n                        if (form.checkValidity() === false) {\r\n                            event.preventDefault();\r\n                            event.stopPropagation();\r\n                        }\r\n                        form.classList.add('was-validated');\r\n                    }, false);\r\n                });\r\n            }\r\n        </script>\r\n        <div class=\"page-content-wrapper\">\r\n            <main id=\"js-page-content\" role=\"main\" class=\"page-content\">\r\n                <ol class=\"breadcrumb page-breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">HRMS</a></li>\r\n\r\n                    <li class=\"position-absolute pos-top pos-right d-none d-sm-block\"><span class=\"js-get-date\"></span></li>\r\n                </ol>\r\n                <div class=\"subheader\">\r\n                    <h1 class=\"subheader-title\">\r\n                        <i class='subheader-icon fal fa-'></i> Page <span class='fw-300'>Control Panel</span> <sup class='badge badge-primary fw-500'>ADDON</sup>\r\n                        <small>\r\n                            Administrator\r\n                        </small>\r\n                    </h1>\r\n                    <div class=\"subheader-block\">\r\n                        Administrator\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-12\">\r\n                        <div id=\"panel-1\" class=\"panel\">\r\n\r\n                            <div class=\"panel-hdr\">\r\n                                <h2>\r\n                                    Panel <span class=\"fw-300\"><i>Title</i></span>\r\n                                </h2>\r\n                                <div class=\"panel-toolbar\">\r\n                                    <button class=\"btn btn-panel\" data-action=\"panel-collapse\" data-toggle=\"tooltip\" data-offset=\"0,10\" data-original-title=\"Collapse\"></button>\r\n                                    <button class=\"btn btn-panel\" data-action=\"panel-fullscreen\" data-toggle=\"tooltip\" data-offset=\"0,10\" data-original-title=\"Fullscreen\"></button>\r\n                                    <button class=\"btn btn-panel\" data-action=\"panel-close\" data-toggle=\"tooltip\" data-offset=\"0,10\" data-original-title=\"Close\"></button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"panel-container show\">\r\n                                <div class=\"panel-content\">\r\n                                    <div id=\"panel-5\" class=\"panel\">\r\n                                        <div class=\"panel-container color-success-200\">\r\n                                            <div class=\"register\">\r\n                                                <div id=\"acceptInput\" style=\"margin-left: 50px;\">I accept terms</div>\r\n                                                <div id=\"sendButtonInput\"></div>\r\n                                            </div>\r\n                                            <jqxExpander [width]=\"1500\" [showArrow]=\"false\" [toggleMode]=\"'none'\">\r\n                                                <div>Item Inventory</div>\r\n                                                <div>\r\n                                                    <jqxValidator #myValidator ng-model=\"myValidator\" (ngModel)=\"myValidator\" [rules]=\"rules\" [animationDuration]=\"0\" [hintType]=\"'label'\">\r\n                                                        <form #validateform id=\"validateform\" class=\"needs-validation\">\r\n                                                            <div class=\"form-row\">\r\n                                                                <div class=\"col-md-4 mb-3\">\r\n                                                                    <label class=\"form-label\" for=\"validationTooltip02\">Item Create Date <span class=\"text-danger\">*</span></label>\r\n                                                                    <jqxDateTimeInput id=\"dateTimeInput\" #dateTimeInput ng-model=\"dateTimeInput\" (ngModel)=\"dateTimeInput\" name=\"jqxDateTimeInput\">\r\n                                                                    </jqxDateTimeInput>\r\n                                                                    <div class=\"valid-tooltip color-info-50\">\r\n                                                                        Looks good!\r\n                                                                    </div>\r\n                                                                    <div class=\"invalid-tooltip red-emoticon\">\r\n                                                                        Required!\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"panel-content border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center register\">\r\n                                                                <div class=\"custom-control custom-checkbox\">\r\n                                                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"validationTooltipAgreement\" required>\r\n                                                                    <label class=\"custom-control-label\" for=\"validationTooltipAgreement\">Agree to terms and conditions <span class=\"text-danger\">*</span></label>\r\n                                                                    <div class=\"invalid-tooltip\">\r\n                                                                        You must agree before submitting.\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <input id=\"sendButton\" name=\"sendButton\" class=\"btn btn-outline-primary ml-auto icon-google-plus\" width=\"70\" value=\"add item\" type=\"button\" (click)=\"onSubmit()\" />\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </jqxValidator>\r\n                                                </div>\r\n                                                <jqxNotification #msgNotification\r\n                                                                 [width]=\"250\" [position]=\"'top-right'\" [opacity]=\"0.9\" [autoOpen]=\"false\"\r\n                                                                 [autoClose]=\"true\" [animationOpenDelay]=\"800\" [autoCloseDelay]=\"3000\" [template]=\"'error'\" [appendContainer]=\"validateform\">\r\n                                                    <div>\r\n                                                        success\r\n                                                    </div>\r\n                                                </jqxNotification>\r\n                                            </jqxExpander>\r\n                                            <br />\r\n                                            <br />\r\n                                            <hr />\r\n                                            <jqxDataTable #ItemsDataTable (onRowSelect)=\"updateRow($event)\" [width]=\"getWidth()\" [source]=\"dataAdapter\" [columns]=\"columns\"\r\n                                                          [columnsResize]=\"true\" [pageable]=\"true\" [pagerButtonsCount]=\"10\">\r\n                                            </jqxDataTable>\r\n                                            <div class=\"btn-danger\" style=\"width: 850px; margin-top: 20px; display: flex; align-content: space-around;\">\r\n                                                <jqxButton (onClick)=\"excelExport()\" [width]=\"200\">Export to Excel</jqxButton>\r\n                                                <jqxButton (onClick)=\"xmlExport()\" [width]=\"200\">Export to XML</jqxButton>\r\n                                                <jqxButton (onClick)=\"csvExport()\" [width]=\"200\">Export to CSV</jqxButton>\r\n                                                <jqxButton (onClick)=\"tsvExport()\" [width]=\"200\">Export to TSV</jqxButton>\r\n                                                <jqxButton (onClick)=\"htmlExport()\" [width]=\"200\">Export to HTML</jqxButton>\r\n                                                <jqxButton (onClick)=\"jsonExport()\" [width]=\"200\">Export to JSON</jqxButton>\r\n                                                <jqxButton (onClick)=\"pdfExport()\" [width]=\"200\">Export to PDF</jqxButton>\r\n                                                <jqxButton (onClick)=\"delete()\" [width]=\"200\">Delete</jqxButton>\r\n                                                <jqxButton (onClick)=\"update()\" [width]=\"200\">Edit</jqxButton>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"page-container\">\r\n\r\n                                \r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </main>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/views/search/search.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/views/search/search.component.ts ***!
    \**************************************************/

  /*! exports provided: SearchHomeComponent */

  /***/
  function srcAppViewsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchHomeComponent", function () {
      return SearchHomeComponent;
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


    var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/item.service */
    "./src/app/services/item.service.ts");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxvalidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxvalidator */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxvalidator.js");
    /* harmony import */


    var jqwidgets_ng_jqxnotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jqwidgets-ng/jqxnotification */
    "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxnotification.js");
    /* harmony import */


    var jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jqwidgets-ng/jqxbuttons */
    "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxbuttons.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxdatetimeinput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxdatetimeinput */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdatetimeinput.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxdatatable */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdatatable.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_services_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../core/services/token.service */
    "./src/app/core/services/token.service.ts");

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

    var SearchHomeComponent =
    /*#__PURE__*/
    function () {
      function SearchHomeComponent(formBuilder, appUserService, router, appTokenService) {
        var _this2 = this;

        _classCallCheck(this, SearchHomeComponent);

        this.formBuilder = formBuilder;
        this.appUserService = appUserService;
        this.router = router;
        this.appTokenService = appTokenService;
        this.that = this;
        this.out = false;
        this.source = {
          datatype: "json",
          datafields: [{
            name: "ItemName",
            type: "string"
          }, {
            name: "CreateDate",
            type: "string"
          }, {
            name: "Description",
            type: "string"
          }, {
            name: "IsExist",
            type: "bool"
          }, {
            name: "MaxNum",
            type: "string"
          }, {
            name: "MinNum",
            type: "string"
          }, {
            name: "CatogryId",
            type: "string"
          }],
          addRow: function addRow(_rowID, _rowData, _position, _commit) {
            _commit(true);
          },
          updateRow: function updateRow(_rowID, _rowData, _commit) {
            _commit(true);
          },
          deleteRow: function deleteRow(_rowID, _commit) {
            _commit(true);
          },
          sortcolumn: 'ItemName',
          sortdirection: 'asc',
          id: 'ItemId',
          url: "Items/List"
        };
        this.dataAdapter = new $.jqx.dataAdapter(this.source);
        this.columns = [{
          text: 'ItemName',
          datafield: 'ItemName'
        }, {
          text: 'CreateDate',
          datafield: 'CreateDate'
        }, {
          text: 'Description',
          datafield: 'Description'
        }, {
          text: 'IsExist',
          datafield: 'IsExist'
        }, {
          text: 'MaxNum',
          datafield: 'MaxNum'
        }, {
          text: 'MinNum',
          datafield: 'MinNum'
        }, {
          text: 'CatogryId',
          datafield: 'CatogryId'
        }];
        this.columngroups = [{
          text: "Inventory",
          align: "center",
          name: "Inventory"
        }];
        this.form = this.formBuilder.group({
          CreateDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("dateTimeInput", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.initialDate = new Date(2017, 8, 1);
        this.rules = [{
          input: "#dateTimeInput",
          message: "Your birth date must be between 1/1/1900 and 1/1/2050.",
          action: "valueChanged",
          rule: function rule(_input, _commit) {
            var date = _this2.dateTimeInput.value();

            var result = date.getFullYear() >= 2000 && date.getFullYear() <= 2050;
            return result;
          }
        }];
        this.notificationSettings = {
          width: 500,
          position: "center",
          opacity: 0.9,
          showCloseButton: true,
          appendContainer: "validateform",
          autoOpen: true,
          animationOpenDelay: 800,
          closeOnClick: true,
          template: "success"
        };
      }

      _createClass(SearchHomeComponent, [{
        key: "getWidth",
        value: function getWidth() {
          return window.innerWidth - 120;
        }
      }, {
        key: "excelExport",
        value: function excelExport() {
          this.ItemsDataTable.exportData('xls');
        }
      }, {
        key: "xmlExport",
        value: function xmlExport() {
          this.ItemsDataTable.exportData('xml');
        }
      }, {
        key: "csvExport",
        value: function csvExport() {
          this.ItemsDataTable.exportData('csv');
        }
      }, {
        key: "tsvExport",
        value: function tsvExport() {
          this.ItemsDataTable.exportData('tsv');
        }
      }, {
        key: "htmlExport",
        value: function htmlExport() {
          this.ItemsDataTable.exportData('html');
        }
      }, {
        key: "deleteRow",
        value: function deleteRow() {}
      }, {
        key: "updateRow",
        value: function updateRow(event) {
          var args = event.args;
          var index = args.index;
          var rowData = args.row;
          var rowKey = args.key;
          this.Id = rowKey;
          console.log(index + " " + rowData + " " + rowKey);
        }
      }, {
        key: "deleteSelectRow",
        value: function deleteSelectRow() {}
      }, {
        key: "delete",
        value: function _delete() {}
      }, {
        key: "update",
        value: function update() {
          if (this.Id == null || this.Id == rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["isEmpty"]) {
            this.onClickOpenMessageNotification();
            return;
          }

          this.appTokenService.set(this.appTokenService.get());
          this.router.navigate(["main/edit/", this.Id]);
        }
      }, {
        key: "updateSelectRow",
        value: function updateSelectRow() {}
      }, {
        key: "jsonExport",
        value: function jsonExport() {
          this.ItemsDataTable.exportData('json');
        }
      }, {
        key: "pdfExport",
        value: function pdfExport() {
          this.ItemsDataTable.exportData('pdf');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.msgNotification.createComponent(this.notificationSettings);
        }
      }, {
        key: "sendButton",
        value: function sendButton() {
          this.myValidator.validate(document.getElementById("validateform"));
          this.onSubmit();
        }
      }, {
        key: "onClickOpenMessageNotification",
        value: function onClickOpenMessageNotification() {
          this.msgNotification.open();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.appUserService.addItem(this.itemModel);
          this.onClickOpenMessageNotification();
        }
      }]);

      return SearchHomeComponent;
    }();

    SearchHomeComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["AddItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _core_services_token_service__WEBPACK_IMPORTED_MODULE_10__["AppTokenService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("submitButton", {
      "static": false
    }), __metadata("design:type", jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_5__["jqxButtonComponent"])], SearchHomeComponent.prototype, "submitButton", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("msgNotification", {
      "static": false
    }), __metadata("design:type", jqwidgets_ng_jqxnotification__WEBPACK_IMPORTED_MODULE_4__["jqxNotificationComponent"])], SearchHomeComponent.prototype, "msgNotification", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("validateform", {
      "static": false
    }), __metadata("design:type", jqwidgets_framework_jqwidgets_ng_jqxvalidator__WEBPACK_IMPORTED_MODULE_3__["jqxValidatorComponent"])], SearchHomeComponent.prototype, "validateform", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("dateTimeInput", {
      "static": false
    }), __metadata("design:type", jqwidgets_framework_jqwidgets_ng_jqxdatetimeinput__WEBPACK_IMPORTED_MODULE_6__["jqxDateTimeInputComponent"])], SearchHomeComponent.prototype, "dateTimeInput", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ItemsDataTable', {
      "static": false
    }), __metadata("design:type", jqwidgets_framework_jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_7__["jqxDataTableComponent"])], SearchHomeComponent.prototype, "ItemsDataTable", void 0);

    SearchHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: "app-search",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/search/search.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["AddItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _core_services_token_service__WEBPACK_IMPORTED_MODULE_10__["AppTokenService"]])], SearchHomeComponent);
    /***/
  },

  /***/
  "./src/app/views/search/search.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/views/search/search.module.ts ***!
    \***********************************************/

  /*! exports provided: AppSearchModule */

  /***/
  function srcAppViewsSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSearchModule", function () {
      return AppSearchModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./search.component */
    "./src/app/views/search/search.component.ts");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxdatetimeinput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxdatetimeinput */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdatetimeinput.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxvalidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxvalidator */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxvalidator.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxbuttons */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxbuttons.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxcheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxcheckbox */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxcheckbox.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxexpander__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxexpander */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxexpander.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxinput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxinput */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxinput.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxtree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxtree */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxtree.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxnotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxnotification */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxnotification.js");
    /* harmony import */


    var jqwidgets_ng_jqxdropdownbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! jqwidgets-ng/jqxdropdownbutton */
    "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdropdownbutton.js");
    /* harmony import */


    var jqwidgets_framework_jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! jqwidgets-framework/jqwidgets-ng/jqxdatatable */
    "./node_modules/jqwidgets-framework/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxdatatable.js");

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
      component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchHomeComponent"]
    }];

    var AppSearchModule = function AppSearchModule() {
      _classCallCheck(this, AppSearchModule);
    };

    AppSearchModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchHomeComponent"]],
      imports: [jqwidgets_framework_jqwidgets_ng_jqxdatetimeinput__WEBPACK_IMPORTED_MODULE_3__["jqxDateTimeInputModule"], jqwidgets_framework_jqwidgets_ng_jqxvalidator__WEBPACK_IMPORTED_MODULE_4__["jqxValidatorModule"], jqwidgets_framework_jqwidgets_ng_jqxvalidator__WEBPACK_IMPORTED_MODULE_4__["jqxValidatorModule"], jqwidgets_framework_jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_5__["jqxButtonModule"], jqwidgets_framework_jqwidgets_ng_jqxcheckbox__WEBPACK_IMPORTED_MODULE_6__["jqxCheckBoxModule"], jqwidgets_framework_jqwidgets_ng_jqxdatetimeinput__WEBPACK_IMPORTED_MODULE_3__["jqxDateTimeInputModule"], jqwidgets_framework_jqwidgets_ng_jqxexpander__WEBPACK_IMPORTED_MODULE_7__["jqxExpanderModule"], jqwidgets_framework_jqwidgets_ng_jqxinput__WEBPACK_IMPORTED_MODULE_8__["jqxInputModule"], jqwidgets_framework_jqwidgets_ng_jqxtree__WEBPACK_IMPORTED_MODULE_9__["jqxTreeModule"], jqwidgets_framework_jqwidgets_ng_jqxnotification__WEBPACK_IMPORTED_MODULE_10__["jqxNotificationModule"], jqwidgets_ng_jqxdropdownbutton__WEBPACK_IMPORTED_MODULE_11__["jqxDropDownButtonModule"], jqwidgets_framework_jqwidgets_ng_jqxdatatable__WEBPACK_IMPORTED_MODULE_12__["jqxDataTableModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
    })], AppSearchModule);
    /***/
  }
}]);
//# sourceMappingURL=views-search-search-module-es5.js.map