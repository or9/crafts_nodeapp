exports.print = print;
exports.even = even;
exports.prime = prime;
exports.printed = [];

for (var n = 1; n < 101; n++) {
	print(n);

	print("\t");

	print(even(n));
	
	print("\t");

	print(prime(n));

	print("\r\n");

	exports.printed.push(n);
}

function print (thing) {
	thing = thing.toString();
	process.stdout.write(thing);
	return thing;
}

function even (n) {
	var evenOdd = "EVEN";
	
	if (n % 2 !== 0) {
		evenOdd = "ODD";
	}

	return evenOdd;
	
}

function prime (n) {
	var prime = "PRIME";

	for (var i = 2; i < n; i++) {
		if (n % i === 0) {
			prime = "";
			break;
		}
	}

	return prime;
}