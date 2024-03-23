// import "./reset.css";
import "./app.css";

import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import Tabs from "./Components/Tabs/Tabs";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Tabs />
			</main>
		</>
	);
}

export default App;
