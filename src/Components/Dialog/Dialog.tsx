import { ReactNode, FC, useState, useEffect } from "react";
import { Rnd } from "react-rnd";

import "./dialog.css";

interface DialogProps {
	headerText: string;
	zIndex: number;
	children?: ReactNode;
}

const Dialog: FC<DialogProps> = ({ headerText, zIndex, children }) => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	});

	const [defaultPositioning, setDefaultPositioning] = useState({
		w: windowSize.width / 4,
		h: "auto",
		x: windowSize.width / 2 - windowSize.width / 8, // 8 to center horizontal
		y: windowSize.height / 2 - windowSize.height / 3
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
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
			setDefaultPositioning({
				w: windowSize.width / 4,
				h: "auto",
				x: windowSize.width / 2 - windowSize.width / 2 / 2 / 2,
				y: windowSize.height / 2 - windowSize.height / 2 / 2
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
				<div className="drag-handle dialog-header" style={{ zIndex: zIndex }}>
					<h3>{headerText}</h3>
				</div>

				<div className="dialog-content">{children}</div>
			</div>
		</Rnd>
	);
};

export default Dialog;
