import { ReactNode, FC } from "react";
import Draggable from "react-draggable";
import "./dialog.css";

interface DialogProps {
	headerText: string;
	zIndex: number;
	children?: ReactNode;
}

const Dialog: FC<DialogProps> = ({ headerText, zIndex, children }) => {
	return (
		<Draggable handle="strong" bounds="parent">
			<div className="dialog-container" style={{ zIndex: zIndex }}>
				<strong className="cursor">
					<div className="dialog-header">
						<h3>{headerText}</h3>
					</div>
				</strong>
				<div className="dialog-content">{children}</div>
			</div>
		</Draggable>
	);
};

export default Dialog;
