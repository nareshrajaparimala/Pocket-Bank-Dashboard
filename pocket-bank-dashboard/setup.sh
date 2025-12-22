#!/bin/bash

echo "🏦 Setting up Pocket Bank Dashboard..."
echo ""

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server
npm install
cd ..

echo ""

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client
npm install
cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the application:"
echo "1. Terminal 1: cd server && npm start"
echo "2. Terminal 2: cd client && npm run dev"
echo "3. Open http://localhost:3000 in your browser"
