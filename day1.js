function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
	number = Math.floor(Math.random() * rangeEnd);
	while (number < rangeStart) {
		number = Math.floor(Math.random() * rangeEnd);
	}
	return number;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
