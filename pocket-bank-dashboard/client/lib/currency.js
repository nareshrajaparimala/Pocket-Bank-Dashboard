/**
 * Currency Formatter Utility
 * Formats numbers as USD currency using Intl.NumberFormat API
 */

/**
 * Format a number as USD currency
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string (e.g., "$1,234.56")
 * @example formatCurrency(1234.56) => "$1,234.56"
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};
