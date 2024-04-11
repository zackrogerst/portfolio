import "./app.css";

import Footer from "./Components/Footer/Footer";
import Window from "./Components/Window/Window";

interface WindowsContentTypes {
	key: number;
	headerText: string;
	htmlElms: HtmlElement[];
}

interface HtmlElement {
	tag: string;
	text: string;
	link?: string;
}

function App() {
	// const windowsContent: Array<WindowsContentTypes> = [
	// 	{
	// 		key: 1,
	// 		headerText: "Welcome To Zack OS",
	// 		htmlElms: [
	// 			{
	// 				tag: "p",
	// 				text: "Hello, I'm Zack Rogers. I'm a Software Engineer based in Salt Lake City, Utah who specializes in Full Stack Web Development."
	// 			},
	// 			{
	// 				tag: "button",
	// 				text: "Learn More About Zack",
	// 				link: "/about"
	// 			}
	// 		]
	// 	}
	// ];
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
