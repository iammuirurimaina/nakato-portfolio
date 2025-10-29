import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import React from 'react';

interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

export default function Store() {
  const [cart, setCart] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const products: Product[] = [
    {
      id: '1',
      title: 'Digital Design Pack',
      category: 'Digital Products',
      price: 49.99,
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      description: 'Complete digital design templates and assets',
      rating: 4.8,
    },
    {
      id: '2',
      title: 'Photography Presets',
      category: 'Digital Products',
      price: 29.99,
      image:
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop',
      description: 'Professional Lightroom and Capture One presets',
      rating: 4.9,
    },
    {
      id: '3',
      title: 'Music Production Kit',
      category: 'Digital Products',
      price: 79.99,
      image:
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
      description: 'Royalty-free samples, loops, and sound effects',
      rating: 4.7,
    },
    {
      id: '4',
      title: 'Branding Guide Template',
      category: 'Templates',
      price: 39.99,
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      description: 'Professional brand guidelines template',
      rating: 4.8,
    },
    {
      id: '5',
      title: 'Portfolio Website Template',
      category: 'Templates',
      price: 59.99,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      description: 'Modern portfolio website template',
      rating: 4.9,
    },
    {
      id: '6',
      title: 'Social Media Templates',
      category: 'Templates',
      price: 34.99,
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop',
      description: 'Ready-to-use social media design templates',
      rating: 4.6,
    },
    {
      id: '7',
      title: 'Video Editing Presets',
      category: 'Digital Products',
      price: 44.99,
      image:
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
      description: 'Professional video editing presets and effects',
      rating: 4.7,
    },
    {
      id: '8',
      title: 'Font Bundle',
      category: 'Digital Products',
      price: 24.99,
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      description: 'Curated collection of premium fonts',
      rating: 4.8,
    },
  ];

  const toggleCart = (id: string) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const cartTotal = products
    .filter((p) => cart.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Creative Store"
        subtitle="Digital Products & Templates"
        description="High-quality digital products, templates, and resources to enhance your creative projects."
        fullHeight={false}
      />

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-orange-600 hover:text-white transition-all duration-300"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id)
                          ? 'fill-current text-red-600'
                          : ''
                      }`}
                    />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(product.rating)
                              ? 'text-orange-400'
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() => toggleCart(product.id)}
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        cart.includes(product.id)
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-orange-600 hover:text-white'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Summary */}
      {cart.length > 0 && (
        <section className="sticky bottom-0 bg-white border-t border-gray-200 py-4 shadow-lg">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                {cart.length} item{cart.length !== 1 ? 's' : ''} in cart
              </p>
              <p className="text-2xl font-bold text-gray-900">
                ${cartTotal.toFixed(2)}
              </p>
            </div>
            <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
              Checkout
            </button>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Instant Download
              </h3>
              <p className="text-gray-600">
                Get immediate access to all digital products after purchase.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                Safe and secure checkout with multiple payment options.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Support
              </h3>
              <p className="text-gray-600">
                Dedicated support for any questions about your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Custom Products?"
        description="Can't find what you're looking for? Let's create custom solutions for your needs."
        primaryCTA={{
          label: 'Contact Me',
          href: '/contact',
        }}
        isDark={true}
      />

      <Footer />
    </div>
  );
}
