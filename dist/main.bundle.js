/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Pokédex_logo.png */ \"./src/assets/Pokédex_logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* style.css */\r\n:root {\r\n  --primary-color: #007bff;\r\n  --text-color: #333;\r\n}\r\n\r\nbody {\r\n  font-family: cursive;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n#card-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  gap: 20px;\r\n  padding: 7rem;\r\n}\r\n\r\n.grid-item {\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.grid-item img,\r\n.popup img {\r\n  width: 50%;\r\n  height: auto;\r\n  transition: transform 0.3s;\r\n  transform: rotateY(-180deg);\r\n}\r\n\r\n.grid-item:hover img,\r\n.popup img:hover {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.grid-item h4 {\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #card-container {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n.space-item {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.likes {\r\n  position: relative;\r\n  color: red;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.likes-count {\r\n  position: absolute;\r\n  font-size: x-small;\r\n}\r\n\r\n.likes:hover {\r\n  animation: pulse 1s infinite;\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.btn {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  padding: 5px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: var(--primary-color);\r\n  color: #fff;\r\n}\r\n\r\n#popup-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  z-index: 999;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 0s, opacity 0.5s;\r\n}\r\n\r\n.popup {\r\n  max-width: 400px;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n  position: relative;\r\n  overflow: auto;\r\n  max-height: 400px;\r\n  text-align: center;\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.popup h2 {\r\n  margin-top: 0;\r\n  font-size: 24px;\r\n}\r\n\r\n.popup p {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  font-size: xx-large;\r\n}\r\n\r\n.comment-form {\r\n  margin-top: 20px;\r\n}\r\n\r\n.comment-form textarea,\r\n.comment-form input {\r\n  width: 100%;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comment-form input[type=\"submit\"] {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n/* styles.css */\r\n\r\nheader {\r\n  background-color: #f2f2f2;\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.logo {\r\n  width: 150px;\r\n  height: 50px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.menu {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n}\r\n\r\n.menu li {\r\n  margin-left: 10px;\r\n}\r\n\r\n.menu li a {\r\n  text-decoration: none;\r\n  color: var(--text-color);\r\n}\r\n\r\n.menu-toggle {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .menu {\r\n    display: none;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .menu li {\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .menu-toggle {\r\n    display: block;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\nfooter {\r\n  background-color: #f2f2f2;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.description {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-gap: 10px;\r\n}\r\n\r\n/* reservation */\r\n.btn-reserve {\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  padding: 5px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: var(--primary-color);\r\n  color: #fff;\r\n}\r\n\r\n.reservation-popup {\r\n  max-width: 400px;\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n  position: relative;\r\n  overflow: auto;\r\n  max-height: 400px;\r\n  text-align: center;\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.reservation-popup h2 {\r\n  margin-top: 0;\r\n  font-size: 24px;\r\n}\r\n\r\n.reservation-popup p {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#reservation-form {\r\n  margin-top: 20px;\r\n}\r\n\r\n#reservation-form input[type=\"text\"] {\r\n  width: 100%;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#reservation-form input[type=\"submit\"] {\r\n  background-color: var(--primary-color);\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init.js */ \"./src/modules/init.js\");\n\r\n\r\n\r\n(0,_modules_init_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/apiConfig.js":
/*!**********************************!*\
  !*** ./src/modules/apiConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst appId = 'xJHvoU3Mdm0mPXdsrlTl';\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appId);\r\n\n\n//# sourceURL=webpack:///./src/modules/apiConfig.js?");

/***/ }),

/***/ "./src/modules/createPopup.js":
/*!************************************!*\
  !*** ./src/modules/createPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementCall.js */ \"./src/modules/involvementCall.js\");\n/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComments.js */ \"./src/modules/fetchComments.js\");\n/* harmony import */ var _apiConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiConfig.js */ \"./src/modules/apiConfig.js\");\n\r\n\r\n\r\n\r\n\r\nconst createPopup = (pokemon) => {\r\n  const popupContainer = document.getElementById('popup-container');\r\n  popupContainer.innerHTML = `\r\n      <div class=\"popup\">\r\n        <span class=\"close\">&times;</span>\r\n        <img src=\"${pokemon.sprites.front_default}\" alt=\"\" />\r\n        <h2>${pokemon.name}</h2>\r\n        <div class=\"description\">\r\n        <p>Height: ${pokemon.height}</p>\r\n        <p>Types: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>\r\n        <p>Weight: ${pokemon.weight}</p>\r\n        <p>Base Experience: ${pokemon.base_experience}</p>\r\n        </div>\r\n        <h3>Comments<span id=\"comments-count-${pokemon.id}\">(0)</span></h3>\r\n      <ul id=\"comments-list-${pokemon.id}\"></ul>\r\n        <form id=\"comment-form-${pokemon.id}\" class=\"comment-form\">\r\n          <input type=\"text\" id=\"username-${pokemon.id}\" placeholder=\"Your name\">\r\n          <textarea id=\"comment-${pokemon.id}\" placeholder=\"Enter your comment\" rows=\"3\"></textarea>\r\n          <input type=\"submit\" value=\"Submit\">\r\n        </form>\r\n      </div>\r\n    `;\r\n\r\n  const closeButton = popupContainer.querySelector('.close');\r\n  closeButton.addEventListener('click', () => {\r\n    popupContainer.style.visibility = 'hidden';\r\n    popupContainer.style.opacity = 0;\r\n  });\r\n\r\n  const commentForm = popupContainer.querySelector(`#comment-form-${pokemon.id}`);\r\n  commentForm.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const commentInput = popupContainer.querySelector(`#comment-${pokemon.id}`);\r\n    const usernameInput = popupContainer.querySelector(`#username-${pokemon.id}`);\r\n    const comment = commentInput.value.trim();\r\n    const username = usernameInput.value.trim();\r\n    if (comment !== '' && username !== '') {\r\n      await (0,_involvementCall_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(_apiConfig_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], pokemon.id.toString(), username, comment);\r\n      commentInput.value = '';\r\n      usernameInput.value = '';\r\n      await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon.id);\r\n    }\r\n  });\r\n\r\n  (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon.id);\r\n\r\n  popupContainer.style.visibility = 'visible';\r\n  popupContainer.style.opacity = 1;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopup);\n\n//# sourceURL=webpack:///./src/modules/createPopup.js?");

/***/ }),

/***/ "./src/modules/fetchComments.js":
/*!**************************************!*\
  !*** ./src/modules/fetchComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementCall.js */ \"./src/modules/involvementCall.js\");\n/* harmony import */ var _apiConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiConfig.js */ \"./src/modules/apiConfig.js\");\n\r\n\r\n\r\n\r\nconst fetchComments = async (itemId) => {\r\n  const commentsListElement = document.getElementById(`comments-list-${itemId}`);\r\n  commentsListElement.innerHTML = '<li>Loading...</li>';\r\n\r\n  try {\r\n    const comments = await (0,_involvementCall_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(_apiConfig_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], itemId.toString());\r\n\r\n    if (Array.isArray(comments) && comments.length > 0) {\r\n      commentsListElement.innerHTML = '';\r\n      comments.forEach((comment) => {\r\n        const listItem = document.createElement('li');\r\n        const dateParts = comment.creation_date.split('-');\r\n        const reversedDate = dateParts.reverse().join('/');\r\n\r\n        listItem.textContent = `${reversedDate} - ${comment.username}: ${comment.comment}`;\r\n        commentsListElement.appendChild(listItem);\r\n      });\r\n    } else {\r\n      commentsListElement.innerHTML = '<li>No comments available.</li>';\r\n    }\r\n\r\n    const commentsCountElement = document.getElementById(`comments-count-${itemId}`);\r\n    commentsCountElement.textContent = `(${comments.length})`;\r\n  } catch (error) {\r\n    if (error.message.startsWith('Failed to fetch comments')) {\r\n      commentsListElement.innerHTML = '<li>No comments available.</li>';\r\n    } else {\r\n      commentsListElement.innerHTML = '<li>Error fetching comments</li>';\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);\n\n//# sourceURL=webpack:///./src/modules/fetchComments.js?");

/***/ }),

/***/ "./src/modules/fetchLikes.js":
/*!***********************************!*\
  !*** ./src/modules/fetchLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementCall.js */ \"./src/modules/involvementCall.js\");\n/* harmony import */ var _apiConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiConfig.js */ \"./src/modules/apiConfig.js\");\n\r\n\r\n\r\n\r\nconst fetchLikes = async (itemId) => {\r\n  const likesCountElement = document.getElementById(`likes-count-${itemId}`);\r\n  const likes = await (0,_involvementCall_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)(_apiConfig_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  const itemLikes = likes.find((item) => item.item_id === itemId.toString());\r\n  if (itemLikes) {\r\n    likesCountElement.textContent = itemLikes.likes;\r\n  } else {\r\n    likesCountElement.textContent = '0';\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\n\n//# sourceURL=webpack:///./src/modules/fetchLikes.js?");

/***/ }),

/***/ "./src/modules/handleLike.js":
/*!***********************************!*\
  !*** ./src/modules/handleLike.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementCall.js */ \"./src/modules/involvementCall.js\");\n/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLikes.js */ \"./src/modules/fetchLikes.js\");\n/* harmony import */ var _apiConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiConfig.js */ \"./src/modules/apiConfig.js\");\n\r\n\r\n\r\n\r\n\r\nconst handleLike = async (itemId) => {\r\n  await (0,_involvementCall_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(_apiConfig_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], itemId.toString());\r\n  await (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemId);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleLike);\n\n//# sourceURL=webpack:///./src/modules/handleLike.js?");

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pokeCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokeCall.js */ \"./src/modules/pokeCall.js\");\n/* harmony import */ var _involvementCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementCall.js */ \"./src/modules/involvementCall.js\");\n/* harmony import */ var _renderStructure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderStructure.js */ \"./src/modules/renderStructure.js\");\n\r\n\r\n\r\n\r\nconst init = async () => {\r\n  try {\r\n    await (0,_involvementCall_js__WEBPACK_IMPORTED_MODULE_1__.createApp)();\r\n    const data = await (0,_pokeCall_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    await (0,_renderStructure_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n  } catch (error) {\r\n    const errorElement = document.createElement('p');\r\n    errorElement.textContent = `Error fetching Pokémon data: ${error.message}`;\r\n    document.body.appendChild(errorElement);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack:///./src/modules/init.js?");

/***/ }),

/***/ "./src/modules/involvementCall.js":
/*!****************************************!*\
  !*** ./src/modules/involvementCall.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addComment: () => (/* binding */ addComment),\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   addReservation: () => (/* binding */ addReservation),\n/* harmony export */   baseUrl: () => (/* binding */ baseUrl),\n/* harmony export */   createApp: () => (/* binding */ createApp),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   getLikes: () => (/* binding */ getLikes),\n/* harmony export */   getReservations: () => (/* binding */ getReservations)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\n\r\nconst createApp = async () => {\r\n  const response = await fetch(`${baseUrl}/apps/`, {\r\n    method: 'POST',\r\n  });\r\n  const data = await response.text();\r\n  return data;\r\n};\r\n\r\nconst addLike = async (appId, itemId) => {\r\n  await fetch(`${baseUrl}/apps/${appId}/likes/`, {\r\n    method: 'POST',\r\n    body: JSON.stringify({ item_id: itemId }),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n};\r\n\r\nconst getLikes = async (appId) => {\r\n  const response = await fetch(`${baseUrl}/apps/${appId}/likes/`);\r\n\r\n  if (!response.ok) {\r\n    throw new Error(`HTTP error! status: ${response.status}`);\r\n  }\r\n\r\n  const text = await response.text();\r\n\r\n  if (!text) {\r\n    return []; // Return an empty array if the response body is empty\r\n  }\r\n\r\n  const responseBody = JSON.parse(text);\r\n  return responseBody;\r\n};\r\n\r\nconst addComment = async (appId, itemId, username, comment) => {\r\n  await fetch(`${baseUrl}/apps/${appId}/comments/`, {\r\n    method: 'POST',\r\n    body: JSON.stringify({ item_id: itemId, username, comment }),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n};\r\n\r\nconst getComments = async (appId, itemId) => {\r\n  const response = await fetch(`${baseUrl}/apps/${appId}/comments/?item_id=${itemId}`);\r\n\r\n  if (!response.ok) {\r\n    throw new Error(`Failed to fetch comments: ${response.status}`);\r\n  }\r\n\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst addReservation = async (appId, itemId, reservationData) => {\r\n  const url = `${baseUrl}/apps/${appId}/reservations`;\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify({ item_id: itemId, ...reservationData }),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n\r\n  if (!response.ok) {\r\n    throw new Error(`Failed to add reservation: ${response.status}`);\r\n  }\r\n};\r\n\r\nconst getReservations = async (appId, itemId) => {\r\n  const url = `${baseUrl}/apps/${appId}/reservations?item_id=${itemId}`;\r\n  const response = await fetch(url);\r\n\r\n  if (!response.ok) {\r\n    throw new Error(`Failed to fetch reservations: ${response.status}`);\r\n  }\r\n\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/involvementCall.js?");

/***/ }),

/***/ "./src/modules/pokeCall.js":
/*!*********************************!*\
  !*** ./src/modules/pokeCall.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst callPoke = async () => {\r\n  const limit = 10;\r\n  try {\r\n    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);\r\n    if (!response.ok) {\r\n      throw new Error(`HTTP error! status: ${response.status}`);\r\n    }\r\n    const data = await response.json();\r\n    document.getElementById('limit-value').innerText = `(${limit})`;\r\n    return data;\r\n  } catch (error) {\r\n    const errorElement = document.createElement('p');\r\n    errorElement.textContent = `Error fetching Pokémon data: ${error.message}`;\r\n    document.body.appendChild(errorElement);\r\n    return null;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callPoke);\r\n\n\n//# sourceURL=webpack:///./src/modules/pokeCall.js?");

/***/ }),

/***/ "./src/modules/renderStructure.js":
/*!****************************************!*\
  !*** ./src/modules/renderStructure.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopup.js */ \"./src/modules/createPopup.js\");\n/* harmony import */ var _handleLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleLike.js */ \"./src/modules/handleLike.js\");\n/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchLikes.js */ \"./src/modules/fetchLikes.js\");\n/* harmony import */ var _reservationPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservationPopup.js */ \"./src/modules/reservationPopup.js\");\n\r\n\r\n\r\n\r\n\r\nconst renderStructure = async (data) => {\r\n  const list = document.getElementById('card-container');\r\n  list.innerHTML = '';\r\n\r\n  const pokemonPromises = data.results.map(async (pokemon) => {\r\n    const id = pokemon.url.split('/')[6];\r\n    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);\r\n    const pokemonData = await response.json();\r\n    return pokemonData;\r\n  });\r\n\r\n  const pokemons = await Promise.all(pokemonPromises);\r\n\r\n  pokemons.forEach((pokemonData) => {\r\n    const item = document.createElement('div');\r\n    item.classList.add('grid-item');\r\n    const { id, name, sprites } = pokemonData;\r\n    const img = sprites.front_default;\r\n\r\n    item.innerHTML = `\r\n      <img src=\"${img}\" alt=\"\" />\r\n      <div class=\"space-item\">\r\n        <h4>${name}</h4>\r\n        <div class=\"span-items\">\r\n          <i class=\"far fa-heart likes\"></i>\r\n          <span class='likes-count' id=\"likes-count-${id}\">Loading...</span>\r\n        </div>\r\n      </div>\r\n      <button type=\"button\" class=\"btn\">Comments</button>\r\n      <button type=\"button\" class=\"btn-reserve\">Reserve</button>\r\n    `;\r\n    list.appendChild(item);\r\n\r\n    const likeButton = item.querySelector('.likes');\r\n    likeButton.addEventListener('click', () => (0,_handleLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id));\r\n\r\n    const commentButton = item.querySelector('.btn');\r\n    commentButton.addEventListener('click', () => (0,_createPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokemonData));\r\n\r\n    const reserveButton = item.querySelector('.btn-reserve');\r\n    reserveButton.addEventListener('click', () => (0,_reservationPopup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pokemonData));\r\n\r\n    (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderStructure);\n\n//# sourceURL=webpack:///./src/modules/renderStructure.js?");

/***/ }),

/***/ "./src/modules/reservationApi.js":
/*!***************************************!*\
  !*** ./src/modules/reservationApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addReservation: () => (/* binding */ addReservation),\n/* harmony export */   getReservations: () => (/* binding */ getReservations)\n/* harmony export */ });\n/* harmony import */ var _involvementCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementCall.js */ \"./src/modules/involvementCall.js\");\n/* harmony import */ var _apiConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiConfig.js */ \"./src/modules/apiConfig.js\");\n\r\n\r\n\r\nconst addReservation = async (itemId, reservationData) => {\r\n  await (0,_involvementCall_js__WEBPACK_IMPORTED_MODULE_0__.addReservation)(_apiConfig_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], itemId, reservationData);\r\n};\r\n\r\nconst getReservations = async (itemId) => {\r\n  const reservations = await (0,_involvementCall_js__WEBPACK_IMPORTED_MODULE_0__.getReservations)(_apiConfig_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], itemId);\r\n  return reservations;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/reservationApi.js?");

/***/ }),

/***/ "./src/modules/reservationPopup.js":
/*!*****************************************!*\
  !*** ./src/modules/reservationPopup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reservationApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservationApi.js */ \"./src/modules/reservationApi.js\");\n\r\n\r\nconst createReservationPopup = (pokemon) => {\r\n  const popupContainer = document.getElementById('popup-container');\r\n  popupContainer.innerHTML = `\r\n      <div class=\"reservation-popup\">\r\n        <span class=\"close\">&times;</span>\r\n        <img src=\"${pokemon.sprites.front_default}\" alt=\"\" />\r\n        <h2>${pokemon.name}</h2>\r\n        <div class=\"description\">\r\n          <p>Height: ${pokemon.height}</p>\r\n          <p>Types: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>\r\n          <p>Weight: ${pokemon.weight}</p>\r\n          <p>Base Experience: ${pokemon.base_experience}</p>\r\n        </div>\r\n        <div class=\"reservations-container\">\r\n          <h3 class=\"reservation-heading\">Reservations<span class=\"reservation-count\">(0)</span></h3>\r\n          <ul id=\"reservations-list\"></ul>\r\n        </div>\r\n        <form id=\"reservation-form\" class=\"reservation-form\">\r\n          <input type=\"text\" id=\"reservation-name\" placeholder=\"Your name\">\r\n          <input type=\"text\" id=\"reservation-start-date\" placeholder=\"Start Date (YYYY-MM-DD)\">\r\n          <input type=\"text\" id=\"reservation-end-date\" placeholder=\"End Date (YYYY-MM-DD)\">\r\n          <input type=\"submit\" value=\"Reserve\">\r\n        </form>\r\n      </div>\r\n    `;\r\n\r\n  const closeButton = popupContainer.querySelector('.close');\r\n  closeButton.addEventListener('click', () => {\r\n    popupContainer.style.visibility = 'hidden';\r\n    popupContainer.style.opacity = 0;\r\n  });\r\n\r\n  const reservationCount = popupContainer.querySelector('.reservation-count');\r\n  const reservationsList = popupContainer.querySelector('#reservations-list');\r\n  const reservationForm = popupContainer.querySelector('#reservation-form');\r\n  const nameInput = popupContainer.querySelector('#reservation-name');\r\n  const startDateInput = popupContainer.querySelector('#reservation-start-date');\r\n  const endDateInput = popupContainer.querySelector('#reservation-end-date');\r\n\r\n  const renderReservations = async () => {\r\n    reservationsList.innerHTML = '<li>Loading reservations...</li>';\r\n    try {\r\n      const reservations = await (0,_reservationApi_js__WEBPACK_IMPORTED_MODULE_0__.getReservations)(pokemon.id);\r\n      reservationsList.innerHTML = '';\r\n      if (reservations.length > 0) {\r\n        reservations.forEach((reservation) => {\r\n          const listItem = document.createElement('li');\r\n          listItem.textContent = `${reservation.username} - ${reservation.date_start} to ${reservation.date_end}`;\r\n          reservationsList.appendChild(listItem);\r\n        });\r\n        reservationCount.textContent = `(${reservations.length})`;\r\n      } else {\r\n        reservationsList.innerHTML = '<li>No reservations found</li>';\r\n        reservationCount.textContent = '(0)';\r\n      }\r\n    } catch (error) {\r\n      reservationsList.innerHTML = '<li>Error loading reservations</li>';\r\n      reservationCount.textContent = '';\r\n      console.error('Error loading reservations:', error.message);\r\n    }\r\n  };\r\n\r\n  reservationForm.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const name = nameInput.value.trim();\r\n    const startDate = startDateInput.value.trim();\r\n    const endDate = endDateInput.value.trim();\r\n    if (name !== '' && startDate !== '' && endDate !== '') {\r\n      try {\r\n        await (0,_reservationApi_js__WEBPACK_IMPORTED_MODULE_0__.addReservation)(pokemon.id, { username: name, date_start: startDate, date_end: endDate });\r\n        nameInput.value = '';\r\n        startDateInput.value = '';\r\n        endDateInput.value = '';\r\n        await renderReservations();\r\n      } catch (error) {\r\n        console.error('Error adding reservation:', error.message);\r\n      }\r\n    }\r\n  });\r\n\r\n  renderReservations();\r\n\r\n  popupContainer.style.visibility = 'visible';\r\n  popupContainer.style.opacity = 1;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReservationPopup);\n\n//# sourceURL=webpack:///./src/modules/reservationPopup.js?");

/***/ }),

/***/ "./src/assets/Pokédex_logo.png":
/*!*************************************!*\
  !*** ./src/assets/Pokédex_logo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"907dcf3a592a0e37e0dd.png\";\n\n//# sourceURL=webpack:///./src/assets/Pok%C3%A9dex_logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;