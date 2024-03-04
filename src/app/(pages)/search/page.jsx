"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getAllTrending, Search } from "@/libs/tmdb-api";

import AllCards from "@/components/card/AllCards";
import InputSearch from "@/components/InputSearch";
import CompanyCard from "@/components/card/CompanyCard";

const Page = () => {
	const searchParams = useSearchParams();
	const search = new Search();

	const [allTrending, setAllTrending] = useState([]);

	let content;

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response;
				if (searchParams.has("query")) {
					const filterParams = searchParams.get("filter");
					const queryParams = searchParams.get("query");
					if (filterParams === "movieSeries") {
						response = await search.multi(queryParams);
					} else if (filterParams === "companies") {
						response = await search.company(queryParams);
					} else if (filterParams === "collections") {
						response = await search.collection(queryParams);
					}
				} else {
					response = await getAllTrending();
				}
				setAllTrending(response);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [searchParams]);

	switch (searchParams.get("filter")) {
		case "movieSeries":
			content = allTrending.map((trending) => (
				<AllCards key={trending.id} data={trending} />
			));
			break;
		case "companies":
			content = allTrending.map((trending) => (
				<CompanyCard
					key={trending.id}
					data={trending}
					typeParams={searchParams.get("type")}
				/>
			));
			break;
		// Search by Person
		default:
			content = allTrending.map((trending) => (
				<AllCards key={trending.id} data={trending} />
			));
	}

	return (
		<div className="pt-10 mx-11">
			<InputSearch />

			<div className="flex justify-start text-xl font-bold mt-10">
				<h1 className="text-white">
					{searchParams.has("query")
						? `Result for : ${searchParams.get("query")}`
						: "Most Search"}
				</h1>
			</div>

			<div className="flex flex-wrap gap-[29.5px] mt-5 justify-center items-center">
				{content}
			</div>
		</div>
	);
};

export default Page;
