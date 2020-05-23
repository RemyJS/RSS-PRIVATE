import getForecast from './services/weatherbit';

const formInit = (form) => {
  const input = form.querySelector('.search__input');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    getForecast(input.value);
  });
};
export default formInit;
