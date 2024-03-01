"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Movies, Series } from "@/libs/tmdb-api";
import { EndPoint } from "@/libs/endPoint";

import AllCards from "@/components/card/AllCards";

const Page = () => {
	const searchParams = useSearchParams();
	const series = new Series();
	const movies = new Movies();

	const [list, setList] = useState([]);

	const title = searchParams.get("title");
	const companyId = searchParams.get("id");
	const type = searchParams.get("type");

	useEffect(() => {
		if (type === "shows") {
			series.getListFromCompany(companyId).then((result) => {
				setList(result);
			});
		} else if (type === "movies") {
			movies.getListFromCompany(companyId).then((result) => {
				setList(result);
			});
		}
	}, []);

	return (
		<div className="my-10 mx-11 flex flex-col justify-center items-center">
			<h1 className="text-3xl font-bold text-white">
				{new EndPoint().titleCase(title)}
			</h1>
			<div className="flex flex-wrap gap-[29.5px] mt-8 justify-center items-center">
				{list.map((list) => (
					<AllCards key={list.id} data={list} type={type} />
				))}
			</div>
		</div>
	);
};

export default Page;
