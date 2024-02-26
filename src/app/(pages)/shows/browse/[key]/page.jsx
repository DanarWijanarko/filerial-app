import React from "react";

const Shows = ({ params }) => {
	function UrlsName(url) {
		var str = url.replace(/-/g, " ");
		var splitStr = str.toLowerCase().split(" ");
		for (var i = 0; i < splitStr.length; i++) {
			splitStr[i] =
				splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(" ");
	}

	return (
		<div className="text-white text-3xl font-bold">
			<h1>Series Pages Country : {UrlsName(params.key)}</h1>
		</div>
	);
};

export default Shows;
