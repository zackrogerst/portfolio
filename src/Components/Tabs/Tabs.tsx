import "./tabs.css";

import content from "../../content.json";

const Tabs = () => {
	let { tabsNavItems } = content.tabs;

	return (
		<>
			<div>
				<ul className="tabs-nav">
					{tabsNavItems.map((navItem: string) => {
						return <li className="tabs-nav-item">{navItem}</li>;
					})}
				</ul>
			</div>
			<div>{/* Tabs Modal */}</div>
		</>
	);
};

export default Tabs;
