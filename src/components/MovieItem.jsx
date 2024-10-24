
import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img 
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'placeholder-image.jpg'} 
        alt={movie.title} 
      />
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieItem;
