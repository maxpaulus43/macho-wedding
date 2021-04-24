import firebase from '@firebase/app';
import '@firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: import.meta.env.VITE_FB_API_KEY,
	authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_FB_DATABASE_URL,
	projectId: import.meta.env.VITE_FB_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FB_MESSSAGE_SENDER_ID,
	appId: import.meta.env.VITE_FB_APP_ID
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;