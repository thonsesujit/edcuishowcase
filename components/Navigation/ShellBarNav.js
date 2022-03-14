import React from "react";
import dynamic from "next/dynamic";

const Button = dynamic(
	() => import("@ui5/webcomponents-react").then((m) => m.Button),
	{
		ssr: false,
	}
);
const ShellBar = dynamic(
	() => import("@ui5/webcomponents-react").then((m) => m.ShellBar),
	{
		ssr: false,
	}
);
const Avatar = dynamic(
	() => import("@ui5/webcomponents-react").then((m) => m.Avatar),
	{
		ssr: false,
	}
);

export default function ShellBarNav() {
	return (
		<ShellBar
			primary-title="Corporate Portal"
			secondary-title="secondary title"
			show-co-pilot
			show-product-switch
			show-notifications
			notifications-count="22"
			class="shellbar"
		>
			<img slot="logo" src="../.././sap_logo.png" />
			<Avatar slot="profile">
				<img src="../.././iambatman.png" />
			</Avatar>
		</ShellBar>
	);
}
