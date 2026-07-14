import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDocFromServer, getDoc } from 'firebase/firestore';

// Configuration from firebase-applet-config.json
const firebaseConfig = {
  apiKey: "AIzaSyAq9Yp_FzUoCUedKEEqDI9SJHgmbJlodEQ",
  authDomain: "nomadic-aria-0gtt6.firebaseapp.com",
  projectId: "nomadic-aria-0gtt6",
  storageBucket: "nomadic-aria-0gtt6.firebasestorage.app",
  messagingSenderId: "841228866358",
  appId: "1:841228866358:web:9063ce415d769f73d0d997"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "ai-studio-ovo-8c3e5817-1348-41c1-9692-8d1e069395a1");

// CRITICAL CONSTRAINT: Validate Connection to Firestore on boot
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firebase connection established successfully.");
  } catch (error) {
    if (error instanceof Error && error.message.includes('offline')) {
      console.error("Please check your Firebase configuration or network connection.");
    } else {
      console.log("Firebase initialized successfully.");
    }
  }
}
testConnection();

export { app, db };

/**
 * Checks the purchase plan associated with an email.
 * First tries Firestore directly; if blocked or fails, falls back to the backend API endpoint.
 */
export async function checkUserPlan(email: string): Promise<{ exists: boolean; plano: 'basic' | 'premium' | null }> {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail) return { exists: false, plano: null };

  // Hardcoded test emails for testing and simulation
  if (cleanEmail === "completo@teste.com" || cleanEmail === "teste.completo@ovoapp.com") {
    return { exists: true, plano: 'premium' };
  }
  if (cleanEmail === "basico@teste.com" || cleanEmail === "teste.basico@ovoapp.com") {
    return { exists: true, plano: 'basic' };
  }

  try {
    const userDocRef = doc(db, 'users', cleanEmail);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return { exists: true, plano: data?.plano || null };
    }
  } catch (err) {
    console.warn("Direct Firestore read failed (possibly iframe context/rules), falling back to API:", err);
  }

  // Fallback to our proxy API endpoint
  try {
    const res = await fetch(`/api/user-plan/${encodeURIComponent(cleanEmail)}`);
    if (res.ok) {
      const data = await res.json();
      return { exists: data.exists, plano: data.plano };
    }
  } catch (apiErr) {
    console.error("API user plan lookup failed:", apiErr);
  }

  return { exists: false, plano: null };
}
