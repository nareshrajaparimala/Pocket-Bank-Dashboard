/**
 * TransactionList Component
 * Enhanced transaction list with filtering and animations
 */

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TransactionItem from './TransactionItem';
import FilterTabs from './FilterTabs';
import { FILTER_TYPES } from '@/lib/constants';
import { Receipt } from 'lucide-react';

export default function TransactionList({ transactions, showFilters = true }) {
  const [activeFilter, setActiveFilter] = useState(FILTER_TYPES.ALL);

  const filteredTransactions = transactions.filter(t => {
    if (activeFilter === FILTER_TYPES.INCOME) return t.type === 'credit';
    if (activeFilter === FILTER_TYPES.EXPENSES) return t.type === 'debit';
    return true;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Receipt className="text-blue-600" size={28} />
        Transactions
      </h2>
      
      {showFilters && (
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      )}
      
      <div className="space-y-2">
        {filteredTransactions.length === 0 ? (
          <p className="text-gray-500 text-center py-12">No transactions found</p>
        ) : (
          filteredTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TransactionItem transaction={transaction} />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
