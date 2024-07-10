// src/components/HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import './HomePage.css';

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setRecommendedMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching recommended movies:', error);
      }
    };

    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchRecommendedMovies();
    fetchTrendingMovies();
  }, []);

  return (
    <div className="home-page">
      <h2>Recommended Movies</h2>
      <MovieList movies={recommendedMovies} />

      <h2>Trending Movies</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
