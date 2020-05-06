import { getMovies } from "./services/movies_service.js";
import { getRating } from "./services/rating_service.js";

let lastPage = 2; // default value
let positionLeftItem = 0; // позиция левого активного элемента
let transform = 0; // значение трансформации .slider_wrapper
let pageForSearch = 1;
let movieTitle;

const slider = document.querySelector(".slider"); // основный элемент блока
const sliderWrapper = slider.querySelector(".slider__wrapper"); // обертка для .slider-item
const sliderControls = slider.querySelectorAll(".slider__control"); // элементы управления
const sliderControlLeft = slider.querySelector(".slider__control_left"); // кнопка "LEFT"
const sliderControlRight = slider.querySelector(".slider__control_right"); // кнопка "RIGHT"

const sliderPush = (movie) => {
  // tag
  const item = document.createElement("div");
  const card = document.createElement("div");
  const cardTitle = document.createElement("a");
  const cardPoster = document.createElement("div");
  const cardYear = document.createElement("div");
  const cardRating = document.createElement("div");
  const imdb = document.createElement("span");
  // class
  item.className = "slider__item";
  card.className = "card";
  cardTitle.className = "card__title";
  cardPoster.className = "card__poster";
  cardYear.className = "card__year";
  cardRating.className = "card__rating";
  imdb.className = "card__rating_imdb";
  // value
  cardTitle.innerText = movie.Title;
  cardTitle.href = `https://www.imdb.com/title/${movie.imdbID}/`;
  if (movie.Poster !== "N/A") cardPoster.style.backgroundImage = `url(${movie.Poster})`;
  cardYear.innerText = movie.Year;
  getRating(movie.imdbID).then((r) => {
    imdb.innerText = r.Ratings[0].Value;
  }).catch(() => {
    cardRating.innerText = "no ratings";
  });
  // append
  cardRating.append(imdb);
  card.append(cardTitle);
  card.append(cardPoster);
  card.append(cardYear);
  card.append(cardRating);
  item.append(card);
  sliderWrapper.append(item);
};

// eslint-disable-next-line arrow-body-style
const search = (title, startPage) => {
  return getMovies(title, startPage).then((data) => {
    lastPage = Math.ceil(data.totalResults / 10); // get value from promise
    const movies = data.Search;
    movies.forEach((movie) => {
      sliderPush(movie);
    });

    if (startPage === 1) {
      pageForSearch = 1;
      sliderWrapper.style.transform = "translateX(0%)";
      setUpListeners();
    }
  }).catch((err) => {
    // добавить дефолтную страницу
    const msg = document.querySelector(".search__info");
    msg.innerText = err;
    setTimeout(() => { msg.innerText = ""; }, 3000);
    console.log(err);
  });
}

const loadExtraPage = (newPage) => {
  console.log(`Поиск страницы ${newPage} по запросу ${movieTitle}`);
  search(movieTitle, newPage);
};

const initSlider = (title) => { // экспортировать
  console.log("export initSlider");
  movieTitle = title;
  sliderControlLeft.classList.remove("slider__control_show");
  sliderWrapper.innerHTML = "";
  positionLeftItem = 0;
  transform = 0;
  sliderWrapper.style.transform = "translateX(0%)";
  search(title, 1);
};

const transformItem = (direction) => {
  const wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width); // ширина обёртки
  const sliderItems = slider.querySelectorAll(".slider__item");
  const itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width); // ширина одного элемента
  // eslint-disable-next-line no-mixed-operators
  const step = itemWidth / wrapperWidth * 100; // величина шага (для трансформации)


  const position = {
    getMin: 0,
    get getMax() {
      return sliderItems.length - 1;
    },
  };

  console.log(positionLeftItem, step);
  if (direction === "right") {
    if (!sliderControlLeft.classList.contains("slider__control_show")) { // first click to right
      sliderControlLeft.classList.add("slider__control_show");
    }
    if (sliderControlRight.classList.contains("slider__control_show") && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {
      if (pageForSearch < lastPage) {
        pageForSearch += 1;
        loadExtraPage(pageForSearch);
      } else {
        sliderControlRight.classList.remove("slider__control_show"); // hide right arrow in the last slide
      }
    }
    positionLeftItem += 1;
    transform -= step;
  }

  if (direction === "left") {
    if (!sliderControlRight.classList.contains("slider__control_show")) { // click left at the end of the slider
      sliderControlRight.classList.add("slider__control_show");
    }
    if (sliderControlLeft.classList.contains("slider__control_show") && positionLeftItem - 1 <= position.getMin) {
      sliderControlLeft.classList.remove("slider__control_show");
    }
    positionLeftItem -= 1;
    transform += step;
  }
  sliderWrapper.style.transform = `translateX(${transform}%)`;
};

// обработчик события click для кнопок "назад" и "вперед"
const controlClick = (e) => {
  if (e.target.classList.contains("slider__control")) {
    e.preventDefault();
    const direction = e.target.classList.contains("slider__control_right") ? "right" : "left";
    transformItem(direction);
  }
};

const setUpListeners = () => {
  sliderControls.forEach((item) => {
    // delete old eventListener
    item.removeEventListener("click", controlClick);
  });
  // добавление к кнопкам "назад" и "вперед" обработчика controlClick для события click
  sliderControls.forEach((item) => {
    item.addEventListener("click", controlClick);
  });
};


export { initSlider };
