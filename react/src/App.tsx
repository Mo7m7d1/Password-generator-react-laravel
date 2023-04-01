import { useEffect, useState } from "react";
import { Header, Form, Card } from "./components";
import { createCard, updateCard } from "./methods";
import { CardData } from "./types";
import { API_URL, generatePassword, copyPassword } from "./utils";

export default function App() {
	const [password, setPassword] = useState("");
	const [title, setTitle] = useState("");
	const [cards, setCards] = useState<CardData[]>([]);

	const processData = async (
		e: React.ChangeEvent<HTMLInputElement>,
		title: string,
		length: number
	) => {
		e.preventDefault();
		if (!title && !length) return;

		const password = generatePassword(length);
		setTitle(title);
		setPassword(password);

		const existingCardIndex = cards.findIndex((card) => card.title === title);

		if (existingCardIndex === -1) {
			await createCard({ title, password });
			setCards((prevCards) => [...prevCards, { title, password }]);
		} else {
			const existingCard = cards[existingCardIndex];
			if (existingCard.password !== password) {
				await updateCard(existingCard.id!, { password });
				setCards((prevCards) =>
					prevCards.map((card) =>
						card.id === existingCard.id ? { ...card, password } : card
					)
				);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setCards(data);
			})
			.catch((error) => console.error(error));
	};

	const deleteCard = async (id: number) => {
		await fetch(`${API_URL}/${id}`, {
			method: "DELETE",
		});
		fetchData();
	};

	return (
		<div className="grid place-items-center" style={{ height: "100vh" }}>
			<div className="rounded-lg p-5 w-96 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md">
				<main className="flex flex-col gap-6 text-center mb-3">
					<Header />
					<Form getData={processData} />
				</main>
				{cards.length > 0 &&
					cards.map((card, index) => (
						<Card
							key={index}
							id={card.id}
							title={card.title}
							password={card.password}
							copyPass={() => copyPassword(card.password)}
							deleteCard={deleteCard}
						/>
					))}
			</div>
		</div>
	);
}
