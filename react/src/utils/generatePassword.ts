function sample(array: string[]): string {
	return array[Math.floor(Math.random() * array.length)];
}

export default function generatePassword(length: number): string {
	const allChars = String.fromCharCode(...Array(123).keys())
		.slice(48, 123)
		.split("");

	let password = "";
	for (let i = 0; i < length; i++) password += sample(allChars);

	return password;
}
