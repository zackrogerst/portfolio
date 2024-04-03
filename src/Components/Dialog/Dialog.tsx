import { ReactNode, FC } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

import "./dialog.css";

interface DialogProps {
	headerText: string;
	zIndex: number;
	children?: ReactNode;
}

const enable = {
	top: false,
	right: true,
	bottom: true,
	left: true,
	topRight: false,
	bottomRight: true,
	bottomLeft: true,
	topLeft: false
};

const Dialog: FC<DialogProps> = ({ headerText, zIndex, children }) => {
	return (
		<Draggable handle="strong" bounds="html">
			<Resizable
				bounds={"window"}
				enable={enable}
				className="dialog-container"
				defaultSize={{ width: 600, height: "auto" }}
			>
				<div style={{ zIndex: zIndex }}>
					<strong className="cursor">
						<div className="dialog-header">
							<h3>{headerText}</h3>
						</div>
					</strong>
					<div className="dialog-content">{children}</div>
				</div>
			</Resizable>
		</Draggable>
	);
};

export default Dialog;
