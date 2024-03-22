import "./button.css";

type ButtonProps = {
	text: string;
};

const Button = (props: ButtonProps) => {
	return <button className="button">{props.text}</button>;
};

export default Button;
