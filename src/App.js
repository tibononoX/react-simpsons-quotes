import { useState } from "react";
import axios from "axios";
import "./style.css";
import QuoteCard from "./components/QuoteCard";

const fetchQuote = () => {
	return axios
		.get("https://simpsons-quotes-api.herokuapp.com/quotes")
		.then((response) => response.data[0]);
};

function App() {
	const [data, setData] = useState({
		quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
		character: "Homer Simpson",
		image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
	});
	const handleData = () => {
		fetchQuote().then((data) => setData(data));
		console.log(data);
	};

	return (
		<div className="App">
			<h1>Simpsons API</h1>
			<button className="refreshButton" onClick={handleData}>
				REFRESH
			</button>
			<QuoteCard {...data} />
		</div>
	);
}

export default App;
