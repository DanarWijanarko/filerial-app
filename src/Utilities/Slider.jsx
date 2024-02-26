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
		<>
			<div className="ml-7 relative glide-01 overflow-hidden">
				{/*    <!-- Slides --> */}
				<div className="p-5 z-20 mr-5" data-glide-el="track">
					<ul className="whitespace-no-wrap flex-no-wrap flex justify-center items-center w-full ">
						{children}
					</ul>
				</div>

				{/*    <!-- Controls --> */}
				<div
					className="absolute right-0 flex items-center justify-between w-full h-0 top-1/2 z-10"
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
				</div>
			</div>
		</>
	);
};

export default Slider;
