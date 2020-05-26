import en from './translations/en';
import ru from './translations/ru';
import be from './translations/be';
import { geoCodeTranslate } from './services/opencage';

const changeLang = (translation) => {
  const i18n = document.querySelectorAll('[data-i18n]');
  i18n.forEach((el) => {
    el.innerText = translation[el.dataset.i18n];
  });
};
const setLang = (lang) => {
  geoCodeTranslate(lang);
  switch (lang) {
    case 'en':
      changeLang(en);
      break;
    case 'ru':
      changeLang(ru);
      break;
    case 'be':
      changeLang(be);
      break;
    default:
      break;
  }
};
const langSetting = (buttons) => {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', window.navigator.language.slice(0, 2));
  }
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.setlang;
      setLang(lang);
      localStorage.setItem('lang', lang);
    });
  });
  setLang(localStorage.getItem('lang'));
};
export default langSetting;
