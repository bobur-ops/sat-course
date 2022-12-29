import { Box, Text } from '@chakra-ui/react';
import { User } from 'firebase/auth';

interface IProps {
	user: User | undefined | null;
}

const Purchase = ({ user }: IProps) => {
	return (
		<Box>
			<Text>Purchase Page</Text>
			<Text>{user?.displayName}</Text>
			<Text>{user?.phoneNumber}</Text>
		</Box>
	);
};

export default Purchase;
