import { Responses } from "@/libs/response";
import Link from "next/link";

const AllCards = ({ data, type }) => {
	const response = Responses(data);

	let mediaType;

	if (data.media_type == "tv" || type === "shows") {
		mediaType = "shows";
	} else if (data.media_type == "movie" || type === "movies") {
		mediaType = "movies";
	}

	return (
		<Link
			href={`/${mediaType}/detail/${response.slug}/${data.id}`}
			className="w-80 rounded-md group hover:scale-110 transition-all hover:cursor-pointer"
		>
			{/* Movies Poster */}
			<img
				src={response.poster}
				alt={response.name}
				className="group-hover:hidden group-hover:scale-0 transition-all rounded-md w-80 h-[28rem]"
			/>
			{/* Detail Movies */}
			<div className="hidden bg-[#16181f] group-hover:flex h-[28rem] flex-col rounded-md transition-all">
				<img
					src={response.backdrop}
					alt={response.name}
					className="rounded-t-md"
				/>
				<div className="py-3 px-4">
					<h3 className="text-white text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
						{response.name}
					</h3>
					<div className="py-1 flex flex-row gap-2">
						<p className="text-[#8c95af] text-sm">
							{response.year}
						</p>
						<p className="text-[#8c95af] text-sm">&#x2022;</p>
						<p className="text-[#8c95af] text-sm">
							{response.countries}
						</p>
						<p className="text-[#8c95af] text-sm">&#x2022;</p>
						<p className="text-[#8c95af] text-sm">
							{response.rating}
						</p>
						<p className="text-[#8c95af] text-sm">&#x2022;</p>
						<p className="text-[#8c95af] text-sm">
							{response.adult}
						</p>
					</div>
					<p className="text-[#8c95af] text-md h-[170px] overflow-clip text-ellipsis">
						{response.overview}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default AllCards;
