# 🚀 Deployment Guide

## Backend Deployment on Render

### Step 1: Prepare Repository
1. Create a new GitHub repository
2. Push only the `server` folder contents to the repository

### Step 2: Deploy on Render
1. Go to https://render.com and sign in
2. Click **New +** → **Web Service**
3. Connect your GitHub account and select the repository
4. Configure the service:
   - **Name**: pocket-bank-api
   - **Root Directory**: Leave empty (if you pushed only server folder)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Instance Type**: Free
5. Click **Create Web Service**
6. Wait for deployment to complete
7. Copy your service URL (e.g., `https://pocket-bank-api.onrender.com`)

### Step 3: Test Backend
Visit `https://your-service-url.onrender.com/api/balance` to verify it's working.

---

## Frontend Deployment on Vercel

### Step 1: Update Environment Variable
1. In your `client` folder, update `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://your-render-service-url.onrender.com
   ```

### Step 2: Prepare Repository
1. Create a new GitHub repository (or use a separate branch)
2. Push only the `client` folder contents to the repository

### Step 3: Deploy on Vercel
1. Go to https://vercel.com and sign in
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: Leave empty (if you pushed only client folder)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Add Environment Variable:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: Your Render backend URL
6. Click **Deploy**
7. Wait for deployment to complete

### Step 4: Test Frontend
Visit your Vercel URL to test the complete application.

---

## Alternative: Deploy Both from Monorepo

If you want to keep both client and server in one repository:

### Backend (Render)
- Set **Root Directory** to `server`

### Frontend (Vercel)
- Set **Root Directory** to `client`

---

## Important Notes

1. **CORS**: The backend already has CORS enabled for all origins
2. **Free Tier Limitations**: 
   - Render free tier may sleep after inactivity (first request takes ~30s)
   - Vercel free tier has bandwidth limits
3. **Environment Variables**: Always use environment variables for API URLs
4. **Data Persistence**: Current implementation uses in-memory storage (resets on server restart)

---

## Troubleshooting

### Backend Issues
- Check Render logs for errors
- Verify all dependencies are in package.json
- Ensure PORT environment variable is used

### Frontend Issues
- Verify NEXT_PUBLIC_API_URL is set correctly
- Check browser console for CORS errors
- Ensure API endpoints are accessible

### Connection Issues
- Test backend API directly using browser or Postman
- Check if Render service is sleeping (wake it up by visiting the URL)
- Verify environment variables are set in Vercel dashboard
