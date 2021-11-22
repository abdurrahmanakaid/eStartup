import React from 'react'
import { Link } from 'react-router-dom'

const VideoSection = () => {
  return (
    <section id='video' className='text-center'>
      <div className='overlay'>
        <div className='container-fluid container-full' data-aos='zoom-in'>
          <div className='row'>
            <Link to='https://www.youtube.com/watch?v=jDDaplaOz7Q&feature=emb_title' className='glightbox play-btn' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
