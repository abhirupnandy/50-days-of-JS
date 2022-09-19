const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
	// Write your solution here
	const ones = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
	];
	const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const scales = ['thousand', 'million', 'billion', 'trillion'];
	const scale = (n, i) => {
		if (n === 0) return '';
		return `${sayNumberInEnglish(n)} ${scales[i]}`;
	};
	const hundred = (n) => {
		if (n === 0) return '';
		if (n < 20) return ones[n];
		const t = Math.floor(n / 10);
		const o = n % 10;
		if (o === 0) return tens[t];
		return `${tens[t]}-${ones[o]}`;
	};
	const thousand = (n) => {
		if (n === 0) return '';
		const h = Math.floor(n / 100);
		const t = n % 100;
		if (h === 0) return hundred(t);
		if (t === 0) return `${ones[h]} hundred`;
		return `${ones[h]} hundred ${hundred(t)}`;
	};
	const million = (n) => {
		if (n === 0) return '';
		const t = Math.floor(n / 1000);
		const h = n % 1000;
		if (t === 0) return thousand(h);
		if (h === 0) return `${thousand(t)} thousand`;
		return `${thousand(t)} thousand ${thousand(h)}`;
	};
	const billion = (n) => {
		if (n === 0) return '';
		const m = Math.floor(n / 1000000);
		const t = n % 1000000;
		if (m === 0) return million(t);
		if (t === 0) return `${million(m)} million`;
		return `${million(m)} million ${million(t)}`;
	};
	const trillion = (n) => {
		if (n === 0) return '';
		const b = Math.floor(n / 1000000000);
		const m = n % 1000000000;
		if (b === 0) return billion(m);
		if (m === 0) return `${billion(b)} billion`;
		return `${billion(b)} billion ${billion(m)}`;
	};
	return trillion(n);
};

console.log(`5642170 in english is: ${sayNumberInEnglish(5642170)}`);
