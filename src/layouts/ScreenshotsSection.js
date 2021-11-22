import React from 'react'

const ScreenshotsSection = () => {
  return (
    <section id='screenshots' className='padd-section text-center'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title text-center'>
          <h2>App Gallery</h2>
          <p className='separator'>Integer cursus bibendum augue ac cursus .</p>
        </div>
        <div className='screens-slider swiper'>
          <div className='swiper-wrapper align-items-center'>
            <div className='swiper-slide'>
              <img src='assets/img/screen/1.jpg' className='img-fluid' alt='slider' />
            </div>
            <div className='swiper-slide'>
              <img src='assets/img/screen/2.jpg' className='img-fluid' alt='slider' />
            </div>
            <div className='swiper-slide'>
              <img src='assets/img/screen/3.jpg' className='img-fluid' alt='slider' />
            </div>
            <div className='swiper-slide'>
              <img src='assets/img/screen/4.jpg' className='img-fluid' alt='slider' />
            </div>
            <div className='swiper-slide'>
              <img src='assets/img/screen/5.jpg' className='img-fluid' alt='slider' />
            </div>
            <div className='swiper-slide'>
              <img src='assets/img/screen/6.jpg' className='img-fluid' alt='slider' />
            </div>
            <div className='swiper-slide'>
              <img src='assets/img/screen/7.jpg' className='img-fluid' alt='slider' />
            </div>
            <div className='swiper-slide'>
              <img src='assets/img/screen/8.jpg' className='img-fluid' alt='slider' />
            </div>
          </div>
          <div className='swiper-pagination' />
        </div>
      </div>
    </section>
  )
}

export default ScreenshotsSection
