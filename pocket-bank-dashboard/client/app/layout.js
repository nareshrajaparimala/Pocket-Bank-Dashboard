/**
 * Root Layout Component
 * Wraps all pages with Navbar, NewsRoller, Footer and global styles
 */

import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import NewsRoller from '@/components/NewsRoller';
import Footer from '@/components/Footer';

// Metadata for SEO and browser tab
export const metadata = {
  title: 'Pocket Bank - Your Digital Banking Partner',
  description: 'Experience seamless digital banking with Pocket Bank. Manage transactions, transfer money, and track your finances in real-time.',
};

/**
 * RootLayout - Main layout wrapper for all pages
 * @param {Object} children - Child components (pages)
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navigation bar - appears on all pages */}
        <Navbar />
        
        {/* News Roller - animated ticker */}
        <NewsRoller />
        
        {/* Main content area - page content renders here */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer - appears on all pages */}
        <Footer />
      </body>
    </html>
  );
}
