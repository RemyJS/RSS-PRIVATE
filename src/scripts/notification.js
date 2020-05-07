const showMessage = (text) => {
  const msg = document.querySelector(".search__info");
  msg.innerText = text;
  setTimeout(() => { msg.innerText = ""; }, 3000);
};

export { showMessage };
