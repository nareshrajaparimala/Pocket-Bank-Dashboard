# 📚 Code Documentation

Complete explanation of every file, function, and component in the Pocket Bank Dashboard.

---

## 🗂️ Backend (Server)

### 📄 server/index.js
**Purpose**: Main Express server entry point

**Key Functions**:
- `app.use(cors())` - Enables Cross-Origin Resource Sharing so frontend can connect
- `app.use(express.json())` - Parses JSON request bodies
- `app.listen(PORT)` - Starts server on port 5500 (or environment PORT)

**Routes**:
- `GET /` - Health check endpoint
- `/api/balance` - Balance route
- `/api/transactions` - Transactions route
- `/api/transfer` - Transfer route

---

### 📄 server/data/store.js
**Purpose**: In-memory data storage (resets on server restart)

**Variables**:
- `balance` - Current account balance (starts at $12,500)
- `transactions` - Array of 8 sample transactions

**Functions**:
1. `getBalance()` - Returns current balance
2. `getTransactions()` - Returns all transactions array
3. `addTransaction(transaction)` - Adds new transaction to beginning of array
4. `updateBalance(amount)` - Subtracts amount from balance

---

### 📄 server/routes/balance.js
**Purpose**: Handle balance requests

**Endpoint**: `GET /api/balance`

**Response**:
```json
{
  "balance": 12500
}
```

---

### 📄 server/routes/transactions.js
**Purpose**: Handle transaction requests

**Endpoint**: `GET /api/transactions`

**Response**:
```json
{
  "transactions": [
    {
      "id": "1",
      "date": "2025-01-01T00:00:00.000Z",
      "description": "Salary",
      "amount": 15000,
      "type": "credit"
    }
  ]
}
```

---

### 📄 server/routes/transfer.js
**Purpose**: Handle money transfer with validation

**Endpoint**: `POST /api/transfer`

**Request Body**:
```json
{
  "recipient": "John Doe",
  "amount": 100
}
```

**Validation Rules**:
1. Recipient and amount are required
2. Amount must be greater than 0
3. Amount must not exceed current balance

**Success Response**:
```json
{
  "success": true,
  "message": "Transfer successful",
  "newBalance": 12400,
  "transaction": { ... }
}
```

**Error Response**:
```json
{
  "error": "Insufficient balance"
}
```

---

## 🎨 Frontend (Client)

### 📄 client/app/layout.js
**Purpose**: Root layout wrapper for all pages

**Features**:
- Imports global CSS styles
- Renders Navbar on all pages
- Sets page metadata (title, description)

**Structure**:
```
<html>
  <body>
    <Navbar />
    <main>
      {children} ← Pages render here
    </main>
  </body>
</html>
```

---

### 📄 client/app/page.js (Dashboard)
**Purpose**: Main dashboard page showing balance and recent transactions

**Route**: `/`

**State Variables**:
- `balance` - Current account balance
- `transactions` - Recent 5 transactions only
- `loading` - Loading state for spinner

**Functions**:
- `loadData()` - Fetches balance and transactions in parallel using Promise.all
- `useEffect()` - Calls loadData when component mounts

**Layout**:
- Grid layout: Balance card (1 column) + Transactions (2 columns)
- Filters disabled (showFilters=false)

---

### 📄 client/app/transactions/page.js
**Purpose**: Full transaction history with filtering

**Route**: `/transactions`

**State Variables**:
- `transactions` - All transactions (no limit)
- `loading` - Loading state

**Functions**:
- `loadTransactions()` - Fetches all transactions from API
- `useEffect()` - Calls loadTransactions on mount

**Features**:
- Shows all transactions
- Filters enabled (All/Income/Expenses)

---

### 📄 client/app/transfer/page.js
**Purpose**: Money transfer page

**Route**: `/transfer`

**State Variables**:
- `balance` - Current balance
- `loading` - Loading state

**Functions**:
- `loadBalance()` - Fetches current balance
- `useEffect()` - Calls loadBalance on mount

**Features**:
- Shows current balance
- Transfer form with validation
- Refreshes balance after successful transfer (via callback)

---

## 🧩 Components

### 📄 client/components/Navbar.js
**Purpose**: Top navigation bar

**Features**:
- Logo (links to dashboard)
- Three navigation links:
  - Dashboard (/)
  - Transactions (/transactions)
  - Transfer (/transfer) - Primary action button

**Styling**: White background, blue accent for Transfer button

---

### 📄 client/components/BalanceCard.js
**Purpose**: Display formatted account balance

**Props**:
- `balance` (number) - Account balance to display

**Features**:
- Blue gradient background
- Formats balance as USD currency
- Shows "Available Balance" label

**Example**: $12,500.00

---

### 📄 client/components/TransactionList.js
**Purpose**: Display list of transactions with filtering

**Props**:
- `transactions` (array) - Array of transaction objects
- `showFilters` (boolean) - Whether to show filter tabs

**State**:
- `activeFilter` - Currently selected filter (all/income/expenses)

**Functions**:
- `filteredTransactions` - Filters transactions based on activeFilter
  - INCOME: Shows only credit transactions
  - EXPENSES: Shows only debit transactions
  - ALL: Shows all transactions

**Features**:
- Filter tabs (if showFilters=true)
- Maps through filtered transactions
- Shows "No transactions found" if empty

---

### 📄 client/components/TransactionItem.js
**Purpose**: Single transaction row

**Props**:
- `transaction` (object) - Transaction data

**Features**:
- Formats date as "Jan 1, 2025"
- Shows description and date
- Shows amount with +/- sign
- Color coding:
  - Green for credits (income)
  - Red for debits (expenses)

**Date Formatting**:
```javascript
date.toLocaleDateString('en-US', { 
  month: 'short',   // Jan, Feb, Mar
  day: 'numeric',   // 1, 2, 3
  year: 'numeric'   // 2025
})
```

---

### 📄 client/components/FilterTabs.js
**Purpose**: Filter buttons for transactions

**Props**:
- `activeFilter` (string) - Currently active filter
- `onFilterChange` (function) - Callback when filter changes

**Filters**:
1. All - Shows all transactions
2. Income - Shows only credits
3. Expenses - Shows only debits

**Styling**:
- Active: Blue background, white text
- Inactive: White background, gray text

---

### 📄 client/components/TransferForm.js
**Purpose**: Money transfer form with validation

**Props**:
- `onTransferSuccess` (function) - Callback after successful transfer

**State Variables**:
- `recipient` - Recipient name input
- `amount` - Amount input
- `loading` - Loading state (disables form)
- `alert` - Alert message { type, message }

**Functions**:
- `handleSubmit(e)` - Form submission handler
  1. Prevents default form submission
  2. Validates recipient name (not empty)
  3. Validates amount (greater than 0)
  4. Sets loading state
  5. Simulates 1.5s delay for UX
  6. Calls sendTransfer API
  7. Shows success/error message
  8. Clears form on success
  9. Calls onTransferSuccess callback

**Validation Rules**:
1. Recipient name required
2. Amount must be valid number > 0
3. Backend validates sufficient balance

**UX Features**:
- Inputs disabled during loading
- Button shows "Processing..." during loading
- Button disabled during loading
- Success/error alerts shown above form

---

### 📄 client/components/AlertMessage.js
**Purpose**: Success/error message display

**Props**:
- `type` (string) - 'success' or 'error'
- `message` (string) - Message text

**Styling**:
- Success: Green background, green border
- Error: Red background, red border

---

### 📄 client/components/LoadingSpinner.js
**Purpose**: Loading indicator

**Features**:
- Animated spinning circle
- Blue color
- Centered on page
- Shows during API calls

---

## 🛠️ Utilities

### 📄 client/lib/api.js
**Purpose**: Centralized API calls

**Environment Variable**:
- `NEXT_PUBLIC_API_URL` - Backend URL (default: http://localhost:5500)

**Functions**:

1. **fetchBalance()**
   - Method: GET
   - Endpoint: /api/balance
   - Returns: { balance: number }
   - Throws: Error if request fails

2. **fetchTransactions()**
   - Method: GET
   - Endpoint: /api/transactions
   - Returns: { transactions: Array }
   - Throws: Error if request fails

3. **sendTransfer(recipient, amount)**
   - Method: POST
   - Endpoint: /api/transfer
   - Body: { recipient, amount }
   - Returns: { success, message, newBalance, transaction }
   - Throws: Error with message from backend

---

### 📄 client/lib/currency.js
**Purpose**: Currency formatting utility

**Function**: `formatCurrency(amount)`
- Uses Intl.NumberFormat API
- Locale: en-US
- Currency: USD
- Example: 1234.56 → "$1,234.56"

---

### 📄 client/lib/constants.js
**Purpose**: Application constants

**FILTER_TYPES**:
- ALL: 'all'
- INCOME: 'income'
- EXPENSES: 'expenses'

**TRANSACTION_TYPES**:
- CREDIT: 'credit' (income)
- DEBIT: 'debit' (expense)

---

## 🎨 Styles

### 📄 client/styles/globals.css
**Purpose**: Global Tailwind CSS styles

**Imports**:
- @tailwind base - Reset and base styles
- @tailwind components - Component classes
- @tailwind utilities - Utility classes

**Custom Styles**:
- body: Light gray background (bg-gray-50)

---

## ⚙️ Configuration Files

### 📄 client/next.config.js
- Enables React Strict Mode
- Next.js configuration

### 📄 client/tailwind.config.js
- Content paths for Tailwind
- Scans app/ and components/ folders

### 📄 client/postcss.config.js
- PostCSS configuration
- Enables Tailwind and Autoprefixer

### 📄 client/.env.local
- Environment variables
- NEXT_PUBLIC_API_URL for backend connection

---

## 📦 Package Files

### 📄 client/package.json
**Dependencies**:
- next: Next.js framework
- react: React library
- react-dom: React DOM rendering

**Dev Dependencies**:
- tailwindcss: CSS framework
- postcss: CSS processor
- autoprefixer: CSS vendor prefixes

**Scripts**:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

---

### 📄 server/package.json
**Dependencies**:
- express: Web framework
- cors: Enable CORS

**Scripts**:
- `npm start` - Start server
- `npm run dev` - Start server (same as start)

---

## 🔄 Data Flow

### Loading Dashboard:
1. User visits `/`
2. Dashboard component mounts
3. `useEffect` calls `loadData()`
4. `loadData()` fetches balance and transactions in parallel
5. State updates with data
6. Components re-render with data

### Making a Transfer:
1. User enters recipient and amount
2. User clicks "Send Money"
3. `handleSubmit` validates inputs
4. If valid, sets loading state
5. Calls `sendTransfer` API
6. Backend validates and processes
7. Backend updates balance and adds transaction
8. Frontend receives response
9. Shows success message
10. Calls `onTransferSuccess` callback
11. Balance refreshes automatically

### Filtering Transactions:
1. User clicks filter tab (Income/Expenses)
2. `onFilterChange` updates `activeFilter` state
3. Component re-renders
4. `filteredTransactions` filters array based on type
5. Only matching transactions displayed

---

## 🎯 Key Concepts

### Client-Side Rendering
- All pages use 'use client' directive
- React hooks (useState, useEffect) for state management
- Data fetched on component mount

### State Management
- Local component state using useState
- Props passed down to child components
- Callbacks passed up for parent updates

### API Communication
- REST API using fetch
- JSON request/response format
- Error handling with try/catch

### Validation
- Frontend: Input validation before API call
- Backend: Business logic validation
- User feedback via alert messages

### Loading States
- Spinner shown during data fetch
- Buttons disabled during operations
- Loading text on buttons

### Responsive Design
- Tailwind CSS utility classes
- Grid layout for desktop
- Stacked layout for mobile
- Breakpoints: sm, md, lg

---

## 🚀 Running the Application

### Terminal 1 (Backend):
```bash
cd server
npm install
npm start
```
Server runs on http://localhost:5500

### Terminal 2 (Frontend):
```bash
cd client
npm install
npm run dev
```
Frontend runs on http://localhost:3000

### Testing:
1. Visit http://localhost:3000
2. View dashboard with balance and transactions
3. Click "Transactions" to see all with filters
4. Click "Transfer" to send money
5. Try valid and invalid transfers
6. Watch balance update in real-time

---

## 📝 Notes

- Data is stored in-memory (resets on server restart)
- No database required for this demo
- CORS enabled for all origins
- Environment variables used for API URL
- All currency formatted as USD
- Dates formatted as "Jan 1, 2025"
- 1.5 second simulated delay on transfers for UX
