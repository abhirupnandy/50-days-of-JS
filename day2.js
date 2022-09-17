const str = 'JavaScript is awesome';

function reverseAString(str) {
	// write your solution here
	newArr = [];
	for (let i = str.length - 1; i >= 0; i--) {
		newArr.push(str[i]);
	}
	return newArr.join('');
}

console.log(`Reversed string is: ${reverseAString(str)}`);
