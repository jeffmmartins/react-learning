import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <nav>
           <Link to="/">Home</Link>
           <Link to="/sobre">Sobre</Link>
           <Outlet/>
        </nav>
      </header>
    </div>
  )
}

export default Header
