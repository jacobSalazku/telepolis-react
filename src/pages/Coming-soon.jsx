import Hero from '../Components/Hero';
import { useState, useEffect } from 'react';
import MovieCard from '../Components/MovieCard';

const ComingSoon = () => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=cb8b5baf6bfe0c3929a841b05a0f27e4`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setUpComingMovies(data.results);
      });
  }, []); // Empty dependency array to fetch data only once

  const resultHtml = upComingMovies
  .filter((movie) => {
    const releaseDate = new Date(movie.release_date);
    const currentDate = new Date();
    return releaseDate > currentDate; // Filter out movies with a release date in the past or today
  })
  .map((obj, i) => <MovieCard movie={obj} key={i} />);
    

  return (
    <>
      <div>
        <h1>
          <Hero text="Coming soon" />
        </h1>
      </div>

      {isLoading ? 
          <div className='flex-row-center'>
            <h2>Loading...</h2>
          </div>
      : 
        <div className='flex-row-center' >
          {resultHtml}
         
        </div>
      }
    </>
  );
};

export default ComingSoon;