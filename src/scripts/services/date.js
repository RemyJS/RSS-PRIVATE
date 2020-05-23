
const month = {
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  be: ['cтудзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня', 'ліпня', 'жніуня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
const day = {
  ru: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг ', 'пятница', 'суббота'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', ' Thursday ', 'Friday', 'Saturday'],
  be: ['нядзеля', 'Панядзелак', 'аўторак', 'серада', 'чацвер', 'Пятніца', 'субота'],
};
const lessThenTen = (n) => {
  if (n < 10) return `0${n}`;
  return n;
};
const set3days = (lang, d) => {
  let indexDay = d;
  const threeDays = document.querySelectorAll('.weather__day_name');
  threeDays.forEach((el) => {
    indexDay += 1;
    if (indexDay > 6) indexDay = 0;
    el.innerText = day[lang][indexDay];
  });
};
const renderDate = (date, time) => {
  const timerId = setInterval(() => {
    const lang = localStorage.getItem('lang');
    const now = new Date();

    const m = now.getMonth();
    const d = now.getDay();
    const monthname = month[lang][m];
    const dayname = day[lang][d];
    set3days(lang, d);

    const h = lessThenTen(now.getHours());
    const min = lessThenTen(now.getMinutes());
    const sec = lessThenTen(now.getSeconds());
    date.innerText = `${dayname} ${now.getDate()} ${monthname}`;
    time.innerText = `${h}:${min}:${sec}`;
  }, 1000);
  return timerId;
};

export default renderDate;
