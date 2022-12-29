// @ts-nocheck
import { Box, Button, Flex, Input, Spinner, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import securityPng from '../public/security.png';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Page = () => {
	const [code, setCode] = useState('');
	const auth = getAuth();

	const [user, loading] = useAuthState(auth);

	const router = useRouter();

	useEffect(() => {
		if (window.confirmationResult) {
			console.log(window.confirmationResult);
		} else {
			router.push('/signup');
		}
	}, []);

	const verifyOTP = async () => {
		try {
			let confirmationResult = window.confirmationResult;
			const user = await confirmationResult.confirm(code);
			if (user) {
				router.push('/purchase');
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (loading) {
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
	}
	return (
		<Flex justifyContent={'center'} h={'100vh'} position="relative">
			<Box
				style={{ transform: 'translateY(-50%)' }}
				top={'50%'}
				position="absolute"
			>
				<Box display={'flex'} justifyContent={'center'}>
					<Image src={securityPng} alt="icon" />
				</Box>
				<Text mb={'31px'} mt={'11px'} color={'white'} textAlign={'center'}>
					Verify your phone
				</Text>
				<Text
					color={'white'}
					textAlign={'center'}
					maxW={'257px'}
					mt={'30px'}
					mb={'31px'}
				>
					We have sent a code to your phone, plesase enter it:{' '}
				</Text>
				<Box display={'flex'} flexDirection={'column'}>
					<Input
						w={'302px'}
						marginBottom={5}
						borderRadius={'12px'}
						background={'#D9D9D9'}
						placeholder="Code"
						onChange={(e) => setCode(e.target.value)}
					/>
					<Box marginBottom={'38px'} textAlign={'center'}>
						<Text>Didn&apos;t receive the code?</Text>
						<Text color={'#EC0909'}>Send again</Text>
					</Box>
					<Button
						w={'fit-content'}
						margin={'0 auto'}
						colorScheme={'red'}
						borderRadius={'12px'}
						onClick={verifyOTP}
					>
						Proceed
					</Button>
				</Box>
			</Box>
			<div id="recaptcha-container"></div>
		</Flex>
	);
};

export default Page;
