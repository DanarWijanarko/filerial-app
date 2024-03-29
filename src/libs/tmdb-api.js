import axios from "axios";
import { getCountryName } from "./country-iso";

const apiKey = process.env.NEXT_PUBLIC_APIKEY;
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
export const baseImgUrl = process.env.NEXT_PUBLIC_BASEIMGURL;

export const getAllTrending = async () => {
	const response = await axios.get(`${baseUrl}/trending/all/day`, {
		params: {
			api_key: apiKey,
		},
	});
	return response.data.results;
};

export const getListFromCompany = async (company_id, media_type, page) => {
	const response = await axios.get(`${baseUrl}/discover/${media_type}`, {
		params: {
			api_key: apiKey,
			include_adult: false,
			include_null_first_air_dates: false,
			with_companies: company_id,
			sort_by: "popularity.desc",
			page: page,
		},
	});
	return response.data.results;
};

export class Search {
	multi = async (query) => {
		const response = await axios.get(`${baseUrl}/search/multi`, {
			params: {
				api_key: apiKey,
				query: query,
				page: "1",
			},
		});
		return response.data.results;
	};

	company = async (query) => {
		const response = await axios.get(`${baseUrl}/search/company`, {
			params: {
				api_key: apiKey,
				query: query,
				page: "1",
			},
		});
		return response.data.results;
	};

	person = async (query) => {
		const response = await axios.get(`${baseUrl}/search/person`, {
			params: {
				api_key: apiKey,
				query: query,
				page: "1",
			},
		});
		return response.data.results;
	};
}

export class Series {
	getDiscovered = async (year, country, page) => {
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

	getDetails = async (series_id) => {
		const response = await axios.get(`${baseUrl}/tv/${series_id}`, {
			params: {
				api_key: apiKey,
			},
		});
		return response.data;
	};

	getCredits = async (series_id) => {
		const response = await axios.get(`${baseUrl}/tv/${series_id}/credits`, {
			params: {
				api_key: apiKey,
			},
		});
		return response.data;
	};

	getEpisodes = async (series_id, season_number) => {
		const response = await axios.get(
			`${baseUrl}/tv/${series_id}/season/${season_number}`,
			{
				params: {
					api_key: apiKey,
				},
			}
		);
		return response.data.episodes;
	};

	getRecommendations = async (series_id) => {
		const response = await axios.get(
			`${baseUrl}/tv/${series_id}/recommendations`,
			{
				params: {
					api_key: apiKey,
				},
			}
		);
		return response.data.results;
	};

	getWhereToWatch = async (series_id) => {
		const response = await axios.get(
			`${baseUrl}/tv/${series_id}/season/1/watch/providers`,
			{
				params: {
					api_key: apiKey,
				},
			}
		);
		return response.data.results;
	};

	getVideos = async (series_id) => {
		const response = await axios.get(`${baseUrl}/tv/${series_id}/videos`, {
			params: {
				api_key: apiKey,
			},
		});
		return response.data.results;
	};
}

export class Person {
	constructor(person_id) {
		this.id = person_id;
	}

	getDetail = async () => {
		const response = await axios.get(`${baseUrl}/person/${this.id}`, {
			params: {
				api_key: apiKey,
			},
		});
		return response.data;
	};

	getImageList = async () => {
		const response = await axios.get(
			`${baseUrl}/person/${this.id}/images`,
			{
				params: {
					api_key: apiKey,
				},
			}
		);
		return response.data.profiles;
	};

	getSeriesList = async () => {
		const response = await axios.get(
			`${baseUrl}/person/${this.id}/tv_credits`,
			{
				params: {
					api_key: apiKey,
				},
			}
		);
		return response.data.cast;
	};

	getMoviesList = async () => {
		const response = await axios.get(
			`${baseUrl}/person/${this.id}/movie_credits`,
			{
				params: {
					api_key: apiKey,
				},
			}
		);
		return response.data.cast;
	};
}

export class Movies {
	getDiscovered = async (year, country, page) => {
		const response = await axios.get(`${baseUrl}/discover/movie`, {
			params: {
				api_key: apiKey,
				primary_release_year: year,
				with_origin_country: country,
				sort_by: "popularity.desc",
				page: page,
			},
		});
		return response.data.results;
	};

	getTrending = async () => {
		const response = await axios.get(`${baseUrl}/trending/movie/day`, {
			params: {
				api_key: apiKey,
			},
		});
		return response.data.results;
	};

	getCountry = async (movie_id) => {
		const response = await axios.get(`${baseUrl}/movie/${movie_id}`, {
			params: {
				api_key: apiKey,
			},
		});
		return getCountryName(response.data.production_countries[0].iso_3166_1);
	};

	getDetail = async (movie_id) => {
		const response = await axios.get(`${baseUrl}/movie/${movie_id}`, {
			params: {
				api_key: apiKey,
			},
		});
		return response.data;
	};
}
