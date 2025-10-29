import { useState } from 'react';
import { X } from 'lucide-react';
import React from 'react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
  showLightbox?: boolean;
}

export default function ImageGallery({
  images,
  columns = 3,
  showLightbox = true,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-3';

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${gridColsClass} gap-6`}>
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square cursor-pointer"
            onClick={() => showLightbox && setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              {image.title && (
                <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </h3>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {showLightbox && selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />

            {/* Caption */}
            {selectedImage.title && (
              <div className="bg-black/80 text-white p-4 text-center">
                <h3 className="text-lg font-bold">{selectedImage.title}</h3>
              </div>
            )}

            {/* Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {images.indexOf(selectedImage) + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
