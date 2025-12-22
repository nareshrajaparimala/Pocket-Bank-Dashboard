/**
 * Transfer Page
 * Enhanced with success modal animation
 */

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TransferForm from '@/components/TransferForm';
import BalanceCard from '@/components/BalanceCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import SuccessModal from '@/components/SuccessModal';
import { fetchBalance } from '@/lib/api';

export default function TransferPage() {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [transferData, setTransferData] = useState(null);

  useEffect(() => {
    loadBalance();
  }, []);

  const loadBalance = async () => {
    try {
      const data = await fetchBalance();
      setBalance(data.balance);
    } catch (error) {
      console.error('Error loading balance:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTransferSuccess = (data) => {
    setTransferData(data);
    setShowSuccessModal(true);
    loadBalance();
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Transfer Money
        </motion.h1>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <BalanceCard balance={balance} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TransferForm onTransferSuccess={handleTransferSuccess} />
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        transferData={transferData}
      />
    </div>
  );
}
