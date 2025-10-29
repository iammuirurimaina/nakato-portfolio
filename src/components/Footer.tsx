import { Mail, Instagram, Twitter, Linkedin, Music } from 'lucide-react';
import React from 'react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Music, href: '#', label: 'SoundCloud' },
  ];

  const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Store', href: '/store' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                N
              </div>
              <div>
                <p className="font-bold text-white text-sm">NAKATO</p>
                <p className="text-xs text-gray-400">Creative Hub</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting visual stories through art, design, and music.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Graphic Design</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Photography</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Music Production</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Branding</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Get in Touch</h3>
            <a
              href="mailto:hello@nakato.com"
              className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm mb-4"
            >
              <Mail className="w-4 h-4" />
              hello@nakato.com
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} Nakato Creative Hub. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
