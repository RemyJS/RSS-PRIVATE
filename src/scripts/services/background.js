const weather = {
  2: 'Thunderstorm',
  3: 'Rain',
  5: 'Rain',
  6: 'Snow',
  7: 'Atmosphere',
  8: 'Clouds',
};

const changeBackground = (event, image, region = '') => {
  let img = image;
  if (typeof img === 'number') {
    img = weather[Math.floor(img / 100)];
    const country = region.split('/').pop();
    img += `,${country}`;
  } else {
    img = 'sky';
  }
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${img}&client_id=biEL7I50srzXOeXn1hYkYV-u9ryWzqk1Dr-ZoLpaKIM`;
  const html = document.querySelector('html');
  // const url = 'url("../../assets/img/weather-forecast.jpg")';
  console.log(`URL фонового изображения для удобства в ходе проверки ментором или в процессе кросс чека ${url}`);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const path = data.urls.regular;
      const tempImg = document.createElement('img');
      tempImg.src = path;
      tempImg.onload = () => {
        html.style.backgroundImage = `url(${path})`;
      };
    }).catch(() => {
      html.style.backgroundImage = 'url("../../assets/img/weather-forecast.jpg")';
    });
};

export default changeBackground;
