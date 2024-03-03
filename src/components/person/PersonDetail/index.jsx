import React from "react";

import { MyDate } from "@/libs/my-date";
import { baseImgUrl } from "@/libs/tmdb-api";

const PersonDetail = ({ personDetail }) => {
	const birthDate = new MyDate(personDetail.birthday);
	const born = birthDate.formatYYYYMMDD();
	const age = birthDate.getAge();

	const genders = {
		0: "Not Set",
		1: "Female",
		2: "Male",
		3: "Unknown",
	};
	const gender = genders[personDetail.gender];

	return (
		<div className="flex flex-row justify-center gap-8 mt-14">
			{/* Person Picture */}
			<img
				src={baseImgUrl + personDetail.profile_path}
				alt={personDetail.name}
				className="max-w-[25rem] object-cover rounded-lg"
			/>
			{/* Person Details */}
			<div className="flex flex-col py-5">
				{/* Person Name */}
				<h1 className="text-slate-200 text-5xl font-bold">
					{personDetail.name}
				</h1>
				{/* Person Knowns */}
				<h2 className="text-slate-200 text-base font-medium mt-3 max-w-[760px]">
					<span className="font-bold">Also known as :</span>{" "}
					{personDetail.also_known_as?.map((name, i) => (
						<React.Fragment key={i}>
							{i !== 0 && ",  "}
							{name}
						</React.Fragment>
					))}
				</h2>
				{/* Person Popularity */}
				<h2 className="text-slate-200 text-base font-medium mt-2">
					<span className="font-bold">Popularity :</span>{" "}
					{personDetail.popularity}
				</h2>
				{/* Person Place of Birth */}
				<h2 className="text-slate-200 text-base font-medium mt-2">
					<span className="font-bold">Place of Birth :</span>{" "}
					{personDetail.place_of_birth}
				</h2>
				{/* Person Gender */}
				<h2 className="text-slate-200 text-base font-medium mt-2">
					<span className="font-bold">Gender :</span> {gender}
				</h2>
				{/* Person Born */}
				<h2 className="text-slate-200 text-base font-medium mt-2">
					<span className="font-bold">Born :</span> {born}
				</h2>
				{/* Person Age */}
				<h2 className="text-slate-200 text-base font-medium mt-2">
					<span className="font-bold">Age :</span> {age}
				</h2>
				<span className="w-full bg-[#252833] h-0.5 my-5"></span>
				{/* Person Overview */}
				<p className="text-slate-200 max-w-[760px] overflow-hidden overflow-ellipsis font-medium text-lg">
					{personDetail.biography}
				</p>
			</div>
		</div>
	);
};

export default PersonDetail;
