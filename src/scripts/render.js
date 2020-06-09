const source = document.querySelector('.source');
const gameBoard = document.querySelector('.resualt');

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

const renderRound = (round, y, bgi) => {
  source.innerText = '';
  const textArray = round.textExample.split(' ');
  const path = gameBoard.offsetWidth / textArray.join('').length;
  let bgx = 0;
  const bgy = y * -50;
  let row = textArray.map((el) => {
    const span = document.createElement('span');
    const width = `${el.length * path}px`;
    span.className = 'puzzle draggable';
    span.style.width = width;
    span.style.backgroundImage = bgi;
    span.style.backgroundPosition = `${bgx}px ${bgy}px`;
    bgx -= Number.parseFloat(width);
    span.innerHTML = el;
    return span;
  });
  row = shuffle(row);
  row.forEach((span) => source.append(span));
};

export default renderRound;
