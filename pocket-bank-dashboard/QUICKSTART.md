# ⚡ Quick Start Guide

---

## 🌐 **LIVE DEMO - TRY IT NOW!**

### 🚀 **Frontend Application**
**[https://pocket-bank-dashboard.vercel.app/](https://pocket-bank-dashboard.vercel.app/)**

### ⚡ **Backend API**
**[https://pocket-bank-dashboard.onrender.com/](https://pocket-bank-dashboard.onrender.com/)**

---

## Option 1: Automatic Setup (Recommended)

```bash
cd pocket-bank-dashboard
./setup.sh
```

Then start both servers:

**Terminal 1 (Backend):**
```bash
cd server
npm start
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```

Open http://localhost:3000

---

## Option 2: Manual Setup

### Backend Setup
```bash
cd pocket-bank-dashboard/server
npm install
npm start
```

### Frontend Setup (New Terminal)
```bash
cd pocket-bank-dashboard/client
npm install
npm run dev
```

---

## 🧪 Testing the Application

### 1. Dashboard Page (/)
- View your current balance
- See recent 5 transactions
- Navigate using the top navbar

### 2. Transactions Page (/transactions)
- View all transactions
- Filter by: All / Income / Expenses
- See formatted dates and amounts

### 3. Transfer Page (/transfer)
- View current balance
- Enter recipient name
- Enter amount to transfer
- Click "Send Money"
- Watch for validation errors
- See success message on valid transfer

### Test Cases to Try:

✅ **Valid Transfer**
- Recipient: "John Doe"
- Amount: 100
- Result: Success message, balance updates

❌ **Invalid Transfers**
- Empty recipient → Error message
- Amount: 0 → Error: "Amount must be greater than 0"
- Amount: 999999 → Error: "Insufficient balance"
- Amount: -50 → Error: "Amount must be greater than 0"

---

## 🎯 Expected Behavior

1. **Loading States**: Spinner shows while fetching data
2. **Button Disabled**: "Send Money" button disabled during transfer
3. **Instant Updates**: Balance updates immediately after transfer
4. **Color Coding**: 
   - Green (+) for income
   - Red (-) for expenses
5. **Responsive**: Works on mobile and desktop

---

## 🐛 Troubleshooting

**Port Already in Use:**
```bash
# Kill process on port 5500
lsof -ti:5500 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**API Connection Error:**
- Ensure backend is running on port 5500
- Check `.env.local` has correct API URL
- Verify CORS is enabled in server

**Module Not Found:**
```bash
# Reinstall dependencies
cd client && rm -rf node_modules && npm install
cd ../server && rm -rf node_modules && npm install
```

---

## 📊 Initial Data

**Starting Balance:** $12,500

**Sample Transactions:**
1. Salary: +$15,000 (Credit)
2. Starbucks: -$250 (Debit)
3. Freelance Project: +$3,500 (Credit)
4. Grocery Shopping: -$1,200 (Debit)
5. Netflix: -$199 (Debit)
6. Uber: -$350 (Debit)
7. Client Payment: +$5,000 (Credit)
8. Amazon: -$2,500 (Debit)

---

## 🚀 Next Steps

1. Test all features locally
2. Review code structure
3. Customize styling if needed
4. Follow DEPLOYMENT.md for production deployment
5. Push to GitHub
6. Deploy to Vercel (frontend) and Render (backend)

---

## 📞 Support

If you encounter any issues:
1. Check the console for errors
2. Verify both servers are running
3. Review the README.md for detailed information
4. Check DEPLOYMENT.md for deployment issues
