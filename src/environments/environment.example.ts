/**
 * ENVIRONMENT CONFIGURATION EXAMPLE
 *
 * Copy this file to environment.ts and add your actual API keys
 *
 * To get API keys:
 * 
 * GEMINI (Google AI):
 * 1. Visit https://aistudio.google.com/app/apikey
 * 2. Sign in with your Google account
 * 3. Click "Create API Key"
 * 4. Copy the key and paste it below
 * 
 * HUGGING FACE (Fallback AI):
 * 1. Visit https://huggingface.co/settings/tokens
 * 2. Sign up/login to your account
 * 3. Create a new access token
 * 4. Copy the token and paste it below
 */

export const environment = {
  production: false,
  geminiApiKey: "YOUR_GEMINI_API_KEY_HERE",
  huggingFaceToken: "YOUR_HUGGING_FACE_TOKEN_HERE",
};
