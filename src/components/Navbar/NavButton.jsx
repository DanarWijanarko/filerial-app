"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const NavButton = ({ path, icon, profilePic, name, isProfile = false }) => {
	const pathname = usePathname();

	return isProfile ? (
		<Link
			href="/profile"
			className="flex justify-center items-center gap-4 text-gray-500 text-xl hover:translate-x-2 hover:text-white transition-all duration-200"
		>
			<Image
				src={profilePic}
				alt="Profile"
				height={15}
				width={15}
				className="w-8 duration-200 h-auto z-10 rounded-full"
			/>
			<p className="opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all font-extrabold duration-300">
				Profile
			</p>
		</Link>
	) : (
		<Link
			href={path}
			className={clsx(
				"flex justify-center items-center gap-4 text-gray-500 text-xl hover:translate-x-2 hover:text-white transition-all duration-200",
				{
					"text-white": pathname === path,
				}
			)}
		>
			<i
				className={`fa-solid ${icon} w-8 font-extrabold text-2xl duration-200 z-10`}
			></i>
			<p className="opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all font-extrabold duration-300">
				{name}
			</p>
		</Link>
	);
};

export default NavButton;
