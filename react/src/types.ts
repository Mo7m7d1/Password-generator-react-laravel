export type CardData = {
	id?: number;
	title: string;
	password: string;
};

export type CardProps = {
	id?: number;
	title: string;
	password: string;
	copyPass: () => void;
	deleteCard: (id: number) => void;
};
