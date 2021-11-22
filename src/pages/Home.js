import React from 'react'
import AboutUsSection from '../layouts/AboutUsSection'
import BlogSection from '../layouts/BlogSection'
import ContactSection from '../layouts/ContactSection'
import FeaturesSection from '../layouts/FeaturesSection'
import GetStartedSection from '../layouts/GetStartedSection'
import HeroSection from '../layouts/HeroSection'
import NewsletterSection from '../layouts/NewsletterSection'
import PricingSection from '../layouts/PricingSection'
import ScreenshotsSection from '../layouts/ScreenshotsSection'
import TeamSection from '../layouts/TeamSection'
import TestimonialsSection from '../layouts/TestimonialsSection'
import VideoSection from '../layouts/VideoSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <main id='main'>
        <GetStartedSection />
        <AboutUsSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <VideoSection />
        <TeamSection />
        <TestimonialsSection />
        <PricingSection />
        <BlogSection />
        <NewsletterSection />
        <ContactSection />
      </main>
    </>
  )
}

export default Home
