import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TVShowDetails = () => {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState(null);

  useEffect(() => {
    const fetchTVShowDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setTVShow(response.data);
      } catch (error) {
        console.error('Error fetching TV show details:', error);
      }
    };

    fetchTVShowDetails();
  }, [id]);

  if (!tvShow) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{tvShow.name}</h2>
      <p>{tvShow.overview}</p>
      <p><strong>First Air Date:</strong> {tvShow.first_air_date}</p>
      <p><strong>Number of Seasons:</strong> {tvShow.number_of_seasons}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TVShowDetails;
