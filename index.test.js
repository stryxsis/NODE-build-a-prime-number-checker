const assert = require("node:assert/strict");
const prime = require("./index.js");

assert.strictEqual(prime.isPrime(0), false);
assert.strictEqual(prime.isPrime(1), false);
assert.strictEqual(prime.isPrime(4), false);
assert.strictEqual(prime.isPrime(6), false);
assert.strictEqual(prime.isPrime(8), false);
assert.strictEqual(prime.isPrime(9), false);
assert.strictEqual(prime.isPrime(10), false);
assert.strictEqual(prime.isPrime(-1), false);
assert.strictEqual(prime.isPrime(-2), false);
assert.strictEqual(prime.isPrime(-3), false);
assert.strictEqual(prime.isPrime(-4), false);
assert.strictEqual(prime.isPrime(-5), false);
assert.strictEqual(prime.isPrime(-6), false);
assert.strictEqual(prime.isPrime(-7), false);
assert.strictEqual(prime.isPrime(-8), false);
assert.strictEqual(prime.isPrime(-9), false);
assert.strictEqual(prime.isPrime(-10), false);
assert.strictEqual(prime.isPrime(-11), false);

assert.strictEqual(prime.isPrime(2), true);
assert.strictEqual(prime.isPrime(3), true);
assert.strictEqual(prime.isPrime(5), true);
assert.strictEqual(prime.isPrime(7), true);
assert.strictEqual(prime.isPrime(11), true);
