import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
const api = process.env.FIREBASE_API_KEY
const firebaseConfig = {
    apiKey: api,
    authDomain: 'communityverse-e8fd9.firebaseapp.com',
    projectId: 'communityverse-e8fd9',
    storageBucket: 'communityverse-e8fd9.appspot.com',
    messagingSenderId: '132554981897',
    appId: '1:132554981897:web:a5a95a5e16bbcc924ceed8',
    measurementId: 'G-WH6H6K0CYT',
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
