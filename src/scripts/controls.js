// eslint-disable-next-line import/no-cycle
import { setLevel } from './level_setting';

const autopronB = document.querySelector('#hints_auto');
const playBtn = document.querySelector('#playButton');
const translationB = document.querySelector('#hints_translation');
const translationText = document.querySelector('.hints__translation');
const imageB = document.querySelector('#hints_bgi');
const audioIcon = document.querySelector('.hints__audio');
const startButton = document.querySelector('#startGameBtn');
const startPage = document.querySelector('.startpage');

const audio = {
  get url() {
    return this.url1;
  },
  set url(path) {
    this.url1 = `https://raw.githubusercontent.com/remyjs/rslang-data/master/${path}`;
  },
};
const startGame = () => {
  const main = document.querySelector('.main');
  const group = document.querySelector('#group');
  const page = document.querySelector('#page');
  group.value = localStorage.getItem('group') || '0';
  page.value = localStorage.getItem('page') || '0';

  const autop = localStorage.getItem('auto') || 'true';
  const translation = localStorage.getItem('translation') || 'true';
  const image = localStorage.getItem('bgi') || 'true';

  if (autop === 'true') autopronB.classList.add('button_checked');
  if (translation === 'true') translationB.classList.add('button_checked');
  if (image === 'true') imageB.classList.add('button_checked');

  setLevel();
  startPage.classList.add('hidden');
  main.classList.remove('hidden');
};
const playAudio = () => {
  const { url } = audio;
  const audioFile = new Audio(url);
  audioIcon.classList.add('hints__audio_play');
  audioFile.play()
    .then(() => {
      const time = audioFile.duration * 1000;
      setTimeout(() => {
        audioIcon.classList.remove('hints__audio_play');
      }, time);
    });
};
const toogleAuto = () => {
  autopronB.classList.toggle('button_checked');
  if (autopronB.classList.contains('button_checked')) {
    localStorage.auto = true;
  } else {
    localStorage.auto = false;
  }
};

const tooglePuzzle = () => {
  const puzzles = document.querySelectorAll('.puzzle');
  if (!imageB.classList.contains('button_checked')) {
    imageB.classList.add('button_checked');
    puzzles.forEach((puzzle) => {
      puzzle.style.backgroundSize = '';
    });
    localStorage.bgi = true;
  } else {
    imageB.classList.remove('button_checked');
    puzzles.forEach((puzzle) => {
      puzzle.style.backgroundSize = '0 0';
    });
    localStorage.bgi = false;
  }
};

const toogleTransation = () => {
  if (!translationB.classList.contains('button_checked')) {
    translationB.classList.add('button_checked');
    translationText.style.opacity = 1;
    localStorage.translation = true;
  } else {
    translationB.classList.remove('button_checked');
    translationText.style.opacity = 0;
    localStorage.translation = false;
  }
};

const hintsControlInit = () => {
  autopronB.onclick = toogleAuto;
  playBtn.onclick = playAudio;
  translationB.onclick = toogleTransation;
  imageB.onclick = tooglePuzzle;
  startButton.onclick = startGame;
};

export { hintsControlInit, playAudio, audio };
