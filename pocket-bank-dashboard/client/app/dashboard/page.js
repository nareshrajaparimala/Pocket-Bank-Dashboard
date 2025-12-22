/**
 * Dashboard Page
 * Enhanced with user profile, quick stats, and detailed information
 */

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BalanceCard from '@/components/BalanceCard';
import TransactionList from '@/components/TransactionList';
import LoadingSpinner from '@/components/LoadingSpinner';
import UserProfileCard from '@/components/UserProfileCard';
import QuickStats from '@/components/QuickStats';
import { fetchBalance, fetchTransactions } from '@/lib/api';

export default function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [balanceData, transactionsData] = await Promise.all([
        fetchBalance(),
        fetchTransactions()
      ]);
      
      setBalance(balanceData.balance);
      setTransactions(transactionsData.transactions);
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
        
        {/* User Profile and Balance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <UserProfileCard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <BalanceCard balance={balance} />
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <QuickStats transactions={transactions} />
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <TransactionList transactions={transactions.slice(0, 5)} showFilters={false} />
        </motion.div>
      </div>
    </div>
  );
}
