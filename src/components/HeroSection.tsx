import type { ReactNode } from 'react';
import { ArrowDown } from 'lucide-react';
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
  fullHeight?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  children,
  fullHeight = true,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${fullHeight ? 'min-h-screen' : 'py-20'} flex items-center justify-center`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          {subtitle && (
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
              {subtitle}
            </p>
          )}

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {title}
          </h1>

          {description && (
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
              {description}
            </p>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-block text-center"
                >
                  {primaryCTA.label}
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 inline-block text-center"
                >
                  {secondaryCTA.label}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right Content (Image or Custom) */}
        {children && <div className="flex-1 hidden lg:block">{children}</div>}
      </div>

      {/* Scroll Indicator */}
      {fullHeight && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      )}
    </section>
  );
}
