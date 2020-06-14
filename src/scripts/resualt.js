const statisticScore = document.querySelector('.statistic__score');
const statisticImage = document.querySelector('.statistic__image');
const main = document.querySelector('.main');
const roundResult = {
  bgi: '',
  statistic: [],
  winRounds: [],
  reset() {
    this.statistic = [];
    this.bgi = '';
    this.winRounds = [];
  },
};

const loadResualt = (round, bgi) => {
  roundResult.statistic.push(round);
  roundResult.bgi = bgi.slice(0, -2);
};
const createStatisticBlock = (data) => {
  const block = document.createElement('div');
  const saudio = document.createElement('div');
  const stext = document.createElement('div');
  const { textExample } = data;

  stext.innerHTML = textExample;
  block.className = 'statistic__block';
  saudio.className = 'statistic__audio';
  stext.className = 'statistic__text';

  block.append(saudio);
  block.append(stext);
  return block;
};

const renderStatisticWrap = (type, data) => {
  const wrap = document.createElement('div');
  wrap.className = 'statistic__score_wrap';
  const h5 = document.createElement('h5');
  h5.innerText = `${type} ${data.length}`;
  wrap.append(h5);

  data.forEach((el) => {
    const block = createStatisticBlock(el);
    wrap.append(block);
  });

  return wrap;
};
const renderStatisticScore = (correct, wrong) => {
  statisticScore.innerText = '';
  statisticScore.append(renderStatisticWrap('I know', correct));
  statisticScore.append(renderStatisticWrap('I don\'t know', wrong));
};
const fillterResualt = () => {
  statisticImage.src = roundResult.bgi;
  const correct = [];
  const wrong = [];
  for (let i = 0; i < 10; i += 1) {
    if (roundResult.winRounds[i]) {
      correct.push(roundResult.statistic[i]);
    } else {
      wrong.push(roundResult.statistic[i]);
    }
  }
  renderStatisticScore(correct, wrong);
  roundResult.reset();
  main.classList.add('hidden');
};

export { loadResualt, roundResult, fillterResualt };
