import '../styles/style.css';
import '../styles/style.scss';

import renderDate from './services/date';
import getLocation from './services/geolocation';
import changeBackground from './services/background';
import form from './search';
import langSetting from './langSetting';

const btnlang = document.querySelectorAll('.control__setting_lang button');

const wdate = document.querySelector('.weather__header__date');
const wtime = document.querySelector('.weather__header__time');

langSetting(btnlang);
window.timerId = renderDate(wdate, wtime);
getLocation();
changeBackground();
