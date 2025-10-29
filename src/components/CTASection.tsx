import React from "react";

interface CTASectionProps {
    title: string;
    description?: string;
    primaryCTA: {
      label: string;
      href: string;
    };
    secondaryCTA?: {
      label: string;
      href: string;
    };
    isDark?: boolean;
  }
  
  export default function CTASection({
    title,
    description,
    primaryCTA,
    secondaryCTA,
    isDark = false,
  }: CTASectionProps) {
    return (
      <section
        className={`py-16 md:py-24 ${
          isDark
            ? 'bg-gray-900 text-white'
            : 'bg-gradient-to-r from-orange-50 to-orange-100'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h2>
  
          {description && (
            <p
              className={`text-lg mb-10 max-w-2xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {description}
            </p>
          )}
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryCTA.href}
              className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-block ${
                isDark
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}
            >
              {primaryCTA.label}
            </a>
            {secondaryCTA && (
              <a
                href={secondaryCTA.href}
                className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 inline-block ${
                  isDark
                    ? 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                    : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {secondaryCTA.label}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }
  