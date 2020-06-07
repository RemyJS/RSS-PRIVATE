import dragManagerInit from './dragmanager';

dragManagerInit();
const form = document.querySelector('#levelSetting');
const page = document.querySelector('#page');
const group = document.querySelector('#group');
const source = document.querySelector('.source');
const continueBtn = document.querySelector('#continue');
const gameBoard = document.querySelector('.resualt');

const renderRound = (round) => {
  source.innerText = '';
  round.forEach((el) => {
    const span = document.createElement('span');
    span.className = 'puzzle draggable';
    span.innerHTML = el;
    source.append(span);
  });
};
function* loadGame(round) {
  let i = 0;
  while (i < 11) {
    yield renderRound(round[i]);
    i += 1;
  }
}
const setLevel = async () => {
  fetch(`https://afternoon-falls-25894.herokuapp.com/words?group=${group.value}&page=${page.value}`)
    .then((res) => res.json())
    .then((data) => {
      const map = data.map((el) => el.textExample.split(' '));
      const fillterLevel = map.filter((el) => el.length < 11);
      const generator = loadGame(fillterLevel);
      continueBtn.addEventListener('click', () => {
        const state = generator.next();
        if (state.done) console.log('round end');
      });
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
