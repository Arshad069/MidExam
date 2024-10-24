// src/components/MovieItem.jsx

import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img 
        src={movie.poster_path} 
        alt={movie.title} 
      />
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieItem;
