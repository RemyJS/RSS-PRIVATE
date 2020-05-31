const div = document.querySelector('.notification');

const showMsg = (ru, en) => {
  let text;
  if (localStorage.getItem('lang') === 'en') {
    text = en;
  } else {
    text = ru;
  }
  div.innerText = text;
  setTimeout(() => {
    div.innerText = '';
  }, 2000);
};

export default showMsg;
