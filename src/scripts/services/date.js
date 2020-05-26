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

const set3days = (lang, d) => {
  let indexDay = d;
  const threeDays = document.querySelectorAll('.weather__day_name');
  threeDays.forEach((el) => {
    indexDay += 1;
    if (indexDay > 6) indexDay = 0;
    el.innerText = day[lang][indexDay];
  });
};
const timeZoneOption = {
  get timeZone() {
    return this.zone;
  },
  set timeZone(tzone) {
    this.zone = tzone;
  },
};

const renderDate = () => {
  const date = document.querySelector('.weather__header__date');
  const time = document.querySelector('.weather__header__time');
  const timerId = setInterval(() => {
    const lang = localStorage.getItem('lang');
    const now = new Date();

    const m = now.getUTCMonth();
    const d = now.getUTCDay();
    const monthname = month[lang][m];
    const dayname = day[lang][d];
    set3days(lang, d);

    const locale = now.toLocaleString('en-GB', timeZoneOption);
    date.innerText = `${dayname} ${now.getDate()} ${monthname}`;
    time.innerText = locale.slice(-8);
  }, 1000);
  return timerId;
};

export { renderDate, timeZoneOption };
