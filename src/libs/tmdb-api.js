import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_APIKEY;
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
export const baseImgUrl = process.env.NEXT_PUBLIC_BASEIMGURL;

export const searchMulti = async (query) => {
	const response = await axios.get(`${baseUrl}/search/multi`, {
		params: {
			api_key: apiKey,
			query: query,
			page: "1",
		},
	});
	return response.data.results;
};

export const getAllTrending = async () => {
	const response = await axios.get(
		`${baseUrl}/trending/all/day?api_key=${apiKey}`
	);
	return response.data.results;
};

export const getSeriesDiscovered = async (year, country, page) => {
	const response = await axios.get(`${baseUrl}/discover/tv`, {
		params: {
			api_key: apiKey,
			include_adult: false,
			include_null_first_air_dates: false,
			first_air_date_year: year,
			with_origin_country: country,
			sort_by: "popularity.desc",
			page: page,
		},
	});
	return response.data.results;
};

export const getTrendingMovies = async (time_window) => {
	const response = await axios.get(
		`${baseUrl}/trending/movie/${time_window}?api_key=${apiKey}`
	);
	return response.data.results;
};
