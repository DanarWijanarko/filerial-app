"use client";

import React, { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import { Person } from "@/libs/tmdb-api";

import PersonDetail from "@/components/person/PersonDetail";
import Divider from "@/components/Utilities/Divider";
import PersonImages from "@/components/person/PersonImages";
import PersonSeries from "@/components/person/PersonSeries";

const Page = () => {
	const searchParams = useSearchParams();
	const name = searchParams.get("person_name");
	const id = searchParams.get("person_id");

	const person = new Person(id);

	const [personDetail, setPersonDetail] = useState([]);
	const [personImages, setPersonImages] = useState([]);
	const [personSeries, setPersonSeries] = useState([]);
	const [personMovies, setPersonMovies] = useState([]);

	useEffect(() => {
		person.getDetail().then((result) => {
			setPersonDetail(result);
		});
		person.getImageList().then((result) => {
			setPersonImages(result);
		});
		person.getSeriesList().then((result) => {
			setPersonSeries(result);
		});
		person.getMoviesList().then((result) => {
			setPersonMovies(result);
		});
	}, []);

	console.log(personMovies);

	return (
		<div className="flex flex-col mx-11">
			<PersonDetail personDetail={personDetail} />

			<Divider />

			<PersonImages data={personImages} />

			<Divider />

			<PersonSeries data={personSeries} />
		</div>
	);
};

export default Page;
