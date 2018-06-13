/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _p__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p */ \"./p.js\");\n/* harmony import */ var _w__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./w */ \"./w.js\");\n/* harmony import */ var _k__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./k */ \"./k.js\");\nvar C_WIDTH = 400;\nvar C_HEIGHT = 800;\nvar T_SIZE = 30;\nwindow.log = function (m) {\n  return console.log(m);\n};\n\n\n\nObject(_k__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar p = new _p__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar w = new _w__WEBPACK_IMPORTED_MODULE_1__[\"default\"](T_SIZE);\n\nwindow.ctx = c.getContext('2d');\nc.width = C_WIDTH;\nc.height = C_HEIGHT;\nctx.fillStyle = '#000';\nctx.fillRect(0, 0, C_WIDTH, C_HEIGHT);\n\nvar ll = function ll() {\n  c.width += 0;\n  p.k();\n  w.k();\n\n  w.d();\n  p.d();\n  requestAnimationFrame(ll);\n};\nll();\n\n//# sourceURL=webpack:///./game.js?");

/***/ }),

/***/ "./k.js":
/*!**************!*\
  !*** ./k.js ***!
  \**************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction k() {\n  console.log('a');\n  window.press = {};\n  window.onkeydown = function (e) {\n    press[e.keyCode] = true;\n  };\n  window.onkeyup = function (e) {\n    press[e.keyCode] = false;\n  };\n  document.onmousedown = function (e) {\n    if (e.button === 0) {\n      press[0] = true;\n    }\n    if (e.button === 2) {\n      press[2] = true;\n    }\n    e.preventDefault();\n  };\n}\nk.UP = 90;\nk.LEFT = 81;\nk.DOWN = 83;\nk.RIGHT = 68;\n\nk.A = 16;\nk.B = 32;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (k);\n\n//# sourceURL=webpack:///./k.js?");

/***/ }),

/***/ "./p.js":
/*!**************!*\
  !*** ./p.js ***!
  \**************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v2c */ \"./v2c.js\");\n/* harmony import */ var _k__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./k */ \"./k.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar P = function () {\n  function P() {\n    _classCallCheck(this, P);\n\n    this.p = new _v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](100, 700);\n    this.s = new _v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\n  }\n\n  _createClass(P, [{\n    key: 'k',\n    value: function k() {\n      if (press[_k__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEFT]) {\n        // up\n        this.p.add(this.s.set(30, 0));\n      }\n\n      if (press[_k__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RIGHT]) {\n        //left\n        this.p.add(this.s.set(-30, 0));\n      }\n    }\n  }, {\n    key: 'd',\n    value: function d() {\n      ctx.fillStyle = '#fff';\n      this.p.fillRect(20, 20);\n    }\n  }]);\n\n  return P;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (P);\n\n//# sourceURL=webpack:///./p.js?");

/***/ }),

/***/ "./v2c.js":
/*!****************!*\
  !*** ./v2c.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar V2c = function () {\n  function V2c(x, y) {\n    _classCallCheck(this, V2c);\n\n    this.x = x;this.y = y;\n  }\n\n  _createClass(V2c, [{\n    key: \"fillRect\",\n    value: function fillRect(w, h) {\n      ctx.fillRect(this.x, this.y, w, h);\n    }\n  }, {\n    key: \"set\",\n    value: function set(x, y) {\n      this.x = x;this.y = y;\n      return this;\n    }\n  }, {\n    key: \"add\",\n    value: function add(v) {\n      this.x += v.x;this.y += v.y;\n      return this;\n    }\n  }]);\n\n  return V2c;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (V2c);\n\n//# sourceURL=webpack:///./v2c.js?");

/***/ }),

/***/ "./w.js":
/*!**************!*\
  !*** ./w.js ***!
  \**************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _k__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./k */ \"./k.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar W = function () {\n  function W(t_size) {\n    _classCallCheck(this, W);\n\n    this.a = 0;\n    this.tiles = [];\n    this.t_size = t_size;\n    log('generate water');\n    for (var i = 0; i < 10; i++) {\n      for (var j = 0; j < 500; j++) {\n        this.tiles[i + j * 10] = Math.random() < 0.1;\n      }\n    }\n  }\n\n  _createClass(W, [{\n    key: 'k',\n    value: function k() {\n      if (press[_k__WEBPACK_IMPORTED_MODULE_0__[\"default\"].UP]) {\n        this.a++;\n      }\n    }\n  }, {\n    key: 'd',\n    value: function d() {\n      for (var i = 0; i < 10; i++) {\n        for (var j = 0; j < 500; j++) {\n          ctx.fillStyle = this.tiles[i + j * 10] ? '#479' : '#999';\n          ctx.fillRect(i * this.t_size, j * this.t_size + this.a, this.t_size, this.t_size);\n        }\n      }\n    }\n  }]);\n\n  return W;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (W);\n\n//# sourceURL=webpack:///./w.js?");

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./game.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./game.js */\"./game.js\");\n\n\n//# sourceURL=webpack:///multi_./game.js?");

/***/ })

/******/ });