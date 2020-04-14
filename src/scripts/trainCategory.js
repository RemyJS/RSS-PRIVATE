function createTrainCategory(n) {
  const container = document.createElement("div");
  const category = cards[n];
  container.className = "container";

  for (let i = 0; i < category.length; i += 1) {
    // 3d wrapper
    const flipContainer = document.createElement("div");
    const flipper = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");
    flipContainer.className = "flip-container";
    flipper.className = "flipper";
    front.className = "front";
    back.className = "back";

    const af = document.createElement("a");
    const ab = document.createElement("a");
    const imgf = document.createElement("img");
    const imgb = document.createElement("img");
    const word = document.createElement("span");
    const translation = document.createElement("span");
    // add class
    af.className = "card card_train";
    ab.className = "card card_train";
    word.className = "card__text";
    word.textContent = category[i].word;
    translation.className = "card__text";
    translation.textContent = category[i].translation;
    imgf.src = category[i].image;
    imgb.src = category[i].image;
    af.append(imgf);
    af.append(word);
    ab.append(imgb);
    ab.append(translation);
    front.append(af);
    back.append(ab);
    flipper.append(front);
    flipper.append(back);
    flipContainer.append(flipper);
    container.append(flipContainer);
  }
  main.append(container);
}
