import React from 'react'
import { Link } from 'react-router-dom'

const BlogSection = () => {
  return (
    <section id='blog' className='padd-sectio'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title text-center'>
          <h2>Latest posts</h2>
          <p className='separator'>Integer cursus bibendum augue ac cursus .</p>
        </div>
        <div className='row' data-aos='fade-up' data-aos-delay={100}>
          <div className='col-md-6 col-lg-4'>
            <div className='block-blog text-left'>
              <Link to='#'>
                <img src='assets/img/blog/blog-image-1.jpg' alt='img' />
              </Link>
              <div className='content-blog'>
                <h4>
                  <Link to='#'>whats isthe difference between good and bat typography</Link>
                </h4>
                <span>05, juin 2017</span>
                <Link className='float-end readmore' to='#'>
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='block-blog text-left'>
              <Link to='#'>
                <img src='assets/img/blog/blog-image-2.jpg' className='img-responsive' alt='img' />
              </Link>
              <div className='content-blog'>
                <h4>
                  <Link to='#'>whats isthe difference between good and bat typography</Link>
                </h4>
                <span>05, juin 2017</span>
                <Link className='float-end readmore' to='#'>
                  read more
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='block-blog text-left'>
              <Link to='#'>
                <img src='assets/img/blog/blog-image-3.jpg' className='img-responsive' alt='img' />
              </Link>
              <div className='content-blog'>
                <h4>
                  <Link to='#'>whats isthe difference between good and bat typography</Link>
                </h4>
                <span>05, juin 2017</span>
                <Link className='float-end readmore' to='#'>
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
