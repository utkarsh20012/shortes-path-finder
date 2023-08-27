import React from 'react'
import '../styles/navbar.css';

function Navbar({msg}) {
  return (
    <div style={{ backgroundColor: "rgba(10, 25, 47, 1)", margin: 'auto'}}>
      <nav className="navbar">
        <div>
          <a className='navbarlink' href='/algorithms-visualizer'>
            {msg}
          </a>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;