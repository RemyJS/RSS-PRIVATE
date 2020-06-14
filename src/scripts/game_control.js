import { roundResult, fillterResualt } from './resualt';

const continueBtn = document.querySelector('#continue');
const dontKnowBtn = document.querySelector('#dontKnow');
const checkBtn = document.querySelector('#checkBtn');
const resualtBtn = document.querySelector('#resualtBtn');

const hideDontKnowButton = () => {
  if (!dontKnowBtn.classList.contains('hidden')) dontKnowBtn.classList.add('hidden');
};
const showDontKnowButton = () => {
  if (dontKnowBtn.classList.contains('hidden')) dontKnowBtn.classList.remove('hidden');
};
const showCheckButton = () => {
  if (checkBtn.classList.contains('hidden')) checkBtn.classList.remove('hidden');
};
const hideCheckButton = () => {
  if (!checkBtn.classList.contains('hidden')) checkBtn.classList.add('hidden');
};
const showResualtButton = () => {
  if (resualtBtn.classList.contains('hidden')) resualtBtn.classList.remove('hidden');
};
const hideResualtButton = () => {
  if (!resualtBtn.classList.contains('hidden')) resualtBtn.classList.add('hidden');
};
const showContinueButton = () => {
  if (continueBtn.classList.contains('hidden')) continueBtn.classList.remove('hidden');
};
const hideContinueButton = () => {
  if (!continueBtn.classList.contains('hidden')) continueBtn.classList.add('hidden');
};


const iDontKnow = () => {
  roundResult.winRounds.push(false);
  const resualt = document.querySelector('.resualt_active');
  const active = Array.from(document.querySelectorAll('.resualt_active .puzzle'));
  const source = Array.from(document.querySelectorAll('.source .puzzle'));
  const puzzles = active.concat(source);

  puzzles.sort((a, b) => a.dataset.sequence - b.dataset.sequence);
  puzzles.forEach((el) => resualt.append(el));
  hideDontKnowButton();
  hideCheckButton();
  showContinueButton();
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
    roundResult.winRounds.push(true);
    continueBtn.classList.remove('hidden');
    hideCheckButton();
  } else {
    showDontKnowButton();
  }
};
const gameControlInit = () => {
  dontKnowBtn.onclick = iDontKnow;
  checkBtn.onclick = checkPuzzles;
  resualtBtn.onclick = fillterResualt;
};

export {
  gameControlInit,
  hideCheckButton,
  showCheckButton,
  hideDontKnowButton,
  showDontKnowButton,
  showResualtButton,
  hideResualtButton,
  showContinueButton,
  hideContinueButton,
};
