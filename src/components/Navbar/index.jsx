import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed left-0 top-0 min-h-screen py-8 flex flex-col justify-center items-center w-24 group transition-all">
			<span className="fixed -z-10 -left-64 group-hover:left-0 top-0 min-h-screen w-64 bg-gradient-to-r from-[#0f1014] from-45% to-transparent transition-all duration-500" />
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
			<div className="flex flex-col absolute justify-start items-start left-8 gap-10">
				<Link
					href="/profile"
					className="flex justify-center items-center gap-4 text-gray-500 text-xl hover:translate-x-2 hover:text-white transition-all duration-200"
				>
					<Image
						src="/filerial.png"
						alt="Profile"
						height={10}
						width={10}
						className="w-8 duration-200 h-auto z-10"
					/>
					<p className="opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all font-extrabold duration-300">
						Profile
					</p>
				</Link>
				<Link
					href="/search"
					className="flex justify-center items-center gap-4 text-gray-500 text-xl hover:translate-x-2 hover:text-white transition-all duration-200"
				>
					<i className="fa-regular fa-magnifying-glass w-8 font-extrabold text-2xl duration-200 z-10"></i>
					<p className="opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all font-extrabold duration-300">
						Search
					</p>
				</Link>
				<Link
					href="/"
					className="flex justify-center items-center gap-4 text-gray-500 text-xl hover:translate-x-2 hover:text-white transition-all duration-200"
				>
					<i className="fa-regular fa-house w-8 font-extrabold text-2xl duration-200 z-10"></i>
					<p className="opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all font-extrabold duration-300">
						Home
					</p>
				</Link>
				<Link
					href="/series"
					className="flex justify-center items-center gap-4 text-gray-500 text-xl hover:translate-x-2 hover:text-white transition-all duration-200"
				>
					<i className="fa-regular fa-desktop w-8 font-extrabold text-2xl duration-200 z-10"></i>
					<p className="opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all font-extrabold duration-300">
						Series
					</p>
				</Link>
				<Link
					href="/movies"
					className="flex justify-center items-center gap-4 text-gray-500 text-xl hover:translate-x-2 hover:text-white transition-all duration-200"
				>
					<i className="fa-regular fa-film w-8 font-extrabold text-2xl duration-200 z-10"></i>
					<p className="opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all font-extrabold duration-300">
						Movies
					</p>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
