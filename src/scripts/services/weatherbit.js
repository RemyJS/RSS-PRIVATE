const getTemp = (temp) => {
  let t = Math.round(temp);
  if (t > 0) {
    t = `+${t}`;
  } else if (t < 0) {
    t = `-${t}`;
  }
  return t;
};

const render = (forecast) => {
  console.log(forecast);
  const temps = document.querySelectorAll('.weather__day_temp');
  const icons = document.querySelectorAll('.weather__ico');
  const summary = document.querySelectorAll('.weather__desctription_summary');
  const apparent = document.querySelector('.weather__desctription_apparent_value');
  const speed = document.querySelector('.weather__desctription_speed_value');
  const humidity = document.querySelector('.weather__desctription_humidity_value');
  const { data } = forecast;

  for (let i = 0; i < 4; i += 1) {
    temps[i].innerText = getTemp(data[i].temp);
    summary[i].innerText = data[i].weather.description;
    icons[i].style.backgroundImage = `url(https://www.weatherbit.io/static/img/icons/${data[i].weather.icon}.png)`;
  }

  const today = data[0];

  apparent.innerText = getTemp(today.app_max_temp);
  speed.innerText = Math.round(today.wind_spd);
  humidity.innerText = today.rh;
};

const getForecast = (city, cournty = '') => {
  const metric = 'M';
  const lang = localStorage.getItem('lang');
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}${cournty}&days=4&units=${metric}&lang=${lang}&key=f588eabe44b14df09538a907aacc1426`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      render(data);
    }).catch((err) => {
      console.log(err);
    });
};

export default getForecast;
