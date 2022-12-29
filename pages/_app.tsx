import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { initFirebase } from '../utils/firenaseConfig';

export default function App({ Component, pageProps }: AppProps) {
	initFirebase();
	return (
		<ChakraProvider>
			<Box
				background={
					'linear-gradient(168.33deg, #D02B2B 2.53%, #DCA757 98.21%);'
				}
				height={'100vh'}
			>
				<Component {...pageProps} />
			</Box>
		</ChakraProvider>
	);
}
