import createPlayCategory from "./playCategory";
import createTrainCategory from "./trainCategory";

function createCategory(n, Game, main, cards, audio) {
  if (Game.playmode) {
    createPlayCategory(n, main, cards, Game, audio);
  } else {
    createTrainCategory(n, main, cards, audio);
  }
}

function changeGameModeStyle(main, Game, cards, audio) {
  const list = document.querySelector(".menu__list");
  const mainCard = document.querySelectorAll(".card_main");
  if (Game.playmode) {
    list.classList.remove("green_nav");
    if (+main.dataset.category === 0) {
      mainCard.forEach((card) => card.classList.remove("green_main"));
    } else {
      createPlayCategory(+main.dataset.category, main, cards, Game, audio);
    }
  } else {
    list.classList.add("green_nav");
    if (+main.dataset.category === 0) {
      mainCard.forEach((card) => card.classList.add("green_main"));
    } else {
      createTrainCategory(+main.dataset.category, main, cards, audio);
    }

  }
}
export { createCategory, changeGameModeStyle };

