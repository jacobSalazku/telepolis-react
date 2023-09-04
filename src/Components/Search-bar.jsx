import React from 'react'
import Button from './Button';

const Searchbar = ( { searchText , setSearchText }) => {

  const updateSearchText = (e) => {
    const newValue = e.target.value
    setSearchText(newValue);
    }
    return (
  
     <div className='search flex-row'>
        <div className="search-bar">
            <input 
            type="text"
             className="search-input" 
             placeholder="Search..."
             value={searchText}
             onChange={updateSearchText} 
            />
          </div>
          <div >
            <Button text="Search"  className="custom-button white"/>
          </div>
      </div>
    );
  };

export default Searchbar;