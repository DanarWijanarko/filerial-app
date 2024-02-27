import Link from "next/link";

const AllCards = ({ data, baseImgUrl }) => {
	const poster = baseImgUrl + data.poster_path;
	const backdrop = baseImgUrl + data.backdrop_path;
	const name = data.name ? data.name : data.title;
	const countries = data.origin_country
		? data.origin_country[0]
		: data.original_language;
	const rating = parseFloat(data.vote_average).toFixed(1);
	const year = new Date(
		data.first_air_date ? data.first_air_date : data.release_date
	).getFullYear();
	const overview = data.overview;
	const slug = name.replace(/ /g, "-").toLowerCase();

	var adult = "";
	let mediaType = "";

	if (data.adult == "false") {
		adult = "17+";
	} else {
		adult = "13+";
	}

	if (data.media_type == "tv") {
		mediaType = "shows";
	} else if (data.media_type == "movie") {
		mediaType = "movies";
	}

	return (
		<Link
			href={`/${mediaType}/detail/${slug}/${data.id}`}
			className="w-80 rounded-md group hover:scale-125 transition-all hover:cursor-pointer"
		>
			{/* Movies Poster */}
			<img
				src={poster}
				alt={name}
				className="group-hover:hidden group-hover:scale-0 transition-all rounded-md w-80 h-[28rem]"
			/>
			{/* Detail Movies */}
			<div className="hidden bg-[#16181f] group-hover:flex h-[28rem] flex-col rounded-md transition-all">
				<img src={backdrop} alt={name} className="rounded-t-md" />
				<div className="py-3 px-4">
					<h3 className="text-white text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
						{name}
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
						{overview}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default AllCards;
