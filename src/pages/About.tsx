import { Award, Users, Zap, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import React from 'react';


import aboutImg from '../assets/nakato.png';



export default function About() {
  const stats = [
    {
      number: '50+',
      label: 'Projects Completed',
      icon: <Target className="w-8 h-8" />,
    },
    {
      number: '30+',
      label: 'Happy Clients',
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: '8+',
      label: 'Years Experience',
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: '100%',
      label: 'Dedication',
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  const skills = [
    {
      category: 'Graphic Design',
      items: ['Logo Design', 'Branding', 'UI/UX Design', 'Print Design', 'Illustration'],
    },
    {
      category: 'Photography',
      items: ['Portrait Photography', 'Product Photography', 'Event Photography', 'Retouching', 'Color Grading'],
    },
    {
      category: 'Music Production',
      items: ['Music Composition', 'Audio Engineering', 'Mixing & Mastering', 'Sound Design', 'Beat Production'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="About Nakato"
        subtitle="Get to Know Me"
        description="A creative professional dedicated to delivering exceptional work across multiple disciplines."
        fullHeight={false}
      />

      {/* About Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutImg}
                alt="Nakato"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Creative Visionary & Multi-Talented Artist
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I'm Nakato, a passionate creative professional with expertise in graphic design, photography, and music production. My journey began with a simple belief: great design and creativity can transform ideas into reality.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 8 years of experience, I've had the privilege of working with diverse clients ranging from startups to established brands. Each project is an opportunity to push creative boundaries and deliver exceptional results.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My approach combines artistic vision with technical expertise, ensuring that every project not only looks beautiful but also achieves its intended purpose. I'm committed to understanding my clients' needs and exceeding their expectations.
              </p>

              <div className="flex gap-4">
                <a
                  href="/portfolio"
                  className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-y border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-orange-600">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive skill set developed through years of practice and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Create Something Amazing Together"
        description="I'm always interested in hearing about new projects and opportunities."
        primaryCTA={{
          label: 'Start a Project',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'Download Resume',
          href: '#',
        }}
        isDark={true}
      />

      <Footer  />
    </div>
  );
}
