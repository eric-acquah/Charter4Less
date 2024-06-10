import React from 'react';
import HeroSection from './HeroSection';
import FooterComponent from '../../components/ui/Footer/FooterComponent';
import CountDisplaySection from './CountDisplaySection';
import './Landingpage.css'
import ExploreCategorySection from './ExploreCategorySection';
import AboutUsSection from './AboutUsSection';
import ReviewSection from './ReviewSection';
import FeedBackSection from './FeedBackSection';
import NavbarComponent from '../../components/ui/Navbar/NavbarComponent';


export default function LandingPage() {
  return (
    <main>
      <NavbarComponent />
      <HeroSection />
      <CountDisplaySection totalCount={[200, 5000]} />
      <ExploreCategorySection />
      <AboutUsSection />
      <ReviewSection />
      <FeedBackSection />
      <FooterComponent />
    </main>
  )
}