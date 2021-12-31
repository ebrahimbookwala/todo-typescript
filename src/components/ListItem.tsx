import React from "react";

interface ListItemProps {
	item: string;
}

const ListItem = ({ item }: ListItemProps) => <h2>{item}</h2>;
export default ListItem;
