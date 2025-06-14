export {};

function cachedData(
	target: any,
	property: string,
	descriptor: PropertyDescriptor
) {
	const originalGetter = descriptor.value;
	let cache: string[] = [];
	let lastUpdated: Date | null = null;

	descriptor.value = function () {
		let currentMoment = new Date();
		if (
			!lastUpdated ||
			currentMoment.getTime() - lastUpdated.getTime() > 5000
		) {
			const data = originalGetter?.call(this);
			cache = data.slice();
			lastUpdated = new Date();
			return data;
		} else {
			console.log("Returned from cache");
			return cache;
		}
	};
}

class MockWeatherDataService {
	private weatherData: string[] = [
		"Sunny 8° to 20°",
		"Partially Cloudy 7° to 19°",
		"Sunny 5° to 18°",
	];

	addWeatherData(data: string) {
		this.weatherData.push(data);
	}

	@cachedData
	getWeatherData() {
		return this.weatherData;
	}
}

let service = new MockWeatherDataService();
console.log(service.getWeatherData());
console.log(service.getWeatherData());
service.addWeatherData("Partially Cloudy 5° to 11°");
console.log(service.getWeatherData());

//7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000);
