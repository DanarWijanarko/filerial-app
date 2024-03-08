"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

const InputSearch = ({ oldFilterValue }) => {
	const searchRef = useRef();
	const filterRef = useRef();
	const filterButtonRef = useRef();

	const router = useRouter();

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [radioValue, setRadioValue] = useState(
		oldFilterValue ? oldFilterValue : "movieSeries"
	);
	const [typeValue, setTypeValue] = useState(null);

	const handleSearching = (event) => {
		const keyword = searchRef.current.value;

		if (event.key === "Enter" || event.type === "click") {
			event.preventDefault();

			if (keyword) {
				router.push(
					`/search?query=${keyword}&filter=${radioValue}${
						typeValue !== null ? `&type=${typeValue}` : ""
					}`
				);
			} else {
				router.push(`/search`);
				setRadioValue("movieSeries");
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

	const handleOpenFilter = (event) => {
		event.preventDefault();
		setIsFilterOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				filterRef.current &&
				!filterRef.current.contains(event.target) &&
				!filterButtonRef.current.contains(event.target)
			) {
				setIsFilterOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const filterValue = (event) => {
		setRadioValue(event.target.value);
	};

	const filterTypeValue = (event) => {
		setTypeValue(event.target.value);
	};

	return (
		<div className="relative">
			{/* Search Input */}
			<input
				type="text"
				id="search"
				ref={searchRef}
				placeholder="Search Movie, Series, and other..."
				autoComplete="off"
				className="block w-full py-5 px-16 bg-[#252833] rounded-lg text-white"
				onChange={displayDelete}
				onKeyDown={handleSearching}
			/>

			{/* Button */}
			<div className="absolute w-full left-0 top-1/2 flex justify-between items-center h-0 text-white px-5 text-2xl">
				{/* Search Button */}
				<button
					onClick={handleSearching}
					className="hover:opacity-70 transition-all"
				>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>

				<div className="flex justify-center items-center gap-5">
					{/* Delete Button */}
					<button
						id="btn-delete"
						className="hidden hover:opacity-70 transition-all"
						onClick={handleDelete}
					>
						<i className="fa-solid fa-xmark"></i>
					</button>

					{/* Show Filter Button */}
					<button
						ref={filterButtonRef}
						className="hover:opacity-70 transition-all"
						onClick={handleOpenFilter}
					>
						<i className="fa-solid fa-filter text-xl"></i>
					</button>
				</div>
			</div>

			{/* Dropdown Filter */}
			<div
				ref={filterRef}
				className={`scale-0 ${
					isFilterOpen ? "scale-100" : "scale-0"
				} origin-top-right absolute right-10 top-12 p-3 space-y-1 rounded-md w-48 bg-gray-700 transition-all duration-200`}
			>
				<div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-600 transition-all">
					<input
						id="radio1"
						type="radio"
						value="movieSeries"
						checked={radioValue === "movieSeries"}
						onChange={filterValue}
						className="bg-transparent"
					/>
					<label
						htmlFor="radio1"
						className="w-full text-sm font-medium text-white"
					>
						Movies & Series
					</label>
				</div>
				<div className="relative flex items-center gap-2 p-2 group/type rounded-md hover:bg-gray-600 transition-all">
					<input
						id="radio2"
						type="radio"
						value="companies"
						checked={radioValue === "companies"}
						onChange={filterValue}
						className="bg-transparent"
					/>
					<label
						htmlFor="radio2"
						className="w-full text-sm font-medium text-white"
					>
						Companies
					</label>
					<div className="absolute scale-0 group-hover/type:scale-100 origin-right right-44 p-3 space-y-1 rounded-md w-48 bg-gray-600 transition-all duration-200">
						<div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-500 transition-all">
							<input
								id="radio4"
								type="radio"
								value="shows"
								checked={typeValue === "shows"}
								onChange={filterTypeValue}
								className="bg-transparent"
							/>
							<label
								htmlFor="radio4"
								className="w-full text-sm font-medium text-white"
							>
								Shows
							</label>
						</div>
						<div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-500 transition-all">
							<input
								id="radio5"
								type="radio"
								value="movies"
								checked={typeValue === "movies"}
								onChange={filterTypeValue}
								className="bg-transparent"
							/>
							<label
								htmlFor="radio5"
								className="w-full text-sm font-medium text-white"
							>
								Movies
							</label>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-600 transition-all">
					<input
						id="radio3"
						type="radio"
						value="persons"
						checked={radioValue === "persons"}
						onChange={filterValue}
						className="bg-transparent"
					/>
					<label
						htmlFor="radio3"
						className="w-full text-sm font-medium text-white"
					>
						Persons
					</label>
				</div>
			</div>
		</div>
	);
};

export default InputSearch;
