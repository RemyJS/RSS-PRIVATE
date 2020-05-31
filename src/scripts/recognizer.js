/* eslint-disable new-cap */
import { getForecast } from './services/weatherbit';
import { sayForecast, volume } from './speacker';
import showMsg from './notification';

// eslint-disable-next-line no-undef
const recognizer = new webkitSpeechRecognition();
recognizer.interimResults = false;

const playCommand = ['forecast', 'weather', 'прогноз', 'погода', 'погоды'];
const volumeUp = ['louder', 'громче'];
const volumeDown = ['quieter', 'тише'];

const recognizerInit = () => {
  const btnRec = document.querySelector('.search__rec');
  const city = document.querySelector('.search__input');

  btnRec.addEventListener('click', (e) => {
    e.preventDefault();
    let lang;
    if (localStorage.getItem('lang') === 'en') {
      lang = 'en-En';
    } else {
      lang = 'ru-Ru';
    }
    recognizer.lang = lang;
    recognizer.start();
    showMsg('Говорите...', 'Say');
    btnRec.style.backgroundImage = 'url("../../assets/img/microphone_rec.svg")';
    recognizer.onresult = (event) => {
      const result = event.results[event.resultIndex];
      if (result.isFinal) {
        const word = result[0].transcript;
        if (playCommand.indexOf(word) !== -1) {
          sayForecast();
        } else if (volumeUp.indexOf(word) !== -1) {
          showMsg('громокость увеличина', 'volume up');
          volume.lvl = 1;
        } else if (volumeDown.indexOf(word) !== -1) {
          showMsg('громокость уменьшина', 'volume down');
          volume.lvl = 0.3;
        } else {
          city.value = word;
          getForecast(word);
        }

        btnRec.style.backgroundImage = '';
      }
    };

    setTimeout(() => {
      btnRec.style.backgroundImage = '';
    }, 4000);
  });
};

export default recognizerInit;
