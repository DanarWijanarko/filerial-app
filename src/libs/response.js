import { getCountryName } from "./country-iso";

const baseImgUrl = process.env.NEXT_PUBLIC_BASEIMGURL;

export const Responses = (res) => {
	const poster = baseImgUrl + res.poster_path;
	const backdrop = baseImgUrl + res.backdrop_path;
	const name = res.name ? res.name : res.title;
	const countries = res.origin_country
		? getCountryName(res.origin_country[0])
		: res.original_language;
	const rating = parseFloat(res.vote_average).toFixed(1);
	const year = new Date(
		res.first_air_date ? res.first_air_date : res.release_date
	).getFullYear();
	const overview = res.overview;
	const slug = name.replace(/ /g, "-").toLowerCase();

	let adult = "";

	if (res.adult == "false") {
		adult = "17+";
	} else {
		adult = "13+";
	}

	return {
		poster: poster ? poster : "/",
		backdrop: backdrop ? backdrop : "/",
		name: name ? name : "Empty",
		countries: countries ? countries : "Empty",
		rating: rating ? rating : "Empty",
		year: year ? year : "Empty",
		overview: overview ? overview : "Empty",
		slug: slug,
		adult: adult,
	};
};
