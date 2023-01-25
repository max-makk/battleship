"use strict";
(self["webpackChunkwebpack_js_config"] = self["webpackChunkwebpack_js_config"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Rubik-Regular.ttf */ "./src/Rubik-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Rubik-Bold.ttf */ "./src/Rubik-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Rubik';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: 'Rubik';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 700;\n}\n\n:root {\n  --gray: #d8e3e7;\n  --blue: #51c4d3;\n  --navy: #126e82;\n  --dark: #132c33;\n\n  box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n  margin: 0;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  font-family: 'Rubik', sans-serif;\n  background: var(--dark);\n  color: var(--gray);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\nh1 {\n  padding: 0.2em;\n}\n\nheader {\n  padding: 1em;\n}\n\nmain {\n  flex: 1 0 auto;\n}\n\nfooter {\n  padding: 1em;\n  flex-shrink: 0;\n}\n\n.buttons {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 1em;\n  margin-top: 1em;\n}\n\nbutton {\n  padding: 0.5em;\n  border: none;\n  border-radius: 1%;\n  background-color: var(--blue);\n  color: var(--dark);\n  font-size: inherit;\n  font-family: inherit;\n  cursor: pointer;\n  box-shadow: 2px 2px var(--gray);\n}\n\nbutton:active:not(:disabled) {\n  box-shadow: 0px 0px var(--gray);\n  transform: translate(2px, 2px);\n}\n\nbutton:disabled {\n  opacity: 0.5;\n  cursor: initial;\n}\n\n.battlefields {\n  margin-top: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: wrap-reverse;\n  gap: 1em;\n  padding: 1em;\n}\n\n.battlefield {\n  display: grid;\n  grid-template-columns: repeat(10, clamp(2.1rem, 1.7505rem + 0.9709vw, 2.6rem));\n  gap: 2px;\n  border: 2px solid var(--dark);\n}\n\n[data-xy] {\n  padding-top: 100%;\n  background-color: var(--gray);\n  cursor: pointer;\n  position: relative;\n}\n\n[data-xy]:hover {\n  background-color: var(--blue);\n}\n\n.battlefield-label {\n  padding: 1em;\n}\n\n.hit::before,\n.hit::after {\n  top: 0;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  content: \"\";\n  height: 100%;\n  width: 2px;\n  background-color: var(--gray);\n  z-index: 1;\n}\n\n.hit::before {\n  transform: rotate(45deg);\n}\n\n.hit::after {\n  transform: rotate(-45deg);\n}\n\n.miss::after {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  content: \"\";\n  background-color: var(--dark);\n  border-radius: 100%;\n  display: block;\n  width: 5px;\n  height: 5px;\n}\n\n.ship {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: var(--navy);\n}\n\n.highlight {\n  box-shadow: 0px 0px 4px 4px var(--blue);\n}\n\n.notify {\n  padding: 1em;\n  position: absolute;\n  width: 70%;\n  top: 1em;\n  left: 50%;\n  transform: translate(-50%, 0);\n  color: var(--dark);\n  background-color: var(--gray);\n  box-shadow: 4px 4px var(--blue);\n}\n\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 10;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,+DAAkD;EAClD,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,+DAA+C;EAC/C,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,eAAe;;EAEf,sBAAsB;AACxB;;AAEA;;;EAGE,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;EACvB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8EAA8E;EAC9E,QAAQ;EACR,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,MAAM;EACN,gCAAgC;EAChC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,WAAW;EACX,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;EACd,UAAU;EACV,WAAW;AACb;;AAEA;EACE,MAAM;EACN,OAAO;EACP,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,6BAA6B;EAC7B,kBAAkB;EAClB,6BAA6B;EAC7B,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,iCAAiC;EACjC,WAAW;EACX,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: 'Rubik';\n  src: url('./Rubik-Regular.ttf') format('truetype');\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: 'Rubik';\n  src: url('./Rubik-Bold.ttf') format('truetype');\n  font-weight: 700;\n}\n\n:root {\n  --gray: #d8e3e7;\n  --blue: #51c4d3;\n  --navy: #126e82;\n  --dark: #132c33;\n\n  box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n  margin: 0;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  font-family: 'Rubik', sans-serif;\n  background: var(--dark);\n  color: var(--gray);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\nh1 {\n  padding: 0.2em;\n}\n\nheader {\n  padding: 1em;\n}\n\nmain {\n  flex: 1 0 auto;\n}\n\nfooter {\n  padding: 1em;\n  flex-shrink: 0;\n}\n\n.buttons {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 1em;\n  margin-top: 1em;\n}\n\nbutton {\n  padding: 0.5em;\n  border: none;\n  border-radius: 1%;\n  background-color: var(--blue);\n  color: var(--dark);\n  font-size: inherit;\n  font-family: inherit;\n  cursor: pointer;\n  box-shadow: 2px 2px var(--gray);\n}\n\nbutton:active:not(:disabled) {\n  box-shadow: 0px 0px var(--gray);\n  transform: translate(2px, 2px);\n}\n\nbutton:disabled {\n  opacity: 0.5;\n  cursor: initial;\n}\n\n.battlefields {\n  margin-top: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: wrap-reverse;\n  gap: 1em;\n  padding: 1em;\n}\n\n.battlefield {\n  display: grid;\n  grid-template-columns: repeat(10, clamp(2.1rem, 1.7505rem + 0.9709vw, 2.6rem));\n  gap: 2px;\n  border: 2px solid var(--dark);\n}\n\n[data-xy] {\n  padding-top: 100%;\n  background-color: var(--gray);\n  cursor: pointer;\n  position: relative;\n}\n\n[data-xy]:hover {\n  background-color: var(--blue);\n}\n\n.battlefield-label {\n  padding: 1em;\n}\n\n.hit::before,\n.hit::after {\n  top: 0;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  content: \"\";\n  height: 100%;\n  width: 2px;\n  background-color: var(--gray);\n  z-index: 1;\n}\n\n.hit::before {\n  transform: rotate(45deg);\n}\n\n.hit::after {\n  transform: rotate(-45deg);\n}\n\n.miss::after {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  content: \"\";\n  background-color: var(--dark);\n  border-radius: 100%;\n  display: block;\n  width: 5px;\n  height: 5px;\n}\n\n.ship {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: var(--navy);\n}\n\n.highlight {\n  box-shadow: 0px 0px 4px 4px var(--blue);\n}\n\n.notify {\n  padding: 1em;\n  position: absolute;\n  width: 70%;\n  top: 1em;\n  left: 50%;\n  transform: translate(-50%, 0);\n  color: var(--dark);\n  background-color: var(--gray);\n  box-shadow: 4px 4px var(--blue);\n}\n\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 10;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



class Controller {

  static removeElementArray(arr, [x, y]) {
    return arr.filter(i => i[0] !== x || i[1] !== y)
  }

  static coords = () => {
    const arr = []
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arr.push([i, j])
      }
    }
    return arr
  }

  static shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  constructor(player, bot) {
    this.player = player
    this.bot = bot
    this.opponent = {}
    this.randomCoords = []
    this.coordsAroundHit = []
    this.clickHandler = this.attack.bind(this)
    this.resetCurrentShip()
  }

  init() {
    this.opponent = Math.random() > 0.5 ? this.player : this.bot

    this.bot.field.addEventListener('click', this.clickHandler)

    this.randomCoords = Controller.shuffle(Controller.coords())
    this.coordsAroundHit = []

    if (this.opponent === this.player) {
      _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].toggleOverlay()
      setTimeout(() => {
        this.attack()
        _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].toggleOverlay()
      }, 500)
    }

    this.opponent.field.parentElement.classList.add('highlight')
  }

  getCoordsForShot() {
    const c = this.coordsAroundHit.length > 0 ? this.coordsAroundHit.pop() : this.randomCoords.pop()
    this.removeCoordsFromArrays(c)
    return c
  }

  attack(e) {
    let x
    let y
    if (e !== undefined) {
      if (this.opponent === this.player) return
      if (!e.target.getAttribute('data-xy')) return
      [x, y] = e.target.getAttribute('data-xy').split('').map(i => Number(i))
    } else {
      [x, y] = this.getCoordsForShot()
    }

    const c = this.opponent.matrix[x][y]

    if (c === 0) {
      this.miss(x, y)
    } else if (c === 1) {
      this.hit(x, y)
    }
  }

  miss(x, y) {
    this.opponent.field.parentElement.classList.remove('highlight')
    this.opponent.matrix[x][y] = 3
    this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).classList.add('miss')
    if (this.opponent === this.bot) {
      this.opponent = this.player
      _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].toggleOverlay()
      setTimeout(() => {
        this.attack()
        _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].toggleOverlay()
      }, 500)
    } else {
      this.opponent = this.bot
    }
    this.opponent.field.parentElement.classList.add('highlight')
  }

  hit(x, y) {
    this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).classList.add('hit')
    this.opponent.matrix[x][y] = 4

    this.isSunk(x, y)

    if (Object.keys(this.opponent.ships).length === 0) {
      this.stopListening()
      if (this.opponent === this.player) {
        _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].notify('Game over. You lose.')
        for (let name in this.bot.ships) {
          const ship = this.bot.ships[name]
          _Ship__WEBPACK_IMPORTED_MODULE_0__["default"].drawShip(this.bot.field, ship.arrDecks)
        }
      } else {
        _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].notify('Game over. Congratulations, you won!')
      }
      this.opponent.field.parentElement.classList.remove('highlight')
    } else if (this.opponent === this.player) {
      _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].toggleOverlay()
      this.currentShip.hits++
      let coords = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
      ]

      this.setCoordsAroundHit(x, y, coords)

      setTimeout(() => {
        this.attack()
        _DOM__WEBPACK_IMPORTED_MODULE_1__["default"].toggleOverlay()
      }, 500)
    }

    if (this.opponent === this.bot) {
      const div = document.createElement('div')
      div.classList.add('ship')
      this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).append(div)
    }
    let coords = [
      [x - 1, y - 1],
      [x - 1, y + 1],
      [x + 1, y - 1],
      [x + 1, y + 1]
    ]
    this.markEmptyCell(coords)
  }

  isSunk(x, y) {
    iter: for (let name in this.opponent.ships) {
      const ship = this.opponent.ships[name]
      for (let c of ship.arrDecks) {
        if (c[0] !== x || c[1] !== y) continue
        ship.hits++
        if (ship.hits < ship.arrDecks.length) break iter
        if (this.opponent === this.player) {
          this.resetCurrentShip()
        }
        this.markEmptyCellsAroundShip(ship)
        delete this.opponent.ships[name]
        break iter
      }
    }
  }

  removeCoordsFromArrays(coords) {
    if (this.coordsAroundHit.length > 0) {
      this.coordsAroundHit = Controller.removeElementArray(this.coordsAroundHit, coords)
    }
    this.randomCoords = Controller.removeElementArray(this.randomCoords, coords)
  }

  resetCurrentShip() {
    this.currentShip = {
      hits: 0,
      firstHit: [],
      h: 0,
      v: 0
    }
  }

  setCoordsAroundHit(x, y, coords) {
    let { firstHit, h, v } = this.currentShip

    if (firstHit.length === 0) {
      this.currentShip.firstHit = [x, y]
    } else if (h === 0 && v === 0) {
      this.currentShip.h = (Math.abs(firstHit[0] - x) === 1) ? 1 : 0
      this.currentShip.v = (Math.abs(firstHit[1] - y) === 1) ? 1 : 0
    }

    for (let coord of coords) {
      x = coord[0]
      y = coord[1]
      if (x < 0 || x > 9 || y < 0 || y > 9) continue
      if (this.player.matrix[x][y] !== 0 && this.player.matrix[x][y] !== 1) continue
      this.coordsAroundHit.push([x, y])
    }
  }

  markEmptyCellsAroundShip(ship) {
    const { hits, h, v, x, y } = ship
    let coords
    if (ship.hits === 1) {
      coords = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
      ]
    } else {
      coords = [
        [x - h, y - v],
        [x + h * hits, y + v * hits]
      ]
    }
    this.markEmptyCell(coords)
  }

  markEmptyCell(coords) {
    let x, y
    for (let coord of coords) {
      x = coord[0]
      y = coord[1]
      if (x < 0 || x > 9 || y < 0 || y > 9) continue
      if (this.opponent.matrix[x][y] === 2 || this.opponent.matrix[x][y] === 3) continue
      this.opponent.matrix[x][y] = 2
      if (this.opponent === this.player) {
        this.removeCoordsFromArrays(coord)
      }
      this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).classList.add('miss')
    }
  }

  stopListening() {
    this.bot.field.removeEventListener('click', this.clickHandler)
  }

}


/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Placement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Placement */ "./src/Placement.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller */ "./src/Controller.js");





class DOM {

  static createDOM(tag, text, classes) {
    const newElement = document.createElement(tag)
    if (text) {
      newElement.textContent = text
    }
    if (classes.length > 0) {
      classes.forEach(el => newElement.classList.add(el))
    }
    return newElement
  }

  static createCells(field) {
    for (let i = 0; i < 100; i++) {
      const str = String(i).padStart(2, '0')
      const div = document.createElement('div')
      div.setAttribute('data-xy', str)
      field.append(div)
    }
  }

  static toggleOverlay() {
    if (document.querySelector('.overlay')) {
      document.querySelector('.overlay').remove()
    } else {
      const div = document.createElement('div')
      div.classList.add('overlay')
      document.body.append(div)
    }
  }

  static notify(str = '...') {
    const div = document.createElement('div')
    div.classList.add('notify')
    div.textContent = str
    document.body.append(div)
  }

  static hideNotify() {
    if (document.querySelector('.notify')) {
      document.querySelector('.notify').remove()
    }
  }

  static clearField() {
    document.querySelectorAll('.ship').forEach(el => el.remove())
    document.querySelectorAll('.hit').forEach(el => el.classList.remove('hit'))
    document.querySelectorAll('.miss').forEach(el => el.classList.remove('miss'))
  }

  static removeHighlight() {
    if (document.querySelector('.highlight')) {
      document.querySelector('.highlight').classList.remove('highlight')
    }
  }

  constructor() {
    this.btnPlay = null
    this.btnRematch = null
    this.btnRandom = null

    this.player = null
    this.bot = null

    this.controller = null
  }

  run() {
    const header = DOM.createDOM('header', false, [])
    const h1 = DOM.createDOM('h1', '....battleship....', [])
    header.append(h1)
    const main = DOM.createDOM('main', false, [])
    const buttons = DOM.createDOM('div', false, ['buttons'])
    this.btnRandom = DOM.createDOM('button', 'Randomise', ['random'])
    this.btnPlay = DOM.createDOM('button', 'Play', ['play'])
    this.btnRematch = DOM.createDOM('button', 'Rematch', ['rematch'])
    this.btnRematch.disabled = true
    buttons.append(this.btnRandom)
    buttons.append(this.btnPlay)
    buttons.append(this.btnRematch)
    main.append(buttons)
    const battlefields = DOM.createDOM('div', false, ['battlefields'])
    const selfWrapper = DOM.createDOM('div', false, ['wrapper'])
    const rivalWrapper = DOM.createDOM('div', false, ['wrapper'])
    const selfField = DOM.createDOM('div', false, ['battlefield-self', 'battlefield'])
    const rivalField = DOM.createDOM('div', false, ['battlefield-rival', 'battlefield'])
    const selfLabel = DOM.createDOM('div', 'Your Grid', ['battlefield-label'])
    const rivalLabel = DOM.createDOM('div', 'Opponent\'s grid', ['battlefield-label'])
    selfWrapper.append(selfField)
    rivalWrapper.append(rivalField)
    selfWrapper.append(selfLabel)
    rivalWrapper.append(rivalLabel)
    battlefields.append(selfWrapper)
    battlefields.append(rivalWrapper)
    main.append(battlefields)
    const footer = DOM.createDOM('footer',
      'Click on a ship to switch direction. Drag and Drop the ships.',
      []
    )
    document.body.append(header)
    document.body.append(main)
    document.body.append(footer)

    DOM.createCells(selfField)
    DOM.createCells(rivalField)

    this.initGame(selfField, rivalField)
  }

  initGame(playerField, botField) {
    this.player = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](playerField)
    this.bot = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](botField)
    new _Placement__WEBPACK_IMPORTED_MODULE_1__["default"](this.player)
    this.player.cleanBoard()
    if (_Storage__WEBPACK_IMPORTED_MODULE_2__["default"].check()) {
      this.player.placeShips()
    } else {
      _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].storeDefaultShips()
      this.player.placeShips()
    }

    this.bot.cleanBoard()
    this.bot.randomPlaceShips()

    this.controller = new _Controller__WEBPACK_IMPORTED_MODULE_3__["default"](this.player, this.bot)

    this.btnRematch.addEventListener('click', this.resetGame.bind(this, false))
    this.btnRandom.addEventListener('click', this.resetGame.bind(this, true))
    this.btnPlay.addEventListener('click', this.startGame.bind(this))
  }

  startGame() {
    if (_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].isGameStarted === true) {
      return
    }
    _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].isGameStarted = true
    this.btnRematch.disabled = false
    this.btnPlay.disabled = true
    this.controller.init()
  }

  resetGame(isRandom) {
    _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"].isGameStarted = false
    this.btnRematch.disabled = true
    this.btnPlay.disabled = false
    this.controller.stopListening()
    DOM.hideNotify()
    DOM.clearField()
    this.player.cleanBoard()
    if (isRandom) {
      this.player.randomPlaceShips()
      this.player.saveShips()
    } else {
      this.player.placeShips()
    }
    this.bot.cleanBoard()
    this.bot.randomPlaceShips()
    DOM.removeHighlight()
  }

}


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");



class Gameboard {

  static isGameStarted = false

  static SHIP_DATA = {
    fourdeck: [1, 4],
    tripledeck: [2, 3],
    doubledeck: [3, 2],
    singledeck: [4, 1],
  }

  static createMatrix() {
    return [...Array(10)].map(() => Array(10).fill(0))
  }

  static getRandom = n => Math.floor(Math.random() * (n + 1))

  constructor(field) {
    this.field = field
    this.ships = {}
    this.matrix = []
  }

  cleanBoard() {
    this.ships = {}
    this.matrix = Gameboard.createMatrix()
  }

  randomPlaceShips() {
    for (let type in Gameboard.SHIP_DATA) {
      let count = Gameboard.SHIP_DATA[type][0]
      let decks = Gameboard.SHIP_DATA[type][1]

      for (let i = 0; i < count; i++) {
        let options = this.getCoords(decks)
        options.decks = decks
        options.shipname = type + String(i + 1)
        const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](this, options)
        ship.createShip()
        if (this.field.classList[0] === 'battlefield-self') {
          _Ship__WEBPACK_IMPORTED_MODULE_0__["default"].drawShip(this.field, ship.arrDecks, ship.shipname)
        }
      }
    }
  }

  saveShips() {
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].store(Object.assign({}, this.ships))
  }

  placeShips() {
    const savedShips = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].check()
    for (let name of Object.keys(savedShips)) {
      const data = savedShips[name]
      const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](this, { ...data, decks: data.arrDecks.length, shipname: name })
      ship.createShip()
      _Ship__WEBPACK_IMPORTED_MODULE_0__["default"].drawShip(this.field, ship.arrDecks, ship.shipname)
    }
  }

  getCoords(decks) {
    let h = Gameboard.getRandom(1)
    let v = (h === 0) ? 1 : 0
    let x = undefined
    let y = undefined

    if (h === 0) {
      x = Gameboard.getRandom(9)
      y = Gameboard.getRandom(10 - decks)
    } else {
      x = Gameboard.getRandom(10 - decks)
      y = Gameboard.getRandom(9)
    }

    const obj = { x, y, h, v }
    const result = this.validateBattlefield(obj, decks)

    if (!result) return this.getCoords(decks)
    return obj
  }

  validateBattlefield(obj, decks) {
    let { x, y, h, v } = obj

    if (h === 0 && ((y + decks) > 10)) return false
    else if (v === 0 && ((x + decks) > 10)) return false

    let dir = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 0], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ]
    for (let i = 0; i < decks; i++) {
      if(i === 1) {
        if(h === 0) {
          dir = [
            [-1, 1], [0, 1], [1, 1]
          ]
        } else {
          dir = [
            [1, -1], [1, 0], [1, 1]
          ]
        }
      }
      for (let s = 0; s < dir.length; s++) {
        const j = (x + i * h) + dir[s][0]
        const k = (y + i * v) + dir[s][1]
        if (j >= 0 && j < 10 &&
          k >= 0 && k < 10 &&
          this.matrix[j][k] === 1) {
          return false
        }
      }
    }
    return true
  }
}



/***/ }),

/***/ "./src/Placement.js":
/*!**************************!*\
  !*** ./src/Placement.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Placement)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");



class Placement {

  constructor(board) {
    this.board = board
    this.isDragged = false
    this.oldShip = {}
    document.addEventListener('dragstart', this.dragStart.bind(this))
    document.addEventListener('mouseup', this.dragEnd.bind(this))
    document.addEventListener('click', this.rotateShip.bind(this))
  }

  dragStart(e) {
    if (_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].isGameStarted) return
    if (this.board.isGameStarted) return
    if (!e.target.classList || e.target.classList[0] !== 'ship') return
    this.isDragged = true
    this.removeShip(e.target.getAttribute('data-name'))
  }

  dragEnd(e) {
    if (_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].isGameStarted) return
    if (!this.isDragged) return
    this.isDragged = false
    const str = e.target.getAttribute('data-xy')
    if (!str || !e.target.closest('.battlefield-self')) {
      this.restoreShip()
      return
    }
    const [x, y] = str.split('').map(i => Number(i))
    const obj = { x, y, h: this.oldShip.h, v: this.oldShip.v }
    const result = this.board.validateBattlefield(obj, this.oldShip.decks)
    if (result) {
      obj.shipname = this.oldShip.shipname
      obj.decks = this.oldShip.decks
      const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](this.board, obj)
      ship.createShip()
      _Ship__WEBPACK_IMPORTED_MODULE_0__["default"].drawShip(ship.board.field, ship.arrDecks, ship.shipname)
    } else {
      this.restoreShip()
    }
    this.board.saveShips()
  }

  rotateShip(e) {
    if (_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].isGameStarted) return
    if (e.target.classList[0] !== 'ship') return
    this.removeShip(e.target.getAttribute('data-name'))
    const obj = { ...this.oldShip, h: (this.oldShip.h === 0) ? 1 : 0, v: (this.oldShip.v === 0) ? 1 : 0 }
    const result = this.board.validateBattlefield(obj, this.oldShip.decks)
    if (result) {
      const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](this.board, obj)
      ship.createShip()
      _Ship__WEBPACK_IMPORTED_MODULE_0__["default"].drawShip(ship.board.field, ship.arrDecks, ship.shipname)
    } else {
      const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](this.board, this.oldShip)
      ship.createShip()
      _Ship__WEBPACK_IMPORTED_MODULE_0__["default"].drawShip(ship.board.field, ship.arrDecks, ship.shipname)
    }
    this.board.saveShips()
  }

  removeShip(el) {
    const obj = this.board.ships[el]
    this.oldShip = {
      y: obj.y,
      x: obj.x,
      v: obj.v,
      h: obj.h,
      decks: obj.arrDecks.length,
      shipname: el
    }
    document.querySelectorAll(`[data-name=${el}]`).forEach(i => i.remove())
    for (let i of obj.arrDecks) {
      const [x, y] = i
      this.board.matrix[x][y] = 0
    }
    delete this.board.ships[el]
  }

  restoreShip() {
    const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](this.board, this.oldShip)
    ship.createShip()
    _Ship__WEBPACK_IMPORTED_MODULE_0__["default"].drawShip(ship.board.field, ship.arrDecks, ship.shipname)
  }
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {

  static drawShip(field, arr, name) {
    arr.forEach(el => {
      const pos = el.join('')
      const c = field.querySelector(`[data-xy='${pos}']`)
      const ship = document.createElement('div')
      ship.classList.add('ship')
      ship.setAttribute('data-name', name)
      c.append(ship)
    })
  }

  constructor(board, { x, y, h, v, decks, shipname }) {
    this.board = board
    this.shipname = shipname
    this.decks = decks
    this.x = x
    this.y = y
    this.h = h
    this.v = v
    this.hits = 0
    this.arrDecks = []
  }

  createShip() {
    let { board, shipname, decks, x, y, h, v, hits, arrDecks, k = 0 } = this

    while (k < decks) {
      let i = x + k * h, j = y + k * v
      board.matrix[i][j] = 1
      arrDecks.push([i, j])
      k++
    }

    board.ships[shipname] = { arrDecks, hits, x, y, h, v }
  }

}


/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
  static check() {
    return JSON.parse(localStorage.getItem('battleship-ships'))
  }

  static store(items) {
    localStorage.setItem('battleship-ships', JSON.stringify(items))
  }

  static storeDefaultShips() {
    localStorage.setItem('battleship-ships', JSON.stringify(data))
  }
}

const data = {
  singledeck2: { arrDecks: [[4, 6]], hits: 0, x: 5, y: 6, h: 1, v: 0 },
  singledeck3: { arrDecks: [[3, 8]], hits: 0, x: 3, y: 8, h: 1, v: 0 },
  tripledeck2: { arrDecks: [[7, 0], [8, 0], [9, 0]], hits: 0, x: 7, y: 0, h: 1, v: 0 },
  singledeck1: { arrDecks: [[1, 8]], hits: 0, x: 1, y: 8, h: 0, v: 1 }, 
  tripledeck1: { arrDecks: [[0, 0], [1, 0], [2, 0]], hits: 0, x: 0, y: 0, h: 1, v: 0 }, 
  doubledeck1: { arrDecks: [[4, 0], [5, 0]], hits: 0, x: 4, y: 0, h: 1, v: 0 }, 
  singledeck4: { arrDecks: [[8, 7]], hits: 0, x: 8, y: 7, h: 0, v: 1 },
  doubledeck2: { arrDecks: [[0, 2], [1, 2]], hits: 0, x: 0, y: 2, h: 1, v: 0 }, 
  fourdeck1: { arrDecks: [[3, 2], [4, 2], [5, 2], [6, 2]], hits: 0, x: 3, y: 2, h: 1, v: 0 }, 
  doubledeck3: { arrDecks: [[8, 2], [9, 2]], hits: 0, x: 8, y: 2, h: 1, v: 0 }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



const dom = new _DOM__WEBPACK_IMPORTED_MODULE_1__["default"]()

dom.run()


/***/ }),

/***/ "./src/Rubik-Bold.ttf":
/*!****************************!*\
  !*** ./src/Rubik-Bold.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b24c64f715ba25a6e7f5.ttf";

/***/ }),

/***/ "./src/Rubik-Regular.ttf":
/*!*******************************!*\
  !*** ./src/Rubik-Regular.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "705a89f52bdf93b960ed.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsNkdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELHlCQUF5Qiw0RUFBNEUscUJBQXFCLEdBQUcsZ0JBQWdCLHlCQUF5Qiw0RUFBNEUscUJBQXFCLEdBQUcsV0FBVyxvQkFBb0Isb0JBQW9CLG9CQUFvQixvQkFBb0IsNkJBQTZCLEdBQUcsOEJBQThCLHdCQUF3QixjQUFjLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUscUNBQXFDLDRCQUE0Qix1QkFBdUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFlBQVksaUJBQWlCLEdBQUcsVUFBVSxtQkFBbUIsR0FBRyxZQUFZLGlCQUFpQixtQkFBbUIsR0FBRyxjQUFjLGtCQUFrQixvQkFBb0Isd0JBQXdCLDRCQUE0QixhQUFhLG9CQUFvQixHQUFHLFlBQVksbUJBQW1CLGlCQUFpQixzQkFBc0Isa0NBQWtDLHVCQUF1Qix1QkFBdUIseUJBQXlCLG9CQUFvQixvQ0FBb0MsR0FBRyxrQ0FBa0Msb0NBQW9DLG1DQUFtQyxHQUFHLHFCQUFxQixpQkFBaUIsb0JBQW9CLEdBQUcsbUJBQW1CLG9CQUFvQixrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsYUFBYSxpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLG1GQUFtRixhQUFhLGtDQUFrQyxHQUFHLGVBQWUsc0JBQXNCLGtDQUFrQyxvQkFBb0IsdUJBQXVCLEdBQUcscUJBQXFCLGtDQUFrQyxHQUFHLHdCQUF3QixpQkFBaUIsR0FBRyxnQ0FBZ0MsV0FBVyxxQ0FBcUMsdUJBQXVCLGtCQUFrQixpQkFBaUIsZUFBZSxrQ0FBa0MsZUFBZSxHQUFHLGtCQUFrQiw2QkFBNkIsR0FBRyxpQkFBaUIsOEJBQThCLEdBQUcsa0JBQWtCLGFBQWEsY0FBYyxxQ0FBcUMsdUJBQXVCLGtCQUFrQixrQ0FBa0Msd0JBQXdCLG1CQUFtQixlQUFlLGdCQUFnQixHQUFHLFdBQVcsV0FBVyxZQUFZLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGtDQUFrQyxHQUFHLGdCQUFnQiw0Q0FBNEMsR0FBRyxhQUFhLGlCQUFpQix1QkFBdUIsZUFBZSxhQUFhLGNBQWMsa0NBQWtDLHVCQUF1QixrQ0FBa0Msb0NBQW9DLEdBQUcsY0FBYyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixXQUFXLFlBQVksYUFBYSxjQUFjLHNDQUFzQyxnQkFBZ0Isb0JBQW9CLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsc0NBQXNDLHlCQUF5Qix1REFBdUQscUJBQXFCLEdBQUcsZ0JBQWdCLHlCQUF5QixvREFBb0QscUJBQXFCLEdBQUcsV0FBVyxvQkFBb0Isb0JBQW9CLG9CQUFvQixvQkFBb0IsNkJBQTZCLEdBQUcsOEJBQThCLHdCQUF3QixjQUFjLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUscUNBQXFDLDRCQUE0Qix1QkFBdUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFlBQVksaUJBQWlCLEdBQUcsVUFBVSxtQkFBbUIsR0FBRyxZQUFZLGlCQUFpQixtQkFBbUIsR0FBRyxjQUFjLGtCQUFrQixvQkFBb0Isd0JBQXdCLDRCQUE0QixhQUFhLG9CQUFvQixHQUFHLFlBQVksbUJBQW1CLGlCQUFpQixzQkFBc0Isa0NBQWtDLHVCQUF1Qix1QkFBdUIseUJBQXlCLG9CQUFvQixvQ0FBb0MsR0FBRyxrQ0FBa0Msb0NBQW9DLG1DQUFtQyxHQUFHLHFCQUFxQixpQkFBaUIsb0JBQW9CLEdBQUcsbUJBQW1CLG9CQUFvQixrQkFBa0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsYUFBYSxpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLG1GQUFtRixhQUFhLGtDQUFrQyxHQUFHLGVBQWUsc0JBQXNCLGtDQUFrQyxvQkFBb0IsdUJBQXVCLEdBQUcscUJBQXFCLGtDQUFrQyxHQUFHLHdCQUF3QixpQkFBaUIsR0FBRyxnQ0FBZ0MsV0FBVyxxQ0FBcUMsdUJBQXVCLGtCQUFrQixpQkFBaUIsZUFBZSxrQ0FBa0MsZUFBZSxHQUFHLGtCQUFrQiw2QkFBNkIsR0FBRyxpQkFBaUIsOEJBQThCLEdBQUcsa0JBQWtCLGFBQWEsY0FBYyxxQ0FBcUMsdUJBQXVCLGtCQUFrQixrQ0FBa0Msd0JBQXdCLG1CQUFtQixlQUFlLGdCQUFnQixHQUFHLFdBQVcsV0FBVyxZQUFZLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGtDQUFrQyxHQUFHLGdCQUFnQiw0Q0FBNEMsR0FBRyxhQUFhLGlCQUFpQix1QkFBdUIsZUFBZSxhQUFhLGNBQWMsa0NBQWtDLHVCQUF1QixrQ0FBa0Msb0NBQW9DLEdBQUcsY0FBYyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixXQUFXLFlBQVksYUFBYSxjQUFjLHNDQUFzQyxnQkFBZ0Isb0JBQW9CLEdBQUcscUJBQXFCO0FBQzFuUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5QjtBQUNGOztBQUVSOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwwREFBaUI7QUFDdkI7QUFDQTtBQUNBLFFBQVEsMERBQWlCO0FBQ3pCLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsV0FBVztBQUM5RDtBQUNBO0FBQ0EsTUFBTSwwREFBaUI7QUFDdkI7QUFDQTtBQUNBLFFBQVEsMERBQWlCO0FBQ3pCLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsV0FBVztBQUM5RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFVO0FBQ2xCO0FBQ0E7QUFDQSxVQUFVLHNEQUFhO0FBQ3ZCO0FBQ0EsUUFBUTtBQUNSLFFBQVEsbURBQVU7QUFDbEI7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNLDBEQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwwREFBaUI7QUFDekIsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxXQUFXO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsaUJBQWlCOztBQUUzQjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFdBQVc7QUFDaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUG1DO0FBQ0E7QUFDSjtBQUNNOztBQUV0Qjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGtEQUFTO0FBQy9CLG1CQUFtQixrREFBUztBQUM1QixRQUFRLGtEQUFTO0FBQ2pCO0FBQ0EsUUFBUSxzREFBYTtBQUNyQjtBQUNBLE1BQU07QUFDTixNQUFNLGtFQUF5QjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLG1EQUFVOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsZ0VBQXVCO0FBQy9CO0FBQ0E7QUFDQSxJQUFJLGdFQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksZ0VBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEt5QjtBQUNNOztBQUVoQjs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFdBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUFJO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLHNEQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBYSxpQkFBaUI7QUFDbEM7O0FBRUE7QUFDQSx1QkFBdUIsc0RBQWE7QUFDcEM7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBSSxTQUFTLHNEQUFzRDtBQUMxRjtBQUNBLE1BQU0sc0RBQWE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsYUFBYTs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIeUI7QUFDVTs7QUFFcEI7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsZ0VBQXVCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGdFQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0EsTUFBTSxzREFBYTtBQUNuQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGdFQUF1QjtBQUMvQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQUk7QUFDM0I7QUFDQSxNQUFNLHNEQUFhO0FBQ25CLE1BQU07QUFDTix1QkFBdUIsNkNBQUk7QUFDM0I7QUFDQSxNQUFNLHNEQUFhO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxHQUFHO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBLElBQUksc0RBQWE7QUFDakI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkZlOztBQUVmO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDREQUE0RDs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixxREFBcUQ7QUFDdEUsaUJBQWlCLHFEQUFxRDtBQUN0RSxpQkFBaUIscUVBQXFFO0FBQ3RGLGlCQUFpQixxREFBcUQ7QUFDdEUsaUJBQWlCLHFFQUFxRTtBQUN0RixpQkFBaUIsNkRBQTZEO0FBQzlFLGlCQUFpQixxREFBcUQ7QUFDdEUsaUJBQWlCLDZEQUE2RDtBQUM5RSxlQUFlLDZFQUE2RTtBQUM1RixpQkFBaUI7QUFDakI7Ozs7Ozs7Ozs7Ozs7O0FDekJvQjtBQUNHOztBQUV2QixnQkFBZ0IsNENBQUc7O0FBRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1qcy1jb25maWcvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stanMtY29uZmlnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWpzLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qcy1jb25maWcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWpzLWNvbmZpZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWpzLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWpzLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qcy1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qcy1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qcy1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWpzLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stanMtY29uZmlnLy4vc3JjL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qcy1jb25maWcvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYnBhY2stanMtY29uZmlnLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWpzLWNvbmZpZy8uL3NyYy9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1qcy1jb25maWcvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWpzLWNvbmZpZy8uL3NyYy9TdG9yYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stanMtY29uZmlnLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1J1YmlrLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9SdWJpay1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1ncmF5OiAjZDhlM2U3O1xcbiAgLS1ibHVlOiAjNTFjNGQzO1xcbiAgLS1uYXZ5OiAjMTI2ZTgyO1xcbiAgLS1kYXJrOiAjMTMyYzMzO1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oMSB7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDElO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggdmFyKC0tZ3JheSk7XFxufVxcblxcbmJ1dHRvbjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCB2YXIoLS1ncmF5KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogaW5pdGlhbDtcXG59XFxuXFxuLmJhdHRsZWZpZWxkcyB7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICBnYXA6IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmJhdHRsZWZpZWxkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgY2xhbXAoMi4xcmVtLCAxLjc1MDVyZW0gKyAwLjk3MDl2dywgMi42cmVtKSk7XFxuICBnYXA6IDJweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmspO1xcbn1cXG5cXG5bZGF0YS14eV0ge1xcbiAgcGFkZGluZy10b3A6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuW2RhdGEteHldOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uYmF0dGxlZmllbGQtbGFiZWwge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUsXFxuLmhpdDo6YWZ0ZXIge1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5taXNzOjphZnRlciB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggNHB4IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4ubm90aWZ5IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3MCU7XFxuICB0b3A6IDFlbTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLCtEQUFrRDtFQUNsRCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsK0RBQStDO0VBQy9DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7O0VBRWYsc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEVBQThFO0VBQzlFLFFBQVE7RUFDUiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsTUFBTTtFQUNOLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLE1BQU07RUFDTixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxuICBzcmM6IHVybCgnLi9SdWJpay1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxuICBzcmM6IHVybCgnLi9SdWJpay1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZ3JheTogI2Q4ZTNlNztcXG4gIC0tYmx1ZTogIzUxYzRkMztcXG4gIC0tbmF2eTogIzEyNmU4MjtcXG4gIC0tZGFyazogIzEzMmMzMztcXG5cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyayk7XFxuICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaDEge1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAycHggMnB4IHZhcigtLWdyYXkpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggdmFyKC0tZ3JheSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGluaXRpYWw7XFxufVxcblxcbi5iYXR0bGVmaWVsZHMge1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgZ2FwOiAxZW07XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5iYXR0bGVmaWVsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIGNsYW1wKDIuMXJlbSwgMS43NTA1cmVtICsgMC45NzA5dncsIDIuNnJlbSkpO1xcbiAgZ2FwOiAycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG59XFxuXFxuW2RhdGEteHldIHtcXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbltkYXRhLXh5XTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmJhdHRsZWZpZWxkLWxhYmVsIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlLFxcbi5oaXQ6OmFmdGVyIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uaGl0OjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4ubWlzczo6YWZ0ZXIge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcblxcbi5zaGlwIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDRweCB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLm5vdGlmeSB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNzAlO1xcbiAgdG9wOiAxZW07XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICB6LWluZGV4OiAxMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIlxuaW1wb3J0IERPTSBmcm9tIFwiLi9ET01cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcblxuICBzdGF0aWMgcmVtb3ZlRWxlbWVudEFycmF5KGFyciwgW3gsIHldKSB7XG4gICAgcmV0dXJuIGFyci5maWx0ZXIoaSA9PiBpWzBdICE9PSB4IHx8IGlbMV0gIT09IHkpXG4gIH1cblxuICBzdGF0aWMgY29vcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFyciA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgYXJyLnB1c2goW2ksIGpdKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyXG4gIH1cblxuICBzdGF0aWMgc2h1ZmZsZShhcnJheSkge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHJhbmRvbUluZGV4O1xuICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT0gMCkge1xuICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgY3VycmVudEluZGV4LS07XG4gICAgICBbYXJyYXlbY3VycmVudEluZGV4XSwgYXJyYXlbcmFuZG9tSW5kZXhdXSA9IFtcbiAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3RydWN0b3IocGxheWVyLCBib3QpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllclxuICAgIHRoaXMuYm90ID0gYm90XG4gICAgdGhpcy5vcHBvbmVudCA9IHt9XG4gICAgdGhpcy5yYW5kb21Db29yZHMgPSBbXVxuICAgIHRoaXMuY29vcmRzQXJvdW5kSGl0ID0gW11cbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuYXR0YWNrLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2V0Q3VycmVudFNoaXAoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9wcG9uZW50ID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IHRoaXMucGxheWVyIDogdGhpcy5ib3RcblxuICAgIHRoaXMuYm90LmZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpXG5cbiAgICB0aGlzLnJhbmRvbUNvb3JkcyA9IENvbnRyb2xsZXIuc2h1ZmZsZShDb250cm9sbGVyLmNvb3JkcygpKVxuICAgIHRoaXMuY29vcmRzQXJvdW5kSGl0ID0gW11cblxuICAgIGlmICh0aGlzLm9wcG9uZW50ID09PSB0aGlzLnBsYXllcikge1xuICAgICAgRE9NLnRvZ2dsZU92ZXJsYXkoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0YWNrKClcbiAgICAgICAgRE9NLnRvZ2dsZU92ZXJsYXkoKVxuICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIHRoaXMub3Bwb25lbnQuZmllbGQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxuICB9XG5cbiAgZ2V0Q29vcmRzRm9yU2hvdCgpIHtcbiAgICBjb25zdCBjID0gdGhpcy5jb29yZHNBcm91bmRIaXQubGVuZ3RoID4gMCA/IHRoaXMuY29vcmRzQXJvdW5kSGl0LnBvcCgpIDogdGhpcy5yYW5kb21Db29yZHMucG9wKClcbiAgICB0aGlzLnJlbW92ZUNvb3Jkc0Zyb21BcnJheXMoYylcbiAgICByZXR1cm4gY1xuICB9XG5cbiAgYXR0YWNrKGUpIHtcbiAgICBsZXQgeFxuICAgIGxldCB5XG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMub3Bwb25lbnQgPT09IHRoaXMucGxheWVyKSByZXR1cm5cbiAgICAgIGlmICghZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXh5JykpIHJldHVyblxuICAgICAgW3gsIHldID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXh5Jykuc3BsaXQoJycpLm1hcChpID0+IE51bWJlcihpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgW3gsIHldID0gdGhpcy5nZXRDb29yZHNGb3JTaG90KClcbiAgICB9XG5cbiAgICBjb25zdCBjID0gdGhpcy5vcHBvbmVudC5tYXRyaXhbeF1beV1cblxuICAgIGlmIChjID09PSAwKSB7XG4gICAgICB0aGlzLm1pc3MoeCwgeSlcbiAgICB9IGVsc2UgaWYgKGMgPT09IDEpIHtcbiAgICAgIHRoaXMuaGl0KHgsIHkpXG4gICAgfVxuICB9XG5cbiAgbWlzcyh4LCB5KSB7XG4gICAgdGhpcy5vcHBvbmVudC5maWVsZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpXG4gICAgdGhpcy5vcHBvbmVudC5tYXRyaXhbeF1beV0gPSAzXG4gICAgdGhpcy5vcHBvbmVudC5maWVsZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14eT0nJHsnJyArIHggKyB5fSddYCkuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgaWYgKHRoaXMub3Bwb25lbnQgPT09IHRoaXMuYm90KSB7XG4gICAgICB0aGlzLm9wcG9uZW50ID0gdGhpcy5wbGF5ZXJcbiAgICAgIERPTS50b2dnbGVPdmVybGF5KClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dGFjaygpXG4gICAgICAgIERPTS50b2dnbGVPdmVybGF5KClcbiAgICAgIH0sIDUwMClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHBvbmVudCA9IHRoaXMuYm90XG4gICAgfVxuICAgIHRoaXMub3Bwb25lbnQuZmllbGQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxuICB9XG5cbiAgaGl0KHgsIHkpIHtcbiAgICB0aGlzLm9wcG9uZW50LmZpZWxkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXh5PSckeycnICsgeCArIHl9J11gKS5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgIHRoaXMub3Bwb25lbnQubWF0cml4W3hdW3ldID0gNFxuXG4gICAgdGhpcy5pc1N1bmsoeCwgeSlcblxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm9wcG9uZW50LnNoaXBzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZygpXG4gICAgICBpZiAodGhpcy5vcHBvbmVudCA9PT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgRE9NLm5vdGlmeSgnR2FtZSBvdmVyLiBZb3UgbG9zZS4nKVxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuYm90LnNoaXBzKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuYm90LnNoaXBzW25hbWVdXG4gICAgICAgICAgU2hpcC5kcmF3U2hpcCh0aGlzLmJvdC5maWVsZCwgc2hpcC5hcnJEZWNrcylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRE9NLm5vdGlmeSgnR2FtZSBvdmVyLiBDb25ncmF0dWxhdGlvbnMsIHlvdSB3b24hJylcbiAgICAgIH1cbiAgICAgIHRoaXMub3Bwb25lbnQuZmllbGQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHBvbmVudCA9PT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgIERPTS50b2dnbGVPdmVybGF5KClcbiAgICAgIHRoaXMuY3VycmVudFNoaXAuaGl0cysrXG4gICAgICBsZXQgY29vcmRzID0gW1xuICAgICAgICBbeCAtIDEsIHldLFxuICAgICAgICBbeCArIDEsIHldLFxuICAgICAgICBbeCwgeSAtIDFdLFxuICAgICAgICBbeCwgeSArIDFdXG4gICAgICBdXG5cbiAgICAgIHRoaXMuc2V0Q29vcmRzQXJvdW5kSGl0KHgsIHksIGNvb3JkcylcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0YWNrKClcbiAgICAgICAgRE9NLnRvZ2dsZU92ZXJsYXkoKVxuICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wcG9uZW50ID09PSB0aGlzLmJvdCkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgIHRoaXMub3Bwb25lbnQuZmllbGQucXVlcnlTZWxlY3RvcihgW2RhdGEteHk9JyR7JycgKyB4ICsgeX0nXWApLmFwcGVuZChkaXYpXG4gICAgfVxuICAgIGxldCBjb29yZHMgPSBbXG4gICAgICBbeCAtIDEsIHkgLSAxXSxcbiAgICAgIFt4IC0gMSwgeSArIDFdLFxuICAgICAgW3ggKyAxLCB5IC0gMV0sXG4gICAgICBbeCArIDEsIHkgKyAxXVxuICAgIF1cbiAgICB0aGlzLm1hcmtFbXB0eUNlbGwoY29vcmRzKVxuICB9XG5cbiAgaXNTdW5rKHgsIHkpIHtcbiAgICBpdGVyOiBmb3IgKGxldCBuYW1lIGluIHRoaXMub3Bwb25lbnQuc2hpcHMpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLm9wcG9uZW50LnNoaXBzW25hbWVdXG4gICAgICBmb3IgKGxldCBjIG9mIHNoaXAuYXJyRGVja3MpIHtcbiAgICAgICAgaWYgKGNbMF0gIT09IHggfHwgY1sxXSAhPT0geSkgY29udGludWVcbiAgICAgICAgc2hpcC5oaXRzKytcbiAgICAgICAgaWYgKHNoaXAuaGl0cyA8IHNoaXAuYXJyRGVja3MubGVuZ3RoKSBicmVhayBpdGVyXG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50ID09PSB0aGlzLnBsYXllcikge1xuICAgICAgICAgIHRoaXMucmVzZXRDdXJyZW50U2hpcCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXJrRW1wdHlDZWxsc0Fyb3VuZFNoaXAoc2hpcClcbiAgICAgICAgZGVsZXRlIHRoaXMub3Bwb25lbnQuc2hpcHNbbmFtZV1cbiAgICAgICAgYnJlYWsgaXRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNvb3Jkc0Zyb21BcnJheXMoY29vcmRzKSB7XG4gICAgaWYgKHRoaXMuY29vcmRzQXJvdW5kSGl0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29vcmRzQXJvdW5kSGl0ID0gQ29udHJvbGxlci5yZW1vdmVFbGVtZW50QXJyYXkodGhpcy5jb29yZHNBcm91bmRIaXQsIGNvb3JkcylcbiAgICB9XG4gICAgdGhpcy5yYW5kb21Db29yZHMgPSBDb250cm9sbGVyLnJlbW92ZUVsZW1lbnRBcnJheSh0aGlzLnJhbmRvbUNvb3JkcywgY29vcmRzKVxuICB9XG5cbiAgcmVzZXRDdXJyZW50U2hpcCgpIHtcbiAgICB0aGlzLmN1cnJlbnRTaGlwID0ge1xuICAgICAgaGl0czogMCxcbiAgICAgIGZpcnN0SGl0OiBbXSxcbiAgICAgIGg6IDAsXG4gICAgICB2OiAwXG4gICAgfVxuICB9XG5cbiAgc2V0Q29vcmRzQXJvdW5kSGl0KHgsIHksIGNvb3Jkcykge1xuICAgIGxldCB7IGZpcnN0SGl0LCBoLCB2IH0gPSB0aGlzLmN1cnJlbnRTaGlwXG5cbiAgICBpZiAoZmlyc3RIaXQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTaGlwLmZpcnN0SGl0ID0gW3gsIHldXG4gICAgfSBlbHNlIGlmIChoID09PSAwICYmIHYgPT09IDApIHtcbiAgICAgIHRoaXMuY3VycmVudFNoaXAuaCA9IChNYXRoLmFicyhmaXJzdEhpdFswXSAtIHgpID09PSAxKSA/IDEgOiAwXG4gICAgICB0aGlzLmN1cnJlbnRTaGlwLnYgPSAoTWF0aC5hYnMoZmlyc3RIaXRbMV0gLSB5KSA9PT0gMSkgPyAxIDogMFxuICAgIH1cblxuICAgIGZvciAobGV0IGNvb3JkIG9mIGNvb3Jkcykge1xuICAgICAgeCA9IGNvb3JkWzBdXG4gICAgICB5ID0gY29vcmRbMV1cbiAgICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgY29udGludWVcbiAgICAgIGlmICh0aGlzLnBsYXllci5tYXRyaXhbeF1beV0gIT09IDAgJiYgdGhpcy5wbGF5ZXIubWF0cml4W3hdW3ldICE9PSAxKSBjb250aW51ZVxuICAgICAgdGhpcy5jb29yZHNBcm91bmRIaXQucHVzaChbeCwgeV0pXG4gICAgfVxuICB9XG5cbiAgbWFya0VtcHR5Q2VsbHNBcm91bmRTaGlwKHNoaXApIHtcbiAgICBjb25zdCB7IGhpdHMsIGgsIHYsIHgsIHkgfSA9IHNoaXBcbiAgICBsZXQgY29vcmRzXG4gICAgaWYgKHNoaXAuaGl0cyA9PT0gMSkge1xuICAgICAgY29vcmRzID0gW1xuICAgICAgICBbeCAtIDEsIHldLFxuICAgICAgICBbeCArIDEsIHldLFxuICAgICAgICBbeCwgeSAtIDFdLFxuICAgICAgICBbeCwgeSArIDFdXG4gICAgICBdXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvb3JkcyA9IFtcbiAgICAgICAgW3ggLSBoLCB5IC0gdl0sXG4gICAgICAgIFt4ICsgaCAqIGhpdHMsIHkgKyB2ICogaGl0c11cbiAgICAgIF1cbiAgICB9XG4gICAgdGhpcy5tYXJrRW1wdHlDZWxsKGNvb3JkcylcbiAgfVxuXG4gIG1hcmtFbXB0eUNlbGwoY29vcmRzKSB7XG4gICAgbGV0IHgsIHlcbiAgICBmb3IgKGxldCBjb29yZCBvZiBjb29yZHMpIHtcbiAgICAgIHggPSBjb29yZFswXVxuICAgICAgeSA9IGNvb3JkWzFdXG4gICAgICBpZiAoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlXG4gICAgICBpZiAodGhpcy5vcHBvbmVudC5tYXRyaXhbeF1beV0gPT09IDIgfHwgdGhpcy5vcHBvbmVudC5tYXRyaXhbeF1beV0gPT09IDMpIGNvbnRpbnVlXG4gICAgICB0aGlzLm9wcG9uZW50Lm1hdHJpeFt4XVt5XSA9IDJcbiAgICAgIGlmICh0aGlzLm9wcG9uZW50ID09PSB0aGlzLnBsYXllcikge1xuICAgICAgICB0aGlzLnJlbW92ZUNvb3Jkc0Zyb21BcnJheXMoY29vcmQpXG4gICAgICB9XG4gICAgICB0aGlzLm9wcG9uZW50LmZpZWxkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXh5PSckeycnICsgeCArIHl9J11gKS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICB9XG4gIH1cblxuICBzdG9wTGlzdGVuaW5nKCkge1xuICAgIHRoaXMuYm90LmZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpXG4gIH1cblxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIlxuaW1wb3J0IFBsYWNlbWVudCBmcm9tIFwiLi9QbGFjZW1lbnRcIlxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZVwiXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcblxuICBzdGF0aWMgY3JlYXRlRE9NKHRhZywgdGV4dCwgY2xhc3Nlcykge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgICBpZiAodGV4dCkge1xuICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRcbiAgICB9XG4gICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgY2xhc3Nlcy5mb3JFYWNoKGVsID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChlbCkpXG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ2VsbHMoZmllbGQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBjb25zdCBzdHIgPSBTdHJpbmcoaSkucGFkU3RhcnQoMiwgJzAnKVxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEteHknLCBzdHIpXG4gICAgICBmaWVsZC5hcHBlbmQoZGl2KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVPdmVybGF5KCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkaXYpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5vdGlmeShzdHIgPSAnLi4uJykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ25vdGlmeScpXG4gICAgZGl2LnRleHRDb250ZW50ID0gc3RyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZGl2KVxuICB9XG5cbiAgc3RhdGljIGhpZGVOb3RpZnkoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZnknKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmeScpLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyRmllbGQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXQnKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taXNzJykuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzJykpXG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlSGlnaGxpZ2h0KCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaGxpZ2h0JykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnRuUGxheSA9IG51bGxcbiAgICB0aGlzLmJ0blJlbWF0Y2ggPSBudWxsXG4gICAgdGhpcy5idG5SYW5kb20gPSBudWxsXG5cbiAgICB0aGlzLnBsYXllciA9IG51bGxcbiAgICB0aGlzLmJvdCA9IG51bGxcblxuICAgIHRoaXMuY29udHJvbGxlciA9IG51bGxcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBET00uY3JlYXRlRE9NKCdoZWFkZXInLCBmYWxzZSwgW10pXG4gICAgY29uc3QgaDEgPSBET00uY3JlYXRlRE9NKCdoMScsICcuLi4uYmF0dGxlc2hpcC4uLi4nLCBbXSlcbiAgICBoZWFkZXIuYXBwZW5kKGgxKVxuICAgIGNvbnN0IG1haW4gPSBET00uY3JlYXRlRE9NKCdtYWluJywgZmFsc2UsIFtdKVxuICAgIGNvbnN0IGJ1dHRvbnMgPSBET00uY3JlYXRlRE9NKCdkaXYnLCBmYWxzZSwgWydidXR0b25zJ10pXG4gICAgdGhpcy5idG5SYW5kb20gPSBET00uY3JlYXRlRE9NKCdidXR0b24nLCAnUmFuZG9taXNlJywgWydyYW5kb20nXSlcbiAgICB0aGlzLmJ0blBsYXkgPSBET00uY3JlYXRlRE9NKCdidXR0b24nLCAnUGxheScsIFsncGxheSddKVxuICAgIHRoaXMuYnRuUmVtYXRjaCA9IERPTS5jcmVhdGVET00oJ2J1dHRvbicsICdSZW1hdGNoJywgWydyZW1hdGNoJ10pXG4gICAgdGhpcy5idG5SZW1hdGNoLmRpc2FibGVkID0gdHJ1ZVxuICAgIGJ1dHRvbnMuYXBwZW5kKHRoaXMuYnRuUmFuZG9tKVxuICAgIGJ1dHRvbnMuYXBwZW5kKHRoaXMuYnRuUGxheSlcbiAgICBidXR0b25zLmFwcGVuZCh0aGlzLmJ0blJlbWF0Y2gpXG4gICAgbWFpbi5hcHBlbmQoYnV0dG9ucylcbiAgICBjb25zdCBiYXR0bGVmaWVsZHMgPSBET00uY3JlYXRlRE9NKCdkaXYnLCBmYWxzZSwgWydiYXR0bGVmaWVsZHMnXSlcbiAgICBjb25zdCBzZWxmV3JhcHBlciA9IERPTS5jcmVhdGVET00oJ2RpdicsIGZhbHNlLCBbJ3dyYXBwZXInXSlcbiAgICBjb25zdCByaXZhbFdyYXBwZXIgPSBET00uY3JlYXRlRE9NKCdkaXYnLCBmYWxzZSwgWyd3cmFwcGVyJ10pXG4gICAgY29uc3Qgc2VsZkZpZWxkID0gRE9NLmNyZWF0ZURPTSgnZGl2JywgZmFsc2UsIFsnYmF0dGxlZmllbGQtc2VsZicsICdiYXR0bGVmaWVsZCddKVxuICAgIGNvbnN0IHJpdmFsRmllbGQgPSBET00uY3JlYXRlRE9NKCdkaXYnLCBmYWxzZSwgWydiYXR0bGVmaWVsZC1yaXZhbCcsICdiYXR0bGVmaWVsZCddKVxuICAgIGNvbnN0IHNlbGZMYWJlbCA9IERPTS5jcmVhdGVET00oJ2RpdicsICdZb3VyIEdyaWQnLCBbJ2JhdHRsZWZpZWxkLWxhYmVsJ10pXG4gICAgY29uc3Qgcml2YWxMYWJlbCA9IERPTS5jcmVhdGVET00oJ2RpdicsICdPcHBvbmVudFxcJ3MgZ3JpZCcsIFsnYmF0dGxlZmllbGQtbGFiZWwnXSlcbiAgICBzZWxmV3JhcHBlci5hcHBlbmQoc2VsZkZpZWxkKVxuICAgIHJpdmFsV3JhcHBlci5hcHBlbmQocml2YWxGaWVsZClcbiAgICBzZWxmV3JhcHBlci5hcHBlbmQoc2VsZkxhYmVsKVxuICAgIHJpdmFsV3JhcHBlci5hcHBlbmQocml2YWxMYWJlbClcbiAgICBiYXR0bGVmaWVsZHMuYXBwZW5kKHNlbGZXcmFwcGVyKVxuICAgIGJhdHRsZWZpZWxkcy5hcHBlbmQocml2YWxXcmFwcGVyKVxuICAgIG1haW4uYXBwZW5kKGJhdHRsZWZpZWxkcylcbiAgICBjb25zdCBmb290ZXIgPSBET00uY3JlYXRlRE9NKCdmb290ZXInLFxuICAgICAgJ0NsaWNrIG9uIGEgc2hpcCB0byBzd2l0Y2ggZGlyZWN0aW9uLiBEcmFnIGFuZCBEcm9wIHRoZSBzaGlwcy4nLFxuICAgICAgW11cbiAgICApXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW4pXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZm9vdGVyKVxuXG4gICAgRE9NLmNyZWF0ZUNlbGxzKHNlbGZGaWVsZClcbiAgICBET00uY3JlYXRlQ2VsbHMocml2YWxGaWVsZClcblxuICAgIHRoaXMuaW5pdEdhbWUoc2VsZkZpZWxkLCByaXZhbEZpZWxkKVxuICB9XG5cbiAgaW5pdEdhbWUocGxheWVyRmllbGQsIGJvdEZpZWxkKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgR2FtZWJvYXJkKHBsYXllckZpZWxkKVxuICAgIHRoaXMuYm90ID0gbmV3IEdhbWVib2FyZChib3RGaWVsZClcbiAgICBuZXcgUGxhY2VtZW50KHRoaXMucGxheWVyKVxuICAgIHRoaXMucGxheWVyLmNsZWFuQm9hcmQoKVxuICAgIGlmIChTdG9yYWdlLmNoZWNrKCkpIHtcbiAgICAgIHRoaXMucGxheWVyLnBsYWNlU2hpcHMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBTdG9yYWdlLnN0b3JlRGVmYXVsdFNoaXBzKClcbiAgICAgIHRoaXMucGxheWVyLnBsYWNlU2hpcHMoKVxuICAgIH1cblxuICAgIHRoaXMuYm90LmNsZWFuQm9hcmQoKVxuICAgIHRoaXMuYm90LnJhbmRvbVBsYWNlU2hpcHMoKVxuXG4gICAgdGhpcy5jb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIodGhpcy5wbGF5ZXIsIHRoaXMuYm90KVxuXG4gICAgdGhpcy5idG5SZW1hdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXNldEdhbWUuYmluZCh0aGlzLCBmYWxzZSkpXG4gICAgdGhpcy5idG5SYW5kb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc2V0R2FtZS5iaW5kKHRoaXMsIHRydWUpKVxuICAgIHRoaXMuYnRuUGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcykpXG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgaWYgKEdhbWVib2FyZC5pc0dhbWVTdGFydGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgR2FtZWJvYXJkLmlzR2FtZVN0YXJ0ZWQgPSB0cnVlXG4gICAgdGhpcy5idG5SZW1hdGNoLmRpc2FibGVkID0gZmFsc2VcbiAgICB0aGlzLmJ0blBsYXkuZGlzYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5jb250cm9sbGVyLmluaXQoKVxuICB9XG5cbiAgcmVzZXRHYW1lKGlzUmFuZG9tKSB7XG4gICAgR2FtZWJvYXJkLmlzR2FtZVN0YXJ0ZWQgPSBmYWxzZVxuICAgIHRoaXMuYnRuUmVtYXRjaC5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLmJ0blBsYXkuZGlzYWJsZWQgPSBmYWxzZVxuICAgIHRoaXMuY29udHJvbGxlci5zdG9wTGlzdGVuaW5nKClcbiAgICBET00uaGlkZU5vdGlmeSgpXG4gICAgRE9NLmNsZWFyRmllbGQoKVxuICAgIHRoaXMucGxheWVyLmNsZWFuQm9hcmQoKVxuICAgIGlmIChpc1JhbmRvbSkge1xuICAgICAgdGhpcy5wbGF5ZXIucmFuZG9tUGxhY2VTaGlwcygpXG4gICAgICB0aGlzLnBsYXllci5zYXZlU2hpcHMoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXllci5wbGFjZVNoaXBzKClcbiAgICB9XG4gICAgdGhpcy5ib3QuY2xlYW5Cb2FyZCgpXG4gICAgdGhpcy5ib3QucmFuZG9tUGxhY2VTaGlwcygpXG4gICAgRE9NLnJlbW92ZUhpZ2hsaWdodCgpXG4gIH1cblxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuXG4gIHN0YXRpYyBpc0dhbWVTdGFydGVkID0gZmFsc2VcblxuICBzdGF0aWMgU0hJUF9EQVRBID0ge1xuICAgIGZvdXJkZWNrOiBbMSwgNF0sXG4gICAgdHJpcGxlZGVjazogWzIsIDNdLFxuICAgIGRvdWJsZWRlY2s6IFszLCAyXSxcbiAgICBzaW5nbGVkZWNrOiBbNCwgMV0sXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTWF0cml4KCkge1xuICAgIHJldHVybiBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoMCkpXG4gIH1cblxuICBzdGF0aWMgZ2V0UmFuZG9tID0gbiA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobiArIDEpKVxuXG4gIGNvbnN0cnVjdG9yKGZpZWxkKSB7XG4gICAgdGhpcy5maWVsZCA9IGZpZWxkXG4gICAgdGhpcy5zaGlwcyA9IHt9XG4gICAgdGhpcy5tYXRyaXggPSBbXVxuICB9XG5cbiAgY2xlYW5Cb2FyZCgpIHtcbiAgICB0aGlzLnNoaXBzID0ge31cbiAgICB0aGlzLm1hdHJpeCA9IEdhbWVib2FyZC5jcmVhdGVNYXRyaXgoKVxuICB9XG5cbiAgcmFuZG9tUGxhY2VTaGlwcygpIHtcbiAgICBmb3IgKGxldCB0eXBlIGluIEdhbWVib2FyZC5TSElQX0RBVEEpIHtcbiAgICAgIGxldCBjb3VudCA9IEdhbWVib2FyZC5TSElQX0RBVEFbdHlwZV1bMF1cbiAgICAgIGxldCBkZWNrcyA9IEdhbWVib2FyZC5TSElQX0RBVEFbdHlwZV1bMV1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5nZXRDb29yZHMoZGVja3MpXG4gICAgICAgIG9wdGlvbnMuZGVja3MgPSBkZWNrc1xuICAgICAgICBvcHRpb25zLnNoaXBuYW1lID0gdHlwZSArIFN0cmluZyhpICsgMSlcbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHRoaXMsIG9wdGlvbnMpXG4gICAgICAgIHNoaXAuY3JlYXRlU2hpcCgpXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmNsYXNzTGlzdFswXSA9PT0gJ2JhdHRsZWZpZWxkLXNlbGYnKSB7XG4gICAgICAgICAgU2hpcC5kcmF3U2hpcCh0aGlzLmZpZWxkLCBzaGlwLmFyckRlY2tzLCBzaGlwLnNoaXBuYW1lKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2F2ZVNoaXBzKCkge1xuICAgIFN0b3JhZ2Uuc3RvcmUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zaGlwcykpXG4gIH1cblxuICBwbGFjZVNoaXBzKCkge1xuICAgIGNvbnN0IHNhdmVkU2hpcHMgPSBTdG9yYWdlLmNoZWNrKClcbiAgICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKHNhdmVkU2hpcHMpKSB7XG4gICAgICBjb25zdCBkYXRhID0gc2F2ZWRTaGlwc1tuYW1lXVxuICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHRoaXMsIHsgLi4uZGF0YSwgZGVja3M6IGRhdGEuYXJyRGVja3MubGVuZ3RoLCBzaGlwbmFtZTogbmFtZSB9KVxuICAgICAgc2hpcC5jcmVhdGVTaGlwKClcbiAgICAgIFNoaXAuZHJhd1NoaXAodGhpcy5maWVsZCwgc2hpcC5hcnJEZWNrcywgc2hpcC5zaGlwbmFtZSlcbiAgICB9XG4gIH1cblxuICBnZXRDb29yZHMoZGVja3MpIHtcbiAgICBsZXQgaCA9IEdhbWVib2FyZC5nZXRSYW5kb20oMSlcbiAgICBsZXQgdiA9IChoID09PSAwKSA/IDEgOiAwXG4gICAgbGV0IHggPSB1bmRlZmluZWRcbiAgICBsZXQgeSA9IHVuZGVmaW5lZFxuXG4gICAgaWYgKGggPT09IDApIHtcbiAgICAgIHggPSBHYW1lYm9hcmQuZ2V0UmFuZG9tKDkpXG4gICAgICB5ID0gR2FtZWJvYXJkLmdldFJhbmRvbSgxMCAtIGRlY2tzKVxuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gR2FtZWJvYXJkLmdldFJhbmRvbSgxMCAtIGRlY2tzKVxuICAgICAgeSA9IEdhbWVib2FyZC5nZXRSYW5kb20oOSlcbiAgICB9XG5cbiAgICBjb25zdCBvYmogPSB7IHgsIHksIGgsIHYgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmFsaWRhdGVCYXR0bGVmaWVsZChvYmosIGRlY2tzKVxuXG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiB0aGlzLmdldENvb3JkcyhkZWNrcylcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICB2YWxpZGF0ZUJhdHRsZWZpZWxkKG9iaiwgZGVja3MpIHtcbiAgICBsZXQgeyB4LCB5LCBoLCB2IH0gPSBvYmpcblxuICAgIGlmIChoID09PSAwICYmICgoeSArIGRlY2tzKSA+IDEwKSkgcmV0dXJuIGZhbHNlXG4gICAgZWxzZSBpZiAodiA9PT0gMCAmJiAoKHggKyBkZWNrcykgPiAxMCkpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IGRpciA9IFtcbiAgICAgIFstMSwgLTFdLCBbLTEsIDBdLCBbLTEsIDFdLFxuICAgICAgWzAsIC0xXSwgWzAsIDBdLCBbMCwgMV0sXG4gICAgICBbMSwgLTFdLCBbMSwgMF0sIFsxLCAxXVxuICAgIF1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2tzOyBpKyspIHtcbiAgICAgIGlmKGkgPT09IDEpIHtcbiAgICAgICAgaWYoaCA9PT0gMCkge1xuICAgICAgICAgIGRpciA9IFtcbiAgICAgICAgICAgIFstMSwgMV0sIFswLCAxXSwgWzEsIDFdXG4gICAgICAgICAgXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpciA9IFtcbiAgICAgICAgICAgIFsxLCAtMV0sIFsxLCAwXSwgWzEsIDFdXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBzID0gMDsgcyA8IGRpci5sZW5ndGg7IHMrKykge1xuICAgICAgICBjb25zdCBqID0gKHggKyBpICogaCkgKyBkaXJbc11bMF1cbiAgICAgICAgY29uc3QgayA9ICh5ICsgaSAqIHYpICsgZGlyW3NdWzFdXG4gICAgICAgIGlmIChqID49IDAgJiYgaiA8IDEwICYmXG4gICAgICAgICAgayA+PSAwICYmIGsgPCAxMCAmJlxuICAgICAgICAgIHRoaXMubWF0cml4W2pdW2tdID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhY2VtZW50IHtcblxuICBjb25zdHJ1Y3Rvcihib2FyZCkge1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZFxuICAgIHRoaXMuaXNEcmFnZ2VkID0gZmFsc2VcbiAgICB0aGlzLm9sZFNoaXAgPSB7fVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcykpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb3RhdGVTaGlwLmJpbmQodGhpcykpXG4gIH1cblxuICBkcmFnU3RhcnQoZSkge1xuICAgIGlmIChHYW1lYm9hcmQuaXNHYW1lU3RhcnRlZCkgcmV0dXJuXG4gICAgaWYgKHRoaXMuYm9hcmQuaXNHYW1lU3RhcnRlZCkgcmV0dXJuXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QgfHwgZS50YXJnZXQuY2xhc3NMaXN0WzBdICE9PSAnc2hpcCcpIHJldHVyblxuICAgIHRoaXMuaXNEcmFnZ2VkID0gdHJ1ZVxuICAgIHRoaXMucmVtb3ZlU2hpcChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKVxuICB9XG5cbiAgZHJhZ0VuZChlKSB7XG4gICAgaWYgKEdhbWVib2FyZC5pc0dhbWVTdGFydGVkKSByZXR1cm5cbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2VkKSByZXR1cm5cbiAgICB0aGlzLmlzRHJhZ2dlZCA9IGZhbHNlXG4gICAgY29uc3Qgc3RyID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXh5JylcbiAgICBpZiAoIXN0ciB8fCAhZS50YXJnZXQuY2xvc2VzdCgnLmJhdHRsZWZpZWxkLXNlbGYnKSkge1xuICAgICAgdGhpcy5yZXN0b3JlU2hpcCgpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgW3gsIHldID0gc3RyLnNwbGl0KCcnKS5tYXAoaSA9PiBOdW1iZXIoaSkpXG4gICAgY29uc3Qgb2JqID0geyB4LCB5LCBoOiB0aGlzLm9sZFNoaXAuaCwgdjogdGhpcy5vbGRTaGlwLnYgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYm9hcmQudmFsaWRhdGVCYXR0bGVmaWVsZChvYmosIHRoaXMub2xkU2hpcC5kZWNrcylcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBvYmouc2hpcG5hbWUgPSB0aGlzLm9sZFNoaXAuc2hpcG5hbWVcbiAgICAgIG9iai5kZWNrcyA9IHRoaXMub2xkU2hpcC5kZWNrc1xuICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHRoaXMuYm9hcmQsIG9iailcbiAgICAgIHNoaXAuY3JlYXRlU2hpcCgpXG4gICAgICBTaGlwLmRyYXdTaGlwKHNoaXAuYm9hcmQuZmllbGQsIHNoaXAuYXJyRGVja3MsIHNoaXAuc2hpcG5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdG9yZVNoaXAoKVxuICAgIH1cbiAgICB0aGlzLmJvYXJkLnNhdmVTaGlwcygpXG4gIH1cblxuICByb3RhdGVTaGlwKGUpIHtcbiAgICBpZiAoR2FtZWJvYXJkLmlzR2FtZVN0YXJ0ZWQpIHJldHVyblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gIT09ICdzaGlwJykgcmV0dXJuXG4gICAgdGhpcy5yZW1vdmVTaGlwKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpXG4gICAgY29uc3Qgb2JqID0geyAuLi50aGlzLm9sZFNoaXAsIGg6ICh0aGlzLm9sZFNoaXAuaCA9PT0gMCkgPyAxIDogMCwgdjogKHRoaXMub2xkU2hpcC52ID09PSAwKSA/IDEgOiAwIH1cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmJvYXJkLnZhbGlkYXRlQmF0dGxlZmllbGQob2JqLCB0aGlzLm9sZFNoaXAuZGVja3MpXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHRoaXMuYm9hcmQsIG9iailcbiAgICAgIHNoaXAuY3JlYXRlU2hpcCgpXG4gICAgICBTaGlwLmRyYXdTaGlwKHNoaXAuYm9hcmQuZmllbGQsIHNoaXAuYXJyRGVja3MsIHNoaXAuc2hpcG5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCh0aGlzLmJvYXJkLCB0aGlzLm9sZFNoaXApXG4gICAgICBzaGlwLmNyZWF0ZVNoaXAoKVxuICAgICAgU2hpcC5kcmF3U2hpcChzaGlwLmJvYXJkLmZpZWxkLCBzaGlwLmFyckRlY2tzLCBzaGlwLnNoaXBuYW1lKVxuICAgIH1cbiAgICB0aGlzLmJvYXJkLnNhdmVTaGlwcygpXG4gIH1cblxuICByZW1vdmVTaGlwKGVsKSB7XG4gICAgY29uc3Qgb2JqID0gdGhpcy5ib2FyZC5zaGlwc1tlbF1cbiAgICB0aGlzLm9sZFNoaXAgPSB7XG4gICAgICB5OiBvYmoueSxcbiAgICAgIHg6IG9iai54LFxuICAgICAgdjogb2JqLnYsXG4gICAgICBoOiBvYmouaCxcbiAgICAgIGRlY2tzOiBvYmouYXJyRGVja3MubGVuZ3RoLFxuICAgICAgc2hpcG5hbWU6IGVsXG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLW5hbWU9JHtlbH1dYCkuZm9yRWFjaChpID0+IGkucmVtb3ZlKCkpXG4gICAgZm9yIChsZXQgaSBvZiBvYmouYXJyRGVja3MpIHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IGlcbiAgICAgIHRoaXMuYm9hcmQubWF0cml4W3hdW3ldID0gMFxuICAgIH1cbiAgICBkZWxldGUgdGhpcy5ib2FyZC5zaGlwc1tlbF1cbiAgfVxuXG4gIHJlc3RvcmVTaGlwKCkge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCh0aGlzLmJvYXJkLCB0aGlzLm9sZFNoaXApXG4gICAgc2hpcC5jcmVhdGVTaGlwKClcbiAgICBTaGlwLmRyYXdTaGlwKHNoaXAuYm9hcmQuZmllbGQsIHNoaXAuYXJyRGVja3MsIHNoaXAuc2hpcG5hbWUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuXG4gIHN0YXRpYyBkcmF3U2hpcChmaWVsZCwgYXJyLCBuYW1lKSB7XG4gICAgYXJyLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgcG9zID0gZWwuam9pbignJylcbiAgICAgIGNvbnN0IGMgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14eT0nJHtwb3N9J11gKVxuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpXG4gICAgICBjLmFwcGVuZChzaGlwKVxuICAgIH0pXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihib2FyZCwgeyB4LCB5LCBoLCB2LCBkZWNrcywgc2hpcG5hbWUgfSkge1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZFxuICAgIHRoaXMuc2hpcG5hbWUgPSBzaGlwbmFtZVxuICAgIHRoaXMuZGVja3MgPSBkZWNrc1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5oID0gaFxuICAgIHRoaXMudiA9IHZcbiAgICB0aGlzLmhpdHMgPSAwXG4gICAgdGhpcy5hcnJEZWNrcyA9IFtdXG4gIH1cblxuICBjcmVhdGVTaGlwKCkge1xuICAgIGxldCB7IGJvYXJkLCBzaGlwbmFtZSwgZGVja3MsIHgsIHksIGgsIHYsIGhpdHMsIGFyckRlY2tzLCBrID0gMCB9ID0gdGhpc1xuXG4gICAgd2hpbGUgKGsgPCBkZWNrcykge1xuICAgICAgbGV0IGkgPSB4ICsgayAqIGgsIGogPSB5ICsgayAqIHZcbiAgICAgIGJvYXJkLm1hdHJpeFtpXVtqXSA9IDFcbiAgICAgIGFyckRlY2tzLnB1c2goW2ksIGpdKVxuICAgICAgaysrXG4gICAgfVxuXG4gICAgYm9hcmQuc2hpcHNbc2hpcG5hbWVdID0geyBhcnJEZWNrcywgaGl0cywgeCwgeSwgaCwgdiB9XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBjaGVjaygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmF0dGxlc2hpcC1zaGlwcycpKVxuICB9XG5cbiAgc3RhdGljIHN0b3JlKGl0ZW1zKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JhdHRsZXNoaXAtc2hpcHMnLCBKU09OLnN0cmluZ2lmeShpdGVtcykpXG4gIH1cblxuICBzdGF0aWMgc3RvcmVEZWZhdWx0U2hpcHMoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JhdHRsZXNoaXAtc2hpcHMnLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgfVxufVxuXG5jb25zdCBkYXRhID0ge1xuICBzaW5nbGVkZWNrMjogeyBhcnJEZWNrczogW1s0LCA2XV0sIGhpdHM6IDAsIHg6IDUsIHk6IDYsIGg6IDEsIHY6IDAgfSxcbiAgc2luZ2xlZGVjazM6IHsgYXJyRGVja3M6IFtbMywgOF1dLCBoaXRzOiAwLCB4OiAzLCB5OiA4LCBoOiAxLCB2OiAwIH0sXG4gIHRyaXBsZWRlY2syOiB7IGFyckRlY2tzOiBbWzcsIDBdLCBbOCwgMF0sIFs5LCAwXV0sIGhpdHM6IDAsIHg6IDcsIHk6IDAsIGg6IDEsIHY6IDAgfSxcbiAgc2luZ2xlZGVjazE6IHsgYXJyRGVja3M6IFtbMSwgOF1dLCBoaXRzOiAwLCB4OiAxLCB5OiA4LCBoOiAwLCB2OiAxIH0sIFxuICB0cmlwbGVkZWNrMTogeyBhcnJEZWNrczogW1swLCAwXSwgWzEsIDBdLCBbMiwgMF1dLCBoaXRzOiAwLCB4OiAwLCB5OiAwLCBoOiAxLCB2OiAwIH0sIFxuICBkb3VibGVkZWNrMTogeyBhcnJEZWNrczogW1s0LCAwXSwgWzUsIDBdXSwgaGl0czogMCwgeDogNCwgeTogMCwgaDogMSwgdjogMCB9LCBcbiAgc2luZ2xlZGVjazQ6IHsgYXJyRGVja3M6IFtbOCwgN11dLCBoaXRzOiAwLCB4OiA4LCB5OiA3LCBoOiAwLCB2OiAxIH0sXG4gIGRvdWJsZWRlY2syOiB7IGFyckRlY2tzOiBbWzAsIDJdLCBbMSwgMl1dLCBoaXRzOiAwLCB4OiAwLCB5OiAyLCBoOiAxLCB2OiAwIH0sIFxuICBmb3VyZGVjazE6IHsgYXJyRGVja3M6IFtbMywgMl0sIFs0LCAyXSwgWzUsIDJdLCBbNiwgMl1dLCBoaXRzOiAwLCB4OiAzLCB5OiAyLCBoOiAxLCB2OiAwIH0sIFxuICBkb3VibGVkZWNrMzogeyBhcnJEZWNrczogW1s4LCAyXSwgWzksIDJdXSwgaGl0czogMCwgeDogOCwgeTogMiwgaDogMSwgdjogMCB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IERPTSBmcm9tICcuL0RPTSdcblxuY29uc3QgZG9tID0gbmV3IERPTSgpXG5cbmRvbS5ydW4oKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9