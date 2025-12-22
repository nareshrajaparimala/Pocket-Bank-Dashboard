/**
 * Footer Component
 * Professional footer with background text effect and company links
 */

'use client';
import Link from 'next/link';
import Logo from './Logo';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background Text Effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="text-[20vw] font-bold whitespace-nowrap">
          POCKET BANK
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Logo size="md" />
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Your trusted digital banking partner. Experience seamless transactions, 
              real-time updates, and secure money management at your fingertips.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition">
                <Github size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link href="/dashboard" className="text-gray-300 hover:text-white transition">Dashboard</Link></li>
              <li><Link href="/transactions" className="text-gray-300 hover:text-white transition">Transactions</Link></li>
              <li><Link href="/transfer" className="text-gray-300 hover:text-white transition">Transfer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <span>support@pocketbank.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} Pocket Bank. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
