import React from 'react';
import HeroSection from './HeroSection';
import Header from '../../components/ui/Header/Header';
import FooterComponent from '../../components/ui/Footer/FooterComponent';
import './Landingpage.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFish } from '@fortawesome/free-solid-svg-icons';

export default function LandingPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FooterComponent />
    </main>
  )
}