/**
 * Transactions Page
 * Enhanced with search and advanced filtering
 */

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TransactionList from '@/components/TransactionList';
import LoadingSpinner from '@/components/LoadingSpinner';
import SearchAndFilter from '@/components/SearchAndFilter';
import { fetchTransactions } from '@/lib/api';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await fetchTransactions();
      setTransactions(data.transactions);
      setFilteredTransactions(data.transactions);
    } catch (error) {
      console.error('Error loading transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = ({ searchTerm, dateRange, amountRange }) => {
    let filtered = [...transactions];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(t =>
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Date range filter
    if (dateRange !== 'all') {
      const now = new Date();
      filtered = filtered.filter(t => {
        const transDate = new Date(t.date);
        switch (dateRange) {
          case 'today':
            return transDate.toDateString() === now.toDateString();
          case 'week':
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            return transDate >= weekAgo;
          case 'month':
            return transDate.getMonth() === now.getMonth() && transDate.getFullYear() === now.getFullYear();
          case 'year':
            return transDate.getFullYear() === now.getFullYear();
          default:
            return true;
        }
      });
    }

    // Amount range filter
    if (amountRange !== 'all') {
      filtered = filtered.filter(t => {
        const amount = t.amount;
        switch (amountRange) {
          case '0-100':
            return amount >= 0 && amount <= 100;
          case '100-500':
            return amount > 100 && amount <= 500;
          case '500-1000':
            return amount > 500 && amount <= 1000;
          case '1000+':
            return amount > 1000;
          default:
            return true;
        }
      });
    }

    setFilteredTransactions(filtered);
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
          className="mb-6"
        >
          <SearchAndFilter onFilterChange={handleFilterChange} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TransactionList transactions={filteredTransactions} />
        </motion.div>
      </div>
    </div>
  );
}
