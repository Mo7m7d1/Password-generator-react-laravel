type DeleteBtnProps = {
	id: number;
	deleteCard: (id: number) => void;
};

export default function DeleteBtn({ id, deleteCard }: DeleteBtnProps) {
	return (
		<button
			onClick={() => deleteCard(id)}
			className="hover:rotate-6 absolute text-gray-400 cursor-pointer"
			style={{
				top: -10,
				right: -6,
				fontSize: 12,
			}}
		>
			&#x2716;
		</button>
	);
}
