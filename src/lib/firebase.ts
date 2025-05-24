
// src/lib/firebase.ts
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

// Configuration values from environment variables
const firebaseConfigValues = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID // Optional
};

// Effective Firebase configuration with fallbacks to placeholder strings
const effectiveFirebaseConfig = {
  apiKey: firebaseConfigValues.apiKey || "YOUR_API_KEY",
  authDomain: firebaseConfigValues.authDomain || "YOUR_AUTH_DOMAIN",
  projectId: firebaseConfigValues.projectId || "YOUR_PROJECT_ID",
  storageBucket: firebaseConfigValues.storageBucket || "YOUR_STORAGE_BUCKET",
  messagingSenderId: firebaseConfigValues.messagingSenderId || "YOUR_MESSAGING_SENDER_ID",
  appId: firebaseConfigValues.appId || "YOUR_APP_ID",
  measurementId: firebaseConfigValues.measurementId // measurementId is optional, so no placeholder string needed
};

let app: FirebaseApp | null = null;

// Check if critical placeholder values are being used for initialization
const usesPlaceholderKeys =
  effectiveFirebaseConfig.apiKey === "YOUR_API_KEY" ||
  effectiveFirebaseConfig.projectId === "YOUR_PROJECT_ID";

if (!usesPlaceholderKeys) {
  if (!getApps().length) {
    // Initialize with the effective config (could be actual env vars or still other fallbacks if only API/ProjectID were set)
    app = initializeApp(effectiveFirebaseConfig);
  } else {
    app = getApp();
  }
} else {
  if (typeof window !== 'undefined') {
    console.warn(
      "Firebase is not initialized because critical configuration (apiKey or projectId) " +
      "is using placeholder values (e.g., 'YOUR_API_KEY', 'YOUR_PROJECT_ID'). " +
      "Please update your Firebase project configuration using environment variables " +
      "(e.g., NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_PROJECT_ID set in a .env.local file) " +
      "or ensure the values in src/lib/firebase.ts are not placeholders."
    );
  }
}

// Initialize Firebase Analytics
const initializeAnalytics = async (): Promise<Analytics | null> => {
  if (!app) { // If app wasn't initialized (e.g., due to placeholder keys)
    return null;
  }
  if (typeof window !== "undefined" && (await isSupported())) {
    try {
      return getAnalytics(app);
    } catch (error) {
      console.error("Firebase Analytics initialization failed:", error);
      return null;
    }
  }
  return null;
};

export { app, initializeAnalytics };
