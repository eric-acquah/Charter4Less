import React from 'react';
import HeroSection from './HeroSection';
import Header from '../../components/ui/Header/Header';
import FooterComponent from '../../components/ui/Footer/FooterComponent';

export default function LandingPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FooterComponent />
    </main>
  )
}