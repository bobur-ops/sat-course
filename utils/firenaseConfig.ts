// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD698tEKkz8m_edJjv9104-EOOiuUN-2TY',
	authDomain: 'thesatcourse-371421.firebaseapp.com',
	projectId: 'thesatcourse-371421',
	storageBucket: 'thesatcourse-371421.appspot.com',
	messagingSenderId: '594088292650',
	appId: '1:594088292650:web:8ad0bd7b7d636132702e53',
	measurementId: 'G-0X32RJF52P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
	return app;
};
