import * as admin from 'firebase-admin';
import serviceAccountJson from './serviceAccountKey.json';

if (!admin.apps.length) {
	const serviceAccount = {
		projectId: serviceAccountJson.project_id,
		clientEmail: serviceAccountJson.client_email,
		privateKey: serviceAccountJson.private_key,
	};

	try {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
		});
	} catch (error: any) {
		console.log('Firebase admin initialization error', error.stack);
	}
}
export default admin.firestore();
