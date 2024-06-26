import { ReactNode, FC, useState, useEffect } from "react";
import { Rnd } from "react-rnd";

import "./window.css";
import WindowHeader from "./WindowHeader/WindowHeader";

type WindowProps = {
	setWindows: React.Dispatch<React.SetStateAction<string[] | []>>;
	closeIcons: boolean;
	headerText: string;
	zIndex: number;
	children?: ReactNode;
};

const Window: FC<WindowProps> = ({ setWindows, closeIcons, headerText, zIndex, children }) => {
	const [browserWindowSize, setBrowserWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	});

	const [defaultPositioning, setDefaultPositioning] = useState({
		w: browserWindowSize.width / 2,
		h: browserWindowSize.height / 2,
		x: (browserWindowSize.width - browserWindowSize.width / 2) / 2,
		y: browserWindowSize.height / 2 - browserWindowSize.height / 3
	});

	const handleClasses = {
		bottomRight: "resize-handle",
		bottomLeft: "resize-handle"
	};

	const defaultPositionSize = {
		x: defaultPositioning.x,
		y: defaultPositioning.y,
		width: defaultPositioning.w,
		height: defaultPositioning.h
	};

	useEffect(() => {
		const handleResize = () => {
			setBrowserWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
			setDefaultPositioning({
				w: browserWindowSize.width / 4,
				h: browserWindowSize.height / 2,
				x: browserWindowSize.width / 2 - browserWindowSize.width / 8,
				y: browserWindowSize.height / 2 - browserWindowSize.height / 3
			});
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [window.innerHeight, window.innerWidth]);

	return (
		<Rnd
			resizeHandleClasses={handleClasses}
			dragHandleClassName="drag-handle"
			bounds={"window"}
			className="rnd-container"
			default={defaultPositionSize}
			minHeight={100}
			zindex={zIndex}
		>
			<div
				style={{
					height: "100%",
					overflow: "auto",
					scrollbarWidth: "thin",
					scrollbarGutter: "stable"
				}}
			>
				<WindowHeader
					setWindows={setWindows}
					closeIcons={closeIcons}
					headerText={headerText}
				/>
				<div className="window-content">{children}</div>
			</div>
		</Rnd>
	);
};

export default Window;
