!function(e){var r={};function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)n.d(t,a,function(r){return e[r]}.bind(null,a));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=17)}([function(e,r,n){"use strict";var t,a=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},s=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function o(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function d(e,r){for(var n={},t=[],a=0;a<e.length;a++){var s=e[a],d=r.base?s[0]+r.base:s[0],c=n[d]||0,u="".concat(d," ").concat(c);n[d]=c+1;var l=o(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:u,updater:h(p,r),references:1}),t.push(u)}return t}function c(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var a=n.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var u,l=(u=[],function(e,r){return u[e]=r,u.filter(Boolean).join("\n")});function p(e,r,n,t){var a=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=l(r,a);else{var s=document.createTextNode(a),i=e.childNodes;i[r]&&e.removeChild(i[r]),i.length?e.insertBefore(s,i[r]):e.appendChild(s)}}function m(e,r,n){var t=n.css,a=n.media,s=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),s&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var g=null,f=0;function h(e,r){var n,t,a;if(r.singleton){var s=f++;n=g||(g=c(r)),t=p.bind(null,n,s,!1),a=p.bind(null,n,s,!0)}else n=c(r),t=m.bind(null,n,r),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else a()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=a());var n=d(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var a=o(n[t]);i[a].references--}for(var s=d(e,r),c=0;c<n.length;c++){var u=o(n[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=s}}}},function(e,r,n){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=function(e,r){var n=e[1]||"",t=e[3];if(!t)return n;if(r&&"function"==typeof btoa){var a=(i=t,o=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(d," */")),s=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([a]).join("\n")}var i,o,d;return[n].join("\n")}(r,e);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(t)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(a[i]=!0)}for(var o=0;o<e.length;o++){var d=[].concat(e[o]);t&&a[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),r.push(d))}},r}},function(e,r,n){"use strict";e.exports=function(e,r){return r||(r={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,r,n){var t=n(0),a=n(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1},i=(t(a,s),a.locals?a.locals:{});e.exports=i},function(e,r,n){(r=n(1)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap);"]),r.push([e.i,'* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-family: \'Roboto\', sans-serif;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    height: 45px;\r\n    max-width: 1350px;\r\n    margin: 40px auto 0;\r\n}\r\n\r\n/* burger menu */\r\n\r\n.menu__nav {\r\n    position: relative;\r\n}\r\n\r\n.menu__toggle {\r\n    display: block;\r\n    position: relative;\r\n    z-index: 1;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.menu__item {\r\n    display: flex;\r\n    padding: 10px 0;\r\n    font-size: 22px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    transition: color 0.3s ease;\r\n}\r\n.menu__item_active {\r\n    color: #232323;\r\n}\r\n.menu__toggle a:hover {\r\n    color: #232323;\r\n}\r\n\r\n.menu__toggle input {\r\n    display: block;\r\n    width: 40px;\r\n    height: 32px;\r\n    position: absolute;\r\n    top: -7px;\r\n    left: -5px;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    z-index: 2;\r\n    -webkit-touch-callout: none;\r\n}\r\n\r\n.menu__toggle span {\r\n    display: block;\r\n    width: 33px;\r\n    height: 4px;\r\n    margin-bottom: 5px;\r\n    position: relative;\r\n    background: #cdcdcd;\r\n    border-radius: 3px;\r\n    z-index: 1;\r\n    transform-origin: 4px 0px;\r\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;\r\n}\r\n\r\n.menu__toggle span:first-child {\r\n    transform-origin: 0% 0%;\r\n}\r\n\r\n.menu__toggle span:nth-last-child(2) {\r\n    transform-origin: 0% 100%;\r\n}\r\n\r\n.menu__toggle input:checked~span {\r\n    opacity: 1;\r\n    transform: rotate(45deg) translate(-2px, -1px);\r\n    background: #232323;\r\n}\r\n\r\n.menu__toggle input:checked~span:nth-last-child(3) {\r\n    opacity: 0;\r\n    transform: rotate(0deg) scale(0.2, 0.2);\r\n}\r\n\r\n.menu__toggle input:checked~span:nth-last-child(2) {\r\n    transform: rotate(-45deg) translate(0, -1px);\r\n}\r\n\r\n.menu__list {\r\n    position: fixed;\r\n    left: 0;\r\n    width: 220px;\r\n    height: 89vh;\r\n    margin-top: -100px;\r\n    padding: 125px 50px 50px;\r\n    background: linear-gradient(40deg, #ffd86f, #fc6262);\r\n    list-style-type: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    transform-origin: 0% 0%;\r\n    transform: translate(-200%, 0);\r\n    transition: transform 0.8s cubic-bezier(0.77, 0.2, 0.05, 0.5);\r\n}\r\n\r\n.menu__toggle input:checked~div {\r\n    transform: none;\r\n}\r\n\r\n.green_nav {\r\n    background: linear-gradient(40deg, #00bf82, #0099ae);\r\n}\r\n\r\n.green_main {\r\n    background: linear-gradient(180deg, #0099ae, #00bf82 40%, #fff 0, #fff) !important;\r\n}\r\n\r\n/* switch */\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 120px;\r\n    height: 34px;\r\n}\r\n\r\n.switch input {\r\n    display: none;\r\n}\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(40deg, #00bf82, #0099ae);\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: "";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n    border-radius: 50%;\r\n}\r\n.slider:after {\r\n    content: "TRAIN";\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    line-height: 34px;\r\n    margin-left: 45px;\r\n}\r\n\r\ninput:checked+.slider {\r\n    background: linear-gradient(40deg, #ffd86f, #fc6262);\r\n}\r\n\r\ninput:checked+.slider:before {\r\n    -webkit-transform: translateX(86px);\r\n    transform: translateX(86px);\r\n}\r\n\r\ninput:checked+.slider:after  {\r\n    content: "PLAY";\r\n    margin-left: 25px;\r\n}\r\n/* main */\r\n\r\n.container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin: auto;\r\n    max-width: 1440px;\r\n    padding: 55px 15px 20px;\r\n}\r\n\r\n.card {\r\n    width: 300px;\r\n    height: 280px;\r\n    border-radius: 5px;\r\n    border: 1px solid #cdcdcd;\r\n    margin: 20px 10px;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.card__text {\r\n    display: block;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    color: #212529;\r\n}\r\n\r\n.card_main {\r\n    background: linear-gradient(180deg, #fd6a63, #feb46b 40%, #fff 0, #fff);\r\n}\r\n\r\n.card_main>img {\r\n    display: block;\r\n    width: 140px;\r\n    height: 140px;\r\n    border-radius: 50%;\r\n    border: 10px solid #fff;\r\n    object-fit: cover;\r\n    margin: 30px auto;\r\n}',""]),e.exports=r},function(e,r,n){var t=n(0),a=n(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1},i=(t(a,s),a.locals?a.locals:{});e.exports=i},function(e,r,n){var t=n(1),a=n(2),s=n(7),i=n(8),o=n(9),d=n(10),c=n(11);r=t(!1);var u=a(s),l=a(i),p=a(o),m=a(d),g=a(c);r.push([e.i,".card_play {\r\n    height: 250px;\r\n}\r\n.card_play:hover {\r\n    box-shadow: 0px 0px 8px 0px #ff9800;\r\n    border: 1px solid #ff9800;\r\n}\r\n.card_play>img {\r\n    width: inherit;\r\n    height: inherit;\r\n    object-fit: cover;\r\n}\r\n\r\n.card_play>.card__text {\r\n    display: none;\r\n}\r\n/* score style */\r\n.score {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    width: 90%;\r\n    height: 40px;\r\n    margin: 0 auto;\r\n}\r\n.star {\r\n    background-image: url("+u+");\r\n    background-size: 40px;\r\n    background-repeat: no-repeat;\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.star_win {\r\n    background-image: url("+l+");\r\n}\r\n.controls {\r\n    width: 100%;\r\n    text-align:center;\r\n}\r\n.button_start {\r\n    box-sizing: border-box;\r\n    padding: 20px 25px;\r\n    font-size: 24px;\r\n    margin: 20px auto;\r\n    width: 100%;\r\n    max-width: 650px;\r\n    height: 65px;\r\n    background: linear-gradient(40deg,#ffd86f,#fc6262);\r\n    color: #fff;\r\n    border-radius: 10px;\r\n    outline: 0;\r\n    border-width: 1px;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n}\r\n.button_repeat {\r\n    width: 65px;\r\n    font-size: 0;\r\n    background-image: url("+p+"),linear-gradient(40deg,#ffd86f,#fc6262);\r\n    border-radius: 50%;\r\n    background-repeat: no-repeat;\r\n    background-size: 32px 32px,cover;\r\n    background-position: 50%;\r\n}\r\n.checked {\r\n    opacity: 0.5;\r\n}\r\n.game__resualt {\r\n    background-image: url("+m+");\r\n    max-height: 480px;\r\n    height: 50vw;\r\n    background-repeat: no-repeat;\r\n    background-position: center bottom;\r\n    background-size: contain;\r\n}\r\n.game__resualt_text {\r\n    text-align: center ;\r\n    font-size: 48px;\r\n    font-weight: bold;\r\n    color: #ff9800;\r\n}\r\n.lose-screen  {\r\n    background-image: url("+g+");\r\n}\r\n.lose-screen_text {\r\n    color: #009688;\r\n}",""]),e.exports=r},function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/img/51d7e25b092b663342a4465ed4cb7fca.svg"},function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/img/6295e640ccdd43964c5c7ddfe352cfac.svg"},function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/img/c910e9bf470a46fb3e372eb5ac38a466.svg"},function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/img/b5251a36da520e7ecffbc6a512df7264.png"},function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/img/bbc8f8b3653c5dceb5d1a79f4fd2194a.png"},function(e,r,n){var t=n(0),a=n(13);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1},i=(t(a,s),a.locals?a.locals:{});e.exports=i},function(e,r,n){var t=n(1),a=n(2),s=n(14),i=n(15);r=t(!1);var o=a(s),d=a(i);r.push([e.i,".card_train {\r\n    height: 250px;\r\n    display: block;\r\n}\r\n\r\n.card_train:hover {\r\n    box-shadow: 0px 0px 8px 0px #00bf82;\r\n    border: 1px solid #00bf82;\r\n}\r\n\r\n.card_train>img {\r\n    width: inherit;\r\n    height: 200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.card_train>.card__text {\r\n    position: relative;\r\n    width: inherit;\r\n    height: 44px;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n}\r\n\r\n/* flip effect  */\r\n\r\n.flip-container {\r\n    perspective: 1000;\r\n}\r\n\r\n.flip-container, .front, .back {\r\n    width: 300px;\r\n    height: 250px;\r\n}\r\n\r\n.flip-container {\r\n    margin: 20px 10px;\r\n}\r\n\r\n.flipper {\r\n    transition: 0.8s;\r\n    transform-style: preserve-3d;\r\n    position: relative;\r\n}\r\n\r\n.front, .back {\r\n    backface-visibility: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.front {\r\n    z-index: 2;\r\n}\r\n\r\n.back {\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.rotate__arrow {\r\n    background-image: url("+o+");\r\n    width: 32px;\r\n    height: 32px;\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 18px;\r\n    background-size: 34px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.rotate__arrow:hover {\r\n    background-image: url("+d+");\r\n}\r\n\r\n.rotate_transform {\r\n    transform: rotateY(180deg);\r\n}",""]),e.exports=r},function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/img/acc2cb453d5d6cb75a9537d79037a89e.svg"},function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/img/12225e87c17eb6dd034c61cc2a2bc21c.svg"},function(e,r){e.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1"> <link rel="shortcut icon" type=image/x-icon href=..\\assets\\img\\favicon.ico /> <title>English for kids</title> </head> <body> <header class=header> <nav class=menu__nav> <div class=menu__toggle> <input type=checkbox /> <span></span> <span></span> <span></span> <div class="menu__list green_nav"> <a class=menu__item href=#>Main Page</a> <a class=menu__item href=#>Home</a> <a class=menu__item href=#>Home</a> <a class=menu__item href=#>Home</a> <a class=menu__item href=#>Home</a> <a class=menu__item href=#>Home</a> <a class=menu__item href=#>Home</a> <a class=menu__item href=#>Home</a> <a class=menu__item href=#>Home</a> </div> </div> </nav> <label class=switch> <input type=checkbox> <span class=slider></span> </label> </header> <main> </main> </body> </html>'},function(e,r,n){"use strict";n.r(r);var t=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions","Food","Natural"],[{word:"cry",translation:"плакать",image:"../assets/img/cry.jpg",audioSrc:"../assets/audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"../assets/img/dance.jpg",audioSrc:"../assets/audio/dance.mp3"},{word:"dive",translation:"нырять",image:"../assets/img/dive.jpg",audioSrc:"../assets/audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"../assets/img/draw.jpg",audioSrc:"../assets/audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"../assets/img/fish.jpg",audioSrc:"../assets/audio/fish.mp3"},{word:"fly",translation:"летать",image:"../assets/img/fly.jpg",audioSrc:"../assets/audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"../assets/img/hug.jpg",audioSrc:"../assets/audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"../assets/img/jump.jpg",audioSrc:"../assets/audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"../assets/img/open.jpg",audioSrc:"../assets/audio/open.mp3"},{word:"play",translation:"играть",image:"../assets/img/play.jpg",audioSrc:"../assets/audio/play.mp3"},{word:"point",translation:"указывать",image:"../assets/img/point.jpg",audioSrc:"../assets/audio/point.mp3"},{word:"ride",translation:"ездить",image:"../assets/img/ride.jpg",audioSrc:"../assets/audio/ride.mp3"},{word:"run",translation:"бегать",image:"../assets/img/run.jpg",audioSrc:"../assets/audio/run.mp3"},{word:"sing",translation:"петь",image:"../assets/img/sing.jpg",audioSrc:"../assets/audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"../assets/img/skip.jpg",audioSrc:"../assets/audio/skip.mp3"},{word:"swim",translation:"плавать",image:"../assets/img/swim.jpg",audioSrc:"../assets/audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"../assets/img/cat.jpg",audioSrc:"../assets/audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"../assets/img/chick.jpg",audioSrc:"../assets/audio/chick.mp3"},{word:"chicken",translation:"курица",image:"../assets/img/chicken.jpg",audioSrc:"../assets/audio/chicken.mp3"},{word:"dog",translation:"собака",image:"../assets/img/dog.jpg",audioSrc:"../assets/audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"../assets/img/horse.jpg",audioSrc:"../assets/audio/horse.mp3"},{word:"pig",translation:"свинья",image:"../assets/img/pig.jpg",audioSrc:"../assets/audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"../assets/img/rabbit.jpg",audioSrc:"../assets/audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"../assets/img/sheep.jpg",audioSrc:"../assets/audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"../assets/img/bird.jpg",audioSrc:"../assets/audio/bird.mp3"},{word:"fish",translation:"рыба",image:"../assets/img/fish1.jpg",audioSrc:"../assets/audio/fish.mp3"},{word:"frog",translation:"жаба",image:"../assets/img/frog.jpg",audioSrc:"../assets/audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"../assets/img/giraffe.jpg",audioSrc:"../assets/audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"../assets/img/lion.jpg",audioSrc:"../assets/audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"../assets/img/mouse.jpg",audioSrc:"../assets/audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"../assets/img/turtle.jpg",audioSrc:"../assets/audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"../assets/img/dolphin.jpg",audioSrc:"../assets/audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"../assets/img/skirt.jpg",audioSrc:"../assets/audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"../assets/img/pants.jpg",audioSrc:"../assets/audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"../assets/img/blouse.jpg",audioSrc:"../assets/audio/blouse.mp3"},{word:"dress",translation:"платье",image:"../assets/img/dress.jpg",audioSrc:"../assets/audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"../assets/img/boot.jpg",audioSrc:"../assets/audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"../assets/img/shirt.jpg",audioSrc:"../assets/audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"../assets/img/coat.jpg",audioSrc:"../assets/audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"../assets/img/shoe.jpg",audioSrc:"../assets/audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"../assets/img/sad.jpg",audioSrc:"../assets/audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"../assets/img/angry.jpg",audioSrc:"../assets/audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"../assets/img/happy.jpg",audioSrc:"../assets/audio/happy.mp3"},{word:"tired",translation:"уставший",image:"../assets/img/tired.jpg",audioSrc:"../assets/audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"../assets/img/surprised.jpg",audioSrc:"../assets/audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"../assets/img/scared.jpg",audioSrc:"../assets/audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"../assets/img/smile.jpg",audioSrc:"../assets/audio/smile.mp3"},{word:"laugh",translation:"смех",image:"../assets/img/laugh.jpg",audioSrc:"../assets/audio/laugh.mp3"}],[{word:"banana",translation:"банан",image:"../assets/img/banana.jpg",audioSrc:"../assets/audio/banana.mp3"},{word:"burger",translation:"бургер",image:"../assets/img/burger.jpg",audioSrc:"../assets/audio/burger.mp3"},{word:"pasta",translation:"макароны",image:"../assets/img/pasta.jpg",audioSrc:"../assets/audio/pasta.mp3"},{word:"cake",translation:"торт",image:"../assets/img/cake.jpg",audioSrc:"../assets/audio/cake.mp3"},{word:"carrot",translation:"морковь",image:"../assets/img/carrot.jpg",audioSrc:"../assets/audio/carrot.mp3"},{word:"tea",translation:"чай",image:"../assets/img/tea.jpg",audioSrc:"../assets/audio/tea.mp3"},{word:"onion",translation:"лук",image:"../assets/img/onion.jpg",audioSrc:"../assets/audio/onion.mp3"},{word:"potato",translation:"картофель",image:"../assets/img/potato.jpg",audioSrc:"../assets/audio/potato.mp3"}],[{word:"tree",translation:"дерево",image:"../assets/img/tree.jpg",audioSrc:"../assets/audio/tree.mp3"},{word:"grass",translation:"трава",image:"../assets/img/grass.jpg",audioSrc:"../assets/audio/grass.mp3"},{word:"river",translation:"река",image:"../assets/img/river.jpg",audioSrc:"../assets/audio/river.mp3"},{word:"bush",translation:"куст",image:"../assets/img/bush.jpg",audioSrc:"../assets/audio/bush.mp3"},{word:"sand",translation:"песок",image:"../assets/img/sand.jpg",audioSrc:"../assets/audio/sand.mp3"},{word:"lake",translation:"озеро",image:"../assets/img/lake.jpg",audioSrc:"../assets/audio/lake.mp3"},{word:"sky",translation:"небо",image:"../assets/img/sky.jpg",audioSrc:"../assets/audio/sky.mp3"},{word:"flower",translation:"цветок",image:"../assets/img/flower.jpg",audioSrc:"../assets/audio/flower.mp3"}]];var a=function(e,r,n,t,a){r.firstElementChild&&r.firstElementChild.remove(),r.dataset.category=e;var s=n[e],i=document.createElement("div"),d=document.createElement("div"),c=document.createElement("button"),u=document.createElement("div");i.className="container",u.className="score",c.className="button_start",c.textContent="start game",d.className="controls",i.append(u);for(var l=[],p=0;p<s.length;p+=1){var m=document.createElement("a"),g=document.createElement("img");m.className="card card_play",g.alt=s[p].word,g.src=s[p].image,l.push(s[p]),m.append(g),i.append(m)}!function(e){for(var r,n,t=e.length-1;t>0;t-=1)n=e[r=Math.floor(Math.random()*(t+1))],e[r]=e[t],e[t]=n}(l),d.append(c),i.append(d),r.append(i);var f=0,h={isWin:!0,error:0,correct:0};c.addEventListener("click",(function(e){e.target.classList.contains("button_repeat")?(a.src=l[f].audioSrc,a.play()):(c.classList.add("button_repeat"),a.src=l[f].audioSrc,a.play(),document.querySelectorAll(".card_play").forEach((function(e){e.addEventListener("click",(function(e){var s=document.createElement("div");if(s.className="star",e.target.alt===l[f].word)a.src="../assets/audio/correct.mp3",a.play(),e.target.classList.add("checked"),s.classList.add("star_win"),h.correct+=1,(f+=1)<l.length&&setTimeout((function(){a.src=l[f].audioSrc,a.play()}),700);else{if(e.target.classList.contains("checked"))return;h.isWin=!1,h.error+=1,a.src="../assets/audio/error.mp3",a.play()}if(u.append(s),f===l.length){r.firstElementChild&&r.firstElementChild.remove();var i=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div");d.className="game__resualt",c.className="game__resualt_text",h.isWin?(c.innerText="Excellent!",setTimeout((function(){a.src="../assets/audio/success.mp3",a.play()}),1100)):(setTimeout((function(){a.src="../assets/audio/Fail-sound-effect.mp3",a.play()}),1100),c.innerText="you made ".concat(h.error," mistakes"),d.classList.add("lose-screen"),c.classList.add("lose-screen_text")),i.append(c),i.append(d),r.append(i),setTimeout((function(){return o(r,n,t,a)}),3e3)}}))})))}))};var s=function(e,r,n,t){r.firstElementChild&&r.firstElementChild.remove(),r.dataset.category=e;var a=document.createElement("div"),s=n[e];a.className="container";for(var i=0;i<s.length;i+=1){var o=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),u=document.createElement("div");o.className="flip-container",d.className="flipper",c.className="front",u.className="back";var l=document.createElement("a"),p=document.createElement("a"),m=document.createElement("img"),g=document.createElement("img"),f=document.createElement("span"),h=document.createElement("div"),b=document.createElement("span");l.dataset.audio=s[i].audioSrc,l.className="card card_train",p.className="card card_train",f.className="card__text",f.textContent=s[i].word,h.className="rotate__arrow",b.className="card__text",b.textContent=s[i].translation,m.src=s[i].image,g.src=s[i].image,f.append(h),l.append(m),l.append(f),p.append(g),p.append(b),c.append(l),u.append(p),d.append(c),d.append(u),o.append(d),a.append(o)}r.append(a),a.addEventListener("click",(function(e){if("rotate__arrow"===e.target.className){var r=e.target.closest(".flipper");r.classList.add("rotate_transform");r.addEventListener("mouseout",(function e(n){n.relatedTarget===r.parentNode.parentNode&&(r.classList.remove("rotate_transform"),r.removeEventListener("mouseout",e))}))}else{var n=e.target.closest("a[data-audio]");n&&(t.src=n.dataset.audio,t.play())}}))};function i(e,r,n,t,i){r.playmode?a(e,n,t,r,i):s(e,n,t,i)}var o=function(e,r,n,t){e.firstElementChild&&e.firstElementChild.remove(),e.dataset.category=0;var a=document.createElement("div"),s=r[0];a.className="container";for(var o=function(o){var d=document.createElement("a"),c=document.createElement("img"),u=document.createElement("span");d.className="card card_main",n.playmode||d.classList.add("green_main"),d.dataset.category=o+1,u.className="card__text",c.alt="card",c.src=r[o+1][0].image,u.textContent=s[o],d.addEventListener("click",(function(){i(d.dataset.category,n,e,r,t)})),d.append(c),d.append(u),a.append(d)},d=0;d<s.length;d+=1)o(d);e.append(a)},d=(n(3),n(5),n(12),n(16),document.querySelector("main")),c=document.querySelectorAll(".menu__item"),u=document.querySelector(".switch input"),l=document.createElement("audio"),p=t[0],m=document.querySelector("input[type=checkbox]"),g={get playmode(){return u.checked}};o(d,t,g,l),c[0].addEventListener("click",(function(){c.forEach((function(e){return e.classList.remove("menu__item_active")})),c[0].classList.add("menu__item_active"),m.checked=!1,o(d,t,g,l)}));for(var f=function(e){c[e+1].text=p[e],c[e+1].addEventListener("click",(function(){c.forEach((function(e){return e.classList.remove("menu__item_active")})),c[e+1].classList.add("menu__item_active"),m.checked=!1,i(e+1,g,d,t,l)}))},h=0;h<p.length;h+=1)f(h);l.src=t[1][0].audioSrc,document.querySelector("header").append(document.createElement("audio")),u.addEventListener("click",(function(){return e=d,r=g,n=t,i=l,o=document.querySelector(".menu__list"),c=document.querySelectorAll(".card_main"),void(r.playmode?(o.classList.remove("green_nav"),0==+e.dataset.category?c.forEach((function(e){return e.classList.remove("green_main")})):a(+e.dataset.category,e,n,r,i)):(o.classList.add("green_nav"),0==+e.dataset.category?c.forEach((function(e){return e.classList.add("green_main")})):s(+e.dataset.category,e,n,i)));var e,r,n,i,o,c})),d.addEventListener("click",(function(){m.checked&&(m.checked=!1)}))}]);
//# sourceMappingURL=bundle.js.map