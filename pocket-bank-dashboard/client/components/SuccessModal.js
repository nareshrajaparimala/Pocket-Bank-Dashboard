/**
 * SuccessModal Component
 * Animated popup for successful transfer
 */

'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/lib/currency';

export default function SuccessModal({ isOpen, onClose, transferData }) {
  if (!transferData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <X size={24} />
              </button>

              {/* Success animation */}
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-6"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="text-green-600" size={48} />
                    </motion.div>
                    {/* Confetti effect */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          x: Math.cos((i * Math.PI) / 4) * 60,
                          y: Math.sin((i * Math.PI) / 4) * 60,
                        }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400 rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-gray-900 mb-2"
                >
                  Transfer Successful!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 mb-8"
                >
                  Your money has been sent successfully
                </motion.p>

                {/* Transfer details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="w-full bg-gray-50 rounded-2xl p-6 mb-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-left">
                      <p className="text-sm text-gray-500 mb-1">From</p>
                      <p className="font-semibold text-gray-900">Your Account</p>
                    </div>
                    <ArrowRight className="text-gray-400" size={24} />
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">To</p>
                      <p className="font-semibold text-gray-900">{transferData.recipient}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Amount</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatCurrency(transferData.amount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">New Balance</span>
                      <span className="font-semibold text-green-600">
                        {formatCurrency(transferData.newBalance)}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Action button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
                >
                  Done
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
