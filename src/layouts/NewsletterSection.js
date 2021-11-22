import React from 'react'
import { Link } from 'react-router-dom'

const NewsletterSection = () => {
  return (
    <section id='newsletter' className='newsletter text-center'>
      <div className='overlay padd-section'>
        <div className='container' data-aos='zoom-in'>
          <div className='row justify-content-center'>
            <div className='col-md-9 col-lg-6'>
              <form className='d-flex'>
                <input type='email' className='form-control ' placeholder='Email Adress' name='email' />
                <button type='submit' className='btn btn-default'>
                  <i className='bi bi-location-arrow' />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <ul className='list-unstyled'>
            <li>
              <Link to='#'>
                <i className='bi bi-facebook' />
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='bi bi-twitter' />
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='bi bi-instagram' />
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='bi bi-linkedin' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
