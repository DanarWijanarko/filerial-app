"use client";

import Image from "next/image";

import { baseImgUrl } from "@/libs/tmdb-api";
import { useState } from "react";

const PersonImages = ({ data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [imgSrc, setImgSrc] = useState("");

	const handleOpenModal = (event) => {
		event.preventDefault();
		setImgSrc(event.target.alt);
		setIsModalOpen(true);
	};

	const handleCloseModal = (event) => {
		event.preventDefault();
		setIsModalOpen(false);
	};

	return (
		<>
			<h1 className="text-white text-xl font-medium mb-5 -mt-1">
				Images
			</h1>
			<div className="flex flex-wrap gap-3 justify-center">
				{data.map((image, index) => (
					<Image
						key={index}
						src={baseImgUrl + image.file_path}
						alt={image.file_path}
						width={1000}
						height={1000}
						onClick={handleOpenModal}
						className="w-80 h-80 object-cover object-top rounded-lg hover:cursor-pointer hover:brightness-75 transition-all"
					/>
				))}
			</div>

			{isModalOpen ? (
				<div className="fixed top-0 left-0 z-50 w-full min-h-screen flex justify-center items-center">
					<div className="relative z-50">
						<button
							onClick={handleCloseModal}
							className="absolute top-0 right-0 rounded-tr bg-gray-600/40 w-10 h-10"
						>
							<i className="fa-solid fa-xmark text-white text-3xl"></i>
						</button>
						<Image
							src={baseImgUrl + imgSrc}
							alt="Person-Modal"
							width={1000}
							height={1000}
							className="w-96 h-auto rounded"
						/>
					</div>
					<div
						onClick={handleCloseModal}
						className="fixed top-0 left-0 z-40 w-full min-h-screen bg-black/50"
					/>
				</div>
			) : null}
		</>
	);
};

export default PersonImages;
