import Link from "next/link";

import {
	baseImgUrl,
	getallKoreanSeries,
	getAllChineseSeries,
} from "@/libs/tmdb-api";

import ListsTray from "@/components/ListsTray";

export default async function Home() {
	const allKoreanSeries = await getallKoreanSeries(1);
	const allChineseSeries = await getAllChineseSeries(1);

	return (
		<section className="flex min-h-screen flex-col justify-start">
			<ListsTray
				headerTitle="Korean Shows"
				datas={allKoreanSeries}
				baseImgUrl={baseImgUrl}
			/>

			<ListsTray
				headerTitle="Chinese Shows"
				datas={allChineseSeries}
				baseImgUrl={baseImgUrl}
			/>

			<span className="mb-96"></span>
		</section>
	);
}
