"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearching = (event) => {
		const keyword = searchRef.current.value;

		if (event.key === "Enter" || event.type === "click") {
			event.preventDefault();

			if (keyword) {
				router.push(`/search?query=${keyword}`);
			} else {
				router.push(`/search`);
			}
		}
	};

	const displayDelete = () => {
		const deleteBtn = document.querySelector("#btn-delete");
		if (searchRef.current.value.length === 1) {
			deleteBtn.className = "block";
		}
		if (searchRef.current.value.length === 0) {
			deleteBtn.className = "hidden";
		}
	};

	const handleDelete = (event) => {
		event.preventDefault();

		const input = document.querySelector("#search");
		input.value = null;

		displayDelete();
	};

	return (
		<div className="relative">
			<input
				type="text"
				id="search"
				ref={searchRef}
				placeholder="Search Movie, Series, and other..."
				className="block w-full py-5 px-16 bg-[#252833] rounded-lg text-white"
				onChange={displayDelete}
				onKeyDown={handleSearching}
			/>
			<div className="absolute w-full left-0 top-1/2 flex justify-between items-center h-0 text-white px-5 text-2xl">
				<button onClick={handleSearching}>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
				<button
					id="btn-delete"
					className="hidden"
					onClick={handleDelete}
				>
					<i className="fa-solid fa-xmark"></i>
				</button>
			</div>
		</div>
	);
};

export default InputSearch;
