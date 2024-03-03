import React from "react";
import Image from "next/image";

import Link from "next/link";

import { EndPoint } from "@/libs/end-point";

const SeriesDetail = async ({ detailSeries, baseImgUrl }) => {
	const rating = parseFloat(detailSeries.vote_average).toFixed(1);
	const year = new Date(detailSeries.first_air_date).getFullYear().toString();

	return (
		<div className="flex flex-row justify-center gap-8 mt-14">
			{/* Series Poster */}
			<img
				src={baseImgUrl + detailSeries.poster_path}
				alt={detailSeries.name}
				className="w-72"
			/>
			{/* Series Details */}
			<div className="flex flex-col my-3 justify-center">
				{/* Series Name */}
				<h1 className="text-white text-5xl font-bold">
					{detailSeries.name}
				</h1>
				{/* Series Ratings */}
				<h2 className="text-white text-base font-medium mt-3">
					Ratings: {rating}/10 from {detailSeries.vote_count} users
				</h2>
				{/* Series Year */}
				<div className="flex flex-row items-center gap-3 mt-1">
					{/* Series Year */}
					<p className="text-white text-sm font-semibold">{year}</p>
					<p className="text-white">&#x2022;</p>
					{/* Series Seasons */}
					<p className="text-white text-sm font-semibold">
						{detailSeries.number_of_seasons} Seasons
					</p>
					<p className="text-white">&#x2022;</p>
					{/* Series Episodes */}
					<p className="text-white text-sm font-semibold">
						{detailSeries.number_of_episodes} Episodes
					</p>
					<p className="text-white">&#x2022;</p>
					{/* Series Episodes */}
					<p className="text-white text-sm font-semibold">
						{detailSeries.production_countries[0].name}
					</p>
				</div>
				{/* Series Genres */}
				<div className="flex flex-row items-center gap-3 mt-1">
					{detailSeries.genres?.map((genre) => (
						<React.Fragment key={genre.id}>
							{genre.id !== detailSeries.genres[0].id && (
								<span className="h-5 w-0.5 bg-slate-200" />
							)}
							<p className="text-white font-semibold">
								{genre.name}
							</p>
						</React.Fragment>
					))}
				</div>
				<span className="w-full bg-[#252833] h-0.5 my-4"></span>
				{/* Series Overview */}
				<p className="text-white w-96 max-h-36 overflow-hidden overflow-ellipsis font-medium text-base">
					{detailSeries.overview}
				</p>
				<div className="grid grid-cols-3 max-w-fit gap-5 mt-3">
					{detailSeries.production_companies.map((company) => {
						const slug = new EndPoint().encodeSlug(company.name);

						return (
							<Link
								key={company.id}
								href={`/browse/company?title=${slug}&id=${company.id}&type=shows`}
								className="h-16 w-16 flex justify-center items-center bg-slate-200 rounded-full"
							>
								{company.logo_path ? (
									<Image
										src={baseImgUrl + company.logo_path}
										alt={company.name}
										width={250}
										height={250}
										className="w-14"
									/>
								) : (
									<i className="fa-solid fa-user"></i>
								)}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SeriesDetail;
