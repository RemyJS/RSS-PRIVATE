import dragManagerInit from './dragmanager';

dragManagerInit();
const form = document.querySelector('#levelSetting');
const page = document.querySelector('#page');
const group = document.querySelector('#group');
const source = document.querySelector('.source');
const continueBtn = document.querySelector('#continue');
const gameBoard = document.querySelector('.resualt');
const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}
const renderRound = (round, y) => {
  source.innerText = '';
  const path = gameBoard.offsetWidth / round.join('').length;
  let bgx = 0;
  const bgy = y * -40;
  let row = [];
  round.forEach((el) => {
    const span = document.createElement('span');
    const width = `${el.length * path}px`;
    span.className = 'puzzle draggable';
    span.style.width = width;
    span.style.backgroundPosition = `${bgx}px ${bgy}px`;
    bgx -= Number.parseFloat(width);
    span.innerHTML = el;
    row.push(span);
  });
  row = shuffle(row);
  row.forEach((span) => source.append(span));
};
function* loadGame(round) {
  let i = 0;
  while (i < 10 && i < round.length) {
    yield renderRound(round[i], i);
    i += 1;
  }
}
const endRound = () => {
  continueBtn.onclick = () => {
    const n = +page.value;
    if (n < 29) {
      page.value = n + 1;
    } else {
      page.value = '0';
    }
    setLevel();
  };
};
const nextRound = (generator) => {
  const lastRound = document.querySelector('.resualt_active');
  if (lastRound) lastRound.classList.remove('resualt_active');
  const round = document.createElement('div');
  round.className = 'resualt_round resualt_active';
  gameBoard.append(round);
  const state = generator.next();
  if (state.done) endRound();
};

async function setLevel() {
  fetch(`https://afternoon-falls-25894.herokuapp.com/words?group=${group.value}&page=${page.value}`)
    .then((res) => res.json())
    .then((data) => {
      const map = data.map((el) => el.textExample.split(' '));
      const fillterLevel = map.filter((el) => el.length < 11);
      const generator = loadGame(fillterLevel);
      while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
      }
      continueBtn.onclick = () => {
        nextRound(generator);
      };
      continueBtn.click();
    })
    .catch((err) => {
      console.log(err);
    });
};

const settingInit = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    setLevel();
  });
};

export default settingInit;
