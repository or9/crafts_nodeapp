// should print numbers 1 through 100
// if Prime, print
// if not prime, print ODD
// if number is not prime and not Odd, print EVEN
// After every number print a new line carriage return

var app = require("./index.js");

exports.setUp = setUp;
exports.tearDown = tearDown;
exports.testPrintsNumber = testPrintsNumber;
exports.testPrintsEven = testPrintsEven;
exports.testPrintsOdd = testPrintsOdd;
exports.testPrintedLength = testPrintedLength;
exports.testMinMax = testMinMax;
exports.testPrime = testPrime;

function testPrime (test) {
	test.expect(3);
	test.equal("", app.prime(63), "prints nothing for non prime number");
	test.equal("PRIME", app.prime(1), "prints PRIME for prime number 1");
	test.equal("PRIME", app.prime(97), "prints PRIME for prime number 97");
	test.done();
}

function testPrintedLength (test) {
	test.expect(1);
	var len = app.printed.length;
	test.strictEqual(len, 100, "should have 100 things");
	test.done();
}

function testMinMax (test) {
	test.expect(2);
	test.ok(app.printed[app.printed.length - 1] === 100, "max is 100");
	test.ok(app.printed[0] === 1, "min is 1");
	test.done();
}

function testPrintsNumber (test) {
	test.expect(1);
	var thing = typeof parseInt(app.print(123), 10);
	test.strictEqual(thing, "number", "to be a number");
	test.done();
}

function testPrintsEven (test) {
	test.expect(1);
	test.strictEqual("EVEN", app.even(2), "expect to print even if it's neither even nor prime");
	test.done();
}

function testPrintsOdd (test) {
	test.expect(1);
	test.strictEqual("ODD", app.even(3), "expect to print even if it's neither even nor prime");
	test.done();
}

function setUp (callback) {
	callback();
}

function tearDown (callback) {
	// cleanup
	callback();
}