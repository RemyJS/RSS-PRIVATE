import '../styles/style.css';
import '../styles/style.scss';

import renderDate from './services/date';
import getLocation from './services/geolocation';
import changeBackground from './services/background';
import formInit from './search';
import langSetting from './langSetting';

const form = document.querySelector('.search');

const btnlang = document.querySelectorAll('.control__setting_lang button');

const wdate = document.querySelector('.weather__header__date');
const wtime = document.querySelector('.weather__header__time');

const randomBackround = document.querySelector('.control__setting_bg');
randomBackround.addEventListener('click', changeBackground);

formInit(form);
langSetting(btnlang);
renderDate(wdate, wtime);
getLocation();
changeBackground();
