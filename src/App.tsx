import { createContext, useState } from "react";

import "./app.css";

import AboutMe from "./Components/Content/AboutMe/AboutMe.tsx";
import Footer from "./Components/Footer/Footer";
import Window from "./Components/Window/Window";

const WindowContext = createContext([""]);

function App() {
	const [windows, setWindows] = useState(["Welcome To Zack OS"]);
	return (
		<WindowContext.Provider value={windows}>
			<>
				<main>
					{/* Desktop Icons */}
					{windows.map((windowNameStr, index) => (
						<Window
							setWindows={setWindows}
							key={windowNameStr}
							closeIcons={true}
							headerText={windowNameStr}
							zIndex={index}
						>
							{windowNameStr === "Welcome To Zack OS" && <AboutMe />}
						</Window>
					))}
				</main>
				<Footer />
			</>
		</WindowContext.Provider>
	);
}

export default App;
