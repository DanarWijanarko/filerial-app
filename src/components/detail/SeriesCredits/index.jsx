import Link from "next/link";
import Image from "next/image";

import { EndPoint } from "@/libs/end-point";

const SeriesCredits = ({ seriesCredits, baseImgUrl }) => {
	return (
		<>
			<h1 className="text-slate-200 text-4xl font-semibold mx-8">Cast</h1>
			<div className="flex flex-wrap justify-center gap-8 mt-8 mx-8">
				{seriesCredits.cast?.map((credit) => {
					const name = new EndPoint().encodeSlug(credit.name);

					return (
						<Link
							href={`/browse/people/detail?person_name=${name}&person_id=${credit.id}`}
							key={credit.id}
						>
							<div className="bg-[#d3d8ec] flex flex-row rounded-lg">
								<Image
									src={baseImgUrl + credit.profile_path}
									alt={credit.name}
									width={250}
									height={250}
									className="w-24 rounded-l-lg object-cover"
								/>
								<div className="flex flex-col p-4 w-52">
									<h1 className="text-[#252833] text-lg font-semibold mb-2.5">
										{credit.name}
									</h1>
									<h1 className="text-[#252833] text-sm font-medium mb-2.5">
										{credit.character
											? credit.character
											: "-"}
									</h1>
									<h1 className="text-[#252833] text-sm font-medium">
										{credit.gender == 1 ? "Female" : "Male"}
									</h1>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default SeriesCredits;
