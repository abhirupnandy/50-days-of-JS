const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
	// write your solution here
	let newStr = '';
	let words = str.split(' ');
	if (words.length <= wordLimit) {
		return str;
	}
	for (let i = 0; i < wordLimit; i++) {
		newStr += words[i] + ' ';
	}
	return newStr.trim();
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
