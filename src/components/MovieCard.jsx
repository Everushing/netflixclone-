// src/components/MovieCard.jsx
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img
        className="movie-card__poster"
        src={imageUrl}
        alt={movie.title}
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__release-date">Release Date: {movie.release_date}</p>
        <p className="movie-card__rating">Rating: {movie.vote_average}</p>
        {/* You can add more details such as genres, overview, etc. */}
      </div>
    </div>
  );
};

export default MovieCard;
