"use client";

import { useEffect, useState } from "react";

import { Series, baseImgUrl } from "@/libs/tmdb-api";
import { MyDate } from "@/libs/my-date";

const SeriesEpisodes = ({ detailSeries }) => {
	const series = new Series();

	const [seriesSeasons, setSeriesSeasons] = useState(1);
	const [seriesEpisodes, setSeriesEpisodes] = useState([]);

	useEffect(() => {
		series.getEpisodes(detailSeries.id, seriesSeasons).then((result) => {
			setSeriesEpisodes(result);
		});
	});

	const selectSeasons = async (val) => {
		setSeriesSeasons(val);
	};

	return (
		<>
			<h1 className="text-slate-200 text-4xl font-semibold mx-8 mb-6">
				Episodes
			</h1>

			{/* Select Seasons Start */}
			<select
				id="season"
				className="bg-[#252833] border border-[#424757] text-slate-200 text-sm rounded-lg focus:ring-2 focus:ring-[#8c95af] block w-72 p-2.5 mx-8"
				onChange={({ target }) => selectSeasons(target.value)}
			>
				{[...Array(detailSeries.number_of_seasons)].map((_, index) => (
					<option
						key={index + 1}
						value={index + 1}
						className="hover:bg-red-500"
					>
						Season {index + 1}
					</option>
				))}
			</select>
			{/* Select Seasons End */}

			<div className="flex flex-col gap-7 mt-8 mx-8">
				{seriesEpisodes.map((episode, i) => {
					const date = new MyDate(episode.air_date).formatYYYYMMDD();
					const runtime = new MyDate().getHoursMinutes(
						episode.runtime
					);

					return (
						<div className="flex flex-row gap-7" key={i}>
							{episode.still_path ? (
								<img
									alt={episode.name}
									src={baseImgUrl + episode.still_path}
									className="w-80 rounded-2xl border border-[#252833]"
								/>
							) : (
								<div className="w-80 h-[180px] bg-[#252833] flex justify-center items-center rounded-lg">
									<p className="text-slate-200 text-xl font-bold">
										No Image Preview
									</p>
								</div>
							)}
							<div className="block my-3">
								<h1 className="text-slate-200 font-bold text-2xl">
									{episode.name}
								</h1>
								<div className="py-1 flex flex-row gap-2 mt-1">
									<p className="text-slate-200 text-md font-medium">
										S{episode.season_number}
									</p>
									<p className="text-slate-200 text-md font-medium">
										&#x2022;
									</p>
									<p className="text-slate-200 text-md font-medium">
										E{episode.episode_number}
									</p>
									<p className="text-slate-200 text-md font-medium">
										&#x2022;
									</p>
									<p className="text-slate-200 text-md font-medium">
										{date}
									</p>
									<p className="text-slate-200 text-md font-medium">
										&#x2022;
									</p>
									<p className="text-slate-200 text-md font-bold">
										{runtime.hours
											? runtime.hours + `h `
											: ""}
										{runtime.minutes + `m`}
									</p>
								</div>
								<p className="text-slate-200 text-md mt-1">
									{episode.overview}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default SeriesEpisodes;
