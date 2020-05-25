const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoicmVteWpzIiwiYSI6ImNrYW1ncDF1bjA2b24ycnBmcW43bmZ5Z24ifQ.xpyUoGJv5GkCsLnFPr5yJA';

const map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [27.56667, 53.519], // starting position [long, lat]
  zoom: 11,
});
map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => { // english and native counrty name
  map.setLayoutProperty('country-label', 'text-field', [
    'format',
    ['get', 'name_en'],
    { 'font-scale': 0.8 },
    '\n',
    {},
    ['get', 'name'],
    {
      'font-scale': 1,
      'text-font': [
        'literal',
        ['DIN Offc Pro Italic', 'Arial Unicode MS Regular'],
      ],
    }
  ]);
});

const marker = new mapboxgl.Marker()
  .setLngLat([27.56667, 53.9])
  .addTo(map);
window.map = map;
window.marker = marker;

const formatCoords = (cord) => {
  const arr = cord.toString().split('.');
  const deg = `${arr[0]}°`;
  const min = `${arr[1].slice(0, 2)}'`;
  return `${deg} ${min}`;
};
const renderCoords = (long, lat) => {
  const lt = document.querySelector('.map__cord_lat');
  const lon = document.querySelector('.map__cord_lon');
  lt.innerText = formatCoords(lat);
  lon.innerText = formatCoords(long);
};
const setMap = (long, lat) => {
  map.setCenter([long, lat]);
  marker.setLngLat([long, lat]);
  renderCoords(long, lat);
};
export default setMap;
