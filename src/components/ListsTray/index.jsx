"use client";

import Link from "next/link";
import Image from "next/image";

import Slider from "@/components/Utilities/Slider";
import { Responses } from "@/libs/response";
import React from "react";

const ListsTray = ({ headerTitle, headerHref, mediaType, datas }) => {
	return (
		<>
			{/* Headers */}
			<div className="flex justify-between text-xl font-medium mx-11 pt-8">
				<h1 className="text-white">{headerTitle}</h1>
				<Link
					href={headerHref}
					className="text-gray-500 hover:text-white transition-all"
				>
					See All
				</Link>
			</div>

			{/* Slider */}
			<Slider>
				{datas.map((res) => {
					const response = Responses(res);

					return (
						<li
							key={res.id}
							className="group h-96 rounded-lg hover:scale-110 hover:cursor-pointer bg-[#16181f] transition-all duration-500"
						>
							<Link
								href={`/${mediaType}/detail/${response.slug}/${res.id}`}
							>
								<Image
									src={response.poster}
									alt={response.name}
									width={350}
									height={550}
									className="group-hover:hidden w-full h-96 rounded-lg object-cover transition-all duration-500"
									priority
								/>
								<div className="hidden group-hover:flex flex-col rounded-lg transition-all duration-500">
									<Image
										src={response.backdrop}
										alt={response.name}
										width={350}
										height={250}
										className="w-full h-40 rounded-t-lg object-cover"
										priority
									/>
									<div className="py-3 px-4">
										<h3 className="text-white text-start text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
											{response.name}
										</h3>
										<div className="py-2 flex flex-row gap-2">
											<p className="text-[#8c95af] text-sm">
												{response.year}
											</p>
											<p className="text-[#8c95af] text-sm">
												&#x2022;
											</p>
											<p className="text-[#8c95af] text-sm">
												{response.countries}
											</p>
											<p className="text-[#8c95af] text-sm">
												&#x2022;
											</p>
											<p className="text-[#8c95af] text-sm">
												{response.rating}
											</p>
											<p className="text-[#8c95af] text-sm">
												&#x2022;
											</p>
											<p className="text-[#8c95af] text-sm">
												{response.adult}
											</p>
										</div>
										<p className="text-[#8c95af] text-start text-md h-[125px] overflow-clip text-ellipsis">
											{response.overview}
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
