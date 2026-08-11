import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Calculator } from './components/Calculator';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { MealPlanPreview } from './components/MealPlanPreview';
import { AboutDoctor } from './components/AboutDoctor';
import { BookingSection } from './components/BookingSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-200 selection:text-purple-900 antialiased">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Calculator />
        <Services />
        <Methodology />
        <Testimonials />
        <MealPlanPreview />
        <AboutDoctor />
        <BookingSection />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
