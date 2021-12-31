import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

const listItems = [
	{
		id: 1,
		description: "Buy groceries",
	},
	{
		id: 2,
		description: "Buy Milk",
	},
	{
		id: 3,
		description: "Buy Medicines",
	},
	{
		id: 4,
		description: "Buy Meat",
	},
];

export interface ListProps {
	list: { id: number; description: string }[];
}

function App() {
	return (
		<div className="App">
			<List list={listItems} />
		</div>
	);
}

export default App;
