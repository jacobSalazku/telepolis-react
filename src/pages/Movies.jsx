import React from 'react'
import Hero from '../Components/Hero'
import MovieCard from '../Components/MovieCard';
import { useState , useEffect } from 'react';

const Movies = ({ API_key ,  }) => {

    const [Movies,setMovies] = useState([]);

     // filtering query &page=${page}&sort_by=popularity.desc
     
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results) 
        });
    }, [])

    const resultHtml = Movies.map((obj, i) => {
      return <MovieCard showReleaseDate={false} movie={obj} key={i} />
    });

    
  return (
    <>

      <Hero text="Movies" />
      <div className='flex-row-center'>

        { resultHtml }

      </div>  
      
    
    </>
  )
}

export default Movies