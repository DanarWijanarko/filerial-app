"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getAllTrending, Search } from "@/libs/tmdb-api";

import AllCards from "@/components/card/AllCards";
import InputSearch from "@/components/InputSearch";

const Page = () => {
	const searchParams = useSearchParams();
	const search = new Search();

	const [allTrending, setAllTrending] = useState([]);

	useEffect(() => {
		getAllTrending().then((res) => {
			setAllTrending(res);
		});
	}, [searchParams]);

	if (searchParams.has("query")) {
		search.multi(searchParams.get("query")).then((res) => {
			setAllTrending(res);
		});
	} else {
		getAllTrending().then((res) => {
			setAllTrending(res);
		});
	}

	return (
		<div className="mt-10 mx-11">
			<InputSearch />

			<div className="flex justify-start text-xl font-bold mt-10">
				<h1 className="text-white">
					{searchParams.has("query")
						? `Result for : ${searchParams.get("query")}`
						: "Most Search"}
				</h1>
			</div>

			<div className="flex flex-wrap gap-[29.5px] mt-5 justify-center items-center">
				{allTrending.map((trending) => (
					<AllCards key={trending.id} data={trending} />
				))}
			</div>
		</div>
	);
};

export default Page;
