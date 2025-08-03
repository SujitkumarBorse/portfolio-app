#!/bin/bash

echo "🚀 Portfolio Deployment Check Script"
echo "====================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if dist folder exists
if [ ! -d "dist/portfolio-app" ]; then
    echo "❌ Build output not found in dist/portfolio-app"
    exit 1
fi

echo "✅ Build output verified"

# Check if CNAME file exists in build output
if [ ! -f "dist/portfolio-app/CNAME" ]; then
    echo "❌ CNAME file not found in build output"
    exit 1
fi

echo "✅ CNAME file found in build output"

# Display CNAME content
echo "📄 CNAME content:"
cat dist/portfolio-app/CNAME

echo ""
echo "🎉 Deployment check completed successfully!"
echo "Your portfolio is ready to be deployed to GitHub Pages with custom domain: sujitkumarborse.info" 