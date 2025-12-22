/**
 * In-memory data store for balance and transactions
 * Note: Data resets when server restarts (not persistent)
 */

// Initial account balance in USD
let balance = 12500;

// Array of transaction objects with id, date, description, amount, and type
let transactions = [
  { id: '1', date: '2025-01-01T00:00:00.000Z', description: 'Salary', amount: 15000, type: 'credit' },
  { id: '2', date: '2025-01-03T10:30:00.000Z', description: 'Starbucks', amount: 250, type: 'debit' },
  { id: '3', date: '2025-01-05T14:20:00.000Z', description: 'Freelance Project', amount: 3500, type: 'credit' },
  { id: '4', date: '2025-01-07T09:15:00.000Z', description: 'Grocery Shopping', amount: 1200, type: 'debit' },
  { id: '5', date: '2025-01-10T16:45:00.000Z', description: 'Netflix Subscription', amount: 199, type: 'debit' },
  { id: '6', date: '2025-01-12T11:00:00.000Z', description: 'Uber Ride', amount: 350, type: 'debit' },
  { id: '7', date: '2025-01-15T13:30:00.000Z', description: 'Client Payment', amount: 5000, type: 'credit' },
  { id: '8', date: '2025-01-18T08:00:00.000Z', description: 'Amazon Purchase', amount: 2500, type: 'debit' }
];

/**
 * Get current account balance
 * @returns {number} Current balance
 */
const getBalance = () => balance;

/**
 * Get all transactions
 * @returns {Array} Array of transaction objects
 */
const getTransactions = () => transactions;

/**
 * Add a new transaction to the beginning of the array
 * @param {Object} transaction - Transaction object with id, date, description, amount, type
 */
const addTransaction = (transaction) => {
  transactions.unshift(transaction);
};

/**
 * Deduct amount from current balance
 * @param {number} amount - Amount to deduct
 */
const updateBalance = (amount) => {
  balance -= amount;
};

// Export all functions for use in routes
module.exports = { getBalance, getTransactions, addTransaction, updateBalance };
