import { useState } from "react";

const inputClasses =
	"bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const inputBtnClasses =
	"bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-sm shadow-green-500/50 dark:shadow-md dark:shadow-green-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 mt-2 w-full cursor-pointer";

type Props = {
	getData: Function;
};
type passObj = {
	title: string;
	length: string;
};

export default function Form({ getData }: Props) {
	const [passObj, setPassObj] = useState<passObj>({
		title: "",
		length: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setPassObj((prevVal) => {
			return { ...prevVal, [name]: value };
		});
	};

	return (
		<form method="POST">
			<input
				type="text"
				name="title"
				id="title"
				placeholder="Password Title"
				className={inputClasses}
				value={passObj.title}
				onChange={(e) => handleChange(e)}
			/>

			<input
				type="text"
				name="length"
				placeholder="Password Length"
				className={inputClasses}
				inputMode="numeric"
				value={passObj.length}
				onChange={(e) => handleChange(e)}
			/>
			<div>
				<input
					type="submit"
					value="Generate"
					className={inputBtnClasses}
					onClick={(e) => getData(e, passObj.title, passObj.length)}
				/>
			</div>
		</form>
	);
}
