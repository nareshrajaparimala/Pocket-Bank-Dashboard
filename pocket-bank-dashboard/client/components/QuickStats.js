/**
 * QuickStats Component
 * Displays quick statistics and metrics
 */

'use client';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

export default function QuickStats({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'debit')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const transactionCount = transactions.length;
  const avgTransaction = transactionCount > 0 ? (totalIncome + totalExpenses) / transactionCount : 0;

  const stats = [
    {
      label: 'Total Income',
      value: `$${totalIncome.toLocaleString()}`,
      icon: <TrendingUp size={24} />,
      color: 'green',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      label: 'Total Expenses',
      value: `$${totalExpenses.toLocaleString()}`,
      icon: <TrendingDown size={24} />,
      color: 'red',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600'
    },
    {
      label: 'Transactions',
      value: transactionCount,
      icon: <Activity size={24} />,
      color: 'blue',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      label: 'Avg Transaction',
      value: `$${avgTransaction.toFixed(0)}`,
      icon: <DollarSign size={24} />,
      color: 'purple',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-lg p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`${stat.bgColor} ${stat.textColor} p-2 rounded-lg`}>
              {stat.icon}
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
          <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
