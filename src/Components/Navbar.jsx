import React  from "react";
import { Link }  from 'react-router-dom'

 const Navbar = () => {
  return (

      <div className=" flex nav">
        <Link to="/">Home</Link>
        <Link to="/coming-soon">Coming Soon</Link>
      </div>
  );
}

export default Navbar;