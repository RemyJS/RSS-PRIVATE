import dragManagerInit from './dragmanager';
import renderRound from './render';
import getImage from './services/background';

const form = document.querySelector('#levelSetting');
const page = document.querySelector('#page');
const group = document.querySelector('#group');
const continueBtn = document.querySelector('#continue');
const gameBoard = document.querySelector('.resualt');

function* loadGame(round) {
  const bgi = getImage();
  let i = 0;
  while (i < 10 && i < round.length) {
    yield renderRound(round[i], i, bgi);
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
  fetch(`https://afternoon-falls-25894.herokuapp.com/words?group=${group.value}&page=${page.value}&wordsPerExampleSentenceLE=10&wordsPerPage=20`)
    .then((res) => res.json())
    .then((data) => {
      const fillterLevel = data.filter((el) => el.wordsPerExampleSentence < 11);
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
}

const settingInit = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    setLevel();
  });
};

dragManagerInit();
export default settingInit;
