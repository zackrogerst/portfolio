import "./app.css";
import AboutMe from "./Components/Content/AboutMe/AboutMe.tsx";

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
				{/* Desktop Icons */}
				{/* Desktop Icons */}

				<Window closeIcons={false} headerText="Welcome To Zack Os" zIndex={1}>
					<AboutMe />
				</Window>
			</main>
			<Footer />
		</>
	);
}

export default App;
