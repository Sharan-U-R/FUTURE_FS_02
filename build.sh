#!/bin/bash

# Update browserslist database
echo "Updating browserslist database..."
npx browserslist@latest --update-db

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
CI=false npm run build

echo "Build completed!"