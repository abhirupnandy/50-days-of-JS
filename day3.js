const num = 3849;

function reverseGivenInteger(num) {
	// write your solution here
	reversedNumber = 0;
	while (num > 0) {
		reversedNumber = reversedNumber * 10 + (num % 10);
		num = Math.floor(num / 10);
	}
	return reversedNumber;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
