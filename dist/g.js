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

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Background {\r\n  constructor() {\r\n    this.cells = []\r\n    for(let i = 0; i < 30*30; i++) {\r\n      this.cells.push(\r\n        Math.floor(Math.random() * 100)\r\n      )\r\n    }\r\n  }\r\n\r\n  d() {\r\n\r\n    for(let i = 0; i < 30 * 30; i ++) {\r\n      let c = Math.abs(this.cells[i] - 5) / 500\r\n      ctx.fillStyle = `rgba(150,0,0,${c})`\r\n      ctx.fillRect((i % 30) * 30, Math.floor(i / 30) * 30, 30, 30)\r\n    }\r\n\r\n  }\r\n\r\n\r\n  l() {\r\n    for(let i = 0; i < 30 * 30; i ++) {\r\n      if(this.cells[i] < 100)\r\n        this.cells[i] += .4\r\n      else\r\n        this.cells[i] = 0\r\n    }\r\n  }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/ctrl.js":
/*!*********************!*\
  !*** ./src/ctrl.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction k() {\r\n  window.press = {}\r\n  window.onkeydown = (e) => {\r\n    press[e.keyCode] = true\r\n  }\r\n  window.onkeyup = (e) => {\r\n    press[e.keyCode] = false\r\n  }\r\n}\r\nk.UP = 90\r\nk.LEFT = 81\r\nk.DOWN = 83\r\nk.RIGHT = 68\r\n\r\nk.A = 16\r\nk.B = 32\r\nk.HELP = 72\r\nk.RESET = 82\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (k);\n\n//# sourceURL=webpack:///./src/ctrl.js?");

/***/ }),

/***/ "./src/edge.js":
/*!*********************!*\
  !*** ./src/edge.js ***!
  \*********************/
/*! exports provided: Edge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Edge\", function() { return Edge; });\nclass Edge {\r\n  constructor(from, to, remaining) {\r\n    this.from = from\r\n    this.to = to\r\n    this.remaining = remaining\r\n    this.isUnlimited = remaining === -1\r\n  }\r\n\r\n  data(h) {\r\n    return [this.from.x + this.from.y * h, this.to.x + this.to.y * h, this.remaining]\r\n  }\r\n\r\n  d() {\r\n    ctx.beginPath()\r\n    ctx.moveTo(this.from.x * 30, this.from.y * 30)\r\n    ctx.lineTo(this.to.x * 30, this.to.y * 30)\r\n    if(this.isUnlimited) {\r\n      ctx.strokeStyle = \"#78ff3b\"\r\n    } else if(this.remaining === 1) {\r\n      ctx.strokeStyle = \"#41c\"\r\n    } else if(this.remaining === 0){\r\n      ctx.strokeStyle = \"rgba(68,17,204,0.2)\"\r\n    }\r\n    ctx.lineWidth = 5\r\n    ctx.stroke()\r\n    ctx.lineWidth = 1\r\n  }\r\n\r\n  de() {\r\n    ctx.beginPath()\r\n    ctx.moveTo(this.from.x * 30, this.from.y * 30)\r\n    ctx.lineTo(this.to.x * 30, this.to.y * 30)\r\n    if(this.isUnlimited) {\r\n      ctx.strokeStyle = \"#78ff3b\"\r\n    } else if(this.remaining === 1) {\r\n      ctx.strokeStyle = \"#41c\"\r\n    } else if(this.remaining === 0){\r\n      ctx.strokeStyle = \"rgba(68,17,204,0.2)\"\r\n    }\r\n    ctx.lineWidth = 5\r\n    ctx.stroke()\r\n    ctx.lineWidth = 1\r\n  }\r\n\r\n  consume() {\r\n    this.remaining--\r\n  }\r\n\r\n  isAvailable() {\r\n    return this.isUnlimited || this.remaining > 0\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/edge.js?");

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Editor\", function() { return Editor; });\n/* harmony import */ var _lib_v2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/v2c */ \"./src/lib/v2c.js\");\n/* harmony import */ var _vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertex */ \"./src/vertex.js\");\n/* harmony import */ var _edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edge */ \"./src/edge.js\");\n\r\n\r\n\r\n\r\nclass Editor {\r\n  constructor() {\r\n    this.w = 10\r\n    this.h = 10\r\n    this.edges = []\r\n    this.vertices = []\r\n    this.pen = 'data'\r\n    this.currentItem = null\r\n    this.penPos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    dataB.onclick = () => {\r\n      this.pen = 'data'\r\n    }\r\n    startB.onclick = () => {\r\n      this.pen = 'start'\r\n    }\r\n    endB.onclick = () => {\r\n      this.pen = 'end'\r\n    }\r\n    gateB.onclick = () => {\r\n      this.pen = 'gate'\r\n    }\r\n    ttlB.onclick = () => {\r\n      this.pen = 'ttl'\r\n    }\r\n\r\n\r\n\r\n    c.onclick = (e) => {\r\n      if(this.pStance() < 6) {\r\n        let p = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.floor((e.offsetX + 15) / 30) ,\r\n          Math.floor((e.offsetY + 15) / 30))\r\n        let v = new _vertex__WEBPACK_IMPORTED_MODULE_1__[\"Vertex\"](p, this.pen, 0)\r\n        let vfind = this.vertices.find(vertex => (vertex.pos.eq(p)))\r\n        if(vfind) {\r\n          this.currentItem = vfind\r\n        } else {\r\n          this.vertices.push(v)\r\n          this.currentItem = v\r\n        }\r\n        this.updateCurrent()\r\n      }\r\n      /* edges */\r\n\r\n      /* h line */\r\n\r\n      let xDiff =  this.penPos.x - Math.floor((this.penPos.x) / 30) * 30\r\n      let yDiff =  this.penPos.y - Math.floor((this.penPos.y + 15) / 30) * 30\r\n      if(xDiff > 6 && xDiff < 24 && yDiff < 6 && yDiff > -6) {\r\n        let fx = Math.floor((this.penPos.x) / 30)\r\n        let fy = Math.floor((this.penPos.y + 15) / 30)\r\n        let f = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fx, fy)\r\n        let to = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fx + 1, fy)\r\n        let e = new _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"](f, to, 1)\r\n        let efind = this.edges.find(edge => (edge.from.eq(f) && edge.to.eq(to)))\r\n        if(efind) {\r\n          this.currentItem = efind\r\n        } else {\r\n          this.edges.push(e)\r\n          this.currentItem = e\r\n        }\r\n\r\n        this.updateCurrent()\r\n      }\r\n\r\n      /* v lines */\r\n\r\n      xDiff =  this.penPos.x - Math.floor((this.penPos.x + 15) / 30) * 30\r\n      yDiff =  this.penPos.y - Math.floor((this.penPos.y ) / 30) * 30\r\n\r\n      if(yDiff > 6 && yDiff < 24 && xDiff > -6 && xDiff < 6) {\r\n        let fx = Math.floor((this.penPos.x + 15) / 30)\r\n        let fy = Math.floor((this.penPos.y ) / 30)\r\n        let f = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fx, fy)\r\n        let to = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fx, fy + 1)\r\n        let e = new _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"](f, to, 1)\r\n        this.edges.push(e)\r\n        this.currentItem = e\r\n        this.updateCurrent()\r\n      }\r\n\r\n      this.updateMap()\r\n\r\n    }\r\n\r\n    setting.onchange = () => {\r\n      if(this.currentItem instanceof _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"]) {\r\n        this.currentItem.remaining = parseInt(setting.value)\r\n      } else {\r\n        this.currentItem.opt = parseInt(setting.value)\r\n      }\r\n      this.update()\r\n    }\r\n\r\n    ttl.onchange = () => {\r\n      this.ttl = parseInt(ttl.value)\r\n      this.updateMap()\r\n    }\r\n\r\n\r\n    c.onmousemove = (e) => {\r\n      this.penPos.set(e.offsetX, e.offsetY)\r\n    }\r\n  }\r\n\r\n  updateMap() {\r\n    let mapValues = {\r\n      ttl : this.ttl,\r\n      w : this.w,\r\n      h : this.h,\r\n      edges: this.edges.map((edge) => {\r\n        return edge.data(this.h)\r\n      }),\r\n      vertices:\r\n        this.vertices.map((vertex) => {\r\n          return vertex.data(this.h)\r\n        })\r\n    }\r\n    mapData.value = JSON.stringify(mapValues)\r\n  }\r\n\r\n  d() {\r\n    ctx.fillRect(0,0,100,100)\r\n    for(let i = 0; i < this.w; i ++) {\r\n      for(let j = 0; j < this.h; j ++) {\r\n        ctx.beginPath()\r\n        ctx.arc(i * 30, j * 30, 6, 0, Math.PI * 2)\r\n        ctx.strokeStyle = '#fff'\r\n        ctx.stroke()\r\n      }\r\n    }\r\n    for(let i = 0; i < this.w; i ++) {\r\n      ctx.beginPath()\r\n      ctx.moveTo(0, 30 * i)\r\n      ctx.lineTo(this.w * 30 - 30, 30 * i)\r\n      ctx.strokeStyle = 'rgba(255,0,0,0.4)'\r\n      ctx.stroke()\r\n    }\r\n\r\n    for(let i = 0; i < this.h; i ++) {\r\n      ctx.beginPath()\r\n      ctx.moveTo(30 * i, 0)\r\n      ctx.lineTo(30 * i, this.h * 30 - 30)\r\n      ctx.strokeStyle = 'rgba(255,0,0,0.4)'\r\n      ctx.stroke()\r\n    }\r\n\r\n    ctx.beginPath()\r\n\r\n    let s = this.pStance()\r\n\r\n    if(s < 6) {\r\n      ctx.arc(Math.floor((this.penPos.x + 15) / 30) * 30, Math.floor((this.penPos.y + 15) / 30) * 30, 8, 0, Math.PI * 2)\r\n      ctx.fillStyle = '#fff'\r\n      ctx.fill()\r\n    }\r\n\r\n    /* h lines */\r\n    ctx.fillStyle = '#09c'\r\n\r\n    let xDiff =  this.penPos.x - Math.floor((this.penPos.x) / 30) * 30\r\n    let yDiff =  this.penPos.y - Math.floor((this.penPos.y + 15) / 30) * 30\r\n    if(xDiff > 6 && xDiff < 24 && yDiff < 6 && yDiff > -6) {\r\n      ctx.fillRect(Math.floor((this.penPos.x) / 30) * 30, Math.floor((this.penPos.y + 15) / 30) * 30 - 5, 30 , 10)\r\n    }\r\n\r\n    /* v lines */\r\n\r\n    xDiff =  this.penPos.x - Math.floor((this.penPos.x + 15) / 30) * 30\r\n    yDiff =  this.penPos.y - Math.floor((this.penPos.y ) / 30) * 30\r\n\r\n    if(yDiff > 6 && yDiff < 24 && xDiff > -6 && xDiff < 6) {\r\n      ctx.fillRect(Math.floor((this.penPos.x + 15) / 30) * 30 - 5, Math.floor((this.penPos.y ) / 30) * 30, 10 , 30)\r\n    }\r\n\r\n    this.vertices.forEach((vertex) => {\r\n      vertex.de()\r\n    })\r\n\r\n    this.edges.forEach((edge) => {\r\n      edge.de()\r\n    })\r\n\r\n\r\n    if(this.currentItem) {\r\n      if(this.currentItem instanceof _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"]) {\r\n        ctx.beginPath()\r\n        ctx.moveTo(this.currentItem.from.x * 30, this.currentItem.from.y * 30)\r\n        ctx.lineTo(this.currentItem.to.x * 30, this.currentItem.to.y * 30)\r\n        ctx.strokeStyle = '#ff8919'\r\n        ctx.stroke()\r\n      } else {\r\n        ctx.beginPath()\r\n        ctx.strokeStyle = '#ff8919'\r\n        ctx.arc(this.currentItem.pos.x * 30, this.currentItem.pos.y * 30, 8, 0 , Math.PI * 2)\r\n        ctx.stroke()\r\n      }\r\n    }\r\n\r\n\r\n  }\r\n  pStance() {\r\n    return new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.floor((this.penPos.x + 15) / 30) * 30,\r\n      Math.floor((this.penPos.y + 15) / 30) * 30).stance(new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.penPos.x, this.penPos.y))\r\n  }\r\n\r\n\r\n  updateCurrent() {\r\n    if(this.currentItem instanceof _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"]) {\r\n      setting.value = this.currentItem.remaining\r\n      type.innerHTML = 'Edge'\r\n    } else {\r\n      setting.value = this.currentItem.opt\r\n      type.innerHTML = 'Vertex'\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/editor.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_manager */ \"./src/menu_manager.js\");\n/* harmony import */ var _maps_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps/maps */ \"./src/maps/maps.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network */ \"./src/network.js\");\n/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ctrl */ \"./src/ctrl.js\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ \"./src/editor.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _menus_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menus/home */ \"./src/menus/home.js\");\n/* harmony import */ var _menus_win__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menus/win */ \"./src/menus/win.js\");\n/* harmony import */ var _menus_help__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menus/help */ \"./src/menus/help.js\");\n/* harmony import */ var _menus_hint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menus/hint */ \"./src/menus/hint.js\");\n\r\n\r\nwindow.C_WIDTH = 400\r\nwindow.C_HEIGHT = 800\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.hint = new _menus_hint__WEBPACK_IMPORTED_MODULE_10__[\"default\"]()\r\nObject(_ctrl__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\nwindow.currentLevel = 0\r\n\r\nconst win = new _menus_win__WEBPACK_IMPORTED_MODULE_8__[\"default\"]()\r\nconst help = new _menus_help__WEBPACK_IMPORTED_MODULE_9__[\"default\"]()\r\nconst editor = new _editor__WEBPACK_IMPORTED_MODULE_5__[\"Editor\"]()\r\nlet w = new _network__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel])\r\nwindow.p = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\nwindow.p.setLevel(_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel], w)\r\n\r\nwindow.nextLevel = () => {\r\n  currentLevel++\r\n  if(currentLevel === _maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length) {\r\n    window.gameState = 'win'\r\n    return\r\n  }\r\n  w = new _network__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel])\r\n  window.p.setLevel(_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel], w)\r\n}\r\n\r\nconst background = new _background__WEBPACK_IMPORTED_MODULE_6__[\"default\"]()\r\nwindow.ctx = c.getContext('2d')\r\n\r\nc.width = C_WIDTH\r\nc.height = C_HEIGHT\r\n\r\nctx.fillStyle = '#000'\r\nctx.fillRect(0,0,C_WIDTH,C_HEIGHT)\r\nwindow.gameState = 'home'\r\n\r\nlet homeMenu = new _menu_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Disssconnected', _menus_home__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\r\nlet selectLevelMenu = new _menu_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Select Level', _menus_home__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\r\n\r\nlet ll = () => {\r\n  c.width+=0\r\n  background.l()\r\n  background.d()\r\n  if(gameState === 'home') {\r\n    homeMenu.k()\r\n    homeMenu.d()\r\n  } else if(gameState === 'level-select') {\r\n    selectLevelMenu.k()\r\n    selectLevelMenu.d()\r\n  } else if(gameState === 'play') {\r\n    p.k()\r\n\r\n    w.d()\r\n    p.d()\r\n    hint.d()\r\n  } else if(gameState === 'editor'){\r\n    editor.d()\r\n  } else if(gameState === 'win') {\r\n    win.d()\r\n  } else if(gameState === 'help') {\r\n    help.k().d()\r\n  }\r\n\r\n  requestAnimationFrame(ll)\r\n}\r\nll()\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/lib/v2c.js":
/*!************************!*\
  !*** ./src/lib/v2c.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass V2c {\r\n  constructor(x,y) {\r\n    this.x = x; this.y = y\r\n  }\r\n  fillRect(w,h) {\r\n    ctx.fillRect(this.x - w / 2,this.y - h / 2,w,h)\r\n  }\r\n  set(x,y) {\r\n    this.x=x;this.y=y\r\n    return this\r\n  }\r\n  cadd(x, y) {\r\n    let n = new V2c(this.x, this.y)\r\n    n.add(new V2c(x, y))\r\n    return n\r\n  }\r\n  add(v) {\r\n    this.x+=v.x;this.y+=v.y\r\n    return this\r\n  }\r\n  eq(v) {\r\n    return this.x === v.x && this.y === v.y\r\n  }\r\n  toString() {\r\n    return `${this.x} | ${this.y}`\r\n  }\r\n  stance(v) {\r\n    return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2))\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (V2c);\n\n//# sourceURL=webpack:///./src/lib/v2c.js?");

/***/ }),

/***/ "./src/maps/maps.js":
/*!**************************!*\
  !*** ./src/maps/maps.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n  {\"ttl\":4,\"w\":10,\"h\":10,\"edges\":[[15,25,1],[25,35,1],[35,45,1],[45,55,1],[15,16,1],[16,26,1],[26,36,1],[36,46,1],[46,56,1],[55,56,1]],\"vertices\":[{\"id\":15,\"t\":\"start\",\"th\":0},{\"id\":55,\"t\":\"end\",\"th\":0}]},\r\n  {ttl :10,\"w\":10,\"h\":10,\"edges\":[[34,44,1],[44,54,1],[54,64,1],[64,74,1],[74,84,1],[64,65,1]],\"vertices\":[{\"id\":34,\"t\":\"start\"},{\"id\":84,\"t\":\"end\"},{\"id\":74,\"t\":\"gate\", th : 0},{\"id\":65,\"t\":\"data\"}]},\r\n  {\"ttl\":50,\"w\":10,\"h\":10,\"edges\":[[33,34,1],[34,35,1],[35,36,1],[36,37,1],[37,38,1],[38,48,1],[48,58,1],[58,68,1],[68,78,1],[78,88,1],[34,44,1],[44,54,1],[54,55,1],[55,56,1],[46,56,1],[36,46,1]],\"vertices\":[{\"id\":33,\"t\":\"start\",\"th\":0},{\"id\":88,\"t\":\"end\",\"th\":0},{\"id\":78,\"t\":\"gate\",\"th\":1},{\"id\":54,\"t\":\"data\",\"th\":0},{\"id\":56,\"t\":\"data\",\"th\":0}]}\r\n  ]);\n\n//# sourceURL=webpack:///./src/maps/maps.js?");

/***/ }),

/***/ "./src/menu_item.js":
/*!**************************!*\
  !*** ./src/menu_item.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuItem; });\nclass MenuItem {\r\n  constructor(item, pos, current = false) {\r\n    this.current = current\r\n    this.gameState = item.g\r\n    this.pos = pos\r\n    this.text = item.t\r\n  }\r\n  d() {\r\n    if(this.current) {\r\n      ctx.fillStyle = \"#fff\"\r\n      ctx.fillRect(this.pos.x-30, this.pos.y-30, 150, 50)\r\n      ctx.fillStyle = \"#000\"\r\n      ctx.fillText(this.text, this.pos.x, this.pos.y)\r\n    } else {\r\n      ctx.fillStyle = \"#fff\"\r\n      ctx.fillText(this.text, this.pos.x, this.pos.y)\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/menu_item.js?");

/***/ }),

/***/ "./src/menu_manager.js":
/*!*****************************!*\
  !*** ./src/menu_manager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuManager; });\n/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_item */ \"./src/menu_item.js\");\n/* harmony import */ var _lib_v2c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/v2c */ \"./src/lib/v2c.js\");\n/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ctrl */ \"./src/ctrl.js\");\n\r\n\r\n\r\n\r\nclass MenuManager {\r\n  constructor(title, items) {\r\n    this.title = title\r\n    this.current = 0\r\n    this.idle = true\r\n    this.items = []\r\n    items.forEach((item, i) => {\r\n      this.items.push(new _menu_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item, new _lib_v2c__WEBPACK_IMPORTED_MODULE_1__[\"default\"](30, i * 30 + 50), i === 0))\r\n    })\r\n  }\r\n\r\n  d() {\r\n    ctx.fillStyle = \"#fff\"\r\n    ctx.fillText(this.title, 30,10)\r\n    this.items.forEach((item) => {\r\n      item.d()\r\n    })\r\n  }\r\n  wait() {\r\n    this.idle = false\r\n    setTimeout(() => {\r\n      this.idle = true\r\n    }, 150)\r\n  }\r\n\r\n  k() {\r\n    if(this.idle) {\r\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_2__[\"default\"].UP]) {\r\n        this.current --\r\n        this.wait()\r\n      } if(press[_ctrl__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DOWN]) {\r\n        this.current ++\r\n        this.wait()\r\n      }\r\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_2__[\"default\"].B]) {\r\n        window.gameState = this.items[this.current].gameState\r\n        this.wait()\r\n      }\r\n    }\r\n    this.items.forEach((item,i) => {\r\n      if(i === this.current) {\r\n        item.current = true\r\n      } else {\r\n        item.current = false\r\n      }\r\n    })\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/menu_manager.js?");

/***/ }),

/***/ "./src/menus/help.js":
/*!***************************!*\
  !*** ./src/menus/help.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return help; });\n/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ctrl */ \"./src/ctrl.js\");\n\r\n\r\nclass help {\r\n  d() {\r\n    ctx.fillStyle = 'rgba(0,0,0,.5)'\r\n    ctx.fillRect(20,20, C_WIDTH - 40, C_HEIGHT - 40)\r\n    ctx.fillStyle = '#85e2ff'\r\n    ctx.fillText('Data', 100, 100)\r\n  }\r\n\r\n  k() {\r\n    if(!press[_ctrl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HELP]) {\r\n      window.gameState = 'play'\r\n    }\r\n    return this\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/menus/help.js?");

/***/ }),

/***/ "./src/menus/hint.js":
/*!***************************!*\
  !*** ./src/menus/hint.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hint; });\nclass Hint {\r\n  constructor() {\r\n    this.hints = [\r\n      {m:'Press WASD or ZQSD for moving, SPACE for action H in game for help'},\r\n      {m:'Press R to reset level'},\r\n    ]\r\n  }\r\n  d() {\r\n    if(this.active) {\r\n      ctx.fillStyle = 'rgba(0,0,0,.5)'\r\n      ctx.fillRect(20, C_HEIGHT - 60, 300, 50)\r\n      ctx.fillStyle = '#fff'\r\n      ctx.fillText(this.currentHint.m, 30, C_HEIGHT - 20)\r\n    }\r\n  }\r\n\r\n  show(hint) {\r\n    this.active = true\r\n    if(this.hints[hint].used) {\r\n      return false\r\n    }\r\n    this.currentHint = this.hints[hint]\r\n    this.currentHint.used = true\r\n    setTimeout(() => {this.active = false}, 5000)\r\n    return true\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/menus/hint.js?");

/***/ }),

/***/ "./src/menus/home.js":
/*!***************************!*\
  !*** ./src/menus/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n  {t :'Play', g : 'play'},\r\n  {t :'Menu select', g : 'select'},\r\n  {t :'Editor', g : 'editor'},\r\n]);\r\n\n\n//# sourceURL=webpack:///./src/menus/home.js?");

/***/ }),

/***/ "./src/menus/win.js":
/*!**************************!*\
  !*** ./src/menus/win.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Win; });\nclass Win {\r\n  constructor() {\r\n    this.credits = [\r\n      'Freely inspired by LOSSST by Xem',\r\n      'hardcoded by alternative'\r\n    ]\r\n    this.cd = 100\r\n  }\r\n\r\n  d() {\r\n    ctx.fillStyle = '#fff'\r\n    this.cd -= .4\r\n    ctx.fillText('You win', 10, this.cd)\r\n    for(let i = 0; i < this.credits.length; i++) {\r\n      ctx.fillText(this.credits[i], 10, this.cd + i * 20 + 20)\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/menus/win.js?");

/***/ }),

/***/ "./src/network.js":
/*!************************!*\
  !*** ./src/network.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_v2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/v2c */ \"./src/lib/v2c.js\");\n/* harmony import */ var _vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertex */ \"./src/vertex.js\");\n/* harmony import */ var _edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edge */ \"./src/edge.js\");\n\r\n\r\n\r\n\r\nclass W {\r\n  constructor(map) {\r\n    this.map = map\r\n    this.w = map.w\r\n    this.h = map.h\r\n\r\n    this.vertices = []//[{pos : new V2c(0, 1), id : 0}, {pos : new V2c(1, 1), id : 1}]\r\n    this.edges = []//[{from : new V2c(0, 1), to : new V2c(1, 1)}]\r\n    this.buildNetwork(this.map)\r\n  }\r\n\r\n  reset() {\r\n    this.buildNetwork(this.map)\r\n  }\r\n\r\n  buildNetwork() {\r\n    this.vertices = []\r\n    this.edges = []\r\n    this.map.vertices.forEach((vertex) => {\r\n      let pos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vertex.id % this.w, Math.floor(vertex.id / this.w))\r\n      this.vertices.push(new _vertex__WEBPACK_IMPORTED_MODULE_1__[\"Vertex\"](pos, vertex.t, vertex.th))\r\n    })\r\n\r\n    this.map.edges.forEach((edge) => {\r\n      let fromPos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](edge[0] % this.w, Math.floor(edge[0] / this.w))\r\n      let toPos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](edge[1] % this.w, Math.floor(edge[1] / this.w))\r\n      this.edges.push(new _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"](fromPos, toPos,  edge[2]))\r\n\r\n      if(!this.vertices.find((node) => node.pos.eq(fromPos))) {\r\n        this.vertices.push(new _vertex__WEBPACK_IMPORTED_MODULE_1__[\"Vertex\"](fromPos, 'n'))\r\n      }\r\n      if(!this.vertices.find((node) => node.pos.eq(toPos))) {\r\n        this.vertices.push(new _vertex__WEBPACK_IMPORTED_MODULE_1__[\"Vertex\"](toPos))\r\n      }\r\n    })\r\n  }\r\n\r\n\r\n  d() {\r\n    this.edges.forEach((edge) => {\r\n      edge.d()\r\n    })\r\n    this.vertices.forEach((vertex) => {\r\n      vertex.d()\r\n    })\r\n  }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (W);\r\n\r\n\n\n//# sourceURL=webpack:///./src/network.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_v2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/v2c */ \"./src/lib/v2c.js\");\n/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ctrl */ \"./src/ctrl.js\");\n\r\n\r\nclass P {\r\n  constructor() {\r\n    this.moving = false\r\n  }\r\n\r\n  setLevel(map, network) {\r\n    this.map = map\r\n    this.w = map.w\r\n    let start = map.vertices.find((vertex) =>\r\n      vertex.t === 'start'\r\n    )\r\n    this.pos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](start.id % this.w, Math.floor(start.id / this.w))\r\n\r\n    this.edges = network.edges\r\n    this.vertices = network.vertices\r\n    this.ttl = map.ttl\r\n    this.network = network\r\n    this.dataCount = 0\r\n  }\r\n\r\n  reset() {\r\n    this.network.reset()\r\n    this.edges = this.network.edges\r\n    this.vertices = this.network.vertices\r\n    let start = this.map.vertices.find((vertex) =>\r\n      vertex.t === 'start'\r\n    )\r\n    this.pos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](start.id % this.w, Math.floor(start.id / this.w))\r\n    this.ttl = this.map.ttl\r\n  }\r\n\r\n  k() {\r\n    if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].HELP]) {\r\n      window.gameState = 'help'\r\n    }\r\n\r\n    if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RESET]) {\r\n      this.reset()\r\n    }\r\n\r\n    if(!this.moving) {\r\n      let futureRoute\r\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEFT]) {\r\n        let p = this.pos.cadd(-1,0)\r\n        futureRoute = {from : this.pos, to : p}\r\n        if(this.checkMove(futureRoute)) {\r\n          this.pos = p\r\n          this.move()\r\n        }\r\n      }\r\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RIGHT]) {\r\n        console.log(\"right\")\r\n        let p = this.pos.cadd(1,0)\r\n        futureRoute = {from : this.pos, to : p}\r\n        if(this.checkMove(futureRoute)) {\r\n          this.pos = p\r\n          this.move()\r\n        }\r\n      }\r\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].UP]) {\r\n        let p = this.pos.cadd(0,-1)\r\n        futureRoute = {from : this.pos, to : p}\r\n        if(this.checkMove(futureRoute)) {\r\n          this.pos = p\r\n          this.move()\r\n        }\r\n      }\r\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DOWN]) {\r\n        let p = this.pos.cadd(0,1)\r\n        futureRoute = {from : this.pos, to : p}\r\n        if(this.checkMove(futureRoute)) {\r\n          this.pos = p\r\n          this.move()\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  getRoute(route) {\r\n    return this.edges.find((edge) => {\r\n      return (edge.from.eq(route.from) && edge.to.eq(route.to)) || (edge.from.eq(route.to) && edge.to.eq(route.from))\r\n    })\r\n  }\r\n\r\n  checkMove(route) {\r\n    this.handleMove()\r\n    let availableRoute = this.getRoute(route)\r\n    if(availableRoute && availableRoute.isAvailable()) {\r\n\r\n      if(this.ttl < 1) {\r\n        window.hint.show(1)\r\n        return false\r\n      } else {\r\n        this.ttl --\r\n      }\r\n      availableRoute.consume()\r\n      return true\r\n    }\r\n    return false\r\n  }\r\n\r\n\r\n\r\n\r\n  d() {\r\n    ctx.beginPath()\r\n    ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\r\n    if(this.move) {\r\n      ctx.fillStyle='#f0f'\r\n    } else {\r\n      ctx.fillStyle='#0f0'\r\n    }\r\n    ctx.fill()\r\n    ctx.fillStyle = \"#fff\"\r\n    ctx.fillText(this.ttl, this.pos.x * 30 + 10, this.pos.y * 30 - 10)\r\n  }\r\n\r\n  handleMove() {\r\n    this.moving = true\r\n    setTimeout(() => {\r\n      this.moving = false\r\n    }, 250)\r\n  }\r\n\r\n  move() {\r\n    this.vertices.forEach((vertex) => {\r\n      if(vertex.pos.eq(this.pos) && vertex.type === 'data' && vertex.status !== false) {\r\n        this.dataCount++\r\n        vertex.consume()\r\n      }\r\n      if(vertex.pos.eq(this.pos) && vertex.type === 'end') {\r\n        nextLevel()\r\n      }\r\n    })\r\n\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (P);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/vertex.js":
/*!***********************!*\
  !*** ./src/vertex.js ***!
  \***********************/
/*! exports provided: Vertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vertex\", function() { return Vertex; });\nclass Vertex {\r\n  constructor(pos, type, opt) {\r\n    this.pos = pos\r\n    this.type = type\r\n    this.opt = opt\r\n    this.consumed = false\r\n  }\r\n\r\n  de() {\r\n    ctx.fillStyle = '#fff'\r\n    if(this.type === 'data') {\r\n      ctx.fillStyle = \"#3ae2ff\"\r\n    } else if(this.type === 'gate') {\r\n        ctx.fillStyle = \"#50ff2b\"\r\n    } else if(this.type === 'end') {\r\n        ctx.fillStyle = \"#001eff\"\r\n    } else if(this.type === 'start') {\r\n        ctx.fillStyle = \"#fffa1c\"\r\n    } else if(this.type === 'ttl') {\r\n        ctx.fillStyle = \"#ff00a3\"\r\n    } else {\r\n      ctx.fillStyle = \"#ff9200\"\r\n    }\r\n    ctx.beginPath()\r\n    ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\r\n    ctx.fill()\r\n  }\r\n\r\n  data(h) {\r\n    return {id : this.pos.x + this.pos.y * h, t : this.type, th : this.opt}\r\n  }\r\n\r\n  d() {\r\n    ctx.fillStyle = '#fff'\r\n    if(this.type === 'data') {\r\n      if(this.consumed) {\r\n        ctx.fillStyle = '#811'\r\n      } else {\r\n        ctx.fillStyle = '#0ff'\r\n      }\r\n      ctx.fillRect(this.pos.x * 30-5, this.pos.y * 30-5, 10, 10)\r\n    } else if(this.type === 'gate') {\r\n        ctx.beginPath()\r\n        ctx.arc(this.pos.x * 30, this.pos.y * 30, 10, 0, Math.PI * 2)\r\n        if (p.dataCount >= this.opt) {\r\n            ctx.strokeStyle = \"#294\"\r\n        } else {\r\n            ctx.strokeStyle = \"#911\"\r\n        }\r\n        ctx.setLineDash([4, 2, 2, 2])\r\n        ctx.stroke()\r\n    } else if(this.type === 'end') {\r\n        ctx.fillStyle = '#09127f'\r\n        ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\r\n        ctx.fill()\r\n    } else {\r\n      ctx.beginPath()\r\n      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\r\n      ctx.fill()\r\n    }\r\n  }\r\n  consume() {\r\n    this.consumed = true\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/vertex.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/game.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/game.js */\"./src/game.js\");\n\n\n//# sourceURL=webpack:///multi_./src/game.js?");

/***/ })

/******/ });