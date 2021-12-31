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

const List = () => {
	const [list, setList] = useState(listItems);

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

	return (
		<>
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
