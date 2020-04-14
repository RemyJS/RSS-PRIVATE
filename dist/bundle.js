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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import cards from './cards'\r\n/* global cards, main, Game */\r\nconsole.log(cards);\r\nconst main = document.querySelector('main');\r\nconst category = cards[0];\r\nconst nav = document.querySelectorAll(\".menu__item\");\r\nconst toogle = document.querySelector(\".switch input\");\r\nconst Game = {\r\n  get playmode() {\r\n    return toogle.checked;\r\n  }\r\n};\r\nnav[0].addEventListener(\"click\", function () {\r\n  createMain();\r\n});\r\nfor (let i = 0; i < category.length; i += 1) {\r\n  nav[i + 1].text = category[i];\r\n  nav[i + 1].addEventListener(\"click\", () => createCategory(i + 1) );\r\n};\r\ntoogle.addEventListener(\"click\", () => {\r\n  const list = document.querySelector(\".menu__list\");\r\n  const mainCard = document.querySelectorAll(\".card_main\");\r\n  const categoryCard = document.querySelectorAll(\".card_train, .card_play\");\r\n  if (toogle.checked) {\r\n    list.classList.remove(\"green_nav\");\r\n    if (mainCard) {\r\n      mainCard.forEach((card) => card.classList.remove(\"green_main\"));\r\n    }\r\n    if (categoryCard) {\r\n      categoryCard.forEach((card) => {\r\n        card.classList.remove(\"card_train\");\r\n        card.classList.add(\"card_play\");\r\n      })\r\n    }\r\n  } else {\r\n    list.classList.add(\"green_nav\");\r\n    if (mainCard) {\r\n      mainCard.forEach((card) => card.classList.add(\"green_main\"));\r\n    }\r\n    if (categoryCard) {\r\n      categoryCard.forEach((card) => {\r\n        card.classList.remove(\"card_play\");\r\n        card.classList.add(\"card_train\");\r\n      });\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/scripts/script.js?");

/***/ })

/******/ });