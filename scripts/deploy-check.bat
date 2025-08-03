@echo off
echo 🚀 Portfolio Deployment Check Script
echo =====================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ npm version:
npm --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Build the project
echo 🔨 Building the project...
npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ Build completed successfully

REM Check if dist folder exists
if not exist "dist\portfolio-app" (
    echo ❌ Build output not found in dist\portfolio-app
    pause
    exit /b 1
)

echo ✅ Build output verified

REM Check if CNAME file exists in build output
if not exist "dist\portfolio-app\CNAME" (
    echo ❌ CNAME file not found in build output
    pause
    exit /b 1
)

echo ✅ CNAME file found in build output

REM Display CNAME content
echo 📄 CNAME content:
type dist\portfolio-app\CNAME

echo.
echo 🎉 Deployment check completed successfully!
echo Your portfolio is ready to be deployed to GitHub Pages with custom domain: sujitkumarborse.info
pause 