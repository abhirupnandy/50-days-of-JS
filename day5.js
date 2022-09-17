const str = 'XeroX';

function getTheGapX(str) {
	// write your solution here

	const firstX = str.indexOf('X');
	const lastX = str.lastIndexOf('X');
	if (firstX === -1) {
		return -1;
	}
	return lastX - firstX;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
