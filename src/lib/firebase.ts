// Firebase for the public site: only writes new signups/applications and reads
// published tutor profiles. Uses Firestore Lite (small, no realtime) and is
// loaded lazily by the pages that need it, so the rest of the site stays fast.
// Access control lives in the wavetutor-admin repo (firestore.rules).
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDG3vXNq3dfsmP8kms6uews3WP6BXWwm10',
  authDomain: 'wavetutor-admin.firebaseapp.com',
  projectId: 'wavetutor-admin',
  storageBucket: 'wavetutor-admin.firebasestorage.app',
  messagingSenderId: '1057982620101',
  appId: '1:1057982620101:web:26cc0b9523bf8f13c6ebac',
}

// reCAPTCHA Enterprise site key for App Check (bot protection on the forms).
// Same key as the admin portal's RECAPTCHA_SITE_KEY. Empty = off.
const RECAPTCHA_SITE_KEY = ''

const useEmulators = import.meta.env.VITE_USE_EMULATORS === 'true'

const app = initializeApp(useEmulators ? { ...firebaseConfig, projectId: 'demo-wavetutor' } : firebaseConfig)

if (!useEmulators && RECAPTCHA_SITE_KEY) {
  initializeAppCheck(app, { provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY), isTokenAutoRefreshEnabled: true })
}

export const db = getFirestore(app)
if (useEmulators) connectFirestoreEmulator(db, '127.0.0.1', 8085)
