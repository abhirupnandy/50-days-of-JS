const time = '11:8PM';

function convertTo24HrsFormat(time) {
	// write your solution here

	let date = new Date();
	let hours = parseInt(time.split(':')[0]);
	let minutes = parseInt(time.split(':')[1].slice(0, 2).toString().padStart(2, 0));
	let ampm = time.split(':')[1].slice(-2, time.length);
	if (hours === 12 && ampm === 'AM') {
		hours = 0;
	}
	if (hours < 12 && ampm === 'PM') {
		hours += 12;
	}

	date.setHours(hours);
	date.setMinutes(minutes);
	return date.toLocaleTimeString('en-GB', { hour12: false }).replace(/:\d\d$/, '');
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
