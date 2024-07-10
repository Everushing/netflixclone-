import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      // Perform search logic here
      console.log(`Search for: ${query}`);
      // Clear input after search
      setQuery('');
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search for movies, TV shows..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-bar__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

