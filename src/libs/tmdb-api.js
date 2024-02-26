import axios from "axios";

const apiKey = process.env.NEXT_APIKEY;
const baseUrl = process.env.NEXT_BASEURL;
export const baseImgUrl = process.env.NEXT_BASEIMGURL;

export const getallKoreanSeries = async (page) => {
	const response = await axios.get(
		`${baseUrl}/discover/tv?include_adult=true&include_null_first_air_dates=false&with_origin_country=KR|CN&page=${page}&sort_by=vote_count.desc&api_key=${apiKey}`
	);
	return response.data.results;
};

export const getAllChineseSeries = async (page) => {
	const response = await axios.get(
		`${baseUrl}/discover/tv?include_adult=true&include_null_first_air_dates=false&with_origin_country=CN&page=${page}&sort_by=vote_count.desc&api_key=${apiKey}`
	);
	return response.data.results;
};

export const getTrendingMovies = async (time_window) => {
	const response = await axios.get(
		`${baseUrl}/trending/movie/${time_window}?api_key=${apiKey}`
	);
	return response.data.results;
};
