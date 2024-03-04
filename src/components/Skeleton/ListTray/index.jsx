"use client";

import React from "react";
import { Skeleton } from "@nextui-org/react";

const ListTraySkeleton = () => {
	return (
		<div className="dark ml-11 pt-8">
			<div className="flex justify-between mr-11">
				<Skeleton className="h-3 w-[185px] rounded-lg" />
				<Skeleton className="h-3 w-[70px] rounded-lg" />
			</div>
			<div className="flex flex-row mt-5 gap-2">
				<Skeleton className="w-[295px] h-[24rem] rounded-md" />
				<Skeleton className="w-[295px] h-[24rem] rounded-md" />
				<Skeleton className="w-[295px] h-[24rem] rounded-md" />
				<Skeleton className="w-[295px] h-[24rem] rounded-md" />
				<Skeleton className="w-[295px] h-[24rem] rounded-md" />
				<Skeleton className="w-[280px] h-[24rem] rounded-md" />
			</div>
		</div>
	);
};

export default ListTraySkeleton;
