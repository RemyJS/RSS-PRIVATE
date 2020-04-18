function createCategory(n) {
  if (Game.playmode) {
    createPlayCategory(n);
  } else {
    createTrainCategory(n);
  }
}

function changeGameModeStyle() {
  const list = document.querySelector(".menu__list");
  const mainCard = document.querySelectorAll(".card_main");
  if (Game.playmode) {

    list.classList.remove("green_nav");
    if (+main.dataset.category === 0) {
      mainCard.forEach((card) => card.classList.remove("green_main"));
    } else {
      createPlayCategory(+main.dataset.category);
    }
  } else {
    list.classList.add("green_nav");
    if (+main.dataset.category === 0) {
      mainCard.forEach((card) => card.classList.add("green_main"));
    } else {
      createTrainCategory(+main.dataset.category);
    }

  }
}

toogle.addEventListener("click", changeGameModeStyle);
/* global  main, Game, toogle, createTrainCategory, createPlayCategory */
