import axios from "axios";

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

	collection = async (query) => {
		const response = await axios.get(`${baseUrl}/search/collection`, {
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

	getListFromCompany = async (company_id) => {
		const response = await axios.get(`${baseUrl}/discover/tv`, {
			params: {
				api_key: apiKey,
				include_adult: false,
				include_null_first_air_dates: false,
				with_companies: company_id,
				sort_by: "popularity.desc",
				page: "1",
			},
		});
		return response.data.results;
	};
}

export class Movies {
	getDetail = async (movie_id) => {
		const response = await axios.get(`${baseUrl}/movie/${movie_id}`, {
			params: {
				api_key: apiKey,
			},
		});
		return response.data;
	};

	getListFromCompany = async (company_id) => {
		const response = await axios.get(`${baseUrl}/discover/movie`, {
			params: {
				api_key: apiKey,
				include_adult: false,
				include_null_first_air_dates: false,
				with_companies: company_id,
				sort_by: "popularity.desc",
				page: "1",
			},
		});
		return response.data.results;
	};
}
