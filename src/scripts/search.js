import { initSlider } from "./slider.js";
import { getEnglishTitle } from "./services/translate_service.js";

function initSearch() {
  console.log("initSearh export");
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
      });
    } else {
      initSlider(title);
    }
  });
}

export { initSearch }