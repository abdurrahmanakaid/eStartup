import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section id='hero'>
      <div className='hero-container' data-aos='fade-in'>
        <h1>Welcome to eStartup</h1>
        <h2>
          A startup or start-up is a company or project undertaken by an entrepreneur to seek, develop, and validate a scalable business model. &amp;
          more...
        </h2>
        <img src='assets/img/hero-img.png' alt='Hero Imgs' data-aos='zoom-out' data-aos-delay={100} />
        <Link to='#get-started' className='btn-get-started scrollto'>
          Get Started
        </Link>
        <div className='btns'>
          <Link to='#'>
            <i className='fa fa-apple fa-3x' /> App Store
          </Link>
          <Link to='#'>
            <i className='fa fa-play fa-3x' /> Google Play
          </Link>
          <Link to='#'>
            <i className='fa fa-windows fa-3x' /> windows
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
