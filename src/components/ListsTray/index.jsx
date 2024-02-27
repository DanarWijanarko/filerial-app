"use client";

import Link from "next/link";
import Image from "next/image";

import Slider from "@/components/Utilities/Slider";

const ListsTray = ({ headerTitle, datas, baseImgUrl }) => {
	const slug = headerTitle.replace(/ /g, "-").toLowerCase();

	return (
		<>
			{/* Headers */}
			<div className="flex justify-between text-xl font-medium mx-11 pt-8">
				<h1 className="text-white">{headerTitle}</h1>
				<Link
					href={`/shows/browse/${slug}`}
					className="text-gray-500 hover:text-white transition-all"
				>
					See All
				</Link>
			</div>

			{/* Slider */}
			<Slider>
				{datas.map((res) => {
					const countries = res.origin_country[0];
					const rating = parseFloat(res.vote_average).toFixed(1);
					const year = new Date(res.first_air_date).getFullYear();
					var adult = "";

					if (res.adult == "false") {
						adult = "13+";
					} else {
						adult = "17+";
					}

					const slug = res.name.replace(/ /g, "-").toLowerCase();

					return (
						<li
							key={res.id}
							className="group h-96 rounded-lg hover:scale-110 hover:cursor-pointer bg-[#16181f] transition-all duration-500"
						>
							<Link href={`/shows/detail/${slug}/${res.id}`}>
								<Image
									src={baseImgUrl + res.poster_path}
									alt={res.name}
									width={350}
									height={550}
									className="group-hover:hidden w-full h-96 rounded-lg object-cover transition-all duration-500"
									priority
								/>
								<div className="hidden group-hover:flex flex-col rounded-lg transition-all duration-500">
									<Image
										src={baseImgUrl + res.backdrop_path}
										alt={res.name}
										width={350}
										height={250}
										className="w-full h-40 rounded-t-lg object-cover"
										priority
									/>
									<div className="py-3 px-4">
										<h3 className="text-white text-start text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
											{res.name}
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
											{res.overview}
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

export default ListsTray;
