import { CardData } from "../types";
import API_URL from "../utils/API_URL";

const createCard = async (cardData: CardData) => {
	await fetch(API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(cardData),
	})
		.then((response) => console.log(response))
		.catch((error) => console.log(error));
};

export default createCard;
