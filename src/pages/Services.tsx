import { Palette, Camera, Music, Sparkles, Zap, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import React from 'react';

export default function Services() {
  const mainServices = [
    {
      title: 'Graphic Design',
      description:
        'From concept to final execution, I create stunning visual designs that communicate your brand message effectively.',
      icon: <Palette className="w-6 h-6" />,
      details: [
        'Logo & Brand Identity Design',
        'Marketing Materials & Collateral',
        'UI/UX Design for Web & Mobile',
        'Print Design (Brochures, Posters, Packaging)',
        'Illustration & Custom Graphics',
        'Social Media Design & Content',
      ],
    },
    {
      title: 'Photography',
      description:
        'Professional photography services that capture the essence of your subject with artistic vision and technical excellence.',
      icon: <Camera className="w-6 h-6" />,
      details: [
        'Portrait Photography',
        'Product Photography & Styling',
        'Event Photography',
        'Commercial Photography',
        'Photo Retouching & Editing',
        'Color Grading & Post-Processing',
      ],
    },
    {
      title: 'Music Production',
      description:
        'Original music composition and production services for various genres and purposes, from concept to final mastered track.',
      icon: <Music className="w-6 h-6" />,
      details: [
        'Music Composition & Arrangement',
        'Beat Production & Instrumentals',
        'Audio Engineering & Recording',
        'Mixing & Mastering',
        'Sound Design & Effects',
        'Podcast & Voice-Over Production',
      ],
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your vision, goals, and requirements through detailed consultation.',
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Creating initial concepts and mood boards to align on direction and style.',
    },
    {
      number: '03',
      title: 'Design & Creation',
      description: 'Bringing concepts to life with meticulous attention to detail and quality.',
    },
    {
      number: '04',
      title: 'Refinement',
      description: 'Incorporating feedback and making revisions to perfect the final product.',
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Providing final files in all necessary formats and formats for your needs.',
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing support and assistance after project completion.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Services"
        subtitle="What I Offer"
        description="Comprehensive creative services designed to elevate your brand and bring your vision to life."
        fullHeight={false}
      />

      {/* Main Services */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Icon/Image */}
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center">
                    <div className="text-orange-600">{service.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Creative Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure every project exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-white p-8 rounded-lg h-full hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-orange-200 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-12 md:p-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Flexible Pricing & Packages
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I offer flexible pricing options tailored to your budget and project scope. Whether you need a single service or a comprehensive package, I can create a solution that works for you.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Starter</h3>
                  <p className="text-gray-600 text-sm">Perfect for small projects and individuals</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Professional</h3>
                  <p className="text-gray-600 text-sm">Ideal for growing businesses and brands</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-600 text-sm">Custom solutions for large-scale projects</p>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss your project and create something amazing together."
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
