import { getForecast } from './weatherbit';
import showMsg from '../notification';

const getLocation = () => {
  const url = 'https://ipinfo.io/json?token=dc61f6ef77e40e';
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      getForecast(data.city, `&country=${data.country}`);
    }).catch(() => {
      showMsg('Неудалось получить геопозицию', 'Failed to get a geoposition');
    });
};

export default getLocation;
