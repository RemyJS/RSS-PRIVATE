import '../styles/style.css';
import '../styles/style.scss';

import renderDate from './services/date';

const wdate = document.querySelector('.weather__header__date');
const wtime = document.querySelector('.weather__header__time');
const btnlang = document.querySelectorAll('.control__setting_lang button');

localStorage.setItem('lang', window.navigator.language.slice(0, 2));
btnlang.forEach((btn) => {
  btn.addEventListener('click', () => {
    localStorage.setItem('lang', btn.innerText);
  });
})
const timerid = renderDate(wdate, wtime);
