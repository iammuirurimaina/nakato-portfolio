import { useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';
import React from 'react';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  description?: string;
  href?: string;
  tags?: string[];
}

export default function PortfolioCard({
  title,
  category,
  image,
  description,
  href = '#',
  tags = [],
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Content */}
        <div className="text-center text-white transform transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-orange-400 font-semibold text-sm mb-4">{category}</p>

          {description && (
            <p className="text-gray-200 text-sm mb-6 max-w-xs">{description}</p>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-600/30 border border-orange-400 rounded-full text-xs text-orange-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <button className="p-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors">
              <Eye className="w-5 h-5" />
            </button>
            <a
              href={href}
              className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white group-hover:translate-y-full transition-transform duration-300">
        <p className="font-bold text-sm">{title}</p>
        <p className="text-xs text-gray-300">{category}</p>
      </div>
    </div>
  );
}
