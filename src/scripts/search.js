import { initSlider } from "./slider.js";
import { getEnglishTitle } from "./services/translate_service.js";
import { showMessage } from "./notification.js";

function initSearch() {
  console.log("initSearh export");
  const searchButton = document.querySelector(".search__button");
  const searchClear = document.querySelector(".search__clear");
  const searchInput = document.querySelector(".search__input");
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const title = searchInput.value;
    if (title.match(/[А-я]/g)) { // if title has russian letters
      const titleEng = getEnglishTitle(title);
      titleEng.then((promise) => {
        const translate = promise.text[0];
        searchInput.value = translate;
        showMessage(`Showing results for ${translate}`);
        initSlider(translate);
      });
    } else {
      initSlider(title);
    }
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    // searchInput.focus();
  });
}

export { initSearch }
