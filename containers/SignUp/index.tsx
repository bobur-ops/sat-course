// @ts-nocheck

import { useState } from 'react';
import { Box, Button, Flex, Input, Spinner, Text } from '@chakra-ui/react';
import Image from 'next/image';
import loginSvg from '../../public/login.svg';
import { BsGoogle } from 'react-icons/bs';

import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithPhoneNumber,
	RecaptchaVerifier,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { database } from 'firebase/database';

const SignUp = () => {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const provider = new GoogleAuthProvider();
	const auth = getAuth();
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	const generateRecaptcha = () => {
		window.recaptchaVerifier = new RecaptchaVerifier(
			'recaptcha-container',
			{
				size: 'normal',
				callback: (response) => {
					signUpWithPhone();
				},
			},
			auth
		);

		recaptchaVerifier.render();
	};

	const signUpWithPhone = async () => {
		console.log('Am I here');
		let appVerifier = window.recaptchaVerifier;
		try {
			const confirmationResult = await signInWithPhoneNumber(
				auth,
				phone,
				appVerifier
			);
			window.confirmationResult = confirmationResult;

			router.push('/verify');
		} catch (error) {
			console.log(error);
		}
	};

	const signWIthGoogle = async () => {
		try {
			const { user } = await signInWithPopup(auth, provider);
			await database().ref(`users/${user.uid}`).set({
				password,
			});
			router.push('/purchase');
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

	if (user) {
		router.push('/purchase');
	}

	return (
		<Flex justifyContent={'center'} h={'100vh'} position="relative">
			<Box
				style={{ transform: 'translateY(-50%)' }}
				top={'50%'}
				position="absolute"
			>
				<Box display={'flex'} justifyContent={'center'}>
					<Image src={loginSvg} alt="icon" />
				</Box>
				<Text mb={'31px'} mt={'11px'} color={'white'} textAlign={'center'}>
					Sign up
				</Text>
				<Box display={'flex'} flexDirection={'column'}>
					<Input
						w={'302px'}
						marginBottom={5}
						borderRadius={'12px'}
						background={'#D9D9D9'}
						placeholder="Phone"
						onChange={(e) => setPhone(e.target.value)}
					/>
					<Input
						w={'302px'}
						marginBottom={5}
						borderRadius={'12px'}
						background={'#D9D9D9'}
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Input
						w={'302px'}
						marginBottom={5}
						borderRadius={'12px'}
						background={'#D9D9D9'}
						placeholder="Repeat Password"
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<Button
						onClick={signWIthGoogle}
						leftIcon={<BsGoogle />}
						colorScheme={'red'}
						borderRadius={'12px'}
						marginBottom={'60px'}
					>
						Sign up with Google
					</Button>

					<div id="recaptcha-container"></div>
					<Button
						onClick={generateRecaptcha}
						w={'fit-content'}
						margin={'0 auto'}
						colorScheme={'red'}
						borderRadius={'12px'}
						disabled={!phone.length || confirmPassword !== password}
					>
						Login
					</Button>
				</Box>
			</Box>
		</Flex>
	);
};

export default SignUp;
