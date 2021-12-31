import React from "react";
import ListItem from "./ListItem";
import { ListProps } from "../App";

const List = ({ list }: ListProps) => {
	return (
		<>
			{list.map((listItem) => (
				<ListItem
					key={listItem.id}
					item={listItem.description}
					id={listItem.id}
				/>
			))}
		</>
	);
};

export default List;
