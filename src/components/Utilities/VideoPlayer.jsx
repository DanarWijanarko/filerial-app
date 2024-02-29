"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
	const [isOpen, setIsOpen] = useState(videoId === "null" ? false : true);

	const option = {
		width: "680",
		height: "380",
	};

	const handleIsOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<button
				className={`${
					isOpen ? "scale-0" : "scale-100"
				} fixed bottom-3 right-3 bg-[#16181f] px-3 py-1 rounded-full text-white font-bold origin-bottom-right transition-all duration-500`}
				onClick={handleIsOpen}
			>
				Open Trailer
			</button>

			<div
				className={`${
					isOpen ? "scale-100" : "scale-0"
				} fixed bottom-3 right-3 bg-[#16181f] origin-bottom-right transition-all duration-500`}
			>
				<button
					className="absolute right-2 -top-8"
					onClick={handleIsOpen}
				>
					<i className="fa-solid fa-xmark text-2xl text-white"></i>
				</button>
				{videoId === "null" ? (
					<div className="w-[680px] h-[380px] flex justify-center items-center text-white text-2xl">
						Video Not Found
					</div>
				) : (
					<YouTube
						videoId={videoId}
						onReady={(event) => event.target.pauseVideo()}
						opts={option}
					/>
				)}
			</div>
		</>
	);
};

export default VideoPlayer;
