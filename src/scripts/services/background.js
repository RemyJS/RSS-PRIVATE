const changeBackground = () => {
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=weather&client_id=biEL7I50srzXOeXn1hYkYV-u9ryWzqk1Dr-ZoLpaKIM';
  const body = document.querySelector('body');
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const path = data.urls.regular;
      body.style.backgroundColor = data.color;
      body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${path})`;
    }).catch(() => {
      body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../../assets/img/weather-forecast.jpg")';
    });
};

export default changeBackground;
