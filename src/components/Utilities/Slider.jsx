"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

const Slider = ({ children }) => {
	useEffect(() => {
		var sliders = document.querySelectorAll(".glide-01");

		sliders.forEach((item) => {
			new Glide(item, {
				animationDuration: 100,
				type: "slider",
				bound: true,
				focusAt: 0,
				rewind: false,
				perView: 6,
				gap: 10,
				breakpoints: {
					576: { perView: 1 },
					768: { perView: 2 },
					1024: { perView: 3 },
					1444: { perView: 4 },
					1660: { perView: 5 },
				},
			}).mount();
		});
	}, []);

	return (
		<div className="relative ml-7 glide-01 group/controls">
			{/*    <!-- Slides --> */}
			<div
				className="overflow-hidden py-5 pl-[10px] z-20 pr-5"
				data-glide-el="track"
			>
				<ul className="whitespace-no-wrap flex-no-wrap flex justify-center items-center w-full">
					{children}
				</ul>
			</div>

			<div
				className="opacity-0 group-hover/controls:opacity-100 transition-all duration-500"
				data-glide-el="controls"
			>
				<button
					className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#0f1014] to-transparent pl-6 pr-16 z-0"
					data-glide-dir="<"
					aria-label="prev slide"
				>
					<i className="fa-solid fa-chevron-left text-white text-3xl"></i>
				</button>
				<button
					className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#0f1014] to-transparent pr-6 pl-16 z-0"
					data-glide-dir=">"
					aria-label="next slide"
				>
					<i className="fa-solid fa-chevron-right text-white text-3xl"></i>
				</button>
			</div>

			{/*    <!-- Controls --> */}
			{/* <div
				className="absolute right-0 group-hover/controls:opacity-100 flex opacity-100 pl-5 items-center justify-between w-full top-1/2 z-10 transition-all h-0 bg-black"
				data-glide-el="controls"
			>
				<button
					className="inline-flex items-center justify-center w-16 h-96 text-white transition duration-300 "
					data-glide-dir="<"
					aria-label="prev slide"
				>
					<i className="fa-solid fa-chevron-left text-3xl"></i>
				</button>
				<button
					className="inline-flex items-center justify-center w-16 h-96 text-white transition duration-300 "
					data-glide-dir=">"
					aria-label="next slide"
				>
					<i className="fa-solid fa-chevron-right text-3xl"></i>
				</button>
			</div> */}
		</div>
	);
};

export default Slider;
