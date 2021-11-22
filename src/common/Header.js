import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <div className='container d-flex align-items-center justify-content-between'>
        <div id='logo'>
          <h1>
            <Link to='index.html'>
              <span>e</span>Startup
            </Link>
          </h1>
         
        </div>
        <nav id='navbar' className='navbar'>
          <ul>
            <li>
              <Link className='nav-link scrollto active' to='#hero'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#about-us'>
                About
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#features'>
                Features
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#screenshots'>
                Screenshots
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#team'>
                Team
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#pricing'>
                Pricing
              </Link>
            </li>
            <li className='dropdown'>
              <Link to='#'>
                <span>Drop Down</span> <i className='bi bi-chevron-down' />
              </Link>
              <ul>
                <li>
                  <Link to='#'>Drop Down 1</Link>
                </li>
                <li className='dropdown'>
                  <Link to='#'>
                    <span>Deep Drop Down</span> <i className='bi bi-chevron-right' />
                  </Link>
                  <ul>
                    <li>
                      <Link to='#'>Deep Drop Down 1</Link>
                    </li>
                    <li>
                      <Link to='#'>Deep Drop Down 2</Link>
                    </li>
                    <li>
                      <Link to='#'>Deep Drop Down 3</Link>
                    </li>
                    <li>
                      <Link to='#'>Deep Drop Down 4</Link>
                    </li>
                    <li>
                      <Link to='#'>Deep Drop Down 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='#'>Drop Down 2</Link>
                </li>
                <li>
                  <Link to='#'>Drop Down 3</Link>
                </li>
                <li>
                  <Link to='#'>Drop Down 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#contact'>
                Contact
              </Link>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle' />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  )
}

export default Header
