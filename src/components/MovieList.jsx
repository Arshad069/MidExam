// src/components/MovieList.jsx

import React from 'react';
import MovieItem from './MovieItem';

const MovieList = () => {
  // Hardcoded list of movies with placeholder images
  const movies = [
    {
      id: 1,
      title: 'Inception',
      release_date: '2010-07-16',
      vote_average: 8.8,
      poster_path: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'The Dark Knight',
      release_date: '2008-07-18',
      vote_average: 9.0,
      poster_path: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Interstellar',
      release_date: '2014-11-07',
      vote_average: 8.6,
      poster_path: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Avatar',
      release_date: '2009-12-18',
      vote_average: 7.8,
      poster_path: 'https://via.placeholder.com/150', 
    },
    {
      id: 5,
      title: 'Titanic',
      release_date: '1997-12-19',
      vote_average: 7.8,
      poster_path: 'https://via.placeholder.com/150', 
    },
    {
      id: 6,
      title: 'Avengers: Endgame',
      release_date: '2019-04-26',
      vote_average: 8.4,
      poster_path: 'https://via.placeholder.com/150',
    }
  ];

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
