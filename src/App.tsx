import { createContext, useState } from "react";

import "./app.css";

import AboutMe from "./Components/Content/AboutMe/AboutMe.tsx";
import Footer from "./Components/Footer/Footer";
import Window from "./Components/Window/Window";

import content from "./content.ts";

const WindowContext = createContext([""]);

const allWindowsHeadlines = [content.about.headline];

function App() {
	const [windows, setWindows] = useState([content.about.headline]);

	function handleClickDesktopIcon(arr: string[], str: string) {
		if (arr.includes(str)) {
			// set clicked window to focused
			const index = arr.indexOf(str);
			arr.push(arr.splice(index, 1)[0]);
			setWindows(arr);
		} else {
			setWindows((prev) => [...prev, str]);
		}
	}
	return (
		<WindowContext.Provider value={windows}>
			<>
				{allWindowsHeadlines.map((windowHeadline) => (
					<a
						onClick={() => handleClickDesktopIcon(windows, windowHeadline)}
						key={windowHeadline}
					>
						{windowHeadline}
					</a>
				))}
				<main>
					{windows.map((headline, index) => (
						<Window
							setWindows={setWindows}
							key={headline}
							closeIcons={true}
							headerText={headline}
							zIndex={index}
						>
							{headline === content.about.headline && <AboutMe />}
						</Window>
					))}
				</main>
				<Footer />
			</>
		</WindowContext.Provider>
	);
}

export default App;
