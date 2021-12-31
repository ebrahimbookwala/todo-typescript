import React, { useState } from "react";

interface ListItemProps {
	item: string;
	id: number;
}

const ListItem = ({ item }: ListItemProps) => {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	return (
		<div className="flex-container">
			<h2>{item}</h2>
			<input type="checkbox" checked={checked} onChange={handleChange}></input>
		</div>
	);
};
export default ListItem;
