//import { multiItemSlider } from "./slider.js";
console.log("search init");
function search(title, startPage) {

  const wrapper = document.querySelector(".slider__wrapper");
  let lastPage = 2; // default value
  if (startPage === 1) {
    wrapper.innerHTML = "";
    wrapper.style.transform = "translateX(0%)";
  }

  async function getMovieTitle(title, page) {
    const url = `https://www.omdbapi.com/?s=${title}&type=movie&page=${page}&apikey=3beb9416`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }

  const getMovies = async () => {
    const moviesPromise = await getMovieTitle(title, startPage);
    if (moviesPromise.Response === "True") {
      lastPage = Math.ceil(moviesPromise.totalResults / 10); // get value from promise
      return moviesPromise.Search;
    }
    const msg = document.querySelector(".search__info");
    msg.innerText = moviesPromise.Error;
    setTimeout(() => { msg.innerText = ""; }, 3000);
    throw (moviesPromise.Error);
  };

  function sliderPush(movie) {
    const getRating = async (id) => {
      const url = `https://www.omdbapi.com/?i=${id}&type=movie&apikey=3beb9416`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    };
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
    wrapper.append(item);
  }
  const movies = getMovies();
  movies.then((arrMovies) => {
    arrMovies.forEach((movie) => {
      sliderPush(movie);
    });

    if (startPage === 1) {
      slider = multiItemSlider(".slider", title, lastPage);
    }
  }).catch((err) => {
    console.log(err);
  });
  return movies;
}

const searchButton = document.querySelector(".search__button");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector(".search__input").value;
  search(title, 1);
});

//search();
//export {search};