import { Palette, Camera, Music, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import CTASection from '../components/CTASection';
import TestimonialCard from '../components/TestimonialCard';
import React from 'react';


import heroBg from '../assets/hero.jpg';



export default function Home() {
  const services = [
    {
      title: 'Graphic Design',
      description:
        'Creative visual solutions for branding, marketing, and digital design. From logos to complete brand identities.',
      icon: <Palette className="w-6 h-6" />,
    },
    {
      title: 'Photography',
      description:
        'Professional photography services capturing moments and products with artistic vision and technical excellence.',
      icon: <Camera className="w-6 h-6" />,
    },
    {
      title: 'Music Production',
      description:
        'Original music composition and production for various genres. From concept to final mastered track.',
      icon: <Music className="w-6 h-6" />,
    },
  ];

  const featuredWorks = [
    {
      id: '1',
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      tags: ['Branding', 'Logo', 'Identity'],
    },
    {
      id: '2',
      title: 'Product Photography',
      category: 'Photography',
      image:
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop',
      tags: ['Product', 'Commercial'],
    },
    {
      id: '3',
      title: 'Music Album Cover',
      category: 'Design',
      image:
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
      tags: ['Music', 'Album Art'],
    },
    {
      id: '4',
      title: 'Portrait Session',
      category: 'Photography',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      tags: ['Portrait', 'Professional'],
    },
  ];

  const testimonials = [
    {
      quote:
        'Nakato transformed our brand vision into reality. The design work was exceptional and exceeded our expectations.',
      author: 'Sarah Johnson',
      role: 'CEO, Creative Agency',
      rating: 5,
    },
    {
      quote:
        'Professional, creative, and easy to work with. The photography session captured the essence of our products perfectly.',
      author: 'Michael Chen',
      role: 'Founder, E-commerce Brand',
      rating: 5,
    },
    {
      quote:
        'The music production quality is outstanding. Nakato brought our vision to life with incredible attention to detail.',
      author: 'Emma Davis',
      role: 'Music Producer',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Hi I'm Nakato"
        subtitle="Creative Designer, Photographer & Musician"
        description="Crafting visual stories and sonic experiences. Specializing in graphic design, professional photography, and music production."
        primaryCTA={{
          label: 'Explore My Work',
          href: '/portfolio',
        }}
        secondaryCTA={{
          label: 'Get in Touch',
          href: '/contact',
        }}
        backgroundImage={heroBg}
      />

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              What I Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive range of creative services tailored to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of recent projects showcasing creativity and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredWorks.map((work) => (
              <PortfolioCard
                key={work.id}
                title={work.title}
                category={work.category}
                image={work.image}
                tags={work.tags}
                href={`/portfolio/${work.id}`}
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/portfolio"
              className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Client Feedback
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's collaborate to bring your creative vision to life. Get in touch today."
        primaryCTA={{
          label: 'Contact Me',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'View Portfolio',
          href: '/portfolio',
        }}
        isDark={true}
      />

      <Footer />
    </div>
  );
}
