import createMain from "./mainpage";

function createPlayCategory(n, main, cards, Game, audio) {
  if (main.firstElementChild) main.firstElementChild.remove();
  main.dataset.category = n;

  const category = cards[n];
  const container = document.createElement("div");
  const controls = document.createElement("div");
  const button = document.createElement("button");
  const score = document.createElement("div");
  container.className = "container";
  score.className = "score";
  button.className = "button_start";
  button.textContent = "start game";
  controls.className = "controls";

  container.append(score);

  const cardsInGame = [];

  for (let i = 0; i < category.length; i += 1) {
    const a = document.createElement("a");
    const img = document.createElement("img");
    a.className = "card card_play";

    img.alt = category[i].word;
    img.src = category[i].image;

    cardsInGame.push(category[i]);

    a.append(img);
    container.append(a);
  }
  function shuffle(arr) {
    let j;
    let temp;
    for (let i = arr.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  shuffle(cardsInGame);

  controls.append(button);
  container.append(controls);
  main.append(container);

  let gameIndex = 0;
  const gameScore = {
    isWin: true,
    error: 0,
    correct: 0,
  };
  button.addEventListener("click", (e) => {
    const gameStarted = e.target.classList.contains("button_repeat");

    if (gameStarted) {
      audio.src = cardsInGame[gameIndex].audioSrc;
      audio.play();
    } else {
      button.classList.add("button_repeat");
      audio.src = cardsInGame[gameIndex].audioSrc;
      audio.play();
      const playCards = document.querySelectorAll(".card_play");
      playCards.forEach((card) => {
        card.addEventListener("click", (event) => {
          const star = document.createElement("div");
          star.className = "star";
          if (event.target.alt === cardsInGame[gameIndex].word) {
            audio.src = "../assets/audio/correct.mp3";
            audio.play();

            event.target.classList.add("checked");
            star.classList.add("star_win");
            gameScore.correct += 1;
            gameIndex += 1;
            if (gameIndex < cardsInGame.length) {
              setTimeout(() => {
                audio.src = cardsInGame[gameIndex].audioSrc;
                audio.play();
              }, 700);
            }
          } else if (event.target.classList.contains("checked")) {
            return;
          } else {
            gameScore.isWin = false;
            gameScore.error += 1;
            audio.src = "../assets/audio/error.mp3";
            audio.play();
          }
          score.append(star);
          if (gameIndex === cardsInGame.length) {
            if (main.firstElementChild) main.firstElementChild.remove();
            const wrap = document.createElement("div");
            const gameResualt = document.createElement("div");
            const text = document.createElement("div");
            gameResualt.className = "game__resualt";
            text.className = "game__resualt_text";

            if (gameScore.isWin) {
              text.innerText = "Excellent!";
              setTimeout(() => {
                audio.src = "../assets/audio/success.mp3";
                audio.play();
              }, 1100);
            } else {
              setTimeout(() => {
                audio.src = "../assets/audio/Fail-sound-effect.mp3";
                audio.play();
              }, 1100);
              text.innerText = `you made ${gameScore.error} mistakes`;
              gameResualt.classList.add("lose-screen");
              text.classList.add("lose-screen_text");
            }
            wrap.append(text);
            wrap.append(gameResualt);
            main.append(wrap);
            setTimeout(() => createMain(main, cards, Game, audio), 3000);
          }
        });
      });
    }
  });
}
export default createPlayCategory;
