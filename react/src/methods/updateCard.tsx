import { CardData } from "../types";
import API_URL from "../utils/API_URL";

const updateCard = async (cardId: number, updates: Partial<CardData>) => {
	await fetch(`${API_URL}/${cardId}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updates),
	})
		.then((response) => console.log(response.status))
		.catch((error) => console.log(error));
};

export default updateCard;
