import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Replace this config with your Firebase project config
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT.firebaseapp.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT.appspot.com',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId: 'YOUR_APP_ID',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default defineNuxtPlugin(() => {
    return {
        provide: {
            auth,
        },
    }
})
