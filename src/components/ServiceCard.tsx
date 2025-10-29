import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  image,
  href = '#',
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Background */}
      {image && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
          {description}
        </p>

        {/* Link */}
        <a
          href={href}
          className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
