import getForecast from './services/weatherbit';

const form = document.querySelector('.search');
const input = document.querySelector('.search__input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  getForecast(input.value, 'M');
});
export default form;
