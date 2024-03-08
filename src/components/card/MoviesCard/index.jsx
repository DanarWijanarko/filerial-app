import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Responses } from "@/libs/response";

const MoviesCard = ({ data }) => {
	const response = Responses(data);

	return (
		<Link
			href={`/movies/detail/${response.slug}/${data.id}`}
			className="w-80 rounded-md group hover:scale-110 transition-all hover:cursor-pointer"
		>
			{/* Movies Poster */}
			<Image
				src={response.poster_path}
				alt={response.title}
				width={250}
				height={250}
				className="group-hover:hidden group-hover:scale-0 transition-all rounded-md w-80 h-[28rem]"
			/>
			{/* Detail Movies */}
			<div className="hidden bg-[#16181f] group-hover:flex h-[28rem] flex-col rounded-md transition-all">
				<Image
					src={response.backdrop_path}
					alt={response.title}
					width={250}
					height={250}
					className="w-auto h-auto rounded-t-md"
				/>
				<div className="py-3 px-4">
					<h3 className="text-white text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
						{response.title}
					</h3>
					<div className="py-1 flex flex-row gap-2">
						<p className="text-[#8c95af] text-md">
							{response.release_date}
						</p>
						<p className="text-[#8c95af] text-md">&#x2022;</p>
						<p className="text-[#8c95af] text-md">
							{response.countries}
						</p>
						<p className="text-[#8c95af] text-md">&#x2022;</p>
						<p className="text-[#8c95af] text-md">
							{response.vote_average}
						</p>
						<p className="text-[#8c95af] text-md">&#x2022;</p>
						<p className="text-[#8c95af] text-md">
							{response.adult}
						</p>
					</div>
					<p className="text-[#8c95af] text-md h-[170px] overflow-clip text-ellipsis">
						{response.overview}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default MoviesCard;
