import '../styles/style.css';
import '../styles/style.scss';

import { renderDate } from './services/date';
import getLocation from './services/geolocation';
import changeBackground from './services/background';
import formInit from './search';
import langSetting from './langSetting';
import changeMetric from './metric';

const form = document.querySelector('.search');

const btnlang = document.querySelectorAll('.control__setting_lang button');

const randomBackround = document.querySelector('.control__setting_bg');
randomBackround.addEventListener('click', changeBackground);

const f = document.querySelector('[data-temp = "I"]');
const c = document.querySelector('[data-temp = "M"]');

formInit(form);
renderDate();
langSetting(btnlang);
changeMetric(c, f);
getLocation();
changeBackground();
