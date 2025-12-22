/**
 * TransactionItem Component
 * Single transaction row with icons and animations
 */

'use client';
import { motion } from 'framer-motion';
import { formatCurrency } from '@/lib/currency';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function TransactionItem({ transaction }) {
  const isCredit = transaction.type === 'credit';
  const date = new Date(transaction.date);
  const formattedDate = date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 5 }}
      className="flex justify-between items-center py-4 px-2 border-b last:border-b-0 hover:bg-gray-50 rounded-lg transition"
    >
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-full ${
          isCredit ? 'bg-green-100' : 'bg-red-100'
        }`}>
          {isCredit ? (
            <ArrowDownLeft className="text-green-600" size={20} />
          ) : (
            <ArrowUpRight className="text-red-600" size={20} />
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{transaction.description}</p>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>
      
      <p className={`font-bold text-lg ${
        isCredit ? 'text-green-600' : 'text-red-600'
      }`}>
        {isCredit ? '+' : '-'}{formatCurrency(transaction.amount)}
      </p>
    </motion.div>
  );
}
