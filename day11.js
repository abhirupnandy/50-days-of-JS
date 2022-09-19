function fibonacci(n) {
	// write your solution here
	// without recursion
	let a = 1;
	let b = 1;
	for (let i = 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`);
