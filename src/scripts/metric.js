import { getTemp } from './services/weatherbit';

const changeMetric = (cels, fahr) => {
  let temp = document.querySelectorAll('.weather__day_temp');
  temp = Array.from(temp);
  temp.push(document.querySelector('.weather__desctription_apparent_value'));
  cels.addEventListener('click', () => {
    const metric = localStorage.getItem('metric');
    if (metric !== 'M') {
      localStorage.setItem('metric', 'M');
      temp.forEach((t) => {
        const num = parseInt(t.innerText, 10);
        const c = (num - 32) / 1.8;
        t.innerText = getTemp(c, 'M');
      });
    }
  });

  fahr.addEventListener('click', () => {
    const metric = localStorage.getItem('metric');
    if (metric !== 'I') {
      localStorage.setItem('metric', 'I');
      temp.forEach((t) => {
        const num = parseInt(t.innerText, 10);
        const c = (num * 1.8) + 32;
        t.innerText = getTemp(c, 'I');
      });
    }
  });
};

export default changeMetric;
