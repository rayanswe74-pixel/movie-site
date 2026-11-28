...

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const topRated = movies.filter(movie => movie.rating >= 8.7);

  const text = query.trim().toLowerCase();

  let shownMovies = movies;
  if (onlyAvailable) {
    shownMovies = shownMovies.filter(movie => movie.available);
  }
  if (genre !== "all") {
    shownMovies = shownMovies.filter(movie => movie.genre === genre);
  }
  if (text !== "") {
    shownMovies = shownMovies.filter(movie =>
      movie.title.toLowerCase().includes(text)
    );
  }
  shownMovies = [...shownMovies].sort(compareMovies);

  function compareMovies(a, b) {
    if (sortBy === "year") {
      return b.year - a.year;
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return b.rating - a.rating;
  }

  function toggleAvailable() {
    setOnlyAvailable(!onlyAvailable);
  }

  return (
    <>
      <Header />
      <main className="page container">
        ...
        <div className="toolbar">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            genre={genre}
            onGenreChange={setGenre}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          <button
            className={onlyAvailable ? "btn btn--active" : "btn"}
            onClick={toggleAvailable}
          >
            רק זמינים לצפייה
          </button>
        </div>

        ...
      </main>
      <Footer />
    </>
  );
}

export default App;