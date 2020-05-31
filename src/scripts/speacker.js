import showMsg from './notification';

const temp = document.querySelector('.weather__day_temp');
const summ = document.querySelector('.weather__desctription_summary');
const place = document.querySelector('.weather__header__place');
const synth = window.speechSynthesis;
const volume = {
  lvl: 0.5,
};

const sayForecast = () => {
  const p = place.innerText;
  const t = temp.innerText;
  const s = summ.innerText;
  const phrase = new SpeechSynthesisUtterance(`${p}. ${s}, ${t}`);
  let lang;
  if (localStorage.getItem('lang') === 'en') {
    lang = 'en-En';
  } else {
    lang = 'ru-Ru';
  }

  phrase.lang = lang;
  phrase.volume = volume.lvl;
  synth.speak(phrase);
};

const synthInit = () => {
  const btn = document.querySelector('.weather__temp_m');
  btn.addEventListener('click', sayForecast);
};

export { synthInit, sayForecast, volume };
