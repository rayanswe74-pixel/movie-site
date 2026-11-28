...

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [query, setQuery] = useState("");

  const topRated = movies.filter(movie => movie.rating >= 8.7);

  const text = query.trim().toLowerCase();

  let shownMovies = movies;
  if (onlyAvailable) {
    shownMovies = shownMovies.filter(movie => movie.available);
  }
  if (text !== "") {
    shownMovies = shownMovies.filter(movie =>
      movie.title.toLowerCase().includes(text)
    );
  }

  function toggleAvailable() {
    setOnlyAvailable(!onlyAvailable);
  }

  return (
    <>
      ...
    </>
  );
}

export default App;