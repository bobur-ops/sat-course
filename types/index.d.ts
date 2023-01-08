export {};

declare global {
	interface Window {
		phone: string;
		password: string;
		confirmationResult: any;
	}
}

export interface IUser {
	age: string;
	examDate: null | Date | string;
	firstMockResult: string;
	lastMockResult: string;
	mathProgress: any[] | any | string;
	readingProgress: any[] | any | string;
	writingProgress: any[] | any | string;
	name: string;
	surname: string;
	password: string;
}
