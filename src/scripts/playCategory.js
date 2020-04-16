function createPlayCategory(n) {
  if (main.firstElementChild) main.firstElementChild.remove();
  main.dataset.category = n;
  const container = document.createElement("div");
  const category = cards[n];
  container.className = "container";

  for (let i = 0; i < category.length; i += 1) {
    const a = document.createElement("a");
    const img = document.createElement("img");
    const word = document.createElement("span");
    const translation = document.createElement("span");
    // add class
    a.className = "card card_play";
    word.className = "card__text";
    word.textContent = category[i].word;
    img.src = category[i].image;
    a.append(img);
    a.append(word);
    container.append(a);
  }
  main.append(container);
}