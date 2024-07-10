// src/components/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css'; // Import CSS file for styling

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(true); // Set error state to true on 404 or other errors
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <div className="movie-details-container">Movie not found or error fetching data.</div>;
  }

  if (!movie) {
    return <div className="movie-details-container"><p>Loading...</p></div>;
  }

  return (
    <div className="movie-details-container">
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-overview">{movie.overview}</p>
      <div className="movie-details">
        <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        {/* Example: Displaying cast */}
        <div className="cast-section">
          <h3>Cast</h3>
          <ul className="cast-list">
            {movie.credits.cast.slice(0, 5).map(actor => (
              <li key={actor.id}>{actor.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

