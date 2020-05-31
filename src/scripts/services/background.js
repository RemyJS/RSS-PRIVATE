import showMsg from '../notification';

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
    const locale = new Date().toLocaleString('en-GB', { timeZone: region });
    const hour = +(locale.slice(-8, -6));
    let partDay;
    if (hour > 8 && hour < 20) {
      partDay = 'day';
    } else {
      partDay = 'night';
    }
    img += `,${country},${partDay}`;
  } else {
    img = 'sky';
  }
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${img}&client_id=biEL7I50srzXOeXn1hYkYV-u9ryWzqk1Dr-ZoLpaKIM`;
  const html = document.querySelector('html');
  console.log(`URL фонового изображения для проверки ментором или в процессе кросс чека ${url}`);
  try {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          showMsg('Превышен лимит фоновых изображений', 'Background Limit Exceeded');
        }
        return res.json();
      })
      .then((data) => {
        const path = data.urls.regular;
        const tempImg = document.createElement('img');
        tempImg.src = path;
        tempImg.onload = () => {
          html.style.backgroundImage = `url(${path})`;
        };
      })
      .catch(() => {
        showMsg('Превышен лимит фоновых изображений', 'Background Limit Exceeded');
        html.style.backgroundImage = 'url("../../assets/img/weather-forecast.jpg")';
      });
  } catch (error) {
    showMsg('Превышен лимит фоновых изображений', 'Background Limit Exceeded');
  }
};

export default changeBackground;
