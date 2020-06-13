const continueBtn = document.querySelector('#continue');
const dontKnowBtn = document.querySelector('#dontKnow');
const checkBtn = document.querySelector('#checkBtn');
const resualtBtn = document.querySelector('#resualtBtn');

const roundResult = {
  statistic: {},
  reset() {
    this.statistic = {};
  },
};
const hideDontKnowButton = () => {
  if (!dontKnowBtn.classList.contains('hidden_button')) dontKnowBtn.classList.add('hidden_button');
};
const showDontKnowButton = () => {
  if (dontKnowBtn.classList.contains('hidden_button')) dontKnowBtn.classList.remove('hidden_button');
};
const showCheckButton = () => {
  if (checkBtn.classList.contains('hidden_button')) checkBtn.classList.remove('hidden_button');
};
const hideCheckButton = () => {
  if (!checkBtn.classList.contains('hidden_button')) checkBtn.classList.add('hidden_button');
};

const iDontKnow = () => {
  const resualt = document.querySelector('.resualt_active');
  const active = Array.from(document.querySelectorAll('.resualt_active .puzzle'));
  const source = Array.from(document.querySelectorAll('.source .puzzle'));
  const puzzles = active.concat(source);

  puzzles.sort((a, b) => a.dataset.sequence - b.dataset.sequence);
  puzzles.forEach((el) => resualt.append(el));
  hideDontKnowButton();
  hideCheckButton();
  continueBtn.classList.remove('hidden_button');
};

const checkPuzzles = () => {
  const puzzles = Array.from(document.querySelectorAll('.resualt_active .puzzle'));
  let isWin = true;
  puzzles.forEach((el, i) => {
    if (+el.dataset.sequence === i) {
      el.style.borderBottom = '3px solid greenyellow';
    } else {
      el.style.borderBottom = '3px solid red';
      isWin = false;
    }
    setTimeout(() => {
      el.style.borderBottom = '';
    }, 3000);
  });
  if (isWin) {
    continueBtn.classList.remove('hidden_button');
    hideCheckButton();
  } else {
    showDontKnowButton();
  }
};
const gameControlInit = () => {
  dontKnowBtn.onclick = iDontKnow;
  checkBtn.onclick = checkPuzzles;
};

export {
  gameControlInit,
  hideCheckButton,
  showCheckButton,
  hideDontKnowButton,
  showDontKnowButton,
};
