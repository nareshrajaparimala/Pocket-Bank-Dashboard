/**
 * Transactions Route
 * Handles GET requests to fetch all transactions
 */

const express = require('express');
const { getTransactions } = require('../data/store');

const router = express.Router();

/**
 * GET /api/transactions
 * Returns all transactions in the system
 * @returns {Object} { transactions: Array }
 */
router.get('/', (req, res) => {
  res.json({ transactions: getTransactions() });
});

module.exports = router;
