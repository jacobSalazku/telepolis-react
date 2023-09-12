import React  from "react";
import { Link }  from 'react-router-dom'

 const Navbar = () => {
  return (

      <div className=" flex nav">
        <Link to="/">Home</Link>
        <Link to="/in-theaters">In Theaters  </Link>
        <Link to="/movies">Movies</Link>
      </div>
  );
}

export default Navbar;