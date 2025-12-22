/**
 * Dashboard Page
 * Route: /dashboard
 * Displays account balance and recent transactions with animations
 */

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BalanceCard from '@/components/BalanceCard';
import TransactionList from '@/components/TransactionList';
import LoadingSpinner from '@/components/LoadingSpinner';
import { fetchBalance, fetchTransactions } from '@/lib/api';

export default function Dashboard() {
  // State management
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when component mounts
  useEffect(() => {
    loadData();
  }, []);

  /**
   * Load balance and transactions from API
   */
  const loadData = async () => {
    try {
      const [balanceData, transactionsData] = await Promise.all([
        fetchBalance(),
        fetchTransactions()
      ]);
      
      setBalance(balanceData.balance);
      setTransactions(transactionsData.transactions.slice(0, 5));
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Dashboard
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <BalanceCard balance={balance} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <TransactionList transactions={transactions} showFilters={false} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
