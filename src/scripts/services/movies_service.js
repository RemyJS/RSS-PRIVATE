const getMovies = async (title, page) => {
  if (title.trim() === "") throw new Error("enter the name of the movie");

  const url = `https://www.omdbapi.com/?s=${title}&plot=full&type=movie&page=${page}&apikey=3beb9416`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.Response === "True") {
    return data; // прежде data.Search
  }
  throw (data.Error);
};
export { getMovies }