/**
 * Transactions Page
 * Route: /transactions
 * Full transaction history with filtering and animations
 */

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TransactionList from '@/components/TransactionList';
import LoadingSpinner from '@/components/LoadingSpinner';
import { fetchTransactions } from '@/lib/api';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await fetchTransactions();
      setTransactions(data.transactions);
    } catch (error) {
      console.error('Error loading transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          All Transactions
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <TransactionList transactions={transactions} />
        </motion.div>
      </div>
    </div>
  );
}
