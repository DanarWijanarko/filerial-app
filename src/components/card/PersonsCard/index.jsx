import React from "react";
import Link from "next/link";
import { EndPoint } from "@/libs/end-point";
import Image from "next/image";
import { baseImgUrl } from "@/libs/tmdb-api";

const PersonsCard = ({ data }) => {
	const genders = {
		0: "Not Set",
		1: "Female",
		2: "Male",
		3: "Unknown",
	};

	const gender = genders[data.gender];
	const depart = data.known_for_department;
	const name = data.name;
	const originalName = data.original_name;
	const popularity = data.popularity;
	const profileImg = baseImgUrl + data.profile_path;
	const slug = new EndPoint().encodeSlug(data.name ? data.name : "");

	return (
		<Link
			href={`/browse/people/detail?person_name=${slug}&person_id=${data.id}`}
			className="bg-[#252833] relative rounded-lg flex hover:scale-105 flex-row w-52 gap-4 group transition-all duration-300"
		>
			<Image
				src={profileImg}
				alt={name}
				width={500}
				height={500}
				className="w-52 rounded-lg group-hover:opacity-0 transition-all duration-300"
			/>
			<div className="absolute p-5 w-full h-full flex flex-col justify-between rounded-lg opacity-0 group-hover:opacity-100 bg-[#16181f] transition-all duration-300">
				<div className="block text-white">
					<h1 className="text-sm text-gray-400 font-semibold">
						Name
					</h1>
					<p className="text-base font-bold">{name}</p>
				</div>
				<div className="block text-white">
					<h1 className="text-sm text-gray-400 font-semibold">
						Native Name
					</h1>
					<p className="text-base font-bold">{originalName}</p>
				</div>
				<div className="block text-white">
					<h1 className="text-sm text-gray-400 font-semibold">
						Department
					</h1>
					<p className="text-base font-bold">{depart}</p>
				</div>
				<div className="block text-white">
					<h1 className="text-sm text-gray-400 font-semibold">
						Gender
					</h1>
					<p className="text-base font-bold">{gender}</p>
				</div>
				<div className="block text-white">
					<h1 className="text-sm text-gray-400 font-semibold">
						Popularity
					</h1>
					<p className="text-base font-bold">{popularity}</p>
				</div>
			</div>
		</Link>
	);
};

export default PersonsCard;
