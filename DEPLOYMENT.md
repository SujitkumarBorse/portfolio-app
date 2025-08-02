# Deploying to GitHub Pages

This guide will help you deploy your Angular portfolio to GitHub Pages.

## Prerequisites

1. Make sure you have a GitHub account
2. Your project should be pushed to a GitHub repository

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio` or `my-portfolio`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license (since you already have a project)

## Step 2: Update Configuration

Before deploying, you need to update the configuration files with your actual GitHub username and repository name:

### Update package.json
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` in the deploy script:
```json
"deploy": "ng deploy --base-href=https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
```

### Update angular.json
Replace `YOUR_REPO_NAME` in the deploy configuration:
```json
"baseHref": "/YOUR_REPO_NAME/"
```

## Step 3: Push to GitHub

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

3. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions" (recommended) or "Deploy from a branch"
5. If using "Deploy from a branch", choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

**Note**: The repository is configured with two deployment workflows:
- `deploy.yml`: Uses GitHub Actions Pages (modern approach)
- `deploy-gh-pages.yml`: Uses traditional gh-pages branch approach

## Step 5: Deploy

The GitHub Actions workflow will automatically deploy your site when you push to the main branch. However, you can also deploy manually:

```bash
npm run deploy
```

## Step 6: Access Your Site

Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Troubleshooting

- If you get a 404 error, make sure the base href is correctly set
- If assets don't load, check that the paths are relative
- The first deployment might take a few minutes to become available

## Custom Domain (Optional)

If you want to use a custom domain:
1. Add a CNAME file in your `src` folder with your domain
2. Configure your domain's DNS settings
3. Update the base href in your configuration 