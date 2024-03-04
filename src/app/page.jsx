import { getListFromCompany } from "@/libs/tmdb-api";

import ListsTray from "@/components/ListsTray";
import Skeletons from "@/components/Skeleton/ListTray";

export default async function Home() {
	const company = [
		{
			id: 420,
			name: "Marvels",
			slug: "marvels",
			type: "movies",
		},
		{
			id: 86418,
			name: "Studio Dragons",
			slug: "studio-dragons",
			type: "shows",
		},
		{
			id: 4,
			name: "Paramount",
			slug: "paramount",
			type: "movies",
		},
		{
			id: 119174,
			name: "Studio N",
			slug: "studio-n",
			type: "shows",
		},
		{
			id: 3491,
			name: "Showbox Film",
			slug: "showbox-film",
			type: "movies",
		},
		{
			id: 90935,
			name: "JTBC",
			slug: "youku",
			type: "shows",
		},
		{
			id: 97898,
			name: "Youku",
			slug: "youku",
			type: "shows",
		},
	];

	const lists = await Promise.all(
		company.map(async (result) => {
			let mediaType;

			if (result.type === "shows") {
				mediaType = "tv";
			} else if (result.type === "movies") {
				mediaType = "movie";
			}

			const list = await getListFromCompany(result.id, mediaType, 1);

			return {
				id: result.id,
				headerTitle: `Featuring ${result.name}`,
				headerHref: `/browse/company?title=featuring-${result.slug}&id=${result.id}&type=${result.type}`,
				mediaType: result.type,
				datas: list,
			};
		})
	);

	return (
		<section className="flex min-h-screen flex-col justify-start">
			{/* <Skeletons /> */}
			{lists.map((list) => {
				return (
					<ListsTray
						key={list.id}
						headerTitle={list.headerTitle}
						headerHref={list.headerHref}
						mediaType={list.mediaType}
						datas={list.datas}
					/>
				);
			})}
		</section>
	);
}
