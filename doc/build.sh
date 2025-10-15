#!/bin/bash

# Build script for use-simple-debounce documentation and examples
# This script builds everything needed for deployment

set -e  # Exit on any error

echo "🚀 Building use-simple-debounce docs and examples..."

# Change to project root directory
cd "$(dirname "$0")/.."

echo "📦 Installing root dependencies..."
npm install

echo "🔨 Building all manual examples..."
npm run build:all

echo "📚 Building documentation site..."
cd doc
npm install
npm run build

echo "✅ Build complete! All assets ready for deployment."
