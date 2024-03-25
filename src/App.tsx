import "./app.css";

import Header from "./Components/Header/Header";
import Dialog from "./Components/Dialog/Dialog";

function App() {
	return (
		<>
			<Header />
			<main style={{ height: "100vh", position: "relative" }}>
				<Dialog headerText="Welcome To Zack OS">
					<p>
						Hello, I'm Zack Rogers. I'm a Software Engineer based in
						Salt Lake City, Utah who specializes in Full Stack Web
						Development.
					</p>
					<button>Learn More About Zack</button>
				</Dialog>
			</main>
		</>
	);
}

export default App;
