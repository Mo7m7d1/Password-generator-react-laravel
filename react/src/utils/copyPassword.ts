const copyPassword = (password: string) => {
	navigator.clipboard.writeText(password);
};

export default copyPassword;
