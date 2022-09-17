const number = '+919876543210';

function validateMobile(number) {
	// write your solution here

	let regex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
	return regex.test(number);

	return;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
