import React from "react";

const DetailShow = ({ params }) => {
	return (
		<div>
			<h1 className="text-white text-3xl">Detail Show id : {params.key[1]}, Show Name : {params.key[0]}</h1>
		</div>
	);
};

export default DetailShow;
