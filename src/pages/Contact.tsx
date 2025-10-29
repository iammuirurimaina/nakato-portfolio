import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Contact"
        description="Let's discuss your project and create something amazing together."
        fullHeight={false}
      />

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
