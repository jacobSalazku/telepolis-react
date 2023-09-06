import React from 'react'
import Hero from '../Components/Hero'

 // API_KEY = 'cb8b5baf6bfe0c3929a841b05a0f27e4'
 // movies in theaters 'https://api.themoviedb.org/3/movie/now_playing
// movie details example https://api.themoviedb.org/3/movie/{movie_id}
// exapmle link searches ''
const SearchView = ({ keyword , searchResults, }) => {

  const title  = `You are searching for ${keyword}`
  const notFound =`${keyword} is not found`
  const resultHtml   = searchResults.map((obj,i) => {
   
    return <div key ={i}>{obj.original_title}</div>
  
    });
   
  if(searchResults.length === 0){
    return (

    <>
      <Hero text={notFound} />
      
      </> 
    )
  }   

  return (
    <>
      <Hero text ={title}/>
    
        
        {resultHtml}
       
    
    </>
  )
}

export default SearchView