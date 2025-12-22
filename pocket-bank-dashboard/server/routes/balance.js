/**
 * Balance Route
 * Handles GET requests to fetch current account balance
 */

const express = require('express');
const { getBalance } = require('../data/store');

const router = express.Router();

/**
 * GET /api/balance
 * Returns the current account balance
 * @returns {Object} { balance: number }
 */
router.get('/', (req, res) => {
  res.json({ balance: getBalance() });
});

module.exports = router;
