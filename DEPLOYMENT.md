# Deployment Guide for Digital Drift React

## Vercel Deployment Fix

This project is configured to handle the recurring `minimatch` and Node.js compatibility issues on Vercel.

### Files Added for Vercel Compatibility:

1. **`.env.production`** - Production environment variables
2. **`vercel.json`** - Vercel-specific build configuration  
3. **`.nvmrc`** - Forces Node.js 18.19.0 instead of 22.x
4. **`package.json` overrides** - Forces compatible dependency versions

### Why This Fixes the Error:

- **Node.js Version Control**: Forces Vercel to use Node.js 18.19.0 instead of 22.17.1
- **Dependency Overrides**: Locks `minimatch` and `glob` to compatible versions
- **Build Environment**: Disables problematic features like source maps and ESLint during build
- **Legacy Support**: Includes OpenSSL legacy provider for older dependencies

### Deployment Steps:

1. **Push to GitHub** with all the configuration files
2. **Connect to Vercel** - The build should now work automatically
3. **No additional configuration needed** - All settings are in the files

### Local Development:

```bash
npm start    # Development server
npm run build # Production build (works locally)
```

### If Issues Persist:

1. Check that all configuration files are committed to git
2. Ensure Vercel is reading the `.nvmrc` file (Node.js 18.19.0)
3. Verify the `vercel.json` build environment variables are applied

This setup eliminates the recurring `Cannot find module minimatch` error permanently.