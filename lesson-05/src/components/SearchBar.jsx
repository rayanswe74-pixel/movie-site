import "./SearchBar.css";

function SearchBar({
  query,
  onQueryChange,
  genre,
  onGenreChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="search-bar">
      ...

      <label className="search-bar__field">
        <span className="search-bar__label">מיון</span>
        <select
          className="search-bar__input"
          value={sortBy}
          onChange={e => onSortChange(e.target.value)}
        >
          <option value="rating">לפי דירוג</option>
          <option value="year">לפי שנה</option>
          <option value="title">לפי שם</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;