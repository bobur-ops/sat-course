import { Box, Spinner } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Purchase from '../containers/Purchase';

const Page = () => {
	const auth = getAuth();
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

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

	if (!user) router.push('/signup');

	return <Purchase user={user} />;
};

export default Page;
