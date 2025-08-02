const {
    execSync
} = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

// Build the application
console.log('📦 Building application...');
execSync('ng build --configuration production --base-href=/portfolio-app/', {
    stdio: 'inherit'
});

// Create .nojekyll file in the dist folder
const distPath = path.join(__dirname, 'dist', 'portfolio-app');
const nojekyllPath = path.join(distPath, '.nojekyll');

console.log('📝 Creating .nojekyll file...');
fs.writeFileSync(nojekyllPath, '');

// Deploy to GitHub Pages
console.log('🌐 Deploying to GitHub Pages...');
try {
    execSync('npx angular-cli-ghpages --dir=dist/portfolio-app --no-silent', {
        stdio: 'inherit'
    });
    console.log('✅ Deployment completed successfully!');
} catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
}