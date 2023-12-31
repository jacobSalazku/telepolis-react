import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Search-bar'
import Logo from './Logo'

const Header = ({ searchText, setSearchText }) => {
  return (
    
    <div className='flex-row header'>
        <Logo/>
        <Navbar/>
        <Searchbar 
        searchText={searchText} 
        setSearchText={setSearchText} 
        />
    </div>
  )
}

export default Header
