import React from "react";

import MoviesCard from "@/components/card/MoviesCard";

const PersonMovies = ({ data }) => {
	return (
		<>
			<h1 className="text-white text-xl font-medium mb-5 -mt-1">
				Movies
			</h1>
			<div className="flex flex-wrap gap-3 justify-center">
				{data.map((result, index) => (
					<MoviesCard key={index} data={result} />
				))}
			</div>
		</>
	);
};

export default PersonMovies;
