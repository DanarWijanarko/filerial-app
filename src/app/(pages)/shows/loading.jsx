"use client";

import ListTraySkeleton from "@/components/Skeleton/ListTray";
import { NextUIProvider } from "@nextui-org/react";

const Loading = () => {
	return (
		<NextUIProvider className="flex min-h-screen flex-col justify-start bg-[#0f1014]">
			<ListTraySkeleton />
			<ListTraySkeleton />
		</NextUIProvider>
	);
};

export default Loading;
