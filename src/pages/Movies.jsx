import React from 'react'
import Hero from '../Components/Hero'
import { useState , useEffect } from 'react';

const Movies = ({ API_key }) => {

    const [Movies,setMovies] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results) 
        });
    }, [])

    
  return (
    
    <Hero text="Movies" />
    
  )
}

export default Movies