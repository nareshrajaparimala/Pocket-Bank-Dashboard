/**
 * BalanceCard Component
 * Displays account balance with gradient and animation
 */

'use client';
import { motion } from 'framer-motion';
import { formatCurrency } from '@/lib/currency';
import { Wallet, TrendingUp } from 'lucide-react';

export default function BalanceCard({ balance }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
      
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <Wallet size={20} className="opacity-90" />
          <p className="text-sm opacity-90 font-medium">Available Balance</p>
        </div>
        <p className="text-5xl font-bold mb-4">{formatCurrency(balance)}</p>
        <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full w-fit">
          <TrendingUp size={16} />
          <span>+12.5% this month</span>
        </div>
      </div>
    </motion.div>
  );
}
