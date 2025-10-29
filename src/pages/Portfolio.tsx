import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import PortfolioCard from '../components/PortfolioCard';
import CTASection from '../components/CTASection';
import React from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: '1',
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      tags: ['Branding', 'Logo', 'Identity'],
      filter: 'design',
    },
    {
      id: '2',
      title: 'Product Photography',
      category: 'Photography',
      image:
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=600&fit=crop',
      tags: ['Product', 'Commercial'],
      filter: 'photography',
    },
    {
      id: '3',
      title: 'Music Album Cover',
      category: 'Design',
      image:
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop',
      tags: ['Music', 'Album Art'],
      filter: 'music',
    },
    {
      id: '4',
      title: 'Portrait Session',
      category: 'Photography',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      tags: ['Portrait', 'Professional'],
      filter: 'photography',
    },
    {
      id: '5',
      title: 'Web Design Mockup',
      category: 'Graphic Design',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      tags: ['Web', 'UI/UX'],
      filter: 'design',
    },
    {
      id: '6',
      title: 'Event Photography',
      category: 'Photography',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop',
      tags: ['Event', 'Live'],
      filter: 'photography',
    },
    {
      id: '7',
      title: 'Music Production',
      category: 'Music',
      image:
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop',
      tags: ['Production', 'Audio'],
      filter: 'music',
    },
    {
      id: '8',
      title: 'Packaging Design',
      category: 'Graphic Design',
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
      tags: ['Packaging', 'Brand'],
      filter: 'design',
    },
  ];

  const filters = [
    { label: 'All Work', value: 'all' },
    { label: 'Graphic Design', value: 'design' },
    { label: 'Photography', value: 'photography' },
    { label: 'Music', value: 'music' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Portfolio"
        subtitle="My Work"
        description="A curated collection of recent projects showcasing creativity, technical excellence, and diverse expertise."
        fullHeight={false}
      />

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.image}
                tags={item.tags}
                href={`/portfolio/${item.id}`}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-5xl font-bold text-orange-400 mb-2">50+</p>
              <p className="text-lg text-gray-300">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-400 mb-2">30+</p>
              <p className="text-lg text-gray-300">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-400 mb-2">8+</p>
              <p className="text-lg text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Interested in Working Together?"
        description="Let's create something amazing. Contact me to discuss your project."
        primaryCTA={{
          label: 'Get in Touch',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'View Services',
          href: '/services',
        }}
        isDark={true}
      />

      <Footer />
    </div>
  );
}
