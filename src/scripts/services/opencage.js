const renderCountry = (data) => {
  const place = document.querySelector('.weather__header__place');
  const { components } = data.results[0];
  let townState;
  if (components.town && components.state) townState = `${components.town}, ${components.state}`;
  place.innerText = ` ${components.city || townState || components.town || components.village || components.state}, ${components.country}`;
};
const cageCoords = {
  lat: 53.9,
  lon: 27.56,
  getCoords() {
    return `${this.lat}%2C${this.lon} `;
  },
};
const geoCodeTranslate = (lang) => {
  const key = 'key=a4fba62e009a4223bcad58d7d1b238da';
  const coords = cageCoords.getCoords();
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${coords}&${key}&language=${lang}&pretty=1&no_annotations=1`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderCountry(data);
    }).catch((err) => {
      console.log(err);
    });
};

export { geoCodeTranslate, cageCoords };
