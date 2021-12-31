import { latest } from "immer/dist/internal";
import React, { useState } from "react";
import ListItem from "./ListItem";

const listItems = [
	{
		id: 1,
		description: "Buy groceries",
		completed: false,
	},
	{
		id: 2,
		description: "Buy Milk",
		completed: false,
	},
	{
		id: 3,
		description: "Buy Medicines",
		completed: false,
	},
	{
		id: 4,
		description: "Buy Meat",
		completed: false,
	},
];

let latestId = 5;

const List = () => {
	const [list, setList] = useState(listItems);
	const [input, setInput] = useState("");

	const handleDone = (id: number) => {
		setList((prev) => {
			return prev.map((item) =>
				item.id === id ? { ...item, completed: !item.completed } : item
			);
		});
	};

	const handleDel = (id: number) => {
		setList((prev) => {
			return prev.filter((item) => item.id !== id);
		});
	};

	const addToList = () => {
		setList((prev) => {
			return [
				...prev,
				{
					id: latestId,
					description: input,
					completed: false,
				},
			];
		});
		latestId++;
	};

	return (
		<>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={addToList}>Add to List</button>
			{list.map((listItem) => (
				<ListItem
					key={listItem.id}
					item={listItem.description}
					id={listItem.id}
					completed={listItem.completed}
					done={handleDone}
					del={handleDel}
				/>
			))}
		</>
	);
};

export default List;
