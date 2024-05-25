import React from 'react';
import HeroSection from './HeroSection';
import Header from '../../components/ui/Header/Header';
import FooterComponent from '../../components/ui/Footer/FooterComponent';
import CountDisplaySection from './CountDisplaySection';
import './Landingpage.css'
import ExploreCategorySection from './ExploreCategorySection';
import AboutUsSection from './AboutUsSection';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFish } from '@fortawesome/free-solid-svg-icons';

export default function LandingPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CountDisplaySection totalCount={[200, 5000]} />
      <ExploreCategorySection />
      <AboutUsSection />
      <FooterComponent />
    </main>
  )
}