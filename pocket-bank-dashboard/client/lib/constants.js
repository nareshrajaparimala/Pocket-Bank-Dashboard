/**
 * Application Constants
 * Centralized constant values used across the application
 */

// Filter types for transaction filtering
export const FILTER_TYPES = {
  ALL: 'all',        // Show all transactions
  INCOME: 'income',  // Show only credit transactions
  EXPENSES: 'expenses' // Show only debit transactions
};

// Transaction types
export const TRANSACTION_TYPES = {
  CREDIT: 'credit',  // Money received (income)
  DEBIT: 'debit'     // Money sent (expense)
};
