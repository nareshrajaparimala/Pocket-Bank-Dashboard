# 🏦 Pocket Bank Dashboard

A professional, responsive fintech-style mini banking dashboard built with Next.js and Express.js.

## ✨ Features

- 💰 View account balance
- 📊 Filter transactions (All / Income / Expenses)
- 💸 Simulate money transfers with validation
- 🎨 Professional fintech UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Real-time balance updates

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: JavaScript
- **Deployment**: Render

## 📁 Project Structure

```
pocket-bank-dashboard/
├── client/                 # Next.js frontend
│   ├── app/               # App Router pages
│   ├── components/        # React components
│   ├── lib/              # Utilities and API calls
│   └── styles/           # Global styles
└── server/                # Express backend
    ├── routes/           # API routes
    └── data/             # In-memory data store
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
cd pocket-bank-dashboard
```

2. **Install server dependencies**
```bash
cd server
npm install
```

3. **Install client dependencies**
```bash
cd ../client
npm install
```

### Running Locally

1. **Start the backend server** (Terminal 1)
```bash
cd server
npm start
```
Server runs on `http://localhost:5500`

2. **Start the frontend** (Terminal 2)
```bash
cd client
npm run dev
```
Frontend runs on `http://localhost:3000`

3. **Open your browser** and navigate to `http://localhost:3000`

## 🌐 Deployment

### Backend Deployment (Render)

1. Push the `server` folder to GitHub
2. Go to [Render Dashboard](https://render.com)
3. Create a new **Web Service**
4. Connect your GitHub repository
5. Configure:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
6. Deploy and copy the service URL

### Frontend Deployment (Vercel)

1. Push the `client` folder to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Import your repository
4. Configure:
   - **Root Directory**: `client`
   - **Framework Preset**: Next.js
   - **Environment Variable**: 
     - `NEXT_PUBLIC_API_URL` = Your Render backend URL
5. Deploy

## 📝 API Endpoints

- `GET /api/balance` - Get current balance
- `GET /api/transactions` - Get all transactions
- `POST /api/transfer` - Create a new transfer
  ```json
  {
    "recipient": "John Doe",
    "amount": 100
  }
  ```

## 🎯 Features Checklist

### Functional
- ✅ Balance updates instantly after transfer
- ✅ Transactions update without page refresh
- ✅ Filters work correctly (All/Income/Expenses)
- ✅ Validation blocks invalid transfers

### UX
- ✅ Loading spinner visible during operations
- ✅ Send button disabled during request
- ✅ Success and error messages displayed
- ✅ Responsive design for mobile and desktop

### Code Quality
- ✅ Components properly separated
- ✅ Clean and readable code
- ✅ Reusable utility functions
- ✅ Proper error handling

## 📱 Pages

- **Dashboard** (`/`) - Account overview with balance and recent transactions
- **Transactions** (`/transactions`) - Full transaction history with filters
- **Transfer** (`/transfer`) - Money transfer form with validation

## 🎨 Design

- Professional fintech aesthetic
- Blue accent colors for primary actions
- Green for income, red for expenses
- Card-based layout with shadows
- Clean typography and spacing

## 📄 License

This project is open source and available for educational purposes.
