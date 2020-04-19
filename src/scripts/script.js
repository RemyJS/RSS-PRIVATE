import cards from "./cards";
import createMain from "./mainpage";
import { createCategory, changeGameModeStyle } from "./category";

const main = document.querySelector("main");
const nav = document.querySelectorAll(".menu__item");
const toogle = document.querySelector(".switch input");
const audio = document.createElement("audio");

const category = cards[0];
const checkbox = document.querySelector("input[type=checkbox]");
const Game = {
  get playmode() {
    return toogle.checked;
  },
};
createMain(main, cards, Game, audio); // create main page;

nav[0].addEventListener("click", () => { // create menu
  nav.forEach((a) => a.classList.remove("menu__item_active"));
  nav[0].classList.add("menu__item_active");
  checkbox.checked = false;
  createMain(main, cards, Game, audio);
});

for (let i = 0; i < category.length; i += 1) { // create menu
  nav[i + 1].text = category[i];
  nav[i + 1].addEventListener("click", () => {
    nav.forEach((a) => a.classList.remove("menu__item_active"));
    nav[i + 1].classList.add("menu__item_active");
    checkbox.checked = false;
    createCategory(i + 1, Game, main, cards, audio);
  });
}

audio.src = cards[1][0].audioSrc;

document.querySelector("header").append(document.createElement("audio"));

toogle.addEventListener("click", () => changeGameModeStyle(main, Game, cards, audio));

main.addEventListener("click", () => { // hide menu
  if (checkbox.checked) checkbox.checked = false;
});
