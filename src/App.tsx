import "./app.css";

import Footer from "./Components/Footer/Footer";
import Window from "./Components/Window/Window";

function App() {
	return (
		<>
			<main
				style={{
					height: "100vh",
					position: "relative",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					overflow: "hidden"
				}}
			>
				<Window headerText="Welcome To Zack OS" zIndex={1}>
					<p>
						Hello, I'm Zack Rogers. I'm a Software Engineer based in Salt Lake City,
						Utah who specializes in Full Stack Web Development.
					</p>
					<button>Learn More About Zack</button>
				</Window>
			</main>
			<Footer />
		</>
	);
}

export default App;
