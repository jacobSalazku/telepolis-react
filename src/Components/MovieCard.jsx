import React from 'react';
import Button from './Button';

const MovieCard = ({ movie, showReleaseDate }) => {
  const imgPlaceholder = 'http://via.placeholder.com/840x540';
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : imgPlaceholder;

  return (
    <div className="card flex-column">
      <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
      <div className="card-body">
        <h5 className="card-title flex-row-center">{movie.original_title}</h5>
        {showReleaseDate && movie.release_date && (
          <p>Release Date: {new Date(movie.release_date).toLocaleDateString()}</p>
        )}
        <Button text="See more" className="custom-button primary-blue flex-row-center" />
      </div>
    </div>
  );
};

export default MovieCard;




