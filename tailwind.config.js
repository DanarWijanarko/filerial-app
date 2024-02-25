/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// backgroundImage: {
			// 	"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			// 	"gradient-conic":
			// 		"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			// },
		},
		// colors: {
		// 	color: {
		// 		primary: "#ffffff",
		// 		secondary: "#979799",
		// 		semiLight: "#788096",
		// 		semiDark: "#16181f",
		// 		dark: "#0f1014",
		// 	},
		// },
	},
	plugins: [],
};
