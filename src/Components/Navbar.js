import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect( ()=> {
    setExpandNavbar(false)
  }, [location]);

  return (
    <div className='navbar' id= {expandNavbar ? "open" : "close"}>
      <div className='togglebutton'>
        <button onClick={()=> {setExpandNavbar((prev) => !prev)}}>
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
          <Link to='/'> Home </Link>
          <Link to='/about'> About </Link>
          <Link to='/skills'> Skills </Link>
          <Link to='/education'> Education </Link>
          <Link to='/contact'> Contact </Link>
      </div>
    </div>
  )
}

export default Navbar
