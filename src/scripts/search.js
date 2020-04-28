// import { multiItemSlider } from "./slider.js";
console.log("search init");
function search() {
  const title = document.querySelector(".search__input").value;
  const wrapper = document.querySelector(".slider__wrapper");
  async function getMovieTitle(title) {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=9b67fc54`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
  const getMovies = async () => {
    const movies = await getMovieTitle(title);
    console.log(movies);
    return movies.Search;
  };
  const movies = getMovies();
  function sliderPush(movie) {
    const getRating = async (id) =>{
      const url = `https://www.omdbapi.com/?i=${id}&apikey=9b67fc54`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
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
    cardPoster.style.backgroundImage = `url(${movie.Poster})`;
    cardYear.innerText = movie.Year;
    getRating(movie.imdbID).then((r) => {
      imdb.innerText = r.Ratings[0].Value;
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

  movies.then((movies) => {
    wrapper.innerHTML = "";
    movies.forEach(movie => {
      sliderPush(movie);
    });
  })
};

const searchButton = document.querySelector(".search__button");

searchButton.addEventListener("click", search);
