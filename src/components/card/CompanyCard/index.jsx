import React from "react";
import Image from "next/image";
import Link from "next/link";

import { baseImgUrl } from "@/libs/tmdb-api";
import { getCountryName } from "@/libs/countryIso";
import { EndPoint } from "@/libs/endPoint";

const CompanyCard = ({ data, typeParams }) => {
	const slug = new EndPoint().encodeSlug(data.name ? data.name : "");
	return (
		<Link
			href={`/browse/company?title=${slug}&id=${data.id}&type=${typeParams}`}
			className="bg-[#252833] rounded-lg p-5 flex flex-col w-96 h-56 justify-center items-center gap-4"
		>
			{data.logo_path !== null ? (
				<Image
					src={baseImgUrl + data.logo_path}
					alt="Company Logo"
					width={250}
					height={250}
					className="w-auto h-32"
					priority
				/>
			) : (
				<div className="w-44 h-auto flex justify-center items-center">
					No Image
				</div>
			)}
			<div className="flex flex-row gap-2 justify-center items-center text-white">
				<h1 className="text-right">{data.name}</h1>
				<span className="h-5 w-0.5 bg-[#16181f] place-items-center"></span>
				<h2 className="text-left">
					{data.origin_country
						? getCountryName(data.origin_country)
						: "No Data"}
				</h2>
			</div>
		</Link>
	);
};

export default CompanyCard;
