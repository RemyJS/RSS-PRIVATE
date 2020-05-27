import { getForecast } from './services/weatherbit';

const formInit = (form) => {
  const input = form.querySelector('.search__input');
  const countryCode = form.querySelector('.search__country_code');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let code = countryCode.value.trim();
    if (code) code = `&country=${code}`;
    getForecast(input.value, code);
  });
};
export default formInit;
