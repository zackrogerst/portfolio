import { FC } from "react";

interface ForwardArrowIconProps {
	iconColor: string;
}

const ForwardArrowIcon: FC<ForwardArrowIconProps> = ({iconColor}) => {
	return (
		<svg
			cursor={"pointer"}
			width="25"
			height="15"
			viewBox="0 0 9 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.649787 0.393388C1.18964 -0.131129 2.06492 -0.131129 2.60477 0.393388L8.59511 6.21354C9.13496 6.73806 9.13496 7.58847 8.59511 8.11299L2.60477 13.9331C2.06492 14.4577 1.18964 14.4577 0.649787 13.9331C0.109932 13.4086 0.109932 12.5582 0.649787 12.0337L5.66263 7.16327L0.649787 2.29284C0.109932 1.76832 0.109932 0.917906 0.649787 0.393388Z"
				fill={iconColor}
			/>
		</svg>
	);
};

export default ForwardArrowIcon;
