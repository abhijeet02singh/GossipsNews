---
description: Deploy newsapp to Vercel - Production ready workflow
---

# Deploy NewsApp to Vercel - Production Ready Workflow

## Prerequisites
- Node.js and npm installed
- Git repository initialized (already done)
- Vercel account (free at vercel.com)

## Step 1: Environment Variables Setup

1. Check if your app uses any API keys or environment variables
2. Create `.env.production` file in the root directory
3. Add any required environment variables (e.g., API keys for news API)
4. Example format:
   ```
   REACT_APP_NEWS_API_KEY=your_api_key_here
   REACT_APP_API_URL=https://api.example.com
   ```
5. Add `.env.production` to `.gitignore` if it contains sensitive data

## Step 2: Production Build Verification

1. Run the production build locally:
   ```bash
   npm run build
   ```
2. Test the build by serving it locally:
   ```bash
   npx serve -s build
   ```
3. Verify all routes work correctly
4. Check console for any errors or warnings
5. Test responsive design on different screen sizes

## Step 3: Optimize for Production

1. Update `package.json` with production scripts if needed
2. Ensure all dependencies are up to date:
   ```bash
   npm audit fix
   ```
3. Remove any console.log statements in production code
4. Optimize images and assets in the public folder
5. Add proper meta tags for SEO in `public/index.html`

## Step 4: Create Vercel Configuration

1. Create `vercel.json` in the root directory:
   ```json
   {
     "version": 2,
     "buildCommand": "npm run build",
     "outputDirectory": "build",
     "devCommand": "npm start",
     "installCommand": "npm install",
     "framework": "create-react-app",
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```
2. This ensures proper routing for SPA (Single Page Application)

## Step 5: Prepare for Deployment

1. Commit all changes to git:
   ```bash
   git add .
   git commit -m "Production ready changes"
   ```
2. Push to GitHub (if not already done):
   ```bash
   git remote add origin https://github.com/your-username/newsapp.git
   git push -u origin main
   ```
3. Ensure repository is public or has proper Vercel integration access

## Step 6: Deploy to Vercel

### Option A: Using Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Login to Vercel:
   ```bash
   vercel login
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow the prompts to configure your project
5. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and login
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Add environment variables in the project settings
6. Click "Deploy"

## Step 7: Configure Environment Variables in Vercel

1. Go to your project settings in Vercel Dashboard
2. Navigate to "Environment Variables"
3. Add all variables from your `.env.production` file
4. Make sure to add them to all environments (Production, Preview, Development)
5. Redeploy after adding variables

## Step 8: Post-Deployment Verification

1. Test the deployed URL thoroughly
2. Check all routes work correctly
3. Verify API calls are functioning
4. Test on mobile devices
5. Check browser console for errors
6. Verify loading speeds and performance

## Step 9: Set Up Custom Domain (Optional)

1. Go to project settings in Vercel Dashboard
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS records as instructed
5. Wait for SSL certificate provisioning

## Step 10: Ongoing Maintenance

1. Set up automatic deployments from Git
2. Monitor performance using Vercel Analytics
3. Keep dependencies updated regularly
4. Review and optimize bundle size
5. Set up error tracking (e.g., Sentry)

## Troubleshooting Common Issues

### Build Errors
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs in Vercel Dashboard

### Routing Issues
- Ensure `vercel.json` has proper rewrites configuration
- Verify all routes work with client-side routing

### Environment Variables Not Loading
- Ensure variables are added in Vercel project settings
- Check variable names match exactly (case-sensitive)
- Redeploy after adding variables

### API Errors
- Verify API keys are correctly set in environment variables
- Check CORS settings if needed
- Review API rate limits and quotas

## Performance Optimization Tips

1. Implement code splitting using React.lazy()
2. Add service worker for offline support
3. Optimize images using next/image or similar
4. Enable compression in Vercel settings
5. Use CDN for static assets
6. Implement caching strategies
