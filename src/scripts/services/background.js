const getImage = () => {
  const r = Math.floor(Math.random() * 10) + 1;
  const url = `url("../../assets/img/pict (${r}).jpg")`;
  return url;
};

export default getImage;
