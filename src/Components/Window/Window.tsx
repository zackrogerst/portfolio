import { ReactNode, FC, useState, useEffect } from "react";
import { Rnd } from "react-rnd";

import "./window.css";

interface WindowProps {
	headerText: string;
	zIndex: number;
	children?: ReactNode;
}

const Window: FC<WindowProps> = ({ headerText, zIndex, children }) => {
	const [browserWindowSize, setBrowserWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	});

	const [defaultPositioning, setDefaultPositioning] = useState({
		w: browserWindowSize.width / 4,
		h: "auto",
		x: browserWindowSize.width / 2 - browserWindowSize.width / 8, // 8 to center horizontal
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
				h: "auto",
				x: browserWindowSize.width / 2 - browserWindowSize.width / 2 / 2 / 2,
				y: browserWindowSize.height / 2 - browserWindowSize.height / 2 / 2
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
		>
			<div
				style={{
					height: "100%",
					overflow: "auto",
					scrollbarWidth: "thin",
					scrollbarGutter: "stable"
				}}
			>
				<div className="drag-handle window-header" style={{ zIndex: zIndex }}>
					<h3>{headerText}</h3>
				</div>

				<div className="window-content">{children}</div>
			</div>
		</Rnd>
	);
};

export default Window;
