# 🔐 Security Setup Guide

Your API keys were leaked and disabled by Google. Follow these steps to fix and secure your application:

## 🚨 Immediate Actions Required

### 1. Get a New Gemini API Key

1. Visit: [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated key

### 2. Configure Environment File

1. Open `src/environments/environment.ts`
2. Replace `YOUR_NEW_GEMINI_API_KEY_HERE` with your actual API key:

```typescript
export const environment = {
  production: false,
  geminiApiKey: "AIza...your-actual-key-here",
};
```

### 3. Update Firebase Config (if needed)

If you need to update Firebase credentials:

1. Open `src/environments/firebase.config.ts`
2. Update with your Firebase project credentials

### 4. Build and Test

```bash
npm run build
npm start
```

## ✅ Security Improvements Made

- ✅ Removed hardcoded API keys from source code
- ✅ Created environment files for sensitive data
- ✅ Updated `.gitignore` to prevent committing secrets
- ✅ Created `.example` files for reference

## 🔒 Important Security Rules

**NEVER commit these files:**

- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`
- `src/environments/firebase.config.ts`

**Safe to commit:**

- `src/environments/environment.example.ts`
- `src/environments/firebase.config.example.ts`

## 🧹 Clean Up Git History (Optional)

Since your old API key is in git history, you should:

1. **Revoke the old key** in Google Cloud Console
2. Consider using `git filter-branch` or BFG Repo-Cleaner to remove it from history
3. Force push to clean the repository

```bash
# Warning: This rewrites history! Coordinate with team members
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch src/app/core/services/ai.service.ts" \
  --prune-empty --tag-name-filter cat -- --all
```

## 🎯 Next Steps

1. Get your new Gemini API key ✅
2. Update `environment.ts` with the key ✅
3. Test locally ✅
4. Deploy to Firebase ✅
5. Monitor for any issues ✅

---

**Need Help?** Check the example files or visit the documentation:

- Gemini API: [API Key Documentation](https://ai.google.dev/gemini-api/docs/api-key)
- Firebase: [Firebase Console](https://console.firebase.google.com/)
