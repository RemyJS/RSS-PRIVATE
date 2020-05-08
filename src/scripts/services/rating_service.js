const getRating = async (id) => {
  const url = `https://www.omdbapi.com/?i=${id}&type=movie&apikey=3beb9416`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export { getRating };
