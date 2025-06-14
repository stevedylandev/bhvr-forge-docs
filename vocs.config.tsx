import { defineConfig } from "vocs";

export default defineConfig({
	title: "bhvr forge",
	baseUrl: "https://forge.bhvr.dev",
	description:
		"Typesafe solidity and typescript blockchain apps powered by Bun, Hono, Vite, React, and Forge",
	iconUrl: "/icon.png",
	logoUrl: {
		dark: "/logo-dark.svg",
		light: "/logo-light.svg",
	},
	ogImageUrl: "/og.png",
	head({ path }) {
		const fcData = JSON.stringify({
			version: "next",
			imageUrl: "https://forge.bhvr.dev/image.png",
			button: {
				title: "bhvr forge",
				action: {
					type: "launch_frame",
					name: "bhvr forge",
					url: `https://forge.bhvr.dev${path}`,
					splashImageUrl: "https://forge.bhvr.dev/splash.png",
					splashBackgroundColor: "#121113",
				},
			},
		});
		return <meta name="fc:frame" content={fcData} />;
	},
	socials: [
		{
			icon: "github",
			link: "https://github.com/stevedylandev/bhvr-forge",
		},
	],
	markdown: {
		code: {
			themes: {
				light: "vitesse-light",
				dark: "vitesse-dark",
			},
		},
	},
	theme: {
		colorScheme: "dark",
		accentColor: "#BD976A",
	},
	editLink: {
		pattern:
			"https://github.com/stevedylandev/bhvr-forge-docs/edit/main/docs/pages/:path",
		text: "Edit on GitHub",
	},
	search: {},
});
