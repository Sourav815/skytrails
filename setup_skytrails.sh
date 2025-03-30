#!/bin/bash

# Clone the repository
echo "📥 Cloning the SkyTrails repository..."
git clone https://github.com/Sourav815/skytrails.git

# Navigate into the project directory
cd skytrails || { echo "❌ Failed to enter the directory"; exit 1; }

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Start the development server
echo "🚀 Starting the development server..."
npm run dev &

# Wait for the server to start
sleep 3

# Open the browser (Linux/macOS)
if which xdg-open > /dev/null; then
  xdg-open http://localhost:5173
elif which open > /dev/null; then
  open http://localhost:5173
else
  echo "🌐 Open http://localhost:5173 in your browser."
fi
