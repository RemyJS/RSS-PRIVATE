const autopronB = document.querySelector('#hints_auto');
const playBtn = document.querySelector('#playButton');
const translationB = document.querySelector('#hints_translation');
const translationText = document.querySelector('.hints__translation');
const wordB = document.querySelector('#hints_word');
const imageB = document.querySelector('#hints_bgi');
const audio = {
  get url() {
    return this.url1;
  },
  set url(path) {
    this.url1 = `https://raw.githubusercontent.com/remyjs/rslang-data/master/${path}`;
  },
}
const playAudio = () => {
  const { url } = audio;
  const audioFile = new Audio(url);
  audioFile.play();
};
const toogleAuto = () => {
  autopronB.classList.toggle('button_checked');
};
const tooglePuzzle = () => {
  const puzzles = document.querySelectorAll('.puzzle');
  if (!imageB.classList.contains('button_checked')) {
    imageB.classList.add('button_checked');
    puzzles.forEach((puzzle) => {
      puzzle.style.backgroundSize = '';
    });
  } else {
    imageB.classList.remove('button_checked');
    puzzles.forEach((puzzle) => {
      puzzle.style.backgroundSize = '0 0';
    });
  }
};

const toogleTransation = () => {
  if (!translationB.classList.contains('button_checked')) {
    translationB.classList.add('button_checked');
    translationText.style.opacity = 1;
  } else {
    translationB.classList.remove('button_checked');
    translationText.style.opacity = 0;
  }
};

const hintsControlInit = () => {
  autopronB.onclick = toogleAuto;
  playBtn.onclick = playAudio;
  translationB.onclick = toogleTransation;
  imageB.onclick = tooglePuzzle;
};

export { hintsControlInit, playAudio, audio };
