import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Search-bar'

const Header = ({ searchText, setSearchText }) => {
  return (
    
    <div className='flex-row header'>
        <Navbar/>
        <Searchbar 
        searchText={searchText} 
        setSearchText={setSearchText} 
        />
    </div>
  )
}

export default Header
