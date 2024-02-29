import React from "react";

import { Series } from "@/libs/tmdb-api";

import ListsTray from "@/components/ListsTray";

const Shows = async () => {
	const series = new Series();

	const newKoreanRelease = await series.getDiscovered(2024, "KR", 1);
	const allKoreanSeries = await series.getDiscovered(2020, "KR", 1);
	const newChineseRelease = await series.getDiscovered(2024, "CN", 1);
	const allChineseSeries = await series.getDiscovered(2020, "CN", 1);

	return (
		<section className="flex min-h-screen flex-col justify-start">
			<ListsTray
				headerTitle="New Korean Release"
				headerHref={"/"}
				mediaType="shows"
				datas={newKoreanRelease}
			/>

			<ListsTray
				headerTitle="Korean Shows"
				headerHref={"/"}
				datas={allKoreanSeries}
			/>

			<ListsTray
				headerTitle="New Chinese Release"
				headerHref={"/"}
				mediaType="shows"
				datas={newChineseRelease}
			/>

			<ListsTray
				headerTitle="Chinese Shows"
				headerHref={"/"}
				datas={allChineseSeries}
			/>
		</section>
	);
};

export default Shows;
