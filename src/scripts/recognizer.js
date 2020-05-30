import { getForecast } from './services/weatherbit';

const recognizer = new webkitSpeechRecognition();
recognizer.interimResults = false;

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
    btnRec.style.backgroundImage = 'url("../../assets/img/microphone_rec.svg")';
    recognizer.onresult = (event) => {
      const result = event.results[event.resultIndex];
      if (result.isFinal) {
        const word = result[0].transcript;
        city.value = word;
        getForecast(word);
        btnRec.style.backgroundImage = '';
      }
    };

    setTimeout(() => {
      btnRec.style.backgroundImage = '';
    }, 4000);
  });
};

export default recognizerInit;
