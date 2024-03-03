import Cards from "@/components/card/CardsSeries";

const PersonSeries = ({ data }) => {
	return (
		<>
			<h1 className="text-white text-xl font-medium mb-5 -mt-1">Drama</h1>
			<div className="flex flex-wrap gap-3 justify-center">
				{data.map((result, index) => (
					<Cards key={index} data={result} />
				))}
			</div>
		</>
	);
};

export default PersonSeries;
