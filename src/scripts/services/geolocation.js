const getLocation = () => {
  const url = 'https://ipinfo.io/json?token=dc61f6ef77e40e';
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

export default getLocation;
