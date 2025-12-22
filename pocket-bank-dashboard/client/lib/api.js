/**
 * API Utility Functions
 * Centralized API calls to backend server
 * Uses fetch API with environment variable for base URL
 */

// Get API URL from environment variable or use localhost default
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5500';

/**
 * Fetch current account balance
 * @returns {Promise<Object>} { balance: number }
 * @throws {Error} If request fails
 */
export const fetchBalance = async () => {
  const res = await fetch(`${API_URL}/api/balance`);
  if (!res.ok) throw new Error('Failed to fetch balance');
  return res.json();
};

/**
 * Fetch all transactions
 * @returns {Promise<Object>} { transactions: Array }
 * @throws {Error} If request fails
 */
export const fetchTransactions = async () => {
  const res = await fetch(`${API_URL}/api/transactions`);
  if (!res.ok) throw new Error('Failed to fetch transactions');
  return res.json();
};

/**
 * Send money transfer to recipient
 * @param {string} recipient - Name of recipient
 * @param {number} amount - Amount to transfer
 * @returns {Promise<Object>} { success, message, newBalance, transaction }
 * @throws {Error} If transfer fails or validation error occurs
 */
export const sendTransfer = async (recipient, amount) => {
  const res = await fetch(`${API_URL}/api/transfer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ recipient, amount })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Transfer failed');
  return data;
};
