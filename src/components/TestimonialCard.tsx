import { Star } from 'lucide-react';
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  image,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Rating */}
      {rating > 0 && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-orange-400 text-orange-400"
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
