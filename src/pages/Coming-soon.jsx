import Hero from '../Components/Hero';
import { useState, useEffect } from 'react';
import MovieCard from '../Components/MovieCard';

const ComingSoon = ( { API_key }) => {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setUpComingMovies(data.results);
      }
    );
  }, []); // Empty dependency array to fetch data only once

 

  const resultHtml = upComingMovies.map((obj, i) => (

    <MovieCard  showReleaseDate={true} movie={obj} key={i} /> 
    
  ))
    

  return (
    <>
      <div>
       
          <Hero text="in Theaters" />
       
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