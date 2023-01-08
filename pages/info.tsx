import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { db } from '../utils/initFirebase';
import { doc, setDoc } from 'firebase/firestore';
import fillPng from '../public/fill.png';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [age, setAge] = useState('');

	const router = useRouter();

	const setUserIntoFirestore = async () => {
		try {
			await setDoc(doc(db, 'Users', window.phone), {
				examDate: null,
				firstMockResult: null,
				lastMockResult: null,
				mathProgress: [],
				writingProgress: [],
				readingProgress: [],
				password: window.password,
				age: age,
				name: name,
				surname: surname,
			});

			router.push('/purchase');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Flex justifyContent={'center'} h={'100vh'} position="relative">
			<Box
				style={{ transform: 'translateY(-50%)' }}
				top={'50%'}
				position="absolute"
			>
				<Box display={'flex'} justifyContent={'center'}>
					<Image src={fillPng} alt="icon" />
				</Box>
				<Text mb={'31px'} mt={'11px'} color={'white'} textAlign={'center'}>
					Sign up
				</Text>
				<Box display={'flex'} flexDirection={'column'}>
					<Input
						name="phone"
						w={'302px'}
						marginBottom={5}
						borderRadius={'12px'}
						background={'#D9D9D9'}
						placeholder="Name"
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						w={'302px'}
						marginBottom={5}
						borderRadius={'12px'}
						background={'#D9D9D9'}
						placeholder="Surname"
						onChange={(e) => setSurname(e.target.value)}
					/>
					<Input
						w={'302px'}
						marginBottom={5}
						borderRadius={'12px'}
						background={'#D9D9D9'}
						placeholder="Your age"
						onChange={(e) => setAge(e.target.value)}
					/>
					<Button
						onClick={setUserIntoFirestore}
						w={'fit-content'}
						margin={'0 auto'}
						colorScheme={'red'}
						borderRadius={'12px'}
						disabled={!name || !surname || !age}
					>
						Continue
					</Button>
				</Box>
			</Box>
		</Flex>
	);
};

export default Page;
