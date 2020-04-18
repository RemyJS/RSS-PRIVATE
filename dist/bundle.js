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

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint quotes: [\"error\", \"single\"] */\r\n/* eslint comma-dangle: [\"error\", \"never\"] */\r\nconst cards = [\r\n  ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Food', 'Natural'],\r\n  [\r\n    {\r\n      word: 'cry',\r\n      translation: 'плакать',\r\n      image: '../assets/img/cry.jpg',\r\n      audioSrc: '../assets/audio/cry.mp3'\r\n    },\r\n    {\r\n      word: 'dance',\r\n      translation: 'танцевать',\r\n      image: '../assets/img/dance.jpg',\r\n      audioSrc: '../assets/audio/dance.mp3'\r\n    },\r\n    {\r\n      word: 'dive',\r\n      translation: 'нырять',\r\n      image: '../assets/img/dive.jpg',\r\n      audioSrc: '../assets/audio/dive.mp3'\r\n    },\r\n    {\r\n      word: 'draw',\r\n      translation: 'рисовать',\r\n      image: '../assets/img/draw.jpg',\r\n      audioSrc: '../assets/audio/draw.mp3'\r\n    },\r\n    {\r\n      word: 'fish',\r\n      translation: 'ловить рыбу',\r\n      image: '../assets/img/fish.jpg',\r\n      audioSrc: '../assets/audio/fish.mp3'\r\n    },\r\n    {\r\n      word: 'fly',\r\n      translation: 'летать',\r\n      image: '../assets/img/fly.jpg',\r\n      audioSrc: '../assets/audio/fly.mp3'\r\n    },\r\n    {\r\n      word: 'hug',\r\n      translation: 'обнимать',\r\n      image: '../assets/img/hug.jpg',\r\n      audioSrc: '../assets/audio/hug.mp3'\r\n    },\r\n    {\r\n      word: 'jump',\r\n      translation: 'прыгать',\r\n      image: '../assets/img/jump.jpg',\r\n      audioSrc: '../assets/audio/jump.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'open',\r\n      translation: 'открывать',\r\n      image: '../assets/img/open.jpg',\r\n      audioSrc: '../assets/audio/open.mp3'\r\n    },\r\n    {\r\n      word: 'play',\r\n      translation: 'играть',\r\n      image: '../assets/img/play.jpg',\r\n      audioSrc: '../assets/audio/play.mp3'\r\n    },\r\n    {\r\n      word: 'point',\r\n      translation: 'указывать',\r\n      image: '../assets/img/point.jpg',\r\n      audioSrc: '../assets/audio/point.mp3'\r\n    },\r\n    {\r\n      word: 'ride',\r\n      translation: 'ездить',\r\n      image: '../assets/img/ride.jpg',\r\n      audioSrc: '../assets/audio/ride.mp3'\r\n    },\r\n    {\r\n      word: 'run',\r\n      translation: 'бегать',\r\n      image: '../assets/img/run.jpg',\r\n      audioSrc: '../assets/audio/run.mp3'\r\n    },\r\n    {\r\n      word: 'sing',\r\n      translation: 'петь',\r\n      image: '../assets/img/sing.jpg',\r\n      audioSrc: '../assets/audio/sing.mp3'\r\n    },\r\n    {\r\n      word: 'skip',\r\n      translation: 'пропускать, прыгать',\r\n      image: '../assets/img/skip.jpg',\r\n      audioSrc: '../assets/audio/skip.mp3'\r\n    },\r\n    {\r\n      word: 'swim',\r\n      translation: 'плавать',\r\n      image: '../assets/img/swim.jpg',\r\n      audioSrc: '../assets/audio/swim.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'cat',\r\n      translation: 'кот',\r\n      image: '../assets/img/cat.jpg',\r\n      audioSrc: '../assets/audio/cat.mp3'\r\n    },\r\n    {\r\n      word: 'chick',\r\n      translation: 'цыплёнок',\r\n      image: '../assets/img/chick.jpg',\r\n      audioSrc: '../assets/audio/chick.mp3'\r\n    },\r\n    {\r\n      word: 'chicken',\r\n      translation: 'курица',\r\n      image: '../assets/img/chicken.jpg',\r\n      audioSrc: '../assets/audio/chicken.mp3'\r\n    },\r\n    {\r\n      word: 'dog',\r\n      translation: 'собака',\r\n      image: '../assets/img/dog.jpg',\r\n      audioSrc: '../assets/audio/dog.mp3'\r\n    },\r\n    {\r\n      word: 'horse',\r\n      translation: 'лошадь',\r\n      image: '../assets/img/horse.jpg',\r\n      audioSrc: '../assets/audio/horse.mp3'\r\n    },\r\n    {\r\n      word: 'pig',\r\n      translation: 'свинья',\r\n      image: '../assets/img/pig.jpg',\r\n      audioSrc: '../assets/audio/pig.mp3'\r\n    },\r\n    {\r\n      word: 'rabbit',\r\n      translation: 'кролик',\r\n      image: '../assets/img/rabbit.jpg',\r\n      audioSrc: '../assets/audio/rabbit.mp3'\r\n    },\r\n    {\r\n      word: 'sheep',\r\n      translation: 'овца',\r\n      image: '../assets/img/sheep.jpg',\r\n      audioSrc: '../assets/audio/sheep.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'bird',\r\n      translation: 'птица',\r\n      image: '../assets/img/bird.jpg',\r\n      audioSrc: '../assets/audio/bird.mp3'\r\n    },\r\n    {\r\n      word: 'fish',\r\n      translation: 'рыба',\r\n      image: '../assets/img/fish1.jpg',\r\n      audioSrc: '../assets/audio/fish.mp3'\r\n    },\r\n    {\r\n      word: 'frog',\r\n      translation: 'жаба',\r\n      image: '../assets/img/frog.jpg',\r\n      audioSrc: '../assets/audio/frog.mp3'\r\n    },\r\n    {\r\n      word: 'giraffe',\r\n      translation: 'жирафа',\r\n      image: '../assets/img/giraffe.jpg',\r\n      audioSrc: '../assets/audio/giraffe.mp3'\r\n    },\r\n    {\r\n      word: 'lion',\r\n      translation: 'лев',\r\n      image: '../assets/img/lion.jpg',\r\n      audioSrc: '../assets/audio/lion.mp3'\r\n    },\r\n    {\r\n      word: 'mouse',\r\n      translation: 'мышь',\r\n      image: '../assets/img/mouse.jpg',\r\n      audioSrc: '../assets/audio/mouse.mp3'\r\n    },\r\n    {\r\n      word: 'turtle',\r\n      translation: 'черепаха',\r\n      image: '../assets/img/turtle.jpg',\r\n      audioSrc: '../assets/audio/turtle.mp3'\r\n    },\r\n    {\r\n      word: 'dolphin',\r\n      translation: 'дельфин',\r\n      image: '../assets/img/dolphin.jpg',\r\n      audioSrc: '../assets/audio/dolphin.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'skirt',\r\n      translation: 'юбка',\r\n      image: '../assets/img/skirt.jpg',\r\n      audioSrc: '../assets/audio/skirt.mp3'\r\n    },\r\n    {\r\n      word: 'pants',\r\n      translation: 'брюки',\r\n      image: '../assets/img/pants.jpg',\r\n      audioSrc: '../assets/audio/pants.mp3'\r\n    },\r\n    {\r\n      word: 'blouse',\r\n      translation: 'блузка',\r\n      image: '../assets/img/blouse.jpg',\r\n      audioSrc: '../assets/audio/blouse.mp3'\r\n    },\r\n    {\r\n      word: 'dress',\r\n      translation: 'платье',\r\n      image: '../assets/img/dress.jpg',\r\n      audioSrc: '../assets/audio/dress.mp3'\r\n    },\r\n    {\r\n      word: 'boot',\r\n      translation: 'ботинок',\r\n      image: '../assets/img/boot.jpg',\r\n      audioSrc: '../assets/audio/boot.mp3'\r\n    },\r\n    {\r\n      word: 'shirt',\r\n      translation: 'рубашка',\r\n      image: '../assets/img/shirt.jpg',\r\n      audioSrc: '../assets/audio/shirt.mp3'\r\n    },\r\n    {\r\n      word: 'coat',\r\n      translation: 'пальто',\r\n      image: '../assets/img/coat.jpg',\r\n      audioSrc: '../assets/audio/coat.mp3'\r\n    },\r\n    {\r\n      word: 'shoe',\r\n      translation: 'туфли',\r\n      image: '../assets/img/shoe.jpg',\r\n      audioSrc: '../assets/audio/shoe.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'sad',\r\n      translation: 'грустный',\r\n      image: '../assets/img/sad.jpg',\r\n      audioSrc: '../assets/audio/sad.mp3'\r\n    },\r\n    {\r\n      word: 'angry',\r\n      translation: 'сердитый',\r\n      image: '../assets/img/angry.jpg',\r\n      audioSrc: '../assets/audio/angry.mp3'\r\n    },\r\n    {\r\n      word: 'happy',\r\n      translation: 'счастливый',\r\n      image: '../assets/img/happy.jpg',\r\n      audioSrc: '../assets/audio/happy.mp3'\r\n    },\r\n    {\r\n      word: 'tired',\r\n      translation: 'уставший',\r\n      image: '../assets/img/tired.jpg',\r\n      audioSrc: '../assets/audio/tired.mp3'\r\n    },\r\n    {\r\n      word: 'surprised',\r\n      translation: 'удивлённый',\r\n      image: '../assets/img/surprised.jpg',\r\n      audioSrc: '../assets/audio/surprised.mp3'\r\n    },\r\n    {\r\n      word: 'scared',\r\n      translation: 'испуганный',\r\n      image: '../assets/img/scared.jpg',\r\n      audioSrc: '../assets/audio/scared.mp3'\r\n    },\r\n    {\r\n      word: 'smile',\r\n      translation: 'улыбка',\r\n      image: '../assets/img/smile.jpg',\r\n      audioSrc: '../assets/audio/smile.mp3'\r\n    },\r\n    {\r\n      word: 'laugh',\r\n      translation: 'смех',\r\n      image: '../assets/img/laugh.jpg',\r\n      audioSrc: '../assets/audio/laugh.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'banana',\r\n      translation: 'банан',\r\n      image: '../assets/img/banana.jpg',\r\n      audioSrc: '../assets/audio/banana.mp3'\r\n    },\r\n    {\r\n      word: 'burger',\r\n      translation: 'бургер',\r\n      image: '../assets/img/burger.jpg',\r\n      audioSrc: '../assets/audio/burger.mp3'\r\n    },\r\n    {\r\n      word: 'pasta',\r\n      translation: 'макароны',\r\n      image: '../assets/img/pasta.jpg',\r\n      audioSrc: '../assets/audio/pasta.mp3'\r\n    },\r\n    {\r\n      word: 'cake',\r\n      translation: 'торт',\r\n      image: '../assets/img/cake.jpg',\r\n      audioSrc: '../assets/audio/cake.mp3'\r\n    },\r\n    {\r\n      word: 'carrot',\r\n      translation: 'морковь',\r\n      image: '../assets/img/carrot.jpg',\r\n      audioSrc: '../assets/audio/carrot.mp3'\r\n    },\r\n    {\r\n      word: 'tea',\r\n      translation: 'чай',\r\n      image: '../assets/img/tea.jpg',\r\n      audioSrc: '../assets/audio/tea.mp3'\r\n    },\r\n    {\r\n      word: 'onion',\r\n      translation: 'лук',\r\n      image: '../assets/img/onion.jpg',\r\n      audioSrc: '../assets/audio/onion.mp3'\r\n    },\r\n    {\r\n      word: 'potato',\r\n      translation: 'картофель',\r\n      image: '../assets/img/potato.jpg',\r\n      audioSrc: '../assets/audio/potato.mp3'\r\n    }\r\n  ],\r\n  [\r\n    {\r\n      word: 'tree',\r\n      translation: 'дерево',\r\n      image: '../assets/img/tree.jpg',\r\n      audioSrc: '../assets/audio/tree.mp3'\r\n    },\r\n    {\r\n      word: 'grass',\r\n      translation: 'трава',\r\n      image: '../assets/img/grass.jpg',\r\n      audioSrc: '../assets/audio/grass.mp3'\r\n    },\r\n    {\r\n      word: 'river',\r\n      translation: 'река',\r\n      image: '../assets/img/river.jpg',\r\n      audioSrc: '../assets/audio/river.mp3'\r\n    },\r\n    {\r\n      word: 'bush',\r\n      translation: 'куст',\r\n      image: '../assets/img/bush.jpg',\r\n      audioSrc: '../assets/audio/bush.mp3'\r\n    },\r\n    {\r\n      word: 'sand',\r\n      translation: 'песок',\r\n      image: '../assets/img/sand.jpg',\r\n      audioSrc: '../assets/audio/sand.mp3'\r\n    },\r\n    {\r\n      word: 'lake',\r\n      translation: 'озеро',\r\n      image: '../assets/img/lake.jpg',\r\n      audioSrc: '../assets/audio/lake.mp3'\r\n    },\r\n    {\r\n      word: 'sky',\r\n      translation: 'небо',\r\n      image: '../assets/img/sky.jpg',\r\n      audioSrc: '../assets/audio/sky.mp3'\r\n    },\r\n    {\r\n      word: 'flower',\r\n      translation: 'цветок',\r\n      image: '../assets/img/flower.jpg',\r\n      audioSrc: '../assets/audio/flower.mp3'\r\n    }\r\n  ]\r\n];\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\r\n\n\n//# sourceURL=webpack:///./src/scripts/cards.js?");

/***/ }),

/***/ "./src/scripts/category.js":
/*!*********************************!*\
  !*** ./src/scripts/category.js ***!
  \*********************************/
/*! exports provided: createCategory, changeGameModeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCategory\", function() { return createCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeGameModeStyle\", function() { return changeGameModeStyle; });\n/* harmony import */ var _playCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playCategory */ \"./src/scripts/playCategory.js\");\n/* harmony import */ var _trainCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainCategory */ \"./src/scripts/trainCategory.js\");\n\r\n\r\n\r\nfunction createCategory(n, Game, main, cards, audio) {\r\n  if (Game.playmode) {\r\n    Object(_playCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(n, main, cards, Game, audio);\r\n  } else {\r\n    Object(_trainCategory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(n, main, cards, audio);\r\n  }\r\n}\r\n\r\nfunction changeGameModeStyle(main, Game, cards, audio) {\r\n  const list = document.querySelector(\".menu__list\");\r\n  const mainCard = document.querySelectorAll(\".card_main\");\r\n  if (Game.playmode) {\r\n    list.classList.remove(\"green_nav\");\r\n    if (+main.dataset.category === 0) {\r\n      mainCard.forEach((card) => card.classList.remove(\"green_main\"));\r\n    } else {\r\n      Object(_playCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(+main.dataset.category, main, cards, Game, audio);\r\n    }\r\n  } else {\r\n    list.classList.add(\"green_nav\");\r\n    if (+main.dataset.category === 0) {\r\n      mainCard.forEach((card) => card.classList.add(\"green_main\"));\r\n    } else {\r\n      Object(_trainCategory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(+main.dataset.category, main, cards, audio);\r\n    }\r\n\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/category.js?");

/***/ }),

/***/ "./src/scripts/mainpage.js":
/*!*********************************!*\
  !*** ./src/scripts/mainpage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/scripts/category.js\");\n\r\nfunction createMain(main, cards, Game, audio) {\r\n  if (main.firstElementChild) main.firstElementChild.remove();\r\n  main.dataset.category = 0;\r\n  const container = document.createElement(\"div\");\r\n  const category = cards[0];\r\n  container.className = \"container\";\r\n  \r\n  for (let i = 0; i < category.length; i += 1) {\r\n    const a = document.createElement(\"a\");\r\n    const img = document.createElement(\"img\");\r\n    const span = document.createElement(\"span\");\r\n    //add class\r\n    a.className = \"card card_main\";\r\n    if (!Game.playmode) a.classList.add(\"green_main\");\r\n    a.dataset.category = i + 1;\r\n    span.className = \"card__text\";\r\n    img.alt = \"card\";\r\n    img.src = cards[i + 1][0].image;\r\n    span.textContent = category[i];\r\n\r\n    a.addEventListener(\"click\", () => {\r\n      Object(_category__WEBPACK_IMPORTED_MODULE_0__[\"createCategory\"])(a.dataset.category, Game, main, cards, audio);\r\n    });\r\n    a.append(img);\r\n    a.append(span);\r\n    container.append(a);\r\n  }\r\n  main.append(container);\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createMain);\r\n\n\n//# sourceURL=webpack:///./src/scripts/mainpage.js?");

/***/ }),

/***/ "./src/scripts/playCategory.js":
/*!*************************************!*\
  !*** ./src/scripts/playCategory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage */ \"./src/scripts/mainpage.js\");\n\r\n\r\nfunction createPlayCategory(n, main, cards, Game, audio) {\r\n  if (main.firstElementChild) main.firstElementChild.remove();\r\n  main.dataset.category = n;\r\n\r\n  const category = cards[n];\r\n  const container = document.createElement(\"div\");\r\n  const controls = document.createElement(\"div\");\r\n  const button = document.createElement(\"button\");\r\n  const score = document.createElement(\"div\");\r\n  container.className = \"container\";\r\n  score.className = \"score\";\r\n  button.className = \"button_start\";\r\n  button.textContent = \"start game\";\r\n  controls.className = \"controls\";\r\n\r\n  container.append(score);\r\n\r\n  const cardsInGame = [];// reset cardsInGame\r\n\r\n  for (let i = 0; i < category.length; i += 1) {\r\n    const a = document.createElement(\"a\");\r\n    const img = document.createElement(\"img\");\r\n    a.className = \"card card_play\";\r\n\r\n    img.alt = category[i].word;\r\n    img.src = category[i].image;\r\n\r\n    cardsInGame.push(category[i]);\r\n\r\n    a.append(img);\r\n    container.append(a);\r\n  }\r\n  function shuffle(arr) {\r\n    let j;\r\n    let temp;\r\n    for (let i = arr.length - 1; i > 0; i -= 1) {\r\n      j = Math.floor(Math.random() * (i + 1));\r\n      temp = arr[j];\r\n      arr[j] = arr[i];\r\n      arr[i] = temp;\r\n    }\r\n  }\r\n  shuffle(cardsInGame);\r\n\r\n  controls.append(button);\r\n  container.append(controls);\r\n  main.append(container);\r\n\r\n  let gameIndex = 0;\r\n  const gameScore = {\r\n    isWin: true,\r\n    error: 0,\r\n    correct: 0,\r\n  };\r\n  button.addEventListener(\"click\", (event) => {\r\n    const gameStarted = event.target.classList.contains(\"button_repeat\");\r\n\r\n    if (gameStarted) {\r\n      audio.src = cardsInGame[gameIndex].audioSrc;\r\n      audio.play();\r\n    } else {\r\n      button.classList.add(\"button_repeat\");\r\n      audio.src = cardsInGame[gameIndex].audioSrc;\r\n      audio.play();\r\n      const playCards = document.querySelectorAll(\".card_play\");\r\n      playCards.forEach((card) => {\r\n        card.addEventListener(\"click\", (event) => {\r\n          const star = document.createElement(\"div\");\r\n          star.className = \"star\";\r\n          if (event.target.alt === cardsInGame[gameIndex].word) {\r\n            audio.src = \"../assets/audio/correct.mp3\";\r\n            audio.play();\r\n\r\n            event.target.classList.add(\"checked\");\r\n            star.classList.add(\"star_win\");\r\n            gameScore.correct += 1;\r\n            gameIndex += 1;\r\n            if (gameIndex < cardsInGame.length) {\r\n              setTimeout(() => {\r\n                audio.src = cardsInGame[gameIndex].audioSrc;\r\n                audio.play();\r\n              }, 700);\r\n            }\r\n          } else {\r\n            gameScore.isWin = false;\r\n            gameScore.error += 1;\r\n            audio.src = \"../assets/audio/error.mp3\";\r\n            audio.play();\r\n          }\r\n          score.append(star);\r\n          if (gameIndex === cardsInGame.length) {\r\n            if (main.firstElementChild) main.firstElementChild.remove();\r\n            const wrap = document.createElement(\"div\");\r\n            const gameResualt = document.createElement(\"div\");\r\n            const text = document.createElement(\"div\");\r\n            gameResualt.className = \"game__resualt\";\r\n            text.className = \"game__resualt_text\";\r\n\r\n            if (gameScore.isWin) {\r\n              text.innerText = \"Excellent!\";\r\n              setTimeout(() => {\r\n                audio.src = \"../assets/audio/success.mp3\";\r\n                audio.play();\r\n              }, 1100);\r\n            } else {\r\n              setTimeout(() => {\r\n                audio.src = \"../assets/audio/Fail-sound-effect.mp3\";\r\n                audio.play();\r\n              }, 1100);\r\n              text.innerText = `you made ${gameScore.error} mistakes`;\r\n              gameResualt.classList.add(\"lose-screen\");\r\n              text.classList.add(\"lose-screen_text\");\r\n            }\r\n            wrap.append(text);\r\n            wrap.append(gameResualt);\r\n            main.append(wrap);\r\n            setTimeout(() => Object(_mainpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(main, cards, Game, audio), 3000);\r\n          }\r\n        });\r\n      });\r\n    }\r\n  });\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createPlayCategory);\n\n//# sourceURL=webpack:///./src/scripts/playCategory.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/scripts/cards.js\");\n/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainpage */ \"./src/scripts/mainpage.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ \"./src/scripts/category.js\");\n/* global cards, main, Game , createMain, createCategory */\r\n\r\n\r\n// import createPlayCategory from \"./playCategory\";\r\n// import createTrainCategory from \"./trainCategory\";\r\n\r\n\r\nconst main = document.querySelector('main');\r\nconst category = _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0];\r\nconst nav = document.querySelectorAll(\".menu__item\");\r\nconst toogle = document.querySelector(\".switch input\");\r\nconst audio = document.createElement(\"audio\");\r\n\r\nconst Game = {\r\n  get playmode() {\r\n    return toogle.checked;\r\n  },\r\n};\r\nObject(_mainpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(main,  _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"], Game, audio);\r\n\r\nnav[0].addEventListener(\"click\", () => Object(_mainpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(main,  _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"], Game, audio));\r\n\r\nfor (let i = 0; i < category.length; i += 1) {\r\n  nav[i + 1].text = category[i];\r\n  nav[i + 1].addEventListener(\"click\", () => Object(_category__WEBPACK_IMPORTED_MODULE_2__[\"createCategory\"])(i + 1, Game, main, _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"], audio));\r\n}\r\n\r\naudio.src = _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][1][0].audioSrc;\r\n\r\ndocument.querySelector(\"header\").append(document.createElement(\"audio\"));\r\n\r\ntoogle.addEventListener(\"click\", () => Object(_category__WEBPACK_IMPORTED_MODULE_2__[\"changeGameModeStyle\"])(main, Game, _cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"], audio));\r\n\n\n//# sourceURL=webpack:///./src/scripts/script.js?");

/***/ }),

/***/ "./src/scripts/trainCategory.js":
/*!**************************************!*\
  !*** ./src/scripts/trainCategory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createTrainCategory(n, main, cards, audio) {\r\n  if (main.firstElementChild) main.firstElementChild.remove();\r\n  main.dataset.category = n;\r\n  const container = document.createElement(\"div\");\r\n  const category = cards[n];\r\n  container.className = \"container\";\r\n\r\n  for (let i = 0; i < category.length; i += 1) {\r\n    // 3d wrapper\r\n    const flipContainer = document.createElement(\"div\");\r\n    const flipper = document.createElement(\"div\");\r\n    const front = document.createElement(\"div\");\r\n    const back = document.createElement(\"div\");\r\n    flipContainer.className = \"flip-container\";\r\n    flipper.className = \"flipper\";\r\n    front.className = \"front\";\r\n    back.className = \"back\";\r\n\r\n    const af = document.createElement(\"a\");\r\n    const ab = document.createElement(\"a\");\r\n    const imgf = document.createElement(\"img\");\r\n    const imgb = document.createElement(\"img\");\r\n    const word = document.createElement(\"span\");\r\n    const rotate = document.createElement(\"div\");\r\n    const translation = document.createElement(\"span\");\r\n    // add audio\r\n    af.dataset.audio = category[i].audioSrc;\r\n    // add class\r\n    af.className = \"card card_train\";\r\n    ab.className = \"card card_train\";\r\n    word.className = \"card__text\";\r\n    word.textContent = category[i].word;\r\n    rotate.className = \"rotate__arrow\";\r\n    translation.className = \"card__text\";\r\n    translation.textContent = category[i].translation;\r\n    imgf.src = category[i].image;\r\n    imgb.src = category[i].image;\r\n    word.append(rotate);\r\n    af.append(imgf);\r\n    af.append(word);\r\n    ab.append(imgb);\r\n    ab.append(translation);\r\n    front.append(af);\r\n    back.append(ab);\r\n    flipper.append(front);\r\n    flipper.append(back);\r\n    flipContainer.append(flipper);\r\n    container.append(flipContainer);\r\n  }\r\n  main.append(container);\r\n\r\n  container.addEventListener(\"click\", (event) => {\r\n    if (event.target.className === \"rotate__arrow\") {\r\n      const flipper = event.target.closest(\".flipper\");\r\n      flipper.classList.add(\"rotate_transform\");\r\n      const handler = (e) => {\r\n        if (e.relatedTarget === flipper.parentNode.parentNode) {\r\n          flipper.classList.remove(\"rotate_transform\");\r\n          flipper.removeEventListener(\"mouseout\", handler);\r\n        }\r\n      };\r\n      flipper.addEventListener(\"mouseout\", handler);\r\n    } else {\r\n      const dataAudio = event.target.closest(\"a[data-audio]\");\r\n      if (dataAudio) {\r\n        audio.src = dataAudio.dataset.audio;\r\n        audio.play();\r\n      }\r\n    }\r\n  });\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createTrainCategory);\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/trainCategory.js?");

/***/ })

/******/ });