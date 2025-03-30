#!/bin/bash

# Define repo URL and project directory
REPO_URL="https://github.com/Sourav815/skytrails.git"
PROJECT_DIR="skytrails"

# Clone the repository
echo "Cloning the repository..."
git clone $REPO_URL

# Navigate into the project directory
cd $PROJECT_DIR || { echo "Failed to enter project directory"; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the development server
echo "Starting the development server..."
npm run dev &

# Wait for the server to start
sleep 3

# Open in default web browser
if which xdg-open > /dev/null; then
  xdg-open http://localhost:5173
elif which open > /dev/null; then
  open http://localhost:5173
else
  echo "Please open http://localhost:5173 manually"
fi
