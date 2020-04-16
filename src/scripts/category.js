function createCategory(n) {
  if (main.firstElementChild) main.firstElementChild.remove();
  const container = document.createElement("div");
  const category = cards[n];
  container.className = "container";
  const playMode = Game.playmode;
  if (!playMode) createTrainCategory(n);
  for (let i = 0; i < category.length; i += 1) {
    const a = document.createElement("a");
    const img = document.createElement("img");
    const word = document.createElement("span");
    const translation = document.createElement("span");
    // add class
    a.className = "card";
    playMode ? a.classList.add("card_play") : a.classList.add("card_train");
    word.className = "card__text";
    word.textContent = category[i].word;
    img.src = category[i].image;
    a.append(img);
    a.append(word);
    container.append(a);
  }
  // main.append(container);
}
/* global cards, main, Game */