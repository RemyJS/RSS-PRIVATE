import { createCategory } from "./category";
function createMain(main, cards, Game, audio) {
  if (main.firstElementChild) main.firstElementChild.remove();
  main.dataset.category = 0;
  const container = document.createElement("div");
  const category = cards[0];
  container.className = "container";
  
  for (let i = 0; i < category.length; i += 1) {
    const a = document.createElement("a");
    const img = document.createElement("img");
    const span = document.createElement("span");
    //add class
    a.className = "card card_main";
    if (!Game.playmode) a.classList.add("green_main");
    a.dataset.category = i + 1;
    span.className = "card__text";
    img.alt = "card";
    img.src = cards[i + 1][0].image;
    span.textContent = category[i];

    a.addEventListener("click", () => {
      createCategory(a.dataset.category, Game, main, cards, audio);
    });
    a.append(img);
    a.append(span);
    container.append(a);
  }
  main.append(container);
}
export default createMain
