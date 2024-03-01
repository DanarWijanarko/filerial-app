"use client";

import React from "react";

import { useSearchParams } from "next/navigation";

const Page = () => {
	const searchParams = useSearchParams();

	const name = searchParams.get("person_name");
	const id = searchParams.get("person_id");

	return (
		<>
			<div className="text-3xl text-white">
				Name : {name}, ID: {id}
			</div>
		</>
	);
};

export default Page;
