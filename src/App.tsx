import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { PillarsSection } from './components/PillarsSection';
import { SpacesGallery } from './components/SpacesGallery';
import { QuickAssessment } from './components/QuickAssessment';
import { SocialHub } from './components/SocialHub';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedAssessmentMessage, setSelectedAssessmentMessage] = useState<string>('');

  const handleAssessmentResult = (message: string) => {
    setSelectedAssessmentMessage(message);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Philosophy & Vision */}
        <Philosophy />

        {/* The 4 Pillars of Family Minimalism */}
        <PillarsSection />

        {/* Interactive Spaces & Photography Showcase */}
        <SpacesGallery />

        {/* 1-Minute Interactive Autodiagnosis */}
        <QuickAssessment onSelectResult={handleAssessmentResult} />

        {/* Dedicated Social Media Hub (LinkedIn, YouTube, TikTok, Instagram, Facebook) */}
        <SocialHub />

        {/* Short & Simple Contact Form */}
        <ContactForm initialMessage={selectedAssessmentMessage} />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}
