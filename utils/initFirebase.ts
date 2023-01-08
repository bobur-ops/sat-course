import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD698tEKkz8m_edJjv9104-EOOiuUN-2TY',
	authDomain: 'thesatcourse-371421.firebaseapp.com',
	projectId: 'thesatcourse-371421',
	storageBucket: 'thesatcourse-371421.appspot.com',
	messagingSenderId: '594088292650',
	appId: '1:594088292650:web:8ad0bd7b7d636132702e53',
	measurementId: 'G-0X32RJF52P',
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
	return app;
};

export const db = getFirestore(app);
export const auth = getAuth();
