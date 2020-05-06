//import { multiItemSlider } from "./slider.js";
console.log("search init");
function initSearch() {
  const searchButton = document.querySelector(".search__button");

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const searchInput = document.querySelector(".search__input");
    const title = searchInput.value;

    if (title.match(/[А-я]/g)) {
      const titleEng = getEnglishTitle(title);
      titleEng.then((promise) => {
        const translate = promise.text[0];
        searchInput.value = translate;
        initSlider(translate);
        // return title
      });
    } else {
      initSlider(title);
      // return title
    }
  });
}

//search();
//export {search};