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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst cards = [ \r\n  ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'],\r\n  [\r\n    {\r\n      word: 'cry',\r\n      translation: 'плакать',\r\n      image: 'img/cry.jpg',\r\n      audioSrc: 'audio/cry.mp3'\r\n    },\r\n    {\r\n      word: 'dance',\r\n      translation: 'танцевать',\r\n      image: 'img/dance.jpg',\r\n      audioSrc: 'audio/dance.mp3'\r\n    },\r\n    {\r\n      word: 'dive',\r\n      translation: 'нырять',\r\n      image: 'img/dive.jpg',\r\n      audioSrc: 'audio/dive.mp3'\r\n    },\r\n    {\r\n      word: 'draw',\r\n      translation: 'рисовать',\r\n      image: 'img/draw.jpg',\r\n      audioSrc: 'audio/draw.mp3'\r\n    },\r\n    {\r\n      word: 'fish',\r\n      translation: 'ловить рыбу',\r\n      image: 'img/fish.jpg',\r\n      audioSrc: 'audio/fish.mp3'\r\n    },\r\n    {\r\n      word: 'fly',\r\n      translation: 'летать',\r\n      image: 'img/fly.jpg',\r\n      audioSrc: 'audio/fly.mp3'\r\n    },\r\n    {\r\n      word: 'hug',\r\n      translation: 'обнимать',\r\n      image: 'img/hug.jpg',\r\n      audioSrc: 'audio/hug.mp3'\r\n    },\r\n    {\r\n      word: 'jump',\r\n      translation: 'прыгать',\r\n      image: 'img/jump.jpg',\r\n      audioSrc: 'audio/jump.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'open',\r\n      translation: 'открывать',\r\n      image: 'img/open.jpg',\r\n      audioSrc: 'audio/open.mp3'\r\n    },\r\n    {\r\n      word: 'play',\r\n      translation: 'играть',\r\n      image: 'img/play.jpg',\r\n      audioSrc: 'audio/play.mp3'\r\n    },\r\n    {\r\n      word: 'point',\r\n      translation: 'указывать',\r\n      image: 'img/point.jpg',\r\n      audioSrc: 'audio/point.mp3'\r\n    },\r\n    {\r\n      word: 'ride',\r\n      translation: 'ездить',\r\n      image: 'img/ride.jpg',\r\n      audioSrc: 'audio/ride.mp3'\r\n    },\r\n    {\r\n      word: 'run',\r\n      translation: 'бегать',\r\n      image: 'img/run.jpg',\r\n      audioSrc: 'audio/run.mp3'\r\n    },\r\n    {\r\n      word: 'sing',\r\n      translation: 'петь',\r\n      image: 'img/sing.jpg',\r\n      audioSrc: 'audio/sing.mp3'\r\n    },\r\n    {\r\n      word: 'skip',\r\n      translation: 'пропускать, прыгать',\r\n      image: 'img/skip.jpg',\r\n      audioSrc: 'audio/skip.mp3'\r\n    },\r\n    {\r\n      word: 'swim',\r\n      translation: 'плавать',\r\n      image: 'img/swim.jpg',\r\n      audioSrc: 'audio/swim.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'cat',\r\n      translation: 'кот',\r\n      image: 'img/cat.jpg',\r\n      audioSrc: 'audio/cat.mp3'\r\n    },\r\n    {\r\n      word: 'chick',\r\n      translation: 'цыплёнок',\r\n      image: 'img/chick.jpg',\r\n      audioSrc: 'audio/chick.mp3'\r\n    },\r\n    {\r\n      word: 'chicken',\r\n      translation: 'курица',\r\n      image: 'img/chicken.jpg',\r\n      audioSrc: 'audio/chicken.mp3'\r\n    },\r\n    {\r\n      word: 'dog',\r\n      translation: 'собака',\r\n      image: 'img/dog.jpg',\r\n      audioSrc: 'audio/dog.mp3'\r\n    },\r\n    {\r\n      word: 'horse',\r\n      translation: 'лошадь',\r\n      image: 'img/horse.jpg',\r\n      audioSrc: 'audio/horse.mp3'\r\n    },\r\n    {\r\n      word: 'pig',\r\n      translation: 'свинья',\r\n      image: 'img/pig.jpg',\r\n      audioSrc: 'audio/pig.mp3'\r\n    },\r\n    {\r\n      word: 'rabbit',\r\n      translation: 'кролик',\r\n      image: 'img/rabbit.jpg',\r\n      audioSrc: 'audio/rabbit.mp3'\r\n    },\r\n    {\r\n      word: 'sheep',\r\n      translation: 'овца',\r\n      image: 'img/sheep.jpg',\r\n      audioSrc: 'audio/sheep.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'bird',\r\n      translation: 'птица',\r\n      image: 'img/bird.jpg',\r\n      audioSrc: 'audio/bird.mp3'\r\n    },\r\n    {\r\n      word: 'fish',\r\n      translation: 'рыба',\r\n      image: 'img/fish1.jpg',\r\n      audioSrc: 'audio/fish.mp3'\r\n    },\r\n    {\r\n      word: 'frog',\r\n      translation: 'жаба',\r\n      image: 'img/frog.jpg',\r\n      audioSrc: 'audio/frog.mp3'\r\n    },\r\n    {\r\n      word: 'giraffe',\r\n      translation: 'жирафа',\r\n      image: 'img/giraffe.jpg',\r\n      audioSrc: 'audio/giraffe.mp3'\r\n    },\r\n    {\r\n      word: 'lion',\r\n      translation: 'лев',\r\n      image: 'img/lion.jpg',\r\n      audioSrc: 'audio/lion.mp3'\r\n    },\r\n    {\r\n      word: 'mouse',\r\n      translation: 'мышь',\r\n      image: 'img/mouse.jpg',\r\n      audioSrc: 'audio/mouse.mp3'\r\n    },\r\n    {\r\n      word: 'turtle',\r\n      translation: 'черепаха',\r\n      image: 'img/turtle.jpg',\r\n      audioSrc: 'audio/turtle.mp3'\r\n    },\r\n    {\r\n      word: 'dolphin',\r\n      translation: 'дельфин',\r\n      image: 'img/dolphin.jpg',\r\n      audioSrc: 'audio/dolphin.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'skirt',\r\n      translation: 'юбка',\r\n      image: 'img/skirt.jpg',\r\n      audioSrc: 'audio/skirt.mp3'\r\n    },\r\n    {\r\n      word: 'pants',\r\n      translation: 'брюки',\r\n      image: 'img/pants.jpg',\r\n      audioSrc: 'audio/pants.mp3'\r\n    },\r\n    {\r\n      word: 'blouse',\r\n      translation: 'блузка',\r\n      image: 'img/blouse.jpg',\r\n      audioSrc: 'audio/blouse.mp3'\r\n    },\r\n    {\r\n      word: 'dress',\r\n      translation: 'платье',\r\n      image: 'img/dress.jpg',\r\n      audioSrc: 'audio/dress.mp3'\r\n    },\r\n    {\r\n      word: 'boot',\r\n      translation: 'ботинок',\r\n      image: 'img/boot.jpg',\r\n      audioSrc: 'audio/boot.mp3'\r\n    },\r\n    {\r\n      word: 'shirt',\r\n      translation: 'рубашка',\r\n      image: 'img/shirt.jpg',\r\n      audioSrc: 'audio/shirt.mp3'\r\n    },\r\n    {\r\n      word: 'coat',\r\n      translation: 'пальто',\r\n      image: 'img/coat.jpg',\r\n      audioSrc: 'audio/coat.mp3'\r\n    },\r\n    {\r\n      word: 'shoe',\r\n      translation: 'туфли',\r\n      image: 'img/shoe.jpg',\r\n      audioSrc: 'audio/shoe.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'sad',\r\n      translation: 'грустный',\r\n      image: 'img/sad.jpg',\r\n      audioSrc: 'audio/sad.mp3'\r\n    },\r\n    {\r\n      word: 'angry',\r\n      translation: 'сердитый',\r\n      image: 'img/angry.jpg',\r\n      audioSrc: 'audio/angry.mp3'\r\n    },\r\n    {\r\n      word: 'happy',\r\n      translation: 'счастливый',\r\n      image: 'img/happy.jpg',\r\n      audioSrc: 'audio/happy.mp3'\r\n    },\r\n    {\r\n      word: 'tired',\r\n      translation: 'уставший',\r\n      image: 'img/tired.jpg',\r\n      audioSrc: 'audio/tired.mp3'\r\n    },\r\n    {\r\n      word: 'surprised',\r\n      translation: 'удивлённый',\r\n      image: 'img/surprised.jpg',\r\n      audioSrc: 'audio/surprised.mp3'\r\n    },\r\n    {\r\n      word: 'scared',\r\n      translation: 'испуганный',\r\n      image: 'img/scared.jpg',\r\n      audioSrc: 'audio/scared.mp3'\r\n    },\r\n    {\r\n      word: 'smile',\r\n      translation: 'улыбка',\r\n      image: 'img/smile.jpg',\r\n      audioSrc: 'audio/smile.mp3'\r\n    },\r\n    {\r\n      word: 'laugh',\r\n      translation: 'смех',\r\n      image: 'img/laugh.jpg',\r\n      audioSrc: 'audio/laugh.mp3'\r\n    }\r\n  ]\r\n]\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\r\n\n\n//# sourceURL=webpack:///./src/cards.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/cards.js\");\n\r\nconsole.log(_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nconst category = _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0];\r\nconst nav = document.querySelectorAll(\".menu__item\");\r\nconst cardText = document.querySelectorAll(\".card__text\");\r\nfor (let i = 0; i < category.length; i++) {\r\n    nav[i].text = category[i];\r\n    cardText[i].textContent = category[i];\r\n}\r\nconst actionA = _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][1]\r\nfor (let i = 0; i < actionA.length; i++) {\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });