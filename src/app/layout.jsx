import { Recursive } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = {
	title: "Filerial",
	description: "Generated by danarwijanarko",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${recursive.className} min-h-screen bg-[#0f1014] ps-16`}
				suppressHydrationWarning={true}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
