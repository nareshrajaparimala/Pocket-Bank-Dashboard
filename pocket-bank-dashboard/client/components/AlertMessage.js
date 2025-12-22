/**
 * AlertMessage Component
 * Enhanced success/error messages with animations
 */

'use client';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

export default function AlertMessage({ type, message }) {
  const isSuccess = type === 'success';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-3 border-l-4 p-4 mb-4 rounded-r-lg ${
        isSuccess
          ? 'bg-green-50 border-green-500 text-green-800'
          : 'bg-red-50 border-red-500 text-red-800'
      }`}
    >
      {isSuccess ? (
        <CheckCircle size={20} className="flex-shrink-0" />
      ) : (
        <XCircle size={20} className="flex-shrink-0" />
      )}
      <p className="font-medium">{message}</p>
    </motion.div>
  );
}
