const getMovies = async (title, page) => {
  const url = `https://www.omdbapi.com/?s=${title}&type=movie&page=${page}&apikey=3beb9416`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.Response === "True") {
    return data; // прежде data.Search
  }

  throw (data.Error);
};