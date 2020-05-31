import setMap from '../mapbox';
import { timeZoneOption } from './date';
import { geoCodeTranslate, cageCoords } from './opencage';
import animatedIcons from './weathericons';
import changeBackground from './background';
import showMsg from '../notification';

const getTemp = (temp, M = 'M') => {
  let m;
  if (M === 'M') {
    m = '℃';
  } else {
    m = '°F';
  }
  let t = Math.round(temp);
  if (t > 0) {
    t = `+${t}<sup>${m}</sup>`;
  } else if (t < 0) {
    t = `-${t}<sup>${m}</sup>`;
  } else {
    t = `${t}<sup>${m}</sup>`;
  }
  return t;
};

const render = (forecast, metric) => {
  const temps = document.querySelectorAll('.weather__day_temp');
  const icons = document.querySelectorAll('.weather__ico');
  const summary = document.querySelectorAll('.weather__desctription_summary');
  const apparent = document.querySelector('.weather__desctription_apparent_value');
  const speed = document.querySelector('.weather__desctription_speed_value');
  const humidity = document.querySelector('.weather__desctription_humidity_value');
  const { data } = forecast;

  for (let i = 0; i < 4; i += 1) {
    temps[i].innerHTML = getTemp(data[i].temp, metric);
    summary[i].innerText = data[i].weather.description;
    summary[i].dataset.i18n = data[i].weather.code;
    icons[i].style.backgroundImage = `url(../../assets/img/icons/${animatedIcons[data[i].weather.code]})`;
  }

  const today = data[0];

  apparent.innerHTML = getTemp(today.app_max_temp, metric);
  speed.innerText = Math.round(today.wind_spd);
  humidity.innerText = today.rh;

  setMap(forecast.lon, forecast.lat);
  cageCoords.lat = forecast.lat;
  cageCoords.lon = forecast.lon;
  timeZoneOption.timeZone = forecast.timezone;
  changeBackground(null, data[0].weather.code, forecast.timezone);
};

const getForecast = (city, cournty = '') => {
  if (city.trim() === '') {
    showMsg('Введите название населенного пункта', 'Enter city name');
    return;
  }
  const metric = localStorage.getItem('metric') || 'M';
  const lang = localStorage.getItem('lang');
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}${cournty}&days=4&units=${metric}&lang=${lang}&key=f588eabe44b14df09538a907aacc1426`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      render(data, metric);
      geoCodeTranslate(lang);
    }).catch(() => {
      showMsg('Введите название населенного пункта', 'Enter city name');
    });
};

export { getForecast, getTemp };
