/**
 * Pocket Bank API Server
 * Express.js backend with REST API endpoints
 * Handles balance, transactions, and transfer operations
 */

const express = require('express');
const cors = require('cors');
const balanceRoute = require('./routes/balance');
const transactionsRoute = require('./routes/transactions');
const transferRoute = require('./routes/transfer');

// Initialize Express app
const app = express();

// Use environment PORT or default to 5500
const PORT = process.env.PORT || 5500;

// Middleware: Enable CORS for all origins (allows frontend to connect)
app.use(cors());

// Middleware: Parse JSON request bodies
app.use(express.json());

// Route: GET /api/balance - Fetch current balance
app.use('/api/balance', balanceRoute);

// Route: GET /api/transactions - Fetch all transactions
app.use('/api/transactions', transactionsRoute);

// Route: POST /api/transfer - Create new transfer
app.use('/api/transfer', transferRoute);

// Root endpoint - Health check
app.get('/', (req, res) => {
  res.json({ message: 'Pocket Bank API is running' });
});

// Start server and listen on specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
