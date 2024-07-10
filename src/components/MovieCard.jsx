// src/components/MovieCard.jsx
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-card__poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-card__info">
        <h3>{movie.title}</h3>
        {/* Add more details like release date, rating, etc. */}
      </div>
    </div>
  );
};

export default MovieCard;
