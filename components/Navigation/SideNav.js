import React from "react";
import dynamic from "next/dynamic";

const SideNavigation = dynamic(
	() => import("@ui5/webcomponents-react").then((m) => m.SideNavigation),
	{
		ssr: false,
	}
);

// const ui5SideNav = async () => {
// 	const { SideNavigation } = await import("@ui5/webcomponents-react");
// 	return SideNavigation;
// };

const SideNavigationItem = dynamic(
	() => import("@ui5/webcomponents-react").then((m) => m.SideNavigationItem),
	{
		ssr: false,
	}
);
const SideNavigationSubItem = dynamic(
	() => import("@ui5/webcomponents-react").then((m) => m.SideNavigationSubItem),
	{
		ssr: false,
	}
);

function SideNav() {
	return (
		<SideNavigation>
			<SideNavigationItem text="Home" icon="home"></SideNavigationItem>
			<SideNavigationItem text="People" expanded icon="group">
				<SideNavigationSubItem text="From My Team"></SideNavigationSubItem>
				<SideNavigationSubItem text="From Other Teams"></SideNavigationSubItem>
			</SideNavigationItem>
			<SideNavigationItem
				text="Locations"
				icon="locate-me"
				selected
			></SideNavigationItem>
			<SideNavigationItem text="Events" icon="calendar">
				<SideNavigationSubItem text="Local"></SideNavigationSubItem>
				<SideNavigationSubItem text="Others"></SideNavigationSubItem>
			</SideNavigationItem>

			<SideNavigationItem
				slot="fixedItems"
				text="Useful Links"
				icon="chain-link"
			></SideNavigationItem>
			<SideNavigationItem
				slot="fixedItems"
				text="History"
				icon="history"
			></SideNavigationItem>
		</SideNavigation>
	);
}

export default SideNav;
