const Cards = ({ series, baseImgUrl }) => {
	const countries = series.origin_country[0];
	const rating = parseFloat(series.vote_average).toFixed(1);
	const year = new Date(series.first_air_date).getFullYear();
	var adult = "";

	if (series.adult == "false") {
		adult = "17+";
	} else {
		adult = "13+";
	}

	return (
		<div className="w-72 rounded-md group hover:scale-125 transition-all hover:cursor-pointer">
			{/* Movies Poster */}
			<img
				src={baseImgUrl + series.poster_path}
				alt={series.name}
				className="group-hover:hidden group-hover:scale-0 transition-all rounded-md w-72 h-[27rem]"
			/>
			{/* Detail Movies */}
			<div className="hidden bg-[#16181f] group-hover:flex h-[27rem] flex-col rounded-md transition-all">
				<img
					src={baseImgUrl + series.backdrop_path}
					alt={series.name}
					className="rounded-t-md"
				/>
				<div className="py-3 px-4">
					<h3 className="text-white text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
						{series.name}
					</h3>
					<div className="py-1 flex flex-row gap-2">
						<p className="text-[#8c95af] text-md">{year}</p>
						<p className="text-[#8c95af] text-md">&#x2022;</p>
						<p className="text-[#8c95af] text-md">{countries}</p>
						<p className="text-[#8c95af] text-md">&#x2022;</p>
						<p className="text-[#8c95af] text-md">{rating}</p>
						<p className="text-[#8c95af] text-md">&#x2022;</p>
						<p className="text-[#8c95af] text-md">{adult}</p>
					</div>
					<p className="text-[#8c95af] text-md h-[170px] overflow-clip text-ellipsis">
						{series.overview}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cards;
