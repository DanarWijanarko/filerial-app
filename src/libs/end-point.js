export class EndPoint {
	encodeSlug = (str) => {
		const encoded = str.replace(/ /g, "-").toLowerCase();
		return encoded;
	};

	decodeSlug = (str) => {
		const decoded = str.replace(/-/g, " ");
		return decoded;
	};

	titleCase = (str) => {
		var decoded = this.decodeSlug(str);
		var splitStr = decoded.toLowerCase().split(" ");
		for (var i = 0; i < splitStr.length; i++)
			splitStr[i] =
				splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

		return splitStr.join(" ");
	};
}
