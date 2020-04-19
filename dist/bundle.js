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
__webpack_require__.r(__webpack_exports__);
/* eslint quotes: ["error", "single"] */

/* eslint comma-dangle: ["error", "never"] */
var cards = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Food', 'Natural'], [{
  word: 'cry',
  translation: 'плакать',
  image: '../assets/img/cry.jpg',
  audioSrc: '../assets/audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: '../assets/img/dance.jpg',
  audioSrc: '../assets/audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: '../assets/img/dive.jpg',
  audioSrc: '../assets/audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: '../assets/img/draw.jpg',
  audioSrc: '../assets/audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: '../assets/img/fish.jpg',
  audioSrc: '../assets/audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: '../assets/img/fly.jpg',
  audioSrc: '../assets/audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: '../assets/img/hug.jpg',
  audioSrc: '../assets/audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: '../assets/img/jump.jpg',
  audioSrc: '../assets/audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: '../assets/img/open.jpg',
  audioSrc: '../assets/audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: '../assets/img/play.jpg',
  audioSrc: '../assets/audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: '../assets/img/point.jpg',
  audioSrc: '../assets/audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: '../assets/img/ride.jpg',
  audioSrc: '../assets/audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: '../assets/img/run.jpg',
  audioSrc: '../assets/audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: '../assets/img/sing.jpg',
  audioSrc: '../assets/audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: '../assets/img/skip.jpg',
  audioSrc: '../assets/audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: '../assets/img/swim.jpg',
  audioSrc: '../assets/audio/swim.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: '../assets/img/cat.jpg',
  audioSrc: '../assets/audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: '../assets/img/chick.jpg',
  audioSrc: '../assets/audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: '../assets/img/chicken.jpg',
  audioSrc: '../assets/audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: '../assets/img/dog.jpg',
  audioSrc: '../assets/audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: '../assets/img/horse.jpg',
  audioSrc: '../assets/audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: '../assets/img/pig.jpg',
  audioSrc: '../assets/audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: '../assets/img/rabbit.jpg',
  audioSrc: '../assets/audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: '../assets/img/sheep.jpg',
  audioSrc: '../assets/audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: '../assets/img/bird.jpg',
  audioSrc: '../assets/audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: '../assets/img/fish1.jpg',
  audioSrc: '../assets/audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: '../assets/img/frog.jpg',
  audioSrc: '../assets/audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: '../assets/img/giraffe.jpg',
  audioSrc: '../assets/audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: '../assets/img/lion.jpg',
  audioSrc: '../assets/audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: '../assets/img/mouse.jpg',
  audioSrc: '../assets/audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: '../assets/img/turtle.jpg',
  audioSrc: '../assets/audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: '../assets/img/dolphin.jpg',
  audioSrc: '../assets/audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: '../assets/img/skirt.jpg',
  audioSrc: '../assets/audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: '../assets/img/pants.jpg',
  audioSrc: '../assets/audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: '../assets/img/blouse.jpg',
  audioSrc: '../assets/audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: '../assets/img/dress.jpg',
  audioSrc: '../assets/audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: '../assets/img/boot.jpg',
  audioSrc: '../assets/audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: '../assets/img/shirt.jpg',
  audioSrc: '../assets/audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: '../assets/img/coat.jpg',
  audioSrc: '../assets/audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: '../assets/img/shoe.jpg',
  audioSrc: '../assets/audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: '../assets/img/sad.jpg',
  audioSrc: '../assets/audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: '../assets/img/angry.jpg',
  audioSrc: '../assets/audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: '../assets/img/happy.jpg',
  audioSrc: '../assets/audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: '../assets/img/tired.jpg',
  audioSrc: '../assets/audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: '../assets/img/surprised.jpg',
  audioSrc: '../assets/audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: '../assets/img/scared.jpg',
  audioSrc: '../assets/audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: '../assets/img/smile.jpg',
  audioSrc: '../assets/audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: '../assets/img/laugh.jpg',
  audioSrc: '../assets/audio/laugh.mp3'
}], [{
  word: 'banana',
  translation: 'банан',
  image: '../assets/img/banana.jpg',
  audioSrc: '../assets/audio/banana.mp3'
}, {
  word: 'burger',
  translation: 'бургер',
  image: '../assets/img/burger.jpg',
  audioSrc: '../assets/audio/burger.mp3'
}, {
  word: 'pasta',
  translation: 'макароны',
  image: '../assets/img/pasta.jpg',
  audioSrc: '../assets/audio/pasta.mp3'
}, {
  word: 'cake',
  translation: 'торт',
  image: '../assets/img/cake.jpg',
  audioSrc: '../assets/audio/cake.mp3'
}, {
  word: 'carrot',
  translation: 'морковь',
  image: '../assets/img/carrot.jpg',
  audioSrc: '../assets/audio/carrot.mp3'
}, {
  word: 'tea',
  translation: 'чай',
  image: '../assets/img/tea.jpg',
  audioSrc: '../assets/audio/tea.mp3'
}, {
  word: 'onion',
  translation: 'лук',
  image: '../assets/img/onion.jpg',
  audioSrc: '../assets/audio/onion.mp3'
}, {
  word: 'potato',
  translation: 'картофель',
  image: '../assets/img/potato.jpg',
  audioSrc: '../assets/audio/potato.mp3'
}], [{
  word: 'tree',
  translation: 'дерево',
  image: '../assets/img/tree.jpg',
  audioSrc: '../assets/audio/tree.mp3'
}, {
  word: 'grass',
  translation: 'трава',
  image: '../assets/img/grass.jpg',
  audioSrc: '../assets/audio/grass.mp3'
}, {
  word: 'river',
  translation: 'река',
  image: '../assets/img/river.jpg',
  audioSrc: '../assets/audio/river.mp3'
}, {
  word: 'bush',
  translation: 'куст',
  image: '../assets/img/bush.jpg',
  audioSrc: '../assets/audio/bush.mp3'
}, {
  word: 'sand',
  translation: 'песок',
  image: '../assets/img/sand.jpg',
  audioSrc: '../assets/audio/sand.mp3'
}, {
  word: 'lake',
  translation: 'озеро',
  image: '../assets/img/lake.jpg',
  audioSrc: '../assets/audio/lake.mp3'
}, {
  word: 'sky',
  translation: 'небо',
  image: '../assets/img/sky.jpg',
  audioSrc: '../assets/audio/sky.mp3'
}, {
  word: 'flower',
  translation: 'цветок',
  image: '../assets/img/flower.jpg',
  audioSrc: '../assets/audio/flower.mp3'
}]];
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/scripts/category.js":
/*!*********************************!*\
  !*** ./src/scripts/category.js ***!
  \*********************************/
/*! exports provided: createCategory, changeGameModeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeGameModeStyle", function() { return changeGameModeStyle; });
/* harmony import */ var _playCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playCategory */ "./src/scripts/playCategory.js");
/* harmony import */ var _trainCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainCategory */ "./src/scripts/trainCategory.js");



function createCategory(n, Game, main, cards, audio) {
  if (Game.playmode) {
    Object(_playCategory__WEBPACK_IMPORTED_MODULE_0__["default"])(n, main, cards, Game, audio);
  } else {
    Object(_trainCategory__WEBPACK_IMPORTED_MODULE_1__["default"])(n, main, cards, audio);
  }
}

function changeGameModeStyle(main, Game, cards, audio) {
  var list = document.querySelector(".menu__list");
  var mainCard = document.querySelectorAll(".card_main");

  if (Game.playmode) {
    list.classList.remove("green_nav");

    if (+main.dataset.category === 0) {
      mainCard.forEach(function (card) {
        return card.classList.remove("green_main");
      });
    } else {
      Object(_playCategory__WEBPACK_IMPORTED_MODULE_0__["default"])(+main.dataset.category, main, cards, Game, audio);
    }
  } else {
    list.classList.add("green_nav");

    if (+main.dataset.category === 0) {
      mainCard.forEach(function (card) {
        return card.classList.add("green_main");
      });
    } else {
      Object(_trainCategory__WEBPACK_IMPORTED_MODULE_1__["default"])(+main.dataset.category, main, cards, audio);
    }
  }
}



/***/ }),

/***/ "./src/scripts/mainpage.js":
/*!*********************************!*\
  !*** ./src/scripts/mainpage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/scripts/category.js");


function createMain(main, cards, Game, audio) {
  if (main.firstElementChild) main.firstElementChild.remove();
  main.dataset.category = 0;
  var container = document.createElement("div");
  var category = cards[0];
  container.className = "container";

  var _loop = function _loop(i) {
    var a = document.createElement("a");
    var img = document.createElement("img");
    var span = document.createElement("span"); //add class

    a.className = "card card_main";
    if (!Game.playmode) a.classList.add("green_main");
    a.dataset.category = i + 1;
    span.className = "card__text";
    img.alt = "card";
    img.src = cards[i + 1][0].image;
    span.textContent = category[i];
    a.addEventListener("click", function () {
      Object(_category__WEBPACK_IMPORTED_MODULE_0__["createCategory"])(a.dataset.category, Game, main, cards, audio);
    });
    a.append(img);
    a.append(span);
    container.append(a);
  };

  for (var i = 0; i < category.length; i += 1) {
    _loop(i);
  }

  main.append(container);
}

/* harmony default export */ __webpack_exports__["default"] = (createMain);

/***/ }),

/***/ "./src/scripts/playCategory.js":
/*!*************************************!*\
  !*** ./src/scripts/playCategory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage */ "./src/scripts/mainpage.js");


function createPlayCategory(n, main, cards, Game, audio) {
  if (main.firstElementChild) main.firstElementChild.remove();
  main.dataset.category = n;
  var category = cards[n];
  var container = document.createElement("div");
  var controls = document.createElement("div");
  var button = document.createElement("button");
  var score = document.createElement("div");
  container.className = "container";
  score.className = "score";
  button.className = "button_start";
  button.textContent = "start game";
  controls.className = "controls";
  container.append(score);
  var cardsInGame = [];

  for (var i = 0; i < category.length; i += 1) {
    var a = document.createElement("a");
    var img = document.createElement("img");
    a.className = "card card_play";
    img.alt = category[i].word;
    img.src = category[i].image;
    cardsInGame.push(category[i]);
    a.append(img);
    container.append(a);
  }

  function shuffle(arr) {
    var j;
    var temp;

    for (var _i = arr.length - 1; _i > 0; _i -= 1) {
      j = Math.floor(Math.random() * (_i + 1));
      temp = arr[j];
      arr[j] = arr[_i];
      arr[_i] = temp;
    }
  }

  shuffle(cardsInGame);
  controls.append(button);
  container.append(controls);
  main.append(container);
  var gameIndex = 0;
  var gameScore = {
    isWin: true,
    error: 0,
    correct: 0
  };
  button.addEventListener("click", function (e) {
    var gameStarted = e.target.classList.contains("button_repeat");

    if (gameStarted) {
      audio.src = cardsInGame[gameIndex].audioSrc;
      audio.play();
    } else {
      button.classList.add("button_repeat");
      audio.src = cardsInGame[gameIndex].audioSrc;
      audio.play();
      var playCards = document.querySelectorAll(".card_play");
      playCards.forEach(function (card) {
        card.addEventListener("click", function (event) {
          var star = document.createElement("div");
          star.className = "star";

          if (event.target.alt === cardsInGame[gameIndex].word) {
            audio.src = "../assets/audio/correct.mp3";
            audio.play();
            event.target.classList.add("checked");
            star.classList.add("star_win");
            gameScore.correct += 1;
            gameIndex += 1;

            if (gameIndex < cardsInGame.length) {
              setTimeout(function () {
                audio.src = cardsInGame[gameIndex].audioSrc;
                audio.play();
              }, 700);
            }
          } else if (event.target.classList.contains("checked")) {
            return;
          } else {
            gameScore.isWin = false;
            gameScore.error += 1;
            audio.src = "../assets/audio/error.mp3";
            audio.play();
          }

          score.append(star);

          if (gameIndex === cardsInGame.length) {
            if (main.firstElementChild) main.firstElementChild.remove();
            var wrap = document.createElement("div");
            var gameResualt = document.createElement("div");
            var text = document.createElement("div");
            gameResualt.className = "game__resualt";
            text.className = "game__resualt_text";

            if (gameScore.isWin) {
              text.innerText = "Excellent!";
              setTimeout(function () {
                audio.src = "../assets/audio/success.mp3";
                audio.play();
              }, 1100);
            } else {
              setTimeout(function () {
                audio.src = "../assets/audio/Fail-sound-effect.mp3";
                audio.play();
              }, 1100);
              text.innerText = "you made ".concat(gameScore.error, " mistakes");
              gameResualt.classList.add("lose-screen");
              text.classList.add("lose-screen_text");
            }

            wrap.append(text);
            wrap.append(gameResualt);
            main.append(wrap);
            setTimeout(function () {
              return Object(_mainpage__WEBPACK_IMPORTED_MODULE_0__["default"])(main, cards, Game, audio);
            }, 3000);
          }
        });
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createPlayCategory);

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/scripts/cards.js");
/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainpage */ "./src/scripts/mainpage.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/scripts/category.js");



var main = document.querySelector("main");
var nav = document.querySelectorAll(".menu__item");
var toogle = document.querySelector(".switch input");
var audio = document.createElement("audio");
var category = _cards__WEBPACK_IMPORTED_MODULE_0__["default"][0];
var checkbox = document.querySelector("input[type=checkbox]");
var Game = {
  get playmode() {
    return toogle.checked;
  }

};
Object(_mainpage__WEBPACK_IMPORTED_MODULE_1__["default"])(main, _cards__WEBPACK_IMPORTED_MODULE_0__["default"], Game, audio); // create main page;

nav[0].addEventListener("click", function () {
  // create menu
  nav.forEach(function (a) {
    return a.classList.remove("menu__item_active");
  });
  nav[0].classList.add("menu__item_active");
  checkbox.checked = false;
  Object(_mainpage__WEBPACK_IMPORTED_MODULE_1__["default"])(main, _cards__WEBPACK_IMPORTED_MODULE_0__["default"], Game, audio);
});

var _loop = function _loop(i) {
  // create menu
  nav[i + 1].text = category[i];
  nav[i + 1].addEventListener("click", function () {
    nav.forEach(function (a) {
      return a.classList.remove("menu__item_active");
    });
    nav[i + 1].classList.add("menu__item_active");
    checkbox.checked = false;
    Object(_category__WEBPACK_IMPORTED_MODULE_2__["createCategory"])(i + 1, Game, main, _cards__WEBPACK_IMPORTED_MODULE_0__["default"], audio);
  });
};

for (var i = 0; i < category.length; i += 1) {
  _loop(i);
}

audio.src = _cards__WEBPACK_IMPORTED_MODULE_0__["default"][1][0].audioSrc;
document.querySelector("header").append(document.createElement("audio"));
toogle.addEventListener("click", function () {
  return Object(_category__WEBPACK_IMPORTED_MODULE_2__["changeGameModeStyle"])(main, Game, _cards__WEBPACK_IMPORTED_MODULE_0__["default"], audio);
});
main.addEventListener("click", function () {
  // hide menu
  if (checkbox.checked) checkbox.checked = false;
});

/***/ }),

/***/ "./src/scripts/trainCategory.js":
/*!**************************************!*\
  !*** ./src/scripts/trainCategory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createTrainCategory(n, main, cards, audio) {
  if (main.firstElementChild) main.firstElementChild.remove();
  main.dataset.category = n;
  var container = document.createElement("div");
  var category = cards[n];
  container.className = "container";

  for (var i = 0; i < category.length; i += 1) {
    // 3d wrapper
    var flipContainer = document.createElement("div");
    var flipper = document.createElement("div");
    var front = document.createElement("div");
    var back = document.createElement("div");
    flipContainer.className = "flip-container";
    flipper.className = "flipper";
    front.className = "front";
    back.className = "back";
    var af = document.createElement("a");
    var ab = document.createElement("a");
    var imgf = document.createElement("img");
    var imgb = document.createElement("img");
    var word = document.createElement("span");
    var rotate = document.createElement("div");
    var translation = document.createElement("span"); // add audio

    af.dataset.audio = category[i].audioSrc; // add class

    af.className = "card card_train";
    ab.className = "card card_train";
    word.className = "card__text";
    word.textContent = category[i].word;
    rotate.className = "rotate__arrow";
    translation.className = "card__text";
    translation.textContent = category[i].translation;
    imgf.src = category[i].image;
    imgb.src = category[i].image;
    word.append(rotate);
    af.append(imgf);
    af.append(word);
    ab.append(imgb);
    ab.append(translation);
    front.append(af);
    back.append(ab);
    flipper.append(front);
    flipper.append(back);
    flipContainer.append(flipper);
    container.append(flipContainer);
  }

  main.append(container);
  container.addEventListener("click", function (event) {
    if (event.target.className === "rotate__arrow") {
      var _flipper = event.target.closest(".flipper");

      _flipper.classList.add("rotate_transform");

      var handler = function handler(e) {
        if (e.relatedTarget === _flipper.parentNode.parentNode) {
          _flipper.classList.remove("rotate_transform");

          _flipper.removeEventListener("mouseout", handler);
        }
      };

      _flipper.addEventListener("mouseout", handler);
    } else {
      var dataAudio = event.target.closest("a[data-audio]");

      if (dataAudio) {
        audio.src = dataAudio.dataset.audio;
        audio.play();
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createTrainCategory);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map