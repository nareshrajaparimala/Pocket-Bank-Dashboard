/**
 * FilterTabs Component
 * Enhanced filter buttons with animations
 */

'use client';
import { motion } from 'framer-motion';
import { FILTER_TYPES } from '@/lib/constants';
import { List, TrendingUp, TrendingDown } from 'lucide-react';

export default function FilterTabs({ activeFilter, onFilterChange }) {
  const filters = [
    { id: FILTER_TYPES.ALL, label: 'All', icon: <List size={16} /> },
    { id: FILTER_TYPES.INCOME, label: 'Income', icon: <TrendingUp size={16} /> },
    { id: FILTER_TYPES.EXPENSES, label: 'Expenses', icon: <TrendingDown size={16} /> }
  ];

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {filters.map(filter => (
        <motion.button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition ${
            activeFilter === filter.id
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter.icon}
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
}
