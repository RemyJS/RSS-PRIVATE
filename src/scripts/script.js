// import cards from './cards'
/* global cards, main, Game */
console.log(cards);
const main = document.querySelector('main');
const category = cards[0];
const nav = document.querySelectorAll(".menu__item");
const toogle = document.querySelector(".switch input");
const audio = document.createElement("audio");

const Game = {
  get playmode() {
    return toogle.checked;
  }
};

nav[0].addEventListener("click", () => createMain());

for (let i = 0; i < category.length; i += 1) {
  nav[i + 1].text = category[i];
  nav[i + 1].addEventListener("click", () => createCategory(i + 1));
};

audio.src = cards[1][0].audioSrc;
main.append(document.createElement("audio"));