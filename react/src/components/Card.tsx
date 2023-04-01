import { useEffect, useState } from "react";
import { CardProps } from "../types";
import DeleteBtn from "./DeleteBtn";

export default function Card({
	id,
	title,
	password,
	copyPass,
	deleteCard,
}: CardProps) {
	const [copyStatus, setCopyStatus] = useState("Copy");

	useEffect(() => {
		setCopyStatus("Copy");
	}, [password]);

	const handleCopyClick = () => {
		copyPass();
		setCopyStatus("Copied");
	};

	return (
		<div className="w-full bg-gray-800 rounded-lg p-3 mb-2">
			<div className="flex justify-between items-center relative">
				<h3 className="text-gray-400 text-md">{title}</h3>
				<DeleteBtn deleteCard={deleteCard} id={id!} />
			</div>
			<div className="flex justify-between items-center">
				<h6 className="text-green-400 text-sm break-words w-60">{password}</h6>
				<button
					id="btn"
					onClick={handleCopyClick}
					className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-md dark:shadow-green-800/80 rounded-lg text-sm px-2 py-1 h-7 text-center"
				>
					{copyStatus}
				</button>
			</div>
		</div>
	);
}
