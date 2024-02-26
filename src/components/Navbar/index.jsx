import Image from "next/image";
import Link from "next/link";
import NavButton from "./NavButton";

const Navbar = () => {
	return (
		<nav className="fixed left-0 top-0 min-h-screen py-8 flex flex-col justify-center items-center w-24 group transition-all z-50">
			<span className="fixed -z-10 -left-64 group-hover:left-0 top-0 min-h-screen w-64 bg-gradient-to-r from-[#0f1014] from-45% to-transparent transition-all duration-500" />
			{/* Logo */}
			<Link href="/" className="absolute top-9 left-[18px]">
				<Image
					src="/filerial.png"
					alt="Logo"
					width={50}
					height={50}
					priority
					className="w-auto h-auto"
				/>
			</Link>
			{/* Button Routing */}
			<div className="flex flex-col absolute justify-start items-start left-8 gap-10">
				{/* Profile Page */}
				<NavButton
					path="/profile"
					profilePic="/sakura2.jpg"
					name="profile"
					isProfile={true}
				/>
				{/* Search Page */}
				<NavButton
					path="/search"
					icon="fa-magnifying-glass"
					name="Search"
				/>
				{/* Home Page */}
				<NavButton path="/" icon="fa-house" name="Home" />
				{/* Series Page */}
				<NavButton path="/shows" icon="fa-desktop" name="Series" />
				{/* Movies Page */}
				<NavButton path="/movies" icon="fa-film" name="Movies" />
			</div>
		</nav>
	);
};

export default Navbar;
