import getMovies from "./services/movies_service";
import getRating from "./services/rating_service";
import showMessage from "./notification";

let lastPage = 2; // default value
let positionLeftItem = 0; // позиция левого активного элемента
let transform = 0; // значение трансформации .slider_wrapper
let pageForSearch = 1;
let movieTitle;

const slider = document.querySelector(".slider"); // основный элемент блока
const sliderWrapper = slider.querySelector(".slider__wrapper"); // обертка для .slider-item
const sliderControls = slider.querySelectorAll(".slider__control"); // элементы управления
const sliderControlPrev = slider.querySelector(".slider__control_left"); // кнопка "LEFT"
const sliderControlNext = slider.querySelector(".slider__control_right"); // кнопка "RIGHT"
const loadingIndicator = document.querySelector(".search__loading");
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
  cardTitle.target = "_blank";
  if (movie.Poster !== "N/A") {
    cardPoster.style.backgroundImage = `url(${movie.Poster})`;
  } else {
    cardPoster.style.opacity = "0.85";
  }
  cardYear.innerText = movie.Year;
  getRating(movie.imdbID).then((r) => {
    imdb.innerText = r.Ratings[0].Value;
    const description = document.createElement("div");
    const country = document.createElement("div");
    const director = document.createElement("div");
    const runtime = document.createElement("div");
    const rated = document.createElement("div");

    description.className = "card__description";
    country.className = "card__description__country";
    director.className = "card__description__director";
    runtime.className = "card__description__runtime";
    rated.className = "card__description__rated";

    country.innerText = r.Country;
    director.innerText = (r.Director !== "N/A") ? r.Director : "";
    runtime.innerText = (r.Runtime !== "N/A") ? r.Runtime : "";
    rated.innerText = (r.Rated !== "N/A") ? `Rated ${r.Rated}` : "";

    description.append(country, director, runtime, rated);
    cardPoster.append(description);
  }).catch(() => {
    cardRating.innerText = "no ratings";
  });
  // append
  cardRating.append(imdb);
  card.append(cardTitle, cardPoster, cardYear, cardRating);
  item.append(card);
  sliderWrapper.append(item);
};

const search = (title, startPage) => {
  loadingIndicator.classList.remove("hidden");
  getMovies(title, startPage).then((data) => {
    lastPage = Math.ceil(data.totalResults / 10); // get value from promise
    const movies = data.Search;
    movies.forEach((movie) => {
      sliderPush(movie);
    });

    if (data.totalResults < 2) {
      sliderControlNext.classList.remove("slider__control_show");
    } else {
      sliderControlNext.classList.add("slider__control_show");
    }
    if (startPage === 1) {
      pageForSearch = 1;
      sliderWrapper.style.transform = "translateX(0%)";
      // eslint-disable-next-line no-use-before-define
      setUpListeners();// i don't know how fix it, code in the loop((
    }
  }).catch((err) => {
    if (err === "Movie not found!") {
      showMessage(`No results were found for ${title}`);
    } else {
      showMessage(err);
    }
  }).finally(() => {
    setTimeout(() => { loadingIndicator.classList.add("hidden"); }, 500);
  });
};
const loadExtraPage = (newPage) => {
  search(movieTitle, newPage);
};

const initSlider = (title) => { // экспортировать
  movieTitle = title;
  sliderControlPrev.classList.remove("slider__control_show");
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
  const step = (itemWidth / wrapperWidth) * 100; // величина шага (для трансформации)


  const position = {
    getMin: 0,
    get getMax() {
      return sliderItems.length - 1;
    },
  };

  if (direction === "right") {
    if (!sliderControlPrev.classList.contains("slider__control_show")) { // first click to right
      sliderControlPrev.classList.add("slider__control_show");
    }
    if (sliderControlNext.classList.contains("slider__control_show") && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {
      if (pageForSearch < lastPage) {
        pageForSearch += 1;
        loadExtraPage(pageForSearch);
      } else {
        sliderControlNext.classList.remove("slider__control_show"); // hide right arrow in the last slide
      }
    }
    positionLeftItem += 1;
    transform -= step;
  }

  if (direction === "left") {
    if (!sliderControlNext.classList.contains("slider__control_show")) { // click left at the end of the slider
      sliderControlNext.classList.add("slider__control_show");
    }
    if (sliderControlPrev.classList.contains("slider__control_show") && positionLeftItem - 1 <= position.getMin) {
      sliderControlPrev.classList.remove("slider__control_show");
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

export default initSlider;
