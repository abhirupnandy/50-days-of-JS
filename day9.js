const obj = { a: 1, b: 2 };

function isEmpty(obj) {
	// write your solution here
	return Object.keys(obj).length === 0;
}

console.log(`is empty object: ${isEmpty(obj)}`);
