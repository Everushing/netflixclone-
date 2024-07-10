import React from 'react';
import { Link } from 'react-router-dom';

const TVShowCard = ({ tvShow }) => {
  return (
    <div>
      <Link to={`/tvshow/${tvShow.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`} alt={tvShow.name} />
        <h3>{tvShow.name}</h3>
      </Link>
    </div>
  );
};

export default TVShowCard;
