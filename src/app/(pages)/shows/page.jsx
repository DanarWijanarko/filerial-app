import React from "react";

import { baseImgUrl, getSeriesDiscovered } from "@/libs/tmdb-api";

import ListsTray from "@/components/ListsTray";

const Shows = async () => {
	const newKoreanRelease = await getSeriesDiscovered(2024, "KR", 1);
	const allKoreanSeries = await getSeriesDiscovered(2020, "KR", 1);
	const newChineseRelease = await getSeriesDiscovered(2024, "CN", 1);
	const allChineseSeries = await getSeriesDiscovered(2020, "CN", 1);

	return (
		<section className="flex min-h-screen flex-col justify-start">
			<ListsTray
				headerTitle="New Korean Release"
				datas={newKoreanRelease}
				baseImgUrl={baseImgUrl}
			/>

			<ListsTray
				headerTitle="Korean Shows"
				datas={allKoreanSeries}
				baseImgUrl={baseImgUrl}
			/>

			<ListsTray
				headerTitle="New Chinese Release"
				datas={newChineseRelease}
				baseImgUrl={baseImgUrl}
			/>

			<ListsTray
				headerTitle="Chinese Shows"
				datas={allChineseSeries}
				baseImgUrl={baseImgUrl}
			/>
		</section>
	);
};

export default Shows;
