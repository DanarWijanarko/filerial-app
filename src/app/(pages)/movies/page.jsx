import { Movies } from "@/libs/tmdb-api";
import React from "react";

import ListsTray from "@/components/ListsTray";

const Page = async () => {
	const trendingMovies = await new Movies().getTrending();

	return (
		<section className="flex min-h-screen flex-col justify-start">
			<ListsTray
				key={trendingMovies.id}
				headerTitle="Trending Movies"
				headerHref={`/browse/company?title=featuring-trending-movies&id=${"w"}&type=movies`}
				mediaType="movies"
				datas={trendingMovies}
			/>
		</section>
	);
};

export default Page;
