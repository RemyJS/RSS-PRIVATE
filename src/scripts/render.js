import { audio } from './controls';

const source = document.querySelector('.source');
const gameBoard = document.querySelector('.resualt');
const puzzleBackgroundToogle = document.querySelector('#hints_bgi');
const translation = document.querySelector('.hints__translation');
const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

const renderRound = (round, y, bgi) => {
  source.innerText = '';
  const textArray = round.textExample.split(' ');
  const path = gameBoard.clientWidth / textArray.join('').length;
  let bgx = 0;
  const bgy = y * -50;
  audio.url = round.audioExample;
  translation.innerText = round.textExampleTranslate;

  let row = textArray.map((el, idx) => {
    const span = document.createElement('span');
    const width = `${el.length * path}px`;
    span.className = 'puzzle draggable';
    span.style.width = width;
    span.style.backgroundImage = bgi;
    span.style.backgroundPosition = `${bgx}px ${bgy}px`;
    if (!puzzleBackgroundToogle.classList.contains('button_checked')) {
      // puzzle Background === off;
      span.style.backgroundSize = '0 0';
    }
    span.dataset.sequence = idx;
    bgx -= Number.parseFloat(width);
    span.innerHTML = el;
    return span;
  });
  row = shuffle(row);
  row.forEach((span) => source.append(span));
};

export default renderRound;
