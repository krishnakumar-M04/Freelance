import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
          <div className='header'>
              <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/products">Product</NavLink></li>
              </ul>
        </div>
    </>
  )
}

export default Header
