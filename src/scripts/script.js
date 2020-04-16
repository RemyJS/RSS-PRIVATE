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

function changeGameModeStyle() {
  const list = document.querySelector(".menu__list");
  const mainCard = document.querySelectorAll(".card_main");
  const categoryCard = document.querySelectorAll(".card_train, .card_play");
  if (toogle.checked) {
    list.classList.remove("green_nav");
    if (mainCard) {
      mainCard.forEach((card) => card.classList.remove("green_main"));
    }
    if (categoryCard) {
      categoryCard.forEach((card) => {
        card.classList.remove("card_train");
        card.classList.add("card_play");
      })
    }
  } else {
    list.classList.add("green_nav");
    if (mainCard) {
      mainCard.forEach((card) => card.classList.add("green_main"));
    }
    if (categoryCard) {
      categoryCard.forEach((card) => {
        card.classList.remove("card_play");
        card.classList.add("card_train");
      });
    }
  }
}

changeGameModeStyle();
toogle.addEventListener("click", changeGameModeStyle);

audio.src = cards[1][0].audioSrc;
main.append(document.createElement("audio"));