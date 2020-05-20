
const month = {
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  be: ['cтудзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня', 'ліпня', 'жніуня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
const day = {
  ru: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг ', 'пятница', 'суббота'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', ' Thursday ', 'Friday', 'Saturday'],
  be: ['нядзеля', 'Панядзелак', 'аўторак', 'серада', 'чацвер', 'Пятніца', 'субота'],
}
const renderDate = (date, time) => {
  const timerId = setInterval(() => {
    const lang = localStorage.getItem('lang');
    const now = new Date();
    const m = now.getMonth();
    const d = now.getDay();
    const monthname = month[lang][m];
    const dayname = day[lang][d];

    let h = now.getHours();
    // eslint-disable-next-line no-unused-expressions
    (h < 10) ? h = `0${h}` : h;
    let min = now.getMinutes();
    (min < 10) ? min = `0${min}` : min;
    let sec = now.getSeconds();
    (sec < 10) ? sec = `0${sec}` : sec;
    // eslint-disable-next-line no-param-reassign
    date.innerText = `${dayname} ${now.getDate()} ${monthname}`;
    time.innerText = `${h}:${min}:${sec}`;
  }, 1000);
  return timerId;
};

export default renderDate;
