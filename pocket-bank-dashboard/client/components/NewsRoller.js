/**
 * NewsRoller Component
 * Animated rolling news ticker for latest updates
 */

'use client';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function NewsRoller() {
  const news = [
    "🎉 New Feature: Instant transfers now available!",
    "🔒 Enhanced security with 2FA authentication",
    "💳 Virtual cards coming soon",
    "📱 Mobile app launching next month",
    "🌟 Rated #1 Digital Bank 2025"
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-3 overflow-hidden">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 bg-white/20 py-1 rounded-full ml-4">
          <Sparkles size={16} className="animate-pulse" />
          <span className="font-semibold text-sm">LATEST</span>
        </div>
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: [0, -1000]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...news, ...news].map((item, index) => (
            <span key={index} className="text-sm font-medium">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
