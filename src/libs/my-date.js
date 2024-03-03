export class MyDate {
	constructor(before) {
		this.date = new Date(before);
	}

	formatYYYYMMDD = () => {
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		const formatted = this.date.toLocaleDateString("en-US", options);
		return formatted;
	};

	getAge = () => {
		var today = new Date();
		var age = today.getFullYear() - this.date.getFullYear();
		var month = today.getMonth() - this.date.getMonth();
		if (month < 0 || (month === 0 && today.getDate() < this.date.getDate()))
			age--;
		return age;
	};

	getHoursMinutes = (runtime) => {
		const hours = Math.floor(runtime / 60);
		const minutes = runtime % 60;
		return {
			hours: hours,
			minutes: minutes,
		};
	};
}
