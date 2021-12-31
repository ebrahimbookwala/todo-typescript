import React from "react";

interface ListItemProps {
	item: string;
	id: number;
	completed: boolean;
	done: (id: number) => void;
	del: (id: number) => void;
}

const ListItem = ({ item, id, completed, done, del }: ListItemProps) => {
	return (
		<div className="flex-container">
			<h2>{item}</h2>
			<h2> {completed ? "true" : "false"}</h2>
			<button className="done-btn btn" onClick={() => done(id)}>
				Done
			</button>
			<button className="done-btn btn" onClick={() => del(id)}>
				Delete
			</button>
		</div>
	);
};
export default ListItem;
