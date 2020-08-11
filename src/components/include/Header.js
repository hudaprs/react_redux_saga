import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='navbar'>
      <nav className='navbar-container container'>
        <h3>Todo React Saga</h3>
        <ul className='nav-item'>
          <li className='nav-item-link'>
            <Link to='#!'>Home</Link>
          </li>
          <li className='nav-item-link'>
            <Link to='#!'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
