function createTrainCategory(n, main, cards, audio) {
  if (main.firstElementChild) main.firstElementChild.remove();
  main.dataset.category = n;
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
    const rotate = document.createElement("div");
    const translation = document.createElement("span");
    // add audio
    af.dataset.audio = category[i].audioSrc;
    // add class
    af.className = "card card_train";
    ab.className = "card card_train";
    word.className = "card__text";
    word.textContent = category[i].word;
    rotate.className = "rotate__arrow";
    translation.className = "card__text";
    translation.textContent = category[i].translation;
    imgf.src = category[i].image;
    imgb.src = category[i].image;
    word.append(rotate);
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

  container.addEventListener("click", (event) => {
    if (event.target.className === "rotate__arrow") {
      const flipper = event.target.closest(".flipper");
      flipper.classList.add("rotate_transform");
      const handler = (e) => {
        if (e.relatedTarget === flipper.parentNode.parentNode) {
          flipper.classList.remove("rotate_transform");
          flipper.removeEventListener("mouseout", handler);
        }
      };
      flipper.addEventListener("mouseout", handler);
    } else {
      const dataAudio = event.target.closest("a[data-audio]");
      if (dataAudio) {
        audio.src = dataAudio.dataset.audio;
        audio.play();
      }
    }
  });
}
export default createTrainCategory;

