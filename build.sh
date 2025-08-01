#!/bin/bash

# Simple build script for Vercel
echo "Starting build process..."

# Set environment variables
export CI=false
export GENERATE_SOURCEMAP=false
export BROWSERSLIST_IGNORE_OLD_DATA=1

# Build the project
echo "Building project..."
npm run build

echo "Build completed successfully!"