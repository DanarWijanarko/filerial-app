import Link from "next/link";
import Image from "next/image";

import Slider from "@/components/Utilities/Slider";
import { EndPoint } from "@/libs/endPoint";

const SeriesRecommendations = ({ seriesRecommendations, baseImgUrl }) => {
	return (
		<>
			<h1 className="text-slate-200 text-4xl font-semibold mx-8 mb-3">
				Recommendations
			</h1>

			<Slider>
				{seriesRecommendations.map((recommended) => {
					const countries = recommended.origin_country[0];
					const rating = parseFloat(recommended.vote_average).toFixed(
						1
					);
					const year = new Date(
						recommended.first_air_date
					).getFullYear();
					var adult = "";

					if (recommended.adult == "false") {
						adult = "13+";
					} else {
						adult = "17+";
					}

					const slug = new EndPoint().encodeSlug(recommended.name);

					return (
						<li
							key={recommended.id}
							className="group h-96 rounded-lg hover:scale-110 hover:cursor-pointer bg-[#16181f] transition-all duration-500"
						>
							<Link
								href={`/shows/detail/${slug}/${recommended.id}`}
							>
								<Image
									src={baseImgUrl + recommended.poster_path}
									alt={recommended.name}
									width={350}
									height={550}
									className="group-hover:hidden w-full h-96 rounded-lg object-cover transition-all duration-500"
									priority
								/>
								<div className="hidden group-hover:flex flex-col rounded-lg transition-all duration-500">
									<Image
										src={
											baseImgUrl +
											recommended.backdrop_path
										}
										alt={recommended.name}
										width={350}
										height={250}
										className="w-full h-40 rounded-t-lg object-cover"
										priority
									/>
									<div className="py-3 px-4">
										<h3 className="text-white text-start text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
											{recommended.name}
										</h3>
										<div className="pt-1 pb-2 flex flex-row gap-2">
											<p className="text-[#8c95af] text-md">
												{year}
											</p>
											<p className="text-[#8c95af] text-md">
												&#x2022;
											</p>
											<p className="text-[#8c95af] text-md">
												{countries}
											</p>
											<p className="text-[#8c95af] text-md">
												&#x2022;
											</p>
											<p className="text-[#8c95af] text-md">
												{rating}
											</p>
											<p className="text-[#8c95af] text-md">
												&#x2022;
											</p>
											<p className="text-[#8c95af] text-md">
												{adult}
											</p>
										</div>
										<p className="text-[#8c95af] text-start text-md h-[125px] overflow-clip text-ellipsis">
											{recommended.overview}
										</p>
									</div>
								</div>
							</Link>
						</li>
					);
				})}
			</Slider>
		</>
	);
};

export default SeriesRecommendations;
