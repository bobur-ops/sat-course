import { Box, Button, Flex, Input, Spinner, Text } from '@chakra-ui/react';

import loginSvg from '../../public/login.svg';

import { BsGoogle } from 'react-icons/bs';
import Image from 'next/image';

const Page = () => {
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
					/>
					<Input
						w={'302px'}
						marginBottom={5}
						borderRadius={'12px'}
						background={'#D9D9D9'}
						placeholder="Password"
					/>
					<Input
						w={'302px'}
						marginBottom={5}
						borderRadius={'12px'}
						background={'#D9D9D9'}
						placeholder="Repeat Password"
					/>
					<Button
						leftIcon={<BsGoogle />}
						colorScheme={'red'}
						borderRadius={'12px'}
						marginBottom={'60px'}
					>
						Sign up with Google
					</Button>

					<div id="recaptcha-container"></div>
					<Button
						w={'fit-content'}
						margin={'0 auto'}
						colorScheme={'red'}
						borderRadius={'12px'}
					>
						Signup
					</Button>
				</Box>
			</Box>
		</Flex>
	);
};

export default Page;
