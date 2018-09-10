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
eval("__webpack_require__.r(__webpack_exports__);\nclass Background {\n  constructor() {\n    this.cells = []\n    for(let i = 0; i < 30*30; i++) {\n      this.cells.push(\n        Math.floor(Math.random() * 100)\n      )\n    }\n  }\n\n  d() {\n\n    for(let i = 0; i < 30 * 30; i ++) {\n      let c = Math.abs(this.cells[i] - 5) / 500\n      ctx.fillStyle = `rgba(150,0,0,${c})`\n      ctx.fillRect((i % 30) * 30, Math.floor(i / 30) * 30, 30, 30)\n    }\n\n  }\n\n\n  l() {\n    for(let i = 0; i < 30 * 30; i ++) {\n      if(this.cells[i] < 100)\n        this.cells[i] += .4\n      else\n        this.cells[i] = 0\n    }\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/beacon.js":
/*!***********************!*\
  !*** ./src/beacon.js ***!
  \***********************/
/*! exports provided: Beacon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Beacon\", function() { return Beacon; });\n/* harmony import */ var _lib_v2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/v2c */ \"./src/lib/v2c.js\");\n\n\nclass Beacon {\n  constructor() {\n    this.active = false\n    this.pos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0)\n    this.time = 0\n    this.lastUpdate = 0\n  }\n\n  placeBeacon(playerPos) {\n    this.active = true\n    this.pos.set(playerPos.x, playerPos.y)\n    this.time = 5000\n  }\n\n\n  reset() {\n    this.active = false\n  }\n\n\n  k() {\n    if(this.time < 0 && this.active) {\n      p.pos.set(this.pos.x, this.pos.y)\n      this.active = false\n    }\n  }\n\n  d() {\n    if(this.active) {\n      ctx.beginPath()\n      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\n      ctx.strokeStyle = '#fff'\n      ctx.strokeWidth = 2\n      ctx.stroke()\n\n      ctx.fillText(this.calcTime(), this.pos.x * 30, this.pos.y * 30)\n\n    }\n  }\n\n  calcTime() {\n    let d = new Date().getTime() - this.lastUpdate\n    this.lastUpdate = new Date()\n    this.time = this.time - d\n    return (this.time / 1000).toFixed(0)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/beacon.js?");

/***/ }),

/***/ "./src/ctrl.js":
/*!*********************!*\
  !*** ./src/ctrl.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction k() {\n  window.press = {}\n  window.onkeydown = (e) => {\n    press[e.keyCode] = true\n  }\n  window.onkeyup = (e) => {\n    press[e.keyCode] = false\n  }\n}\nk.UP = 90\nk.LEFT = 81\nk.DOWN = 83\nk.RIGHT = 68\n\nk.A = 16\nk.B = 32\nk.HELP = 72\nk.RESET = 82\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (k);\n\n//# sourceURL=webpack:///./src/ctrl.js?");

/***/ }),

/***/ "./src/edge.js":
/*!*********************!*\
  !*** ./src/edge.js ***!
  \*********************/
/*! exports provided: Edge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Edge\", function() { return Edge; });\nclass Edge {\n  constructor(from, to, remaining) {\n    this.from = from\n    this.to = to\n    this.remaining = remaining\n    this.isUnlimited = remaining === -1\n  }\n\n  data(h) {\n    return [this.from.x + this.from.y * h, this.to.x + this.to.y * h, this.remaining]\n  }\n\n  d() {\n    ctx.beginPath()\n    ctx.moveTo(this.from.x * 30, this.from.y * 30)\n    ctx.lineTo(this.to.x * 30, this.to.y * 30)\n    if(this.isUnlimited) {\n      ctx.strokeStyle = \"#78ff3b\"\n    } else if(this.remaining === 1) {\n      ctx.strokeStyle = \"#41c\"\n    } else if(this.remaining === 0){\n      ctx.strokeStyle = \"rgba(68,17,204,0.2)\"\n    }\n    ctx.lineWidth = 5\n    ctx.stroke()\n    ctx.lineWidth = 1\n  }\n\n  de() {\n    ctx.beginPath()\n    ctx.moveTo(this.from.x * 30, this.from.y * 30)\n    ctx.lineTo(this.to.x * 30, this.to.y * 30)\n    if(this.isUnlimited) {\n      ctx.strokeStyle = \"#78ff3b\"\n    } else if(this.remaining === 1) {\n      ctx.strokeStyle = \"#41c\"\n    } else if(this.remaining === 0){\n      ctx.strokeStyle = \"rgba(68,17,204,0.2)\"\n    }\n    ctx.lineWidth = 5\n    ctx.stroke()\n    ctx.lineWidth = 1\n  }\n\n  consume() {\n    this.remaining--\n  }\n\n  isAvailable() {\n    return this.isUnlimited || this.remaining > 0\n  }\n}\n\n//# sourceURL=webpack:///./src/edge.js?");

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Editor\", function() { return Editor; });\n/* harmony import */ var _lib_v2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/v2c */ \"./src/lib/v2c.js\");\n/* harmony import */ var _vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertex */ \"./src/vertex.js\");\n/* harmony import */ var _edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edge */ \"./src/edge.js\");\n\n\n\n\nclass Editor {\n  constructor() {\n    window.openEdit = () => {\n      editorC.style.display = 'block'\n    }\n    this.w = 24\n    this.h = 10\n    this.edges = []\n    this.vertices = []\n    this.pen = 'data'\n    this.toggleButton(dataB)\n    this.currentItem = null\n    this.penPos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    closeEB.onclick = () => {\n      this.setText('')\n      gameState='home'\n        editorC.style.display = 'none'\n    }\n    dataB.onclick = () => {\n      this.pen = 'data'\n      this.toggleButton(dataB)\n    }\n    startB.onclick = () => {\n        this.pen = 'start'\n      this.toggleButton(startB)\n    }\n      endB.onclick = () => {\n        this.toggleButton(endB)\n        this.pen = 'end'\n      }\n      gateB.onclick = () => {\n        this.toggleButton(gateB)\n        this.pen = 'gate'\n      }\n      ttlB.onclick = () => {\n        this.toggleButton(ttlB)\n        this.pen = 'ttl'\n      }\n\n\n    c.onclick = (e) => {\n      if(gameState !== 'editor') {\n        return\n      }\n      if(this.pStance() < 6) {\n        let p = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.floor((e.offsetX + 15) / 30) ,\n          Math.floor((e.offsetY + 15) / 30))\n        let v = new _vertex__WEBPACK_IMPORTED_MODULE_1__[\"Vertex\"](p, this.pen, 0)\n        let vfind = this.vertices.find(vertex => (vertex.pos.eq(p)))\n        if(vfind) {\n          this.currentItem = vfind\n        } else {\n          this.vertices.push(v)\n          this.currentItem = v\n        }\n        switch(this.currentItem.type) {\n          case 'gate':\n            this.setText('Threshold')\n            setting.value = this.currentItem.opt\n            break;\n          case 'ttl':\n            this.setText('TTL Boost')\n            setting.value = this.currentItem.opt\n            break;\n          default:\n            this.setText('')\n\n        }\n      }\n      /* edges */\n\n      /* h line */\n\n      let xDiff =  this.penPos.x - Math.floor((this.penPos.x) / 30) * 30\n      let yDiff =  this.penPos.y - Math.floor((this.penPos.y + 15) / 30) * 30\n      if(xDiff > 6 && xDiff < 24 && yDiff < 6 && yDiff > -6) {\n        let fx = Math.floor((this.penPos.x) / 30)\n        let fy = Math.floor((this.penPos.y + 15) / 30)\n        let f = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fx, fy)\n        let to = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fx + 1, fy)\n        let efind = this.edges.find(edge => (edge.from.eq(f) && edge.to.eq(to)))\n        if(efind) {\n          this.currentItem = efind\n          setting.value = efind.remaining\n        } else {\n          setting.value = 1\n          let e = new _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"](f, to, 1)\n          this.edges.push(e)\n          this.currentItem = e\n        }\n        this.setText('lifespan')\n      }\n\n      /* v lines */\n\n      xDiff =  this.penPos.x - Math.floor((this.penPos.x + 15) / 30) * 30\n      yDiff =  this.penPos.y - Math.floor((this.penPos.y ) / 30) * 30\n\n      if(yDiff > 6 && yDiff < 24 && xDiff > -6 && xDiff < 6) {\n        let fx = Math.floor((this.penPos.x + 15) / 30)\n        let fy = Math.floor((this.penPos.y ) / 30)\n        let f = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fx, fy)\n        let to = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fx, fy + 1)\n        let efind = this.edges.find(edge => (edge.from.eq(f) && edge.to.eq(to)))\n        if(efind) {\n          this.currentItem = efind\n          setting.value = efind.remaining\n        } else {\n          setting.value = 1\n          let e = new _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"](f, to, 1)\n          this.edges.push(e)\n          this.currentItem = e\n        }\n        this.setText('lifespan')\n      }\n\n      this.updateMap()\n\n    }\n    setting.onchange = () => {\n      if(this.currentItem instanceof _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"]) {\n        this.currentItem.remaining = parseInt(setting.value)\n      } else {\n        this.currentItem.opt = parseInt(setting.value)\n      }\n      this.updateMap()\n    }\n\n    ttl.onchange = () => {\n      this.ttl = parseInt(ttl.value)\n      this.updateMap()\n    }\n\n\n    c.onmousemove = (e) => {\n      this.penPos.set(e.offsetX, e.offsetY)\n    }\n  }\n\n\n    toggleButton(button) {\n      if(this.olButton) {\n        this.olButton.classList.remove('active')\n      }\n      this.olButton = button\n      button.classList.add('active')\n    }\n\n  updateMap() {\n    let mapValues = {\n      ttl : this.ttl,\n      w : this.w,\n      h : this.h,\n      edges: this.edges.map((edge) => {\n        return edge.data(this.h)\n      }),\n      vertices:\n        this.vertices.map((vertex) => {\n          return vertex.data(this.h)\n        })\n    }\n    mapData.value = JSON.stringify(mapValues)\n  }\n\n  d() {\n    ctx.fillRect(0,0,100,100)\n    for(let i = 0; i < this.w; i ++) {\n      for(let j = 0; j < this.h; j ++) {\n        ctx.beginPath()\n        ctx.arc(i * 30, j * 30, 6, 0, Math.PI * 2)\n        ctx.strokeStyle = '#fff'\n        ctx.stroke()\n      }\n    }\n    for(let i = 0; i < this.h; i ++) {\n      ctx.beginPath()\n      ctx.moveTo(0, 30 * i)\n      ctx.lineTo(this.w * 30 - 30, 30 * i)\n      ctx.strokeStyle = 'rgba(255,0,0,0.4)'\n      ctx.stroke()\n    }\n\n    for(let i = 0; i < this.w; i ++) {\n      ctx.beginPath()\n      ctx.moveTo(30 * i, 0)\n      ctx.lineTo(30 * i, this.h * 30 - 30)\n      ctx.strokeStyle = 'rgba(255,0,0,0.4)'\n      ctx.stroke()\n    }\n\n    ctx.beginPath()\n\n    let s = this.pStance()\n\n    if(s < 6) {\n      ctx.arc(Math.floor((this.penPos.x + 15) / 30) * 30, Math.floor((this.penPos.y + 15) / 30) * 30, 8, 0, Math.PI * 2)\n      ctx.fillStyle = '#fff'\n      ctx.fill()\n    }\n\n    /* h lines */\n    ctx.fillStyle = '#09c'\n\n    let xDiff =  this.penPos.x - Math.floor((this.penPos.x) / 30) * 30\n    let yDiff =  this.penPos.y - Math.floor((this.penPos.y + 15) / 30) * 30\n    if(xDiff > 6 && xDiff < 24 && yDiff < 6 && yDiff > -6) {\n      ctx.fillRect(Math.floor((this.penPos.x) / 30) * 30, Math.floor((this.penPos.y + 15) / 30) * 30 - 5, 30 , 10)\n    }\n\n    /* v lines */\n\n    xDiff =  this.penPos.x - Math.floor((this.penPos.x + 15) / 30) * 30\n    yDiff =  this.penPos.y - Math.floor((this.penPos.y ) / 30) * 30\n\n    if(yDiff > 6 && yDiff < 24 && xDiff > -6 && xDiff < 6) {\n      ctx.fillRect(Math.floor((this.penPos.x + 15) / 30) * 30 - 5, Math.floor((this.penPos.y ) / 30) * 30, 10 , 30)\n    }\n\n    this.vertices.forEach((vertex) => {\n      vertex.de()\n    })\n\n    this.edges.forEach((edge) => {\n      edge.de()\n    })\n\n\n    if(this.currentItem) {\n      if(this.currentItem instanceof _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"]) {\n        ctx.beginPath()\n        ctx.moveTo(this.currentItem.from.x * 30, this.currentItem.from.y * 30)\n        ctx.lineTo(this.currentItem.to.x * 30, this.currentItem.to.y * 30)\n        ctx.strokeStyle = '#ff8919'\n        ctx.stroke()\n      } else {\n        ctx.beginPath()\n        ctx.strokeStyle = '#ff8919'\n        ctx.arc(this.currentItem.pos.x * 30, this.currentItem.pos.y * 30, 8, 0 , Math.PI * 2)\n        ctx.stroke()\n      }\n    }\n\n\n  }\n\n  setText(text) {\n    if(text === '') {\n      settingI.innerHTML = ''\n      setting.style.display = 'none'\n    } else {\n      settingI.innerHTML = text\n      setting.style.display = 'inline-block'\n    }\n  }\n  pStance() {\n    return new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.floor((this.penPos.x + 15) / 30) * 30,\n      Math.floor((this.penPos.y + 15) / 30) * 30).stance(new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.penPos.x, this.penPos.y))\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/editor.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_manager */ \"./src/menu_manager.js\");\n/* harmony import */ var _maps_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps/maps */ \"./src/maps/maps.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network */ \"./src/network.js\");\n/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ctrl */ \"./src/ctrl.js\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor */ \"./src/editor.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _menus_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menus/home */ \"./src/menus/home.js\");\n/* harmony import */ var _menus_win__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menus/win */ \"./src/menus/win.js\");\n/* harmony import */ var _menus_help__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menus/help */ \"./src/menus/help.js\");\n/* harmony import */ var _menus_hint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menus/hint */ \"./src/menus/hint.js\");\n\n\nwindow.C_WIDTH = 800\nwindow.C_HEIGHT = 400\n\n\n\n\n\n\n\n\n\nwindow.hint = new _menus_hint__WEBPACK_IMPORTED_MODULE_10__[\"default\"]()\nObject(_ctrl__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\nwindow.currentLevel = 0\n\nconst win = new _menus_win__WEBPACK_IMPORTED_MODULE_8__[\"default\"]()\nconst help = new _menus_help__WEBPACK_IMPORTED_MODULE_9__[\"default\"]()\nconst editor = new _editor__WEBPACK_IMPORTED_MODULE_5__[\"Editor\"]()\nlet w = new _network__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel])\nwindow.p = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\nwindow.p.setLevel(_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel], w)\n\nwindow.nextLevel = () => {\n  currentLevel++\n  if(currentLevel === _maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length) {\n    window.gameState = 'win'\n    return\n  }\n  w = new _network__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel])\n  window.p.setLevel(_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel], w)\n}\n\nwindow.setLevel = (l) => {\n    window.currentLevel = l\n    w = new _network__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel])\n    window.p.setLevel(_maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"][currentLevel], w)\n}\n\nconst background = new _background__WEBPACK_IMPORTED_MODULE_6__[\"default\"]()\nwindow.ctx = c.getContext('2d')\n\nc.width = C_WIDTH\nc.height = C_HEIGHT\n\nctx.fillStyle = '#000'\nctx.fillRect(0,0,C_WIDTH,C_HEIGHT)\nwindow.gameState = 'home'\n\nlet homeMenu = new _menu_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Silent Network', _menus_home__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\nlet selectLevelMenu = new _menu_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Select Level', _maps_maps__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true)\nhint.show(2)\nlet ll = () => {\n  c.width+=0\n  background.l()\n  background.d()\n  if(gameState === 'home') {\n    homeMenu.k()\n    hint.d(2)\n    homeMenu.d()\n  } else if(gameState === 'select') {\n    selectLevelMenu.k()\n    selectLevelMenu.d()\n  } else if(gameState === 'play') {\n    p.k()\n\n    w.d()\n    p.d()\n    hint.d()\n  } else if(gameState === 'editor'){\n    editor.d()\n  } else if(gameState === 'win') {\n    win.d()\n  } else if(gameState === 'help') {\n    help.k().d()\n  }\n\n  requestAnimationFrame(ll)\n}\nll()\n\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/lib/v2c.js":
/*!************************!*\
  !*** ./src/lib/v2c.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass V2c {\n  constructor(x,y) {\n    this.x = x; this.y = y\n  }\n  fillRect(w,h) {\n    ctx.fillRect(this.x - w / 2,this.y - h / 2,w,h)\n  }\n  set(x,y) {\n    this.x=x;this.y=y\n    return this\n  }\n  cadd(x, y) {\n    let n = new V2c(this.x, this.y)\n    n.add(new V2c(x, y))\n    return n\n  }\n  add(v) {\n    this.x+=v.x;this.y+=v.y\n    return this\n  }\n  eq(v) {\n    return this.x === v.x && this.y === v.y\n  }\n  toString() {\n    return `${this.x} | ${this.y}`\n  }\n  stance(v) {\n    return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2))\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (V2c);\n\n//# sourceURL=webpack:///./src/lib/v2c.js?");

/***/ }),

/***/ "./src/maps/maps.js":
/*!**************************!*\
  !*** ./src/maps/maps.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {\"ttl\":4,\"w\":10,\"h\":10,\"edges\":[[15,25,1],[25,35,1],[35,45,1],[45,55,1],[15,16,1],[16,26,1],[26,36,1],[36,46,1],[46,56,1],[55,56,1]],\"vertices\":[{\"id\":15,\"t\":\"start\",\"th\":0},{\"id\":55,\"t\":\"end\",\"th\":0}]},\n  {ttl :10,\"w\":10,\"h\":10,\"edges\":[[34,44,1],[44,54,1],[54,64,1],[64,74,1],[74,84,1],[64,65,1]],\"vertices\":[{\"id\":34,\"t\":\"start\"},{\"id\":84,\"t\":\"end\"},{\"id\":74,\"t\":\"gate\", th : 0},{\"id\":65,\"t\":\"data\"}]},\n  {\"ttl\":50,\"w\":10,\"h\":10,\"edges\":[[33,34,1],[34,35,1],[35,36,1],[36,37,1],[37,38,1],[38,48,1],[48,58,1],[58,68,1],[68,78,1],[78,88,1],[34,44,1],[44,54,1],[54,55,1],[55,56,1],[46,56,1],[36,46,1]],\"vertices\":[{\"id\":33,\"t\":\"start\",\"th\":0},{\"id\":88,\"t\":\"end\",\"th\":0},{\"id\":78,\"t\":\"gate\",\"th\":1},{\"id\":54,\"t\":\"data\",\"th\":0},{\"id\":56,\"t\":\"data\",\"th\":0}]}\n  ]);\n\n//# sourceURL=webpack:///./src/maps/maps.js?");

/***/ }),

/***/ "./src/menu_item.js":
/*!**************************!*\
  !*** ./src/menu_item.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuItem; });\nclass MenuItem {\n  constructor(item, pos, current = false) {\n    this.current = current\n    this.gameState = item.g\n    this.pos = pos\n    this.text = item.t\n  }\n  d() {\n    ctx.font = '22px Arial'\n    if(this.current) {\n      ctx.fillStyle = \"#fff\"\n      ctx.fillRect(this.pos.x-30, this.pos.y-30, 150, 50)\n      ctx.fillStyle = \"#000\"\n      ctx.fillText(this.text, this.pos.x, this.pos.y)\n    } else {\n      ctx.fillStyle = \"#fff\"\n      ctx.fillText(this.text, this.pos.x, this.pos.y)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/menu_item.js?");

/***/ }),

/***/ "./src/menu_manager.js":
/*!*****************************!*\
  !*** ./src/menu_manager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuManager; });\n/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_item */ \"./src/menu_item.js\");\n/* harmony import */ var _lib_v2c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/v2c */ \"./src/lib/v2c.js\");\n/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ctrl */ \"./src/ctrl.js\");\n\n\n\nwindow.imageridle = true\nclass MenuManager {\n  constructor(title, items, isLevel) {\n    this.title = title\n    this.isLevel = isLevel\n    this.current = 0\n\n    this.items = []\n      if(this.isLevel) {\n          items.forEach((item, i) => {\n              this.items.push(new _menu_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({t:`Level ${i}`}, new _lib_v2c__WEBPACK_IMPORTED_MODULE_1__[\"default\"](30, i * 50 + 100), i === 0))\n          })\n      } else {\n          items.forEach((item, i) => {\n              this.items.push(new _menu_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item, new _lib_v2c__WEBPACK_IMPORTED_MODULE_1__[\"default\"](30, i * 50  + 100), i === 0))\n          })\n      }\n  }\n\n  d() {\n    ctx.font = '32px Arial'\n    ctx.fillStyle = \"#fff\"\n    ctx.fillText(this.title, 40,40)\n    this.items.forEach((item) => {\n      item.d()\n    })\n  }\n  wait() {\n    window.imageridle = false\n    setTimeout(() => {\n      window.imageridle = true\n    }, 150)\n  }\n\n  k() {\n    if(window.imageridle) {\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_2__[\"default\"].UP]) {\n        if(this.current > 0) {\n          this.current --\n        }\n        this.wait()\n      } if(press[_ctrl__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DOWN]) {\n        if(this.current < this.items.length - 1) {\n          this.current ++\n        }\n        this.wait()\n      }\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_2__[\"default\"].B]) {\n        if(this.isLevel) {\n            setLevel(this.current)\n            window.gameState = 'play'\n        } else {\n            window.gameState = this.items[this.current].gameState\n        }\n        if(window.gameState === 'editor') {\n          openEdit()\n        }\n        this.wait()\n      }\n    }\n    this.items.forEach((item,i) => {\n      if(i === this.current) {\n        item.current = true\n      } else {\n        item.current = false\n      }\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/menu_manager.js?");

/***/ }),

/***/ "./src/menus/help.js":
/*!***************************!*\
  !*** ./src/menus/help.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return help; });\n/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ctrl */ \"./src/ctrl.js\");\n\n\nclass help {\n  d() {\n    ctx.fillStyle = 'rgba(0,0,0,.5)'\n    ctx.fillRect(20,20, C_WIDTH - 40, C_HEIGHT - 40)\n    ctx.fillStyle = '#85e2ff'\n    ctx.fillText('Data', 100, 100)\n  }\n\n  k() {\n    if(!press[_ctrl__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HELP]) {\n      window.gameState = 'play'\n    }\n    return this\n  }\n}\n\n//# sourceURL=webpack:///./src/menus/help.js?");

/***/ }),

/***/ "./src/menus/hint.js":
/*!***************************!*\
  !*** ./src/menus/hint.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hint; });\nclass Hint {\n  constructor() {\n    this.hints = [\n      {m:'Press WASD or ZQSD for moving, SPACE for action H in game for help'},\n      {m:'Press R to reset level'},\n      {m:'Use [Z/W] & [S] to move Up and Down, Select with [Space]'},\n      {m:'Use shift to place beacon, You will bring back to the beacon after 5 seconds'}\n    ]\n  }\n  d() {\n    if(this.active) {\n      ctx.font=\"14px Arial\"\n      ctx.fillStyle = 'rgba(0,0,0,.5)'\n      ctx.fillRect(20, C_HEIGHT - 60, 700, 50)\n      ctx.fillStyle = '#fff'\n      ctx.fillText(this.currentHint.m, 30, C_HEIGHT - 20)\n    }\n  }\n\n  show(hint) {\n    if(this.handle) {\n      clearTimeout(this.handle)\n    }\n    this.active = true\n    if(this.hints[hint].used) {\n      return false\n    }\n    this.currentHint = this.hints[hint]\n    this.currentHint.used = true\n    this.handle = setTimeout(() => {this.active = false}, 5000)\n    return true\n  }\n\n}\n\n//# sourceURL=webpack:///./src/menus/hint.js?");

/***/ }),

/***/ "./src/menus/home.js":
/*!***************************!*\
  !*** ./src/menus/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {t :'Play', g : 'play'},\n  {t :'Level select', g : 'select'},\n  {t :'Editor', g : 'editor'},\n]);\n\n\n//# sourceURL=webpack:///./src/menus/home.js?");

/***/ }),

/***/ "./src/menus/win.js":
/*!**************************!*\
  !*** ./src/menus/win.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Win; });\nclass Win {\n  constructor() {\n    this.credits = [\n      'Freely inspired by LOSSST by Xem',\n      'hardcoded by alternative'\n    ]\n    this.cd = 100\n  }\n\n  d() {\n    ctx.fillStyle = '#fff'\n    this.cd -= .4\n    ctx.fillText('You win', 10, this.cd)\n    for(let i = 0; i < this.credits.length; i++) {\n      ctx.fillText(this.credits[i], 10, this.cd + i * 20 + 20)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/menus/win.js?");

/***/ }),

/***/ "./src/network.js":
/*!************************!*\
  !*** ./src/network.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_v2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/v2c */ \"./src/lib/v2c.js\");\n/* harmony import */ var _vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertex */ \"./src/vertex.js\");\n/* harmony import */ var _edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edge */ \"./src/edge.js\");\n\n\n\n\nclass W {\n  constructor(map) {\n    this.map = map\n    this.w = map.w\n    this.h = map.h\n\n    this.vertices = []//[{pos : new V2c(0, 1), id : 0}, {pos : new V2c(1, 1), id : 1}]\n    this.edges = []//[{from : new V2c(0, 1), to : new V2c(1, 1)}]\n    this.buildNetwork(this.map)\n  }\n\n  reset() {\n    this.buildNetwork(this.map)\n  }\n\n  buildNetwork() {\n    this.vertices = []\n    this.edges = []\n    this.map.vertices.forEach((vertex) => {\n      let pos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vertex.id % this.w, Math.floor(vertex.id / this.w))\n      this.vertices.push(new _vertex__WEBPACK_IMPORTED_MODULE_1__[\"Vertex\"](pos, vertex.t, vertex.th))\n    })\n\n    this.map.edges.forEach((edge) => {\n      let fromPos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](edge[0] % this.w, Math.floor(edge[0] / this.w))\n      let toPos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](edge[1] % this.w, Math.floor(edge[1] / this.w))\n      this.edges.push(new _edge__WEBPACK_IMPORTED_MODULE_2__[\"Edge\"](fromPos, toPos,  edge[2]))\n\n      if(!this.vertices.find((node) => node.pos.eq(fromPos))) {\n        this.vertices.push(new _vertex__WEBPACK_IMPORTED_MODULE_1__[\"Vertex\"](fromPos, 'n'))\n      }\n      if(!this.vertices.find((node) => node.pos.eq(toPos))) {\n        this.vertices.push(new _vertex__WEBPACK_IMPORTED_MODULE_1__[\"Vertex\"](toPos))\n      }\n    })\n  }\n\n\n  d() {\n    this.edges.forEach((edge) => {\n      edge.d()\n    })\n    this.vertices.forEach((vertex) => {\n      vertex.d()\n    })\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (W);\n\n\n\n//# sourceURL=webpack:///./src/network.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_v2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/v2c */ \"./src/lib/v2c.js\");\n/* harmony import */ var _ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ctrl */ \"./src/ctrl.js\");\n/* harmony import */ var _beacon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beacon */ \"./src/beacon.js\");\n\n\n\nclass P {\n  constructor() {\n    this.moving = false\n    this.beacon = new _beacon__WEBPACK_IMPORTED_MODULE_2__[\"Beacon\"]()\n  }\n\n  setLevel(map, network) {\n    this.map = map\n    this.w = map.w\n    let start = map.vertices.find((vertex) =>\n      vertex.t === 'start'\n    )\n    this.totalDataCount = 0\n    map.vertices.forEach((vertex) => {\n        if (vertex.t === 'data') {\n          this.totalDataCount++\n        }\n      }\n    )\n\n    this.pos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](start.id % this.w, Math.floor(start.id / this.w))\n\n    this.edges = network.edges\n    this.vertices = network.vertices\n    this.ttl = map.ttl\n    this.network = network\n    this.dataCount = 0\n    this.beacon.reset()\n  }\n\n  reset() {\n    this.network.reset()\n    this.edges = this.network.edges\n    this.vertices = this.network.vertices\n    let start = this.map.vertices.find((vertex) =>\n      vertex.t === 'start'\n    )\n    this.pos = new _lib_v2c__WEBPACK_IMPORTED_MODULE_0__[\"default\"](start.id % this.w, Math.floor(start.id / this.w))\n    this.ttl = this.map.ttl\n  }\n\n  k() {\n    this.beacon.k()\n    if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].HELP]) {\n      window.gameState = 'help'\n    }\n\n    if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RESET]) {\n      this.reset()\n    }\n\n    if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].A]) {\n      this.beacon.placeBeacon(this.pos)\n    }\n\n    if(!this.moving) {\n      let futureRoute\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEFT]) {\n        let p = this.pos.cadd(-1,0)\n        futureRoute = {from : this.pos, to : p}\n        if(this.checkMove(futureRoute)) {\n          this.pos = p\n          this.move()\n        }\n      }\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RIGHT]) {\n        let p = this.pos.cadd(1,0)\n        futureRoute = {from : this.pos, to : p}\n        if(this.checkMove(futureRoute)) {\n          this.pos = p\n          this.move()\n        }\n      }\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].UP]) {\n        let p = this.pos.cadd(0,-1)\n        futureRoute = {from : this.pos, to : p}\n        if(this.checkMove(futureRoute)) {\n          this.pos = p\n          this.move()\n        }\n      }\n      if(press[_ctrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DOWN]) {\n        let p = this.pos.cadd(0,1)\n        futureRoute = {from : this.pos, to : p}\n        if(this.checkMove(futureRoute)) {\n          this.pos = p\n          this.move()\n        }\n      }\n    }\n  }\n\n  getRoute(route) {\n    return this.edges.find((edge) => {\n      return (edge.from.eq(route.from) && edge.to.eq(route.to)) || (edge.from.eq(route.to) && edge.to.eq(route.from))\n    })\n  }\n\n  checkMove(route) {\n    this.handleMove()\n    let availableRoute = this.getRoute(route)\n    if(availableRoute && availableRoute.isAvailable()) {\n\n      if(this.ttl < 1) {\n        window.hint.show(1)\n        return false\n      } else {\n        this.ttl --\n      }\n      availableRoute.consume()\n      return true\n    }\n    return false\n  }\n\n\n\n\n  d() {\n    this.beacon.d()\n    ctx.beginPath()\n    ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\n    if(this.move) {\n      ctx.fillStyle='#f0f'\n    } else {\n      ctx.fillStyle='#0f0'\n    }\n    ctx.fill()\n    ctx.fillStyle = \"#fff\"\n    ctx.fillText(this.ttl, this.pos.x * 30 + 10, this.pos.y * 30 - 10)\n\n    /* draw ttl */\n    for(let i = 0; i < this.ttl; i++) {\n      ctx.fillStyle=\"#3e70ea\"\n      ctx.fillRect(10 + 8 * i, 10, 4 , 4)\n    }\n    /* draw data */\n    for(let i = 0 ; i < this.totalDataCount; i ++) {\n      ctx.fillStyle=\"#3e70ea\"\n      if(i >= this.dataCount) {\n        ctx.beginPath()\n        ctx.rect(10 + 12 * i, 20, 8 , 8)\n        ctx.strokeStyle=\"#4671f7\"\n        ctx.setLineDash([])\n        ctx.stroke()\n      } else {\n        ctx.fillStyle=\"#4671f7\"\n        ctx.fillRect(10 + 12 * i, 20, 8 , 8)\n      }\n    }\n\n\n  }\n\n  handleMove() {\n    this.moving = true\n    setTimeout(() => {\n      this.moving = false\n    }, 250)\n  }\n\n\n  move() {\n    this.vertices.forEach((vertex) => {\n      if(vertex.pos.eq(this.pos) && vertex.type === 'data' && vertex.status !== false) {\n        this.dataCount++\n        vertex.consume()\n      }\n      if(vertex.pos.eq(this.pos) && vertex.type === 'end') {\n        nextLevel()\n      }\n    })\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (P);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/vertex.js":
/*!***********************!*\
  !*** ./src/vertex.js ***!
  \***********************/
/*! exports provided: Vertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vertex\", function() { return Vertex; });\nclass Vertex {\n  constructor(pos, type, opt) {\n    this.pos = pos\n    this.type = type\n    this.opt = opt\n    this.consumed = false\n  }\n\n  de() {\n    ctx.fillStyle = '#fff'\n    if(this.type === 'data') {\n      ctx.fillStyle = \"#3ae2ff\"\n    } else if(this.type === 'gate') {\n        ctx.fillStyle = \"#50ff2b\"\n    } else if(this.type === 'end') {\n        ctx.fillStyle = \"#001eff\"\n    } else if(this.type === 'start') {\n        ctx.fillStyle = \"#fffa1c\"\n    } else if(this.type === 'ttl') {\n        ctx.fillStyle = \"#ff00a3\"\n    } else {\n      ctx.fillStyle = \"#ff9200\"\n    }\n    ctx.beginPath()\n    ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\n    ctx.fill()\n  }\n\n  data(h) {\n    return {id : this.pos.x + this.pos.y * h, t : this.type, th : this.opt}\n  }\n\n  d() {\n    ctx.fillStyle = '#fff'\n    if(this.type === 'data') {\n      if(this.consumed) {\n        ctx.fillStyle = '#811'\n      } else {\n        ctx.fillStyle = '#0ff'\n      }\n      ctx.fillRect(this.pos.x * 30-5, this.pos.y * 30-5, 10, 10)\n    } else if(this.type === 'gate') {\n        ctx.beginPath()\n        ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\n        if (p.dataCount >= this.opt) {\n            ctx.strokeStyle = \"#294\"\n            ctx.fillStyle = \"#294\"\n        } else {\n            ctx.strokeStyle = \"#911\"\n            ctx.fillStyle = \"#911\"\n        }\n        ctx.fill()\n        ctx.beginPath()\n        ctx.arc(this.pos.x * 30, this.pos.y * 30, 10, 0, Math.PI * 2)\n        ctx.setLineDash([4, 2, 2, 2])\n        ctx.stroke()\n    } else if(this.type === 'end') {\n      ctx.fillStyle = '#09127f'\n      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\n      ctx.fill()\n    } else {\n      ctx.beginPath()\n      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)\n      ctx.fill()\n    }\n\n  }\n  consume() {\n    this.consumed = true\n  }\n\n}\n\n//# sourceURL=webpack:///./src/vertex.js?");

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