import React from 'react';
import Hero from '../Components/Hero';
import MovieCard from '../Components/MovieCard';

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const notFound =`${keyword} is not found`
  const resultHtml = searchResults.map((obj, i) => {
    return <MovieCard showReleaseDate={false} movie={obj} key={i} />
});
 
  return (
    <>
      <Hero text={title} />
        <div className='flex-row-center'>
            { searchResults.length===0? <div> <h1>{notFound}</h1></div> : resultHtml }
        </div>
    </>
  );
};

export default SearchView;