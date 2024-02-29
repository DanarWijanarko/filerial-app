import React from "react";

import { baseImgUrl, Series } from "@/libs/tmdb-api";

import SeriesDetail from "@/components/detail/SeriesDetail";
import SeriesCredits from "@/components/detail/SeriesCredits";
import SeriesEpisodes from "@/components/detail/SeriesEpisodes";
import SeriesRecommendations from "@/components/detail/SeriesRecommendations";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Divider from "@/components/Utilities/Divider";

const DetailShow = async ({ params }) => {
	const seriesId = params.key[1];
	const series = new Series();

	const seriesVideo = await series.getVideos(seriesId);
	const detailSeries = await series.getDetails(seriesId);
	const seriesCredits = await series.getCredits(seriesId);
	const seriesRecommendations = await series.getRecommendations(seriesId);

	const videoId =
		seriesVideo.length < 1
			? "null"
			: seriesVideo.filter((x) => x.type === "Trailer")[0].key;

	return (
		<>
			<div className="flex flex-col px-5">
				<SeriesDetail
					detailSeries={detailSeries}
					baseImgUrl={baseImgUrl}
				/>

				<Divider />

				<SeriesCredits
					seriesCredits={seriesCredits}
					baseImgUrl={baseImgUrl}
				/>

				<Divider />

				<SeriesEpisodes detailSeries={detailSeries} />

				<Divider />

				<SeriesRecommendations
					seriesRecommendations={seriesRecommendations}
					baseImgUrl={baseImgUrl}
				/>

				<VideoPlayer videoId={videoId} />
			</div>
		</>
	);
};

export default DetailShow;
