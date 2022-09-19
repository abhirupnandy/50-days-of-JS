const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	};

	// Your solution starts here
	const earthYearInSeconds = 31557600;
	const earthYearInMercury = 0.2408467;
	const earthYearInVenus = 0.61519726;
	const earthYearInMars = 1.8808158;
	const earthYearInJupiter = 11.862615;
	const earthYearInSaturn = 29.447498;
	const earthYearInUranus = 84.016846;
	const earthYearInNeptune = 164.79132;

	yearsInAllPlanets.Earth = seconds / earthYearInSeconds;
	yearsInAllPlanets.Mercury = yearsInAllPlanets.Earth / earthYearInMercury;
	yearsInAllPlanets.Venus = yearsInAllPlanets.Earth / earthYearInVenus;
	yearsInAllPlanets.Mars = yearsInAllPlanets.Earth / earthYearInMars;
	yearsInAllPlanets.Jupiter = yearsInAllPlanets.Earth / earthYearInJupiter;
	yearsInAllPlanets.Saturn = yearsInAllPlanets.Earth / earthYearInSaturn;
	yearsInAllPlanets.Uranus = yearsInAllPlanets.Earth / earthYearInUranus;
	yearsInAllPlanets.Neptune = yearsInAllPlanets.Earth / earthYearInNeptune;
	// round to 2 decimal places all the values
	for (const planet in yearsInAllPlanets) {
		yearsInAllPlanets[planet] = Number(yearsInAllPlanets[planet].toFixed(2));
	}
	// Your solution ends here

	return yearsInAllPlanets;
};

console.log(spaceAge(Math.round(Math.random() * 99999999)));
