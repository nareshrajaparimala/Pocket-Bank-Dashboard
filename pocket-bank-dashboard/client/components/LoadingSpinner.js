/**
 * LoadingSpinner Component
 * Enhanced animated spinner with logo
 */

'use client';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Wallet className="text-blue-600" size={24} />
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-gray-600 font-medium"
      >
        Loading...
      </motion.p>
    </div>
  );
}
