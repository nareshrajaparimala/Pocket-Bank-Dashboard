/**
 * Navbar Component
 * Enhanced navigation with logo and modern styling
 */

import Link from 'next/link';
import Logo from './Logo';
import { LayoutDashboard, Receipt, Send } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/">
            <Logo size="md" />
          </Link>
          
          {/* Navigation Links */}
          <div className="flex gap-2">
            {/* Dashboard Link */}
            <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <LayoutDashboard size={18} />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
            
            {/* Transactions Link */}
            <Link href="/transactions" className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <Receipt size={18} />
              <span className="hidden sm:inline">Transactions</span>
            </Link>
            
            {/* Transfer Link - Primary action button */}
            <Link href="/transfer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition shadow-lg">
              <Send size={18} />
              <span className="hidden sm:inline">Transfer</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
