/* global cards, main, Game , createMain, createCategory */
import cards from "./cards";
import createMain from "./mainpage";
// import createPlayCategory from "./playCategory";
// import createTrainCategory from "./trainCategory";
import { createCategory, changeGameModeStyle } from "./category";

const main = document.querySelector('main');
const category = cards[0];
const nav = document.querySelectorAll(".menu__item");
const toogle = document.querySelector(".switch input");
const audio = document.createElement("audio");

const Game = {
  get playmode() {
    return toogle.checked;
  },
};
createMain(main,  cards, Game, audio);

nav[0].addEventListener("click", () => createMain(main,  cards, Game, audio));

for (let i = 0; i < category.length; i += 1) {
  nav[i + 1].text = category[i];
  nav[i + 1].addEventListener("click", () => createCategory(i + 1, Game, main, cards, audio));
}

audio.src = cards[1][0].audioSrc;

document.querySelector("header").append(document.createElement("audio"));

toogle.addEventListener("click", () => changeGameModeStyle(main, Game, cards, audio));
