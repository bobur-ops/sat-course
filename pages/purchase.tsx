import { Box, Spinner } from '@chakra-ui/react';
import { getAuth, User } from 'firebase/auth';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Purchase from '../containers/Purchase';
import { IUser } from '../types';
import { db } from '../utils/initFirebase';

const Page = () => {
	const auth = getAuth();
	const [authUser, loading] = useAuthState(auth);
	const [user, setUser] = useState<IUser | null>(null);

	const router = useRouter();

	const getUser = async () => {
		if (!loading) {
			const phone: string = authUser?.phoneNumber as string;
			const docRef = doc(db, 'Users', phone);

			const docSnap = await getDoc(docRef);

			setUser(docSnap.data() as IUser);
		}
	};
	useEffect(() => {
		getUser();
	}, [loading]);

	if (loading)
		return (
			<Box
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				h={'100vh'}
			>
				<Spinner size="xl" />
			</Box>
		);

	if (!authUser) router.push('/signup');

	return <Purchase user={user} />;
};

export default Page;
