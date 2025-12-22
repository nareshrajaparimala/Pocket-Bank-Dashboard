/**
 * Transfer Route
 * Handles POST requests to create money transfers with validation
 */

const express = require('express');
const { getBalance, addTransaction, updateBalance } = require('../data/store');

const router = express.Router();

/**
 * POST /api/transfer
 * Creates a new transfer transaction
 * @body {string} recipient - Name of the recipient
 * @body {number} amount - Amount to transfer
 * @returns {Object} Success response with new balance and transaction
 */
router.post('/', (req, res) => {
  const { recipient, amount } = req.body;

  // Validation 1: Check if recipient and amount are provided
  if (!recipient || !amount) {
    return res.status(400).json({ error: 'Recipient and amount are required' });
  }

  // Convert amount to number
  const transferAmount = parseFloat(amount);

  // Validation 2: Check if amount is a valid positive number
  if (isNaN(transferAmount) || transferAmount <= 0) {
    return res.status(400).json({ error: 'Amount must be greater than 0' });
  }

  // Get current balance
  const currentBalance = getBalance();

  // Validation 3: Check if sufficient balance exists
  if (transferAmount > currentBalance) {
    return res.status(400).json({ error: 'Insufficient balance' });
  }

  // Create new transaction object
  const transaction = {
    id: Date.now().toString(), // Unique ID based on timestamp
    date: new Date().toISOString(), // Current date in ISO format
    description: `Transfer to ${recipient}`,
    amount: transferAmount,
    type: 'debit' // Transfer is always a debit
  };

  // Add transaction to store
  addTransaction(transaction);
  
  // Deduct amount from balance
  updateBalance(transferAmount);

  // Return success response
  res.json({ 
    success: true, 
    message: 'Transfer successful',
    newBalance: getBalance(),
    transaction 
  });
});

module.exports = router;
