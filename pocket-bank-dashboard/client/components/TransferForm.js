/**
 * TransferForm Component
 * Enhanced money transfer form with animations and modern UI
 */

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendTransfer } from '@/lib/api';
import AlertMessage from './AlertMessage';
import { Send, User, DollarSign } from 'lucide-react';

export default function TransferForm({ onTransferSuccess }) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);

    if (!recipient.trim()) {
      setAlert({ type: 'error', message: 'Please enter recipient name' });
      return;
    }

    const transferAmount = parseFloat(amount);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      setAlert({ type: 'error', message: 'Please enter a valid amount greater than 0' });
      return;
    }

    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const result = await sendTransfer(recipient, transferAmount);
      setRecipient('');
      setAmount('');
      if (onTransferSuccess) {
        onTransferSuccess({
          recipient,
          amount: transferAmount,
          newBalance: result.newBalance
        });
      }
    } catch (error) {
      setAlert({ type: 'error', message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Send className="text-blue-600" size={28} />
        Send Money
      </h2>
      
      {alert && <AlertMessage type={alert.type} message={alert.message} />}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <User size={16} />
            Recipient Name
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Enter recipient name"
            disabled={loading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <DollarSign size={16} />
            Amount (USD)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="0.00"
            step="0.01"
            disabled={loading}
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Processing...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Money
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}
